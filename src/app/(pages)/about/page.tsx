import AboutPage from "@/core/features/main/components/ui/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
  description:
    "Learn more about Kicks – our story, mission, and dedication to bringing you the latest sneakers and shoes for men and women.",
};

export default function Page() {
  return <AboutPage />;
}
