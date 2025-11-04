import * as yup from "yup";

// cadastro
export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, "O nome deve ter no mínimo 3 caracteres.")
        .required("O nome é obrigatório."),
    email: yup
        .string()
        .email("Digite um e-mail válido.")
        .required("O e-mail é obrigatório."),
    password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres.")
        .required("A senha é obrigatória."),
    department: yup
        .string()
        .required("Selecione um departamento."),
});

// login
export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Digite um e-mail válido.")
        .required("O e-mail é obrigatório."),
    password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres.")
        .required("A senha é obrigatória."),
});

// recuperar senha
export const forgotPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .email("Digite um e-mail válido.")
        .required("O e-mail é obrigatório para recuperação."),
});

// update senha
export const changePasswordSchema = yup.object().shape({
    currentPassword: yup
        .string()
        .required("A senha atual é obrigatória."),
    newPassword: yup
        .string()
        .min(6, "A nova senha deve ter pelo menos 6 caracteres.")
        .required("A nova senha é obrigatória."),
    confirmNewPassword: yup
        .string()
        .oneOf([yup.ref("newPassword"), null], "As senhas não coincidem.")
        .required("A confirmação da senha é obrigatória."),
});

// update perfil
export const profileUpdateSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, "O nome deve ter no mínimo 3 caracteres.")
        .required("O nome é obrigatório."),
    email: yup
        .string()
        .email("Digite um e-mail válido.")
        .required("O e-mail é obrigatório."),
    phone: yup
        .string()
        .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Digite um número de telefone válido.")
        .required("O telefone é obrigatório."),
});