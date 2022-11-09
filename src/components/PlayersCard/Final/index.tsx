import {
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";

// Utilities
import {
  CampConext,
  ICamp,
} from "../../../contexts/CampContext";
import { Api } from "../../../services/Api";

// Components
import { LineFinal } from "../../BracketsLine/Final";
import imgDefault from "../../../assets/default.jpg";

export const Final = () => {
  const { winnerPlayerCompetition, isCreateRound } =
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
  }, [isCreateRound, idCamp]);

  const winGame = (
    player: { player: string; playerImg: string },
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
    <div className="flex flex-col gap-[281px] mt-[135px]">
      {currentCamp?.games[2]?.map(
        (game: any, index: number) => {
          const round = 3;
          const key = index + 1;
          return (
            <Fragment key={key}>
              <div
                onClick={({ currentTarget }) => {
                  borderColorNext(currentTarget);
                  winGame(game.player1, round, key);
                }}
                className="w-52 h-[70px] flex border-[1px] bg-gray-400 rounded-md items-center gap-5 px-4 hover:bg-gray-500 transition-colors cursor-pointer"
              >
                <img
                  src={
                    game.player1.playerImg
                      ? game.player1.playerImg
                      : imgDefault
                  }
                  alt="Foto do usuário"
                  className="w-10 h-10 rounded-full"
                />
                <h2 className="text-sm text-gray-100 leading-3 font-normal max-w-[15ch] overflow-hidden text-ellipsis whitespace-nowrap">
                  {game.player1.player}
                </h2>
              </div>

              <div
                onClick={({ currentTarget }) => {
                  borderColorPrevious(currentTarget);
                  winGame(game.player2, round, key);
                }}
                className="w-52 h-[70px] flex border-[1px] bg-gray-400 rounded-md items-center gap-5 px-4 hover:bg-gray-500 transition-colors cursor-pointer"
              >
                <img
                  src={
                    game.player2.playerImg
                      ? game.player2.playerImg
                      : imgDefault
                  }
                  alt="Foto do usuário"
                  className="w-10 h-10 rounded-full"
                />
                <h2 className="text-sm text-gray-100 leading-3 font-normal max-w-[15ch] overflow-hidden text-ellipsis whitespace-nowrap">
                  {game.player2.player}
                </h2>
              </div>
              <LineFinal />
            </Fragment>
          );
        }
      )}
    </div>
  );
};
