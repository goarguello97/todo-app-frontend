import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import axiosConfig from "../config/axiosConfig";
import { UserContext } from "./userContext";

type CreateValues = { task: string; userId: string };

type TaskContextType = {
  createTask: (values: CreateValues) => Promise<void>;
  updateTask: (values: any) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  getAllTasks: (userId: string) => Promise<void>;
  tasks: any[];
  loading: boolean;
  error: any[];
};

interface ErrorMessage {
  message: string;
}

export const TaskContext = createContext<TaskContextType>(
  {} as TaskContextType
);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [_, setTask] = useState({});
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorMessage[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (error.length != 0) {
      setTimeout(() => {
        setError([]);
      }, 3000);
    }
  }, [error]);

useMemo(() => ({ tasks, setTasks }), [tasks]);

  const createTask = async (values: any) => {
    try {
      setLoading(true);
      const { data } = await axiosConfig.post("/tasks", {
        ...values,
        userId: user.id,
      });
      setTask(data.data);
      await getAllTasks(user.id);

      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.errors);
    }
  };

  const updateTask = async (values: any) => {
    try {
      setLoading(true);
      await axiosConfig.put(`/tasks/${values.id}`, {
        done: values.done,
        id: values.id,
      });
      await getAllTasks(user.id);
      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.errors);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      setLoading(true);
      await axiosConfig.delete(`/tasks/${id}`);
      await getAllTasks(user.id);

      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.errors);
    }
  };

  const getAllTasks = async (userId: string) => {
    try {
      setLoading(true);
      const { data } = await axiosConfig.get(`/tasks/${userId}`);
      setTasks(data.data);
      setLoading(false);
    } catch (error: any) {
      let errorMessage = "Ocurrio un error desconocido. Intente nuevamente.";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      setError([{ message: errorMessage }]);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        createTask,
        updateTask,
        deleteTask,
        getAllTasks,
        tasks,
        loading,
        error,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
