import { Final } from '../PlayersCard/Final';
import { Semifinal } from '../PlayersCard/Semifinal';
import { PlayersCard } from '../PlayersCard/WinAndLoseCards';
import { WinnerCard } from '../PlayersCard/WinnerCard';

export const BracketGame = () => {
  return (
    <section className="flex pb-14 mt-8 max-w-[100%] overflow-auto mx-4 tablet:ml-48 relative">
      <PlayersCard />
      <Semifinal />
      <Final />
      <WinnerCard />
    </section>
  );
};
