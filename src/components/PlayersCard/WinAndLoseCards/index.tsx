import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgDefault from '../../../assets/default.jpg';
import { CampConext, iCamp } from '../../../contexts/CampContext';
import { Api } from '../../../services/Api';
import { BracketsLine } from '../../BracketsLine/Default';

export const PlayersCard = () => {
  const { winnerPlayerCompetition } = useContext(CampConext);
  const idCamp = useParams();
  const [currentCamp, setCurrentCamp] = useState<iCamp | null>(null);

  useEffect(() => {
    const getCamp = async (idCamp: number) => {
      await Api.get(`/deathmatch/${idCamp}`).then((resp) =>
        setCurrentCamp(resp.data),
      );
    };
    getCamp(Number(idCamp.idCamp));
  }, [idCamp]);

  const winGame = (
    player: { player: string; playerImg: string; winner: boolean },
    round: number,
    key: number,
  ) => {
    const winnerPlayer = player;
    winnerPlayerCompetition(Number(idCamp.idCamp), round, key, winnerPlayer);
  };

  return (
    <div className="flex flex-col gap-[70px]">
      {currentCamp?.games[0]?.map((game: any, index: number) => {
        const round = 1;
        const key = index + 1;
        return (
          <div key={key}>
            <div
              onClick={() => {
                game.player1.winner = true;
                game.player2.winner = false;
                winGame(game.player1, round, key);
              }}
              className={`w-52 h-[70px] flex border-2 bg-gray-400 rounded-md items-center justify-between px-4 hover:bg-gray-500 transition-colors cursor-pointer  ${
                currentCamp.games[0][index].player1.winner
                  ? 'border-green-200'
                  : 'border-gray-200'
              }`}
            >
              <img
                src={
                  game.player1.playerImg ? game.player1.playerImg : imgDefault
                }
                alt="Foto de perfil"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-sm text-gray-100 leading-3 font-normal">
                {game.player1.player}
              </h2>
            </div>

            <div
              onClick={() => {
                game.player2.winner = true;
                game.player1.winner = false;
                winGame(game.player2, round, key);
              }}
              className={`w-52 h-[70px] flex border-2 bg-gray-400 rounded-md items-center justify-between px-4 hover:bg-gray-500 transition-colors cursor-pointer ${
                currentCamp.games[0][index].player2.winner
                  ? 'border-green-200'
                  : 'border-gray-200'
              }`}
            >
              <img
                src={
                  game.player2.playerImg ? game.player2.playerImg : imgDefault
                }
                alt="Foto de perfil"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-sm text-gray-100 leading-3 font-normal">
                {game.player2.player}
              </h2>
            </div>
            <BracketsLine />
          </div>
        );
      })}
    </div>
  );
};
