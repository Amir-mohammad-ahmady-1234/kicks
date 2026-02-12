import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";
import { Textarea } from "@/core/components/shadcn/ui/textarea";

function ProductEditDescription({
  description,
  setDescription,
  fullDescription,
  setFullDescription,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">
            Short Description
          </label>
          <Textarea
            placeholder="Brief description of the product..."
            className="resize-none h-20"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">
            Full Description & Specifications{" "}
          </label>
          <Textarea
            placeholder="Detailed product description, specifications, features..."
            className="resize-none h-32"
            value={fullDescription}
            onChange={(e) => {
              setFullDescription(e.target.value);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductEditDescription;
