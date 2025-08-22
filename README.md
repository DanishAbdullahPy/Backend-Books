# Book Tracker Backend

**Tech Stack:**  
- NestJS (TypeScript)
- Prisma ORM
- PostgreSQL (Neon free tier)

---

## Architecture

- Organized using [NestJS Modules](https://docs.nestjs.com/modules) for scalability.
- `BooksModule` handles all book-related logic (REST endpoints, service).
- [Prisma Service](./prisma.service.ts) integrates Prisma Client as a singleton for efficient DB access.

---

## Getting Started

### 1. Install Dependencies

npm install

text

### 2. Configure Environment

Create a `.env` file with your Neon PostgreSQL database URL:
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

text

### 3. Prisma Setup

Run migrations and generate the prisma client:
npx prisma generate
npx prisma db push

text

### 4. Start The API Server

npm run start:dev

text
_Default port: `localhost:4000` (change in `src/main.ts` if needed)_

---

## API Endpoints

| Method | Endpoint      | Description            | Body Example                  |
|--------|--------------|------------------------|-------------------------------|
| GET    | `/books`     | List all books         | –                             |
| POST   | `/books`     | Add a new book         | `{ "title": "Book", "author": "Author" }` |

---

## Folder Structure

src/
books/
books.controller.ts
books.module.ts
books.service.ts
prisma.service.ts
app.module.ts
main.ts
prisma/
schema.prisma
.env

text

---

## Development Notes

- Modular architecture for future features (users, auth, etc.)
- CORS enabled by default for frontend integration
- Prisma auto-wires DB connection

---

## License

MIT
