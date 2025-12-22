import * as z from "zod";

export const Registry = z.object({
    name: z.string(),
    password: z.string(),
    department: z.string(),
    email: z.email()
});

export const Login = z.object({
    email: z.email(),
    password: z.string()
});