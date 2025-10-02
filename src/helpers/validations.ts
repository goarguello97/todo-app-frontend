export const validationRegister = (values: any) => {
  let errors: any = {};

  if (!values.name) {
    errors.name = "El nombre es requerido.";
  } else if (values.name.length < 2) {
    errors.name = "El nombre debe tener mínimo 3 caracteres.";
  } else if (values.name.length > 25) {
    errors.name = "El nombre no puede tener más de 25 caracteres.";
  }

  if (!values.email) {
    errors.email = "El email es requerido.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 50) {
    errors.email = "El email no debe poseer más de 50 caracteres";
  }

  if (!values.password) {
    errors.name = "La contraseña es requerida.";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "La contraseña no es válida. Debe contener una mayuscula, un número y un caracter especial.";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña debe tener como mínimo 8 caracteres.";
  } else if (values.password.length > 30) {
    errors.password = "La contraseña no debe poseer más de 30 caracteres.";
  } else if (values.password !== values.password2) {
    errors.password = "Las contraseñas no coinciden.";
  }

  return errors;
};

export const validationLogin = (values: any) => {
  let errors: any = {};
  if (!values.email) {
    errors.email = "El email es requerido.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 30) {
    errors.email = "El email no debe poseer más de 30 caracteres";
  }

  if (!values.password) {
    errors.password = "La contraseña es requerido.";
  }
  return errors;
};

export const validationTask = (values: any) => {
  let errors: any = {};

  if (!values.task) {
    errors.task = "La tarea es obligatoria.";
  }

  return errors;
};
