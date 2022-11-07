import { useContext, useEffect, useState } from "react";
import { BsTrophy } from "react-icons/bs";
import { useParams } from "react-router-dom";

import imgTeste from "../../../assets/teste foto time 2.jpg";
import { CampConext, iCamp } from "../../../contexts/CampContext";
import { Api } from "../../../services/Api";

interface iWinnerCardProps {
  className: string;
}

export const WinnerCard = ({ className }: iWinnerCardProps) => {
  const { isCreateRound } = useContext(CampConext)
  const idCamp = useParams();
  const [currentCamp, setCurrentCamp] = useState<iCamp | null>(null);

  useEffect(() => {
    const getCamp = async (idCamp: number) => {
      await Api.get(`/deathmatch/${idCamp}`).then((resp) =>
        setCurrentCamp(resp.data),
      );
    };
    getCamp(Number(idCamp.idCamp));
  }, [isCreateRound]);

  useEffect(() => {
    console.log(currentCamp?.winner)
  },[currentCamp]);

  return (
    <div className={className}>

      {currentCamp?.games[2]?.map((game: any, index: number) => {
        return  currentCamp?.winner ? <>      
                  <div className="flex w-[230px] h-9 items-center justify-center gap-4">
                    <h2 className="text-3xl text-yellow-100 font-winner leading-8">
                      VENCEDOR
                    </h2>
                    <BsTrophy size={25} color="#FACD35" />
                  </div>
                  <div className="h-[300px] w-[230px] flex flex-col items-center justify-start pt-8 gap-5 border-2 border-yellow-100 rounded-lg bg-gray-400">
                  <img
                    src={game.winner.playerImg ? game.winner.playerImg : imgTeste}
                    alt=""
                    className="w-24 h-24 rounded-full mt-3"
                  />
                  <h2 className="text-xl leading-6 text-yellow-100 mt-3">
                  {game.winner.player}
                  </h2>
                  <div className="flex gap-2">
                    <p className="text-sm leading-4 text-gray-100">
                      10W
                    </p>
                    <span className="text-sm leading-4 text-gray-100">
                      -
                    </span>
                    <p className="text-sm leading-4 text-gray-100">
                      2L
                    </p>
                  </div>
                  </div>
                </> : <></>
      })}
    </div>
  );
};
