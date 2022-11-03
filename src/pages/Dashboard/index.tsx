import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DashboardMenu } from "../../components/DashboardMenu";
import { UserContext } from "../../contexts/UserContext";
import { DashboardTournament } from "../../components/DashboardTournament";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user.length > 0 ? (
        <div className="bg-gray-300 h-screen w-screen">
          <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10"></div>
          <DashboardTournament />
          <DashboardMenu />
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
