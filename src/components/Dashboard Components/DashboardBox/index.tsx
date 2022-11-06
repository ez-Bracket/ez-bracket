import { BsFillTrashFill, BsController } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { useContext, useRef } from 'react';
import { ContextModal } from '../../../contexts/ModalContext';
import { CampConext } from '../../../contexts/CampContext';
import { motion } from 'framer-motion';
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
  const btnRef: any = useRef();
  const navigate = useNavigate();

  const handleModalDelete = (id: number) => {
    onOpenDeleteCamp();
    setIdCamp(id);
  };

  const handlePageCamp = (tournament: iTournamentProps) => {
    navigate(`/addplayers/${tournament.id}`);
    if (
      Number(tournament.number_of_players) === Number(tournament.players.length)
    ) {
      navigate(`/tournament/${tournament.id}`);
    } else {
      navigate(`/addplayers/${tournament.id}`);
    }
  };

  return (
    <motion.div
      onClick={() => handlePageCamp(tournament)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`${
        tournament.status ? 'border-green-100' : 'border-error-100'
      } relative h-[225px] w-full laptop:w-[380px] desktop:w-[450px] p-8 border-2 rounded-xl bg-gray-500 bg-opacity-40 flex flex-col justify-center gap-5 shadow-[0_25px_30px_-15px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-gray-300 hover:scale-[1.01] transition-all`}
    >
      <header className="flex justify-between">
        <h2 className="text-xl text-white font-medium max-w-[30ch] overflow-hidden text-ellipsis whitespace-nowrap">
          {tournament.name}
        </h2>
        <button ref={btnRef} onClick={() => handleModalDelete(tournament.id)}>
          <BsFillTrashFill
            role="button"
            className="text-gray-100 text-2xl cursor-pointer hover:scale-110 transition-all"
          />
        </button>
      </header>
      <div className="flex flex-col gap-[15px]">
        <span className="text-gray-100 flex items-center gap-[10px]">
          <BsController
            className={tournament.status ? 'text-green-100' : 'text-error-100'}
          />
          Qtd. de players: {tournament.players.length}
        </span>

        <span className="text-gray-100 flex items-center gap-[10px]">
          <AiFillCalendar
            className={tournament.status ? 'text-green-100' : 'text-error-100'}
          />{' '}
          {tournament.date
            ? tournament.date.split('-').reverse().join('/')
            : '--/--/--'}
        </span>
      </div>
      {tournament.status ? (
        <span className="text-green-100 self-end">Em andamento</span>
      ) : (
        <span className="text-error-100 self-end">Encerrado</span>
      )}
    </motion.div>
  );
};
