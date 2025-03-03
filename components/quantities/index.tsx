import { PersonStanding, DollarSign, CheckCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

export function Quantities() {
    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-center">
                        <CardTitle
                            className="text-lg sm:text-xl text-gray-600 select-none"
                        >Total de Clientes
                        </CardTitle>
                        <PersonStanding className="ml-auto w4 h-4" />
                    </div>
                    <CardDescription>Total de clientes em 30 dias</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-base sm:text-lg font-bold">21</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-center">
                        <CardTitle
                            className="text-lg sm:text-xl text-gray-600 select-none"
                        >Total de Vendas
                        </CardTitle>
                        <DollarSign className="ml-auto w4 h-4" />
                    </div>
                    <CardDescription>Total de clientes em 15 dias</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-base sm:text-lg font-bold">R$ 1.729,60</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-center">
                        <CardTitle
                            className="text-lg sm:text-xl text-gray-600 select-none"
                        >Orçamentos
                        </CardTitle>
                        <CheckCheck className="ml-auto w4 h-4" />
                    </div>
                    <CardDescription>Total de orçamentos efetuados</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-base sm:text-lg font-bold">17</p>
                </CardContent>
            </Card>
        </>
    );
}