import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import SidebartSheet from "./sidebar-sheet";
const Header = () => {
    return (
        <Card>
            <CardContent className=" p-5 justify-between items-center flex flex-row">
                <Image src="logo.svg" height={18} width={120} alt="logo" />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SidebartSheet />
                </Sheet>
            </CardContent>
        </Card >
    );
}

export default Header;