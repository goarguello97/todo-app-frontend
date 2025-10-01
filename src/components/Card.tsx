import AddTask from "./AddTask";
import Header from "./Header";
import TabsComponent from "./Tabs";
const CardComponent = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-12 h-[95vh] w-[90vw] relative">
      <Header />
      <main className="row-span-12 h-full bg-gray-100 p-4 border border-t-0 rounded-lg rounded-t-none flex flex-col">
        <AddTask />
        <TabsComponent />
      </main>
    </div>
  );
};

export default CardComponent;
