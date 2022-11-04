import { useContext } from "react";
import {
  BsFillTrashFill,
  BsController,
} from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";

// Component
import { UserContext } from "../../contexts/UserContext";

export const DashboardTournament = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className=" ml-[150px] min-w-[340px] w-[380px] h-[224px] p-8 border-2 border-green-100 rounded-[10px] bg-gray-500 flex flex-col justify-center gap-5 mb-5 laptop:mb-10 shadow-[0_25px_30px_-15px_rgba(0,0,0,0.3)]">
      <header className="flex justify-between">
        <h2 className="text-xl text-white font-medium">
          Nome do torneio
        </h2>
        <BsFillTrashFill className="text-gray-100" />
      </header>
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-gray-100 flex items-center gap-[10px]">
          <BsController className="text-green-100" />{" "}
          Quantidade de participantes: 16
        </h3>
        <span className="text-gray-100 flex items-center gap-[10px]">
          <AiFillCalendar className="text-green-100" />{" "}
          31/10/2022
        </span>
      </div>
      <span className="text-green-100 self-end">
        Em andamento
      </span>
    </div>
  );
};
