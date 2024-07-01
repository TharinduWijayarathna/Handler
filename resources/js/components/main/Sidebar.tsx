import {
    Home,
    LineChart,
    Package,
    Package2,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip"
import { Link } from "@inertiajs/react"

export default function Sidebar() {


    return (
        <>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={route('home')}
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${window.location.pathname === '/' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                                >
                                    <Home className="h-5 w-5" />
                                    <span className="sr-only">Dashboard</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Dashboard</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={route('usage.index')}
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${window.location.pathname === '/usage' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                                >
                                    <LineChart className="h-5 w-5" />
                                    <span className="sr-only">Usage</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Usage</TooltipContent>
                        </Tooltip>


                    </TooltipProvider>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8` + (window.location.pathname === '/settings' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground')}
                                >
                                    <Settings className="h-5 w-5" />
                                    <span className="sr-only">Settings</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
        </>
    )
}
