import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DashboardMenu } from "../../components/DashboardMenu";
import { InfoUserModal } from "../../components/ModalInfoUser";
import { NewCampModal } from "../../components/ModalNewCamp";
import { ModalRegister } from "../../components/ModalRegister";
import { UserContext } from "../../contexts/UserContext";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user.length > 0 ? (
        <div className="bg-gray-300 h-screen w-screen">
          <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10"></div>
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
