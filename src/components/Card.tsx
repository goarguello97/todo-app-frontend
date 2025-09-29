import Card from "react-bootstrap/Card";
import AddTask from "./AddTask";
import Header from "./Header";

const CardComponent = () => {
  return (
    <div className="grid grid-rows-[150px_1fr] h-screen justify-items-center p-4 sm:p-8 md:p-12 lg:p-24">
      <Header />
      <main className="flex w-full max-w-7xl overflow-auto flex-col">
        <Card className="w-full max-w-7xl h-full min-h-full border !border-[#212529] !border-t-0 !rounded-lg !rounded-t-none shadow-sm p-4 sm:p-8 md:p-12 lg:p-24">
          <AddTask />
        </Card>
      </main>
    </div>
  );
};

export default CardComponent;
