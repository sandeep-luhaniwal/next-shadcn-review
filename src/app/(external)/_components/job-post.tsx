import React from "react";

import Icons from "./ui-icons";

interface JobPostItem {
    type: "Hourly" | "Fixed"; // Use a union type for specific string values
    urgent: boolean;
    title: string;
    description: string;
    slots: string;
    trust: string;
    date: string;
    total: string;
    rate: string;
    rateLabel: string;
};

const JobPost: React.FC = () => {
    const jobPosts: JobPostItem[] = [
        {
            type: "Hourly",
            urgent: true,
            title: "Review My Fantasy Novel",
            description:
                "Looking for detailed and honest reviews for my novel 'The Dragon’s Quest'. Must read full book and provide feedback.",
            slots: "3/5 Slots",
            trust: "Min 50 trust",
            date: "16/07/2025",
            total: "$125.00 total",
            rate: "$25.00",
            rateLabel: "Per review",
        },
        {
            type: "Fixed",
            urgent: false,
            title: "Test My Mobile Game",
            description:
                "Need feedback from gamers for my latest mobile RPG. Play at least 5 hours and share detailed review.",
            slots: "2/4 Slots",
            trust: "Min 40 trust",
            date: "20/07/2025",
            total: "$200.00 total",
            rate: "$50.00",
            rateLabel: "Per review",
        },
        {
            type: "Hourly",
            urgent: true,
            title: "Proofread My Short Stories",
            description:
                "Looking for sharp eyes to catch grammar errors and suggest improvements in my short stories collection.",
            slots: "1/3 Slots",
            trust: "Min 60 trust",
            date: "25/07/2025",
            total: "$90.00 total",
            rate: "$30.00",
            rateLabel: "Per review",
        },
    ];

    return (
        <div className="bg-white">
            <div className="max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20">
                <div className="grid md:grid-cols-[60%_37%] justify-between lg:grid-cols-2 gap-6 md:gap-5 lg:gap-7 items-center pb-5 md:pb-6 lg:pb-0">
                    <div>
                        <h2 className="font-medium !font-inter xl:pr-20 leading-110 py-3 lg:py-4 text-black text-3xl md:text-4xl lg:text-5xl">
                            Recent Job Post
                        </h2>
                        <p className="uppercase text-black/65 text-sm md:text-base font-normal">
                            Explore the latest review opportunities posted by verified buyers.
                        </p>
                    </div>
                    <div className="flex md:justify-end gap-4 lg:gap-5">
                        <button className="flex items-center gap-2 lg:gap-2.5 px-3 md:px-4 py-2.5 border border-black/15 text-black/65 rounded-[10px]">
                            <Icons icon={"type"} /> All Types
                        </button>
                        <button className="flex items-center gap-2 lg:gap-2.5 px-3 md:px-4 py-2.5 border border-black/15 text-black/65 rounded-[10px]">
                            <Icons icon={"newest"} /> Newest
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {jobPosts.map((job, idx) => (
                        <div
                            key={idx}
                            className="border border-black/30 rounded-[10px] p-4 lg:p-5 shadow-[0_4px_9px_0_rgba(0,0,0,0.05)]"
                        >
                            <div className="flex gap-4 lg:gap-5 mb-4 lg:mb-5">
                                <span className="px-2 py-1 border !font-inter border-black/15 text-sm rounded-[5px]">
                                    {job.type}
                                </span>
                                {job.urgent && (
                                    <span className="px-2 py-1 bg-red-500 !font-inter text-white text-sm rounded-[5px]">
                                        Urgent
                                    </span>
                                )}
                            </div>
                            <h3 className="text-base md:text-lg font-medium text-black !font-inter">{job.title}</h3>
                            <p className="text-xs text-black/65 pt-2 lg:pt-2.5">{job.description}</p>
                            <div className="grid grid-cols-2 max-w-[300px] justify-between gap-4 lg:gap-5 py-4 lg:py-5">
                                <p className="flex items-center gap-2.5 text-sm text-black !font-inter"><Icons icon={"slots"} />{" "} {job.slots}</p>
                                <p className="flex items-center gap-2.5 text-sm text-black !font-inter"><Icons icon={"star"} />{" "} {job.trust}</p>
                                <p className="flex items-center gap-2.5 text-sm text-black !font-inter"><Icons icon={"date"} />{" "} {job.date}</p>
                                <p className="flex items-center gap-2.5 text-sm text-black !font-inter"><Icons icon={"dollar"} />{" "} {job.total}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className="text-orange font-semibold text-base md:text-lg lg:text-xl leading-110">{job.rate}</p>
                                    <p className="text-orange text-xs leading-none">{job.rateLabel}</p>
                                </div>
                                <button className="px-3 lg:px-4 py-2 lg:py2.5 border border-orange text-orange rounded-[10px] hover:bg-orange text-sm md:text-base cursor-pointer hover:text-white">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobPost;