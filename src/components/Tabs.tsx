import { Tab, Tabs } from "react-bootstrap";
import Task from "./Task";

const TabsComponent = () => {
  return (
    <Tabs
      defaultActiveKey="all"
      className="mb-3 pt-4 w-100 justify-around flex-nowrap"
    >
      <Tab
        eventKey="all"
        title={
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
            Todas
          </span>
        }
        className="flex-grow text-start"
      >
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Pendientes
        </span>
        <hr />
        <Task />
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Completadas
        </span>
        <hr />
      </Tab>
      <Tab
        eventKey="pending"
        title={
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
            Pendientes
          </span>
        }
        className="flex-fill text-start"
      >
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Pendientes
        </span>
        <hr />
      </Tab>
      <Tab
        eventKey="completes"
        title={
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
            Completadas
          </span>
        }
        className="flex-fill text-start"
      >
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Completadas
        </span>
        <hr />
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;
