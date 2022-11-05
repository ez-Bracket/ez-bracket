import { BsFillTrashFill, BsController } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { useContext } from 'react';
import { ContextModal } from '../../../contexts/ModalContext';
import { CampConext } from '../../../contexts/CampContext';
import { useNavigate } from 'react-router-dom';

interface iPlayers {
  player: string;
  playerImg?: string;
}

interface iTournamentProps {
  idUser: number;
  name: string;
  status: boolean;
  winner: iPlayers | null;
  games: string[][];
  players: iPlayers[];
  date?: string;
  description?: string;
  id: number;
  number_of_players: number;
}

interface iTournament {
  tournament: iTournamentProps;
}

export const DashboardBox = ({ tournament }: iTournament) => {
  const { onOpenDeleteCamp } = useContext(ContextModal);

  const { setIdCamp } = useContext(CampConext);
  const navigate = useNavigate()

  const handleModalDelete = (id: number) => {
    onOpenDeleteCamp();
    setIdCamp(id);
  };

  const handlePageCamp = (tournament: iTournamentProps) => {
    navigate(`/addplayers/${tournament.id}`)
    if(Number(tournament.number_of_players) === Number(tournament.players.length)){
      navigate(`/tournament/${tournament.id}`)
    }else{
      navigate(`/addplayers/${tournament.id}`)
    }
  }

  return tournament.status ? (
    <div onClick={() => handlePageCamp(tournament)} className="relative w-full laptop:w-[380px] desktop:w-[450px] p-8 border-2 border-green-100 rounded-xl bg-gray-500 bg-opacity-40 flex flex-col justify-center gap-5 shadow-[0_25px_30px_-15px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-gray-300 hover:scale-[1.01] transition-all">
      <header className="flex justify-between">
        <h2 className="text-xl text-white font-medium">{tournament.name}</h2>
        <BsFillTrashFill
          className="text-gray-100 text-2xl cursor-pointer hover:scale-110 transition-all"
          onClick={() => handleModalDelete(tournament.id)}
        />
      </header>
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-gray-100 flex items-center gap-[10px]">
          <BsController className="text-green-100" />
          Qtd. de players: {tournament.players.length}
        </h3>
        {tournament.date ? (
          <span className="text-gray-100 flex items-center gap-[10px]">
            <AiFillCalendar className="text-green-100" />{' '}
            {tournament.date.split('-').reverse().join('/')}
          </span>
        ) : null}
      </div>
      <span className="text-green-100 self-end">Em andamento</span>
    </div>
  ) : (
    <div className="relative w-full laptop:w-[380px] desktop:w-[450px] p-8 border-2 border-error-100 rounded-xl bg-gray-500 bg-opacity-40 flex flex-col justify-center gap-5 shadow-[0_25px_30px_-15px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-gray-300 hover:scale-[1.01] transition-all">
      <header className="flex justify-between">
        <h2 className="text-xl text-white font-medium">{tournament.name}</h2>
        <BsFillTrashFill
          className="text-gray-100 text-2xl cursor-pointer hover:scale-110 transition-all"
          onClick={() => handleModalDelete(tournament.id)}
        />
      </header>
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-gray-100 flex items-center gap-[10px]">
          <BsController className="text-error-100" />
          {tournament.players.length}
        </h3>
        {tournament.date ? (
          <span className="text-gray-100 flex items-center gap-[10px]">
            <AiFillCalendar className="text-error-100" /> {tournament.date}
          </span>
        ) : null}
      </div>
      <span className="text-error-100 self-end">Encerrado</span>
    </div>
  );
};
