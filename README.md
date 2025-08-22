# Book Tracker Backend

REST API for managing books, built with a best-practice NestJS architecture, Prisma ORM, and PostgreSQL.

-----

## 🛠 Tech Stack

  - **NestJS** (TypeScript)
  - **Prisma ORM**
  - **PostgreSQL** (Neon free tier recommended)

-----

## 🧩 Architecture & Approach

This project is built with a focus on professional, maintainable, and scalable backend development.

  - **Feature-Based Modularity**: All book-related logic resides in a dedicated `BooksModule`. This modular structure, recommended by NestJS, allows for effortless scaling—new features or resources can be added by simply creating new modules.

  - **Dependency Injection**: Controllers delegate to services using NestJS's DI system. This creates a clear separation between API logic and business/data logic, making the codebase easier to test and maintain.

  - **Type Safety**: The entire codebase is built with TypeScript, providing static type checking, robust IDE support, and fewer runtime errors.

  - **Prisma ORM**: Database access is handled with a singleton `PrismaService`, which wraps the Prisma Client for efficient DB connection management. The `Book` model is defined and managed via Prisma migrations.

  - **RESTful API**: The API exposes clear, conventional endpoints (`GET /books`, `POST /books`) that return JSON responses, making it easy to consume from a frontend or any REST client.

  - **Environment-Driven Configuration**: Environment variables are used to store sensitive data like database connection strings and CORS origins. This approach supports secure deployments and makes local development straightforward.

  - **CORS Security**: CORS is configured for both development and production environments, ensuring the API is only accessible by specified frontends.

-----

## 🚀 Getting Started

Follow these steps to get the project up and running.

### 1\. Clone Repository & Install Dependencies

```bash
git clone https://github.com/YOUR_USERNAME/Backend-Books.git
cd Backend-Books
npm install
```

### 2\. Configure Environment

Create a `.env` file in the root directory and add the following configuration.

```text
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
PORT=4000
ALLOWED_ORIGINS=https://your-frontend-url.com,http://localhost:3000
```

### 3\. Prisma Setup

Generate the Prisma client and sync your database schema.

```bash
npx prisma generate
npx prisma db push
# or npx prisma migrate dev (if using migrations for schema versioning)
```

### 4\. Start the API Server

```bash
npm run start:dev
```

The API will be available at `http://localhost:4000` (configurable via the `PORT` environment variable).

-----

## 📖 API Endpoints

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/books` | Retrieve all books. | - |
| `POST` | `/books` | Add a new book. | `{ "title": "Book Title", "author": "Author" }` |

-----

## 📁 Folder Structure

```text
src/
├── books/
│   ├── books.controller.ts
│   ├── books.module.ts
│   └── books.service.ts
├── prisma.service.ts
├── app.module.ts
└── main.ts
prisma/
└── schema.prisma
.env
```

-----

## 📝 Development Notes

  - **Easily extensible**: Add new modules and providers as needed to extend the functionality.
  - **Production-safe**: Never hardcode sensitive configuration data.
  - **Integrated CORS**: Works out of the box with any frontend, including Next.js, by configuring the `ALLOWED_ORIGINS` environment variable.
  - **Automated DB Sync**: Use Prisma migrations to version-control your database schema, making future changes straightforward and reliable.

-----

## ⚖️ License

This project is licensed under the MIT License.
