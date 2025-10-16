import { BarbershopService } from "./BarbershopService";

export interface Barbershop {
  id: string;
  name: string;
  imageUrl: string;
  address: string;
  rating: number;
  description: string;
  services: Array<BarbershopService>
  phones: Array<string>
}
