import ReviewerHero from "./_components/reviewer-hero";
import ReviewerTabel from "./_components/reviewer-tabel";

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6 mb-44 md:mb-16">
      <ReviewerHero />
      <ReviewerTabel />
    </div>
  );
}
