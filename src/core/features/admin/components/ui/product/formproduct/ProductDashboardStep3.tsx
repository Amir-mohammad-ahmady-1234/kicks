import { Button } from "@/core/components/shadcn/ui/button";
import { listitems } from "@/core/features/admin/assets/mock/listitems";
import { ProductDashboardStep3Ts } from "@/core/features/admin/assets/types/Products";

function ProductDashboardStep3({ setSizes, sizes }: ProductDashboardStep3Ts) {
  function toggleSize(size: string) {
    setSizes((prev) => {
      if (prev.includes(size)) {
        return prev.filter((s) => s !== size);
      }
      return [...prev, size];
    });
  }

  const SelectItem = (size: string) => sizes.includes(size);

  return (
    <div className="space-y-4 p-2">
      <div>
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {listitems.map((size) => (
            <Button
              key={size}
              variant={SelectItem(size) ? "default" : "outline"}
              size="sm"
              type="button"
              className={`h-9 text-sm font-medium transition-all ${
                SelectItem(size)
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                  : "hover:bg-muted/50"
              }`}
              onClick={() => toggleSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <Button type="submit" className="w-full mt-6">
        Create Product
      </Button>
    </div>
  );
}

export default ProductDashboardStep3;
