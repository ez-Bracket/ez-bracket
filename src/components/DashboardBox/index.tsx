import { BsFillTrashFill, BsController } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { ContextModal } from "../../contexts/ModalContext";

interface iTournamentProps {
  idUser: number;
  name: string;
  status: boolean;
  winner: string | null;
  games: string[][];
  players: string[];
  date?: string;
  description?: string;
}

interface iTournament {
  tournament: iTournamentProps;
}

export const DashboardBox = ({ tournament }: iTournament) => {
  const { onOpenDeleteCamp } = useContext(ContextModal);

  const { user } = useContext(UserContext);
 
  const handleModalDelete = () => {
    onOpenDeleteCamp();
  };

  return (
    <div className="relative w-full laptop:w-[380px] desktop:w-[450px] p-8 border-2 border-green-100 rounded-xl bg-gray-500 bg-opacity-40 flex flex-col justify-center gap-5 shadow-[0_25px_30px_-15px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-gray-300 hover:scale-[1.01] transition-all">
      <header className="flex justify-between">
        <h2 className="text-xl text-white font-medium">Nome do torneio</h2>
        <BsFillTrashFill
          className="text-gray-100 text-2xl cursor-pointer hover:scale-110 transition-all"
          onClick={handleModalDelete}
        />

      </header>
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-gray-100 flex items-center gap-[10px]">
          <BsController className="text-green-100" />
          {tournament.players.length}
        </h3>
        {tournament.date ? (
          <span className="text-gray-100 flex items-center gap-[10px]">
            <AiFillCalendar className="text-green-100" /> {tournament.date}
          </span>
        ) : null}
      </div>
      {tournament.status ? (
        <span className="text-green-100 self-end">Em andamento</span>
      ) : (
        <span className="text-error-100 self-end">Encerrado</span>
      )}
    </div>
  );
};
