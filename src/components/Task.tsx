import { AiOutlineClose } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

const Task = ({ done }: { done: boolean }) => {
  const title = "Aprender React con TailwindCSS";
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
          >
            <FaCheck size={20} />
          </button>
        )}

        <button
          className="p-1 text-red-600 hover:text-red-700 focus:outline-none"
          aria-label="Eliminar tarea"
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
};

export default Task;
