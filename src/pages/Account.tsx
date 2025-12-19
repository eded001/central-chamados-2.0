import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { ArrowLeft, Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// --- DADOS MOCKADOS ---
const departments = [
    "Gabinete",
    "Financeiro",
    "Recursos Humanos",
    "Jurídico",
    "Tecnologia da Informação",
    "Comunicação",
    "Projetos Culturais",
]

// --- COMPONENTE DE LOGO ---
function Logo({ color = "bg-sky-800", size = 150 }: { color?: string; size?: number }) {
    const image = "https://raw.githubusercontent.com/semcult-belem/central-chamados/refs/heads/main/frontend/public/assets/images/logo-prefeitura.png";
    return (
        <div style={{ width: size }}>
            <AspectRatio ratio={1}>
                <div className={`w-full h-full ${color}`} style={{
                    maskImage: `url(${image})`, maskRepeat: "no-repeat", maskPosition: "center", maskSize: "contain",
                    WebkitMaskImage: `url(${image})`, WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", WebkitMaskSize: "contain",
                }} />
            </AspectRatio>
        </div>
    );
}

export default function AuthPage() {
    // Estado para controle das Abas (seu modelo)
    const [tab, setTab] = useState<"login" | "register">("login");

    // Estados do Combobox e Form
    const [open, setOpen] = useState(false);
    const [department, setDepartment] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    const handleRegister = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative bg-background font-sans overflow-hidden p-4">

            {/* Background Decorativo */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-sky-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-sky-500/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="w-full max-w-md mx-auto z-10">

                {/* Cabeçalho Visual */}
                <div className="flex flex-col items-center mb-8 text-center space-y-2">
                    <div className="p-3 bg-sky-100 dark:bg-sky-800 rounded-2xl border shadow-sm mb-2">
                        <Logo color="bg-sky-900 dark:bg-white" size={50} />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Central SEMCULT</h1>
                    <p className="text-sm text-muted-foreground">Sistema de Chamados do Servidor</p>
                </div>

                {/* Card Container Principal */}
                <Card className="shadow-lg border-sky-200 dark:border-sky-800">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-center text-lg">
                            {tab === "login" ? "Acesse sua conta" : "Solicitar acesso"}
                        </CardTitle>
                        <CardDescription className="text-center">
                            {tab === "login" ? "Entre com suas credenciais" : "Preencha seus dados institucionais"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        {/* SEU COMPONENTE TABS */}
                        <Tabs value={tab} onValueChange={(v) => setTab(v as "login" | "register")} className="w-full">

                            <TabsList className="grid w-full grid-cols-2 mb-6">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="register">Cadastro</TabsTrigger>
                            </TabsList>

                            {/* --- LOGIN --- */}
                            <TabsContent value="login" className="mt-0">
                                <div className="flex flex-col gap-4">
                                    <Input type="email" placeholder="Email" />
                                    <Input type="password" placeholder="Senha" />

                                    <Button className="w-full" onClick={handleLogin} disabled={isLoading}>
                                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Entrar
                                    </Button>

                                    <div className="text-center mt-2 text-sm text-muted-foreground">
                                        Não tem conta?{" "}
                                        <span
                                            className="text-primary font-semibold cursor-pointer hover:underline"
                                            onClick={() => setTab("register")}
                                        >
                                            Crie uma
                                        </span>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* --- CADASTRO --- */}
                            <TabsContent value="register" className="mt-0">
                                <div className="flex flex-col gap-4">
                                    <Input type="text" placeholder="Nome completo" />
                                    <Input type="email" placeholder="Email" />
                                    <Input type="password" placeholder="Senha" />

                                    {/* Combobox Funcional (Seu Modelo) */}
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-full justify-between text-muted-foreground font-normal hover:text-foreground"
                                            >
                                                {department || "Selecione o departamento"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
                                            <Command>
                                                <CommandInput placeholder="Pesquise seu departamento..." className="h-9" />
                                                <CommandList>
                                                    <CommandEmpty>Nenhum departamento encontrado.</CommandEmpty>
                                                    <CommandGroup>
                                                        {departments.map((dep) => (
                                                            <CommandItem
                                                                key={dep}
                                                                value={dep}
                                                                onSelect={(currentValue) => {
                                                                    setDepartment(currentValue === department ? "" : currentValue)
                                                                    setOpen(false)
                                                                }}
                                                            >
                                                                {dep}
                                                                <Check
                                                                    className={cn(
                                                                        "ml-auto h-4 w-4",
                                                                        department === dep ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>

                                    <Button className="w-full" onClick={handleRegister} disabled={isLoading}>
                                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Cadastrar-se
                                    </Button>

                                    <div className="text-center mt-2 text-sm text-muted-foreground">
                                        Já possui conta?{" "}
                                        <span
                                            className="text-primary font-semibold cursor-pointer hover:underline"
                                            onClick={() => setTab("login")}
                                        >
                                            Faça o login
                                        </span>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}