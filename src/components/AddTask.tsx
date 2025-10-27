import { useContext, useEffect } from "react";
import { TASK_INITIAL_VALUE } from "../constants";
import { TaskContext } from "../context/taskContext";
import { validationTask } from "../helpers/validations";
import useForm from "../hooks/useForm";

const AddTask = () => {
  const { createTask, tasks, error } = useContext(TaskContext);

  const { values, errors, handleChange, handleSubmit } = useForm(
    TASK_INITIAL_VALUE,
    createTask,
    validationTask
  );

  useEffect(() => {return}, []);

  return (
    <div className="w-full xs:!px-2 sm:!px-8 md:!px-12">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex items-center gap-2 relative"
      >
        <input
          className="flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#212529] !px-3 !py-2"
          type="text"
          name="task"
          value={values.task}
          onChange={handleChange}
          placeholder="Ingresa tu tarea aquí..."
        />

        <button
          type="submit"
          className="rounded bg-[#FFFFFF] hover:bg-[#212529] hover:text-[#E9ECEF] text-[#495057] border border-[#6C757D] hover:border-[#FFFFFF] !text-sm sm:!text-base md:!text-lg !px-2 !py-1 sm:!px-3 sm:!py-2 whitespace-nowrap !my-2"
        >
          Añadir Tarea
        </button>
        {Object.keys(errors).length != 0 && (
          <div className="absolute w-auto h-auto text-[#E9ECEF] bg-[#212529] !px-3 !py-2">
            {Object.values(errors).map((err, i) => (
              <p key={i}>{String(err)}</p>
            ))}
          </div>
        )}
        {error.length != 0 && (
          <div className="absolute w-auto h-auto text-[#E9ECEF] bg-[#212529] !px-3 !py-2">
            {error.map((err, i) => (
              <p key={i}>{err.message}</p>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddTask;
