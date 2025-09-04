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
    const specificData = [
        { date: "12 Aug 2025", job: "Job #123 – Headphone Review", amount: "+$25", status: "pending" },
        { date: "09 Aug 2025", job: "Job #118 – Book Review", amount: "+$15", status: "done" },
        { date: "09 Aug 2025", job: "Withdrawal to PayPal", amount: "+$15", status: "pending" },
        { date: "08 Aug 2025", job: "Laptop Review", amount: "-$5", status: "done" },
        { date: "08 Aug 2025", job: "Job #110 – Kitchen Gadget", amount: "+$15", status: "done" },
        { date: "08 Aug 2025", job: "Camera Review", amount: "+$1", status: "done" },
        { date: "05 Aug 2025", job: "Job #123 – Headphone Review", amount: "+$15", status: "pending" },
        { date: "04 Aug 2025", job: "Withdrawal to Bank", amount: "-$15", status: "pending" },
        { date: "03 Aug 2025", job: "Job #123 – Headphone Review", amount: "+$15", status: "pending" },
        { date: "01 Aug 2025", job: "Withdrawal to Bank", amount: "+$15", status: "done" },
    ]

    const disputes = [...specificData]
    const statuses = ["pending", "done"]   // ✅ lowercase
    const jobs = ["Headphone Review", "Keyboard Review", "Mouse Review", "Webcam Review"]
    const amounts = ["+$10", "+$15", "+$20", "-$5", "-$10", "+$25"]

    for (let i = 1; i <= 58; i++) {
        disputes.push({
            date: `01 Aug 2025`,
            job: jobs[i % jobs.length],
            amount: amounts[i % amounts.length],
            status: statuses[i % statuses.length],
        })
    }
    return disputes
}



const disputesData = generateWallet()

export default function WalletBuyerTable() {
    const [rowsPerPage, setRowsPerPage] = useState(10)
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
                <p className="font-semibold text-base">Transaction History</p>
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
                            <TableHead className="font-medium text-sm">Description</TableHead>
                            <TableHead className="font-medium text-sm">Status</TableHead>
                            <TableHead className="font-medium text-sm">Amount</TableHead>
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
                                <TableCell className="font-medium text-sm">{item.date}</TableCell>
                                <TableCell className="font-medium text-muted-foreground text-xs">
                                    <span className="border py-[3px] px-2 rounded-[8px]">
                                        {item.job}
                                    </span>
                                </TableCell>
                                <TableCell className="font-medium text-muted-foreground text-xs">
                                    <span className="border py-[3px] capitalize max-w-max items-center flex gap-1 px-2 rounded-[8px]">
                                        <Icons
                                            icon={
                                                item.status === "pending"
                                                    ? "pending"
                                                    : "resolved"
                                            }
                                        />
                                        {item.status}
                                    </span>
                                </TableCell>

                                <TableCell className="font-medium text-sm">
                                    {item.amount}
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
                                <SelectItem className="cursor-pointer" value="10">
                                    10
                                </SelectItem>
                                <SelectItem className="cursor-pointer" value="20">
                                    20
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
