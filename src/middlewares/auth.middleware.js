import supabase from "@/api/config/supabase";

export async function verifyAuth(req, res, next) {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) return res.status(401).json({ error: "Token ausente" });

        const { data, error } = await supabase.auth.getUser(token);
        if (error || !data?.user) return res.status(401).json({ error: "Token inválido" });

        req.user = data.user;
        next();
    } catch {
        res.status(401).json({ error: "Falha na autenticação" });
    }
}