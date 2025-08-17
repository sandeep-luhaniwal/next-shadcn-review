import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface FooterLink {
    name: string;
    url: string;
};

interface FooterSection {
    title: string;
    links: FooterLink[]; // This is an array of the FooterLink type
};

const footerLinks: FooterSection[] = [
    {
        title: 'Quick Links',
        links: [
            { name: 'Home', url: '/' },
            { name: 'How it Works', url: '/how-it-works' },
            { name: 'Affiliate Program', url: '/affiliate' },
            { name: 'Services', url: '/services' },
            { name: 'Testimonials', url: '/testimonials' },
        ],
    },
    {
        title: 'For Buyers',
        links: [
            { name: 'Post a Job', url: '/post-job' },
            { name: 'Buyer Guide', url: '/buyer-guide' },
            { name: 'Buyer Terms', url: '/buyer-terms' },
        ],
    },
    {
        title: 'For Reviewers',
        links: [
            { name: 'Find Jobs', url: '/find-jobs' },
            { name: 'Reviewer Guide', url: '/reviewer-guide' },
            { name: 'Reviewer Terms', url: '/reviewer-terms' },
        ],
    },
]

const UiFooter: React.FC = () => {
    return (
        <div className='bg-black'>
            <div className="max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20 flex flex-col md:flex-row md:justify-between gap-10">
                <div className="flex flex-col md:flex-row justify-between w-full xl:gap-[180px]">
                    <div className="max-w-[348px] md:gap-2 w-full">
                        <Image alt='page-logo' width={188} height={74} src={"/images/webp/page-logo.webp"} />
                        <p className='text-white text-sm leading-110 pt-5 md:pt-6 lg:pt-7'>
                            The most secure way to buy and sell reviews, with transparency and trust.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:flex justify-between md:max-w-max pt-8 md:pt-0 gap-8 lg:gap-[100px] w-full xl:gap-[180px]">
                        {footerLinks.map((section, i) => (
                            <div key={i} className='max-w-max justify-between'>
                                <p className="text-white font-inter font-medium text-base md:text-lg leading-110">{section.title}</p>
                                <div className="flex flex-col gap-4 md:gap-5 pt-5 md:pt-6 lg:pt-7">
                                    {section.links.map((link, idx) => (
                                        <Link key={idx}
                                            href={link.url}
                                            className="text-white/60 leading-110 !font-inter duration-300 hover:text-white cursor-pointer text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p className='py-2.5 px-4 text-center text-white text-sm tracking-wide'>©2025 Review Marketplace. All rights reserved.</p>
        </div>
    )
}

export default UiFooter