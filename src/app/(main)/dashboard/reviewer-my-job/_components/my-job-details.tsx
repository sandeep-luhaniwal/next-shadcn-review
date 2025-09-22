"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react"
import { useMemo, useState } from "react"
import Icons from "../../buyer-disputes/_components/ui-icons"
import MyJobDisputeRaise from "./my-job-dispute-raise"
import MyJobSubmittedWork from "./my-job-submitted-work"
import MyJobLeaveFeedBack from "./my-job-leave-feedback"
import { Badge } from "@/components/ui/badge"

const jobs = [
    {
        id: 1,
        title: `Review "Atomic Habits" by James Clear`,
        desc: "Requirements ASIN: IUTRHGFJHG",
        author: "Mike Chen",
        rating: 4.2,
        price: 45,
        reviews: 35,
        slots: 3,
        deadline: 7,
        budget: 135,
        productPrice: 20,
        status: "InProgress",
    },
    {
        id: 2,
        title: "Product Review – Wireless Earbuds",
        desc: "Comprehensive review needed for new wireless earbuds.",
        author: "Mike Chen",
        rating: 4.2,
        price: 45,
        reviews: 102,
        slots: 25,
        deadline: 7,
        budget: 135,
        status: "InRevision",
    },
    {
        id: 3,
        title: "E-learning Course Feedback",
        desc: "Need detailed feedback on my new online course.",
        author: "Sarah Lee",
        rating: 4.8,
        price: 60,
        reviews: 50,
        slots: 10,
        deadline: 10,
        budget: 600,
        status: "Disputed",
    },
    {
        id: 4,
        title: "E-learning Course Feedback",
        desc: "Need detailed feedback on my new online course.",
        author: "Sarah Lee",
        rating: 4.8,
        price: 60,
        reviews: 50,
        slots: 10,
        deadline: 10,
        budget: 600,
        status: "Applied",
    },
    {
        id: 5,
        title: "E-learning Course Feedback",
        desc: "Need detailed feedback on my new online course.",
        author: "Sarah Lee",
        rating: 4.8,
        price: 60,
        reviews: 50,
        slots: 10,
        deadline: 10,
        budget: 600,
        status: "Completed",
    },
]

interface MyJobDetailsProps {
    searchTerm: string
    currentPage: number
    setCurrentPage: (page: number) => void
    status: string
}

type Job = {
    id: number
    title: string
    price: number
    deadline: number
    slots: number
}

const MyJobDetails: React.FC<MyJobDetailsProps> = ({
    searchTerm,
    currentPage,
    setCurrentPage,
    status,
}) => {
    const [rowsPerPage, setRowsPerPage] = useState(4)

    // Separate states for dialogs
    const [openDisputeDialog, setOpenDisputeDialog] = useState(false)
    const [openSubmitDialog, setOpenSubmitDialog] = useState(false)
    const [openLeaveFeedback, setOpenLeaveFeedback] = useState(false)

    const [selectedDisputeJob, setSelectedDisputeJob] = useState<Job | null>(null)
    const [selectedSubmitJob, setSelectedSubmitJob] = useState<Job | null>(null)
    const [selectedSubmitFeedback, setSelectedSubmitFeedback] = useState<Job | null>(null)

    const [filesByDispute, setFilesByDispute] = useState<{ [key: number]: File[] }>(
        {}
    )
    const [filesBySubmit, setFilesBySubmit] = useState<{ [key: number]: File[] }>({})

    const [messagesByDispute, setMessagesByDispute] = useState<{ [key: number]: string }>(
        {}
    )
    const [messagesBySubmit, setMessagesBySubmit] = useState<{ [key: number]: string }>(
        {}
    )

    const handleDispute = (job: Job) => {
        setSelectedDisputeJob(job)
        setOpenDisputeDialog(true)
    }

    const handleSubmitWork = (job: Job) => {
        setSelectedSubmitJob(job)
        setOpenSubmitDialog(true)
    }
    const handleLeaveFeedBack = (job: Job) => {
        setSelectedSubmitFeedback(job)
        setOpenLeaveFeedback(true)
    }

    const filteredJobs = useMemo(() => {
        return jobs.filter((job) => {
            const matchesSearch =
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.desc.toLowerCase().includes(searchTerm.toLowerCase())

            const matchesStatus =
                status === "All" ? true : job.status === status

            return matchesSearch && matchesStatus
        })
    }, [searchTerm, status])

    const indexOfLastJob = currentPage * rowsPerPage
    const indexOfFirstJob = indexOfLastJob - rowsPerPage
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
    const totalPages = Math.ceil(filteredJobs.length / rowsPerPage)

    const handleFileChangeDispute = (jobId: number, files: File[]) => {
        setFilesByDispute((prev) => ({ ...prev, [jobId]: files }))
    }
    const handleFileChangeSubmit = (jobId: number, files: File[]) => {
        setFilesBySubmit((prev) => ({ ...prev, [jobId]: files }))
    }

    const handleMessageChangeDispute = (jobId: number, message: string) => {
        setMessagesByDispute((prev) => ({ ...prev, [jobId]: message }))
    }
    const handleMessageChangeSubmit = (jobId: number, message: string) => {
        setMessagesBySubmit((prev) => ({ ...prev, [jobId]: message }))
    }

    const handleFirst = () => setCurrentPage(1)
    const handleLast = () => setCurrentPage(totalPages)
    const handleNext = () =>
        currentPage < totalPages && setCurrentPage(currentPage + 1)
    const handlePrev = () =>
        currentPage > 1 && setCurrentPage(currentPage - 1)

    return (
        <main className="flex-1 p-4 xl:p-6 xl:pt-4 w-full lg:w-2/3 xl:w-[73%]">
            <div className="flex items-center gap-5 pt-8 pb-4 lg:pt-0">
                <h1 className="text-xl md:text-2xl font-bold">My Jobs</h1>
            </div>

            <div className="space-y-6">
                {currentJobs.length > 0 ? (
                    currentJobs.map((job) => (
                        <Card key={job.id} className="shadow-sm gap-0">
                            <CardHeader className="gap-0">
                                <CardTitle className="flex flex-col xl:flex-row xl:justify-between gap-2 xl:items-center">
                                    <span className="text-sm order-2 xl:order-1 font-semibold">
                                        {job.title}
                                    </span>
                                    <div className="flex justify-between gap-2 order-1 xl:order-2 xl:justify-end">
                                        <span className="border text-nowrap font-medium text-muted-foreground text-xs py-[3px] capitalize max-w-max items-center flex gap-1 px-2 rounded-[8px]">
                                            <Icons icon={`${job.status === "InProgress" ? "pending" : job.status === "Disputed" ? "disputed" : job.status === "Applied" ? "done" : job.status === "InRevision" ? "chagnereduest" : "resolved"}`} />
                                            {job.status.replace(/([A-Z])/g, " $1")}
                                        </span>
                                        <span className="text-sm text-ring text-nowrap">
                                            {job.deadline} days
                                        </span>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="py-6 flex flex-col gap-2">
                                    <p className="text-sm font-normal text-foreground/80">
                                        {job.desc}
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-muted-foreground">
                                            {job.author && (
                                                <span>
                                                    👤 {job.author} ({job.rating}★)
                                                </span>
                                            )}
                                            {job.price && <span>💲 {job.price}/review</span>}
                                            {job.reviews && <span>📝 {job.reviews} reviews</span>}
                                            {job.slots && <span>👥 {job.slots} slots left</span>}
                                            {job.budget && <span>💰 Total Budget: ${job.budget}</span>}
                                            {job.productPrice && (
                                                <span>📦 Product Price: ${job.productPrice}</span>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                                            <Badge className="bg-button-orange/20 text-foreground">Book</Badge>
                                            <Badge className="bg-button-orange/20 text-foreground">Book</Badge>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 sm:justify-between">
                                    <div className="grid grid-cols-2 sm:flex items-center gap-2">
                                        <Button
                                            variant="secondary"
                                            className="sm:w-auto lg:px-3 xl:px-4 bg-orange/10 cursor-pointer"
                                            onClick={() => handleLeaveFeedBack(job)}
                                        >
                                            Leave Feedback
                                        </Button>
                                        <Button
                                            className="sm:w-auto lg:px-3 xl:px-4 bg-button-orange cursor-pointer"
                                            onClick={() => handleSubmitWork(job)}
                                        >
                                            Submit Work
                                        </Button>
                                    </div>

                                    <Button
                                        variant="secondary"
                                        className="w-full lg:px-3 xl:px-4 bg-orange/10 sm:w-auto cursor-pointer"
                                        onClick={() => handleDispute(job)}
                                    >
                                        Raise a Dispute
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
                        <Icons icon="empty" className="h-10 w-10 mb-3 opacity-70" />
                        <p className="text-lg font-medium">No jobs found</p>
                        <p className="text-sm">Try adjusting your filters or search</p>
                    </div>
                )}
            </div>
            <MyJobLeaveFeedBack
                open={openLeaveFeedback}
                onClose={() => {
                    setOpenLeaveFeedback(false)
                    setSelectedSubmitFeedback(null)
                }}
                job={selectedSubmitFeedback}
                selectedFiles={
                    selectedSubmitFeedback
                        ? filesBySubmit[selectedSubmitFeedback.id] || []
                        : []
                }
                onFileChange={(files) =>
                    selectedSubmitFeedback &&
                    handleFileChangeSubmit(selectedSubmitFeedback.id, files)
                }
                coverMessage={
                    selectedSubmitFeedback
                        ? messagesBySubmit[selectedSubmitFeedback.id] || ""
                        : ""
                }
                onMessageChange={(msg) =>
                    selectedSubmitFeedback &&
                    handleMessageChangeSubmit(selectedSubmitFeedback.id, msg)
                }
            />
            {/* Dispute Dialog */}
            <MyJobDisputeRaise
                open={openDisputeDialog}
                onClose={() => {
                    setOpenDisputeDialog(false)
                    setSelectedDisputeJob(null)
                }}
                job={selectedDisputeJob}
                selectedFiles={
                    selectedDisputeJob
                        ? filesByDispute[selectedDisputeJob.id] || []
                        : []
                }
                onFileChange={(files) =>
                    selectedDisputeJob && handleFileChangeDispute(selectedDisputeJob.id, files)
                }
                coverMessage={
                    selectedDisputeJob
                        ? messagesByDispute[selectedDisputeJob.id] || ""
                        : ""
                }
                onMessageChange={(msg) =>
                    selectedDisputeJob &&
                    handleMessageChangeDispute(selectedDisputeJob.id, msg)
                }
            />

            {/* Submit Work Dialog */}
            <MyJobSubmittedWork
                open={openSubmitDialog}
                onClose={() => {
                    setOpenSubmitDialog(false)
                    setSelectedSubmitJob(null)
                }}
                job={selectedSubmitJob}
                selectedFiles={
                    selectedSubmitJob
                        ? filesBySubmit[selectedSubmitJob.id] || []
                        : []
                }
                onFileChange={(files) =>
                    selectedSubmitJob &&
                    handleFileChangeSubmit(selectedSubmitJob.id, files)
                }
                coverMessage={
                    selectedSubmitJob
                        ? messagesBySubmit[selectedSubmitJob.id] || ""
                        : ""
                }
                onMessageChange={(msg) =>
                    selectedSubmitJob &&
                    handleMessageChangeSubmit(selectedSubmitJob.id, msg)
                }
            />

            {/* Pagination */}
            {filteredJobs.length > rowsPerPage && (
                <div className="bottom-0 w-full pb-4 pe-4 left-0 absolute">
                    <div className="flex flex-col md:flex-row md:justify-end items-center gap-4 mt-6">
                        <div className="flex items-center gap-2">
                            <span>Rows per page</span>
                            <Select
                                value={String(rowsPerPage)}
                                onValueChange={(val) => {
                                    setRowsPerPage(Number(val))
                                    setCurrentPage(1)
                                }}
                            >
                                <SelectTrigger className="w-[75px] cursor-pointer">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="4">4</SelectItem>
                                    <SelectItem value="10">10</SelectItem>
                                    <SelectItem value="20">20</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <span>
                            Page {currentPage} of {totalPages}
                        </span>

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
            )}
        </main>
    )
}

export default MyJobDetails
