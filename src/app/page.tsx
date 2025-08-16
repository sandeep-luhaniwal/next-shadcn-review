
import UiFooter from "@/components/common/ui-footer";
import NavBar from "@/components/common/ui-navbar";
import ContactForm from "@/components/home/contact-form";
import Faq from "@/components/home/faq-list";
import Hero from "@/components/home/main-hero";
import HowItWork from "@/components/home/how-it-work";
import JobPost from "@/components/home/job-post";
import UserReview from "@/components/home/user-review";


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
