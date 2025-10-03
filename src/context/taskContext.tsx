import { createContext, useState, type ReactNode } from "react";
import axiosConfig from "../config/axiosConfig";

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
  const [error, setError] = useState({});

  const createTask = async (values: any) => {
    try {
      setLoading(true);
      const { data } = await axiosConfig.post("/tasks", values);
      setTask(data.data);
      setLoading(false);
    } catch (error: any) {
      setError({ message: error.response.data.message });
    }
  };

  return (
    <TaskContext.Provider value={{ createTask, loading }}>
      {children}
    </TaskContext.Provider>
  );
}
