"use client"

import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import JobDetails from "./_components/job-details"
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
]

export default function FindJobs() {
    const [budget, setBudget] = useState([5, 1000])
    const [budgetProduct, setBudgetProduct] = useState([5, 1000])
    const [reviews, setReviews] = useState([1, 100])
    const [deadline, setDeadline] = useState(14)
    const [selectedCountry, setSelectedCountry] = useState<string>("")

    return (
        <div className="flex flex-col lg:flex-row min-h-screen -mx-4 md:-mx-6 mb-40 md:mb-12">
            {/* Filters */}
            <aside className="w-full lg:w-1/3 xl:w-[27%] lg:border-r -mb-4 md:-mb-16 bg-white dark:bg-background p-4 xl:ps-10 pt-0 lg:block">
                <h2 className="font-semibold text-lg mb-2">Filters</h2>
                <div className="mb-4">
                    <Label className="text-sm leading-160 font-medium">Country</Label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                        <SelectTrigger className="w-full mt-1 cursor-pointer">
                            <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                            {countries.map((c) => (
                                <SelectItem
                                    className="cursor-pointer"
                                    key={c.code}
                                    value={c.code}
                                >
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={`https://flagcdn.com/24x18/${c.code.toLowerCase()}.png`}
                                            alt={c.label}
                                            className="w-5 h-4 object-cover rounded-sm border"
                                        />
                                        <span>{c.label}</span>
                                        <span className="text-xs text-muted-foreground">
                                            ({c.url})
                                        </span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                {/* Sort */}
                <div className="mb-4">
                    <Label className="text-sm leading-160 font-medium">Sort By</Label>
                    <Select defaultValue="newest">
                        <SelectTrigger className="w-full mt-1 cursor-pointer">
                            <SelectValue placeholder="Select sort" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem className="cursor-pointer" value="newest">Newest First</SelectItem>
                            <SelectItem className="cursor-pointer" value="oldest">Oldest First</SelectItem>
                            <SelectItem className="cursor-pointer" value="Highest">Highest Budget</SelectItem>
                            <SelectItem className="cursor-pointer" value="Lowest">Lowest Budget</SelectItem>
                            <SelectItem className="cursor-pointer" value="Shortest">Shortest Deadline</SelectItem>
                            <SelectItem className="cursor-pointer" value="Longest">Longest Deadline</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Budget */}
                <Label className="text-sm lg:text-[11px] xl:text-sm font-medium">
                    Review range (${budget[0]} - ${budget[1]})
                </Label>
                <Slider
                    defaultValue={budget}
                    max={1000}
                    min={5}
                    step={5}
                    ornagecolorline
                    onValueChange={setBudget}
                    className="my-4 cursor-pointer"
                />
                <Label className="text-sm lg:text-[11px] xl:text-sm font-medium">
                    Buyback range (${budgetProduct[0]} - ${budgetProduct[1]})
                </Label>
                <Slider
                    defaultValue={budgetProduct}
                    max={1000}
                    min={5}
                    step={5}
                    ornagecolorline
                    onValueChange={setBudgetProduct}
                    className="my-4 cursor-pointer"
                />

                {/* Job Type */}
                <div className="border-y py-4">
                    <Label className="text-sm leading-160 font-medium">Job Type</Label>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-full mt-1 cursor-pointer">
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem className="cursor-pointer" value="all">All types</SelectItem>
                            <SelectItem className="cursor-pointer" value="digital">Book</SelectItem>
                            <SelectItem className="cursor-pointer" value="physical">Product</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="py-4">
                    <Label className="text-sm leading-160 font-medium">Category</Label>
                    <Select defaultValue="digital">
                        <SelectTrigger className="w-full mt-1 cursor-pointer">
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem className="cursor-pointer" value="digital">Digital Products</SelectItem>
                            <SelectItem className="cursor-pointer" value="marketing">Marketing</SelectItem>
                            <SelectItem className="cursor-pointer" value="education">Education</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Sub Category */}
                <div className="mb-4">
                    <Label className="text-sm leading-160 font-medium">Sub-Category</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {["Marketing & Sales", "Apps", "Gadgets", "Education & Training", "Design"].map(
                            (tag) => (
                                <Badge
                                    key={tag}
                                    variant="outline"
                                    className="cursor-pointer p-2 font-medium text-xs hover:bg-button-orange hover:text-white dark:hover:bg-accent-foreground dark:hover:text-black"
                                >
                                    {tag}
                                </Badge>
                            )
                        )}
                    </div>
                </div>

                {/* Reviews */}
                <div className="border-y py-4">
                    <Label className="text-sm leading-160 font-medium">
                        Reviews Required ({reviews[0]} - {reviews[1]})
                    </Label>
                    <Slider
                        defaultValue={reviews}
                        max={100}
                        min={1}
                        step={1}
                        ornagecolorline
                        onValueChange={setReviews}
                        className="my-4 cursor-pointer"
                    />
                    {/* Deadline */}
                    <Label className="text-sm leading-160 font-medium mt-1">Max Deadline: {deadline} days</Label>
                    <Slider
                        defaultValue={[deadline]}
                        max={30}
                        min={1}
                        step={1}
                        ornagecolorline
                        onValueChange={(v) => setDeadline(v[0])}
                        className="my-4 cursor-pointer"
                    />
                </div>
                {/* Switches */}
                <div className="space-y-3 pt-4">
                    {[
                        "Auto-approve Only",
                        "New User Friendly",
                        "Bulk Applications",
                        "Urgent Jobs Only",
                        "Hide High Trust Score",
                    ].map((label) => (
                        <div key={label} className="flex items-center justify-between">
                            <Label className="font-medium text-sm">{label}</Label>
                            <Switch className="cursor-pointer" />
                        </div>
                    ))}
                </div>
            </aside>

            {/* Jobs */}
            <JobDetails />
        </div>
    )
}
