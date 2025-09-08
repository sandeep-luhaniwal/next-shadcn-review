import React from 'react'

const BookReview = () => {
    return (
        <div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                <h2 className="text-xl font-semibold">Product  - Book Review</h2>
                <p className='font-semibold text-base text-muted-foreground'>Created 8/25/2025</p>
            </div>
            <div className="flex flex-wrap gap-y-2 gap-4 py-4">
                <span className="flex text-muted-foreground text-sm items-center gap-1">💲 5 per review</span>
                <span className="flex text-muted-foreground text-sm items-center gap-1">📝 10 reviews</span>
                <span className="flex text-muted-foreground text-sm items-center gap-1">💰 Total Budget: $50</span>
                <span className="flex text-muted-foreground text-sm items-center gap-1">📦 21 Aug 2025</span>

            </div>
        </div>
    )
}

export default BookReview