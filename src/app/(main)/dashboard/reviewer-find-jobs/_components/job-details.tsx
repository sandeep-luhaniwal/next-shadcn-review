"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Minus, Plus, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import ApplyJob from "./apply-job"
import { Badge } from "@/components/ui/badge"

const defaultMessage =
    "Hi! I'm a professional Reviews with experience in providing thorough, constructive feedback. I would be happy to work on your project and deliver a comprehensive review within your timeline."

const jobs = [
    {
        id: 1,
        title: `Review "Atomic Habits" by James Clear`,
        desc: "Looking for an honest, detailed review of this popular self-help book.",
        author: "Mike Chen",
        rating: 4.2,
        price: 45,
        reviews: 35,
        slots: 3,
        deadline: 7,
        budget: 135,
        productPrice: 20,
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
    },
    {
        id: 4,
        title: `Review "Atomic Habits" by James Clear`,
        desc: "Looking for an honest, detailed review of this popular self-help book.",
        author: "Mike Chen",
        rating: 4.2,
        price: 45,
        reviews: 35,
        slots: 3,
        deadline: 7,
        budget: 135,
        productPrice: 20,
    },
    {
        id: 5,
        title: "Product Review – Wireless Earbuds",
        desc: "Comprehensive review needed for new wireless earbuds.",
        author: "Mike Chen",
        rating: 4.2,
        price: 45,
        reviews: 102,
        slots: 25,
        deadline: 7,
        budget: 135,
    },
    {
        id: 6,
        title: "E-learning Course Feedback",
        desc: "Need detailed feedback on my new online course.",
        author: "Sarah Lee",
        rating: 4.8,
        price: 60,
        reviews: 50,
        slots: 10,
        deadline: 10,
        budget: 600,
    },
]

const JobDetails = () => {
    const [slotCounts, setSlotCounts] = useState<{ [key: number]: number }>(
        Object.fromEntries(jobs.map((job) => [job.id, 1]))
    )
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(4)

    const [selectedJob, setSelectedJob] = useState<any>(null)
    const [openDialog, setOpenDialog] = useState(false)

    // ✅ Har job ka apna message
    const [messages, setMessages] = useState<{ [key: number]: string }>(
        Object.fromEntries(jobs.map(job => [job.id, defaultMessage]))
    )

    const handleApplyJob = (job: any) => {
        setSelectedJob(job)
        setOpenDialog(true)
    }

    // Update message
    const handleMessageChange = (id: number, value: string) => {
        setMessages(prev => ({ ...prev, [id]: value }))
    }

    // Reset message to default
    const handleResetMessage = (id: number) => {
        setMessages(prev => ({ ...prev, [id]: defaultMessage }))
    }

    // Filter jobs based on search
    const filteredJobs = useMemo(() => {
        return jobs.filter(
            (job) =>
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.desc.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [searchTerm])

    // Pagination logic
    const indexOfLastJob = currentPage * rowsPerPage
    const indexOfFirstJob = indexOfLastJob - rowsPerPage
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
    const totalPages = Math.ceil(filteredJobs.length / rowsPerPage)

    const handleIncrement = (id: number) => {
        setSlotCounts((prev) => ({
            ...prev,
            [id]: prev[id] + 1,
        }))
    }

    const handleDecrement = (id: number) => {
        setSlotCounts((prev) => ({
            ...prev,
            [id]: Math.max(1, prev[id] - 1),
        }))
    }

    const handleFirst = () => setCurrentPage(1)
    const handleLast = () => setCurrentPage(totalPages)
    const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1)
    const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1)

    return (
        <main className="flex-1 p-4 xl:p-6 xl:pt-4 w-full lg:w-2/3 xl:w-[73%]">
            <div className="flex items-center gap-5 pt-8 pb-4 lg:pt-0">
                <h1 className="text-xl text-nowrap md:text-2xl font-bold">Find Jobs</h1>
                <Input
                    placeholder="Search title or description..."
                    className="max-w-[255px]"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setCurrentPage(1)
                    }}
                />
            </div>

            <div className="space-y-6">
                {currentJobs.map((job, i) => (
                    <Card key={i} className="shadow-sm gap-0">
                        <CardHeader>
                            <CardTitle className="flex justify-between gap-2 items-center">
                                <span className="text-sm font-semibold">{job.title}</span>
                                <span className="text-sm text-ring text-nowrap">{job.deadline} days</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-normal text-foreground/80">{job.desc}</p>
                            <div className="flex flex-col gap-3 py-6">
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-muted-foreground">
                                    {job.author && <span>👤 {job.author} ({job.rating}★)</span>}
                                    {job.price && <span>💲 {job.price}/review</span>}
                                    {job.reviews && <span>📝 {job.reviews} reviews</span>}
                                    {job.slots && <span>👥 {job.slots} slots left</span>}
                                    {job.budget && <span>💰 Total Budget: ${job.budget}</span>}
                                    {job.productPrice && <span>📦 Product Price: ${job.productPrice}</span>}
                                </div>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                                    <Badge className="bg-button-orange/20 text-foreground">Book</Badge>
                                    <Badge className="bg-button-orange/20 text-foreground">Book</Badge>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:justify-between">
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="border rounded-md cursor-pointer"
                                        onClick={() => handleDecrement(job.id)}
                                        disabled={slotCounts[job.id] === 1}
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="flex justify-center items-center h-9 w-12 xl:w-14 bg-orange/10 rounded-md">
                                        {slotCounts[job.id]}
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="border rounded-md cursor-pointer"
                                        onClick={() => handleIncrement(job.id)}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                    <Button className="w-full max-w-max sm:w-auto lg:px-3 xl:px-4 bg-button-orange cursor-pointer">
                                        Apply for {slotCounts[job.id]} slot
                                    </Button>
                                </div>

                                <Button
                                    variant="secondary"
                                    className="w-full lg:px-3 xl:px-4 bg-orange/10 text-button-orange sm:w-auto cursor-pointer"
                                    onClick={() => handleApplyJob(job)}
                                >
                                    Apply to all left Slots
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <ApplyJob
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                job={selectedJob}
                coverMessage={selectedJob ? messages[selectedJob.id] : defaultMessage}
                onChangeMessage={(val) => selectedJob && handleMessageChange(selectedJob.id, val)}
                onResetMessage={() => selectedJob && handleResetMessage(selectedJob.id)}
            />

            <div className="bottom-0 w-full pb-4 left-0 pe-6 absolute">
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
        </main>
    )
}

export default JobDetails
