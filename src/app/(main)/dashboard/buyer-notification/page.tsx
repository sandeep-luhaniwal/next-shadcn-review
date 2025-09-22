"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const NOTIFICATION_LIST = [
    { title: "Fix Needed", date: "today", heading: "You have 5 applicants for Job #JOB-210" },
    { title: "Fix Needed", date: "today", heading: "You have 4 applicants for Job #JOB-210" },
    { title: "Thread", date: "today", heading: "New update in dispute for Job #JOB-175" },
    { title: "Job", date: "Yesterday", heading: "Reviews submitted for Job #JOB-198" },
    { title: "Fix Needed", date: "Yesterday", heading: "You have 5 applicants for Job #JOB-110" },
    { title: "Fix Needed", date: "Yesterday", heading: "You have 4 applicants for Job #JOB-210" },
    { title: "Thread", date: "today", heading: "New update in dispute for Job #JOB-175" },
    { title: "Job", date: "Yesterday", heading: "Reviews submitted for Job #JOB-198" },
];

// Convert notification into URL-friendly slug
const createSlug = (notif: { title: string; date: string; heading: string }) => {
    return `${notif.title}-${notif.date}-${notif.heading}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric chars with "-"
        .replace(/(^-|-$)/g, "");    // trim leading/trailing "-"
};

export default function BuyerNotification() {
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();

    const totalItems = NOTIFICATION_LIST.length;
    const totalPages = Math.ceil(totalItems / rowsPerPage);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage;
        return NOTIFICATION_LIST.slice(start, start + rowsPerPage);
    }, [currentPage, rowsPerPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const handleNotificationClick = (notif: { title: string; date: string; heading: string }) => {
        const slug = createSlug(notif);
        router.push(`/dashboard/reviewer-disputed-job-details/${slug}`);
    };
    const handleFirst = () => setCurrentPage(1);
    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const handleLast = () => setCurrentPage(totalPages);


    return (
        <div className="flex flex-col gap-4 md:gap-6 mb-44 md:mb-16">
            <p className="text-base font-semibold">Needs your attention ({totalItems})</p>

            {paginatedData.map((notif, i) => (
                <Card key={i} className="lg:py-5">
                    <CardHeader
                        className={notif.title === "Fix Needed" ? "cursor-pointer" : ""}
                        onClick={() => handleNotificationClick(notif)}
                    >
                        <div className="flex justify-between items-center">
                            <p className="border px-2 py-1 bg-[#F5F5F5] font-medium text-xs rounded-[4px] text-muted-foreground">
                                {notif.title}
                            </p>
                            <p className="font-semibold text-sm rounded-[4px] text-muted-foreground capitalize">
                                {notif.date}
                            </p>
                        </div>
                        <p className="text-base font-semibold">{notif.heading}</p>
                    </CardHeader>
                </Card>
            ))}

            {/* Pagination */}
            <div className="bottom-0 w-full pb-4 left-0 absolute">
                <div className="flex flex-col md:flex-row items-center justify-between p-4 pb-0 text-sm text-muted-foreground border-t">
                    <span>
                        Showing {(currentPage - 1) * rowsPerPage + 1} - {Math.min(currentPage * rowsPerPage, totalItems)} of {totalItems}
                    </span>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span>Rows per page</span>
                            <Select value={String(rowsPerPage)} onValueChange={(val) => { setRowsPerPage(Number(val)); setCurrentPage(1); }}>
                                <SelectTrigger className="w-[75px] cursor-pointer"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="cursor-pointer" value="4">4</SelectItem>
                                    <SelectItem className="cursor-pointer" value="6">6</SelectItem>
                                    <SelectItem className="cursor-pointer" value="8">8</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <span>Page {currentPage} of {totalPages}</span>

                        <div className="flex items-center gap-1">
                            <Button
                                className="cursor-pointer"
                                variant="outline"
                                size="icon"
                                onClick={handleFirst}
                                disabled={currentPage === 1}
                            >
                                <ChevronsLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                className="cursor-pointer"
                                variant="outline"
                                size="icon"
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                className="cursor-pointer"
                                variant="outline"
                                size="icon"
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                            <Button
                                className="cursor-pointer"
                                variant="outline"
                                size="icon"
                                onClick={handleLast}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronsRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
