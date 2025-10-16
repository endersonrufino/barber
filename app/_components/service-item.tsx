import { BarbershopService } from "@/src/types/BarbershopService";
import Image from "next/image"
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
    service: BarbershopService
}
const ServiceItem = ({ service }: ServiceItemProps) => {
    return (
        <Card className="rounded-xl">
            <CardContent className="flex items-center gap-3 p-3">

                <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                    <Image src={service.imageUrl} fill className="object-cover rounded-lg" alt={service.name} />
                </div>
                <div className="flex flex-col justify-between w-full space-y-2">
                    <h3 className="text-sm font-semibold">{service.name}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-sm text-primary font-bold">
                            {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(service.priceInCents)}
                        </p>
                        <Button variant="secondary" size="sm">
                            RESERVAR
                        </Button>
                    </div>
                </div>

            </CardContent>
        </Card>

    );
}

export default ServiceItem;