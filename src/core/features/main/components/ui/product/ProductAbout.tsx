import { TypographyP } from "@/core/components/custom/ui/Typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";
import ProductRating from "@/core/utils/handleRating";

export default function ProductAbout({ product, pid }) {
  return (
    <Card className="bg-background/50">
      <CardHeader>
        <CardTitle>About the product</CardTitle>
      </CardHeader>

      <CardContent>
        <TypographyP className="text-sm text-muted-foreground">
          {product.description}
        </TypographyP>

        <ul className="mt-3 text-sm space-y-1 text-muted-foreground">
          <li>{product.specs}</li>
        </ul>
        <ProductRating pid={pid} />
      </CardContent>
      <CardFooter />
    </Card>
  );
}
