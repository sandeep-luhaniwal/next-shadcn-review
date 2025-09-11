"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useMemo, useState } from "react"
import Icons from "../../buyer-disputes/_components/ui-icons"

const generateWallet = () => {
    const jobsData = [
        { id: "JOB-101", title: "Headphone Review", dueDate: "2026-01-15", amount: "$30", status: "In Progress" },
        { id: "JOB-102", title: "Book Review", dueDate: "2026-02-20", amount: "$20", status: "Accepted" },
        { id: "JOB-103", title: "Headphone Review", dueDate: "2026-03-30", amount: "$50", status: "Accepted" },
        { id: "JOB-104", title: "Kitchen Gadget", dueDate: "2026-04-10", amount: "$40", status: "Changes Requested" },
        { id: "JOB-105", title: "Book Review", dueDate: "2026-05-05", amount: "$120", status: "Completed" },
        { id: "JOB-106", title: "Headphone Review", dueDate: "2026-06-18", amount: "$30", status: "In Progress" },
        { id: "JOB-107", title: "Kitchen Gadget", dueDate: "2026-07-22", amount: "$20", status: "Changes Requested" },
        { id: "JOB-108", title: "Headphone Review", dueDate: "2026-08-14", amount: "$60", status: "Disputed" },
        { id: "JOB-109", title: "Kitchen Gadget", dueDate: "2026-09-09", amount: "$40", status: "Accepted" },
        { id: "JOB-110", title: "Book Review", dueDate: "2026-10-01", amount: "$120", status: "Accepted" },
    ];

    // Extra dummy jobs generate karne ke liye
    const titles = ["Headphone Review", "Book Review", "Kitchen Gadget", "Camera Review"];
    const statuses = ["In Progress", "Accepted", "Changes Requested", "Completed", "Disputed"];
    const amounts = ["$20", "$30", "$40", "$50", "$60", "$120"];

    for (let i = 111; i <= 150; i++) {
        jobsData.push({
            id: `JOB-${i}`,
            title: titles[i % titles.length],
            dueDate: `2026-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
            amount: amounts[i % amounts.length],
            status: statuses[i % statuses.length],
        });
    }

    return jobsData;
};

const disputesData = generateWallet()

export default function ReviewerTabel() {
    const [rowsPerPage, setRowsPerPage] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const totalItems = disputesData.length
    const totalPages = Math.ceil(totalItems / rowsPerPage)

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage
        return disputesData.slice(start, start + rowsPerPage)
    }, [currentPage, rowsPerPage])

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

    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3">
                <p className="font-semibold text-base">Active Jobs</p>
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
                            <TableHead className="font-medium text-sm">Job ID</TableHead>
                            <TableHead className="font-medium text-sm">Title</TableHead>
                            <TableHead className="font-medium text-sm">Due Date</TableHead>
                            <TableHead className="font-medium text-sm">Total Amount</TableHead>
                            <TableHead className="font-medium text-sm">Status</TableHead>
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
                                        onCheckedChange={(checked) =>
                                            handleSelectRow(idx, !!checked)
                                        }
                                    />
                                </TableCell>
                                <TableCell className="font-medium text-sm">{item.id}</TableCell>
                                <TableCell className="font-medium text-muted-foreground text-xs">
                                    <span className="border py-[3px] px-2 rounded-[8px]">
                                        {item.title}
                                    </span>
                                </TableCell>
                                <TableCell className="font-medium text-sm">
                                    {item.dueDate}
                                </TableCell>
                                <TableCell className="font-medium text-sm">
                                    {item.amount}
                                </TableCell>
                                <TableCell className="font-medium text-muted-foreground text-xs">
                                    <span className="border py-[3px] capitalize max-w-max items-center flex gap-1 px-2 rounded-[8px]">
                                        <Icons
                                            icon={item.status === "In Progress" ? "pending" : item.status === "Changes Requested" ? "chagnereduest"
                                                : item.status === "Disputed" ? "disputed" : item.status === "Completed" ? "done"

                                                    : "resolved"
                                            }
                                        />
                                        {item.status}
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
            <div className="bottom-0 w-full pb-4 left-0 absolute">
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
        </div>
    )
}
