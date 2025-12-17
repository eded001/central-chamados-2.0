import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router"

export default function Layout() {
    return (
        <SidebarProvider>
            <div className="flex bg-sky-800 w-screen">
                <AppSidebar />

                <main className="flex-1 bg-white m-2 rounded-lg">
                    <SidebarTrigger className="mb-4 md:hidden xl:hidden" />

                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    )
}