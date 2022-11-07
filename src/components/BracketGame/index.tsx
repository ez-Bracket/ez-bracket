import { Final } from '../PlayersCard/Final';
import { Semifinal } from '../PlayersCard/Semifinal';
import { PlayersCard } from '../PlayersCard/WinAndLoseCards';
import { WinnerCard } from '../PlayersCard/WinnerCard';

interface iTesteProps {
  className?: string;
}

export const BracketGame = ({ className }: iTesteProps) => {
  return (
    <div className={className}>
      <PlayersCard className="flex flex-col gap-[70px] tablet:gap-[40px]" />
      <Semifinal className="flex flex-col gap-[120px] mt-10 tablet:gap-[80px]" />
      <Final className="flex flex-col gap-[310px] mt-[135px] tablet:gap-[230px]" />
      <WinnerCard className="flex flex-col mt-36" />
    </div>
  );
};
