import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { DashboardMenu } from '../../components/DashboardMenu';
import { InfoUserModal } from '../../components/ModalInfoUser';
import { NewCampModal } from '../../components/ModalNewCamp';
import { ModalRegister } from '../../components/ModalRegister';
import { UserContext } from '../../contexts/UserContext';
import { DashboardMain } from '../../components/DashboardMain';

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user.length > 0 ? (
        <div className="bg-gray-300 h-screen">
          <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
          <section className="py-10 tablet:py-20 bg-gray-300">
            <DashboardMenu />
            <DashboardMain />
          </section>
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
      <InfoUserModal />
      <ModalRegister
        title="Edite sua conta"
        buttonDesc="Editar"
      />
      <NewCampModal />
    </>
  );
};
