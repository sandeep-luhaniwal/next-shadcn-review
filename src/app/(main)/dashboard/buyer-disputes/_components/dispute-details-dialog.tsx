"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import ImageShowFull from "../../buyer-manage-a-job/_components/image-show-full"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export interface Dispute {
  id?: string
  job: string
  reviewer: string
  status: string
  feedback?: string
  attachments?: string[]
  issue?: string
}

export function DisputeBuyerDetailsDialog({
  open,
  onClose,
  dispute,
}: {
  open: boolean
  onClose: () => void
  dispute: Dispute | null
}) {
  const [coverMessage, setCoverMessage] = useState("")

  if (!dispute) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold text-left">
            Dispute Details
          </DialogTitle>
        </DialogHeader>

        {/* Top row */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-orange font-semibold">
            Disputes #{dispute.id ?? "232"}
          </span>
          <span className="bg-orange/10 text-button-orange text-sm px-3 py-1 rounded-lg">
            Poor quality of work
          </span>
        </div>

        {/* Feedback */}
        <div>
          <p className="font-medium mb-1">Refund Amount</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {dispute.feedback ??
              "I want a refund of $50 The reviewer didn’t cover the main features of the product. Only half of the requirements were completed."}
          </p>
          <p className="font-medium mt-3 mb-1">Refund Amount</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            $ 50
          </p>
        </div>

        {/* Attachments */}
        <div>
          <p className="font-semibold mb-2">Attachments</p>
          <ImageShowFull />
        </div>

        {/* Leave another feedback */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Leave Another feedback</label>
          <Textarea
            className="mt-1 !text-xs resize-none h-[88px] overscroll-auto font-normal"
            value={coverMessage}
            placeholder="Type your feedback here"
            onChange={(e) => setCoverMessage(e.target.value)}
            rows={5}
          />
        </div>

        {/* Footer */}
        <DialogFooter className="mt-1 flex flex-row justify-end gap-3">
          <Button
            variant="outline"
            className="rounded-md cursor-pointer border-gray-300 text-gray-600"
            onClick={onClose}
          >
            Mark as resolved
          </Button>
          <Button
            className="bg-orange cursor-pointer text-white hover:bg-orange-600 rounded-md"
            onClick={onClose}
          >
            Escalated to Admin
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
