import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headset, MonitorCog, Wifi, CalendarDays } from "lucide-react";
import Logo from "@/components/Logo";

// --- Landing Page ---
export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            {/* HEADER / HERO */}
            <header className="bg-slate-900 text-white">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <span className="font-bold text-lg tracking-tight">
                            SEMCULT <span className="text-slate-400 font-normal">| DTI</span>
                        </span>
                    </div>

                    <Button variant="secondary" className="bg-sky-600 text-white hover:bg-sky-700 border-none">
                        Ver mais
                    </Button>
                </nav>

                <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                            <i>Central de Chamados</i> <br />
                            SEMCULT
                        </h1>
                        <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
                            Gerencie solicitações de TI, infraestrutura e apoio a eventos culturais com agilidade e transparência.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center md:justify-end relative">
                        <div className="absolute inset-0 bg-sky-500 blur-[150px] opacity-20 rounded-full"></div>
                        <div className="relative bg-slate-800/50 p-12 rounded-3xl border border-slate-700 backdrop-blur-sm">
                            <Logo color="bg-white" size={280} />
                        </div>
                    </div>
                </div>
            </header>

            {/* SERVIÇOS */}
            <section id="servicos" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 space-y-2">
                        <h2 className="text-3xl font-bold text-sky-900">Catálogo de Serviços</h2>
                        <p className="text-slate-500">Selecione a categoria para iniciar seu atendimento</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard icon={<MonitorCog className="h-8 w-8 text-sky-800" />} title="Suporte Técnico" description="Manutenção de computadores, impressoras e instalação de software." />
                        <ServiceCard icon={<Wifi className="h-8 w-8 text-sky-800" />} title="Redes e Internet" description="Configuração de wi-fi, pontos de rede e acesso a sistemas." />
                        <ServiceCard icon={<CalendarDays className="h-8 w-8 text-sky-800" />} title="Apoio a Eventos" description="Solicitação de infraestrutura tecnológica para eventos culturais." />
                        <ServiceCard icon={<Headset className="h-8 w-8 text-sky-800" />} title="Sistemas Internos" description="Acesso, senhas e treinamento para plataformas da prefeitura." />
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Logo color="bg-slate-400" size={50} />
                        <div>
                            <p className="text-white font-semibold">Secretaria Municipal de Cultura</p>
                            <p className="text-sm">Prefeitura Municipal | <a className="text-sm text-slate-500 hover:underline" href="https://semcult.belem.pa.gov.br/">Site oficial</a></p>
                        </div>
                    </div>
                    <div className="text-sm text-center md:text-right">
                        <p>&copy; {new Date().getFullYear()} SEMCULT. Todos os direitos reservados.</p>
                        <p>Desenvolvido pela equipe de TI.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// --- Service Card ---
function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-300 border-sky-100">
            <CardHeader className="flex items-center">
                <div className="p-4 rounded-lg bg-sky-200 inline-flex">{icon}</div>
                <CardTitle className="text-xl text-sky-800">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sky-700 text-sm leading-relaxed">{description}</p>
            </CardContent>
        </Card>
    );
}