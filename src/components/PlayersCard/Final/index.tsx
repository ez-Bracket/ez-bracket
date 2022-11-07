import { LineFinal } from "../../BracketsLine/Final";
import imgteste from "../../../assets/Teste foto time 1.jpg";
import imgTeste from "../../../assets/teste foto time 2.jpg";
import { useContext, useEffect, useState } from "react";
import { CampConext, iCamp } from "../../../contexts/CampContext";
import { useParams } from "react-router-dom";
import { Api } from "../../../services/Api";

interface iFinalProps {
  className?: string;
}

export const Final = ({ className }: iFinalProps) => {
  const { winnerPlayerCompetition, isCreateRound } = useContext(CampConext)
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

  const winGame = (player: {player: string, playerImg: string}, round:number, chave:number) => {
    const winnerPlayer = player
    winnerPlayerCompetition(Number(idCamp.idCamp), round, chave, winnerPlayer)
    console.log(player)
  }

  return (
    <div className={className}>
      {currentCamp?.games[2]?.map((game: any, index: number) => {
        const round = 3;
        const chave = index+1;
        return  <>
                  <div onClick={()=>{winGame(game.player1, round, chave)}}
                    className="w-52 h-[70px] flex border-2 bg-gray-400 border-green-100 rounded-md items-center justify-between px-4">
                    <img src={game.player1.playerImg ? game.player1.playerImg : imgteste} alt="" className="w-10 h-10 rounded-full" />
                    <h2 className="text-sm text-green-100 leading-3 font-normal">
                      {game.player1.player}
                    </h2>
                    <p className="text-sm text-green-100 leading-3 font-normal">W</p>
                  </div>

                  {/* Se status for lose, chamar este card */}

                  <div onClick={()=>{winGame(game.player2, round, chave)}}
                    className="w-52 h-[70px] flex border-2 bg-gray-400 border-error-100 rounded-md items-center justify-between px-4">
                    <img src={game.player2.playerImg ? game.player2.playerImg : imgteste} alt="" className="w-10 h-10 rounded-full" />
                    <h2 className="text-sm text-error-100 leading-3 font-normal">
                      {game.player2.player}
                    </h2>
                    <p className="text-sm text-error-100 leading-3 font-normal">L</p>
                  </div>
                  <LineFinal className="flex justify-start items-center ml-52 -mt-[681px] " />
                </>
      })}
    </div>
  );
};
