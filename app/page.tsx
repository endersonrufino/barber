import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";


export default function Home() {
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

        <Card className="mt-6">
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
      </div>
    </div >
  );
}
