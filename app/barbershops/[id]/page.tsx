import Image from "next/image";
import { Barbershop } from "@/src/types/Barbershop";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Link from "next/link";

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
            description: "nossa barearia e top"
        },
        {
            id: "2",
            name: "Corte Fino",
            imageUrl:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
            address: "Av. Paulista, 456",
            rating: 4.6,
            description: "nossa barbearia é a melhor"
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

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4"
                    asChild
                >
                    <MenuIcon />
                </Button>
            </div>

            <div className="p-5 border-b border-solid">
                <h1 className="text-xl font-bold mb-3">{barbershop.name}</h1>
                <div className="flex items-center gap-1 mb-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-gray-600">{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-1">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-gray-600">5,0 (499 avaliações)</p>
                </div>
            </div>

            <div className="p-5 border-b border-solid space-y-3">
                <h2 className="text-xs text-gray-400 uppercase font-bold">Sobre Nós</h2>
                <p>{barbershop.description}</p>
            </div>
        </div >
    );
};

export default BarbershopPage;
