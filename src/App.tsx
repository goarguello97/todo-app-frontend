import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TaskProvider } from "./context/taskContext";
import { UserProvider } from "./context/userContext";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <UserProvider>
      <TaskProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
        </Routes>
      </TaskProvider>
    </UserProvider>
  );
}

export default App;
