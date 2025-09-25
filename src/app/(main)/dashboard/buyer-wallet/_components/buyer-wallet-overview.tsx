"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BanknoteIcon, Briefcase, Download, LucideWallet, PlusCircle, Shield, Users, Wallet, Wallet2, WalletMinimal } from "lucide-react"
import Icons from "./ui-icons"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const BuyerWalletOverView = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-5 gap-5">
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

            <Card className="shadow-sm gap-0 sm:col-span-2">
                <CardHeader>
                    <p className="text-muted-foreground text-sm font-medium">Quick Links</p>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col sm:flex-row gap-2 pt-1">
                        <div className="flex cursor-pointer flex-col bg-button-orange/20 p-3 rounded-lg flex-1">
                            <div className="w-7 h-7 flex justify-center items-center bg-orange rounded-[8px]">
                                <Download className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm pt-1 font-semibold text-foreground"> Download Statements</span>
                        </div>
                        <div className="flex cursor-pointer flex-col bg-button-orange/20 p-3 rounded-lg flex-1">
                            <div className="w-7 h-7 flex justify-center items-center bg-orange rounded-[8px]">
                                <LucideWallet className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm pt-1 font-semibold text-foreground">Withdraw Funds</span>
                        </div>
                        <div className="flex cursor-pointer flex-col bg-button-orange/20 p-3 rounded-lg flex-1">
                            <div className="w-7 h-7 flex justify-center items-center bg-orange rounded-[8px]">
                                <Icons icon="walletplus" />
                            </div>
                            <span className="text-sm pt-1 font-semibold text-foreground">Top Up Account</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default BuyerWalletOverView
