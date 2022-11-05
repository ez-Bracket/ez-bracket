import { UserMenu } from '../../components/UserMenu';
import { DashboardMain } from '../../components/Dashboard Components/DashboardMain';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useProtectedRoutes } from '../../hooks/useProtectedRoutes';
import { InfoUserModal } from '../../components/Modals/ModalInfoUser';
import { ModalRegister } from '../../components/Modals/ModalRegister';
import { ModalEdit } from '../../components/Modals/ModalEditUser';
import { NewCampModal } from '../../components/Modals/ModalNewCamp';
import { ModalDeleteCamp } from '../../components/Modals/ModalDeleteCamp';

export const Dashboard = () => {
  const { isLogged } = useContext(UserContext);
  useProtectedRoutes(isLogged, true);

  return (
    <>
      <div className="bg-gray-300 h-screen">
        <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
        <section className="py-10 tablet:py-20 bg-gray-300">
          <UserMenu />
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
