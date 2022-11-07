import { Final } from "../PlayersCard/Final";
import { Semifinal } from "../PlayersCard/Semifinal";
import { PlayersCard } from "../PlayersCard/WinAndLoseCards";
import { WinnerCard } from "../PlayersCard/WinnerCard";

export const Teste = () => {
  return (
    <div className="flex max-w-[100%] max-h-[80%] overflow-x-auto">
      <PlayersCard className="flex flex-col gap-[70px]" />
      <Semifinal className="flex flex-col gap-[120px] mt-10" />
      <Final className="flex flex-col gap-[300px] mt-32" />
      <WinnerCard className="flex flex-col mt-36" />
    </div>
  );
};
