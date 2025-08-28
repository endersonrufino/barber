┌─────────────┐        ┌───────────────┐        ┌─────────────────────┐
│   user      │ 1    n │   booking      │ n    n │   barberShopService │
│─────────────│--------│───────────────│--------│─────────────────────│
│ id (PK)     │        │ id (PK)       │        │ id (PK)             │
│ name        │        │ userId (FK)   │        │ name                │
│ email       │        │ reservedDate  │        │ priceInCents        │
└─────────────┘        └───────────────┘        │ barberShopId (FK)   │
                                                 └─────────────────────┘
                                                         │
                                                         │ n
                                                         │
                                                         │ 1
                                                 ┌──────────────┐
                                                 │  barberShop  │
                                                 │──────────────│
                                                 │ id (PK)      │
                                                 │ name         │
                                                 │ address      │
                                                 └──────────────┘

🔗 Relações:

User (1) → (N) Booking

Booking (N) → (N) BarberShopService (via tabela pivot booking_services)

BarberShop (1) → (N) BarberShopService

```mermaid
erDiagram
    User ||--o{ Booking : "faz"
    Booking ||--o{ BookingServices : "possui"
    BarberShopService ||--o{ BookingServices : "é reservado em"
    BarberShop ||--o{ BarberShopService : "oferece"

    User {
        uuid id PK
        text name
        text email
        timestamp createdAt
        timestamp updatedAt
    }

    Booking {
        uuid id PK
        uuid userId FK
        timestamp reservedDate
        timestamp createdAt
        timestamp updatedAt
    }

    BookingServices {
        uuid bookingId FK
        uuid serviceId FK
        PK (bookingId, serviceId)
    }

    BarberShopService {
        uuid id PK
        text name
        text description
        text imageUrl
        int priceInCents
        uuid barberShopId FK
        timestamp createdAt
        timestamp updatedAt
    }

    BarberShop {
        uuid id PK
        text name
        text address
        text phone
        text description
        text imageUrl
        timestamp createdAt
        timestamp updatedAt
    }
