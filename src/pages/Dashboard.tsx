import Header from "@/components/Header"
import DashboardView from "@/components/DashboardView"

import type { KPIs } from "@/types/kpi.type"
import type { Ticket } from "@/types/ticket.type"

    const tickets: Ticket[] = []
    const kpis: KPIs = {
        open: 0,
        replied: 0,
        resolvedMonth: 0,
    }

    return (
        <div>
            <Header
                username="$userName"
                client={true}
            />

            <main className="container max-w-6xl mx-auto py-8 px-4 space-y-8">
                <DashboardView tickets={tickets} kpis={kpis} />
            </main>
        </div>
    )
}