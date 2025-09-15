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
import React from "react";

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
    rating: number;
    success: string;
};

type AllRatingDataProps = {
    job: JobType | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const AllRatingData: React.FC<AllRatingDataProps> = ({ job, open, onOpenChange }) => {
    if (!job) return null;

    // Dummy reviews data
    const reviews: Review[] = [
        { id: 1, reviewer: "Sarah Johnson", rating: 4.8, success: "96%" },
        { id: 2, reviewer: "Alex Carter", rating: 4.6, success: "92%" },
        { id: 3, reviewer: "David Miller", rating: 4.9, success: "98%" },
        { id: 4, reviewer: "Jessica Chen", rating: 4.7, success: "94%" },
        { id: 5, reviewer: "Brian Rodriguez", rating: 4.5, success: "90%" },
        { id: 6, reviewer: "Brian Rodriguez", rating: 4.5, success: "90%" },
        { id: 7, reviewer: "Brian Rodriguez", rating: 4.5, success: "90%" },
        { id: 8, reviewer: "Brian Rodriguez", rating: 4.5, success: "90%" },
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] overflow-y-scroll max-h-[90vh]">
                <DialogHeader className="h-full">
                    <DialogTitle>Ratings for {job.name}</DialogTitle>
                    <div className="space-y-3 flex gap-3 flex-wrap">
                        <p className="text-sm font-semibold">⭐ {job.rating} Rating</p>
                        <p className="text-sm">{job.jobs} total jobs completed</p>
                        <p className="text-sm">Success rate: {job.success}</p>

                        <Table>
                            <TableCaption>Top 5 recent reviews</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Reviewer</TableHead>
                                    <TableHead>Rating</TableHead>
                                    <TableHead className="!text-end flex justify-end">Success Rate</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {reviews.map((review) => (
                                    <TableRow key={review.id}>
                                        <TableCell>{review.reviewer}</TableCell>
                                        <TableCell>⭐ {review.rating}</TableCell>
                                        <TableCell className="!text-end flex justify-end">{review.success}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </div>
                </DialogHeader>

            </DialogContent>
        </Dialog>
    );
};

export default AllRatingData;
