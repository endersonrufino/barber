
import { Barbershop } from "@/src/types/Barbershop";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface BarberShopItemProps {
    barbershop: Barbershop;
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {
    return (

        <Card className="w-[167px] rounded-2xl">
            <CardContent className="p-0">
                <div className="relative h-[159px] w-[159px]">
                    <Image fill className="object-cover rounded-2xl p-1" src={barbershop.imageUrl} alt={barbershop.name} />
                    <Badge className="absolute left-2 top-2 space-x-1" variant="secondary">
                        <StarIcon size={12} className="fill-primary text-primary" />
                        <p className="text-xs font-semibold">5,0</p>
                    </Badge>
                </div>
                <div className="py-3 px-1">
                    <h3 className="font-semibold truncate">{barbershop.name}</h3>
                    <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
                    <Button
                        variant="secondary"
                        className="w-full mt-3"
                        asChild
                    >
                        <Link href={`/barbershops/${barbershop.id}`}>
                         Reservar
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default BarberShopItem;