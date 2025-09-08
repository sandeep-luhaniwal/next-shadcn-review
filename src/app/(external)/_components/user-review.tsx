import React from 'react';

import Icons from './ui-icons';

interface ReviewCard {
    icons: string; // Assuming 'icons' is a string identifier for your Icons component
    title: string;
    description: string;
};

const REVIEWS_CARDS_LIST: ReviewCard[] = [
    {
        icons: "lock",
        title: "Privacy Protection",
        description: "No personal information is shared or stored. All communication stays within our platform.",
    },
    {
        icons: "wait",
        title: "Dispute Support",
        description: "If expectations aren’t met, open a dispute and our team will mediate for a fair outcome.",
    },
    {
        icons: "secure",
        title: "Secure Escrow Transactions",
        description: "No scams or fraud. All payments are held securely in escrow until you approve the review.",
    },
    {
        icons: "target",
        title: "Targeted Review Requests",
        description: "Create tasks with specific requirements (e.g., keywords, product type) to get the exact reviews you need.",
    },
    {
        icons: "user",
        title: "Choose Your Reviewers",
        description: "Select reviewers based on their profiles, past work, and ratings.",
    },
    {
        icons: "proof",
        title: "Proof & Approval",
        description: "Reviewers submit proof (e.g., keyword buyout, receipt); you approve before payout.",
    },
]

const UserReview: React.FC = () => {
    return (
        <div className='bg-[#FFF7F8]'>
            <div className="max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-7 items-center pb-5 md:pb-6 lg:pb-0">
                    <div className="">
                        <h2 className='font-medium !font-inter xl:pr-20 leading-110 py-3 lg:py-4 text-black text-3xl md:text-4xl lg:text-5xl'>Everything You Need to Buy or Sell Reviews - Safely</h2>
                        <p className='uppercase text-black/65 text-sm md:text-base font-normal'>From escrow payments to dispute resolution, our platform is built to protect and empower every user.</p>
                    </div>

                    <div className="flex lg:justify-end">
                        <div className="bg-white p-2.5 flex flex-col sm:flex-row gap-2 sm:gap-5 sm:items-center w-full justify-between lg:max-w-max rounded-[10px] shadow-[0_4px_9px_0_rgba(0,0,0,0.05)]">
                            <p className='text-[#191A15] font-medium text-sm md:text-base !font-inter'>For Buyers (Author & Seller)</p>
                            <button className='text-white px-4 md:px-5 py-2.5 bg-orange leading-160 rounded-[10px]'>For Reviewers</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 xl:gap-[30px] pt-5 md:pt-6 lg:pt-7">
                    {REVIEWS_CARDS_LIST.map((obj, i) => {
                        return (
                            <div key={i} className="bg-white rounded-[10px] flex p-4 lg:p-5 gap-3 lg:gap-4">
                                <div className="max-w-max w-full">
                                    <Icons icon={obj.icons} />
                                </div>
                                <div className="gap-2 flex flex-col">
                                    <h3 className='text-black text-base lg:text-md font-medium !font-inter'>{obj.title}</h3>
                                    <p className='text-sm md:text-base text-black/65 leading-110 font-normal'>{obj.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserReview