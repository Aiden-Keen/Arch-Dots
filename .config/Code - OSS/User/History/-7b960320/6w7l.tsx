"use client";
import React, { useState } from "react";
import { Search, Grid } from "lucide-react";
import ContentCard from "@/components/ContentCard";
import ContentModal from "@/components/ContentModal";
import ContentSearchFilters from "./_components/ContentSearchFilters";
import useHistoryStore from "@/stores/useHistoryStore";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { HistoryProps } from "@/types";

const History: React.FC = () => {
    const history = useHistoryStore((s) => s.history);
    const isHydrated = useHistoryStore((s) => s.isHydrated);
    const refreshHistory = useHistoryStore((s) => s.refreshHistory);
    const { userId, isLoaded } = useAuth();

    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortBy, setSortBy] = useState("type");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContent, setSelectedContent] = useState<HistoryProps | null>(null);

    if (userId === null && isLoaded) {
        redirect("/sign-in");
    }

    if (!isHydrated || !isLoaded) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                Loading...
            </div>
        );
    }

    const handleReload = async () => {
        if (!userId) return;
        
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
        setSelectedContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedContent(null);
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

            {sortedContent.length === 0 && (
                <div className="text-center py-12">
                    <Search className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg text-gray-600 font-medium">
                        No content found
                    </p>
                    <p className="text-gray-500">
                        Try adjusting search or filters.
                    </p>
                </div>
            )}

            {sortedContent.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-8">
                    {sortedContent.map((content) => (
                        <div
                            key={content.id}
                            onClick={() => openModal(content)}
                        >
                            <ContentCard
                                contentType={content.contentType}
                                inputPrompt={content.inputPrompt}
                                generatedContent={content.generatedContent}
                                tone={content.tone}
                                createdAt={content.createdAt}
                            />
                        </div>
                    ))}
                </div>
            )}

            {selectedContent && (
                <ContentModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    contentType={selectedContent.contentType}
                    tone={selectedContent.tone}
                    inputPrompt={selectedContent.inputPrompt}
                    generatedContent={selectedContent.generatedContent}
                    createdAt={new Date(selectedContent.createdAt)}
                />
            )}
        </div>
    );
};

export default History;
