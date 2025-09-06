"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ApplyJobProps {
    open: boolean
    onClose: () => void
}

const WithdrawRequestDialog: React.FC<ApplyJobProps> = ({ open, onClose }) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader className="gap-0">
                    <DialogTitle className="font-semibold text-base text-left">Withdraw Request</DialogTitle>
                    <p className="text-sm text-left text-foreground/80">
                        Are you sure you want to withdraw your earnings?
                    </p>
                </DialogHeader>

                {/* Enter Amount */}
                <div className="space-y-2">
                    <div className="flex justify-between gap-2 items-center">
                        <Label className="text-sm font-medium">Enter Amount</Label>
                        <p className="text-xs hidden sm:flex text-muted-foreground">
                            Minimum withdrawal amount <span className="text-button-orange font-semibold ps-1">$100</span>
                        </p>
                    </div>
                    <Input placeholder="$" />
                    <p className="text-xs sm:hidden text-muted-foreground">
                        Minimum withdrawal amount <span className="text-button-orange font-semibold ps-1">$100</span>
                    </p>
                </div>

                {/* Payment Wallet */}
                <div className="space-y-2">
                    <div className="flex justify-between gap-2 items-center">
                        <Label className="text-sm font-medium">Select Linked Payment Wallet</Label>
                        <p className="text-xs sm:flex hidden text-button-orange font-medium cursor-pointer">
                            Add New Payment Method
                        </p>
                    </div>
                    <Input value="Binance Wallet" readOnly />
                    <p className="text-xs  sm:hidden text-button-orange font-medium cursor-pointer">
                        Add New Payment Method
                    </p>
                </div>

                <DialogFooter className="mt-2 flex gap-3">
                    <Button className="bg-button-orange cursor-pointer">Request Withdrawal</Button>
                    <Button variant="outline" className="cursor-pointer" onClick={onClose}>
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default WithdrawRequestDialog
