"use client"
import Link from 'next/link'
import React from 'react'
import { useUser } from '../user-type-context';
import { Card } from '@/components/ui/card';

const WalletData: React.FC = () => {
    const { userType } = useUser();
    const walletHref =
        userType === "buyer"
            ? "/dashboard/buyer-wallet"
            : "/dashboard/reviewer-wallet";

    return (
        <Link href={walletHref} className="hidden sm:flex">
            <Card className="!p-2 text-xs font-medium rounded-[8px] xl:me-6 xl:ms-2">$120.50</Card>
        </Link>
    )
}

export default WalletData