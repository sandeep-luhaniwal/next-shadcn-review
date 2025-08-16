"use client";
import React, { useState } from "react";
import Icons from "../common/Icons";

interface FaqItem {
    question: string;
    answer: string;
}
const Faq: React.FC = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [openTab, setOpenTab] = useState<"buyers" | "reviewers">("buyers");

    // 4. Apply the FaqItem type to your data arrays
    const buyersFaqs: FaqItem[] = [
        {
            question: "How does escrow protect me?",
            answer:
                "All payments are held securely in escrow from the moment a reviewer is accepted. Funds are released only after you approve the submitted proof and review. If the work doesn’t meet your requirements, you can open a dispute before payment is released.",
        },
        {
            question: "How does the process work from start to finish?",
            answer:
                "You sign up, create a job with your exact requirements, and deposit the payment upfront. Once reviewers apply, you can accept or reject them. When the reviewer submits proof, you approve or dispute it. Upon approval, escrow releases payment to the reviewer.",
        },
        {
            question: "What can I request reviews for?",
            answer:
                "Any Amazon product — physical goods or books. You define the exact requirements, keywords, and type of proof reviewers must submit before payment is approved.",
        },
        {
            question: "Is my personal information safe?",
            answer:
                "Yes. We never request or store personal information other than your email address, which is used solely for authentication. Your email is securely stored and never shared with third parties.",
        },
        {
            question: "Can I choose who reviews my product?",
            answer:
                "Yes. You can manually review applications and select reviewers based on their profiles, ratings, and previous work.",
        },
        {
            question: "Can I order multiple reviews for the same product?",
            answer:
                "Yes. You can request bulk orders, such as 100 reviews for a single product, fulfilled by multiple reviewers or one capable of bulk work.",
        },
        {
            question: "What payment methods are supported?",
            answer:
                "We work exclusively with cryptocurrency — USDT or USDC — for all transactions.",
        },
        {
            question: "What happens if a reviewer doesn’t meet my requirements?",
            answer:
                "You can reject the review and open a dispute. Our mediation team will assess the evidence from both sides and decide a fair outcome.",
        },
    ];

    const reviewersFaqs: FaqItem[] = [
        {
            question: "How does escrow protect me?",
            answer:
                "Your payment is secured in escrow as soon as the buyer accepts you for a job. Funds are released automatically once the buyer approves your submitted proof and review.",
        },
        {
            question: "How do I get paid?",
            answer:
                "After completing a job and getting approval, your payment is available in your account balance. To withdraw, submit a withdrawal request — funds are sent to your cryptocurrency wallet in USDT or USDC.",
        },
        {
            question: "When is my payment released?",
            answer:
                "Only after the buyer approves your work. If the buyer doesn’t approve and you believe you met the requirements, you can open a dispute.",
        },
        {
            question: "What proof do I need to submit?",
            answer:
                "Follow the buyer’s requirements exactly. This may include keyword buyouts, screenshots, receipts, or any specific proof listed in the job description.",
        },
        {
            question: "Are my personal details safe?",
            answer:
                "Yes. We do not collect or store any personal information other than your email for authentication. All communication happens within the platform.",
        },
        {
            question: "What happens if there is a dispute?",
            answer:
                "If the buyer claims your work is unsatisfactory, the funds stay in escrow until our dispute team reviews the case and issues a fair resolution.",
        },
        {
            question: "How can I increase my earnings?",
            answer:
                "Deliver high-quality work consistently to build your reputation. A higher reputation unlocks access to higher-paying jobs and platform perks over time.",
        },
        {
            question: "Can I apply to multiple jobs at once?",
            answer:
                "Yes. You can apply to as many open jobs as you wish, provided you meet the requirements and can deliver on time.",
        },
    ];

    // 5. Type the function's parameter
    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // TypeScript infers the types for these variables correctly from the typed arrays above
    const currentFaqs = openTab === "buyers" ? buyersFaqs : reviewersFaqs;
    const leftColumn = currentFaqs.filter((_, i) => i % 2 === 0);
    const rightColumn = currentFaqs.filter((_, i) => i % 2 !== 0);

    return (
        <div className="bg-[#FAFBFF]">
            <div className="max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20">
                <div className="max-w-[587px] mx-auto flex flex-col gap-3 lg:gap-4">
                    <h2 className="font-medium text-center !font-inter leading-110 text-black text-3xl md:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-center text-black/65 text-sm md:text-base font-normal">
                        Answers about escrow, payments, privacy, and process for buyers and reviewers
                    </p>
                </div>

                <div className="flex justify-center py-6 lg:py-7">
                    <div className="bg-white p-2.5 flex gap-5 max-w-max rounded-[10px] shadow-[0_4px_9px_0_rgba(0,0,0,0.05)]">
                        <button
                            onClick={() => {
                                setOpenTab("buyers");
                                setOpenIndex(null); // Reset open index when switching tabs
                            }}
                            className={`px-4 md:px-5 py-2.5 rounded-[10px] font-medium ${
                                openTab === "buyers" ? "bg-orange text-white" : "bg-white text-black"
                            }`}
                        >
                            For Buyers
                        </button>
                        <button
                            onClick={() => {
                                setOpenTab("reviewers");
                                setOpenIndex(null); // Reset open index when switching tabs
                            }}
                            className={`px-4 md:px-5 py-2.5 rounded-[10px] font-medium ${
                                openTab === "reviewers" ? "bg-orange text-white" : "bg-white text-black"
                            }`}
                        >
                            For Reviewers
                        </button>
                    </div>
                </div>

                <div className="md:p-10 lg:p-12 xl:p-[50px]">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 xl:gap-x-[30px]">
                        <div className="flex flex-col gap-4 lg:gap-5 flex-1">
                            {leftColumn.map((faq, idx) => {
                                const actualIndex = idx * 2;
                                return (
                                    <div
                                        key={actualIndex}
                                        className="bg-white p-4 lg:p-5 border border-black/30 rounded-[10px]"
                                    >
                                        <button
                                            className="cursor-pointer flex gap-5 w-full text-base md:text-lg font-medium !font-inter focus:outline-none"
                                            onClick={() => toggleFaq(actualIndex)}
                                        >
                                            <span className="text-xl">
                                                {openIndex === actualIndex ? <Icons icon={"negative"} /> : <Icons icon={"plus"} />}
                                            </span>
                                            <span className="text-left">{faq.question}</span>
                                        </button>
                                        {openIndex === actualIndex && (
                                            <div className="ps-11 pt-2.5 text-black/65 text-sm lg:text-base">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col gap-4 lg:gap-5 flex-1">
                            {rightColumn.map((faq, idx) => {
                                const actualIndex = idx * 2 + 1;
                                return (
                                    <div
                                        key={actualIndex}
                                        className="bg-white p-4 lg:p-5 border border-black/30 rounded-[10px]"
                                    >
                                        <button
                                            className="cursor-pointer w-full flex gap-5 text-base md:text-lg font-medium !font-inter focus:outline-none"
                                            onClick={() => toggleFaq(actualIndex)}
                                        >
                                            <span className="text-xl">
                                                {openIndex === actualIndex ? <Icons icon={"negative"} /> : <Icons icon={"plus"} />}
                                            </span>
                                            <span className="text-left">{faq.question}</span>
                                        </button>
                                        {openIndex === actualIndex && (
                                            <div className="ps-11 pt-2.5 text-black/65 text-sm lg:text-base">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;