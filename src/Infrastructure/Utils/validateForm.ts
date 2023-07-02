import * as yup from "yup";

export const LoginValidate = yup.object().shape({
    user: yup.string().trim().required("El username es requerido"),
    password: yup.string().trim().required("El password es requerido")
})