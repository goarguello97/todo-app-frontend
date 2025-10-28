import { useContext, useEffect } from "react";
import { REGISTER_INITIAL_VALUES } from "../constants";
import { UserContext } from "../context/userContext";
import { validationRegister } from "../helpers/validations";
import useForm from "../hooks/useForm";

const Register = () => {
  const { register, successRegister } = useContext(UserContext);

  const { values, errors, handleChange, handleSubmit } = useForm(
    REGISTER_INITIAL_VALUES,
    register,
    validationRegister
  );

  useEffect(() => {
    setTimeout(() => {}, 5000);
  }, []);

  return (
    <div className="xs:!px-2 sm:!px-8 md:!px-12 h-[100%] !mb-2 overflow-y-auto flex-1">
      <div className="h-full flex flex-col">
        <h2 className="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold !my-2">
          Registrarse
        </h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex-1 flex flex-col justify-start items-start md:items-center !text-sm sm:!text-base md:!text-lg"
        >
          <label htmlFor="formControlName" className="font-medium">
            Nombre
          </label>
          <input
            type="text"
            id="formControlName"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            className="w-full md:w-[50%] rounded text-sm bg-[#E9ECEF] border border-[#212529] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#212529] !px-3 !py-2 !my-2"
            min={3}
            max={30}
          />
          <label htmlFor="formControlEmail" className="font-medium">
            Email
          </label>
          <input
            type="email"
            id="formControlEmail"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            className="w-full md:w-[50%] rounded text-sm bg-[#E9ECEF] border border-[#212529] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#212529] !px-3 !py-2 !my-2"
          />
          <label htmlFor="formControlPassword" className="font-medium">
            Contraseña
          </label>
          <input
            type="password"
            id="formControlPassword"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
            className="w-full md:w-[50%] rounded text-sm bg-[#E9ECEF] border border-[#212529] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#212529] !px-3 !py-2 !my-2"
          />
          <label htmlFor="formControlPassword2" className="font-medium">
            Repita su contraseña
          </label>
          <input
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
            id="formControlPassword2"
            required
            className="w-full md:w-[50%] rounded text-sm bg-[#E9ECEF] border border-[#212529] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#212529] !px-3 !py-2 !my-2"
          />
          <button
            type="submit"
            className="rounded bg-[#FFFFFF] hover:bg-[#212529] hover:text-[#E9ECEF] text-[#495057] border border-[#6C757D] hover:border-[#FFFFFF] !text-sm sm:!text-base md:!text-lg !px-2 !py-1 sm:!px-3 sm:!py-2 whitespace-nowrap !my-2"
          >
            Registrarse
          </button>
          {Object.keys(errors).length != 0
            ? Object.values(errors).map((error, i) => (
                <label className="text-red-600" key={i}>
                  {String(error)}
                </label>
              ))
            : null}
          {successRegister.message && (
            <label className="text-green-600">{successRegister.message}</label>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
