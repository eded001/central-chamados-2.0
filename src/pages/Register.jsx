import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import Main from "@/components/Main";
import { loginSchema } from "@/schemas/user.schema";

export default function Register() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log("Dados enviados:", data);
        alert(`Usuário ${data.name} cadastrado com sucesso!`);
    };

    return (
        <Main>
            <Card className="w-full max-w-md h-full justify-between shadow-lg border border-sky-200 bg-linear-to-b from-sky-50 to-white">
                <CardHeader>
                    <CardTitle className="text-5xl font-bold text-center text-sky-700">
                        Cadastro
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-1">
                            <Label htmlFor="name" className="text-sky-800">Nome completo</Label>
                            <Input
                                id="name"
                                placeholder="Digite seu nome completo"
                                className="bg-white border border-sky-300 text-sky-900 placeholder:text-sky-400 focus:border-sky-500 focus:ring-sky-400"
                                {...register("name")}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="email" className="text-sky-800">E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="exemplo@empresa.com"
                                className="bg-white border border-sky-300 text-sky-900 placeholder:text-sky-400 focus:border-sky-500 focus:ring-sky-400"
                                {...register("email")}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="password" className="text-sky-800">Senha</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    className="bg-white border border-sky-300 text-sky-900 placeholder:text-sky-400 focus:border-sky-500 focus:ring-sky-400"
                                    {...register("password")}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-sky-500 hover:text-sky-700 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="department" className="text-sky-800">Departamento</Label>
                            <Select onValueChange={(value) => setValue("department", value)}>
                                <SelectTrigger
                                    id="department"
                                    className="bg-white border border-sky-300 text-sky-900 focus:border-sky-500 focus:ring-sky-400"
                                >
                                    <SelectValue placeholder="Selecione um departamento" />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-sky-900 border border-sky-200">
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
                            className="w-full bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-md transition-colors"
                        >
                            Cadastrar-se
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="justify-center text-sm">
                    <p className="text-sky-600">
                        Já tem uma conta?{" "}
                        <a href="/login" className="text-sky-500 hover:underline">
                            Faça o login
                        </a>
                    </p>
                </CardFooter>
            </Card>

            <span>

            </span>
        </Main>
    );
}