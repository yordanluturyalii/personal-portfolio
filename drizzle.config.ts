import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql',
  schema: './model/schema.ts',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  out: './drizzle'
})
