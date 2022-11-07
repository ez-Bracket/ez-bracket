import { Final } from "../PlayersCard/Final";
import { Semifinal } from "../PlayersCard/Semifinal";
import { PlayersCard } from "../PlayersCard/WinAndLoseCards";
import { WinnerCard } from "../PlayersCard/WinnerCard";

interface iTesteProps {
  className?: string;
}

export const BracketGame = ({ className }: iTesteProps) => {
  return (
    <div className={className}>
      <PlayersCard className="flex flex-col gap-[70px] " />
      <Semifinal className="flex flex-col gap-[104px] mt-10 " />
      <Final className="flex flex-col gap-[281px] mt-[135px] " />
      <WinnerCard className="flex flex-col mt-36" />
    </div>
  );
};
