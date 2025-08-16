import NavBar from "@/components/common/ui-navbar";
import Hero from "@/components/home/main-hero";
import HowItWork from "@/components/home/how-it-work";
import UserReview from "@/components/home/user-review";
import JobPost from "@/components/home/job-post";
import Faq from "@/components/home/faq-list";
import ContactForm from "@/components/home/contact-form";
import UiFooter from "@/components/common/ui-footer";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <HowItWork />
            <UserReview />
            <JobPost />
            <Faq />
            <ContactForm />
            <UiFooter />
        </>
    );
}
