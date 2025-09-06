"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import JobPreview from "./job-preview";

export function Basicinformation() {
    const [trustScore, setTrustScore] = useState<number[]>([1.0]);
    const [autoApprove, setAutoApprove] = useState<boolean>(false);
    const [bulkApplications, setBulkApplications] = useState<boolean>(true);
    const [allowNewUsers, setAllowNewUsers] = useState<boolean>(false);
    return (
        <div className="grid font-segoeui grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7">
            <div className="flex flex-col gap-5 order-2 lg:order-1">
                <Card className="gap-4">
                    <CardHeader>
                        <CardTitle className=" font-normal">Basic Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1">
                            <Label htmlFor="title" className="text-base font-semibold">Job Title *</Label>
                            <Input id="title" className="!bg-gray-white-off" placeholder="e.g., Review my productivity book on Amazon" />
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="type" className="text-base font-semibold">Type *</Label>
                            <Select>
                                <SelectTrigger className="w-full cursor-pointer !bg-gray-white-off">
                                    <SelectValue placeholder="Select a type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="cursor-pointer" value="book">Book</SelectItem>
                                    <SelectItem className="cursor-pointer" value="product">Product</SelectItem>
                                    <SelectItem className="cursor-pointer" value="app">App</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="asin" className="text-base font-semibold">ASIN (Amazon Standard Identification Number) *</Label>
                            <Input className="!bg-gray-white-off" id="asin" placeholder="e.g., B0792HCFTG" />
                            <p className="text-xs font-normal text-muted-foreground">Find this on the product's Amazon page in the product details section</p>
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="requirements" className="text-base font-semibold">Requirements *</Label>
                            <Textarea
                                id="requirements"
                                placeholder="Please read the full product/book carefully. Write an honest, original review in your own words. Include at least 3 key points you liked or didn't like. Do not copy from other sources. Minimum 100 words. Submit only after you've completed the review fully."
                                className="h-[84px] !bg-gray-white-off resize-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="Keywords" className="text-base font-semibold">Keywords*</Label>
                            <Input id="Keywords" className="!bg-gray-white-off" placeholder="Enter product-related keywords that buyers can use to find your item on Amazon. Use words from your title or closely related search terms." />
                        </div>
                    </CardContent>
                </Card>

                {/* Budget & Reviews */}
                <Card className="gap-4">
                    <CardHeader>
                        <CardTitle className="font-normal">Budget & Reviews</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Budget per Review */}
                        <div className="space-y-1">
                            <Label htmlFor="budget" className="text-base font-semibold">
                                Budget per Review *
                            </Label>
                            <Input className="!bg-gray-white-off" id="budget" type="number" placeholder="4" />
                            <p className="text-xs font-normal text-muted-foreground">$5 - $1000 per review</p>
                        </div>

                        {/* Number of Reviews */}
                        <div className="space-y-1">
                            <Label htmlFor="reviews" className="text-base font-semibold">
                                Number of Reviews *
                            </Label>
                            <Input className="!bg-gray-white-off" id="reviews" type="number" placeholder="10" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="buyback" className="text-base font-semibold">
                                Buyback Price + Taxes ($)*
                            </Label>
                            <Input className="!bg-gray-white-off" id="buyback" type="number" placeholder="0" />
                            <p className="text-[8px] text-muted-foreground">
                                *Enter actual product cost if Reviews are required to purchase before reviewing.
                            </p>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="deadline" className="text-base font-semibold">
                                Deadline (Days) *
                            </Label>
                            <Input className="!bg-gray-white-off" id="deadline" type="number" placeholder="14" />
                        </div>
                        <div className="flex items-center sm:col-span-2 gap-2">
                            <Switch id="urgent" className="cursor-pointer" />
                            <Label
                                htmlFor="urgent"
                                className="flex items-center gap-2 text-xs font-semibold"
                            >
                                <span className="text-[14px] w-3.5">⚡</span> Mark as urgent (+20% fee)
                            </Label>

                        </div>
                    </CardContent>
                </Card>

                {/* Reviewer Requirements & Settings */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-base font-normal">Reviews Requirements & Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                        <div>
                            <Label className="text-base font-semibold">
                                Minimum Trust Score: {trustScore}
                            </Label>
                            <Slider
                                defaultValue={[1]}
                                max={5}
                                min={1}
                                step={0.5}
                                value={trustScore}
                                onValueChange={setTrustScore}
                                className="mt-2 bg-secondary"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>1.0</span>
                                <span>5.0</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                                Higher trust scores mean more experienced Reviewers but may reduce
                                applications
                            </p>
                        </div>

                        {/* Auto approve */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                                <Switch checked={autoApprove} onCheckedChange={setAutoApprove} />
                                <Label className="text-xs font-semibold">
                                    Auto-approve applications
                                </Label>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                When enabled, Reviewers meeting your trust score requirement will
                                be automatically approved
                            </p>
                        </div>

                        {/* Bulk applications */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                                <Switch
                                    checked={bulkApplications}
                                    onCheckedChange={setBulkApplications}
                                />
                                <Label className="text-xs font-semibold">
                                    Allow bulk applications
                                </Label>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                When enabled, a single Reviewer can apply for multiple review
                                slots in one application
                            </p>
                        </div>
                        {/* New users */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                                <Switch
                                    checked={allowNewUsers}
                                    onCheckedChange={setAllowNewUsers}
                                />
                                <Label className="text-xs font-semibold">
                                    Allow new users to apply
                                </Label>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                When enabled, users without an established trust score can apply
                                for this job
                            </p>
                        </div>
                        {/* Note */}
                        <div className="p-3 border border-[#FFF085] rounded-md bg-[#FEFCE8] align-middle text-[12.3px] text-[#894B00]">
                            <span className="font-bold text-[#894B00]">Note:</span> This job
                            will only be visible to users with an established trust score. New
                            users will not be able to see or apply for this position.
                        </div>
                    </CardContent>
                </Card>

                {/* Footer Button */}
                <div className="flex justify-end">
                    <Button size="lg" className="bg-button-orange w-full font-semibold cursor-pointer hover:opacity-60px-8">
                        + Post Job
                    </Button>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <JobPreview />
            </div>
        </div>
    );
}
