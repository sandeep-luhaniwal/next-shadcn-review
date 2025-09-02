import React from 'react'
import BuyerCard from './_components/buyer-card'
import BuyerTable from './_components/buyer-tabel'

export default function page() {
  return (
    <div className='flex flex-col gap-6 lg:gap-7'>
      <BuyerCard />
      <BuyerTable />
    </div>
  )
}
