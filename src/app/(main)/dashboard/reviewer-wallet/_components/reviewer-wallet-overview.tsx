"use client"

import { Card, CardHeader } from "@/components/ui/card"

const ReviewerWalletOverView = () => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
    )
}

export default ReviewerWalletOverView
