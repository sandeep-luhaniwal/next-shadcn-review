import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Shield } from "lucide-react"
import Link from "next/link"

const BuyerCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {/* Available Balance */}
            <Card className="shadow-sm gap-0">
                <CardHeader>
                    <CardTitle className="text-sm text-muted-foreground font-normal">Available</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl lg:text-3xl font-semibold">$500.50</p>
                </CardContent>
            </Card>

            {/* Blocked Balance */}
            <Card className="shadow-sm gap-0">
                <CardHeader>
                    <CardTitle className="text-sm text-muted-foreground font-normal">Blocked</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl lg:text-3xl font-semibold">$150</p>
                </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-sm gap-0 md:col-span-2 xl:col-span-1">
                <CardHeader>
                    <CardTitle className="text-sm text-muted-foreground font-normal">Quick Action</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        <Link href={"/dashboard/buyer-manage-a-job"} className="flex flex-col bg-card-orange px-4 py-3 rounded-lg flex-1">
                            <div className="w-7 h-7 flex justify-center items-center bg-orange rounded-[8px]">
                                <Briefcase className="h-3 w-3 text-white" />
                            </div>
                            <span className="font-bold text-base leading-160 pt-2.5 pb-0.5">113</span>
                            <span className="text-[10px] font-semibold text-muted-foreground">Active Jobs</span>
                        </Link>

                        <Link href={"/dashboard/buyer-manage-a-job"} className="flex flex-col bg-card-orange px-4 py-3 rounded-lg flex-1">
                            <div className="w-7 h-7 flex justify-center items-center bg-orange rounded-[8px]">
                                <Users className="h-3 w-3 text-white" />
                            </div>
                            <span className="font-bold text-base leading-160 pt-2.5 pb-0.5">23</span>
                            <span className="text-[10px] font-semibold text-muted-foreground">Applicants</span>
                        </Link>

                        <Link href={"/dashboard/buyer-disputes"} className="flex flex-col bg-card-orange px-4 py-3 rounded-lg flex-1">
                            <div className="w-7 h-7 flex justify-center items-center bg-orange rounded-[8px]">
                                <Shield className="h-3 w-3 text-white" />
                            </div>
                            <span className="font-bold text-base leading-160 pt-2.5 pb-0.5">12</span>
                            <span className="text-[10px] font-semibold text-muted-foreground">Disputes Open</span>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default BuyerCard
