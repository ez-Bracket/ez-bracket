import { BiUser } from 'react-icons/bi';
import { motion } from 'framer-motion';

interface IPlayerList {
  player: string;
  playerImg?: string;
}

interface IPlayerListProps {
  playersList: IPlayerList[];
}

export const PlayersList = ({ playersList }: IPlayerListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-200 w:full tablet:w-[400px] p-8 rounded-[10px] mb-[100px] tablet:mb-0"
    >
      <h3 className="text-green-100 text-2xl mb-3">Participantes</h3>
      <ul className="flex flex-col gap-[10px]">
        {playersList.map((player, index) => (
          <li key={index} className="flex gap-[10px] items-center">
            {player.playerImg ? (
              <img
                className="w-[30px] h-[30px] rounded-full mr-2"
                src={player.playerImg}
                alt="Imagem do player"
              />
            ) : (
              <BiUser className="w-[30px] h-[30px] rounded-full text-green-100 border-2 border-solid border-green-100 mr-2" />
            )}

            <span className="font-base text-gray-100 max-w-[30ch] overflow-hidden text-ellipsis whitespace-nowrap">
              {player.player}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
