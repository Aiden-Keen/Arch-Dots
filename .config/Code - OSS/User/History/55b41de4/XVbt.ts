import 'dotenv/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

// Create a Pool to NeonDB (Postgres)
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // production tuning (Neon recommended): keep pool size small on serverless
  max: Number(process.env.PG_POOL_MAX ?? 10),
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const db = drizzle(pool);
