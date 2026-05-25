# Countera Local Test App

Local Docker-first testing version of the Countera landing and waitlist experience.

## Getting Started

Run with Docker Compose:

```bash
cp .env.example .env
docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run checks through Docker:

```bash
docker compose run --rm web pnpm lint
docker compose run --rm web pnpm build
```

Generate and apply database migrations:

```bash
docker compose run --rm web pnpm db:generate
docker compose run --rm web pnpm db:migrate
docker compose run --rm web pnpm db:seed
```

For direct local development without Docker:

```bash
pnpm install
pnpm dev
```

## Notes

- This is a local testing version only.
- The waitlist form is a placeholder and does not submit emails yet.
- PostgreSQL runs locally through the `db` Compose service.
- Production domains are planned later: `countera.app` and `app.countera.app`.

## Main Files

- `src/app/page.tsx`: landing/waitlist page
- `src/app/globals.css`: global styles and Tailwind import
- `compose.yaml`: local Docker Compose setup
- `Dockerfile`: local app image
- `.env.example`: safe environment variable template
- `src/db/schema.ts`: first database schema for the POS core
