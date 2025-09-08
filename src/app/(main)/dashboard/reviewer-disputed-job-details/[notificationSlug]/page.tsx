"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export default function ReviewerDisputedJobDetailsPage() {
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
                    <div className="pt-6">
                        <div className="flex items-center gap-3">
                            <p className="font-semibold text-base">
                                Disputes #232
                            </p>
                            <p className="bg-orange/10 text-foreground text-sm px-3 py-1 rounded-lg">
                                Poor quality of work
                            </p>
                        </div>
                        <p className="text-sm font-medium pt-3 pb-1">
                            Feedback
                        </p>
                        <ScrollArea className="h-[120px] border rounded-md p-3 text-sm">
                            <p>
                                The work you submitted does not match the product description I provided.
                                The review feels copied and generic, instead of being written based on real
                                product usage. Also, there are multiple grammar mistakes.
                            </p>
                            <p className="mt-2">
                                Please make the review more original, detailed, and relevant to the product.
                                I am attaching screenshots of the issues for reference.
                            </p>
                        </ScrollArea>
                        <p className="text-sm font-medium pt-3 pb-1">
                            Attachments
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <Image width={73} height={56} alt="summbitted inag" src={'/images/webp/hero-dashboard.webp'} className="border rounded" />
                            <Image width={73} height={56} alt="summbitted inag" src={'/images/webp/hero-dashboard.webp'} className="border rounded" />
                            <Image width={73} height={56} alt="summbitted inag" src={'/images/webp/hero-dashboard.webp'} className="border rounded" />
                            <Image width={73} height={56} alt="summbitted inag" src={'/images/webp/hero-dashboard.webp'} className="border rounded" />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end pt-3">
                        <Button className="bg-button-orange">
                            Resubmit Work
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
