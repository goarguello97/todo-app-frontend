import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/userContext";
import Home from "./pages/Home";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
