import { db } from "./../index";
import {
  userTable,
  barberShopTable,
  barberShopServiceTable,
  bookingTable,
  bookingServicesTable,
} from "./schema";

async function seed() {
  console.log("🧹 Limpando dados antigos...");

  // Ordem importa por causa das FK
  await db.delete(bookingServicesTable);
  await db.delete(bookingTable);
  await db.delete(barberShopServiceTable);
  await db.delete(barberShopTable);
  await db.delete(userTable);

  console.log("👤 Inserindo usuários...");
  const users = await db
    .insert(userTable)
    .values([
      {
        id: crypto.randomUUID(),
        name: "João Silva",
        email: "joao@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        name: "Maria Oliveira",
        email: "maria@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        name: "Pedro Santos",
        email: "pedro@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    .returning();

  console.log("🏢 Inserindo barbearias...");
  const shops = await db
    .insert(barberShopTable)
    .values([
      {
        id: crypto.randomUUID(),
        name: "Barbearia Central",
        address: "Rua A, 123",
        phone: "1199999999",
        description: "A melhor do centro",
        imageUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        name: "Barbearia Estilo",
        address: "Av. B, 456",
        phone: "1188888888",
        description: "Estilo e tradição",
        imageUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    .returning();

  console.log("💈 Inserindo serviços...");
  const services = await db
    .insert(barberShopServiceTable)
    .values([
      {
        id: crypto.randomUUID(),
        name: "Corte Masculino",
        description: "Corte de cabelo masculino",
        imageUrl: null,
        priceInCents: 3000,
        barberShopId: shops[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        name: "Barba",
        description: "Aparar e modelar barba",
        imageUrl: null,
        priceInCents: 2000,
        barberShopId: shops[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        name: "Corte + Barba",
        description: "Pacote corte + barba",
        imageUrl: null,
        priceInCents: 4500,
        barberShopId: shops[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        name: "Hidratação",
        description: "Tratamento capilar",
        imageUrl: null,
        priceInCents: 2500,
        barberShopId: shops[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        name: "Sobrancelha",
        description: "Design de sobrancelha",
        imageUrl: null,
        priceInCents: 1500,
        barberShopId: shops[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    .returning();

  console.log("📅 Inserindo reservas...");
  const bookings = await db
    .insert(bookingTable)
    .values([
      {
        id: crypto.randomUUID(),
        userId: users[0].id,
        reservedDate: new Date("2025-09-01T10:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        userId: users[1].id,
        reservedDate: new Date("2025-09-02T14:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    .returning();

  console.log("🔗 Vinculando serviços às reservas...");
  await db.insert(bookingServicesTable).values([
    { bookingId: bookings[0].id, serviceId: services[0].id }, // João -> Corte Masculino
    { bookingId: bookings[0].id, serviceId: services[1].id }, // João -> Barba
    { bookingId: bookings[1].id, serviceId: services[3].id }, // Maria -> Hidratação
  ]);

  console.log("✅ Seed finalizado com sucesso!");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("❌ Erro no seed:", err);
    process.exit(1);
  });
