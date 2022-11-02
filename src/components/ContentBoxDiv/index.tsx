import { ContentBox } from "../ContentBox";
import { AiOutlineTrophy } from "react-icons/ai";
import { IoCreateOutline, IoStatsChartOutline } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";
import { TbTournament } from "react-icons/tb";

export const ContentBoxDiv = () => {
  // Quando chamar o children utilizar essa class => className="text-green-100 text-5xl"
  return (
    <div className="flex justify-center bg-transparent">
      <div className="flex overflow-x-scroll laptop:flex-wrap laptop:justify-center laptop:bg-transparent laptop:max-w-6xl mb-[50px]">
        <ContentBox
          title="Crie torneios"
          text="Convide seus amigos e gerencie campeonatos."
        >
          <IoCreateOutline className="text-green-100 text-5xl" />
        </ContentBox>
        <ContentBox
          title="Estatísticas"
          text="Tenha acesso a dados e estatísticas dos participantes do seu torneio."
        >
          <IoStatsChartOutline className="text-green-100 text-5xl" />
        </ContentBox>
        <ContentBox
          title="Fácil acesso"
          text="Basta que uma pessoa crie a conta para ter acesso e gerenciar o torneio."
        >
          <BsPersonLinesFill className="text-green-100 text-5xl" />
        </ContentBox>
        <ContentBox
          title="Histórico"
          text="Tenha acesso ao histórico de campeões dos seus torneios."
        >
          <AiOutlineTrophy className="text-green-100 text-5xl" />
        </ContentBox>
        <ContentBox
          title="Reinicie"
          text="Reinicie um torneio, após finalizá-lo, sem precisar preencher os dados novamente."
        >
          <VscDebugRestart className="text-green-100 text-5xl" />
        </ContentBox>
        <ContentBox
          title="Versátil"
          text="Para todos os tipos de ocasiões e campeonatos. A única regra é se divertir."
        >
          <TbTournament className="text-green-100 text-5xl" />
        </ContentBox>
      </div>
    </div>
  );
};
