"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function Basicinformation() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7">
            <div className="flex flex-col gap-5">
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Job Title *</Label>
                            <Input id="title" placeholder="e.g., Review my productivity book on Amazon" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="type">Type *</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="book">Book</SelectItem>
                                    <SelectItem value="product">Product</SelectItem>
                                    <SelectItem value="app">App</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="asin">ASIN (Amazon Standard Identification Number) *</Label>
                            <Input id="asin" placeholder="e.g., B0792HCFTG" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="requirements">Requirements *</Label>
                            <Textarea
                                id="requirements"
                                placeholder="Please read the full product/book carefully. With an honest, original review in your own words..."
                                className="h-24"
                            />
                        </div>
                    </CardContent>
                    <CardFooter />
                </Card>

                {/* Budget & Reviews */}
                <Card>
                    <CardHeader>
                        <CardTitle>Budget & Reviews</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="budget">Budget per Review *</Label>
                            <Input id="budget" placeholder="$5 - $100 per review" type="number" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="reviews">Number of Reviews *</Label>
                            <Input id="reviews" type="number" placeholder="10" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="deadline">Deadline (Days) *</Label>
                            <Input id="deadline" type="number" placeholder="14" />
                        </div>
                    </CardContent>
                </Card>

                {/* Reviewer Requirements & Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>Reviewer Requirements & Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Minimum Trust Score</Label>
                            <Input type="number" placeholder="1.0" />
                        </div>

                        <div className="flex items-center gap-2">
                            <Input id="auto-approve" type="checkbox" className="w-4 h-4" />
                            <Label htmlFor="auto-approve">Auto-approve applications</Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <Input id="bulk" type="checkbox" className="w-4 h-4" />
                            <Label htmlFor="bulk">Allow bulk applications</Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <Input id="new-users" type="checkbox" className="w-4 h-4" />
                            <Label htmlFor="new-users">Allow new users to apply</Label>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer Button */}
                <div className="flex justify-end">
                    <Button size="lg" className="bg-purple-600 w-full cursor-pointer hover:bg-purple-700 text-white px-8">
                        Post Job
                    </Button>
                </div>
            </div>
            <div className="">
                dshdfs
            </div>
        </div>
    );
}
