import { useContext } from "react";
import { Navigate } from "react-router-dom";

// Utilities
import { UserContext } from "../../contexts/UserContext";

// Components
import { DashboardMenu } from "../../components/DashboardMenu";
import { DashboardTournament } from "../../components/DashboardTournament";
import { InfoUserModal } from "../../components/ModalInfoUser";
import { NewCampModal } from "../../components/ModalNewCamp";
import { ModalRegister } from "../../components/ModalRegister";

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

      <InfoUserModal />
      <ModalRegister title="Edite sua conta" />
      <NewCampModal />
    </>
  );
};
