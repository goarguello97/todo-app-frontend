import { Toast } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const Task = () => {
  return (
    <Toast className="!w-full mb-3">
      <Toast.Header>
        <strong className="me-auto">Tarea</strong>
        <small>
          {new Date().toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </small>
      </Toast.Header>
      <div className="flex items-center">
        <Toast.Body className="text-start flex-grow">
          Esta es una tarea de prueba.
        </Toast.Body>
        <button className="!m-[12px]">
          <FaCheck />
        </button>
      </div>
    </Toast>
  );
};

export default Task;
