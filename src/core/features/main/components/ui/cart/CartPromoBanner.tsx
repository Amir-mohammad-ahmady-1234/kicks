import {
  TypographyH3,
  TypographyP,
} from "@/core/components/custom/ui/Typography";

export default function CartPromoBanner() {
  return (
    <div className="mb-8 space-y-2">
      <TypographyH3>Saving to celebrate</TypographyH3>
      <TypographyP className="text-muted-foreground">
        Enjoy up to 60% off thousands of styles during the End of Year sale —
        while supplies last. No code needed.
      </TypographyP>
      <TypographyP className="text-sm text-muted-foreground">
        Join us or Sign in
      </TypographyP>
    </div>
  );
}
