import { ReactNode } from 'react';

interface iContentBox {
  children: ReactNode;
  title: string;
  text: string;
}

export const ContentBox = ({ children, title, text }: iContentBox) => {
  return (
    <div className=" min-w-[360px] w-[380px] h-[224px] p-8 border-2 border-green-100 rounded-[10px] bg-gray-500 flex flex-col justify-center gap-5">
      <header className="flex items-center gap-5">
        {children}
        <h2 className="text-green-100 text-3xl font-medium"> {title}</h2>
      </header>
      <p className="text-white pl-3">{text}</p>
    </div>
  );
};