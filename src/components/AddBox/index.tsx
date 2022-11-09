import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";

// Utilities
import { ContextModal } from "../../contexts/ModalContext";

export const AddBox = () => {
  const { onOpenNewCamp } = useContext(ContextModal);

  return (
    <button
      onClick={onOpenNewCamp}
      className="relative h-[225px] w-full laptop:w-[380px] desktop:w-[450px] p-8 border-2 border-gray-100 rounded-xl bg-gray-500 bg-opacity-40 flex flex-col justify-center items-center shadow-[0_25px_30px_-15px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-gray-300 hover:scale-[1.01] transition-all mb-[100px] tablet:mb-0"
    >
      <span className="border-[1px] border-gray-100 w-[70px] h-[70px] rounded-full flex justify-center items-center">
        <IoMdAdd className="text-4xl text-gray-100" />
      </span>
    </button>
  );
};
