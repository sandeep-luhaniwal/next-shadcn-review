"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const ImageShowFull = () => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const images = [
        "/images/webp/hero-dashboard.webp",
        "/images/webp/hero-dashboard.webp",
        "/images/webp/hero-dashboard.webp",
        "/images/webp/hero-dashboard.webp",
    ];

    return (
        <>
            {/* Image List */}
            <div className="flex gap-2 flex-wrap">
                {images.map((img, idx) => (
                    <Image
                        key={idx}
                        width={73}
                        height={56}
                        alt={`submitted image ${idx}`}
                        src={img}
                        className="border rounded cursor-pointer"
                        onClick={() => setPreviewImage(img)}
                    />
                ))}
            </div>

            {/* Dialog */}
            <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
                <DialogContent className="sm:max-w-[700px] max-h-[90vh] flex flex-col justify-center">
                    {previewImage && (
                        <div className="flex justify-center items-center w-full h-full">
                            <Image
                                width={600}
                                height={600}
                                src={previewImage}
                                alt="full-preview"
                                className="max-w-full max-h-[90vh] object-contain"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ImageShowFull;
