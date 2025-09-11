import React from 'react'
import WalletBuyerTable from './_components/buyer-wallet-table'
import BuyerWalletOverView from './_components/buyer-wallet-overview'

export default function page() {
    return (
        <div className='flex flex-col gap-5 mb-44 sm:mb-16'>
            <BuyerWalletOverView/>
            <WalletBuyerTable />
        </div>
    )
}
