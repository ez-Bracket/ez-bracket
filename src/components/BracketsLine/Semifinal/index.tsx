interface IlineSemifinal {
  className?: string;
}

export const LineSemifinal = ({
  className,
}: IlineSemifinal) => {
  return (
    <div className={className}>
      <div className="flex justify-start items-start w-[58px]  flex-wrap rounded">
        <p className="w-[52px] h-[1.1px] bg-gray-100 mb-[90px]"></p>
        <p className="w-[52px] h-[1.1px] bg-gray-100 mt-[90px]"></p>
      </div>
      <div className="-mx-[55px] rounded">
        <p className="w-[98px] h-[1.1px] bg-gray-100 rotate-90 mb-10"></p>
        <p className="w-[48px] h-[1.1px] bg-gray-100 mx-12"></p>
        <p className="w-[98px] h-[1.1px] bg-gray-100 rotate-90 mt-10"></p>
      </div>
    </div>
  );
};
