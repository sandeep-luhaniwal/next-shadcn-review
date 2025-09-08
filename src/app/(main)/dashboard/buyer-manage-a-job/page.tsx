import { Card } from "@/components/ui/card";
import BookReview from "./_components/book-review";
import ManageAccrodion from "./_components/manage-accordion";

export default function Page(): JSX.Element {

    return (
        <Card className="flex flex-col p-4 md:p-5 lg:p-6">
            <BookReview />
            <ManageAccrodion />
        </Card>
    );
}
