import { getStatusBadgeVariant } from "@/utils/getStatusBadgeVariant";

import type { Ticket } from "@/types/ticket.type";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Ticket as IconTicket } from "lucide-react";

export default function TicketsTable({ tickets }: { tickets: Ticket[] }) {
    if (tickets.length === 0) {
        return (
            <Empty className="p-0">
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                        <IconTicket />
                    </EmptyMedia>

                    <EmptyTitle>Nenhum chamado encontrado</EmptyTitle>

                    <EmptyDescription>
                        Ainda não há chamados registrados ou nenhum corresponde à busca.
                    </EmptyDescription>
                </EmptyHeader>
            </Empty>
        )
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">ID</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Assunto</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Categoria</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Status</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-slate-600">Data</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket) => (
                        <tr key={ticket.id} className="border-b hover:bg-slate-50">
                            <td className="py-3 px-4">#{ticket.id}</td>
                            <td className="py-3 px-4">{ticket.title}</td>
                            <td className="py-3 px-4">{ticket.category}</td>
                            <td className="py-3 px-4">
                                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-md border ${getStatusBadgeVariant(ticket.status)}`}>
                                    {ticket.status}
                                </span>
                            </td>
                            <td className="py-3 px-4 text-right">{ticket.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}