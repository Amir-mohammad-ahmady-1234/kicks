import getImageUrl from "@/core/api-route/admin/handlers/order/getImageUrl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";
import { UploadCloud } from "lucide-react";

function ProductEditImage({
  setImageUrl,
  imageUrl,
}: {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  imageUrl: string;
}) {
  async function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files[0];
    if (!file) return;

    const url = await getImageUrl(file);
    setImageUrl(url.imageUrl);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Image</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 text-center hover:border-primary transition cursor-pointer">
          <div className="bg-muted p-4 rounded-full mb-4">
            <UploadCloud className="h-6 w-6 text-muted-foreground" />
          </div>

          {imageUrl ? (
            <p className="text-sm font-medium">{imageUrl}</p>
          ) : (
            <>
              <p className="text-sm font-medium">
                Click to upload or drag & drop
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PNG, JPG, WEBP (Max 1MB)
              </p>
            </>
          )}

          <input
            onChange={(e) => handleChangeImage(e)}
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductEditImage;
