"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Minus, Plus, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, Badge } from "lucide-react"
import ApplyJob from "./apply-job"
import Icons from "../../buyer-disputes/_components/ui-icons"

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
]

interface MyJobDetailsProps {
    searchTerm: string
    currentPage: number
    setCurrentPage: (page: number) => void
}

const MyJobDetails: React.FC<MyJobDetailsProps> = ({ searchTerm, currentPage, setCurrentPage }) => {
    // ✅ Slot count state per job
    const [slotCounts, setSlotCounts] = useState<{ [key: number]: number }>(
        Object.fromEntries(jobs.map((job) => [job.id, 1]))
    )
    const [rowsPerPage, setRowsPerPage] = useState(4)
    const [selectedJob, setSelectedJob] = useState<any>(null)
    const [openDialog, setOpenDialog] = useState(false)

    const handleApplyJob = (job: any) => {
        setSelectedJob(job)
        setOpenDialog(true)
    }

    // ✅ Filter jobs based on searchTerm
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

    // Slot increment/decrement
    const handleIncrement = (id: number) => {
        setSlotCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    }
    const handleDecrement = (id: number) => {
        setSlotCounts((prev) => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }))
    }

    // Pagination handlers
    const handleFirst = () => setCurrentPage(1)
    const handleLast = () => setCurrentPage(totalPages)
    const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1)
    const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1)

    return (
        <main className="flex-1 p-4 xl:p-6 xl:pt-4 w-full lg:w-2/3 xl:w-[73%]">
            <div className="flex items-center gap-5 pt-8 pb-4 lg:pt-0">
                <h1 className="text-xl md:text-2xl font-bold">My Jobs</h1>
            </div>

            <div className="space-y-6">
                {currentJobs.map((job) => (
                    <Card key={job.id} className="shadow-sm gap-0">
                        <CardHeader>
                            <CardTitle className="flex flex-col xl:flex-row xl:justify-between gap-2 xl:items-center">
                                <span className="text-sm order-2 xl:order-1 font-semibold">{job.title}</span>
                                <div className="flex justify-between gap-2 order-1 xl:order-2 xl:justify-end">
                                    <span className="border text-nowrap font-medium text-muted-foreground text-xs py-[3px] capitalize max-w-max items-center flex gap-1 px-2 rounded-[8px]">
                                        <Icons
                                            icon="pending"
                                        />
                                        In Progress
                                    </span>
                                    <span className="text-sm text-ring text-nowrap">{job.deadline} days</span>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="py-6 flex flex-col gap-2">
                                <p className="text-sm font-normal text-foreground/80">{job.desc}</p>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-muted-foreground">
                                    {job.author && <span>👤 {job.author} ({job.rating}★)</span>}
                                    {job.price && <span>💲 {job.price}/review</span>}
                                    {job.reviews && <span>📝 {job.reviews} reviews</span>}
                                    {job.slots && <span>👥 {job.slots} slots left</span>}
                                    {job.budget && <span>💰 Total Budget: ${job.budget}</span>}
                                    {job.productPrice && <span>📦 Product Price: ${job.productPrice}</span>}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:justify-between">
                                <div className="grid grid-cols-2 sm:flex items-center gap-2">
                                    <Button
                                        variant="secondary"
                                        className="sm:w-auto lg:px-3 xl:px-4 bg-orange/10 cursor-pointer"

                                    >
                                        Leave Feedback
                                    </Button>
                                    <Button className="sm:w-auto lg:px-3 xl:px-4 bg-button-orange cursor-pointer">
                                        Submit Work
                                    </Button>
                                </div>

                                <Button
                                    variant="secondary"
                                    className="w-full lg:px-3 xl:px-4 bg-orange/10 sm:w-auto cursor-pointer"
                                    onClick={() => handleApplyJob(job)}
                                >
                                    Raise a disputes
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <ApplyJob open={openDialog} onClose={() => setOpenDialog(false)} job={selectedJob} />

            {/* Pagination */}
            {filteredJobs.length > rowsPerPage && (
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
            )}
        </main>
    )
}

export default MyJobDetails
