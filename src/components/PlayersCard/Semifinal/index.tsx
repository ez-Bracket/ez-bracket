import { LineSemifinal } from "../../BracketsLine/Semifinal";

import imgteste from "../../../assets/Teste foto time 1.jpg";
import imgTeste from "../../../assets/teste foto time 2.jpg";

interface iSemiFinalProps {
  className?: string;
}

export const Semifinal = ({
  className,
}: iSemiFinalProps) => {
  return (
    <div className={className}>
      {/* Se status for win, chamar este card */}

      <div className="w-52 h-[70px] flex border-2 bg-gray-400 border-green-100 rounded-md items-center justify-between px-4">
        <img
          src={imgteste}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <h2 className="text-sm text-green-100 leading-3 font-normal">
          FigmaTeam
        </h2>
        <p className="text-sm text-green-100 leading-3 font-normal">
          W
        </p>
      </div>

      {/* Se status for lose, chamar este card */}

      <div className="w-52 h-[70px] flex border-2 bg-gray-400 border-error-100 rounded-md items-center justify-between px-4">
        <img
          src={imgTeste}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <h2 className="text-sm text-error-100 leading-3 font-normal">
          API Team
        </h2>
        <p className="text-sm text-error-100 leading-3 font-normal">
          L
        </p>
      </div>
      <LineSemifinal className="flex justify-start items-center ml-52 -mt-[325px]" />

      <div className="w-52 h-[70px] flex border-2 bg-gray-400 border-green-100 rounded-md items-center justify-between px-4">
        <img
          src={imgteste}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <h2 className="text-sm text-green-100 leading-3 font-normal">
          FigmaTeam
        </h2>
        <p className="text-sm text-green-100 leading-3 font-normal">
          W
        </p>
      </div>

      {/* Se status for lose, chamar este card */}

      <div className="w-52 h-[70px] flex border-2 bg-gray-400 border-error-100 rounded-md items-center justify-between px-4">
        <img
          src={imgTeste}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <h2 className="text-sm text-error-100 leading-3 font-normal">
          API Team
        </h2>
        <p className="text-sm text-error-100 leading-3 font-normal">
          L
        </p>
      </div>
      <LineSemifinal className="flex justify-start items-center ml-52 -mt-[325px]" />
    </div>
  );
};
