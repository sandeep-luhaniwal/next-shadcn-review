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
import { CircleCheckBig, X } from "lucide-react"
import Image from "next/image"

type Job = {
    id: number
    title: string
    price: number
    deadline: number
    slots: number
}

interface ApplyJobProps {
    open: boolean
    onClose: () => void
    job: Job | null
    selectedFiles: File[]
    onFileChange: (files: File[]) => void
    coverMessage: string
    onMessageChange: (message: string) => void
}

const MyJobSubmittedWork: React.FC<ApplyJobProps> = ({
    open,
    onClose,
    job,
    selectedFiles,
    onFileChange,
    coverMessage,
    onMessageChange,
}) => {
    const [previewImage, setPreviewImage] = useState<string | null>(null)

    if (!job) return null

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files)
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
                <DialogContent className="sm:max-w-[750px] max-h-[90vh] overflow-y-auto rounded-xl">
                    <DialogHeader>
                        <DialogTitle className="font-semibold text-lg text-left">
                            Submit Your Work
                        </DialogTitle>
                        <div className="bg-orange/10 rounded-md p-3 md:p-3.5 mt-3 text-sm">
                            <p className="font-semibold text-sm">Requirements:</p>
                            <p className="text-xs flex gap-2 pt-2">
                                <CircleCheckBig className="text-green-500" />
                                Looking for an honest, detailed review of this popular self-help book.
                                Must be at least 500 words and include specific examples.
                            </p>
                        </div>
                    </DialogHeader>

                    {/* Review Text */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold">Review Text <span className="text-orange">*</span></label>
                        <Textarea
                            className="mt-1 resize-none h-[180px] text-sm"
                            value={coverMessage}
                            placeholder="Enter your detailed review here..."
                            onChange={(e) => onMessageChange(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            {coverMessage.length} characters
                        </p>
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold">Additional Files (Optional)</label>
                        <div
                            className="border border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center text-sm text-muted-foreground"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                                e.preventDefault()
                                const files = Array.from(e.dataTransfer.files)
                                const updatedFiles = [...selectedFiles, ...files].slice(0, 8)
                                onFileChange(updatedFiles)
                            }}
                        >
                            <input
                                type="file"
                                multiple
                                className="hidden"
                                id={`fileInput-${job.id}`}
                                onChange={handleFileChange}
                            />
                            <p>Drag and drop files here, or click to select</p>
                            <Button
                                variant="link"
                                className="text-button-orange cursor-pointer mt-2"
                                onClick={() =>
                                    document.getElementById(`fileInput-${job.id}`)?.click()
                                }
                            >
                                Browse Files
                            </Button>
                        </div>

                        {/* Preview Selected Files */}
                        {selectedFiles.length > 0 && (
                            <div className="grid grid-cols-4 gap-3 mt-3">
                                {selectedFiles.map((file, index) => {
                                    const imageUrl = URL.createObjectURL(file)
                                    return (
                                        <div
                                            key={index}
                                            className="relative border rounded p-1 flex justify-center items-center group"
                                        >
                                            <button
                                                onClick={() => handleRemoveImage(index)}
                                                className="absolute cursor-pointer top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                                            >
                                                <X size={14} />
                                            </button>
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

                    <DialogFooter className="mt-6 flex justify-between">
                        <Button variant="outline" className="cursor-pointer" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button className="bg-button-orange cursor-pointer">
                            Submit Work
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
                <DialogContent className="sm:max-w-[900px] max-h-[90vh] flex flex-col justify-center">
                    <DialogHeader>
                        <DialogTitle className="sr-only">Image Preview</DialogTitle>
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

export default MyJobSubmittedWork
