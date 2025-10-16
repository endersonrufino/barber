import Image from "next/image";
import { Barbershop } from "@/src/types/Barbershop";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import ServiceItem from "@/app/_components/service-item";
import PhoneItem from "@/app/_components/phone-item";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import SidebartSheet from "@/app/_components/sidebar-sheet";

interface BarbershopPageProps {
    params: {
        id: string;
    };
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
    const barberShops: Barbershop[] = [
        {
            id: "1",
            name: "Barbearia do João",
            imageUrl:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
            address: "Rua das Flores, 123",
            rating: 4.8,
            description: "nossa barearia e top",
            phones: ["11964578930", "119647898023"],
            services: [
                {
                    id: "1",
                    name: "Corte Masculino",
                    description: "Corte de cabelo masculino",
                    priceInCents: 3000,
                    imageUrl:
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
                    barberShopId: "1"
                },
                {
                    id: "2",
                    name: "Barba",
                    description: "Aparar e modelar barba",
                    priceInCents: 2000,
                    imageUrl:
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
                    barberShopId: "1",
                },
                {
                    id: "3",
                    name: "Corte + Barba",
                    description: "Pacote corte + barba",
                    priceInCents: 4500,
                    imageUrl:
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
                    barberShopId: "1",
                },
            ]
        },
        {
            id: "2",
            name: "Corte Fino",
            imageUrl:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
            address: "Av. Paulista, 456",
            rating: 4.6,
            description: "nossa barbearia é a melhor",
            phones: ["11912347867", "11975374900"],
            services: [
                {
                    id: "1",
                    name: "Corte Masculino",
                    description: "Corte de cabelo masculino",
                    priceInCents: 3000,
                    imageUrl:
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
                    barberShopId: "2"
                },
                {
                    id: "2",
                    name: "Barba",
                    description: "Aparar e modelar barba",
                    priceInCents: 2000,
                    imageUrl:
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
                    barberShopId: "2",
                },
                {
                    id: "3",
                    name: "Corte + Barba",
                    description: "Pacote corte + barba",
                    priceInCents: 4500,
                    imageUrl:
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
                    barberShopId: "2",
                },
            ]
        },
    ];

    const barbershop = barberShops.find((x) => x.id === params.id);

    if (!barbershop) {
        return <div>Barbearia não encontrada</div>;
    }

    return (
        <div>
            <div className="relative w-full h-[250px]">
                <Image
                    src={barbershop.imageUrl}
                    alt={barbershop.name}
                    fill
                    className="object-cover"
                />

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 left-4"
                    asChild
                >
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="secondary" className="absolute top-4 right-4">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SidebartSheet />
                </Sheet>
            </div>

            <div className="p-5 border-b border-solid">
                <h1 className="text-xl font-bold mb-3">{barbershop.name}</h1>
                <div className="flex items-center gap-2 mb-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-gray-600">{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-2">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-gray-600">5,0 (499 avaliações)</p>
                </div>
            </div>

            <div className="p-5 border-b border-solid space-y-3">
                <h2 className="text-xs text-gray-400 uppercase font-bold">Sobre Nós</h2>
                <p>{barbershop.description}</p>
            </div>

            <div className="p-5 space-y-3 border-b border-solid">
                <h2 className="text-xs text-gray-400 uppercase font-bold">Serviços</h2>
                <div className="space-y-3">
                    {barbershop.services.map((service) => (
                        <ServiceItem key={service.id} service={service}></ServiceItem>
                    ))}
                </div>
            </div>

            <div className="p-5 space-y-3">
                <h2 className="text-xs text-gray-400 uppercase font-bold">Contatos</h2>

                {barbershop.phones.map((phone) => (
                    <PhoneItem key={phone} phone={phone} />
                ))}
            </div>
        </div>
    );
};

export default BarbershopPage;
