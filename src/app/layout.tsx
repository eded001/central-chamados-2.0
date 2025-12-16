import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router"

export default function Layout() {
    return (
        <SidebarProvider>
            <div className="flex bg-zinc-800 w-screen">
                <AppSidebar />

                <main className="flex-1 bg-white m-2 p-2 rounded-lg overflow-auto">
                    <SidebarTrigger className="mb-4 md:hidden xl:hidden" />

                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    )
}