import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Utilities
import {
  CampConext,
  ICamp,
} from "../../../contexts/CampContext";
import { Api } from "../../../services/Api";

// Components
import imgDefault from "../../../assets/default.jpg";
import { BracketsLine } from "../../BracketsLine/Default";

export const PlayersCard = () => {
  const { winnerPlayerCompetition } =
    useContext(CampConext);
  const idCamp = useParams();
  const [currentCamp, setCurrentCamp] =
    useState<ICamp | null>(null);

  useEffect(() => {
    const getCamp = async (idCamp: number) => {
      await Api.get(`/deathmatch/${idCamp}`).then((resp) =>
        setCurrentCamp(resp.data)
      );
    };
    getCamp(Number(idCamp.idCamp));
  }, [idCamp]);

  const winGame = (
    player: {
      player: string;
      playerImg: string;
      winner: boolean;
    },
    round: number,
    key: number
  ) => {
    const winnerPlayer = player;
    winnerPlayerCompetition(
      Number(idCamp.idCamp),
      round,
      key,
      winnerPlayer
    );
  };

  const borderColorNext = (
    currentTarget: HTMLDivElement
  ) => {
    currentTarget.classList.add("pointer-events-none");
    currentTarget.classList.add("border-green-100");
    currentTarget.nextElementSibling?.classList.add(
      "pointer-events-none"
    );
    currentTarget.nextElementSibling?.classList.add(
      "border-error-100"
    );
  };

  const borderColorPrevious = (
    currentTarget: HTMLDivElement
  ) => {
    currentTarget.classList.add("pointer-events-none");
    currentTarget.classList.add("border-green-100");
    currentTarget.previousElementSibling?.classList.add(
      "pointer-events-none"
    );
    currentTarget.previousElementSibling?.classList.add(
      "border-error-100"
    );
  };

  return (
    <div className="flex flex-col gap-[70px]">
      {currentCamp?.games[0]?.map(
        (game: any, index: number) => {
          const round = 1;
          const key = index + 1;
          return (
            <div key={key}>
              <div
                onClick={({ currentTarget }) => {
                  borderColorNext(currentTarget);
                  winGame(game.player1, round, key);
                }}
                className={`w-52 h-[70px] flex bg-gray-400 border-[1px] rounded-md items-center gap-5 px-4 hover:bg-gray-500 transition-colors cursor-pointer`}
              >
                <img
                  src={
                    game.player1.playerImg
                      ? game.player1.playerImg
                      : imgDefault
                  }
                  alt="Foto de perfil"
                  className="w-10 h-10 rounded-full"
                />
                <h2 className="text-sm text-gray-100 leading-3 font-normal">
                  {game.player1.player}
                </h2>
              </div>

              <div
                onClick={({ currentTarget }) => {
                  borderColorPrevious(currentTarget);
                  winGame(game.player2, round, key);
                }}
                className={`w-52 h-[70px] flex border-[1px] bg-gray-400 rounded-md items-center gap-5 px-4 hover:bg-gray-500 transition-colors cursor-pointer`}
              >
                <img
                  src={
                    game.player2.playerImg
                      ? game.player2.playerImg
                      : imgDefault
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
        }
      )}
    </div>
  );
};
