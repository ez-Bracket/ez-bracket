import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const DashboardMain = () => {
  const {user} = useContext(UserContext)
  console.log(user);
  
  return <div>
    
  </div>;
};
