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
import { Badge } from "@/components/ui/badge";

export default function BuyerUser() {
    const [text, setText] = useState(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    );
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left side (Account Settings) */}
            <div className="xl:col-span-2 order-2 xl:order-1 space-y-4">
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
                                <Image width={28} height={28} alt="pament" className="absolute top-0 right-4 mt-3" src={'/images/svg/payment-icon.svg'} />
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

            <div className="xl:col-span-1 order-1 xl:order-2">
                <Card className="flex flex-col sm:flex-row xl:flex-col items-center text-center p-4 gap-4 relative">
                    <div className="w-full p-4 pt-0 flex flex-col gap-4">
                        <div className="flex w-full justify-end">
                            <Badge className="bg-button-orange">Pro</Badge>
                        </div>
                        <div className="sm:flex xl:hidden w-full gap-4 hidden">
                            <Image
                                src="/images/png/avtar.png"
                                alt="Reviewer Avatar"
                                width={80}
                                height={80}
                                className="rounded-full w-24 h-24"
                            />

                            <div className="flex flex-col gap-1">
                                <h2 className="font-semibold text-base md:text-lg text-left lg:text-xl">Shadowmen</h2>
                                <div className="flex gap-4 mt-3 w-full">
                                    <div className="flex flex-col justify-center items-center gap-1">
                                        <span className="flex items-center text-foreground gap-1 font-semibold text-base md:text-lg lg:text-xl">4.5
                                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        </span>
                                        <span className="font-normal  text-muted-foreground text-sm">Average Ratings</span>
                                    </div>
                                    <span className="w-[1px] bg-muted-foreground block"></span>
                                    <div className="flex flex-col justify-center items-center gap-1">
                                        <span className="text-foreground font-semibold text-base md:text-lg lg:text-xl">123</span>
                                        <span className="font-normal text-muted-foreground text-sm">Reviews Submitted</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col sm:hidden xl:flex justify-center items-center gap-1.5">
                        <Image
                            src="/images/png/avtar.png"
                            alt="Reviewer Avatar"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />

                        <h2 className="font-semibold text-base md:text-lg lg:text-xl">Shadowmen</h2>
                    </div>

                    <div className="flex gap-1 sm:hidden xl:flex justify-between mt-3 w-full">
                        <div className="flex w-[49%] flex-col justify-center items-center gap-1">
                            <span className="flex items-center text-foreground gap-1 font-semibold text-base md:text-lg lg:text-xl">4.5
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            </span>
                            <span className="font-normal  text-muted-foreground text-sm">Average Ratings</span>
                        </div>
                        <span className="w-[1px] bg-muted-foreground block"></span>
                        <div className="flex w-[49%] flex-col justify-center items-center gap-1">
                            <span className="text-foreground font-semibold text-base md:text-lg lg:text-xl">123</span>
                            <span className="font-normal text-muted-foreground text-sm">Reviews Submitted</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
