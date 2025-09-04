"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export interface Dispute {
  id?: string
  job: string
  reviewer: string
  status: string
  feedback?: string
  attachments?: string[]
  issue?: string
}

export function DisputeDetailsDialog({
  open,
  onClose,
  dispute,
}: {
  open: boolean
  onClose: () => void
  dispute: Dispute | null
}) {
  if (!dispute) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold text-left">Dispute Details</DialogTitle>
        </DialogHeader>

        {/* Top row */}
        <div className="flex items-center gap-3">
          <span className="text-orange font-semibold">
            Disputes #{dispute.id ?? "232"}
          </span>
          <span className="bg-orange/10 text-foreground text-sm px-3 py-1 rounded-lg">
            Poor quality of work
          </span>
        </div>

        {/* Feedback */}
        <div className="">
          <p className="font-medium mb-2">Feedback</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {dispute.feedback ??
              "The work you submitted does not match the product description I provided. The review feels copied and generic, instead of being written based on real product usage. Also, there are multiple grammar mistakes. Please make the review more original, detailed, and relevant to the product. I am attaching screenshots of the issues for reference."}
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Attachments</p>
          <div className="flex gap-3 flex-wrap">

            <Image
              width={73}
              height={56}
              src={'/images/png/detailsdispute.png'}
              alt={`attachment`}
              className="h-[56px] w-[73px] rounded-md border object-cover"
            />
            <Image
              width={73}
              height={56}
              src={'/images/png/detailsdispute.png'}
              alt={`attachment`}
              className="h-[56px] w-[73px] rounded-md border object-cover"
            />
            <Image
              width={73}
              height={56}
              src={'/images/png/detailsdispute.png'}
              alt={`attachment`}
              className="h-[56px] w-[73px] rounded-md border object-cover"
            />
          </div>
        </div>
        {/* Attachments */}
        {/* {dispute.attachments && dispute.attachments.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Attachments</p>
            <div className="flex gap-3 flex-wrap">
              {dispute.attachments.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`attachment-${idx}`}
                  className="h-20 w-28 rounded-md border object-cover"
                />
              ))}
            </div>
          </div>
        )} */}

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
