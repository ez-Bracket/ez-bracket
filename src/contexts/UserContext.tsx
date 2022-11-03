import { Api } from '../services/Api';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomToast } from '../components/Toast';

interface iUserContextProps {
  children: React.ReactNode;
}

interface IuserContext {
  isLoading: boolean;
  user: IuserApiLoginResp | null;
  Login: (data: IuserDataLogin) => void;
  Register: (data: IuserDataRegister) => void;
}

interface IuserDataRegister {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  imgUrl?: string;
}

interface IuserApiRegisterResp {
  accessToken: string;
  user: {
    email: string;
    name: string;
    imgUrl?: string;
    id: string;
  };
}

interface IuserDataLogin {
  email: string;
  password: string;
}

interface IuserApiLoginResp {
  accessToken: string;
  user: {
    email: string;
    name: string;
    imgUrl?: string;
    id: string;
  };
}

export const UserContext = createContext<IuserContext>({} as IuserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<IuserApiLoginResp | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toastify } = CustomToast();

  const Login = async (data: IuserDataLogin) => {
    try {
      setIsLoading(true);
      const resp = await Api.post<IuserApiLoginResp>('login', data);
      window.localStorage.clear();
      window.localStorage.setItem('@EZ:TOKEN', resp.data.accessToken);
      window.localStorage.setItem('@EZ:USERID', resp.data.user.id);
      setUser(resp.data);
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

  const Register = async (data: IuserDataRegister) => {
    try {
      await Api.post<IuserApiRegisterResp>('register', data);

      toastify({
        description: 'Usuário cadastrado com sucesso!',
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

  return (
    <UserContext.Provider value={{ Login, Register, user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
