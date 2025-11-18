import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import Main from "@/components/Main";
import { registerSchema } from "@/schemas/user.schema";

export default function Register() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = data => {
        console.log("Dados enviados:", data);
        alert(`Usuário ${data.name} cadastrado com sucesso!`);
    };

    const inputFields = [
        {
            id: "name",
            label: "Nome completo",
            placeholder: "Digite seu nome completo",
            type: "text",
        },
        {
            id: "email",
            label: "E-mail",
            placeholder: "exemplo@empresa.com",
            type: "email",
        },
    ];

    return (
        <Main>
            <Card className="w-1/3 h-full justify-between shadow-lg border border-blue-400 bg-linear-to-b from-sky-50 to-white">
                <CardHeader>
                    <CardTitle className="text-5xl font-bold text-center text-sky-700">
                        Cadastro
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                        {inputFields.map((field) => (
                            <div key={field.id} className="space-y-1">
                                <Label htmlFor={field.id} className="text-sky-800">
                                    {field.label}
                                </Label>

                                <Input
                                    id={field.id}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="bg-white border border-blue-400 text-sky-900 placeholder:text-sky-400 focus:border-blue-400 focus:ring-sky-400"
                                    {...register(field.id)}
                                />

                                {errors[field.id] && (
                                    <p className="text-red-500 text-sm">{errors[field.id].message}</p>
                                )}
                            </div>
                        ))}

                        <div className="space-y-1">
                            <Label htmlFor="password" className="text-sky-800">Senha</Label>

                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    className="bg-white border border-blue-400 text-sky-900 placeholder:text-sky-400 focus:border-blue-400 focus:ring-sky-400"
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

                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="department" className="text-sky-800">Departamento</Label>

                            <Select onValueChange={(value) => setValue("department", value)}>
                                <SelectTrigger
                                    id="department"
                                    className="bg-white border border-blue-400 text-sky-900 focus:border-blue-400 focus:ring-sky-400"
                                >
                                    <SelectValue placeholder="Selecione um departamento" />
                                </SelectTrigger>

                                <SelectContent className="bg-white text-sky-900 border border-blue-400">
                                    <SelectItem value="ti">TI</SelectItem>
                                    <SelectItem value="financeiro">Financeiro</SelectItem>
                                    <SelectItem value="rh">Recursos Humanos</SelectItem>
                                    <SelectItem value="marketing">Marketing</SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.department && (
                                <p className="text-red-500 text-sm">{errors.department.message}</p>
                            )}
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

            <div className="flex justify-center items-center w-full h-full border-2 rounded-xl border-blue-400 bg-white shadow-lg">
                <div className="w-full max-w-md flex justify-center flex-col gap-5">
                    <div className="text-5xl text-[#51A2FF] font-bold text-nowrap">Central de chamados</div>
                    <div
                        className="
                            w-full
                            mt-6
                            bg-blue-400
                            h-[420px]
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
                </div>
            </div>
        </Main>
    );
}