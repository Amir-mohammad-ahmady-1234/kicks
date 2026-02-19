import {
  TypographyH3,
  TypographyMuted,
} from "@/core/components/custom/ui/Typography";

function ErrorProfilePage({ result }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <TypographyH3 className="text-2xl font-bold mb-4">
          Error loading profile
        </TypographyH3>
        <TypographyMuted className="text-gray-500">
          {result.error || "Please try again later"}
        </TypographyMuted>
      </div>
    </div>
  );
}

export default ErrorProfilePage;
