import CampInfo from '../../components/CampInfo';
import { DashboardMenu } from '../../components/DashboardMenu';

export const Tournament = () => {
  return (
    <div>
      <div className="bg-gray-300 h-screen">
        <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>

        <section className="py-10 tablet:py-20 bg-gray-300">
          <DashboardMenu />
          <div className="mx-4 tablet:mr-8 tablet:ml-44">
            <CampInfo
              name="Nome do Torneio"
              status={true}
              date="-/-/-"
              number_of_players="16"
            />
            <div className="flex justify-between gap-8 laptop:flex-row flex-col w-[80%] mt-12"></div>
          </div>
        </section>
      </div>
    </div>
  );
};
