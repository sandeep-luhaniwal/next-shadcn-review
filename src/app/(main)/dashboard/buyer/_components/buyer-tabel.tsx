"use client"

import { useState } from "react"
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
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    MoreVertical,
} from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Icons from "./ui-icons"
import Link from "next/link"

// Dummy data
const jobsData = Array.from({ length: 53 }, (_, i) => ({
    id: i + 1,
    title:
        i % 3 === 0
            ? "Headphone Review"
            : i % 3 === 1
                ? "Book Review"
                : "Kitchen Gadget",
    active: Math.floor(Math.random() * 7),
    done: Math.floor(Math.random() * 20),
    dispute: Math.floor(Math.random() * 35),
    progress: `${Math.floor(Math.random() * 100)}%`,
    proposals: Math.floor(Math.random() * 250),
    dueDate: `2026-0${(i % 9) + 1}-${10 + i}`,
    status:
        i % 4 === 0
            ? "In Draft"
            : i % 4 === 1
                ? "Completed"
                : i % 4 === 2
                    ? "Active"
                    : "Disputed",
}))

// status ke icons
const statusIcons: Record<string, string> = {
    Completed: "completed",
    Active: "active",
    Disputed: "disputed",
    "In Draft": "draft",
}

const BuyerTable = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const totalItems = jobsData.length
    const totalPages = Math.ceil(totalItems / rowsPerPage)

    const startIndex = (currentPage - 1) * rowsPerPage
    const paginatedData = jobsData.slice(startIndex, startIndex + rowsPerPage)

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    const toggleRowSelection = (id: number) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        )
    }

    const toggleSelectAll = () => {
        if (selectedRows.length === paginatedData.length) {
            setSelectedRows([])
        } else {
            setSelectedRows(paginatedData.map((job) => job.id))
        }
    }

    return (
        <div className="space-y-4">
            {/* Header with Button */}
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Manage Jobs</h2>
                <Link href={"/dashboard/buyer-post-a-job"}>
                    <Button className="bg-orange cursor-pointer rounded-[8px] hover:bg-orange-600">
                        + Create New Job
                    </Button>
                </Link>
            </div>

            {/* Table */}
            <div className="rounded-[10px] border shadow-sm overflow-x-auto">
                <Table className="w-full">
                    <TableHeader className="bg-muted">
                        <TableRow>
                            <TableHead className="w-8">
                                <Checkbox
                                    checked={
                                        selectedRows.length === paginatedData.length &&
                                        paginatedData.length > 0
                                    }
                                    onCheckedChange={toggleSelectAll}
                                    className="w-4 cursor-pointer"
                                />
                            </TableHead>
                            <TableHead className="font-medium text-sm">Title</TableHead>
                            <TableHead className="font-medium text-sm">Active</TableHead>
                            <TableHead className="font-medium text-sm">Done</TableHead>
                            <TableHead className="font-medium text-sm">Dispute</TableHead>
                            <TableHead className="font-medium text-sm">Progress</TableHead>
                            <TableHead className="font-medium text-sm">
                                Proposals count
                            </TableHead>
                            <TableHead className="font-medium text-sm">Due Date</TableHead>
                            <TableHead className="font-medium text-sm">Status</TableHead>
                            <TableHead className="w-12"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((job) => (
                            <TableRow key={job.id} className="hover:bg-muted/50">
                                <TableCell>
                                    <Checkbox
                                        checked={selectedRows.includes(job.id)}
                                        onCheckedChange={() => toggleRowSelection(job.id)}
                                        className="cursor-pointer"
                                    />
                                </TableCell>

                                <TableCell className="font-medium text-muted-foreground text-xs">
                                    <span className="border py-[3px] px-2 rounded-[8px]">
                                        {job.title}
                                    </span>
                                </TableCell>

                                <TableCell className="font-medium text-sm">
                                    {job.active}
                                </TableCell>
                                <TableCell className="font-medium text-sm">
                                    {job.done}
                                </TableCell>
                                <TableCell className="font-medium text-sm">
                                    {job.dispute}
                                </TableCell>
                                <TableCell className="font-medium text-sm">
                                    {job.progress}
                                </TableCell>
                                <TableCell className="font-medium text-sm">
                                    {job.proposals}
                                </TableCell>
                                <TableCell className="font-medium text-sm">
                                    {job.dueDate}
                                </TableCell>

                                <TableCell>
                                    <span className="text-xs border flex items-center max-w-max gap-1 text-muted-foreground py-[3px] font-medium px-2 rounded-[8px]">
                                        <Icons icon={statusIcons[job.status]} />
                                        {job.status}
                                    </span>
                                </TableCell>

                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="h-6 rounded-[4px] w-6 cursor-pointer hover:bg-muted-foreground/10 duration-300 p-0"
                                            >
                                                <span className="sr-only">Open menu</span>
                                                <MoreVertical className="h-4 w-4 text-muted-foreground" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer">
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer">
                                                Delete
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer">
                                                View Details
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination Footer */}
            <div className="flex flex-col md:flex-row items-center justify-between p-4 pb-0 text-sm text-muted-foreground border-t">
                <span>
                    {selectedRows.length} of {totalItems} row(s) selected.
                </span>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span>Rows per page</span>
                        <Select 
                            value={String(rowsPerPage)}
                            onValueChange={(val) => {
                                setRowsPerPage(Number(val))
                                setCurrentPage(1)
                                setSelectedRows([])
                            }}
                        >
                            <SelectTrigger className="w-[75px] cursor-pointer">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className="cursor-pointer" value="10">10</SelectItem>
                                <SelectItem className="cursor-pointer" value="20">20</SelectItem>
                                <SelectItem className="cursor-pointer" value="50">50</SelectItem>
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
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronsLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            className="cursor-pointer"
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            className="cursor-pointer"
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button
                            className="cursor-pointer"
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
    )
}

export default BuyerTable
