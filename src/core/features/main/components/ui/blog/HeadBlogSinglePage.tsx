import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { Badge } from "@/core/components/shadcn/ui/badge";

function HeadBlogSinglePage({ post }) {
  return (
    <SectionLayout>
      <div className="relative w-full max-w-5xl mx-auto mt-35 h-75 md:h-125 rounded-2xl overflow-hidden shadow-xl">
        <ImgNormalCustom
          src={post.Image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-lienar-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <Badge className="mb-3 bg-primary/90 hover:bg-primary text-white border-0 backdrop-blur-sm">
            {post.category}
          </Badge>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
            {post.title}
          </h1>
        </div>
      </div>
    </SectionLayout>
  );
}

export default HeadBlogSinglePage;
