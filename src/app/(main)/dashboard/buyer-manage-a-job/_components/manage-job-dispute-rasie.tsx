"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Job = {
    id: number;
    name: string;
    rating: number;
    jobs: number;
    success: string;
    applied: string;
    message: string;
    image: string;
};


interface ApplyJobProps {
    open: boolean
    onClose: () => void
    job: Job | null
    selectedFiles: File[]
    onFileChange: (files: File[]) => void
    coverMessage: string
    onMessageChange: (message: string) => void
}


const ManageJobDisputeRaise: React.FC<ApplyJobProps> = ({
    open,
    onClose,
    job,
    selectedFiles,
    onFileChange,
    coverMessage,
    onMessageChange,
}) => {
    const [previewImage, setPreviewImage] = useState<string | null>(null) // full image preview

    if (!job) return null

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files).filter((file) =>
                ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(file.type)
            )
            const updatedFiles = [...selectedFiles, ...files].slice(0, 8)
            onFileChange(updatedFiles)
        }
    }

    const handleRemoveImage = (index: number) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index)
        onFileChange(updatedFiles)
    }

    return (
        <>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="font-semibold text-base text-left">
                            Raise a Dispute
                        </DialogTitle>
                    </DialogHeader>
                    {/* Dropdown Select (Reason for dispute) */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold">Reason</label>
                        <Select>
                            <SelectTrigger className="w-full cursor-pointer">
                                <SelectValue placeholder="Select a reason" />
                            </SelectTrigger>
                            <SelectContent className="animate-in fade-in-50 zoom-in-95">
                                <SelectItem className="cursor-pointer" value="late-delivery">Late Delivery</SelectItem>
                                <SelectItem className="cursor-pointer" value="low-quality">Poor Quality Work</SelectItem>
                                <SelectItem className="cursor-pointer" value="wrong-delivery">Wrong Delivery</SelectItem>
                                <SelectItem className="cursor-pointer" value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Textarea */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold">Dispute Description</label>
                        <Textarea
                            className="mt-1 !text-xs resize-none h-[88px] overscroll-auto font-normal"
                            value={coverMessage}
                            placeholder="Explain full issue in detail"
                            onChange={(e) => onMessageChange(e.target.value)}
                            rows={5}
                        />
                    </div>

                    {/* File Upload + Preview */}
                    <div className="space-y-2">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="hidden"
                            id={`fileInput-${job.id}`}
                            onChange={handleFileChange}
                        />
                        {/* Preview Selected Images */}
                        {selectedFiles.length > 0 && (
                            <div className="grid grid-cols-4 gap-2 mt-2">
                                {selectedFiles.map((file, index) => {
                                    const imageUrl = URL.createObjectURL(file)
                                    return (
                                        <div
                                            key={index}
                                            className="relative border rounded p-1 flex justify-center items-center group"
                                        >
                                            {/* Remove Button */}
                                            <button
                                                onClick={() => handleRemoveImage(index)}
                                                className="absolute cursor-pointer top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                                            >
                                                <X size={14} />
                                            </button>

                                            {/* Click to open full preview */}
                                            <img
                                                src={imageUrl}
                                                alt={`preview-${index}`}
                                                className="w-full h-20 object-cover rounded cursor-pointer"
                                                onClick={() => setPreviewImage(imageUrl)}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>

                    <DialogFooter>
                        <div className="gap-2 flex flex-col md:flex-row justify-between w-full">
                            <div className="flex flex-col md:flex-row md:items-center gap-3">
                                <Button
                                    variant="outline"
                                    className="cursor-pointer bg-button-orange/10"
                                    onClick={() =>
                                        document.getElementById(`fileInput-${job.id}`)?.click()
                                    }
                                >
                                    Attach File
                                </Button>
                                <span className="text-sm text-muted-foreground font-normal">
                                    *Screenshots, invoices, proofs
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:flex gap-2">
                                <Button variant="outline" className="cursor-pointer md:max-w-max w-full" onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button className="bg-button-orange flex gap-2 md:max-w-max items-center w-full cursor-pointer">
                                    Submit Dispute
                                </Button>
                            </div>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
                <DialogContent className="sm:max-w-[900px] max-h-[90vh] flex flex-col justify-center">
                    <DialogHeader>
                        <DialogTitle className="!text-left"></DialogTitle>
                    </DialogHeader>
                    {previewImage && (
                        <div className="flex justify-center items-center w-full h-full">
                            <Image
                                width={500}
                                height={500}
                                src={previewImage}
                                alt="full-preview"
                                className="max-w-full max-h-[80vh] object-contain"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>

        </>
    )
}

export default ManageJobDisputeRaise
