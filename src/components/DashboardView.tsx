import { Clock, MessageSquare, CheckCircle, ChevronRight } from "lucide-react";
import { NavbarSearch } from "@/components/ui/navbar-seach";
import KPICard from "@/components/KPICard";
import TicketsTable from "@/components/TicketsTable";
import { CreateTicketDialog } from "@/components/CreateTicketDialog";

import type { Ticket } from "@/types/ticket.type";
import type { KPIs } from "@/types/kpi.type";

export default function DashboardView({
    tickets,
    kpis,
}: {
    tickets: Ticket[];
    kpis: KPIs;
}) {
    function handleCreateTicket(data: {
        title: string;
        problem: string;
        priority: string;
        description?: string;
    }) {
        alert(
            `Chamado criado:
Título: ${data.title}
Problema: ${data.problem}
Prioridade: ${data.priority}
Descrição: ${data.description ?? "N/A"}`
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex border rounded-md justify-between items-center gap-5 p-2">
                <NavbarSearch
                    searchPlaceholder="Pesquisar chamados"
                    className="flex-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />

                <CreateTicketDialog onCreate={handleCreateTicket} />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <KPICard
                    title="Em Aberto"
                    value={kpis.open}
                    icon={Clock}
                    iconColor="text-sky-500"
                />
                <KPICard
                    title="Respondidos"
                    value={kpis.replied}
                    icon={MessageSquare}
                    iconColor="text-yellow-500"
                />
                <KPICard
                    title="Resolvidos no Mês"
                    value={kpis.resolvedMonth}
                    icon={CheckCircle}
                    iconColor="text-green-500"
                />
            </div>

            <div className="rounded-lg border">
                <div className="p-6 border-b flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">Chamados</h2>
                        <p className="text-sm text-slate-500">Lista de chamados do usuário</p>
                    </div>
                    <button className="flex items-center gap-1 text-sky-600 hover:text-sky-700">
                        Histórico <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
                <div className="p-6">
                    <TicketsTable tickets={tickets} />
                </div>
            </div>
        </div>
    );
}