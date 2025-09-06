import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Icons from "./_components/ui-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Billingpage() {
    return (
        <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-base font-semibold">Billing Settings</p>
            <div className="sm:max-w-[600px] w-full flex flex-col sm:flex-row gap-6 md:gap-7">
                <div className="sm:max-w-[380px] w-full">
                    <Card className="shadow-none">
                        <CardHeader className="space-y-4">
                            <Badge className="max-w-max py-1 px-2 bg-button-orange">
                                Current Plan
                            </Badge>
                            <div className="flex flex-col gap-2.5">
                                <p className="text-base md:text-lg lg:text-xl font-medium text-foreground">Premium Access</p>
                                <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium">$49</p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <p className="text-sm font-medium text-foreground">For beginner Reviews</p>
                            <p className="flex items-center gap-2 text-foreground/60 text-sm font-medium">
                                <span>
                                    <Icons icon="flowertick" />
                                </span>
                                Unlimited Access to Features
                            </p>
                            <p className="flex items-center gap-2 text-foreground/60 text-sm font-medium">
                                <span>
                                    <Icons icon="flowertick" />
                                </span>
                                Priority Support
                            </p>
                            <p className="flex items-center gap-2 text-foreground/60 text-sm font-medium">
                                <span>
                                    <Icons icon="flowertick" />
                                </span>
                                Regular Updates
                            </p>
                            <p className="flex items-center gap-2 text-foreground/60 text-sm font-medium">
                                <span>
                                    <Icons icon="flowertick" />
                                </span>
                                Early Access to New Tools
                            </p>
                            <p className="flex items-center gap-2 text-foreground/60 text-sm font-medium">
                                <span>
                                    <Icons icon="flowertick" />
                                </span>
                                Cancel Anytime
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-button-orange w-full cursor-pointer">
                                Cancel Plan
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="sm:max-w-[193px] w-full">
                    <div className="flex items-center gap-1.5">
                        <p className="text-base md:text-lg lg:text-xl text-foreground font-medium">Payment Method</p>
                        <Image src={'/images/png/payment-method.png'} width={22} height={22} alt="paymentmehtod" />
                    </div>
                    <p className="text-foreground/60 font-medium text-sm">Renews on 18 Sep 2025</p>
                </div>
            </div>
        </div>
    );
}
