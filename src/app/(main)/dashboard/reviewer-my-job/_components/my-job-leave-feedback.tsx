"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Job = {
    id: number;
    title: string;
    price: number;
    deadline: number;
    slots: number;
};

interface ApplyJobProps {
    open: boolean;
    onClose: () => void;
    job: Job | null;
    selectedFiles: File[];
    onFileChange: (files: File[]) => void;
    coverMessage: string;
    onMessageChange: (message: string) => void;
}

const MyJobLeaveFeedBack: React.FC<ApplyJobProps> = ({
    open,
    onClose,
    job,
    coverMessage,
    onMessageChange,
}) => {
    const [rating, setRating] = useState<number>(0);

    if (!job) return null;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="font-semibold text-base text-left">
                        Leave Feedback for "{job.title}"
                    </DialogTitle>
                </DialogHeader>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, index) => {
                        const starValue = index + 1;
                        return (
                            <Star
                                key={starValue}
                                className={cn(
                                    "w-6 h-6 cursor-pointer transition-colors",
                                    starValue <= rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                )}
                                onClick={() => setRating(starValue)}
                            />
                        );
                    })}
                </div>

                {/* Textarea */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold">Your Feedback</label>
                    <Textarea
                        className="mt-1 !text-xs resize-none h-[88px] overscroll-auto font-normal"
                        value={coverMessage}
                        placeholder="Write your feedback in detail"
                        onChange={(e) => onMessageChange(e.target.value)}
                        rows={5}
                    />
                </div>

                <DialogFooter>
                    <div className="flex justify-end w-full">
                        <Button
                            className="bg-button-orange flex gap-2 items-center cursor-pointer"
                            onClick={() => {
                                console.log("Submitted rating:", rating);
                                console.log("Feedback:", coverMessage);
                                onClose();
                            }}
                        >
                            Submit Feedback
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default MyJobLeaveFeedBack;
