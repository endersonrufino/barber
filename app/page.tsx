import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import BarberShopItem from "./_components/barbershop-item";
import { Barbershop } from "@/src/types/Barbershop";
import BookingItem from "./_components/booking-item";

interface QuickSearchOption {
  title: string
}

const quickSearchOptions: QuickSearchOption[] = [
  {
    title: "Cabelo"
  },
  {
    title: "Barba"
  },
  {
    title: "Sobrancelha"
  },
  {
    title: "Manicure"
  },
  {
    title: "Pintura"
  },
  {
    title: "Depilação"
  },
]

const Home = async () => {
  const barberShops: Barbershop[] = [
    {
      id: "1",
      name: "Barbearia do João",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
      address: "Rua das Flores, 123",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Corte Fino",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
      address: "Av. Paulista, 456",
      rating: 4.6,
    },
    {
      id: "3",
      name: "na regua",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
      address: "Av. Paulista, 456",
      rating: 4.6,
    },
    {
      id: "4",
      name: "Corte do melhorzin",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
      address: "Av. Paulista, 456",
      rating: 4.6,
    },
    {
      id: "5",
      name: "Corte de cria",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
      address: "Av. Paulista, 456",
      rating: 4.6,
    },
    {
      id: "6",
      name: "O melhor Corte",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
      address: "Av. Paulista, 456",
      rating: 4.6,
    },
    {
      id: "7",
      name: "ZEKA CORTE",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
      address: "Av. Paulista, 456",
      rating: 4.6,
    },
    {
      id: "8",
      name: "Corte top",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/13/b6/barbershop-main-entrance.jpg?w=1000&h=-1&s=1",
      address: "Av. Paulista, 456",
      rating: 4.6,
    },
  ];

  const popularBarberShops = barberShops;

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Enderson!</h2>
        <p>Quarta-feira, 17 de setembro de 2025</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map(quickSearchOption => (
            <Button
              key={quickSearchOption.title}
              className="gap-2"
              variant="secondary"
            >
              {quickSearchOption.title}
            </Button>
          ))}
        </div>

        <div className="relative w-full h-[150px] mt-6">

          <Image alt="banner" src="banner.svg" fill className="object-cover rounded-2xl" />
        </div>

        <BookingItem />

        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">

          {barberShops.map(barbershop => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop}
            />
          ))}

        </div>

        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">Populares</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">

          {popularBarberShops.map(barbershop => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop}
            />
          ))}

        </div>
      </div>

      <footer>
        <Card className="px-5 py-6">
          <CardContent>
            <p className="text-xs font-semibold text-gray-400">
              © 2025 Copyright <span className="font-bold">Beeps</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div >
  );
}

export default Home;
