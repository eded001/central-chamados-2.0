import { useState } from "react";

export default function Welcome() {
    const [name, setName] = useState("${Username}");
    return (
        <p className="text-lg">Olá, <b>{name}</b>! Seja muito bem-vindo à sua central de chamados. Aqui você encontrará os seus chamados.</p>
    );
}