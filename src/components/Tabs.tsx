import { useState } from "react";

const TabsComponent = () => {
  const [active, setActive] = useState("Todas");

  const tabs = ["Todas", "Pendientes", "Completadas"];
  return (
    <>
      <div className="flex gap-2 border-b border-gray-300 w-full xs:!px-2 sm:!px-8 md:!px-12 !mb-2 items-center justify-evenly">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded  hover:bg-[#212529] hover:text-[#212529] text-[#495057] border border-[#6C757D] hover:[#212529] !text-sm sm:!text-base md:!text-lg !px-2 !py-1 sm:!px-3 sm:!py-2 whitespace-nowrap !my-2 shadow-lg/30 ${
              active === tab
                ? "bg-[#212529] text-white hover:text-[#E9ECEF]"
                : "bg-[#E9ECEF] text-[#212529] hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="xs:!px-2 sm:!px-8 md:!px-12 h-[100%] !mb-2 overflow-y-auto flex-1">
        {active === "Todas" && (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Pendientes
            </h2>
            <div className="w-full flex justify-center"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Completadas
            </h2>
          </>
        )}

        {active === "Pendientes" && (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Pendientes
            </h2>
            <div className="w-full flex justify-center"></div>
          </>
        )}

        {active === "Completadas" && (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Completadas
            </h2>
          </>
        )}
      </div>
    </>
  );
};

export default TabsComponent;
