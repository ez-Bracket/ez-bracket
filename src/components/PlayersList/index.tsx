import { BiUser } from "react-icons/bi";

interface iPlayerList {
  player: string;
  playerImg?: string;
}

interface iPlayerListProps {
  playersList: iPlayerList[];
}

const PlayersList = ({ playersList }: iPlayerListProps) => {
  return (
    <div className="bg-gray-200 w:full tablet:w-[400px] p-8 rounded-[10px] mb-[100px] tablet:mb-0">
      <h3 className="text-green-100 text-2xl mb-3">Participantes</h3>
      <ul className="flex flex-col gap-[10px]">
        {playersList.map((player) => (
          <li className="flex gap-[10px] items-center">
            {player.playerImg ? (
              <img
                className="w-[30px] h-[30px] rounded-full mr-2"
                src={player.playerImg}
                alt=""
              />
            ) : (
              <BiUser className="w-[30px] h-[30px] rounded-full text-green-100 border-2 border-solid border-green-100 mr-2" />
            )}

            <span className="font-base text-gray-100">{player.player}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersList;
