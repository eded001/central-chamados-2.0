import * as AuthService from "../services/auth.service.js";

export async function register(req, res) {
    try {
        const user = await AuthService.register(req.body);
        res.status(201).json({ message: "Usuário cadastrado com sucesso", user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export async function login(req, res) {
    try {
        const session = await AuthService.login(req.body);
        res.status(200).json(session);
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
}