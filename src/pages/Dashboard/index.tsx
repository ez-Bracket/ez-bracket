import { useContext } from "react";

// Utilities
import { UserContext } from "../../contexts/UserContext";
import { useProtectedRoutes } from "../../hooks/useProtectedRoutes";

// Components
import { DashboardMenu } from "../../components/DashboardComponents/DashboardMenu";
import { InfoUserModal } from "../../components/Modals/ModalInfoUser";
import { NewCampModal } from "../../components/Modals/ModalNewCamp";
import { ModalRegister } from "../../components/Modals/ModalRegister";
import { DashboardMain } from "../../components/DashboardComponents/DashboardMain";
import { ModalDeleteCamp } from "../../components/Modals/ModalDeleteCamp";
import { ModalEdit } from "../../components/Modals/ModalEditUser";

export const Dashboard = () => {
  const { isLogged } = useContext(UserContext);
  useProtectedRoutes(isLogged, true);

  return (
    <>
      <div className="bg-gray-300 h-screen">
        <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
        <section className="py-10 tablet:py-20 bg-gray-300">
          <DashboardMenu />
          <DashboardMain />
        </section>
      </div>
      <InfoUserModal />
      <ModalRegister />
      <ModalEdit />
      <NewCampModal />
      <ModalDeleteCamp />
    </>
  );
};
