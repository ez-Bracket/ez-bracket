import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const Dashboard = () => {
 
  const { user } = useContext(UserContext)



  return (
    <>
      {
        user.length > 0 ? 
          <div>Dashboard</div>
          :
        <Navigate to="/"/>
      }
    </>
  );
};
