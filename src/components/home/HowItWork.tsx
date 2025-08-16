import React from 'react'
import Icons from '../common/Icons'

const HowItWork: React.FC = () => {
    return (
        <div id='how_it_work' className='bg-white'>
            <div className="max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20">
                <div className="max-w-[712px] mx-auto flex flex-col gap-3 lg:gap-4">
                    <h2 className='font-medium text-center !font-inter leading-110 text-black text-3xl md:text-4xl lg:text-5xl'>How It Works - Simple, Secure, Seamless</h2>
                    <p className='text-center text-black/65 text-sm md:text-base font-normal'>From posting jobs to getting paid, our step-by-step process ensures transparency, trust, and smooth collaboration between buyers and reviewers.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[50px] lg:gap-[60px] pt-6 lg:pt-7">
                    <div className="p-4 lg:p-5 flex flex-col justify-center items-center">
                        <Icons icon={"blackBox"} />
                        <h3 className='text-black text-base md:text-lg lg:text-xl text-center font-medium py-4 lg:py-5 !font-outfit'>Subscribe & Create Account</h3>
                        <p className='text-center text-black/65 text-sm md:text-base font-normal'>Sign up for a buyer or reviewer account with verified identity and secure payment setup.</p>
                    </div>
                    <div className="p-4 lg:p-5 flex flex-col justify-center items-center relative">
                        <span className='absolute w-[1px] h-[calc(100%-24px)] border-l hidden top-1/2 -translate-y-1/2 lg:-left-[30px] custom-dotted lg:block'></span>
                        <span className='absolute w-[1px] h-[calc(100%-24px)] border-l hidden top-1/2 -translate-y-1/2 lg:-right-[30px] custom-dotted lg:block'></span>
                        <Icons icon={"blackBox"} />
                        <h3 className='text-black text-base md:text-lg lg:text-xl text-center font-medium py-4 lg:py-5 !font-outfit'>Post Jobs or Apply</h3>
                        <p className='text-center text-black/65 text-sm md:text-base font-normal'>Buyers post review jobs with requirements. Reviewers browse and apply to matching opportunities.</p>
                    </div>
                    <div className="p-4 lg:p-5 flex flex-col justify-center items-center">
                        <Icons icon={"blackBox"} />
                        <h3 className='text-black text-base md:text-lg lg:text-xl text-center font-medium py-4 lg:py-5 !font-outfit'>Deliver & Get Paid</h3>
                        <p className='text-center text-black/65 text-sm md:text-base font-normal'>Complete work with proof submission. Secure escrow releases payment upon approval.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork