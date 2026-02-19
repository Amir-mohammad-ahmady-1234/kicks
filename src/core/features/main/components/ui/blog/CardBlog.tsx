import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { formatDate } from "@/core/utils/formatDate";
import { Calendar, ChevronRight, User } from "lucide-react";
import Link from "next/link";

function CardBlog({ blog }) {
  return (
    <>
      <Link href={`blog/${blog.slug}`} className="block overflow-hidden">
        <div className="relative h-56 w-full overflow-hidden">
          <ImgNormalCustom
            src={blog.Image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {blog.category}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {blog.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(blog.createdAt)}
          </span>
        </div>

        <Link href={`blog/${blog.slug}`}>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {blog.excerpt}
        </p>

        <Link
          href={`blog/${blog.slug}`}
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Read More
          <ChevronRight />
        </Link>
      </div>
    </>
  );
}

export default CardBlog;
