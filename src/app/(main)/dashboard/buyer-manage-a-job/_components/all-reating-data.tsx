"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import React, { useState } from "react";

// Types
type JobType = {
    id: number;
    name: string;
    rating: number;
    jobs: number;
    success: string;
};

type Review = {
    id: number;
    reviewer: string;
    rating: number; // 1-5 stars
    comment: string;
};

type AllRatingDataProps = {
    job: JobType | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

// ⭐ Convert rating number into stars
const renderStars = (rating: number) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
};

const AllRatingData: React.FC<AllRatingDataProps> = ({ job, open, onOpenChange }) => {
    if (!job) return null;

    // Dummy reviews
    const reviews: Review[] = [
        { id: 1, reviewer: "Sarah Johnson", rating: 5, comment: "Amazing job! Thanks!" },
        { id: 2, reviewer: "Alex Carter", rating: 4, comment: "Good work, could be faster." },
        { id: 3, reviewer: "David Miller", rating: 5, comment: "Perfect, exceeded expectations!" },
        { id: 4, reviewer: "Jessica Chen", rating: 3, comment: "Decent, but room for improvement." },
        { id: 5, reviewer: "Brian Rodriguez", rating: 4, comment: "Solid effort, reliable." },
        { id: 6, reviewer: "Emily Davis", rating: 5, comment: "Loved working with you!" },
        { id: 7, reviewer: "Michael Scott", rating: 2, comment: "Not happy with the results." },
        { id: 8, reviewer: "Angela Lee", rating: 5, comment: "Fantastic, will hire again!" },
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const totalPages = Math.ceil(reviews.length / rowsPerPage);
    const paginatedReviews = reviews.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // Handlers
    const handleFirst = () => setCurrentPage(1);
    const handleLast = () => setCurrentPage(totalPages);
    const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
    const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[700px] overflow-y-scroll max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle>Reviews for {job.name}</DialogTitle>
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">⭐ {job.rating} Avg Rating</p>
                        <p className="text-sm">{job.jobs} total jobs completed</p>
                        <p className="text-sm">Success rate: {job.success}</p>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Reviewer</TableHead>
                                    <TableHead>Rating</TableHead>
                                    <TableHead>Comment</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="border-y">
                                {paginatedReviews.map((review) => (
                                    <TableRow key={review.id}>
                                        <TableCell>{review.reviewer}</TableCell>
                                        <TableCell>{renderStars(review.rating)}</TableCell>
                                        <TableCell>{review.comment}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        {/* Pagination Controls */}

                        <div className="flex flex-col md:flex-row md:justify-end items-center gap-4">
                            {/* Rows per page */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm">Rows per page</span>
                                <Select
                                    value={String(rowsPerPage)}
                                    onValueChange={(val) => {
                                        setRowsPerPage(Number(val));
                                        setCurrentPage(1);
                                    }}
                                >
                                    <SelectTrigger className="w-[75px] cursor-pointer">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem className="cursor-pointer" value="10">10</SelectItem>
                                        <SelectItem className="cursor-pointer" value="15">15</SelectItem>
                                        <SelectItem className="cursor-pointer" value="20">20</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <span className="text-sm">
                                Page {currentPage} of {totalPages}
                            </span>

                            {/* Buttons */}
                            <div className="flex items-center gap-1">
                                <Button
                                    className="cursor-pointer"
                                    variant="outline"
                                    size="icon"
                                    onClick={handleFirst}
                                    disabled={currentPage === 1}
                                >
                                    <ChevronsLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    className="cursor-pointer"
                                    variant="outline"
                                    size="icon"
                                    onClick={handlePrev}
                                    disabled={currentPage === 1}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    className="cursor-pointer"
                                    variant="outline"
                                    size="icon"
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages}
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                                <Button
                                    className="cursor-pointer"
                                    variant="outline"
                                    size="icon"
                                    onClick={handleLast}
                                    disabled={currentPage === totalPages}
                                >
                                    <ChevronsRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AllRatingData;
