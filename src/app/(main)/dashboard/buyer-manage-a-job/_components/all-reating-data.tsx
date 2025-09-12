import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
    completed: number;
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
        { id: 1, reviewer: "Sarah Johnson", rating: 4.8, completed: 25, success: "96%" },
        { id: 2, reviewer: "Alex Carter", rating: 4.6, completed: 18, success: "92%" },
        { id: 3, reviewer: "David Miller", rating: 4.9, completed: 32, success: "98%" },
        { id: 4, reviewer: "Jessica Chen", rating: 4.7, completed: 20, success: "94%" },
        { id: 5, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 11, reviewer: "Sarah Johnson", rating: 4.8, completed: 25, success: "96%" },
        { id: 22, reviewer: "Alex Carter", rating: 4.6, completed: 18, success: "92%" },
        { id: 32, reviewer: "David Miller", rating: 4.9, completed: 32, success: "98%" },
        { id: 43, reviewer: "Jessica Chen", rating: 4.7, completed: 20, success: "94%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
        { id: 53, reviewer: "Brian Rodriguez", rating: 4.5, completed: 15, success: "90%" },
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[900px] overflow-y-scroll max-h-[90vh]">
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
                                    <TableHead>Jobs Completed</TableHead>
                                    <TableHead>Success Rate</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {reviews.map((review) => (
                                    <TableRow key={review.id}>
                                        <TableCell>{review.reviewer}</TableCell>
                                        <TableCell>⭐ {review.rating}</TableCell>
                                        <TableCell>{review.completed}</TableCell>
                                        <TableCell>{review.success}</TableCell>
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
