"use client";
import { TypographyP } from "@/core/components/custom/ui/Typography";
import { Textarea } from "@/core/components/shadcn/ui/textarea";
import BoxUploaderImage from "../product/edite/ProductEditImage";

function BlogDashboardStep2({ values, setValues }) {
  const handleImageUpload = (imageUrl: string) => {
    setValues({ ...values, Image: imageUrl });
  };
  return (
    <div className="space-y-4 p-2">
      <BoxUploaderImage setImageUrl={handleImageUpload} />

      <div className="space-y-2">
        <TypographyP>Excerpt</TypographyP>
        <Textarea
          id="excerpt"
          name="excerpt"
          value={values.excerpt}
          onChange={(e) => setValues({ ...values, excerpt: e.target.value })}
          placeholder="Brief summary of the article..."
          rows={3}
        />
      </div>
    </div>
  );
}

export default BlogDashboardStep2;
