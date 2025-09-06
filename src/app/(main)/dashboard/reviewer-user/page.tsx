"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function ReviewerUser() {
    const [text, setText] = useState(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    );
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left side (Account Settings) */}
            <div className="lg:col-span-2 space-y-4">
                <Accordion type="single" className="" collapsible defaultValue="defaultMessage">
                    {/* Default Cover Message */}
                    <Card className="gap-0 !py-0">
                        <AccordionItem value="defaultMessage">
                            <div className="relative">
                                <AccordionTrigger className="w-full">
                                    <CardHeader>
                                        <h3 className="text-sm font-semibold text-nowrap">Default Cover Message</h3>
                                    </CardHeader>
                                </AccordionTrigger>
                                <Button
                                    variant="outline"
                                    className="border-button-orange hidden sm:flex cursor-pointer max-w-max absolute top-0 right-4 text-button-orange hover:bg-orange-50 mt-3"
                                >
                                    Update Message
                                </Button>
                            </div>
                            <AccordionContent>
                                <CardContent className="text-sm text-muted-foreground">
                                    <textarea
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder="Write your default cover message..."
                                        className="w-full h-[60px] text-sm resize-none"
                                        rows={5}
                                    />
                                    <Button
                                        variant="outline"
                                        className="border-button-orange sm:hidden cursor-pointer w-full text-button-orange hover:bg-orange-50 mt-3"
                                    >
                                        Update Message
                                    </Button>
                                </CardContent>

                            </AccordionContent>
                        </AccordionItem>
                    </Card>

                    {/* Change Password */}
                    <Card className="gap-0 mt-5 !py-0">
                        <AccordionItem value="changePassword">
                            <AccordionTrigger>
                                <CardHeader>
                                    <h3 className="text-sm font-semibold text-nowrap">Change Password</h3>
                                </CardHeader>
                            </AccordionTrigger>
                            <AccordionContent>
                                <CardContent>
                                    <form className="space-y-3">
                                        <input
                                            type="password"
                                            placeholder="Current Password"
                                            className="w-full border rounded px-3 py-2 text-sm"
                                        />
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            className="w-full border rounded px-3 py-2 text-sm"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Confirm New Password"
                                            className="w-full border rounded px-3 py-2 text-sm"
                                        />
                                        <Button
                                            variant="outline"
                                            className="border-button-orange w-full cursor-pointer text-button-orange hover:bg-orange-50 mt-3"
                                        >
                                            Update Password
                                        </Button>
                                    </form>
                                </CardContent>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                    {/* Linked Payment Wallet */}
                    <Card className="gap-0 mt-5 !py-0">
                        <AccordionItem value="wallet">
                            <div className="relative">
                                <AccordionTrigger>
                                    <CardHeader>
                                        <h3 className="text-sm font-semibold text-nowrap">Linked Payment Wallet</h3>
                                    </CardHeader>
                                </AccordionTrigger>
                                <Button
                                    variant="outline"
                                    className="border-button-orange max-w-max absolute top-0 right-4 text-button-orange hover:bg-orange-50 mt-3"
                                >
                                    Update Message
                                </Button>
                            </div>
                            <AccordionContent>
                                <CardContent className="text-sm text-muted-foreground">
                                    <p>Wallet Address: 0x1234...ABCD</p>
                                    <p>Wallet Type: Binance</p>
                                    <Button variant="outline" className="mt-2 cursor-pointer w-full">
                                        Unlink Wallet
                                    </Button>
                                </CardContent>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                </Accordion>
            </div>

            {/* Right side (Profile Info) */}
            <div className="lg:col-span-1">
                <Card className="flex flex-col items-center text-center p-6 relative">
                    <span className="absolute right-3 top-3 bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                        Pro
                    </span>

                    <Image
                        src="/avatar.png"
                        alt="Reviewer Avatar"
                        width={80}
                        height={80}
                        className="rounded-full mb-4"
                    />

                    <h2 className="font-semibold text-lg">Shadowmen</h2>

                    <div className="flex gap-6 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-medium text-foreground">4.5</span>
                            <span>Average Ratings</span>
                        </div>
                        <div>
                            <span className="font-medium text-foreground">123</span>
                            <span className="ml-1">Reviews Submitted</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
