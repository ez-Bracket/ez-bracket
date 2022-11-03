import { ReactNode } from 'react';

interface IButtonNav {
  children: ReactNode;
}

export const ButtonNav = ({ children }: IButtonNav) => {
  return (
    <button className="tablet:bg-gray-300 tablet:border-[1px] border-green-100 text-green-100 w-14 h-14 tablet:w-[70px] tablet:h-[70px] rounded-full flex justify-center items-center tablet:hover:even:bg-green-100 tablet:hover:even:text-green-200 transition-all hover:scale-110">
      {children}
    </button>
  );
};
