import { DashboardMenu } from '../../components/DashboardMenu';
import { InfoUserModal } from '../../components/ModalInfoUser';
import { NewCampModal } from '../../components/ModalNewCamp';
import { ModalRegister } from '../../components/ModalRegister';
import { DashboardMain } from '../../components/DashboardMain';
import { ModalDeleteCamp } from '../../components/ModalDeleteCamp';
import { ModalEdit } from '../../components/ModalEditUser';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useProtectedRoutes } from '../../hooks/useProtectedRoutes';

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
