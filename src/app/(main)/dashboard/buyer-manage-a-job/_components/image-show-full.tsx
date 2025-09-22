"use client";

import * as React from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const ImageShowFull = () => {
    const [previewOpen, setPreviewOpen] = React.useState(false);
    const [startIndex, setStartIndex] = React.useState(0);

    const images = [
        "/images/webp/hero-dashboard.webp",
        "/images/webp/hero-dashboard.webp",
        "/images/webp/hero-dashboard.webp",
        "/images/webp/hero-dashboard.webp",
    ];

    return (
        <>
            {/* Image Thumbnails */}
            <div className="flex gap-2 flex-wrap">
                {images.map((img, idx) => (
                    <Image
                        key={idx}
                        width={73}
                        height={56}
                        alt={`submitted image ${idx}`}
                        src={img}
                        className="border rounded cursor-pointer"
                        onClick={() => {
                            setStartIndex(idx);
                            setPreviewOpen(true);
                        }}
                    />
                ))}
            </div>

            {/* Dialog with Carousel */}
            <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
                <DialogContent className="sm:max-w-[700px] lg:max-w-[800px] max-h-[90vh] flex flex-col justify-center">
                    <Carousel
                        opts={{
                            startIndex: startIndex,
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {images.map((img, idx) => (
                                <CarouselItem key={idx} className="flex justify-center">
                                    <Image
                                        src={img}
                                        alt={`preview ${idx}`}
                                        width={700}
                                        height={600}
                                        className="max-h-[80vh] object-contain rounded"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ImageShowFull;
