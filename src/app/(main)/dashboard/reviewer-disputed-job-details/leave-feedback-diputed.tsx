"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface LeaveFeedbackDiputedProps {
    open: boolean
    onClose: () => void
    coverMessage: string
    onMessageChange: (message: string) => void
}

const LeaveFeedbackDiputed: React.FC<LeaveFeedbackDiputedProps> = ({
    open,
    onClose,
    coverMessage,
    onMessageChange,
}) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="font-semibold text-base text-left">
                        Raise a Dispute
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-2">
                    <label className="text-sm font-semibold">Leave Counter Feedback</label>
                    <Textarea
                        className="mt-1 !text-xs resize-none h-[88px] overscroll-auto font-normal"
                        value={coverMessage}
                        placeholder="I can refund $25 only. I completed majority of the review work."
                        onChange={(e) => onMessageChange(e.target.value)}
                        rows={5}
                    />
                </div>
                <div className="flex gap-3 justify-end">
                    <Button
                        onClick={onClose}
                        className="border border-button-orange bg-transparent cursor-pointer text-button-orange">
                        Cancel
                    </Button>
                    <Button className="bg-button-orange cursor-pointer">
                        Leave Feedback
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default LeaveFeedbackDiputed
