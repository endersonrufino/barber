import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const SidebartSheet = () => {
    return (
        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="p-5 flex items-center border-b border-solid gap-3">
                <Avatar>
                    <AvatarImage src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" />
                </Avatar>
                <div>
                    <p className="font-bold">Enderson Rufino</p>
                    <p className="text-xs">endersonrufino@email.com</p>
                </div>
            </div>
            <div className="p-5 flex flex-col gap-1 border-b border-solid">
                <SheetClose asChild>
                    <Button className="gap-2 justify-start" asChild>
                        <Link href="/">
                            <HomeIcon size={18} />
                            Inicio
                        </Link>
                    </Button>
                </SheetClose>

                <Button className="gap-2 justify-start" variant="ghost">
                    <CalendarIcon size={18} />
                    Agendamentos
                </Button>
            </div>
            <div className="p-5 flex flex-col gap-1 border-b border-solid">
                <Button className="justify-start" variant="ghost">
                    <LogOutIcon size={18} />
                    Sair
                </Button>
            </div>
        </SheetContent>
    );
}

export default SidebartSheet;