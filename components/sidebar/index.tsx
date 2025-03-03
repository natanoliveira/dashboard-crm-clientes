import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { Home, LogOut, Package, Package2, PanelBottom, Settings, ShoppingCart, Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function Sidebar() {

    const classNameLinksFilhos = 'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground';

    return (
        <div className="flex w-full flex-col bg-muted/40">

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">

                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link
                            href="#"
                            className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
                            <Package className="h-4 w-5" />
                            <span className="sr-only">Dashborad Avatar</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className={classNameLinksFilhos}
                                >
                                    <Home className="h-4 w-5" />
                                    <span className="sr-only">Início</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Início</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className={classNameLinksFilhos}
                                >
                                    <Users className="h-4 w-5" />
                                    <span className="sr-only">Clientes</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Clientes</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className={classNameLinksFilhos}
                                >
                                    <Settings className="h-4 w-5" />
                                    <span className="sr-only">Configuração</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Configuração</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
                {/* Botões extras */}
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className={classNameLinksFilhos}
                                >
                                    <LogOut className="h-4 w-5" />
                                    <span className="sr-only">Sair</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Sair</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    {/*Drawer da direita para mobile*/}
                    <Sheet>
                        <SheetTrigger>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5" />
                                <span className="sr-only">Abrir/Fechar Menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="p-5 sm:max-w-x">
                            <nav className="grid gap-6 text-lg font-mediun">
                                <Link
                                    href="#"
                                    className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                                    prefetch={false}
                                >
                                    <Package className="h-5 w-5 transition-all" />
                                    <span className="sr-only">Logo do projeto</span>
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Home className="h-5 w-5 transition-all" />
                                    Início
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <ShoppingCart className="h-5 w-5 transition-all" />
                                    Shopping
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Package2 className="h-5 w-5 transition-all" />
                                    Produtos
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Settings className="h-5 w-5 transition-all" />
                                    Configuração
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    )
}