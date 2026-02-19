import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { TypographyBig } from "@/core/components/custom/ui/Typography";

function HeadBlog() {
  return (
    <SectionLayout>
      <TypographyBig className="tracking-widest mb-6 mt-35">
        OUR <span className="text-primary">BLOG</span>
      </TypographyBig>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Discover the latest trends, tips, and stories from the world of footwear
      </p>
    </SectionLayout>
  );
}

export default HeadBlog;
