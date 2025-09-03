import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'
const NOTIFICATION_LIST = [
    {
        title: "Review applicants",
        date: 'today',
        heading: "You have 5 applicants for Job #JOB-210",
    },
    {
        title: "Thread",
        date: 'today',
        heading: "New update in dispute for Job #JOB-175 (App Store Review Optimization).",
    },
    {
        title: "Job",
        date: 'Yesterday',
        heading: "Reviews has submitted delivery for Job #JOB-198 (Laptop Review).",
    },
    {
        title: "Review applicants",
        date: 'Yesterday',
        heading: "You have 125 applicants for Job #JOB-879",
    },
    {
        title: "Review applicants",
        date: 'Yesterday',
        heading: "You have 125 applicants for Job #JOB-879",
    },
    {
        title: "Review applicants",
        date: 'Yesterday',
        heading: "You have 125 applicants for Job #JOB-879",
    },
]

export default function buyerpage() {
    return (
        <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-base font-semibold">Needs your attention (6)</p>

            {NOTIFICATION_LIST.map((obj, i) => {
                return (
                    <Card key={i} className='lg:py-5'>
                        <CardHeader>
                            <div className='flex justify-between items-center'>
                                <p className='border px-2 py-1 bg-[#F5F5F5] font-medium text-xs rounded-[4px] text-muted-foreground'>{obj.title}</p>
                                <p className="font-semibold text-sm rounded-[4px] text-muted-foreground capitalize">{obj.date}</p>
                            </div>
                            <p className='text-base font-semibold'>{obj.heading}</p>
                        </CardHeader>
                    </Card>
                )
            })}
        </div>
    )
}
