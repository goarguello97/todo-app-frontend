import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/userContext";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="/register" element={<Home />} />
        <Route path="/login" element={<Home />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
