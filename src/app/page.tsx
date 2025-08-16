import NavBar from "@/components/common/NavBar";
import UiFooter from "@/components/common/UiFooter";
import ContactForm from "@/components/home/ContactForm";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import HowItWork from "@/components/home/HowItWork";
import JobPost from "@/components/home/JobPost";
import Reviews from "@/components/home/Reviews";


export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <HowItWork />
            <Reviews />
            <JobPost />
            <Faq />
            <ContactForm />
            <UiFooter />
        </>
    );
}
