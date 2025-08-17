import React from 'react';

import Link from 'next/link';

import Icons from './ui-icons';

const ContactForm: React.FC = () => {
    return (
        <div id='contact' className='bg-white'>
            <div className="max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-7 items-center">
                    <div className="">
                        <p className='uppercase text-black/65 text-sm md:text-base font-medium !font-inter'>WE’RE HERE TO HELP YOU</p>
                        <h2 className='font-medium !font-inter xl:pr-20 leading-110 py-3 lg:py-4 text-black text-3xl md:text-4xl lg:text-5xl'>Reach Out Anytime for Assistance, Feedback or Collaboration</h2>
                        <p className='uppercase text-black/65 text-sm md:text-base font-normal'>Your experience matters to us. Let’s connect and make it even better.</p>
                        <div className="pt-5 md:pt-6 lg:pt-7 flex gap-3 md:gap-4">
                            <Icons icon={"email"} />
                            <div className="">
                                <p className='text-black/65 text-sm md:text-base font-normal'>E-mail</p>
                                <Link href={'mailto:support@reviewmarketplace.com'} className='text-black/65 hover:text-black duration-300 text-sm md:text-base font-medium !font-inter'>support@reviewmarketplace.com</Link>
                            </div>
                        </div>
                    </div>
                    <form className="p-5 flex flex-col gap-4 lg:gap-5">
                        <div className="flex flex-col gap-1 lg:gap-1.5">
                            <label htmlFor="fullname" className='text-gray text-sm md:text-base font-normal'>Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                placeholder='Enter your full name'
                                className='border-[0.5px] hover:border-orange duration-300 border-black/30 bg-black/5 lg:p-[13px] cursor-pointer text-black/65 rounded-lg outline-none p-2 text-sm md:text-base'
                            />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5">
                            <div className="flex flex-col gap-1 lg:gap-1.5">
                                <label htmlFor="email" className='text-gray text-sm md:text-base font-normal'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Enter your email address'
                                    className='border-[0.5px] hover:border-orange duration-300 border-black/30 bg-black/5 lg:p-[13px] cursor-pointer text-black/65 rounded-lg outline-none p-2 text-sm md:text-base'
                                />
                            </div>
                            <div className="flex flex-col gap-1 lg:gap-1.5">
                                <label htmlFor="subject" className='text-gray text-sm md:text-base font-normal'>Subject</label>
                                <select
                                    id="subject"
                                    className='border-[0.5px] hover:border-orange duration-300 border-black/30 bg-black/5 lg:p-[16px] cursor-pointer text-black/65 rounded-lg outline-none p-2.5 text-sm md:text-base'
                                >
                                    <option className='border-[0.5px] hover:border-orange duration-300 border-black/30 bg-black/5 lg:p-[13px] cursor-pointer text-black/65 rounded-lg outline-none p-2 text-sm md:text-base'>Billing inquiry</option>
                                    <option className='border-[0.5px] hover:border-orange duration-300 border-black/30 bg-black/5 lg:p-[13px] cursor-pointer text-black/65 rounded-lg outline-none p-2 text-sm md:text-base'>Technical support</option>
                                    <option className='border-[0.5px] hover:border-orange duration-300 border-black/30 bg-black/5 lg:p-[13px] cursor-pointer text-black/65 rounded-lg outline-none p-2 text-sm md:text-base'>General question</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 lg:gap-1.5">
                            <label htmlFor="message" className='text-gray text-sm md:text-base font-normal'>Message</label>
                            <textarea
                                id="message"
                                placeholder='Enter message'
                                className='border-[0.5px] hover:border-orange duration-300 border-black/30 bg-black/5 lg:p-[13px] cursor-pointer text-black/65 rounded-lg outline-none p-2 text-sm md:text-base h-28 resize-none'
                            />
                        </div>
                        <button className='border border-orange bg-orange text-white rounded-lg py-2.5 md:py-3 px-6 md:px-7 lg:px-8 max-w-max cursor-pointer hover:bg-white hover:text-orange duration-300'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm