import { LineFinal } from "../../BracketsLine/Final";
import imgDefault from "../../../assets/default.jpg";
import { Fragment, useContext, useEffect, useState } from "react";
import { CampConext, iCamp } from "../../../contexts/CampContext";
import { useParams } from "react-router-dom";
import { Api } from "../../../services/Api";

export const Final = () => {
  const { winnerPlayerCompetition, isCreateRound } = useContext(CampConext);
  const idCamp = useParams();
  const [currentCamp, setCurrentCamp] = useState<iCamp | null>(null);

  useEffect(() => {
    const getCamp = async (idCamp: number) => {
      await Api.get(`/deathmatch/${idCamp}`).then((resp) =>
        setCurrentCamp(resp.data)
      );
    };
    getCamp(Number(idCamp.idCamp));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreateRound]);

  const winGame = (
    player: { player: string; playerImg: string },
    round: number,
    key: number
  ) => {
    const winnerPlayer = player;
    winnerPlayerCompetition(Number(idCamp.idCamp), round, key, winnerPlayer);
  };

  return (
    <div className="flex flex-col gap-[281px] mt-[135px]">
      {currentCamp?.games[2]?.map((game: any, index: number) => {
        const round = 3;
        const key = index + 1;
        return (
          <Fragment key={key}>
            <div
              onClick={() => {
                winGame(game.player1, round, key);
              }}
              className="w-52 h-[70px] flex border-2 bg-gray-400 border-gray-200 rounded-md items-center justify-between px-4 hover:bg-gray-500 transition-colors cursor-pointer"
            >
              <img
                src={
                  game.player1.playerImg ? game.player1.playerImg : imgDefault
                }
                alt="Foto do usuário"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-sm text-gray-100 leading-3 font-normal max-w-[15ch] overflow-hidden text-ellipsis whitespace-nowrap">
                {game.player1.player}
              </h2>
              <p className="text-sm text-gray-100 leading-3 font-normal">W</p>
            </div>

            <div
              onClick={() => {
                winGame(game.player2, round, key);
              }}
              className="w-52 h-[70px] flex border-2 bg-gray-400 border-gray-200 rounded-md items-center justify-between px-4 hover:bg-gray-500 transition-colors cursor-pointer"
            >
              <img
                src={
                  game.player2.playerImg ? game.player2.playerImg : imgDefault
                }
                alt="Foto do usuário"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-sm text-gray-100 leading-3 font-normal max-w-[15ch] overflow-hidden text-ellipsis whitespace-nowrap">
                {game.player2.player}
              </h2>
              <p className="text-sm text-gray-100 leading-3 font-normal">L</p>
            </div>
            <LineFinal />
          </Fragment>
        );
      })}
    </div>
  );
};
