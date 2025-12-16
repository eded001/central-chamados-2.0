"use client"

import { useState } from "react"
import { Headset } from "lucide-react"

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogIcon,
} from "@/components/shadcn-studio/dialog/dialog-02"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

import { toast, Toaster } from "sonner"
import { Textarea } from "@/components/ui/textarea"

export default function Tests() {
    const [open, setOpen] = useState(false)
    const [tab, setTab] = useState<"login" | "register">("login")
    const [department, setDepartment] = useState("")
    const [comboOpen, setComboOpen] = useState(false)

    const departments = ["TI", "RH", "Financeiro", "Marketing"]

    const handleLogin = () => {
        // Aqui você pode colocar validação ou chamada de API
        toast.success("Login realizado com sucesso!")
    }

    const handleRegister = () => {
        if (!department) {
            toast.error("Selecione um departamento antes de cadastrar.")
            return
        }
        // Aqui você pode colocar validação ou chamada de API
        toast.success("Cadastro realizado com sucesso!")
    }

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        if (!title || !description || !email || !department) {
            toast.error("Preencha todos os campos antes de enviar o chamado.")
            return
        }

        // Aqui você pode integrar com API ou backend
        toast.success("Chamado enviado com sucesso!")
        setOpen(false)

        // Resetar formulário
        setTitle("")
        setDescription("")
        setEmail("")
        setDepartment("")
    }

    return (
        <section className="space-y-4">
            <h1 className="text-xl font-semibold">Tela de testes</h1>

            <Button onClick={() => setOpen(true)}>Testar alert dialog</Button>

            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent className="sm:max-w-lg w-full">
                    <AlertDialogHeader>
                        <AlertDialogIcon>
                            <Headset className="size-4 text-primary" />
                        </AlertDialogIcon>
                        <AlertDialogTitle>Registrar chamado</AlertDialogTitle>
                        <AlertDialogDescription>
                            Preencha os detalhes do seu chamado e envie para o departamento responsável.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="flex flex-col gap-4 mt-4">
                        <Input
                            type="text"
                            placeholder="Título do chamado"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Textarea
                            placeholder="Descrição detalhada do problema"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        {/* Combobox para departamento */}
                        <Popover open={comboOpen} onOpenChange={setComboOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className="w-full justify-between"
                                >
                                    {department || "Selecione o departamento"}
                                    <ChevronsUpDown className="opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput placeholder="Pesquisar..." className="h-9" />
                                    <CommandList>
                                        <CommandEmpty>Nenhum departamento encontrado.</CommandEmpty>
                                        <CommandGroup>
                                            {departments.map((dep) => (
                                                <CommandItem
                                                    key={dep}
                                                    value={dep}
                                                    onSelect={() => {
                                                        setDepartment(dep)
                                                        setComboOpen(false)
                                                    }}
                                                >
                                                    {dep}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
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
                    </div>

                    <AlertDialogFooter className="mt-4">
                        <AlertDialogCancel onClick={() => setOpen(false)}>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={handleSubmit}>Enviar chamado</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Toaster position="top-right" richColors />

            <Tabs value={tab} onValueChange={(v) => setTab(v as "login" | "register")} className="w-full max-w-md mx-auto">
                <TabsList className="mb-4">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Cadastro</TabsTrigger>
                </TabsList>

                {/* LOGIN */}
                <TabsContent value="login">
                    <div className="flex flex-col gap-4">
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Senha" />
                        <Button className="w-full" onClick={handleLogin}>Entrar</Button>
                        <div className="text-center mt-2 text-sm text-muted-foreground">
                            Não tem conta?{" "}
                            <span className="text-blue-500 cursor-pointer" onClick={() => setTab("register")}>
                                Criar conta
                            </span>
                        </div>
                    </div>
                </TabsContent>

                {/* CADASTRO */}
                <TabsContent value="register">
                    <div className="flex flex-col gap-4">
                        <Input type="text" placeholder="Nome completo" />
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Senha" />

                        {/* Combobox funcional */}
                        <Popover open={comboOpen} onOpenChange={setComboOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className="w-full justify-between"
                                >
                                    {department || "Selecione o departamento"}
                                    <ChevronsUpDown className="opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput placeholder="Pesquisar..." className="h-9" />
                                    <CommandList>
                                        <CommandEmpty>Nenhum departamento encontrado.</CommandEmpty>
                                        <CommandGroup>
                                            {departments.map((dep) => (
                                                <CommandItem
                                                    key={dep}
                                                    value={dep}
                                                    onSelect={() => {
                                                        setDepartment(dep)
                                                        setComboOpen(false)
                                                    }}
                                                >
                                                    {dep}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
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

                        <Button className="w-full" onClick={handleRegister}>Cadastrar-se</Button>
                    </div>
                </TabsContent>
            </Tabs>

            {/* Componente Toaster do Sonner */}
            <Toaster position="top-right" richColors />
        </section>
    )
}