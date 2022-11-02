
import { Api } from "../services/Api";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface iUserContextProps {
    children: React.ReactNode;
}

interface IuserContext {
    user: IuserApiLoginResp | null
    Login: (data: IuserDataLogin) => void;
    Register: (data: IuserDataRegister) => void;
}

interface IuserDataRegister  {
    email: string,
    name: string,
    password: string,
    imageUrl: string
}

interface IuserApiRegisterResp {
    accessToken: string,
    user: {
	    email: string,
	    name: string,
	    imageUrl:string,
	    id: string
  }
}

interface IuserDataLogin {
    email: string,
    password: string
}

interface IuserApiLoginResp {
    accessToken: string,
    user: {
        email: string,
        name: string,
        imageUrl:string,
        id: string
    }
}

export const UserContext = createContext<IuserContext>({} as IuserContext);

export const UserProvider = ({children}: iUserContextProps) => {

    const [user, setUser] = useState <IuserApiLoginResp | null > (null)

    const Login = async (data: IuserDataLogin) => {
        try {
            const resp  = await Api.post <IuserApiLoginResp> ('login', data)
                window.localStorage.clear()
                window.localStorage.setItem("@EZ:TOKEN", resp.data.accessToken)
                window.localStorage.setItem("@EZ:USERID", resp.data.user.id)
                setUser(resp.data)
        } catch (error) {
            console.log(error)
        }
    } 

    const Register = async (data: IuserDataRegister) => {
        try {
            const res = await Api.post <IuserApiRegisterResp> ('register', data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    } 


    return (
        <UserContext.Provider value={{Login, Register, user}}>
            {children}
        </UserContext.Provider>
    )

}

