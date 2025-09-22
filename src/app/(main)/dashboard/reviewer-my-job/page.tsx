"use client"

import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import MyJobDetails from "./_components/my-job-details"

export default function ReviewerMyJobs() {
    const [reviews, setReviews] = useState([1, 100])
    const [deadline, setDeadline] = useState(14)

    // ✅ Search + Status state
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [status, setStatus] = useState("All")

    return (
        <div className="flex flex-col lg:flex-row min-h-screen -mx-4 md:-mx-6 mb-40 md:mb-12">
            {/* Filters */}
            <aside className="w-full lg:w-1/3 xl:w-[27%] lg:border-r -mb-4 md:-mb-16 bg-white dark:bg-background p-4 xl:ps-10 pt-0 lg:block">
                <h2 className="font-semibold text-lg mb-2">Filters</h2>

                {/* ✅ Search Input */}
                <Input
                    placeholder="Search title or description..."
                    className="max-w-[255px]"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setCurrentPage(1)
                    }}
                />

                {/* Reviews */}
                <div className="border-y mt-4 py-4">
                    <Label className="text-sm leading-160 font-medium">
                        Reviews Required ({reviews[0]} - {reviews[1]})
                    </Label>
                    <Slider
                        defaultValue={reviews}
                        max={100}
                        min={1}
                        step={1}
                        ornagecolorline
                        onValueChange={setReviews}
                        className="my-4 cursor-pointer"
                    />
                    {/* Deadline */}
                    <Label className="text-sm leading-160 font-medium mt-1">
                        Max Deadline: {deadline} days
                    </Label>
                    <Slider
                        defaultValue={[deadline]}
                        max={30}
                        min={1}
                        step={1}
                        ornagecolorline
                        onValueChange={(v) => setDeadline(v[0])}
                        className="my-4 cursor-pointer"
                    />
                </div>

                {/* ✅ Status Filter */}
                <div className="pt-4">
                    <Label className="text-sm leading-160 font-medium">Status</Label>
                    <Select
                        value={status}
                        onValueChange={(val) => {
                            setStatus(val)
                            setCurrentPage(1)
                        }}
                    >
                        <SelectTrigger className="w-full mt-1 cursor-pointer">
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All</SelectItem>
                            <SelectItem value="Applied">Applied</SelectItem>
                            <SelectItem value="InProgress">In Progress</SelectItem>
                            <SelectItem value="Submitted">Submitted</SelectItem>
                            <SelectItem value="InRevision">In Revision</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                            <SelectItem value="Disputed">Disputed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </aside>

            {/* ✅ Jobs list me status bhi bhejna */}
            <MyJobDetails
                searchTerm={searchTerm}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                status={status}
            />
        </div>
    )
}
