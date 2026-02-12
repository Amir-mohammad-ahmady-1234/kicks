import { Button } from "@/core/components/shadcn/ui/button";
import { Loader2 } from "lucide-react";

function SubmitProductEdit({ router, submitting }) {
  return (
    <div className="flex justify-end gap-4">
      <Button
        type="button"
        variant="outline"
        onClick={() => router.back()}
        disabled={submitting}
      >
        Cancel
      </Button>
      <Button type="submit" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            Updating...
          </>
        ) : (
          "Update Product"
        )}
      </Button>
    </div>
  );
}

export default SubmitProductEdit;
