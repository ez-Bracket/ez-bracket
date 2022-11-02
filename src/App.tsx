import { useContext, useEffect } from 'react';
import { UserContext } from './contexts/UserContext';
import { RoutesApp } from './routes';
import './styles/main.css';

export const App = () => {

  const {Login, Register, user} = useContext(UserContext)

  useEffect(() => {
    Login({
      email: "victorteste@gmail.com",
      password: "teste123",
    })
    console.log(user)
  }, []) 

  return (
    <div>
      <RoutesApp />
    </div>
  );
};
