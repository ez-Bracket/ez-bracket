import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Utilities
import { Api } from "../services/Api";

// Components
import { CustomToast } from "../components/Toast";

interface iUserContextProps {
  children: React.ReactNode;
}

interface IuserContext {
  isLoading: boolean;
  isRegisterSuccess: boolean;
  user: IuserApiGet[];
  isLogged: boolean;
  Login: (data: IuserDataLogin) => void;
  Register: (data: IuserDataRegister) => void;
  Logout: () => void;
  EditUser: (data: IdataEditUser) => void;

  LoadUser: () => void;
  setIsRegisterSuccess: React.Dispatch<
    React.SetStateAction<boolean>
  >;
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

interface IuserApiGet {
  confirmPassword: string;
  email: string;
  id: number;
  imgUrl: string;
  name: string;
  password: string;
  competition: [];
}

interface IdataEditUser {
  email?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
  imgUrl?: string;
}

interface IapiEditResp {
  email: string;
  password: string;
  name: string;
  imageUrl: string;
  id: number;
}

export const UserContext = createContext<IuserContext>(
  {} as IuserContext
);

export const UserProvider = ({
  children,
}: iUserContextProps) => {
  const [user, setUser] = useState<IuserApiGet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(
    !!localStorage.getItem("@EZ:TOKEN")
  );
  const navigate = useNavigate();
  const { toastify } = CustomToast();

  const LoadUser = async () => {
    const token = localStorage.getItem("@EZ:TOKEN");
    const id = localStorage.getItem("@EZ:USERID");

    if (token) {
      setIsLoading(true);
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const res = await Api.get<IuserApiGet>(
          `users/${id}`
        );

        setUser([res.data]);
        setIsLogged(true);
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    LoadUser();
  }, []);

  const Login = async (data: IuserDataLogin) => {
    try {
      setIsLoading(true);

      const res = await Api.post<IuserApiLoginResp>(
        "login",
        data
      );
      localStorage.clear();
      localStorage.setItem(
        "@EZ:TOKEN",
        res.data.accessToken
      );
      localStorage.setItem("@EZ:USERID", res.data.user.id);

      LoadUser();
      navigate("/dashboard");
      toastify({
        description: "Login realizado com sucesso!",
        status: "success",
      });
    } catch (error) {
      toastify({
        description:
          "E-mail ou senha inválido, tente novamente!",

        status: "error",
      });
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  const [isRegisterSuccess, setIsRegisterSuccess] =
    useState(false);

  const Register = async (data: IuserDataRegister) => {
    try {
      await Api.post<IuserApiRegisterResp>(
        "register",
        data
      );
      setIsRegisterSuccess(true);

      toastify({
        description: "Usuário cadastrado com sucesso!",
        status: "success",
      });
    } catch (error) {
      toastify({
        description:
          "Ops, algo deu errado tente novamente!",
        status: "error",
      });
      setIsRegisterSuccess(false);
      return error;
    }
  };

  const EditUser = async (data: IdataEditUser) => {
    const token = localStorage.getItem("@EZ:TOKEN");
    const id = localStorage.getItem("@EZ:USERID");
    try {
      Api.defaults.headers.authorization = `Bearer ${token}`;
      await Api.patch<IapiEditResp>(`user/${id}`, data);
    } catch (error) {
      toastify({
        description:
          "Ops, algo deu errado tente novamente!",
        status: "error",
      });
      return error;
    }
  };

  const Logout = () => {
    setUser([]);

    setIsLogged(false);
    localStorage.removeItem("@EZ:TOKEN");
    localStorage.removeItem("@EZ:USERID");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        Login,
        Register,
        Logout,

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
