import React from 'react';
import {
    Mail,
    Phone,
    Clock,
    CheckCircle2,
    AlertCircle,
    BarChart3,
    Building2,
    MoreHorizontal,
    Timer
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function HelpdeskProfile() {
    return (
        <div className="min-h-screen bg-slate-50/50 dark:bg-zinc-950 p-6">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Cabeçalho do Agente (Sem capa, estilo cartão de identificação) */}
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between bg-background p-6 rounded-xl border shadow-sm">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full">
                        <div className="relative">
                            <Avatar className="h-24 w-24 border-2 border-slate-100">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@agente" />
                                <AvatarFallback>AG</AvatarFallback>
                            </Avatar>
                            {/* Indicador de Status Online */}
                            <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full bg-green-500 border-4 border-white dark:border-zinc-900" title="Disponível"></span>
                        </div>

                        <div className="text-center md:text-left space-y-1">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <h1 className="text-2xl font-bold">Roberto Santos</h1>
                            </div>
                            <p className="text-muted-foreground font-medium">Analista de Suporte Técnico</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-1 justify-center md:justify-start">
                                <div className="flex items-center gap-1.5">
                                    <Building2 className="h-4 w-4" />
                                    <span>Infraestrutura</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="h-4 w-4" />
                                    <span>Turno: 08:00 - 14:00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto justify-center">
                        <Button variant="default">Ações Admin</Button>
                    </div>
                </div>

                {/* Métricas Rápidas (KPIs) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="pt-6 flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Chamados Hoje</p>
                                <p className="text-2xl font-bold">12</p>
                            </div>
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6 flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Em Aberto</p>
                                <p className="text-2xl font-bold text-orange-600">5</p>
                            </div>
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                                <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Conteúdo Principal */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Coluna Esquerda: Detalhes do Agente */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Contato Interno</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-medium">roberto.santos@empresa.com</p>
                                        <p className="text-muted-foreground">Email Corporativo</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Coluna Direita: Chamados e Atividade */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue="active_tickets" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-4">
                                <TabsTrigger value="active_tickets">Chamados Ativos</TabsTrigger>
                                <TabsTrigger value="history">Histórico Recente</TabsTrigger>
                            </TabsList>

                            <TabsContent value="active_tickets">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <div>
                                            <CardTitle>Fila de Atendimento</CardTitle>
                                            <CardDescription>Chamados atribuídos atualmente.</CardDescription>
                                        </div>
                                        <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="divide-y">
                                            {[
                                                { id: 'HD-4029', title: 'Erro ao acessar VPN', priority: 'Alta', time: '20 min', status: 'Em Análise' },
                                                { id: 'HD-4030', title: 'Impressora do RH travada', priority: 'Média', time: '45 min', status: 'Aguardando' },
                                                { id: 'HD-4031', title: 'Instalação do Adobe Reader', priority: 'Baixa', time: '1h', status: 'Em Progresso' },
                                                { id: 'HD-4035', title: 'Monitor piscando intermitente', priority: 'Média', time: '2h', status: 'Pendente' },
                                            ].map((ticket) => (
                                                <div key={ticket.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-mono text-xs text-muted-foreground">{ticket.id}</span>
                                                            <h4 className="font-semibold text-sm">{ticket.title}</h4>
                                                        </div>
                                                        <div className="flex gap-2 text-xs">
                                                            <Badge
                                                                variant={ticket.priority === 'Alta' ? 'destructive' : 'outline'}
                                                                className={ticket.priority === 'Alta' ? '' : 'text-muted-foreground'}
                                                            >
                                                                {ticket.priority}
                                                            </Badge>
                                                            <span className="text-muted-foreground flex items-center gap-1">
                                                                <Clock className="h-3 w-3" /> {ticket.time}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <Badge variant="secondary" className="mb-1">{ticket.status}</Badge>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 block ml-auto">
                                                            <span className="sr-only">Abrir</span>
                                                            →
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="history">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Chamados Encerrados</CardTitle>
                                        <CardDescription>Últimos chamados resolvidos esta semana.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground text-center py-8">
                                            Nenhum histórico disponível para visualização rápida no momento.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

            </div>
        </div>
    );
}