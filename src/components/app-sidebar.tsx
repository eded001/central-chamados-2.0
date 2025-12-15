import { Calendar, Home, Inbox, Settings, Plus, Ticket, User, Users, Clock, Archive, Bell, LogOut, AlertCircle, CheckCircle2 } from "lucide-react"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarSeparator } from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="sidebar">
            {/* HEADER */}
            <SidebarHeader className="border-2 border-red-500">
                <div className="flex items-center gap-2 px-2">
                    <Ticket className="h-5 w-5" />
                    <span className="font-semibold">Central de Chamados</span>
                </div>
            </SidebarHeader>

            <SidebarContent className="border-2 border-green-500">
                {/* DASHBOARD */}
                <SidebarGroup className="border-2 border-blue-500">
                    <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive>
                                    <a href="#">
                                        <Home />
                                        <span>Visão Geral</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                {/* CHAMADOS */}
                <SidebarGroup className="border-2 border-blue-500">
                    <div className="flex items-center justify-between">
                        <SidebarGroupLabel>Chamados</SidebarGroupLabel>
                        <SidebarGroupAction title="Novo Chamado">
                            <Plus />
                            <span className="sr-only">Criar chamado</span>
                        </SidebarGroupAction>
                    </div>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Inbox />
                                        <span>Todos</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <AlertCircle />
                                        <span>Abertos</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Clock />
                                        <span>Em Atendimento</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <CheckCircle2 />
                                        <span>Resolvidos</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Archive />
                                        <span>Arquivados</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                {/* AGENDA */}
                <SidebarGroup className="border-2 border-blue-500">
                    <SidebarGroupLabel>Agenda</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Calendar />
                                        <span>SLAs & Prazos</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                {/* USUÁRIOS */}
                <SidebarGroup className="border-2 border-blue-500">
                    <SidebarGroupLabel>Gestão</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <User />
                                        <span>Meu Perfil</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Users />
                                        <span>Equipe</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                {/* loading (skeleton) */}
                {/* <SidebarGroup>
                    <SidebarGroupLabel>Carregando</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuSkeleton />
                            <SidebarMenuSkeleton />
                            <SidebarMenuSkeleton />
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup> */}
            </SidebarContent>

            {/* FOOTER */}
            <SidebarFooter className="border-2 border-yellow-500">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <Bell />
                                <span>Notificações</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <Settings />
                                <span>Configurações</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <LogOut />
                                <span>Sair</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}