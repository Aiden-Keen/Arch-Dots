export interface GenerationType {
    id: string;
    userId: string;
    inputPrompt: string;
    generatedContent: string;
    contentType: string;
    tone: string;
    createdAt: Date;
}

export interface ContentType {
    value: string;
    label: string;
    color?: string;
    description?: string;
}

export type HistoryProps = Generation

export interface UserInfo {
    id: string;
    clerkId: string;
    planTier: string;
    creditsBalance: number;
    creditsUsed: number;
    lastReset: Date;
    role: "User" | "Admin";
    createdAt: Date;
}