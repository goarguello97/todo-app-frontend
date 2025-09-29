import { Tab, Tabs } from "react-bootstrap";

const TabsComponent = () => {
  return (
    <Tabs
      defaultActiveKey="all"
      className="mb-3 pt-4 w-100 items-center justify-around"
    >
      <Tab eventKey="all" title="Todas" className="flex-grow text-center"></Tab>
      <Tab
        eventKey="pending"
        title="Pendientes"
        className="flex-fill text-center"
      ></Tab>
      <Tab
        eventKey="completes"
        title="Completadas"
        className="flex-fill text-center"
      ></Tab>
    </Tabs>
  );
};

export default TabsComponent;
