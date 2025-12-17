import { useState } from "react"
import Header from "@/components/Header"
import DashboardView from "@/components/DashboardView"

import type { KPIs } from "@/types/kpi.type"
import type { Ticket } from "@/types/ticket.type"
import NewTicketView from "@/components/TicketModal"

export default function HelpdeskClientScreen() {
    const [view, setView] = useState<"dashboard" | "new-ticket">("dashboard")

    const tickets: Ticket[] = []
    const kpis: KPIs = {
        open: 0,
        replied: 0,
        resolvedMonth: 0,
    }

    return (
        <div>
            <Header username="$username" onNewTicket={() => setView("new-ticket")} client={true} />

            <main className="container max-w-6xl mx-auto py-8 px-4 space-y-8">
                {view === "dashboard" ? (
                    <DashboardView tickets={tickets} kpis={kpis} />
                ) : (
                    <NewTicketView />
                )}
            </main>
        </div>
    )
}