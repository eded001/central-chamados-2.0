import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react"; // Ícones modernos
import { cn } from "@/lib/utils";

// ✅ Schema de validação com Yup
const schema = yup.object().shape({
    name: yup.string().min(3, "O nome deve ter no mínimo 3 caracteres.").required("O nome é obrigatório."),
    email: yup.string().email("Digite um e-mail válido.").required("O e-mail é obrigatório."),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres.").required("A senha é obrigatória."),
    department: yup.string().required("Selecione um departamento."),
});

export default function Register() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log("✅ Dados enviados:", data);
        alert(`Usuário ${data.name} cadastrado com sucesso!`);
    };

    return (
        <main className="bg-blue-400 h-screen flex items-center justify-center">
            <Card className="w-full max-w-md shadow-lg border-none bg-sky-600">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-sky-600">
                        Cadastro
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-1">
                            <Label htmlFor="name">Nome completo</Label>
                            <Input id="name" placeholder="Digite seu nome completo" {...register("name")} />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" type="email" placeholder="exemplo@empresa.com" {...register("email")} />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="password">Senha</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    {...register("password")}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="department">Departamento</Label>
                            <Select onValueChange={(value) => setValue("department", value)}>
                                <SelectTrigger id="department">
                                    <SelectValue placeholder="Selecione um departamento" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ti">TI</SelectItem>
                                    <SelectItem value="financeiro">Financeiro</SelectItem>
                                    <SelectItem value="rh">Recursos Humanos</SelectItem>
                                    <SelectItem value="marketing">Marketing</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.department && <p className="text-red-500 text-sm">{errors.department.message}</p>}
                        </div>

                        <Button
                            type="submit"
                            className={cn("w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold")}
                        >
                            Cadastrar
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="justify-center text-sm text-gray-500">
                    <p>Já tem uma conta? Faça login.</p>
                </CardFooter>
            </Card>
        </main>
    );
}