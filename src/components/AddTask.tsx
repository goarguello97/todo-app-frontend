import { Form } from "react-bootstrap";

const AddTask = () => {
  return (
    <div className="space-y-2">
      <Form className="flex items-center gap-2">
        <Form.Control
          className="flex-grow h-12"
          type="text"
          placeholder="Ingresa tu tarea aquí..."
        />

        <button
          type="submit"
          className="h-12 w-[200px] rounded bg-[#FFFFFF] hover:bg-[#212529] hover:text-[#E9ECEF] text-[#495057] border-1 border-[#6C757D] hover:border-[#FFFFFF]"
        >
          Añadir Tarea
        </button>
      </Form>
    </div>
  );
};

export default AddTask;
