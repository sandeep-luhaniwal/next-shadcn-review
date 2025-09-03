"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

type DisputeDetailsDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  disputeId: string
  reason: string
  feedback: string
  attachments?: string[]
}

export function DisputeDetailsDialog({
  open,
  onOpenChange,
  disputeId,
  reason,
  feedback,
  attachments = [],
}: DisputeDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Dispute Details
          </DialogTitle>
        </DialogHeader>
        <DialogDescription asChild>
          <div className="space-y-4">
            {/* Title + Tag */}
            <div className="flex items-center gap-2">
              <span className="text-orange font-semibold">
                Disputes #{disputeId}
              </span>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                {reason}
              </Badge>
            </div>

            {/* Feedback */}
            <div>
              <h4 className="font-medium mb-1">Feedback</h4>
              <p className="text-sm text-gray-600">{feedback}</p>
            </div>

            {/* Attachments */}
            {attachments.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">Attachments</h4>
                <div className="flex gap-3">
                  {attachments.map((src, idx) => (
                    <div
                      key={idx}
                      className="w-28 h-20 border rounded-md overflow-hidden relative"
                    >
                      <Image
                        src={src}
                        alt={`Attachment ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline">Mark as resolved</Button>
              <Button className="bg-orange hover:bg-orange-600 text-white">
                Escalated to Admin
              </Button>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
