"use client";
import React, { useEffect, useState } from "react";
import ContentModal from "@/components/ContentModal";
import ContentSearchFilters from "./_components/ContentSearchFilters";
import useHistoryStore from "@/stores/useHistoryStore";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { HistoryProps } from "@/types";
import { ContentGrid } from "./_components/ContentGrid";
import { CardSkeleton } from "./_components/CardSkeleton";
import { HistoryPageSkeleton } from "./_components/PageSkeleton";

const History: React.FC = () => {
    const history = useHistoryStore((s) => s.history);
    const refreshHistory = useHistoryStore((s) => s.refreshHistory);
    const { userId, isLoaded } = useAuth();

    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortBy, setSortBy] = useState("type");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<HistoryProps | null>(null);
    const isLoading = useHistoryStore((s) => s.isLoading);

    useEffect(() => {
        if (isLoaded && userId) {
            handleReload();
        }
    }, [isLoaded, userId, refreshHistory]);

    if (!isLoaded) return <HistoryPageSkeleton />;

    if (isLoaded && (userId === null || userId === undefined)) {
        redirect("/sign-in");
    }

    const handleReload = async () => {
        await refreshHistory(userId);
    };

    const filteredContent = history.filter((content) => {
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

            {isLoading ? (
                <CardSkeleton />
            ) : (
                <ContentGrid
                    sortedContent={sortedContent}
                    openModal={openModal}
                />
            )}

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

export default History;
