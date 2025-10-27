import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { TaskContext } from "../context/taskContext";

const Task = ({
  done,
  title,
  id,
}: {
  done: boolean;
  title: string;
  id: string;
}) => {
  const { updateTask, deleteTask } = useContext(TaskContext);
  return (
    <div className="flex items-center justify-between w-full bg-white border border-gray-200 rounded !p-2">
      <div className="flex items-center gap-3">
        <span
          className={`text-sm font-medium ${
            done ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {title}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {done || (
          <button
            className="p-1 text-green-600 hover:text-green-700 focus:outline-none"
            aria-label="Marcar como completa"
            onClick={(e) => {
              e.preventDefault();
              if (confirm("¿Deseas marcar la tarea como completa?")) {
                updateTask({ done: true, id });
              }
            }}
          >
            <FaCheck size={20} />
          </button>
        )}

        <button
          className="p-1 text-red-600 hover:text-red-700 focus:outline-none"
          aria-label="Eliminar tarea"
          onClick={(e) => {
            e.preventDefault();
            if (confirm("¿Deseas eliminar la tarea?")) {
              deleteTask(id);
            }
          }}
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
};

export default Task;
