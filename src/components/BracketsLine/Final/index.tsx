interface IlineFinal {
  className?: string;
}

export const LineFinal = ({ className }: IlineFinal) => {
  return (
    <div className={className}>
      <div className="flex justify-start items-start w-[58px] flex-wrap rounded">
        <p className="w-[60px] h-[1.1px] bg-gray-100 mb-[200px]"></p>
        <p className="w-[60px] h-[1.1px] bg-gray-100 mt-[200px]"></p>
      </div>
      <div className="-mx-[55px] rounded">
        <p className="w-[205px] h-[1.1px] bg-gray-100 rotate-90 mb-24 -mx-12"></p>
        <p className="w-[48px] h-[1.1px] bg-gray-100 mx-[55px]"></p>
        <p className="w-[205px] h-[1.1px] bg-gray-100 rotate-90 mt-24 -mx-12"></p>
      </div>
    </div>
  );
};