import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CampInfo } from '../../components/CampInfo';
import { ModalEdit } from '../../components/Modals/ModalEditUser';
import { InfoModal } from '../../components/Modals/ModalInfoCamp';
import { InfoUserModal } from '../../components/Modals/ModalInfoUser';
import { NewCampModal } from '../../components/Modals/ModalNewCamp';
import { UserMenu } from '../../components/UserMenu';
import { CampConext, iCamp } from '../../contexts/CampContext';

export const Tournament = () => {
  const idCamp = useParams();
  const { camp } = useContext(CampConext);
  const [champ, setChamp] = useState<iCamp[] | []>([]);

  useEffect(() => {
    setChamp(camp.filter((c) => c.id === Number(idCamp.idCamp)));
  }, [camp, idCamp]);

  return (
    <div>
      <div className="bg-gray-300 h-screen">
        <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
        <section className="py-10 tablet:py-20 bg-gray-300">
          <UserMenu />
          <div className="mx-4 tablet:mr-8 tablet:ml-44">
            <CampInfo
              name={champ[0]?.name}
              status={true}
              date="--/--/--"
              number_of_players={champ[0]?.number_of_players.toString()}
            />
            <div className="flex justify-between gap-8 laptop:flex-row flex-col w-[80%] mt-12"></div>
          </div>
        </section>
      </div>
      <InfoUserModal />
      <ModalEdit />
      <NewCampModal />
      <InfoModal />
    </div>
  );
};
