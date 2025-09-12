"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Activity,
    ChevronLeft,
    ChevronRight,
    CircleAlert,
    CircleCheckBig,
    CircleX,
    Clock3,
    EllipsisVertical,
    ShieldAlert,
    ShieldX,
    ThumbsDown,
    ThumbsUp
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ManageJobDisputeRaise from "./manage-job-dispute-rasie";
import ImageSHowFull from "./image-show-full";
import AllRatingData from "./all-reating-data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Type for each job
type Job = {
    id: number;
    name: string;
    rating: number;
    jobs: number;
    success: string;
    applied: string;
    message: string;
    image: string;
};

// Type for all job sections
type JobSections = {
    open: Job[];
    active: Job[];
    submitted: Job[];
    dispute: Job[];
    complete: Job[];
};

const ManageAccordion = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [filesByJob, setFilesByJob] = useState<Record<number, File[]>>({});
    const [messagesByJob, setMessagesByJob] = useState<Record<number, string>>({});
    const pageSize = 5;

    const [ratingDialogOpen, setRatingDialogOpen] = useState(false);
    const [selectedJobForRating, setSelectedJobForRating] = useState<Job | null>(null);
    // Added more data to "open" section to demonstrate pagination
    const data: JobSections = {
        open: [
            {
                id: 1,
                image: '/images/png/people-img.png',
                name: "Sarah Johnson",
                rating: 4.5,
                jobs: 23,
                success: "95%",
                applied: "8/27/2025",
                message:
                    "Hi! I'm a professional reviewer with experience in providing thorough, constructive feedback. I would be happy to work on your project and deliver a comprehensive review within your timeline.",
            },
            {
                id: 2,
                image: '/images/png/people-img.png',
                name: "Alex Carter",
                rating: 4.7,
                jobs: 15,
                success: "90%",
                applied: "8/28/2025",
                message:
                    "I’d love to work on this project and provide detailed insights on your book.",
            },
            {
                id: 101,
                image: '/images/png/people-img.png',
                name: "David Miller",
                rating: 4.6,
                jobs: 33,
                success: "96%",
                applied: "9/02/2025",
                message:
                    "Looking forward to the opportunity to collaborate on your book review.",
            },
            {
                id: 102,
                image: '/images/png/people-img.png',
                name: "Jessica Chen",
                rating: 4.9,
                jobs: 50,
                success: "99%",
                applied: "9/03/2025",
                message:
                    "My expertise in your book's genre makes me a great fit for this project.",
            },
            {
                id: 103,
                image: '/images/png/people-img.png',
                name: "Brian Rodriguez",
                rating: 4.4,
                jobs: 18,
                success: "89%",
                applied: "9/04/2025",
                message:
                    "I can provide a detailed and honest review. Ready to start immediately.",
            },
            {
                id: 104,
                image: '/images/png/people-img.png',
                name: "Laura Wilson",
                rating: 4.8,
                jobs: 28,
                success: "97%",
                applied: "9/05/2025",
                message:
                    "Excited about this project. I have a keen eye for detail and storytelling.",
            },
        ],
        active: [
            {
                id: 3,
                image: '/images/png/people-img.png',
                name: "Emily Davis",
                rating: 4.9,
                jobs: 40,
                success: "99%",
                applied: "8/29/2025",
                message:
                    "Experienced reviewer ready to deliver constructive feedback quickly.",
            },
            {
                id: 4,
                image: '/images/png/people-img.png',
                name: "Michael Lee",
                rating: 4.2,
                jobs: 12,
                success: "85%",
                applied: "9/1/2025",
                message: "Currently working on your project.",
            },
        ],
        submitted: [
            {
                id: 5,
                image: '/images/png/people-img.png',
                name: "John Doe",
                rating: 4.8,
                jobs: 30,
                success: "98%",
                applied: "8/30/2025",
                message: "Submitted work, waiting for your approval.",
            },
        ],
        dispute: [
            {
                id: 7,
                image: '/images/png/people-img.png',
                name: "John Doe",
                rating: 4.8,
                jobs: 30,
                success: "98%",
                applied: "8/30/2025",
                message: "Submitted work, waiting for your approval.",
            },
            {
                id: 8,
                image: '/images/png/people-img.png',
                name: "John Hai Doe",
                rating: 4.8,
                jobs: 30,
                success: "98%",
                applied: "8/30/2025",
                message: "Submitted xdsfkjlhdfsjl work, waiting for your approval.",
            },
        ],
        complete: [
            {
                id: 6,
                image: '/images/png/people-img.png',
                name: "Chris Brown",
                rating: 4.3,
                jobs: 18,
                success: "88%",
                applied: "8/15/2025",
                message: "This job is complete.",
            },
        ],
    };

    // index state per section (stores the current page index)
    const [indices, setIndices] = useState<Record<string, number>>({
        open: 0,
        active: 0,
        submitted: 0,
        dispute: 0,
        complete: 0,
    });

    const handlePrev = (section: keyof JobSections) => {
        setIndices((prev) => ({
            ...prev,
            [section]: prev[section] > 0 ? prev[section] - 1 : Math.ceil(data[section].length / pageSize) - 1,
        }));
    };

    const handleNext = (section: keyof JobSections) => {
        setIndices((prev) => ({
            ...prev,
            [section]: prev[section] < Math.ceil(data[section].length / pageSize) - 1 ? prev[section] + 1 : 0,
        }));
    };

    const renderCardContent = (item: Job, section: keyof JobSections) => {
        return (
            <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Image width={36} height={36} alt="user" src={item.image} className="w-9 h-9 rounded-full border-[2px] border-button-orange" />
                <div className="w-full">
                    <div className="flex justify-between gap-2 w-full">
                        <p className="font-semibold font-segoeui text-sm">{item.name}</p>
                        <div className="flex flex-col justify-end items-end gap-1">
                            {section === "submitted" && (
                                <p className="text-xs text-muted-foreground mt-1">
                                    Applied {item.applied}
                                </p>
                            )}
                            {section !== "complete" && (
                                <div className="hover:bg-ring p-1 px-1.5 flex justify-center items-center cursor-pointer transition-all duration-300 rounded-md">
                                    <EllipsisVertical className="w-4 h-4" />
                                </div>)}
                        </div>
                    </div>
                    <p className="text-xs font-normal flex flex-wrap gap-x-4 gap-y-3 text-muted-foreground">
                        <span className="cursor-pointer"
                            onClick={() => {
                                setSelectedJobForRating(item);
                                setRatingDialogOpen(true);
                            }}>⭐ {item.rating} </span>
                        <span>{item.jobs} jobs </span>
                        <span>{item.success} success</span>
                    </p>
                    <p className="my-2 text-xs font-medium">{item.message}</p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-end justify-between w-full">
                        {section === "open" && (
                            <p className="text-xs text-muted-foreground mt-1">
                                Applied {item.applied}
                            </p>
                        )}
                        {(section === "submitted" || section === "dispute") && (
                            <ImageSHowFull />
                        )}
                        {section === "open" && (
                            <div className="flex gap-2">
                                <Button size="sm" className="bg-button-orange cursor-pointer" variant="default">
                                    <ThumbsUp className="h-4 w-4 mr-1" /> Accept
                                </Button>
                                <Button size="sm" className="border border-button-orange bg-button-orange/10 text-button-orange cursor-pointer hover:text-black" variant="destructive">
                                    <ThumbsDown className="h-4 w-4 mr-1" /> Decline
                                </Button>
                            </div>
                        )}
                        {section === "submitted" && (
                            <div className="flex flex-col lg:flex-row gap-2">
                                <div className="grid grid-cols-2 gap-2">
                                    <Button size="sm" className="bg-button-orange cursor-pointer" variant="default">
                                        <ThumbsUp className="h-4 w-4 mr-1" /> Accept
                                    </Button>
                                    <Button size="sm" className="border border-button-orange bg-button-orange/10 text-button-orange cursor-pointer hover:text-black" variant="destructive">
                                        <CircleAlert className="h-4 w-4 mr-1" /> Fix Needed
                                    </Button>
                                </div>
                                <Button size="sm"
                                    onClick={() => {
                                        setSelectedJob(item);
                                        setOpenDialog(true);
                                    }}
                                    className="border bg-button-orange/10 text-muted-foreground cursor-pointer hover:text-black" variant="destructive">
                                    <ShieldAlert className="h-4 w-4 mr-1" /> Raise Disputes
                                </Button>
                            </div>
                        )}
                        {section === "dispute" && (
                            <div className="flex gap-2">
                                <Button size="sm" className="bg-button-orange cursor-pointer" variant="default">
                                    Dispute In Progress...
                                </Button>
                            </div>
                        )}
                    </div>
                </div>



            </div>

        );
    };

    const sectionLabels: Record<
        keyof JobSections,
        (count: number) => { title: string; color: string; desc?: string; icon: JSX.Element }
    > = {
        open: (count) => ({
            title: `Open (${count})`,
            color: "bg-[#FEFCE8]",
            desc: "Job posted, reviewers can apply (waiting for acceptance).",
            icon: <Clock3 className="h-3 w-3 md:h-4 md:w-4 text-[#D08700]" />,
        }),
        active: (count) => ({
            title: `Active (${count})`,
            color: "bg-[#EFF6FF]",
            desc: "Jobs that are currently in progress.",
            icon: <Activity className="h-3 w-3 md:h-4 md:w-4 text-[#155DFC]" />,
        }),
        submitted: (count) => ({
            title: `Submitted (${count})`,
            color: "bg-[#F0FDF4]",
            desc: "Jobs submitted by reviewers, waiting for approval.",
            icon: <CircleCheckBig className="h-3 w-3 md:h-4 md:w-4 text-[#00A63E]" />,
        }),
        dispute: (count) => ({
            title: `Dispute (${count})`,
            color: "bg-[#FEF2F2]",
            desc: "Jobs with disputes in progress.",
            icon: <CircleX className="h-3 w-3 md:h-4 md:w-4 text-[#E7000B]" />,
        }),
        complete: (count) => ({
            title: `Complete (${count})`,
            color: "bg-[#F8F2FE]",
            desc: "Jobs that are finished or complete.",
            icon: <ShieldX className="h-3 w-3 md:h-4 md:w-4 text-[#6B00D7]" />,
        }),
    };

    const renderSection = (section: keyof JobSections) => {
        const items = data[section];
        const currentIndex = indices[section];
        const totalPages = Math.ceil(items.length / pageSize);
        const paginatedItems = items.slice(currentIndex * pageSize, (currentIndex + 1) * pageSize);

        const { title, desc, icon, color } = sectionLabels[section](items.length);

        return (
            <AccordionItem value={section} className="border-none mt-3 rounded-[10px] overflow-clip">
                <div className="flex items-center w-full justify-between">
                    <div className={`${color} dark:bg-black ps-4 w-full py-2`}>
                        <AccordionTrigger className={`flex w-full items-center justify-between group`}>
                            <div className="flex gap-2 md:items-center">
                                <div className="flex gap-2 md:gap-3">
                                    <ChevronRight
                                        className="h-3 w-3 md:h-4 md:w-4 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90"
                                    />
                                    <span className="font-semibold text-xs md:text-sm text-nowrap flex gap-2">
                                        {icon}
                                        {title}
                                    </span>
                                </div>
                                {desc && (
                                    <span className="text-xs">{desc}</span>
                                )}
                            </div>
                        </AccordionTrigger>
                    </div>
                </div>

                <AccordionContent className="!pb-0 px-4 pt-4">
                    {paginatedItems.length === 0 ? (
                        <p className="text-muted-foreground text-center py-4">Not Found</p>
                    ) : (
                        paginatedItems.map((item) => (
                            <Card key={item.id} className="mb-2 last:mb-0 !p-0">
                                <CardContent className="p-4">
                                    {renderCardContent(item, section)}
                                </CardContent>
                            </Card>
                        ))
                    )}
                    {totalPages > 1 && (
                        <div className="flex w-full pt-4 max-w-max justify-end ms-auto items-center gap-2">
                            <p className="text-sm font-medium">
                                Page {currentIndex + 1} of {totalPages}
                            </p>
                            <Button
                                className="cursor-pointer"
                                size="icon"
                                variant="outline"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev(section);
                                }}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                className="cursor-pointer"
                                size="icon"
                                variant="outline"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext(section);
                                }}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    )}
                </AccordionContent>
            </AccordionItem>
        );
    };

    return (
        <>
            <Accordion type="single" collapsible className="w-full">
                {renderSection("open")}
                {renderSection("active")}
                {renderSection("submitted")}
                {renderSection("dispute")}
                {renderSection("complete")}
            </Accordion>
            <AllRatingData
                job={selectedJobForRating}
                open={ratingDialogOpen}
                onOpenChange={setRatingDialogOpen}
            />
            {/* ManageJobDisputeRaise Dialog */}
            <ManageJobDisputeRaise
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                job={selectedJob}
                selectedFiles={selectedJob ? filesByJob[selectedJob.id] || [] : []}
                onFileChange={(files) =>
                    selectedJob && setFilesByJob((prev) => ({ ...prev, [selectedJob.id]: files }))
                }
                coverMessage={selectedJob ? messagesByJob[selectedJob.id] || "" : ""}
                onMessageChange={(msg) =>
                    selectedJob && setMessagesByJob((prev) => ({ ...prev, [selectedJob.id]: msg }))
                }
            />
        </>
    );
};

export default ManageAccordion;