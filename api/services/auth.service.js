import { supabase } from "../lib/supabase.js";

export async function register({ name, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    const userId = data.user.id;

    // adiciona dados na tabela users
    const { error: insertError } = await supabase
        .from("users")
        .insert([{ id: userId, name, email }]);

    if (insertError) throw new Error(insertError.message);

    return { id: userId, email, name };
}

export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error("Email ou senha inválidos");

    // retorna o token do Supabase
    return {
        token: data.session.access_token,
        user: data.user,
    };
}