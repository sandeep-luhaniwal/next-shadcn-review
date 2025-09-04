"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const ReviewerHero = () => {
    const [filter, setFilter] = useState("Month"); // default value

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {/* Available Balance */}
            <Card className="shadow-sm gap-0 border">
                <CardHeader>
                    <CardTitle className="text-sm text-muted-foreground font-normal">
                        Available
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl lg:text-3xl font-semibold">$500.50</p>
                </CardContent>
            </Card>

            {/* Blocked Balance */}
            <Card className="shadow-sm gap-0 border">
                <CardHeader>
                    <CardTitle className="text-sm text-muted-foreground font-normal">
                        Blocked
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl lg:text-3xl font-semibold">$150</p>
                </CardContent>
            </Card>

            {/* Total Earning with Dropdown */}
            <Card className="shadow-sm gap-0 border">
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle className="text-sm text-muted-foreground font-normal">
                        Total Earning
                    </CardTitle>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="h-8 px-3 cursor-pointer text-sm text-muted-foreground font-normal flex items-center gap-1 border rounded-md"
                            >
                                {filter} <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer" onClick={() => setFilter("Today")}>
                                Today
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => setFilter("This Week")}>
                                This Week
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => setFilter("This Month")}>
                                This Month
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => setFilter("This Year")}>
                                This Year
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardHeader>

                <CardContent>
                    <p className="text-2xl lg:text-3xl font-semibold">$650.00</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default ReviewerHero;
