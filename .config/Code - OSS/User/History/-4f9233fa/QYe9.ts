import {
    boolean,
    integer,
    pgTable,
    text,
    timestamp,
    uniqueIndex,
    varchar,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const content_generations = pgTable("content_generations", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => createId())
        .notNull(),
    userId: text("userId").notNull(),
    inputPrompt: text("inputPrompt").notNull(),
    contentType: text("contentType").default("unspecified").notNull(),
    tone: text("tone").notNull(),
    generatedContent: text("generatedContent").notNull(),
    createdAt: timestamp("createdAt", { withTimezone: true })
        .notNull()
        .defaultNow(),
    updatedAt: timestamp("updatedAt", { withTimezone: true })
        .notNull()
        .defaultNow(),
    isDeleted: boolean().default(false).notNull(),
});

export const users = pgTable("users", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => createId())
        .notNull(),
    clerk_id: varchar("clerk_id", { length: 128 }).notNull().unique(),
    plan_tier: varchar("plan_tier", { length: 64 }).notNull().default("free"),
    credits_balance: integer("credits_balance").notNull().default(0),
    credits_used: integer("credits_used").notNull().default(0),
    last_reset: timestamp("last_reset", { mode: "string" })
        .notNull()
        .defaultNow(),
    role: varchar("role", { length: 32 }).notNull().default("User"),
    created_at: timestamp("created_at", { mode: "string" })
        .notNull()
        .defaultNow(),
}, (table) => ({
    clerkIdx: uniqueIndex("users_clerk_id_idx").on(table.clerk_id)
}));
