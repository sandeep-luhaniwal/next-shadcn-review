"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import WithdrawRequestDialog from "./withdraw-request-dailog"

const ReviewerWalletOverView = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="flex gap-2 items-center justify-between">
                <p className="font-semibold text-base mb-4">Wallet Overview</p>
                <Button
                    className="bg-button-orange py-2.5 text-sm font-medium cursor-pointer rounded-md"
                    onClick={() => setOpen(true)}
                >
                    Cash Out
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 pt-5 gap-5">
                <Card>
                    <CardHeader>
                        <p className="text-muted-foreground text-sm font-medium">Available</p>
                        <p className="pt-1 text-xl md:text-2xl lg:text-3xl font-semibold">$500.50</p>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <p className="text-muted-foreground text-sm font-medium">Blocked</p>
                        <p className="pt-1 text-xl md:text-2xl lg:text-3xl font-semibold">$350.00</p>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <p className="text-muted-foreground text-sm font-medium">Total Earning (Last 28 days)</p>
                        <p className="pt-1 text-xl md:text-2xl lg:text-3xl font-semibold">$650.00</p>
                    </CardHeader>
                </Card>
            </div>

            {/* Withdraw dialog */}
            <WithdrawRequestDialog open={open} onClose={() => setOpen(false)} />
        </div>
    )
}

export default ReviewerWalletOverView
