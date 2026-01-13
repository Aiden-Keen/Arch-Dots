import {
    boolean,
    integer,
    json,
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

export const users = pgTable(
    "users",
    {
        id: text("id")
            .primaryKey()
            .$defaultFn(() => createId())
            .notNull(),
        clerkId: varchar("clerk_id", { length: 128 }).notNull().unique(),
        planTier: varchar("plan_tier", { length: 64 })
            .notNull()
            .default("free"),
        creditsBalance: integer("credits_balance").notNull().default(0),
        creditsUsed: integer("credits_used").notNull().default(0),
        lastReset: timestamp("last_reset", { mode: "string" })
            .notNull()
            .defaultNow(),
        role: varchar("role", { length: 32 }).notNull().default("User"),
        createdAt: timestamp("created_at", { mode: "string" })
            .notNull()
            .defaultNow(),
    },
    (table) => ({
        clerkIdx: uniqueIndex("users_clerk_id_idx").on(table.clerkId),
    })
);

export const subscriptions = pgTable("subscriptions", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => createId())
        .notNull(),
    userId: integer("user_id").notNull(),
    providerId: varchar("provider_id", { length: 128 }), // Stripe or placeholder
    tier: varchar("tier", { length: 64 }).notNull(),
    creditsPerMonth: integer("credits_per_month").notNull().default(0),
    active: boolean("active").notNull().default(true),
    startedAt: timestamp("started_at", { mode: "string" })
        .notNull()
        .defaultNow(),
    endedAt: timestamp("ended_at", { mode: "string" }),
});

export const plans = pgTable("plans", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => createId())
        .notNull(),
    tier: varchar("tier", { length: 64 }).notNull().unique(),
    monthlyCredits: integer("monthly_credits").notNull(),
    priceCents: integer("price_cents").notNull().default(0),
    description: text("description"),
});

export const usageLogs = pgTable("usage_logs", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => createId())
        .notNull(),
    userId: integer("user_id").notNull(),
    creditsUsed: integer("credits_used").notNull(),
    action: varchar("action", { length: 128 }).notNull(),
    timestamp: timestamp("timestamp", { mode: "string" })
        .notNull()
        .defaultNow(),
    metadata: json("metadata"),
});
