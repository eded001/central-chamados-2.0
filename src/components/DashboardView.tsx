import { Clock, MessageSquare, CheckCircle, ChevronRight } from "lucide-react";
import { NavbarSearch } from "@/components/ui/shadcn-io/navbar-14";
import KPICard from "@/components/KPICard";
import TicketsTable from "@/components/TicketsTable";

import type { Ticket } from "@/types/ticket.type";
import type { KPIs } from "@/types/kpi.type";

export default function DashboardView({ tickets, kpis }: { tickets: Ticket[]; kpis: KPIs }) {
    return (
        <div className="space-y-8">
            <NavbarSearch
                searchPlaceholder="Pesquisar chamados"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />

            <div className="grid gap-4 md:grid-cols-3">
                <KPICard title="Em Aberto" value={kpis.open} icon={Clock} iconColor="text-blue-500" />
                <KPICard title="Respondidos" value={kpis.replied} icon={MessageSquare} iconColor="text-yellow-500" />
                <KPICard title="Resolvidos no Mês" value={kpis.resolvedMonth} icon={CheckCircle} iconColor="text-green-500" />
            </div>

            <div className="rounded-lg border">
                <div className="p-6 border-b flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">Chamados</h2>
                        <p className="text-sm text-slate-500">Lista de chamados do usuário</p>
                    </div>
                    <button className="flex items-center gap-1 text-zinc-600 hover:text-zinc-700">
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