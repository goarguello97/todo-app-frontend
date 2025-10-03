import { createContext, useContext, useState, type ReactNode } from "react";
import axiosConfig from "../config/axiosConfig";
import { UserContext } from "./userContext";

type CreateValues = { task: string; userId: string };

type TaskContextType = {
  createTask: (values: CreateValues) => Promise<void>;
  loading: boolean;
};

export const TaskContext = createContext<TaskContextType>(
  {} as TaskContextType
);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const { user } = useContext(UserContext);

  const createTask = async (values: any) => {
    try {
      setLoading(true);
      const { data } = await axiosConfig.post("/tasks", {
        ...values,
        userId: user.id,
      });
      setTask(data.data);
      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.errors);
    }
  };

  return (
    <TaskContext.Provider value={{ createTask, loading }}>
      {children}
    </TaskContext.Provider>
  );
}
