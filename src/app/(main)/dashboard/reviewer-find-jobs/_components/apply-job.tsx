"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader } from "@/components/ui/card"
import { Send, ShoppingCart } from "lucide-react"

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
    coverMessage: string
    onChangeMessage: (val: string) => void
    onResetMessage: () => void
}

const ApplyJob: React.FC<ApplyJobProps> = ({ open, onClose, job, coverMessage, onChangeMessage, onResetMessage }) => {
    if (!job) return null

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="font-semibold text-base text-left">Apply for Job</DialogTitle>
                    <DialogDescription className="font-segoeui text-left font-normal text-muted-foreground">
                        Submit your application for: <span className="font-medium">{job.title}</span>
                    </DialogDescription>
                </DialogHeader>
                <Card className="!py-4">
                    <CardHeader className="!py-0">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded flex justify-center items-center bg-orange/10 text-button-orange">
                                <ShoppingCart />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">{job.title}</p>
                                <p className="text-xs text-muted-foreground">
                                    ${job.price} per review • {job.deadline} days deadline
                                </p>
                            </div>
                        </div>
                        <p className="text-xs pt-3">
                            Applying for <span className="font-medium">1 slot</span> (${job.price} total)
                        </p>
                    </CardHeader>
                </Card>

                <div className="space-y-2">
                    <label className="text-sm font-semibold">Cover Message *</label>
                    <Textarea
                        className="border-none mt-1 !text-xs resize-none h-[150px] overscroll-auto font-normal"
                        value={coverMessage}
                        onChange={(e) => onChangeMessage(e.target.value)}
                        rows={10}
                    />
                    <div className="flex justify-between py-2 items-center gap-1">
                        <p className="text-[10px] text-muted-foreground">{coverMessage.length} characters</p>

                        <button
                            type="button"
                            onClick={onResetMessage}
                            className="text-xs font-semibold cursor-pointer text-muted-foreground"
                        >
                            Reset to Default
                        </button>
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                        Tip: Personalize your message to highlight relevant experience and show genuine interest in the project.
                    </div>
                </div>

                <DialogFooter className="gap-2">
                    <Button variant="outline" className="cursor-pointer" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button className="bg-button-orange flex gap-2 items-center cursor-pointer">
                        <span>
                            <Send />
                        </span>
                        Submit Application
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ApplyJob
