import { Fragment, useContext, useEffect, useState } from "react";
import { BsTrophy } from "react-icons/bs";
import { useParams } from "react-router-dom";
import imgDefault from "../../../assets/default.jpg";
import { CampConext, iCamp } from "../../../contexts/CampContext";
import { Api } from "../../../services/Api";

export const WinnerCard = () => {
  const { isCreateRound } = useContext(CampConext);
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

  return (
    <div className="flex flex-col mt-36">
      {currentCamp?.games[2]?.map((game: any, index: number) => {
        return currentCamp?.winner ? (
          <Fragment key={index + 1}>
            <div className="flex w-[230px] h-9 items-center justify-center gap-4">
              <h2 className="text-3xl text-yellow-100 font-winner leading-8">
                VENCEDOR
              </h2>
              <BsTrophy size={25} color="#FACD35" />
            </div>
            <div className="h-[300px] w-[230px] flex flex-col items-center justify-start pt-8 gap-5 border-2 border-yellow-100 rounded-lg bg-gray-400">
              <img
                src={game.winner.playerImg ? game.winner.playerImg : imgDefault}
                alt="Foto do usuário"
                className="w-24 h-24 rounded-full mt-3"
              />
              <h2 className="text-xl leading-6 text-yellow-100 mt-3 max-w-[18ch] overflow-hidden text-ellipsis whitespace-nowrap">
                {game.winner.player}
              </h2>
            </div>
          </Fragment>
        ) : (
          <></>
        );
      })}
    </div>
  );
};
