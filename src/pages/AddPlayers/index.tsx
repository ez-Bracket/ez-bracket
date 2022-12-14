import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Utilities
import { useProtectedRoutes } from '../../hooks/useProtectedRoutes';
import { UserContext } from '../../contexts/UserContext';
import { CampConext, ICamp } from '../../contexts/CampContext';
import { Api } from '../../services/Api';

// Components
import { AddPlayerForm } from '../../components/AddPlayerForm';
import { CampInfo } from '../../components/CampInfo';
import { UserMenu } from '../../components/UserMenu';
import { PlayersList } from '../../components/PlayersList';
import { InfoUserModal } from '../../components/Modals/ModalInfoUser';
import { ModalEdit } from '../../components/Modals/ModalEditUser';
import { NewCampModal } from '../../components/Modals/ModalNewCamp';
import { InfoModal } from '../../components/Modals/ModalInfoCamp';

interface iPlayerList {
  player: string;
  playerImg?: string;
}

export const AddPlayers = () => {
  const [playersList, setPlayersList] = useState<iPlayerList[]>([]);
  const [currentCamp, setCurrentCamp] = useState<ICamp | null>(null);
  const navigate = useNavigate();
  const idCamp = useParams();
  const { addPlayersCompetition } = useContext(CampConext);
  const { isLogged } = useContext(UserContext);
  useProtectedRoutes(isLogged, true);

  const startCamp = async () => {
    await addPlayersCompetition(Number(idCamp.idCamp), playersList);
    navigate(`/tournament/${idCamp.idCamp}`);
  };

  useEffect(() => {
    const getCamp = async (idCamp: number) => {
      await Api.get(`/deathmatch/${idCamp}`).then((resp) =>
        setCurrentCamp(resp.data),
      );
    };
    getCamp(Number(idCamp.idCamp));

    let number_of_players = currentCamp?.number_of_players;
    if (Number(playersList.length) === Number(number_of_players)) {
      startCamp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playersList]);

  useEffect(() => {
    if (!!currentCamp?.players[0]) {
      navigate('/dashboard');
    }
  }, [currentCamp, navigate]);

  return (
    <>
      <div className="bg-gray-300 h-screen">
        <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
        <section className="py-10 tablet:py-20 bg-gray-300">
          <UserMenu />
          <div className="mx-4 tablet:mr-8 tablet:ml-44">
            <CampInfo
              name={currentCamp?.name}
              status={currentCamp?.status}
              date={currentCamp?.date}
              number_of_players={currentCamp?.number_of_players.toString()}
            />

            <div className="flex gap-12 tablet:gap-24 laptop:flex-row flex-col w-full tablet:w-[80%] mt-12">
              <AddPlayerForm
                playersList={playersList}
                setPlayersList={setPlayersList}
              />
              <PlayersList playersList={playersList} />
            </div>
          </div>
        </section>
      </div>
      <InfoUserModal />
      <ModalEdit />
      <NewCampModal />
      <InfoModal currentCamp={currentCamp} />
    </>
  );
};
