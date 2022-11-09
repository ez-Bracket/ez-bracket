interface ILineSemifinal {
  className?: string;
}

export const LineSemifinal = ({ className }: ILineSemifinal) => {
  return (
    <div className={className}>
      <div className="flex justify-start items-start w-[58px]  flex-wrap rounded">
        <div className="w-[52px] h-[1px] bg-gray-100 mb-[90px]"></div>
        <div className="w-[52px] h-[1px] bg-gray-100 mt-[90px]"></div>
      </div>
      <div className="-mx-[55px] rounded">
        <div className="w-[98px] h-[1px] bg-gray-100 rotate-90 mb-10"></div>
        <div className="w-[48px] h-[1px] bg-gray-100 mx-12"></div>
        <div className="w-[98px] h-[1px] bg-gray-100 rotate-90 mt-10"></div>
      </div>
    </div>
  );
};
