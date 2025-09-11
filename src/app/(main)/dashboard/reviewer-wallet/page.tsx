import React from 'react'
import ReviewerWalletTable from './_components/reviewer-wallet-tabel'
import ReviewerWalletOverView from './_components/reviewer-wallet-overview'

export default function ReviwerWallet() {
    return (
        <div className='flex flex-col gap-5 mb-44 sm:mb-16'>
            <ReviewerWalletOverView />
            <ReviewerWalletTable />
        </div>
    )
}
