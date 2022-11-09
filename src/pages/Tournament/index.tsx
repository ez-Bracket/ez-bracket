import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Utilities
import { iCamp } from "../../contexts/CampContext";
import { Api } from "../../services/Api";
import { UserContext } from "../../contexts/UserContext";
import { useProtectedRoutes } from "../../hooks/useProtectedRoutes";

// Components
import { CampInfo } from "../../components/CampInfo";
import { ModalEdit } from "../../components/Modals/ModalEditUser";
import { InfoModal } from "../../components/Modals/ModalInfoCamp";
import { InfoUserModal } from "../../components/Modals/ModalInfoUser";
import { NewCampModal } from "../../components/Modals/ModalNewCamp";
import { BracketGame } from "../../components/BracketGame";
import { UserMenu } from "../../components/UserMenu";

export const Tournament = () => {
  const idCamp = useParams();
  const [currentCamp, setCurrentCamp] =
    useState<iCamp | null>(null);
  const { isLogged } = useContext(UserContext);
  useProtectedRoutes(isLogged, true);

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
              date={currentCamp?.date}
              status={currentCamp?.status}
              number_of_players={currentCamp?.number_of_players.toString()}
            />
            <p className="text-gray-100 italic mt-4">
              É necessário escolher todos os vencedores
              antes de prosseguir para o próximo round.
            </p>
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
