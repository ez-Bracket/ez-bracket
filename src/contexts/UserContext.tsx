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
  user: IuserApiGet[];
  Login: (data: IuserDataLogin) => void;
  Register: (data: IuserDataRegister) => void;
  Logout: () => void;
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

export const UserContext = createContext<IuserContext>(
  {} as IuserContext
);

export const UserProvider = ({
  children,
}: iUserContextProps) => {
  const [user, setUser] = useState<IuserApiGet[]>([]);

  const [isLoading, setIsLoading] = useState(false);

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
          `users/${id}?_embed=competition`
        );

        setUser([res.data]);
        navigate("/dashboard");
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    LoadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Login = async (data: IuserDataLogin) => {
    try {
      setIsLoading(true);
      const resp = await Api.post<IuserApiLoginResp>(
        "login",
        data
      );
      window.localStorage.clear();
      window.localStorage.setItem(
        "@EZ:TOKEN",
        resp.data.accessToken
      );
      window.localStorage.setItem(
        "@EZ:USERID",
        resp.data.user.id
      );
      LoadUser();
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

  const Register = async (data: IuserDataRegister) => {
    try {
      await Api.post<IuserApiRegisterResp>(
        "register",
        data
      );

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
      return error;
    }
  };

  const Logout = () => {
    setUser([]);
    window.localStorage.removeItem("@EZ:TOKEN");
    window.localStorage.removeItem("@EZ:USERID");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ Login, Register, Logout, user, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
