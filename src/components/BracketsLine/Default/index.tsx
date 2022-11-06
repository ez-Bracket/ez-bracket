interface IlineBrackets {
  className?: string;
}

export const BracketsLine = ({
  className,
}: IlineBrackets) => {
  return (
    <div className="flex justify-start items-center ml-52 -mt-[110px]">
      <div className="flex justify-start items-start w-[58px] flex-wrap rounded">
        <p className="w-[48px] h-[1.1px] bg-gray-100"></p>
        <p className="w-[48px] h-[1.1px] bg-gray-100 mt-[82px]"></p>
      </div>
      <div className="-mx-[30px] rounded">
        <p className="w-[41px] h-[1.1px] bg-gray-100 rotate-90 mb-5"></p>
        <p className="w-[48px] h-[1.1px] bg-gray-100 mx-5"></p>
        <p className="w-[41px] h-[1.1px] bg-gray-100 rotate-90 mt-5"></p>
      </div>
    </div>
  );
};
