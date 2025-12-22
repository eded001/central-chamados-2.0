'use client';

import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import { AlertDialogFooter, AlertDialogHeader } from "./ui/alert-dialog";
import { Headset } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "cmdk";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import type { TicketModalProps } from "@/interfaces/TicketModalProps";

export default function TicketModal({ open, onClose }: TicketModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [comboOpen, setComboOpen] = useState(false);

    const categories = [
        "Problema de Software",
        "Problema de Hardware",
        "Rede e Conectividade",
        "Acesso e Permissões",
        "Suporte a Aplicativos",
        "Segurança da Informação",
        "Backup e Recuperação",
        "Consultoria Técnica"
    ];

    const handleSubmit = () => {
        if (!title || !description || !email || !category) {
            toast.error("Preencha todos os campos antes de enviar o chamado.");
            return;
        }

        toast.success("Chamado enviado com sucesso!");

        setTitle("");
        setDescription("");
        setEmail("");
        setCategory("");
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent className="sm:max-w-lg w-full">
                <AlertDialogHeader>
                    <Headset className="w-6 h-6 text-primary" />
                    <AlertDialogTitle>Registrar chamado</AlertDialogTitle>
                    <AlertDialogDescription>
                        Preencha os detalhes do seu chamado técnico e envie para o departamento responsável.
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
                    <Input
                        type="email"
                        placeholder="Seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Combobox para categoria do problema */}
                    <Popover open={comboOpen} onOpenChange={setComboOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                className="w-full justify-between"
                            >
                                {category || "Selecione o tipo de problema"}
                                <ChevronsUpDown className="ml-2 opacity-50 w-4 h-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                            <Command>
                                <CommandInput placeholder="Pesquisar..." className="h-9" />
                                <CommandList>
                                    <CommandEmpty>Nenhuma categoria encontrada.</CommandEmpty>
                                    <CommandGroup>
                                        {categories.map((cat) => (
                                            <CommandItem
                                                key={cat}
                                                value={cat}
                                                onSelect={() => {
                                                    setCategory(cat);
                                                    setComboOpen(false);
                                                }}
                                            >
                                                {cat}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        category === cat ? "opacity-100" : "opacity-0"
                                                    )}
                                                    size={16}
                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>

                <AlertDialogFooter className="mt-6">
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}