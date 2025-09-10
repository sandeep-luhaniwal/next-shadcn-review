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
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreVertical } from "lucide-react"
import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Icons from "./ui-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// ✅ Strongly typed interface
interface Dispute {
    date: string
    job: string
    reviewer: string
    status: "Pending" | "Resolved"
}

// ✅ helper to make slug from dispute
const createSlug = (dispute: Dispute): string => {
    const jobSlug = dispute.job.toLowerCase().replace(/\s+/g, "-")
    const reviewerSlug = dispute.reviewer.toLowerCase().replace(/\s+/g, "-")
    const dateSlug = dispute.date.replace(/\s+/g, "-")
    return `${jobSlug}-${reviewerSlug}-${dateSlug}`
}

const generateDisputes = (): Dispute[] => {
    const specificData: Dispute[] = [
        { date: "12 Aug 2025", job: "Book Review", reviewer: "Michael Johnson", status: "Pending" },
        { date: "09 Aug 2025", job: "iPhone Review", reviewer: "Sarah Thompson", status: "Resolved" },
        { date: "09 Aug 2025", job: "Magazine Review", reviewer: "David Smith", status: "Pending" },
        { date: "08 Aug 2025", job: "Laptop Review", reviewer: "Emily Davis", status: "Resolved" },
        { date: "08 Aug 2025", job: "Tablet Review", reviewer: "Jessica Brown", status: "Resolved" },
        { date: "08 Aug 2025", job: "Camera Review", reviewer: "Robert Wilson", status: "Resolved" },
        { date: "05 Aug 2025", job: "Smartwatch Review", reviewer: "Laura Martinez", status: "Pending" },
        { date: "04 Aug 2025", job: "Speaker Review", reviewer: "James Anderson", status: "Pending" },
        { date: "03 Aug 2025", job: "Monitor Review", reviewer: "Olivia Taylor", status: "Pending" },
        { date: "01 Aug 2025", job: "Printer Review", reviewer: "Daniel Lee", status: "Resolved" },
    ]

    const disputes: Dispute[] = [...specificData]
    const statuses: Array<"Pending" | "Resolved"> = ["Pending", "Resolved"]
    const jobs = ["Headphone Review", "Keyboard Review", "Mouse Review", "Webcam Review"]
    const names = ["Chris Green", "Patricia Hall", "Linda Adams", "Barbara Clark"]

    for (let i = 1; i <= 58; i++) {
        disputes.push({
            date: `01 Aug 2025`,
            job: jobs[i % jobs.length],
            reviewer: names[i % names.length],
            status: statuses[i % statuses.length],
        })
    }
    return disputes
}

const disputesData: Dispute[] = generateDisputes()

export default function DisputesReviewerTable() {
    const [filter, setFilter] = useState<"All" | "Pending" | "Resolved">("All")
    const [rowsPerPage, setRowsPerPage] = useState<number>(20)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [selectedRows, setSelectedRows] = useState<number[]>([])
    const router = useRouter()

    const { pendingCount, resolvedCount } = useMemo(() => {
        return disputesData.reduce(
            (counts, dispute) => {
                if (dispute.status === "Pending") counts.pendingCount++
                if (dispute.status === "Resolved") counts.resolvedCount++
                return counts
            },
            { pendingCount: 0, resolvedCount: 0 }
        )
    }, [])

    const filteredData: Dispute[] = useMemo(() => {
        if (filter === "All") return disputesData
        return disputesData.filter((d) => d.status === filter)
    }, [filter])

    const totalItems = filteredData.length
    const totalPages = Math.ceil(totalItems / rowsPerPage)

    const paginatedData: Dispute[] = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage
        return filteredData.slice(start, start + rowsPerPage)
    }, [filteredData, currentPage, rowsPerPage])

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
            setSelectedRows([])
        }
    }

    const handleSelectAll = (checked: boolean | "indeterminate") => {
        if (checked === true) {
            const allRowIndexes = paginatedData.map((_, index) => index)
            setSelectedRows(allRowIndexes)
        } else {
            setSelectedRows([])
        }
    }

    const handleSelectRow = (index: number, checked: boolean) => {
        if (checked) {
            setSelectedRows((prev) => [...prev, index])
        } else {
            setSelectedRows((prev) => prev.filter((i) => i !== index))
        }
    }

    const isAllOnPageSelected =
        selectedRows.length === paginatedData.length && paginatedData.length > 0

    // ✅ when clicking view detail → navigate
    const handleViewDetail = (dispute: Dispute) => {
        const slug = createSlug(dispute)
        router.push(`/dashboard/reviewer-disputed-job-details/${slug}`)
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3">
                <p className="font-semibold text-base">Dispute List</p>
                <div className="p-1 bg-orange/10 rounded-[8px]">
                    <Button
                        variant={filter === "All" ? "default" : "ghost"}
                        className={
                            filter === "All"
                                ? "rounded-md bg-orange text-white hover:bg-orange-600 cursor-pointer"
                                : "cursor-pointer rounded-md"
                        }
                        onClick={() => {
                            setFilter("All")
                            setCurrentPage(1)
                            setSelectedRows([])
                        }}
                    >
                        All ({disputesData.length})
                    </Button>
                    <Button
                        variant={filter === "Pending" ? "default" : "ghost"}
                        className={
                            filter === "Pending"
                                ? "rounded-md bg-orange text-white hover:bg-orange-600 cursor-pointer"
                                : "cursor-pointer rounded-md"
                        }
                        onClick={() => {
                            setFilter("Pending")
                            setCurrentPage(1)
                            setSelectedRows([])
                        }}
                    >
                        Under Review ({pendingCount})
                    </Button>
                    <Button
                        variant={filter === "Resolved" ? "default" : "ghost"}
                        className={
                            filter === "Resolved"
                                ? "rounded-md bg-orange text-white hover:bg-orange-600 cursor-pointer"
                                : "cursor-pointer rounded-md"
                        }
                        onClick={() => {
                            setFilter("Resolved")
                            setCurrentPage(1)
                            setSelectedRows([])
                        }}
                    >
                        Resolved ({resolvedCount})
                    </Button>
                </div>
            </div>
            <div className="overflow-x-auto rounded-[10px] border shadow-sm">
                <Table className="w-full">
                    <TableHeader className="bg-muted p-2.5">
                        <TableRow>
                            <TableHead className="w-8">
                                <Checkbox
                                    className="w-4 cursor-pointer"
                                    checked={isAllOnPageSelected}
                                    onCheckedChange={handleSelectAll}
                                />
                            </TableHead>
                            <TableHead className="font-medium text-sm">Date</TableHead>
                            <TableHead className="font-medium text-sm">Buyer Name</TableHead>
                            <TableHead className="font-medium text-sm">Job Title</TableHead>
                            <TableHead className="font-medium text-sm">Result</TableHead>
                            <TableHead className="font-medium text-sm">Actions</TableHead>
                            <TableHead className="w-12"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((item, idx) => (
                            <TableRow key={idx}>
                                <TableCell className="w-8">
                                    <Checkbox
                                        className="cursor-pointer"
                                        checked={selectedRows.includes(idx)}
                                        onCheckedChange={(checked) => handleSelectRow(idx, !!checked)}
                                    />
                                </TableCell>
                                <TableCell className="font-medium text-sm">{item.date}</TableCell>
                                <TableCell className="font-medium text-sm">{item.reviewer}</TableCell>
                                <TableCell className="font-medium text-muted-foreground text-xs">
                                    <span className="border py-[3px] px-2 rounded-[8px]">{item.job}</span>
                                </TableCell>
                                <TableCell className="font-medium text-muted-foreground text-xs">
                                    <span className="border py-[3px] px-2 rounded-[8px] flex items-center gap-0.5 max-w-max">
                                        <Icons icon={item.status === "Pending" ? "pending" : "resolved"} />
                                        {item.status}
                                    </span>
                                </TableCell>
                                <TableCell className="font-medium text-sm">
                                    <Button
                                        size="sm"
                                        className="bg-orange cursor-pointer hover:bg-orange-600 text-white rounded-md"
                                        onClick={() => handleViewDetail(item)}
                                    >
                                        View Detail
                                    </Button>
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
                                            <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer">Delete</DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="cursor-pointer"
                                                onClick={() => handleViewDetail(item)}
                                            >
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
                                <SelectItem className="cursor-pointer" value="20">
                                    20
                                </SelectItem>
                                <SelectItem className="cursor-pointer" value="30">
                                    30
                                </SelectItem>
                                <SelectItem className="cursor-pointer" value="50">
                                    50
                                </SelectItem>
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
