import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Exit from "@/components/Exit";
import Welcome from "@/components/Welcome";
import FormTicket from "@/components/FormTicket";
import { Separator } from "@/components/ui/separator";
import Ticket from "@/components/Ticket";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Sidebar() {
    return (
        <Card className="w-full h-full flex flex-col">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <h1 className="text-5xl text-font-bold text-sky-700">Chamados</h1>
                    <Exit />
                </CardTitle>

                <CardDescription className="flex justify-between items-center">
                    <Welcome />

                    <FormTicket />
                </CardDescription>

                <Separator className="mt-2" />
            </CardHeader>

            <CardContent className="overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="flex flex-col space-y-4">
                        <Ticket
                            name="Falha crítica no servidor"
                            status="Open"
                            priority="High"
                            date="17/11/2025"
                        >
                            Serviço de autenticação está instável e afetando usuários.
                        </Ticket>

                        <Ticket
                            name="Ajuste de responsividade no dashboard"
                            status="Open"
                            priority="Medium"
                            date="16/11/2025"
                        >
                            Ajustar grid em telas menores que 1024px.
                        </Ticket>

                        <Ticket
                            name="Sugestão de melhoria no formulário"
                            status="Open"
                            priority="Low"
                            date="15/11/2025"
                        >
                            Usuário sugeriu alterar o placeholder do campo de e-mail.
                        </Ticket>

                        <Ticket
                            name="Erro no fluxo de pagamento"
                            status="Closed"
                            priority="High"
                            date="12/11/2025"
                        >
                            Corrigido após atualização do módulo de checkout.
                        </Ticket>

                        <Ticket
                            name="Problema no alinhamento de botões"
                            status="Closed"
                            priority="Medium"
                            date="10/11/2025"
                        >
                            Ajuste visual implementado e revisado pelo time de design.
                        </Ticket>

                        <Ticket
                            name="Melhoria no tooltip de ajuda"
                            status="Closed"
                            priority="Low"
                            date="08/11/2025"
                        >
                            Atualização aplicada para melhorar clareza.
                        </Ticket>
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}