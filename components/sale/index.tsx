"use client"

import { CircleDollarSign, DollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Últimos clientes
                    </CardTitle>
                    <CircleDollarSign className="h-4 w-4 ml-auto" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/3276563?v=4" className="w-8 h-8 rounded-full" />
                        <AvatarFallback>NS</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Natan de Oliveira</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">natanoliveirati@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/3276563?v=4" className="w-8 h-8 rounded-full" />
                        <AvatarFallback>NS</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Natan de Oliveira</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">natanoliveirati@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/3276563?v=4" className="w-8 h-8 rounded-full" />
                        <AvatarFallback>NS</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Natan de Oliveira</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">natanoliveirati@gmail.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    );
}