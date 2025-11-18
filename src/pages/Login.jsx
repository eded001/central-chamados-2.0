import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

import Main from "@/components/Main";
import { loginSchema } from "@/schemas/user.schema";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log("Login enviado:", data);
        alert("Login realizado com sucesso!");
    };

    return (
        <Main>
            <Card className="w-1/3 h-full justify-between shadow-lg border border-blue-400 bg-linear-to-b from-sky-50 to-white">

                <CardHeader>
                    <CardTitle className="text-5xl font-bold text-center text-sky-700">
                        Entrar
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                        {/* EMAIL */}
                        <div className="space-y-1">
                            <Label htmlFor="email" className="text-sky-800">
                                E-mail
                            </Label>

                            <Input
                                id="email"
                                type="email"
                                placeholder="exemplo@empresa.com"
                                className="bg-white border border-blue-400 text-sky-900 placeholder:text-sky-400 focus:border-blue-400 focus:ring-sky-400"
                                {...register("email")}
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div className="space-y-1">
                            <Label htmlFor="password" className="text-sky-800">
                                Senha
                            </Label>

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

                        {/* SUBMIT */}
                        <Button
                            type="submit"
                            className="w-full bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-md transition-colors"
                        >
                            Entrar
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="justify-center text-sm">
                    <p className="text-sky-600">
                        Não tem conta?{" "}
                        <a href="/register" className="text-sky-500 hover:underline">
                            Cadastre-se
                        </a>
                    </p>
                </CardFooter>

            </Card>

            {/* Lado direito com logo (mesmo padrão do register) */}
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