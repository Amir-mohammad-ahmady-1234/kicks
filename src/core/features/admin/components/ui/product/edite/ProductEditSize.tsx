import { Badge } from "@/core/components/shadcn/ui/badge";
import { Button } from "@/core/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/shadcn/ui/select";
import { Plus, X } from "lucide-react";
import { listitems } from "../formproduct/ProductDashboardStep3";
function ProductEditSize({
  setNewSize,
  selectedSizes,
  handleAddSize,
  newSize,
  handleRemoveSize,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sizes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Select onValueChange={setNewSize}>
            <SelectTrigger className="w-50">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {listitems.map((size) => (
                <SelectItem
                  key={size}
                  value={size}
                  disabled={selectedSizes.includes(size)}
                >
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="button" onClick={handleAddSize} disabled={!newSize}>
            <Plus className="h-4 w-4 mr-2" />
            Add Size
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {selectedSizes.map((size) => (
            <Badge key={size} variant="secondary" className="px-3 py-1.5">
              {size}
              <button
                type="button"
                onClick={() => handleRemoveSize(size)}
                className="ml-2 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {selectedSizes.length === 0 && (
            <p className="text-sm text-muted-foreground">No sizes selected</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductEditSize;
