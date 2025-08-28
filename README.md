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
