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
import { useParams } from 'react-router-dom';
import { CampConext } from '../../contexts/CampContext';

interface iPlayerList {
  player: string;
  playerImg?: string;
}

export const AddPlayers = () => {
  const [playersList, setPlayersList] = useState<iPlayerList[]>([]);

  const { isLogged } = useContext(UserContext);
  const { camp, addPlayersCompetition } = useContext(CampConext);
  useProtectedRoutes(isLogged, true);

  const { idCamp } = useParams();

  function startCamp() {
    const data = playersList.map((element) => element.player);
    addPlayersCompetition(Number(idCamp), playersList);
  }

  useEffect(() => {
    const championship = camp.filter((camp) => camp.id === Number(idCamp));
    let number_of_players = championship[0].number_of_players;
    if (Number(playersList.length) === Number(number_of_players)) {
      console.log('Todos os players foram adicionados!');
      startCamp();
    }
  }, [playersList]);

  return (
    <>
      <div className="bg-gray-300 h-screen">
        <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
        <section className="py-10 tablet:py-20 bg-gray-300">
          <UserMenu />
          <div className="mx-4 tablet:mr-8 tablet:ml-44">
            <CampInfo
              name="Nome do Torneio"
              status={true}
              date="--/--/--"
              number_of_players="16"
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
    </>
  );
};
