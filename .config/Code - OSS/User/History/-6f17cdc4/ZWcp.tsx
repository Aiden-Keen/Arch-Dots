"use client"
import React, { Suspense, useState } from "react";
import { Grid } from "lucide-react";
import ContentModal from "@/components/ContentModal";
import ContentSearchFilters from "./_components/ContentSearchFilters";
import useHistoryStore from "@/stores/useHistoryStore";
import { useAuth } from "@clerk/nextjs";
import { GenerationType, HistoryProps } from "@/types";
import { CardSkeleton } from "./_components/CardSkeleton";
import { ContentGrid } from "./_components/ContentGrid";

export const HistoryPageUI: React.FC = () => {
    const history = useHistoryStore((s) => s.history);
    const refreshHistory = useHistoryStore((s) => s.refreshHistory);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortBy, setSortBy] = useState("type");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<HistoryProps | null>(null);

    const { userId } = useAuth();

    const handleReload = async () => {
        await refreshHistory(userId!);
    };

    const filteredContent = history.filter((content: GenerationType) => {
        const inputPrompt =
            typeof content.inputPrompt === "string" ? content.inputPrompt : "";
        const tone = typeof content.tone === "string" ? content.tone : "";

        const matchesSearch =
            inputPrompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tone.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType =
            filterType === "all" || content.contentType === filterType;

        return matchesSearch && matchesType;
    });

    const sortedContent = [...filteredContent].sort((a, b) => {
        if (sortBy === "type")
            return a.contentType.localeCompare(b.contentType);
        if (sortBy === "tone") return a.tone.localeCompare(b.tone);
        if (sortBy === "alphabetically")
            return (a.inputPrompt || "").localeCompare(b.inputPrompt || "");
        return 0;
    });

    const openModal = (content: HistoryProps) => {
        setSelectedCard(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCard(null);
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="h-20 border-b flex items-center justify-between px-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Content History
                </h1>

                <div className="flex items-center gap-2">
                    <button
                        title="Grid view"
                        className="p-2 rounded-md bg-gray-100"
                        disabled
                    >
                        <Grid className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>

            <ContentSearchFilters
                searchTerm={searchTerm}
                filterType={filterType}
                sortBy={sortBy}
                isLoading={false}
                onSearchChange={(e) => setSearchTerm(e.target.value)}
                onFilterChange={(e) => setFilterType(e.target.value)}
                onSortChange={(e) => setSortBy(e.target.value)}
                onReloadClick={handleReload}
            />

            <Suspense fallback={<CardSkeleton />}>
                <ContentGrid
                    sortedContent={sortedContent}
                    openModal={openModal}
                />
            </Suspense>

            {selectedCard && (
                <ContentModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    contentType={selectedCard.contentType}
                    tone={selectedCard.tone}
                    inputPrompt={selectedCard.inputPrompt}
                    generatedContent={selectedCard.generatedContent}
                    createdAt={new Date(selectedCard.createdAt)}
                />
            )}
        </div>
    );
};
