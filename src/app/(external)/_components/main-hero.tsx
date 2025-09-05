import React from 'react';

import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <div className='bg-[url("/images/webp/hero-bg.webp")] bg_main_hero bg-cover object-cover pb-1 relative overflow-clip'>
            <Image src={"/images/svg/hero.svg"} width={1367} height={798} alt='hero' className='absolute top-0 z-10 pointer-events-none left-1/2 -translate-x-1/2 w-full' />
            <span className='w-full h-20 md:h-24 lg:h-28 xl:h-[120px] block bg-white absolute bottom-0 z-20'></span>
            <div className="max-w-[1240px] relative z-30 mx-auto px-4 xl:px-0 pt-14 md:pt-16 lg:pt-[75px]">
                <h1 className='max-w-[863px] mx-auto text-3xl md:text-[40px] lg:text-[46px] xl:text-[50px] font-medium text-center text-black !font-inter'>Get Verified Reviews for Your Book or Product or Earn by Writing Them.</h1>
                <p className='max-w-[693px] mx-auto text-center text-black/65 text-sm md:text-base font-normal py-4 lg:py-5'>A minimalist marketplace connecting buyers and vetted reviewers. Secure, escrow-protected, and streamlined.</p>
                <div className="flex justify-center gap-4 md:gap-5 py-6 lg:py-7 xl:pb-9">
                    <button className='py-2.5 md:py-3 px-5 lg:px-6 text-white bg-orange duration-300 hover:bg-black hover:border-black font-medium !font-inter text-sm md:text-base border border-orange rounded-[10px] cursor-pointer'>Get Started</button>
                    <button className='py-2.5 md:py-3 px-5 lg:px-6 text-orange bg-white duration-300 hover:bg-black hover:border-black font-medium !font-inter text-sm md:text-base border border-orange rounded-[10px] cursor-pointer'>Learn More</button>
                </div>
                <Image src={"/images/webp/hero-dashboard.webp"} width={910} height={542} alt='hero-dashboard' className='mx-auto shadow-[0_4px_9px_0_rgba(0,0,0,0.05)] rounded-xl max-w-[910px] w-full' />
            </div>
        </div>
    )
}

export default Hero
