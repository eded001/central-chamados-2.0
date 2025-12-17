import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    username: string;
    onNewTicket: () => void;
    client: boolean
}

export default function Header({ username, onNewTicket, client }: HeaderProps) {
    return (
        <header className="w-full border-b py-5">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Olá, <code className="text-sky-600">{username}</code>
                    </h1>
                    <p className="text-slate-600">
                        Acompanhe e abra chamados de suporte
                    </p>
                </div>

                {client && (
                    <Button
                        onClick={onNewTicket}
                        className="flex items-center gap-2"
                    >
                        <Plus className="h-4 w-4 text-sky-300" />
                        Novo Chamado
                    </Button>
                )}
            </div>
        </header>
    );
}