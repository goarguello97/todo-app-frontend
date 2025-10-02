import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="row-span-1 w-full h-full p-4 bg-[#007BFF] border !border-[#212529] !border-b-[#212529] !rounded-lg !rounded-b-none shadow-sm xs:!px-2 sm:!px-8 md:!px-12 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          ToDo App
        </h1>
        {isOpen ? (
          <AiOutlineClose
            size={28}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <AiOutlineMenu
            size={28}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        <button
          type="submit"
          className="rounded bg-[#FFFFFF] hover:bg-[#212529] hover:text-[#E9ECEF] text-[#495057] border border-[#6C757D] hover:border-[#FFFFFF] !text-sm sm:!text-base md:!text-lg !px-2 !py-1 sm:!px-3 sm:!py-2 whitespace-nowrap !my-2 md:block hidden"
        >
          Iniciar Sesión
        </button>
      </header>
      <div
        className={`!box-border absolute bg-[#007BFF] w-full left-0 top-[8%] border border-t-0 border-[#212529] shadow-sm xs:!px-2 sm:!px-8 md:!px-12 flex items-center justify-end transform transition-all duration-300 ease-in-out ${
          !isOpen
            ? "opacity-0 -translate-y-5 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <button
          type="submit"
          className="rounded bg-[#FFFFFF] hover:bg-[#212529] hover:text-[#E9ECEF] text-[#495057] border-1 border-[#6C757D] hover:border-[#FFFFFF] !p-2 whitespace-nowrap !my-2"
        >
          Iniciar Sesión
        </button>
      </div>
    </>
  );
};

export default Header;
