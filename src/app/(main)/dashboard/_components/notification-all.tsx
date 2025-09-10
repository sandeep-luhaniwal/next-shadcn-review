"use client"
import { Badge } from '@/components/ui/badge'
import { Bell } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from './user-type-context'

const NotificationNav = () => {
    const { userType } = useUser();
    const router = useRouter();

    const handleClick = () => {
        if (userType === 'buyer') {
            router.push('/dashboard/buyer-notification');
        } else if (userType === 'reviewer') {
            router.push('/dashboard/reviewer-notification');
        }
    }

    return (
        <div className="relative" onClick={handleClick}>
            <Bell className="h-4 w-4 cursor-pointer" />
            <Badge className="rounded-full absolute cursor-pointer -top-1.5 -end-0.5 p-0 h-3 w-3 text-[8px]" variant="destructive">1</Badge>
        </div>
    )
}

export default NotificationNav
