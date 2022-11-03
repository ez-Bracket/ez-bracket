import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { NewCampModal } from '../../components/ModalNewCamp';
import { UserContext } from '../../contexts/UserContext';

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <div>
          Dashboard <NewCampModal />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
