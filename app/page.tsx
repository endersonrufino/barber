import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";


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
      </div>
    </div >
  );
}
