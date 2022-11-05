import { useContext, useEffect } from 'react';
import { DashboardBox } from '../DashboardBox';
import { AddBox } from '../../AddBox';
import { CampConext } from '../../../contexts/CampContext';
import { DashboardMainMessage } from '../DashboardMainMessage';

export const DashboardMain = () => {
  const { camp, getCompetition } = useContext(CampConext);
  const idUser = window.localStorage.getItem('@EZ:USERID');

  useEffect(() => {
    getCompetition(Number(idUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camp]);

  return camp.length ? (
    <div className="flex justify-center tablet:justify-start flex-wrap mx-4 tablet:mr-8 tablet:ml-44 gap-10">
      {camp.map((tournament) => (
        <DashboardBox tournament={tournament} key={tournament.id} />
      ))}
      <AddBox />
    </div>
  ) : (
    <DashboardMainMessage />
  );
};
