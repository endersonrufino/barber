import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import BarberShopItem from "./_components/barbershop-item";
import { Barbershop } from "@/src/types/Barbershop";

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

        <div className="relative w-full h-[150px] mt-6">

          <Image alt="banner" src="banner.svg" fill className="object-cover rounded-2xl" />
        </div>

        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">AGENDAMENTOS</h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-[6] w-[6]">
                  <AvatarImage src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" />
                </Avatar>
                <p className="text-sm">Barbearia do ZÉ</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Setembro</p>
              <p className="text-2xl">18</p>
              <p className="text-sm">14:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">

          {barberShops.map(barbershop => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop}
            />
          ))}       
            
        </div>
      </div>
    </div >
  );
}

export default Home;
