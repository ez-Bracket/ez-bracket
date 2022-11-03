import { ContentBox } from '../ContentBox';
import { AiOutlineTrophy } from 'react-icons/ai';
import { IoCreateOutline, IoStatsChartOutline } from 'react-icons/io5';
import { BsPersonLinesFill } from 'react-icons/bs';
import { VscDebugRestart } from 'react-icons/vsc';
import { TbTournament } from 'react-icons/tb';

export const ContentBoxDiv = () => {
  const classBox = 'text-green-100 text-5xl';

  return (
    <section className="flex justify-center relative z-8 laptop:pb-10">
      <div className="max-w-7xl m-auto px-4 flex gap-10 laptop:gap-4 laptop:justify-evenly overflow-x-scroll laptop:overflow-hidden laptop:flex-wrap laptop:w-full mb-20 laptop:mb-[120px]">
        <ContentBox
          title="Crie torneios"
          text="Convide seus amigos e gerencie campeonatos."
        >
          <IoCreateOutline className={classBox} />
        </ContentBox>
        <ContentBox
          title="Estatísticas"
          text="Tenha acesso a dados e estatísticas dos participantes do seu torneio."
        >
          <IoStatsChartOutline className={classBox} />
        </ContentBox>
        <ContentBox
          title="Fácil acesso"
          text="Basta que uma pessoa crie a conta para ter acesso e gerenciar o torneio."
        >
          <BsPersonLinesFill className={classBox} />
        </ContentBox>
        <ContentBox
          title="Histórico"
          text="Tenha acesso ao histórico de campeões dos seus torneios."
        >
          <AiOutlineTrophy className={classBox} />
        </ContentBox>
        <ContentBox
          title="Reinicie"
          text="Reinicie um torneio, após finalizá-lo, sem precisar preencher os dados novamente."
        >
          <VscDebugRestart className={classBox} />
        </ContentBox>
        <ContentBox
          title="Versátil"
          text="Para todos os tipos de ocasiões e campeonatos. A única regra é se divertir."
        >
          <TbTournament className={classBox} />
        </ContentBox>
      </div>
    </section>
  );
};
