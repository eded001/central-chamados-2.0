"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// --- Schema Yup ---
const schema = yup.object({
    title: yup.string().required("Título é obrigatório."),
    category: yup.string().required("Selecione uma categoria."),
    description: yup.string().required("Descrição é obrigatória."),
    priority: yup.string().required("Selecione uma prioridade."),
});

export default function FormTicket() {
    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: "",
            category: "",
            description: "",
            priority: "",
        },
    });

    const onSubmit = (values) => {
        console.log("Novo ticket:", values);
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="text-xl">Abrir chamado</Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Novo chamado</AlertDialogTitle>
                    <AlertDialogDescription>
                        Preencha os dados para registrar um novo ticket.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-2">

                        {/* TÍTULO */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Título do chamado</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: Falha no servidor" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* CATEGORIA */}
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Categoria</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione uma categoria" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="hardware">Hardware</SelectItem>
                                            <SelectItem value="software">Software</SelectItem>
                                            <SelectItem value="rede">Rede</SelectItem>
                                            <SelectItem value="outros">Outros</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* PRIORIDADE (RADIO) */}
                        <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prioridade</FormLabel>

                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-row gap-6"
                                        >
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="high" id="p-high" />
                                                <label htmlFor="p-high" className="text-sm">Alta</label>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="medium" id="p-medium" />
                                                <label htmlFor="p-medium" className="text-sm">Média</label>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="low" id="p-low" />
                                                <label htmlFor="p-low" className="text-sm">Baixa</label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* DESCRIÇÃO */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Descrição</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            rows={3}
                                            placeholder="Explique o problema ou solicitação..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <AlertDialogFooter>
                            <AlertDialogCancel type="button">
                                Cancelar
                            </AlertDialogCancel>

                            <Button type="submit">
                                Criar chamado
                            </Button>
                        </AlertDialogFooter>
                    </form>
                </Form>
            </AlertDialogContent>
        </AlertDialog>
    );
}