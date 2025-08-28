import { relations } from "drizzle-orm";
import {
  uuid,
  pgTable,
  text,
  timestamp,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";

//
// Usuário
//
export const userTable = pgTable("user", {
  id: uuid().primaryKey(),
  name: text().notNull(),
  email: text().notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

//
// Barbearia
//
export const barberShopTable = pgTable("barberShop", {
  id: uuid().primaryKey(),
  name: text().notNull(),
  address: text().notNull(),
  phone: text().notNull(),
  description: text().notNull(),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

//
// Serviços de uma barbearia
//
export const barberShopServiceTable = pgTable("barberShopService", {
  id: uuid().primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
  imageUrl: text("image_url"),
  priceInCents: integer("price_in_cents").notNull(),
  barberShopId: uuid("barber_shop_id")
    .notNull()
    .references(() => barberShopTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

//
// Reserva
//
export const bookingTable = pgTable("booking", {
  id: uuid().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  reservedDate: timestamp("reserved_date").notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

//
// Pivot: serviços em uma reserva (N:N)
//
export const bookingServicesTable = pgTable(
  "booking_services",
  {
    bookingId: uuid("booking_id")
      .notNull()
      .references(() => bookingTable.id, { onDelete: "cascade" }),
    serviceId: uuid("service_id")
      .notNull()
      .references(() => barberShopServiceTable.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.bookingId, table.serviceId] }),
  })
);

//
// Relations
//
export const barberShopRelations = relations(barberShopTable, ({ many }) => ({
  barberShopServices: many(barberShopServiceTable),
}));

export const barberShopServiceRelations = relations(
  barberShopServiceTable,
  ({ one, many }) => ({
    barberShop: one(barberShopTable, {
      fields: [barberShopServiceTable.barberShopId],
      references: [barberShopTable.id],
    }),
    bookings: many(bookingServicesTable),
  })
);

export const bookingRelations = relations(bookingTable, ({ one, many }) => ({
  user: one(userTable, {
    fields: [bookingTable.userId],
    references: [userTable.id],
  }),
  services: many(bookingServicesTable),
}));

export const bookingServicesRelations = relations(
  bookingServicesTable,
  ({ one }) => ({
    booking: one(bookingTable, {
      fields: [bookingServicesTable.bookingId],
      references: [bookingTable.id],
    }),
    service: one(barberShopServiceTable, {
      fields: [bookingServicesTable.serviceId],
      references: [barberShopServiceTable.id],
    }),
  })
);
