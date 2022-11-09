import { createContext, Dispatch, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Utilities
import { Api } from '../services/Api';

// Components
import { CustomToast } from '../components/Toast';

interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserContext {
  isLoading: boolean;
  isRegisterSuccess: boolean;
  user: IUserApiGet[];
  setUser: Dispatch<React.SetStateAction<IUserApiGet[]>>;
  isLogged: boolean;
  Login: (data: IUserDataLogin) => void;
  Register: (data: IUserDataRegister) => void;
  Logout: () => void;
  EditUser: (data: IDataEditUser) => void;

  LoadUser: () => void;
  setIsRegisterSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUserDataRegister {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  imgUrl?: string;
}

interface IUserApiRegisterResp {
  accessToken: string;
  user: {
    email: string;
    name: string;
    imgUrl?: string;
    id: string;
  };
}

interface IUserDataLogin {
  email: string;
  password: string;
}

interface IUserApiLoginResp {
  accessToken: string;
  user: {
    email: string;
    name: string;
    imgUrl?: string;
    id: string;
  };
}

interface IUserApiGet {
  confirmPassword: string;
  email: string;
  id: number;
  imgUrl: string;
  name: string;
  password: string;
  competition: [];
}

interface IDataEditUser {
  email?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
  imgUrl?: string;
}

interface IApiEditResp {
  email: string;
  password: string;
  name: string;
  imageUrl: string;
  id: number;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [user, setUser] = useState<IUserApiGet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('@EZ:TOKEN'));
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const navigate = useNavigate();
  const { toastify } = CustomToast();

  const LoadUser = async () => {
    const token = localStorage.getItem('@EZ:TOKEN');
    const id = localStorage.getItem('@EZ:USERID');

    if (token) {
      setIsLoading(true);
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const res = await Api.get<IUserApiGet>(`users/${id}`);
        setUser([res.data]);
        setIsLogged(true);
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    LoadUser();
  }, []);

  const Login = async (data: IUserDataLogin) => {
    try {
      setIsLoading(true);
      const res = await Api.post<IUserApiLoginResp>('login', data);
      localStorage.clear();
      localStorage.setItem('@EZ:TOKEN', res.data.accessToken);
      localStorage.setItem('@EZ:USERID', res.data.user.id);

      LoadUser();
      navigate('/dashboard');
      toastify({
        description: 'Login realizado com sucesso!',
        status: 'success',
      });
    } catch (error) {
      toastify({
        description: 'E-mail ou senha inválido, tente novamente!',
        status: 'error',
      });
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  const Register = async (data: IUserDataRegister) => {
    try {
      await Api.post<IUserApiRegisterResp>('register', data);
      setIsRegisterSuccess(true);

      toastify({
        description: 'Usuário cadastrado com sucesso!',
        status: 'success',
      });
    } catch (error) {
      toastify({
        description: 'Ops, algo deu errado tente novamente!',
        status: 'error',
      });
      setIsRegisterSuccess(false);
      return error;
    }
  };

  const EditUser = async (data: IDataEditUser) => {
    const token = localStorage.getItem('@EZ:TOKEN');
    const id = localStorage.getItem('@EZ:USERID');
    try {
      Api.defaults.headers.authorization = `Bearer ${token}`;
      await Api.patch<IApiEditResp>(`users/${id}`, data);
      LoadUser();
      toastify({
        description: 'Informações do usuário atualizada(s) com sucesso!',
        status: 'success',
      });
    } catch (error) {
      toastify({
        description: 'Ops, algo deu errado tente novamente!',
        status: 'error',
      });
      return error;
    }
  };

  const Logout = () => {
    setUser([]);
    setIsLogged(false);
    localStorage.removeItem('@EZ:TOKEN');
    localStorage.removeItem('@EZ:USERID');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        Login,
        Register,
        Logout,
        setUser,
        LoadUser,
        isLogged,
        user,
        isLoading,
        EditUser,
        isRegisterSuccess,
        setIsRegisterSuccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
