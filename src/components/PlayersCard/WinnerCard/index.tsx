import { BsTrophy } from 'react-icons/bs';
import imgTeste from '../../../assets/teste foto time 2.jpg';

export const WinnerCard = () => {
  return (
    <div className="flex flex-col mt-36">
      <div className="flex w-[230px] h-9 items-center justify-center gap-4">
        <h2 className="text-3xl text-yellow-100 font-winner leading-8">
          VENCEDOR
        </h2>
        <BsTrophy size={25} color="#FACD35" />
      </div>
      <div className="h-[300px] w-[230px] flex flex-col items-center justify-start pt-8 gap-5 border-2 border-yellow-100 rounded-lg bg-gray-400">
        <img src={imgTeste} alt="" className="w-24 h-24 rounded-full mt-3" />
        <h2 className="text-xl leading-6 text-yellow-100 mt-3">API Team</h2>
        <div className="flex gap-2">
          <p className="text-sm leading-4 text-gray-100">10W</p>
          <span className="text-sm leading-4 text-gray-100">-</span>
          <p className="text-sm leading-4 text-gray-100">2L</p>
        </div>
      </div>
    </div>
  );
};
