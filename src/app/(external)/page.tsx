import ContactForm from "./_components/contact-form";
import Faq from "./_components/faq-list";
import HowItWork from "./_components/how-it-work";
import Hero from "./_components/main-hero";
import UiFooter from "./_components/ui-footer";
import NavBar from "./_components/ui-navbar";
import UserReview from "./_components/user-review";

export default function Home() {
  return <>
    <NavBar />
    <Hero />
    <HowItWork />
    <UserReview />
    <Faq />
    <ContactForm />
    <UiFooter />
  </>;
}
