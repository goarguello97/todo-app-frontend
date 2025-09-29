import { Toast } from "react-bootstrap";

const Task = () => {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Tarea</strong>
        <small>{new Date().toISOString()}</small>
      </Toast.Header>
      <Toast.Body>Esta es una tarea de prueba.</Toast.Body>
    </Toast>
  );
};

export default Task;
