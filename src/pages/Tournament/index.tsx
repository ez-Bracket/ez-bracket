import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CampInfo } from "../../components/CampInfo";
import { ModalEdit } from "../../components/Modals/ModalEditUser";
import { InfoModal } from "../../components/Modals/ModalInfoCamp";
import { InfoUserModal } from "../../components/Modals/ModalInfoUser";
import { NewCampModal } from "../../components/Modals/ModalNewCamp";
import { BracketGame } from "../../components/BracketGame";
import { UserMenu } from "../../components/UserMenu";
import { iCamp } from "../../contexts/CampContext";
import { Api } from "../../services/Api";

export const Tournament = () => {
  const idCamp = useParams();
  const [currentCamp, setCurrentCamp] = useState<iCamp | null>(null);

  useEffect(() => {
    const getCamp = (idCamp: number) => {
      Api.get(`/deathmatch/${idCamp}`).then((resp) =>
        setCurrentCamp(resp.data)
      );
    };
    getCamp(Number(idCamp.idCamp));
  }, [idCamp]);

  return (
    <>
      <div className="bg-gray-300 h-screen">
        <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
        <section className="pt-10 tablet:pt-20 bg-gray-300">
          <UserMenu />
          <div className="mx-4 tablet:mr-8 tablet:ml-44">
            <CampInfo
              name={currentCamp?.name}
              status={true}
              date={currentCamp?.date}
              number_of_players={currentCamp?.number_of_players.toString()}
            />
          </div>
        </section>
        <div className="bg-gray-300">
          <BracketGame />
        </div>
      </div>
      <InfoUserModal />
      <ModalEdit />
      <NewCampModal />
      <InfoModal currentCamp={currentCamp} />
    </>
  );
};
