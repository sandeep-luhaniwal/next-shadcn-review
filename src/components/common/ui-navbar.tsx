"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Icons from './ui-icons'

// 1. Type the component as a React Functional Component
const NavBar: React.FC = () => {
    // 2. Specify the type for the state (though TypeScript can infer this, being explicit is clearer)
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    useEffect(() => {
        // This effect correctly locks and unlocks body scroll when the mobile menu is open
        if (isNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup function to reset the overflow style when the component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [isNavOpen]);

    // 3. Add types for the function's parameters
    //    e: The mouse event from clicking an anchor tag
    //    id: The string for the selector (e.g., "#how_it_work")
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.querySelector(id);
        if (target) {
            // Calculate the position with a fixed offset (80px from the top)
            const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
        // Close the mobile navigation after clicking a link
        setIsNavOpen(false);
    };

    return (
        <div className='bg-white border-b sticky top-0 z-[1000] border-black/10'>
            <div className="max-w-[1240px] relative z-40 mx-auto px-4 xl:px-0 py-4 flex justify-between items-center">
                <Link href="/">
                    <Image src="/images/webp/main-logo.webp" alt="Logo" width={156} height={61} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-5 md:gap-6 lg:gap-7">
                    <a onClick={(e) => handleScroll(e, "#how_it_work")} href="#how_it_work" className='flex gap-2.5 duration-300 hover:text-orange group items-center text-black text-sm !font-inter'>
                        <Icons icon={'howitwork'} />
                        How it Works
                    </a>
                    <a onClick={(e) => handleScroll(e, "#contact")} href="#contact" className='flex gap-2.5 duration-300 hover:text-orange group items-center text-black text-sm !font-inter'>
                        <Icons icon={'contact'} />
                        Contact Us
                    </a>
                </div>

                <div className="hidden md:flex gap-4 md:gap-5">
                    <Link href="/auth/v1/login" className='py-2.5 md:py-3 px-5 text-orange bg-white duration-300 hover:bg-black hover:border-black font-medium !font-inter text-sm md:text-base border border-orange rounded-[10px] cursor-pointer'>Sign In</Link>
                    <Link href="/auth/v1/register" className='py-2.5 md:py-3 px-4 text-white bg-orange duration-300 hover:bg-black hover:border-black font-medium !font-inter text-sm md:text-base border border-orange rounded-[10px] cursor-pointer'>Create Account</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div onClick={() => setIsNavOpen(!isNavOpen)} className='md:hidden'>
                    {isNavOpen ? <Icons icon={'cross'} /> : <Icons icon={'menuToggel'} />}
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`flex md:hidden flex-col z-10 bg-white w-full px-5 gap-5 fixed ${isNavOpen ? 'top-[94px]' : '-top-full'} h-full duration-300 left-0`}>
                <a onClick={(e) => handleScroll(e, "#how_it_work")} href="#how_it_work" className='flex pt-6 gap-2.5 duration-300 hover:text-orange group items-center text-black text-sm !font-inter'>
                    <Icons icon={'howitwork'} />
                    How it Works
                </a>
                <a onClick={(e) => handleScroll(e, "#contact")} href="#contact" className='flex gap-2.5 duration-300 hover:text-orange group items-center text-black text-sm !font-inter'>
                    <Icons icon={'contact'} />
                    Contact Us
                </a>
                <Link href="/auth/v1/login" onClick={() => setIsNavOpen(false)} className='py-2.5 md:py-3 max-w-max px-5 text-orange bg-white duration-300 hover:bg-black hover:border-black font-medium !font-inter text-sm md:text-base border border-orange rounded-[10px] cursor-pointer'>Sign In</Link>
                <Link href="/auth/v1/register" onClick={() => setIsNavOpen(false)} className='py-2.5 md:py-3 max-w-max px-4 text-white bg-orange duration-300 hover:bg-black hover:border-black font-medium !font-inter text-sm md:text-base border border-orange rounded-[10px] cursor-pointer'>Create Account</Link>
            </div>
        </div>
    )
}

export default NavBar