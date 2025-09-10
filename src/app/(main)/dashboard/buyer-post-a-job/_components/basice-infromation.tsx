"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import JobPreview from "./job-preview";

// ✅ Form libs
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";

// ✅ Validation schema
const formSchema = z.object({
    title: z.string().min(3, { message: "Job title must be at least 3 characters." }),
    type: z.string().min(1, { message: "Please select a type." }),
    asin: z.string().min(10, { message: "ASIN must be at least 10 characters." }),
    requirements: z.string().min(50, { message: "Requirements must be at least 50 characters." }),
    keywords: z.string().min(3, { message: "Please enter at least 1 keyword." }),
    budget: z.string().min(1, { message: "Budget is required." }),
    reviews: z.string().min(1, { message: "Number of reviews is required." }),
    buyback: z.string().optional(),
    deadline: z.string().min(1, { message: "Deadline is required." }),
});

export function Basicinformation() {
    const [trustScore, setTrustScore] = useState<number[]>([1.0]);
    const [autoApprove, setAutoApprove] = useState<boolean>(false);
    const [bulkApplications, setBulkApplications] = useState<boolean>(true);
    const [allowNewUsers, setAllowNewUsers] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            type: "",
            asin: "",
            requirements: "",
            keywords: "",
            budget: "",
            reviews: "",
            buyback: "",
            deadline: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("✅ Submitted Data:", data);
    };

    return (
        <div className="grid font-segoeui grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7">
            <div className="flex flex-col gap-5 order-2 lg:order-1">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                        {/* Basic Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-semibold text-lg">Basic Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Job Title */}
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Job Title *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="title"
                                                    className="!bg-gray-white-off"
                                                    placeholder="e.g., Review my productivity book on Amazon"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Type */}
                                <FormField
                                    control={form.control}
                                    name="type"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Type *</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full cursor-pointer !bg-gray-white-off">
                                                        <SelectValue placeholder="Select a type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="book">Book</SelectItem>
                                                    <SelectItem value="product">Product</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* ASIN */}
                                <FormField
                                    control={form.control}
                                    name="asin"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>ASIN *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="asin"
                                                    className="!bg-gray-white-off"
                                                    placeholder="e.g., B0792HCFTG"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Requirements */}
                                <FormField
                                    control={form.control}
                                    name="requirements"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Requirements *</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    id="requirements"
                                                    className="h-[84px] !bg-gray-white-off resize-none"
                                                    placeholder="Minimum 100 words review..."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Keywords */}
                                <FormField
                                    control={form.control}
                                    name="keywords"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Keywords *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="keywords"
                                                    className="!bg-gray-white-off"
                                                    placeholder="Enter product-related keywords"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        {/* Budget & Reviews */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-semibold text-lg">Budget & Reviews</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Budget */}
                                <FormField
                                    control={form.control}
                                    name="budget"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Budget per Review *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="budget"
                                                    type="number"
                                                    className="!bg-gray-white-off"
                                                    placeholder="4"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Reviews */}
                                <FormField
                                    control={form.control}
                                    name="reviews"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Number of Reviews *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="reviews"
                                                    type="number"
                                                    className="!bg-gray-white-off"
                                                    placeholder="10"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Buyback */}
                                <FormField
                                    control={form.control}
                                    name="buyback"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Buyback Price + Taxes ($)*</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="buyback"
                                                    type="number"
                                                    className="!bg-gray-white-off"
                                                    placeholder="0"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Deadline */}
                                <FormField
                                    control={form.control}
                                    name="deadline"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Deadline (Days) *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="deadline"
                                                    type="number"
                                                    className="!bg-gray-white-off"
                                                    placeholder="14"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Urgent */}
                                <div className="flex items-center sm:col-span-2 gap-2">
                                    <Switch id="urgent" className="cursor-pointer" />
                                    <Label htmlFor="urgent" className="flex items-center gap-2 text-xs font-normal">
                                        <span className="text-[14px] w-3.5">⚡</span> Mark as urgent (+20% fee)
                                    </Label>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Reviewer Settings (unchanged UI) */}
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Reviews Requirements & Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-5">
                                <div>
                                    <Label>Minimum Trust Score: {trustScore}</Label>
                                    <Slider
                                        defaultValue={[1]}
                                        max={5}
                                        min={0}
                                        step={0.5}
                                        value={trustScore}
                                        onValueChange={setTrustScore}
                                        className="mt-2 bg-secondary"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                        <span>0.0</span>
                                        <span>5.0</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Switch checked={autoApprove} onCheckedChange={setAutoApprove} />
                                    <Label className="text-xs font-semibold">Auto-approve applications</Label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Switch checked={bulkApplications} onCheckedChange={setBulkApplications} />
                                    <Label className="text-xs font-semibold">Allow bulk applications</Label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Switch checked={allowNewUsers} onCheckedChange={setAllowNewUsers} />
                                    <Label className="text-xs font-semibold">Allow new users to apply</Label>
                                </div>

                                <div className="p-3 border border-[#FFF085] rounded-md bg-[#FEFCE8] text-[12.3px] text-[#894B00]">
                                    <span className="font-bold text-[#894B00]">Note:</span> This job will only be visible to users with an established trust score.
                                </div>
                            </CardContent>
                        </Card>

                        {/* Submit */}
                        <Button type="submit" size="lg" className="bg-button-orange cursor-pointer w-full font-semibold">
                            + Post Job
                        </Button>
                    </form>
                </Form>
            </div>

            {/* Preview */}
            <div className="order-1 lg:order-2">
                <JobPreview />
            </div>
        </div>
    );
}
