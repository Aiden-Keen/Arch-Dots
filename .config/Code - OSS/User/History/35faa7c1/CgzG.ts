import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const sql = neon(
  "postgresql://neondb_owner:npg_P7YTR8wcavHJ@ep-lingering-feather-a12rcn5a-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);
export const db = drizzle(sql, { schema });
