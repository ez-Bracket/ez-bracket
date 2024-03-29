import { Fragment, useContext, useEffect, useState } from 'react';
import { BsTrophy } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

// Utilities
import { CampConext, ICamp } from '../../../contexts/CampContext';
import { Api } from '../../../services/Api';

// Components
import imgDefault from '../../../assets/default.jpg';

export const WinnerCard = () => {
  const { isCreateRound } = useContext(CampConext);
  const idCamp = useParams();
  const [currentCamp, setCurrentCamp] = useState<ICamp | null>(null);
  const [isIndex, setIsIndex] = useState(0);

  useEffect(() => {
    const getCamp = async (idCamp: number) => {
      await Api.get(`/deathmatch/${idCamp}`).then((resp) => {
        setCurrentCamp(resp.data);
      });
    };
    getCamp(Number(idCamp.idCamp));
  }, [isCreateRound, idCamp]);

  useEffect(() => {
    renderIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCamp]);

  const renderIndex = () => {
    if (currentCamp?.games[0].length === 8) {
      return setIsIndex(3);
    }
    if (currentCamp?.games[0].length === 4) {
      return setIsIndex(2);
    }
    if (currentCamp?.games[0].length === 2) {
      return setIsIndex(1);
    }
  };

  return (
    <div
      className={`flex flex-col ${
        currentCamp?.games[0].length === 4 ? 'mt-36' : 'mt-0'
      }`}
    >
      {currentCamp?.games[isIndex]?.map((game: any, index: number) => {
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
          <Fragment key={index + 1}></Fragment>
        );
      })}
    </div>
  );
};
