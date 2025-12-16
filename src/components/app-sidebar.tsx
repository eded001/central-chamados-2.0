// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Home, Inbox, Settings, User, LogOut, ChevronUp } from "lucide-react";

import { useLocation, Link } from "react-router";

import Logo from "@/components/Logo";

export function AppSidebar() {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <div className="flex justify-center items-center flex-col gap-2 px-2 min-w-0">
                    <Logo />
                    <h1 className="font-semibold text-xl text-center text-zinc-700">
                        Central de Chamados <br /> <b>SEMCULT</b>
                    </h1>
                </div>
            </SidebarHeader>

            <SidebarContent className="overflow-x-hidden flex items-center">
                <SidebarSeparator />

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathName === "/"}>
                                    <Link to="/">
                                        <Home />
                                        <span>Visão Geral</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Inbox />
                                    <span>Chamados</span>
                                </SidebarMenuButton>

                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link to="/requests">
                                                <span>Todos</span>
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>

                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <a href="#">
                                                <span>Abertos</span>
                                            </a>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>

                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <a href="#">
                                                <span>Em Atendimento</span>
                                            </a>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>

                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <a href="#">
                                                <span>Resolvidos</span>
                                            </a>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>

                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <a href="#">
                                                <span>Arquivados</span>
                                            </a>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />
            </SidebarContent>

            <SidebarFooter className="bg-zinc-200 rounded-b-2xl border-t-2 border-t-zinc-300">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton size="lg" className="w-full justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="/avatar.png" alt="Usuário" />
                                            <AvatarFallback className="bg-zinc-300">
                                                <span className="text-zinc-500">EA</span>
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col text-left text-sm leading-tight">
                                            <span className="font-medium">Edgar Augusto</span>
                                            <span className="text-muted-foreground text-xs">
                                                Dep. de Ação Cultural
                                            </span>
                                        </div>
                                    </div>
                                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-56" align="end" side="top">
                                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <User />
                                    <span>Perfil</span>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Settings />
                                    <span>Configurações</span>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <LogOut className="text-red-600" />
                                    <span className="text-red-500 font-semibold">Sair</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}