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
        clerkId: varchar("clerkId", { length: 128 }).notNull().unique(),
        planTier: varchar("planTier", { length: 64 }).notNull().default("free"),
        creditsBalance: integer("creditsBalance").notNull().default(0),
        creditsUsed: integer("creditsUsed").notNull().default(0),
        lastReset: timestamp("lastReset", { mode: "string" })
            .notNull()
            .defaultNow(),
        role: varchar("role", { length: 32 }).notNull().default("User"),
        createdAt: timestamp("createdAt", { mode: "string" })
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
    userId: text("userId").notNull(),
    providerId: varchar("providerId", { length: 128 }), // Stripe or placeholder
    tier: varchar("tier", { length: 64 }).notNull(),
    creditsPerMonth: integer("creditsPerMonth").notNull().default(0),
    active: boolean("active").notNull().default(true),
    startedAt: timestamp("startedAt", { mode: "string" })
        .notNull()
        .defaultNow(),
    endedAt: timestamp("endedAt", { mode: "string" }),
});

export const plans = pgTable("plans", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => createId())
        .notNull(),
    tier: varchar("tier", { length: 64 }).notNull().unique(),
    monthlyCredits: integer("monthlyCredits").notNull(),
    priceCents: integer("priceCents").notNull().default(0),
    description: text("description"),
});

export const usage_logs = pgTable("usage_logs", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => createId())
        .notNull(),
    userId: text("userId").notNull(),
    creditsUsed: integer("creditsUsed").notNull(),
    action: varchar("action", { length: 128 }).notNull(),
    timestamp: timestamp("timestamp", { mode: "string" })
        .notNull()
        .defaultNow(),
    metadata: json("metadata"),
});
