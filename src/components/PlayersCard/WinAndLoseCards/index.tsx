import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgteste from "../../../assets/Teste foto time 1.jpg";
import imgTeste from "../../../assets/teste foto time 2.jpg";
import {
  CampConext,
  iCamp,
} from "../../../contexts/CampContext";
import { Api } from "../../../services/Api";
import { BracketsLine } from "../../BracketsLine/Default";
import { WinnerCard } from "../WinnerCard";

interface iPlayersCardProps {
  className?: string;
}

export const PlayersCard = ({
  className,
}: iPlayersCardProps) => {
  const { winnerPlayerCompetition } =
    useContext(CampConext);
  const idCamp = useParams();
  const [currentCamp, setCurrentCamp] =
    useState<iCamp | null>(null);

  useEffect(() => {
    const getCamp = async (idCamp: number) => {
      await Api.get(`/deathmatch/${idCamp}`).then((resp) =>
        setCurrentCamp(resp.data)
      );
    };
    getCamp(Number(idCamp.idCamp));
  }, []);

  // useEffect(() => {
  //   console.log(currentCamp?.games[0])
  // },[currentCamp]);

  const winGame = (
    player: { player: string; playerImg: string },
    round: number,
    chave: number
  ) => {
    const winnerPlayer = player;
    winnerPlayerCompetition(
      Number(idCamp.idCamp),
      round,
      chave,
      winnerPlayer
    );
  };

  return (
    <div className="flex flex-col gap-[70px]">
      {currentCamp?.games[0]?.map(
        (game: any, index: number) => {
          const round = 1;
          const chave = index + 1;
          return (
            <div key={index}>
              <div
                onClick={() => {
                  winGame(game.player1, round, chave);
                }}
                className={`w-52 h-[70px] flex border-2 bg-gray-400 border-green-100 rounded-md items-center justify-between px-4`}
              >
                <img
                  src={
                    game.player1.playerImg
                      ? game.player1.playerImg
                      : imgteste
                  }
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h2 className="text-sm text-green-100 leading-3 font-normal">
                  {game.player1.player}
                </h2>
                <p className="text-sm text-green-100 leading-3 font-normal">
                  W
                </p>
              </div>

              {/* Se status for lose, chamar este card */}

              <div
                onClick={() => {
                  winGame(game.player2, round, chave);
                }}
                className="w-52 h-[70px] flex border-2 bg-gray-400 border-error-100 rounded-md items-center justify-between px-4"
              >
                <img
                  src={
                    game.player2.playerImg
                      ? game.player2.playerImg
                      : imgteste
                  }
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h2 className="text-sm text-error-100 leading-3 font-normal">
                  {game.player2.player}
                </h2>
                <p className="text-sm text-error-100 leading-3 font-normal">
                  L
                </p>
              </div>
              <BracketsLine />
            </div>
          );
        }
      )}
    </div>
  );
};
