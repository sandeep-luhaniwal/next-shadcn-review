"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BanknoteIcon, Download, LucideWallet, PlusCircle, Wallet, Wallet2, WalletMinimal } from "lucide-react"
import Icons from "./ui-icons"
import { Card, CardHeader } from "@/components/ui/card"

const BuyerWalletOverView = () => {
    return (
        <div>
            <p className="font-semibold text-base mb-4">Wallet Overview</p>

            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-3 md:items-center">
                <Tabs defaultValue="overview" className="w-full order-2 md:order-1">
                    {/* Tab Buttons */}
                    <TabsList className="bg-orange/10 rounded-lg p-1 w-fit">
                        <TabsTrigger
                            value="overview"
                            className="data-[state=active]:bg-orange leading-160 data-[state=active]:text-white
                       data-[state=active]:hover:bg-orange-600 rounded-md p-2 h-[30px] font-medium text-sm
                       cursor-pointer"
                        >
                            Overview
                        </TabsTrigger>

                        <TabsTrigger
                            value="payouts"
                            className="data-[state=active]:bg-orange leading-160 data-[state=active]:text-white
                       data-[state=active]:hover:bg-orange-600 rounded-md p-2 h-[30px] font-medium text-sm
                       cursor-pointer"
                        >
                            Payouts
                        </TabsTrigger>
                    </TabsList>

                    {/* <TabsContent value="overview" className="mt-4">
                    <div className="p-4 border rounded-lg">
                        <p className="text-sm">💳 This is the Wallet Overview section.</p>
                    </div>
                </TabsContent> */}

                </Tabs>
                <div className="flex gap-2.5 order-1 md:order-2 max-w-max max-md:overflow-x-auto">
                    <Button className="px-3 py-2 shadow-none bg-orange/10 text-foreground hover:bg-button-orange cursor-pointer font-medium text-sm leading-160 flex gap-0.5 items-center hover:text-background">
                        <Download />
                        <span>
                            Download Statements
                        </span>
                    </Button>
                    <Button className="px-3 py-2 shadow-none bg-orange/10 hover:bg-foreground hover:text-background cursor-pointer font-medium text-sm leading-160 flex gap-0.5 items-center border border-button-orange hover:border-transparent text-button-orange">
                        <LucideWallet />
                        <span>
                            Withdraw Funds
                        </span>
                    </Button>
                    <Button className="px-3 py-2 shadow-none bg-button-orange cursor-pointer font-medium text-sm leading-160 flex gap-0.5 items-center">
                        <span>
                            <Icons icon="walletplus" />
                        </span>
                        <span>
                            Top Up Account
                        </span>
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-5 gap-5">
                <Card>
                    <CardHeader>
                        <p className="text-muted-foreground text-sm font-medium">Available</p>
                        <p className="pt-1 text-xl md:text-2xl lg:text-3xl font-semibold">$500.50</p>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <p className="text-muted-foreground text-sm font-medium">Blocked</p>
                        <p className="pt-1 text-xl md:text-2xl lg:text-3xl font-semibold">$350</p>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}

export default BuyerWalletOverView
