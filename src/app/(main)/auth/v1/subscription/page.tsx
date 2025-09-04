import Icons from "@/app/(external)/_components/ui-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function SubV1() {
    return (
        <div className="flex justify-center items-center min-h-screen p-2 sm:p-4 md:p-6 lg:p-8">
            <Card className="bg_main_hero border-none justify-center max-w-[1176px] !py-0 mx-auto w-full">
                <div className="p-2 sm:p-4 md:p-6 xl:pt-12 ">
                    <h1 className="text-center font-semibold text-xl text-[#09090B] sm:text-3xl md:text-[40px] lg:text-[48px]">Unlock Full Access with One Simple Plan</h1>
                    <p className="text-xs md:text-sm lg:text-base text-[#09090B] py-4 lg:pb-7 text-center">All features. One subscription. No hidden charges.</p>
                    <Tabs defaultValue="monthly" className="w-full flex justify-center">
                        {/* Tab Buttons */}
                        <TabsList className="bg-orange/10 rounded-full p-1 h-[40px] mx-auto">
                            <TabsTrigger
                                value="monthly"
                                className="data-[state=active]:bg-orange leading-160 data-[state=active]:text-white
                       data-[state=active]:hover:bg-orange-600 capitalize rounded-full p-2 h-[37px] font-medium text-sm
                       cursor-pointer"
                            >
                                monthly
                            </TabsTrigger>

                            <TabsTrigger
                                value="yearly"
                                className="data-[state=active]:bg-orange leading-160 data-[state=active]:text-white
                       data-[state=active]:hover:bg-orange-600 capitalize rounded-full p-2 h-[37px] font-medium text-sm
                       cursor-pointer"
                            >
                                yearly <span className="bg-orange/30 px-2.5 py-1 rounded-full text-xs font-bold">Save 35%</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="monthly" className="max-w-[557px] w-full mt-4 mx-auto border bg-white rounded-2xl shadow-sm">
                            <div className="py-4 px-2 md:p-6">
                                <p className="text-sm sm:text-base text-[#09090B] md:text-lg lg:text-xl font-medium">Premium Access</p>
                                <p className="text-2xl md:text-3xl text-[#09090B] lg:text-[36px] font-medium py-2.5">$49</p>
                                <p className="text-sm font-medium text-[#09090B]">For beginner Reviews</p>
                                <div className="gap-2 flex flex-col pt-2 pb-4 md:pb-6">
                                    <div className="flex gap-2.5">
                                        <Icons icon="flowerthick" />
                                        <p className="text-[#09090B]/60 text-sm font-medium">
                                            Unlimited Access to Features
                                        </p>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Icons icon="flowerthick" />
                                        <p className="text-[#09090B]/60 text-sm font-medium">
                                            Priority Support
                                        </p>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Icons icon="flowerthick" />
                                        <p className="text-[#09090B]/60 text-sm font-medium">
                                            Regular Updates
                                        </p>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Icons icon="flowerthick" />
                                        <p className="text-[#09090B]/60 text-sm font-medium">
                                            Early Access to New ToolsEarly Access to New Tools
                                        </p>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Icons icon="flowerthick" />
                                        <p className="text-[#09090B]/60 text-sm font-medium">
                                            Cancel Anytime
                                        </p>
                                    </div>
                                </div>
                                <Button className="bg-button-orange w-full cursor-pointer">
                                    Subscribe Now
                                </Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="yearly" className="max-w-[557px] w-full mt-4 mx-auto border bg-white rounded-2xl shadow-sm">
                            <div className="py-4 px-2 md:p-6">
                                <p className="text-sm sm:text-base text-[#09090B] md:text-lg lg:text-xl font-medium">Premium Access</p>
                                <p className="text-2xl md:text-3xl text-[#09090B] lg:text-[36px] font-medium py-2.5">$149</p>
                                <p className="text-sm font-medium text-[#09090B]">For beginner Reviews</p>
                                <div className="gap-2 flex flex-col pt-2 pb-4 md:pb-6">
                                    <div className="flex gap-2.5">
                                        <Icons icon="flowerthick" />
                                        <p className="text-[#09090B]/60 text-sm font-medium">
                                            Unlimited Access to Features
                                        </p>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Icons icon="flowerthick" />
                                        <p className="text-[#09090B]/60 text-sm font-medium">
                                            Priority Support
                                        </p>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Icons icon="flowerthick" />
                                        <p className="text-[#09090B]/60 text-sm font-medium">
                                            Regular Updates
                                        </p>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Icons icon="flowerthick" />
                                        <p className="text-[#09090B]/60 text-sm font-medium">
                                            Early Access to New ToolsEarly Access to New Tools
                                        </p>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Icons icon="flowerthick" />
                                        <p className="text-[#09090B]/60 text-sm font-medium">
                                            Cancel Anytime
                                        </p>
                                    </div>
                                </div>
                                <Button className="bg-button-orange w-full cursor-pointer">
                                    Subscribe Now
                                </Button>
                            </div>
                        </TabsContent>
                        <Link href={"/"} className="max-w-max mt-2 mx-auto text-sm font-medium">Skip Now</Link>
                    </Tabs>
                </div>

            </Card>
        </div>
    );
}
