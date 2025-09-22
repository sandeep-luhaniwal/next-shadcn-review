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

// ✅ Toast
import { useToast } from "@/components/ui/use-toast";

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
    country: z.string().min(1, { message: "Country is required." }),
    title: z.string().min(3, { message: "title must be at least 3 characters." }),
    type: z.string().min(1, { message: "Please select a type." }),
    asin: z.string().min(10, { message: "ASIN must be at least 10 characters." }),
    requirements: z.string().optional(),
    keywords: z.string().optional(),
    budget: z.string().min(1, { message: "Budget is required." }),
    reviews: z.string().min(1, { message: "Number of reviews is required." }),
    buyback: z.string().optional(),
    deadline: z.string().min(1, { message: "Deadline is required." }),
});


const countries = [
    { code: "US", label: "United States", url: "amazon.com" },
    { code: "CA", label: "Canada", url: "amazon.ca" },
    { code: "MX", label: "Mexico", url: "amazon.com.mx" },
    { code: "UK", label: "United Kingdom", url: "amazon.co.uk" },
    { code: "DE", label: "Germany", url: "amazon.de" },
    { code: "FR", label: "France", url: "amazon.fr" },
    { code: "IT", label: "Italy", url: "amazon.it" },
    { code: "ES", label: "Spain", url: "amazon.es" },
    { code: "NL", label: "Netherlands", url: "amazon.nl" },
    { code: "SE", label: "Sweden", url: "amazon.se" },
    { code: "PL", label: "Poland", url: "amazon.pl" },
    { code: "JP", label: "Japan", url: "amazon.co.jp" },
    { code: "IN", label: "India", url: "amazon.in" },
    { code: "SG", label: "Singapore", url: "amazon.sg" },
    { code: "AU", label: "Australia", url: "amazon.com.au" },
];

export function Basicinformation() {
    const [trustScore, setTrustScore] = useState<number[]>([0.0]);
    const [autoApprove, setAutoApprove] = useState<boolean>(false);
    const [bulkApplications, setBulkApplications] = useState<boolean>(true);
    const [allowNewUsers, setAllowNewUsers] = useState<boolean>(false);
    const [keywordsList, setKeywordsList] = useState<string[]>([]);

    const { toast } = useToast();

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

        // ✅ Success Toast
        toast({
            title: "Job Posted 🎉",
            description: "Your job has been posted successfully!",
        });

        // ✅ Reset Form
        form.reset({
            title: "",
            type: "",
            asin: "",
            requirements: "",
            keywords: "",
            budget: "",
            reviews: "",
            buyback: "",
            deadline: "",
        });

        // ✅ Reset extra states
        setTrustScore([1.0]);
        setAutoApprove(false);
        setBulkApplications(true);
        setAllowNewUsers(false);
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
                                {/* Country */}
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Country *</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full cursor-pointer !bg-gray-white-off">
                                                        <SelectValue placeholder="Select a country" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {countries.map((c) => (
                                                        <SelectItem className="cursor-pointer" key={c.code} value={c.code}>
                                                            <div className="flex items-center gap-2">
                                                                <img
                                                                    src={`https://flagcdn.com/24x18/${c.code.toLowerCase()}.png`}
                                                                    alt={c.label}
                                                                    className="w-5 h-4 object-cover rounded-sm border"
                                                                />
                                                                <span>{c.label}</span>
                                                                <span className="text-xs text-muted-foreground">({c.url})</span>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* Title */}
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title *</FormLabel>
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
                                <div className="flex flex-col gap-0.5">
                                    <FormField
                                        control={form.control}
                                        name="asin"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>ASIN (Amazon Standard Identification Number) *</FormLabel>
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
                                    <p className="text-[10px] text-muted-foreground">Find this on the product's Amazon page in the product details section</p>

                                </div>
                                {/* Requirements */}
                                <FormField
                                    control={form.control}
                                    name="requirements"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Requirements</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    id="requirements"
                                                    className="h-[84px] !bg-gray-white-off resize-none"
                                                    placeholder="Please read the full product/book carefully. Write an honest, original review in your own words. Include at least 3 key points 
you liked or didn't like. Do not copy from other sources. Minimum 100 words. Submit only after you've completed the review 
fully."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Keywords */}
                                {/* Keywords */}
                                <FormField
                                    control={form.control}
                                    name="keywords"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Keywords</FormLabel>
                                            <FormControl>
                                                <div className="flex flex-wrap items-center gap-2 p-2 border rounded-md !bg-gray-white-off">
                                                    {/* Show Added Keywords */}
                                                    {keywordsList.map((keyword, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-2 py-1 bg-button-orange/15 font-medium text-button-orange text-sm rounded-md flex items-center gap-1"
                                                        >
                                                            {keyword}
                                                            <button
                                                                type="button"
                                                                className="text-xs text-button-orange cursor-pointer hover:text-foreground"
                                                                onClick={() =>
                                                                    setKeywordsList((prev) => prev.filter((_, i) => i !== index))
                                                                }
                                                            >
                                                                ✕
                                                            </button>
                                                        </span>
                                                    ))}

                                                    {/* Input Field for New Keyword */}
                                                    <input
                                                        type="text"
                                                        placeholder="Type & press Enter"
                                                        className="flex-1 bg-transparent outline-none text-sm"
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
                                                                e.preventDefault();
                                                                const newKeyword = e.currentTarget.value.trim();
                                                                setKeywordsList((prev) => [...prev, newKeyword]);
                                                                form.setValue("keywords", [...keywordsList, newKeyword].join(","));
                                                                e.currentTarget.value = "";
                                                            }
                                                        }}
                                                    />
                                                </div>
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
                                            <FormLabel>Buyback Price + Taxes ($)</FormLabel>
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
                                <CardTitle className="text-lg font-semibold">Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-5">
                                <div>
                                    <Label>Minimum Trust Score: {trustScore}</Label>
                                    <Slider
                                        defaultValue={[0]}
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
