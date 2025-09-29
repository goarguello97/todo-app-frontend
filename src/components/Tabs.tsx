import { Tab, Tabs } from "react-bootstrap";
import Task from "./Task";

const TabsComponent = () => {
  return (
    <Tabs
      defaultActiveKey="all"
      className="mb-3 pt-4 w-100 items-center justify-around"
    >
      <Tab eventKey="all" title="Todas" className="flex-grow text-start">
        <span className="text-3xl font-bold tracking-tight">Pendientes</span>
        <hr />
        <Task />
        <span className="text-3xl font-bold tracking-tight">Completadas</span>
        <hr />
      </Tab>
      <Tab
        eventKey="pending"
        title="Pendientes"
        className="flex-fill text-start"
      >
        <span className="text-3xl font-bold tracking-tight">Pendientes</span>
        <hr />
      </Tab>
      <Tab
        eventKey="completes"
        title="Completadas"
        className="flex-fill text-start"
      >
        <span className="text-3xl font-bold tracking-tight">Completadas</span>
        <hr />
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;
