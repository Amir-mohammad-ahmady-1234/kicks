import getImageUrl from "@/core/api-route/admin/handlers/order/getImageUrl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";
import { Loader2, UploadCloud } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function BoxUploaderImage({
  title = "Product Image",
  setImageUrl,
}: {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  title?: string;
}) {
  const [isUploading, setIsUploading] = useState(false);

  async function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      toast.loading("Uploading image...", { id: "upload" });

      const url = await getImageUrl(file);

      if (url.success && url.imageUrl) {
        setImageUrl(url.imageUrl);
        toast.success("Image uploaded successfully", { id: "upload" });
      } else {
        toast.error("Failed to upload image", { id: "upload" });
      }
    } catch {
      toast.error("Error uploading image", { id: "upload" });
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 text-center hover:border-primary transition cursor-pointer">
          {!isUploading && (
            <div className="bg-muted p-4 rounded-full mb-4">
              <UploadCloud className="h-6 w-6 text-muted-foreground" />
            </div>
          )}

          <input
            onChange={(e) => handleChangeImage(e)}
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />

          {isUploading && (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default BoxUploaderImage;
