import { useContext, useEffect, useState } from 'react';
import { AddPlayerForm } from '../../components/AddPlayerForm';
import { CampInfo } from '../../components/CampInfo';
import { UserMenu } from '../../components/UserMenu';
import { PlayersList } from '../../components/PlayersList';
import { useProtectedRoutes } from '../../hooks/useProtectedRoutes';
import { UserContext } from '../../contexts/UserContext';
import { InfoUserModal } from '../../components/Modals/ModalInfoUser';
import { ModalEdit } from '../../components/Modals/ModalEditUser';
import { NewCampModal } from '../../components/Modals/ModalNewCamp';
import { useNavigate, useParams } from 'react-router-dom';
import { CampConext, iCamp } from '../../contexts/CampContext';
import { InfoModal } from '../../components/Modals/ModalInfoCamp';
import { Api } from '../../services/Api';

interface iPlayerList {
  player: string;
  playerImg?: string;
}

export const AddPlayers = () => {
  const [playersList, setPlayersList] = useState<iPlayerList[]>([]);
  const [currentCamp, setCurrentCamp] = useState<iCamp | null>(null);

  const { isLogged } = useContext(UserContext);
  const { addPlayersCompetition } = useContext(CampConext);
  useProtectedRoutes(isLogged, true);

  const navigate = useNavigate();
  const idCamp = useParams();

  async function startCamp() {
    await addPlayersCompetition(Number(idCamp.idCamp), playersList);
    navigate(`/tournament/${idCamp.idCamp}`);
  }

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

  return (
    <>
      <div className="bg-gray-300 h-screen">
        <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
        <section className="py-10 tablet:py-20 bg-gray-300">
          <UserMenu />
          <div className="mx-4 tablet:mr-8 tablet:ml-44">
            <CampInfo
              name={currentCamp?.name}
              status={true}
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
