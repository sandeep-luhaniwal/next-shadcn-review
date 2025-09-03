import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon, Info } from 'lucide-react'
import React from 'react'
import Icons from './ui-icons'

const JobPreview: React.FC = () => {
    return (
        <div className='font-segoeui flex flex-col gap-5'>
            <Card>
                <CardHeader className="pb-2 gap-4">
                    <CardTitle className='text-sm flex gap-2 items-center font-normal'>
                        <Info className="h-4 w-4" />
                        Job Preview
                    </CardTitle>
                    <CardContent className="space-y-4 !px-0">
                        <div className='flex flex-col gap-0.5'>
                            <span className='text-off-gray text-xs'>Budget per Review</span>
                            <p className='text-base font-semibold'>$5</p>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <span className='text-off-gray text-xs'>Number of Reviews</span>
                            <p className='text-base font-semibold'>$10</p>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <span className='text-off-gray text-xs'>Deadline</span>
                            <p className='text-base font-semibold'>14 days</p>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <span className='text-off-gray text-xs'>Platform Fee (10%)</span>
                            <p className='text-base font-semibold'>$5.00</p>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <span className='text-off-gray text-xs'>Est. Applications</span>
                            <p className='text-base font-semibold'>22</p>
                        </div>

                    </CardContent>
                    <CardFooter className="border-t !pt-4 block !px-0">
                        <span className='text-off-gray text-xs'>Total Cost</span>
                        <p className="text-orange text-lg font-bold">$55.00</p>
                    </CardFooter>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader className="gap-4 lg:gap-7">
                    <CardTitle className='text-sm flex gap-2 items-center font-normal'>
                        <Icons icon='greentick' />
                        Tips for Success
                    </CardTitle>
                    <CardContent className="space-y-2 !px-0">
                        <div className='flex gap-2.5'>
                            <div className='pt-1.5'>
                                <Icons icon='greendot' />
                            </div>
                            <p className='text-foreground text-xs font-normal'>Use the exact ASIN from Amazon's product page</p>
                        </div>
                        <div className='flex gap-2.5'>
                            <div className='pt-1.5'>
                                <Icons icon='greendot' />
                            </div>
                            <p className='text-foreground text-xs font-normal'>Be specific about requirements and review length</p>
                        </div>
                        <div className='flex gap-2.5'>
                            <div className='pt-1.5'>
                                <Icons icon='greendot' />
                            </div>
                            <p className='text-foreground text-xs font-normal'>Higher budgets attract better Reviewss</p>
                        </div>
                        <div className='flex gap-2.5'>
                            <div className='pt-1.5'>
                                <Icons icon='greendot' />
                            </div>
                            <p className='text-foreground text-xs font-normal'>Urgent jobs get priority placement</p>
                        </div>
                        <div className='flex gap-2.5'>
                            <div className='pt-1.5'>
                                <Icons icon='greendot' />
                            </div>
                            <p className='text-foreground text-xs font-normal'>Auto-approve speeds up the process</p>
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
            <Card className='border-[#FFA2A2] bg-[#FEF2F2]'>
                <CardHeader className='flex gap-3.5'>
                    <div className='pt-1.5'>
                        <Icons icon='notice' />
                    </div>
                    <div className='flex flex-col gap-2.5'>
                        <p className='text-sm font-semibold text-[#82181A]'>⚠️ Important Notice</p>
                        <p className='text-sm font-semibold leading-160 text-[#82181A]'>
                            Jobs cannot be edited after posting. Please
                            carefully review all details, budget,
                            requirements, and settings before
                            submitting your job.
                        </p>
                    </div>
                </CardHeader>
            </Card>
            <Card className='border-[#BEDBFF] bg-[#EFF6FF]'>
                <CardHeader className='flex gap-3.5'>
                    <div className='pt-1'>
                        <Icons icon='finding' />
                    </div>
                    <div className='flex flex-col gap-2.5'>
                        <p className='text-sm font-semibold text-[#1447E6]'>Finding Your ASIN</p>
                        <p className='text-xs leading-160 text-[#1447E6]'>
                            On Amazon, scroll down to "Product details" section
                            and look for "ASIN: B07RJZH3DL" (10 characters
                            starting with B for most products).
                        </p>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}

export default JobPreview