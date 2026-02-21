import ContactPage from "@/core/features/main/components/ui/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
  description:
    "Get in touch with Kicks! Contact us for questions, support, or feedback about your favorite shoes and orders.",
};

export default function Page() {
  return <ContactPage />;
}
