import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/taskContext";
import Task from "./Task";

const TabsComponent = () => {
  const [active, setActive] = useState("Todas");
  const { tasks } = useContext(TaskContext);

  useEffect(() => {
    return;
  }, [tasks]);
  const tabs = ["Todas", "Pendientes", "Completas"];
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
        {active === "Todas" &&
          (tasks.length == 0 ? (
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              No hay tareas.
            </h2>
          ) : (
            <>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Pendientes
              </h2>
              {tasks.filter((task) => !task.done).length == 0 && (
                <p>No hay tareas pendientes.</p>
              )}
              {tasks.map(
                (task, i) =>
                  !task.done && (
                    <Task
                      done={task.done}
                      title={task.task}
                      id={task.id}
                      key={i}
                    />
                  )
              )}
              <div className="w-full flex justify-center"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Completas
              </h2>
              {tasks.filter((task) => task.done).length == 0 && (
                <p>No hay tareas completas.</p>
              )}
              {tasks.map(
                (task, i) =>
                  task.done && (
                    <Task
                      done={task.done}
                      title={task.task}
                      id={task.id}
                      key={i}
                    />
                  )
              )}
            </>
          ))}

        {active === "Pendientes" && (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Pendientes
            </h2>
            {tasks.filter((task) => !task.done).length == 0 && (
              <p>No hay tareas pendientes.</p>
            )}
            {tasks.map(
              (task, i) =>
                !task.done && (
                  <Task
                    done={task.done}
                    title={task.task}
                    id={task.id}
                    key={i}
                  />
                )
            )}
            <div className="w-full flex justify-center"></div>
          </>
        )}

        {active === "Completas" && (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Completas
            </h2>
            {tasks.filter((task) => task.done).length == 0 && (
              <p>No hay tareas completas.</p>
            )}
            {tasks.map(
              (task, i) =>
                task.done && (
                  <Task
                    done={task.done}
                    title={task.task}
                    id={task.id}
                    key={i}
                  />
                )
            )}
          </>
        )}
      </div>
    </>
  );
};

export default TabsComponent;
