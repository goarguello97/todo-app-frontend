import Card from "react-bootstrap/Card";
import Header from "./Header";

const CardComponent = () => {
  return (
    <div className="grid grid-rows-[150px_1fr] h-screen justify-items-center p-4">
      <Header />
      <main className="w-full max-w-7xl overflow-auto">
        <Card className="w-full max-w-7xl h-full min-h-full border !border-[#212529] !border-t-0 !rounded-lg !rounded-t-none shadow-sm"></Card>
      </main>
    </div>
  );
};

export default CardComponent;
