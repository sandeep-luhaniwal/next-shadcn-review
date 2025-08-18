"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

export default function FindJobs() {
    const [budget, setBudget] = useState([5, 1000]);
    const [reviews, setReviews] = useState([1, 100]);
    const [deadline, setDeadline] = useState(14);

    const jobs = [
        {
            id: 1,
            title: "1 job",
            desc: "Requirements ASIN: IUTRHGFJHG",
            author: "Denis Medvedev",
            rating: 4.8,
            price: 5,
            reviews: 10,
            slots: 9,
            deadline: 14,
            budget: 50,
        },
        {
            id: 2,
            title: "Review \"Atomic Habits\" by James Clear",
            desc: "Looking for an honest, detailed review of this popular self-help book.",
            author: "Mike Chen",
            rating: 4.2,
            price: 45,
            reviews: 3,
            slots: 3,
            deadline: 7,
            budget: 135,
        },
        {
            id: 3,
            title: "Product Review - Wireless Earbuds",
            desc: "Comprehensive review needed for new wireless earbuds.",
            author: "Mike Chen",
            rating: 4.2,
            price: 65,
            reviews: 5,
            slots: 5,
            deadline: 5,
            budget: 325,
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
            {/* Filters */}
            <aside className="w-full lg:w-72 border-r bg-white p-4 lg:block">
                <h2 className="font-semibold text-lg mb-4">Filters</h2>

                <Input placeholder="Search title or description..." className="mb-4" />

                <Label className="text-sm font-medium">Budget Range (${budget[0]} - ${budget[1]})</Label>
                <Slider
                    defaultValue={budget}
                    max={1000}
                    min={5}
                    step={5}
                    onValueChange={setBudget}
                    className="my-4 cursor-pointer"
                />

                <Label className="text-sm font-medium">Reviews Required ({reviews[0]} - {reviews[1]})</Label>
                <Slider
                    defaultValue={reviews}
                    max={100}
                    min={1}
                    step={1}
                    onValueChange={setReviews}
                    className="my-4 cursor-pointer"
                />

                <Label className="text-sm font-medium">Max Deadline: {deadline} days</Label>
                <Slider
                    defaultValue={[deadline]}
                    max={30}
                    min={1}
                    step={1}
                    onValueChange={(v) => setDeadline(v[0])}
                    className="my-4 cursor-pointer"
                />

                <Separator className="my-4" />

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label>Auto-approve Only</Label>
                        <Switch className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label>New User Friendly</Label>
                        <Switch className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label>Bulk Applications</Label>
                        <Switch className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label>Urgent Jobs Only</Label>
                        <Switch className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label>Hide High Trust Score</Label>
                        <Switch />
                    </div>
                </div>
            </aside>

            {/* Jobs */}
            <main className="flex-1 p-4 md:p-6">
                <h1 className="text-2xl font-bold mb-6">Find Jobs</h1>
                <div className="space-y-6">
                    {jobs.map((job) => (
                        <Card key={job.id} className="shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex flex-col sm:flex-row sm:justify-between">
                                    <span>{job.title}</span>
                                    <span className="text-sm text-gray-500">{job.deadline} days</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-2">{job.desc}</p>
                                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                                    <span>👤 {job.author} ({job.rating}★)</span>
                                    <span>💲 {job.price} per review</span>
                                    <span>📝 {job.reviews} reviews</span>
                                    <span>👥 {job.slots} slots left</span>
                                    <span>💰 Total Budget: ${job.budget}</span>
                                </div>
                                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                                    <Button variant="secondary" className="w-full sm:w-auto cursor-pointer">Apply for multiple slots</Button>
                                    <Button className="w-full sm:w-auto cursor-pointer">Apply for 1 slot</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}