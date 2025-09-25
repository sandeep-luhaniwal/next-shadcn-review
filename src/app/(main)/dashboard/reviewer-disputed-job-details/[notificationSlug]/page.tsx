"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import ImageShowFull from "../../buyer-manage-a-job/_components/image-show-full"
import LeaveFeedbackDiputed from "../leave-feedback-diputed"

export default function ReviewerDisputedJobDetailsPage() {
    const [openFeedback, setOpenFeedback] = useState(false)
    const [coverMessage, setCoverMessage] = useState("")
    return (
        <div className="flex flex-col gap-5">
            <p className="text-xl md:text-2xl font-bold">Disputed Job Details</p>
            <Card className="gap-0">
                <CardContent className="">
                    <p className="text-base font-semibold">
                        Review "Atomic Habits" by James Clear
                    </p>
                    <p className="text-base text-muted-foreground pt-6 md:pt-8 lg:pt-9">
                        Requirements ASIN: IUTRHG FJHG
                    </p>
                    <div className="flex flex-wrap gap-y-2 gap-4 py-4">
                        <span className="flex text-muted-foreground text-sm items-center gap-1">👤 Denis Medvedev (4.8★)</span>
                        <span className="flex text-muted-foreground text-sm items-center gap-1">💲 5 per review</span>
                        <span className="flex text-muted-foreground text-sm items-center gap-1">📝 10 reviews</span>
                        <span className="flex text-muted-foreground text-sm items-center gap-1">💰 Total Budget: $50</span>
                        <span className="flex text-muted-foreground text-sm items-center gap-1">📦 21 Aug 2025</span>

                    </div>
                    {/* Dispute Section */}
                    <div className="relative flex gap-3">
                        <span className="block w-1 absolute h-full bg-button-orange"></span>
                        <div className="py-5 ps-6 w-full">

                            <p className="font-semibold text-button-orange text-base">
                                Disputes #232
                            </p>
                            <p className="text-foreground text-sm font-semibold pt-3">
                                Refund Amount
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">Review too short, product key features not covered, grammar issues.I am willing to pay 50% because only half work is done properly.</p>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3">
                                <div>
                                    <p className="text-foreground text-sm font-semibold">
                                        Proposed Payment to Reviewer
                                    </p>
                                    <p className="text-sm text-foreground/60">
                                        $ 50
                                    </p>
                                </div>
                                <Button className="bg-button-orange max-w-max cursor-pointer">
                                    Accept Offer
                                </Button>
                            </div>
                            <p className="text-sm font-medium pt-3 pb-1">
                                Attachments
                            </p>
                            <ImageShowFull />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap justify-end gap-3 pt-3">
                        <Button
                            onClick={() => setOpenFeedback(true)}
                            className="border-button-orange order-2 sm:order-1 text-button-orange bg-transparent border cursor-pointer">
                            Leave Counter Feedback
                        </Button>
                        <Button className="border-button-orange order-1 sm:order-2 text-button-orange bg-transparent border cursor-pointer">
                            Escalate to Admin
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <LeaveFeedbackDiputed
                open={openFeedback}
                onClose={() => setOpenFeedback(false)}
                coverMessage={coverMessage}
                onMessageChange={setCoverMessage}
            />
        </div>
    )
}
