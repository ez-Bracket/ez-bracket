import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { ButtonNav } from "../ButtonNav";
import { Logo } from "../Logo";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ContextModal } from "../../contexts/ModalContext";

export const DashboardMenu = () => {
  const { Logout } = useContext(UserContext);

  const { onOpenInfoUser, onOpenNewCamp } =
    useContext(ContextModal);

  return (
    <nav className="fixed bottom-0 flex tablet:justify-center py-4 tablet:py-10 bg-transparent border-t-2 tablet:border-t-0 tablet:border-r-2 border-green-100 tablet:h-screen w-full tablet:w-32">
      <div className="mx-4 flex tablet:flex-col tablet:items-center tablet:gap-0 justify-between w-full">
        <div className="flex tablet:flex-col tablet:items-center tablet:gap-16 w-[50%] justify-around">
          <Link to="/dashboard">
            <Logo className="w-10 tablet:w-20 hover:scale-110 transition-transform" />
          </Link>
          <ButtonNav onCLick={onOpenNewCamp}>
            <IoMdAdd className="text-4xl" />
          </ButtonNav>
        </div>
        <div className="flex tablet:flex-col items-center gap-5 tablet:gap-16 w-[50%] justify-around">
          <ButtonNav onCLick={onOpenInfoUser}>
            <BiUser className="text-4xl" />
          </ButtonNav>
          <button onClick={Logout}>
            <FiLogOut className="text-green-100 text-4xl hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </nav>
  );
};
