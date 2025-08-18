"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function JobsPage() {
    // Expand/Collapse states
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
        awaiting: false,
        working: true,
        completed: false,
        rejected: false,
    });

    const toggleSection = (key: string) => {
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // Mock Data
    const workingData = [
        {
            name: "Denis Medvedev",
            rating: 4.8,
            jobs: 156,
            success: "98%",
            msg: "Greetings! As an experienced reviewer, I bring extensive expertise across multiple categories...",
            applied: "8/3/2025",
        },
    ];

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Jobs</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage your posted jobs and applicants
                    </p>
                </div>
                <Link href="/dashboard/post-a-job">
                    <Button className="bg-purple-600 cursor-pointer hover:bg-purple-700">
                        + Post New Job
                    </Button>
                </Link>
            </div>

            {/* Job Summary */}
            <div className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">1</span> to{" "}
                <span className="font-medium text-foreground">1</span> of{" "}
                <span className="font-medium text-foreground">1</span> jobs
            </div>

            {/* Job Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>1 job</span>
                        <span className="text-sm text-muted-foreground">
                            $5 per review • 1/10 slots filled • 0 completed • Created
                            8/3/2025
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Progress */}
                    <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="text-muted-foreground">10% filled • 0% done</span>
                    </div>
                    <Progress value={10} className="h-2" />

                    {/* Status Sections */}
                    <div className="space-y-4">
                        {/* Awaiting Response */}
                        <Card
                            className="border-yellow-200 bg-yellow-50 cursor-pointer transition-all duration-300 ease-in-out"
                            onClick={() => toggleSection("awaiting")}
                        >
                            <CardHeader className="flex flex-row items-center justify-between py-3">
                                <CardTitle className="flex items-center text-yellow-700 text-sm">
                                    0 People Awaiting Your Response
                                </CardTitle>
                                {openSections.awaiting ? (
                                    <ChevronDown className="w-4 h-4 text-yellow-700 transition-transform duration-300" />
                                ) : (
                                    <ChevronRight className="w-4 h-4 text-yellow-700 transition-transform duration-300" />
                                )}
                            </CardHeader>
                            {openSections.awaiting && (
                                <CardContent className="transition-all duration-300 ease-in-out">
                                    <p className="text-sm text-muted-foreground">No applicants</p>
                                </CardContent>
                            )}
                        </Card>

                        {/* Working on Reviews */}
                        <Card
                            className="border-blue-200 bg-blue-50 cursor-pointer transition-all duration-300 ease-in-out"
                            onClick={() => toggleSection("working")}
                        >
                            <CardHeader className="flex flex-row items-center justify-between py-3">
                                <CardTitle className="flex items-center text-blue-700 text-sm">
                                    {workingData.length} People Working on Reviews
                                </CardTitle>
                                {openSections.working ? (
                                    <ChevronDown className="w-4 h-4 text-blue-700 transition-transform duration-300" />
                                ) : (
                                    <ChevronRight className="w-4 h-4 text-blue-700 transition-transform duration-300" />
                                )}
                            </CardHeader>
                            {openSections.working && (
                                <CardContent className="transition-all duration-300 ease-in-out">
                                    {workingData.map((person, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-4 border rounded-lg p-3 mb-2 bg-white"
                                        >
                                            <Avatar>
                                                <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                                                <AvatarFallback>DM</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="font-medium">{person.name}</h3>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="gap-2"
                                                    >
                                                        <MessageSquare className="w-4 h-4" /> Message
                                                    </Button>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <span>⭐ {person.rating}</span>
                                                    <Separator
                                                        orientation="vertical"
                                                        className="h-4"
                                                    />
                                                    <span>{person.jobs} jobs</span>
                                                    <Separator
                                                        orientation="vertical"
                                                        className="h-4"
                                                    />
                                                    <span>{person.success} success</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {person.msg}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Applied {person.applied}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            )}
                        </Card>

                        {/* Completed Reviews */}
                        <Card
                            className="border-green-200 bg-green-50 cursor-pointer transition-all duration-300 ease-in-out"
                            onClick={() => toggleSection("completed")}
                        >
                            <CardHeader className="flex flex-row items-center justify-between py-3">
                                <CardTitle className="flex items-center text-green-700 text-sm">
                                    0 Completed Reviews
                                </CardTitle>
                                {openSections.completed ? (
                                    <ChevronDown className="w-4 h-4 text-green-700 transition-transform duration-300" />
                                ) : (
                                    <ChevronRight className="w-4 h-4 text-green-700 transition-transform duration-300" />
                                )}
                            </CardHeader>
                            {openSections.completed && (
                                <CardContent className="transition-all duration-300 ease-in-out">
                                    <p className="text-sm text-muted-foreground">
                                        No reviews yet
                                    </p>
                                </CardContent>
                            )}
                        </Card>

                        {/* Rejected Applications */}
                        <Card
                            className="border-red-200 bg-red-50 cursor-pointer transition-all duration-300 ease-in-out"
                            onClick={() => toggleSection("rejected")}
                        >
                            <CardHeader className="flex flex-row items-center justify-between py-3">
                                <CardTitle className="flex items-center text-red-700 text-sm">
                                    0 Rejected Applications
                                </CardTitle>
                                {openSections.rejected ? (
                                    <ChevronDown className="w-4 h-4 text-red-700 transition-transform duration-300" />
                                ) : (
                                    <ChevronRight className="w-4 h-4 text-red-700 transition-transform duration-300" />
                                )}
                            </CardHeader>
                            {openSections.rejected && (
                                <CardContent className="transition-all duration-300 ease-in-out">
                                    <p className="text-sm text-muted-foreground">
                                        No rejections
                                    </p>
                                </CardContent>
                            )}
                        </Card>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
