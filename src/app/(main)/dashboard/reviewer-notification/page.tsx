"use client";

import { Card, CardHeader } from "@/components/ui/card";
import {
    Button
} from "@/components/ui/button";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useMemo, useState } from "react";

const NOTIFICATION_LIST = [
    { title: "Review applicants", date: "today", heading: "You have 5 applicants for Job #JOB-210" },
    { title: "Thread", date: "today", heading: "New update in dispute for Job #JOB-175 (App Store Review Optimization)." },
    { title: "Job", date: "Yesterday", heading: "Reviews has submitted delivery for Job #JOB-198 (Laptop Review)." },
    { title: "Review applicants", date: "Yesterday", heading: "You have 125 applicants for Job #JOB-879" },
    { title: "Review applicants", date: "Yesterday", heading: "You have 125 applicants for Job #JOB-879" },
    { title: "Review applicants", date: "Yesterday", heading: "You have 125 applicants for Job #JOB-879" },
    { title: "Job", date: "2 days ago", heading: "Another sample notification." },
    { title: "Thread", date: "2 days ago", heading: "Another thread update." },
    { title: "Review applicants", date: "3 days ago", heading: "New applicants arrived for Job #JOB-450." },
    { title: "Job", date: "3 days ago", heading: "Delivery submitted for Job #JOB-333." },
];

export default function ReviewerNotification() {
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = NOTIFICATION_LIST.length;
    const totalPages = Math.ceil(totalItems / rowsPerPage);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage;
        return NOTIFICATION_LIST.slice(start, start + rowsPerPage);
    }, [currentPage, rowsPerPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-base font-semibold">
                Needs your attention ({totalItems})
            </p>

            {paginatedData.map((obj, i) => (
                <Card key={i} className="lg:py-5">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <p className="border px-2 py-1 bg-[#F5F5F5] font-medium text-xs rounded-[4px] text-muted-foreground">
                                {obj.title}
                            </p>
                            <p className="font-semibold text-sm rounded-[4px] text-muted-foreground capitalize">
                                {obj.date}
                            </p>
                        </div>
                        <p className="text-base font-semibold">{obj.heading}</p>
                    </CardHeader>
                </Card>
            ))}

            {/* Pagination Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between p-4 pb-0 text-sm text-muted-foreground border-t">
                <span>
                    Showing {(currentPage - 1) * rowsPerPage + 1} -{" "}
                    {Math.min(currentPage * rowsPerPage, totalItems)} of {totalItems}
                </span>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span>Rows per page</span>
                        <Select
                            value={String(rowsPerPage)}
                            onValueChange={(val) => {
                                setRowsPerPage(Number(val));
                                setCurrentPage(1);
                            }}
                        >
                            <SelectTrigger className="w-[75px] cursor-pointer">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="6">6</SelectItem>
                                <SelectItem value="8">8</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <div className="flex items-center gap-1">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronsLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronsRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
