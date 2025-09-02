"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MoreVertical } from "lucide-react"
import { useState } from "react"
import Icons from "./ui-icons"

// Dummy data (20+ rows for pagination demo)
const jobsData = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: i % 3 === 0 ? "Headphone Review" : i % 3 === 1 ? "Book Review" : "Kitchen Gadget",
    active: Math.floor(Math.random() * 7),
    done: Math.floor(Math.random() * 20),
    dispute: Math.floor(Math.random() * 35),
    progress: `${Math.floor(Math.random() * 100)}%`,
    proposals: Math.floor(Math.random() * 250),
    dueDate: `2026-0${(i % 9) + 1}-${10 + i}`,
    status:
        i % 4 === 0 ? "In Draft" : i % 4 === 1 ? "Completed" : i % 4 === 2 ? "Active" : "Disputed",
}))

const ITEMS_PER_PAGE = 10

// status ke icons
const statusIcons: Record<string, string> = {
    Completed: "completed",
    Active: "active",
    Disputed: "disputed",
    "In Draft": "draft",
}

const BuyerTable = () => {
    const [page, setPage] = useState(1)

    const startIndex = (page - 1) * ITEMS_PER_PAGE
    const paginatedData = jobsData.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    const totalPages = Math.ceil(jobsData.length / ITEMS_PER_PAGE)

    return (
        <div className="space-y-4">
            {/* Header with Button */}
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Manage Jobs</h2>
                <Button className="bg-orange cursor-pointer rounded-[8px] hover:bg-orange-600">
                    + Create New Job
                </Button>
            </div>

            {/* Table */}
            <div className="rounded-[10px] border shadow-sm overflow-x-auto">
                <Table className="w-full">
                    <TableHeader className="bg-muted p-2.5">
                        <TableRow>
                            <TableHead className="w-8">
                                <Checkbox className="w-4 cursor-pointer" />
                            </TableHead>
                            <TableHead className="font-medium text-sm">Title</TableHead>
                            <TableHead className="font-medium text-sm">Active</TableHead>
                            <TableHead className="font-medium text-sm">Done</TableHead>
                            <TableHead className="font-medium text-sm">Dispute</TableHead>
                            <TableHead className="font-medium text-sm">Progress</TableHead>
                            <TableHead className="font-medium text-sm">Proposals count</TableHead>
                            <TableHead className="font-medium text-sm">Due Date</TableHead>
                            <TableHead className="font-medium text-sm">Status</TableHead>
                            <TableHead className="w-12"></TableHead> {/* 👈 extra col for actions */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((job) => (
                            <TableRow key={job.id} className="hover:bg-muted/50">
                                <TableCell>
                                    <Checkbox className="cursor-pointer" />
                                </TableCell>

                                <TableCell className="font-medium text-muted-foreground text-xs">
                                    <span className="border py-[3px] px-2 rounded-[8px]">{job.title}</span>
                                </TableCell>

                                <TableCell className="font-medium text-sm">{job.active}</TableCell>
                                <TableCell className="font-medium text-sm">{job.done}</TableCell>
                                <TableCell className="font-medium text-sm">{job.dispute}</TableCell>
                                <TableCell className="font-medium text-sm">{job.progress}</TableCell>
                                <TableCell className="font-medium text-sm">{job.proposals}</TableCell>
                                <TableCell className="font-medium text-sm">{job.dueDate}</TableCell>

                                <TableCell>
                                    <span className="text-xs border flex items-center max-w-max gap-1 text-muted-foreground py-[3px] font-medium px-2 rounded-[8px]">
                                        <Icons icon={statusIcons[job.status]} />
                                        {job.status}
                                    </span>
                                </TableCell>

                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-6 rounded-[4px] w-6 cursor-pointer hover:bg-muted-foreground/10 duration-300 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreVertical className="h-4 w-4 text-muted-foreground" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer">Delete</DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer">View Details</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-between items-center pt-2">
                    <Button
                        className="cursor-pointer"
                        variant="outline"
                        size="sm"
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                    >
                        Previous
                    </Button>
                    <p className="text-sm font-medium">
                        Page {page} of {totalPages}
                    </p>
                    <Button
                        className="cursor-pointer"
                        variant="outline"
                        size="sm"
                        disabled={page === totalPages}
                        onClick={() => setPage((p) => p + 1)}
                    >
                        Next
                    </Button>
                </div>
            )}
        </div>
    )
}

export default BuyerTable
