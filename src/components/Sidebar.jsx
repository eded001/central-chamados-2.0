import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import About from "@/components/About";

export default function Sidebar() {
    return (
        <Card className="w-1/5 h-full justify-between">
            <CardHeader>
                <div
                    className="
                            w-full
                            mt-6
                            bg-blue-400
                            h-40
                            [mask-image:url('https://raw.githubusercontent.com/semcult-belem/central-chamados/refs/heads/main/frontend/public/assets/images/logo-prefeitura.png')]
                            [mask-repeat:no-repeat]
                            [mask-size:contain]
                            [mask-position:center]
                            [--tw-webkit-mask-image:url('https://raw.githubusercontent.com/semcult-belem/central-chamados/refs/heads/main/frontend/public/assets/images/logo-prefeitura.png')]
                            [--tw-webkit-mask-repeat:no-repeat]
                            [--tw-webkit-mask-size:contain]
                            [--tw-webkit-mask-position:center]
                            [-webkit-mask-image:var(--tw-webkit-mask-image)]
                            [-webkit-mask-repeat:var(--tw-webkit-mask-repeat)]
                            [-webkit-mask-size:var(--tw-webkit-mask-size)]
                            [-webkit-mask-position:var(--tw-webkit-mask-position)]
                        "
                />
                <CardTitle className="text-3xl text-center font-bold text-sky-800">
                    Central de Chamados
                </CardTitle>
            </CardHeader>

            <CardContent className="gap-2">
                <CardDescription>
                    <h1 className="text-center text-base font-semibold mb-2.5">Status</h1>

                    <ScrollArea className="space-y-1 h-1/2">
                        <Button variant="ghost" className="w-full justify-between font-bold hover:bg-sky-100">
                            <span>Todos</span>
                            <span>0</span>
                        </Button>

                        <Button variant="ghost" className="w-full justify-between hover:bg-sky-100">
                            <span>Abertos</span>
                            <span>0</span>
                        </Button>

                        <Button variant="ghost" className="w-full justify-between hover:bg-sky-100">
                            <span>Fechados</span>
                            <span>0</span>
                        </Button>
                    </ScrollArea>
                </CardDescription>

                <Separator className="my-5" />

                <CardDescription>
                    <h1 className="text-center text-base font-semibold mb-2.5">Prioridades</h1>

                    <ScrollArea className="space-y-1 h-1/2">
                        <Button variant="ghost" className="w-full justify-between font-bold hover:bg-sky-100">
                            <span>Todos</span>
                            <span>0</span>
                        </Button>

                        <Button variant="ghost" className="w-full justify-between hover:bg-sky-100">
                            <span>Altos</span>
                            <span>0</span>
                        </Button>

                        <Button variant="ghost" className="w-full justify-between hover:bg-sky-100">
                            <span>Médios</span>
                            <span>0</span>
                        </Button>

                        <Button variant="ghost" className="w-full justify-between hover:bg-sky-100">
                            <span>Baixos</span>
                            <span>0</span>
                        </Button>
                    </ScrollArea>
                </CardDescription>
            </CardContent>

            <CardFooter className="justify-center">
                <About />
            </CardFooter>
        </Card>
    );
}