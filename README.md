# Book Tracker Backend

Approach
This backend is designed and structured for clarity, scalability, and best practices commonly used in production NestJS projects. Here’s a breakdown of the approach:

1. Modular Architecture
Feature Modules: The entire books business logic is isolated in a dedicated BooksModule—this includes its own controller and service, following the NestJS recommendation for feature-based structure. This keeps the codebase organized and makes future scaling (e.g., adding users, authentication, other resources) effortless.

Dependency Injection: NestJS DI enables clean separation—controllers delegate to services for business logic and data access.

2. TypeScript-First, Type-Safe
The app is written 100% in TypeScript, providing static type checking and enabling robust code hints, refactoring, and error prevention.

DTOs & types ensure all parts of the stack know exactly what data is expected.

3. Prisma as ORM
PrismaService is a singleton service wrapping the Prisma Client.

Prisma provides simple, readable, and type-safe access to Postgres, as well as automatic schema migrations.

By using the Prisma Book model, all DB interactions are abstracted away from the rest of the application.

4. RESTful API Design
Fully RESTful endpoints: GET /books and POST /books, following clear and conventional resource routes.

All responses are application/json, making it trivial for the frontend (or any other client) to consume the API.

5. Environment-Driven Configuration
Sensitive and deployment-specific values (database URLs, CORS origins, etc.) are never hardcoded but pulled from environment variables.

This enables safe deployment on Render, Vercel, or any cloud platform, and easy local development.

6. CORS Setup
CORS is enabled at the server level, reading frontend origins from the environment.

This makes the backend securely accessible only to designated frontend(s), supporting both local and production deployments.


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
