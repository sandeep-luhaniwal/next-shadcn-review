"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

type Job = {
    id: number
    title: string
    price: number
    deadline: number
    slots: number
}

interface ApplyJobProps {
    open: boolean
    onClose: () => void
    job: Job | null
    selectedFiles: File[]
    onFileChange: (files: File[]) => void
    coverMessage: string
    onMessageChange: (message: string) => void
}

const MyJobLeaveFeedBack: React.FC<ApplyJobProps> = ({
    open,
    onClose,
    job,
    coverMessage,
    onMessageChange,
}) => {
    if (!job) return null

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="font-semibold text-base text-left">
                        Leave Feedback for "{job.title}"
                    </DialogTitle>
                </DialogHeader>

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
                    <div className="flex justify-end">
                        <Button className="bg-button-orange flex gap-2 items-center cursor-pointer">
                            Submit Feedback
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default MyJobLeaveFeedBack
