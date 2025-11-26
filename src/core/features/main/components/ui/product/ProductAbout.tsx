import { TypographyP } from "@/core/components/custom/ui/Typography";
import {
  CardContent,
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";

export default function ProductAbout({ product }) {
  return (
    <Card className="bg-background/50">
      <CardHeader>
        <CardTitle>About the product</CardTitle>
      </CardHeader>

      <CardContent>
        <TypographyP className="text-sm text-muted-foreground">
          {product.about}
        </TypographyP>

        <ul className="mt-3 text-sm space-y-1 text-muted-foreground">
          <li>
            This product is excluded from all promotional discounts and offers.
          </li>
          <li>
            Pay over time in interest-free installments with Affirm, Klarna or
            Afterpay.
          </li>
          <li>
            Join adiClub to get unlimited free standard shipping, returns, &
            exchanges.
          </li>
        </ul>
      </CardContent>

      <CardFooter />
    </Card>
  );
}
