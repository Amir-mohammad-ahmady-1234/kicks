"use client";
import TabelData from "@/core/components/custom/blocks/tabel/TabelData";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { formatDate } from "@/core/utils/formatDate";
import { BlogItemType, TabelBlogsTs } from "../../../assets/types/BlogTypes";

function TabelBlogs({ ShowFilter, data, pagination }: TabelBlogsTs) {
  const tableItems = (data ?? []).map((blog) => ({
    id: blog.id,
    title: blog.title,
    excerpt: blog.excerpt,
    Image: blog.Image,
    fallback: blog.title.slice(0, 3).toUpperCase(),
    author: blog.author,
    category: blog.category,
    publishedAt: formatDate(blog.createdAt),
    status:
      blog.status === "PUBLISHED"
        ? "published"
        : blog.status === "DRAFT"
          ? "draft"
          : "archived",
    tags: blog.tags.join(", "),
  }));

  const blogCategories = [
    { item: "Guide" },
    { item: "Fashion & Trends" },
    { item: "Care Guide" },
    { item: "Sports" },
    { item: "News" },
    { item: "Product Review" },
  ];

  return (
    <TabelData<BlogItemType>
      ShowFilter={ShowFilter}
      ShowMoreFilter={true}
      pagination={pagination}
      Data={tableItems}
      TextPlaceholder={"Search articles..."}
      Columns={[
        {
          key: "Image",
          label: "Article",
          render: (_, row) => (
            <div className="flex items-center gap-3">
              <ImgNormalCustom
                src={
                  row.Image ||
                  "https://placehold.jp/80x80.png?css=%7B%22border-radius%22%3A%2215px%22%7D?text=blog"
                }
                alt={row.title}
                width={80}
                height={80}
                unoptimized={true}
              />
              <div>
                <div className="font-medium">{row.title}</div>
                <span className="text-muted-foreground text-xs block mt-0.5 line-clamp-1 max-w-75">
                  {row.excerpt}
                </span>
              </div>
            </div>
          ),
        },
        {
          key: "author",
          label: "Author",
          render: (_, row) => <span className="font-medium">{row.author}</span>,
        },
        {
          key: "category",
          label: "Category",
        },
        {
          key: "publishedAt",
          label: "Published Date",
        },
        {
          key: "status",
          label: "Status",
          render: (_, row) => {
            const statusColors = {
              published:
                "text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs",
              draft:
                "text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full text-xs",
              archived:
                "text-gray-600 bg-gray-50 px-2 py-1 rounded-full text-xs",
            };
            return (
              <span
                className={
                  statusColors[row.status as keyof typeof statusColors]
                }
              >
                {row.status === "published"
                  ? "Published"
                  : row.status === "draft"
                    ? "Draft"
                    : "Archived"}
              </span>
            );
          },
        },
      ]}
      ShowActions={true}
      CheckboxTabel={true}
      ShowImage={true}
      TableTextHead={["Title", "Author", "Category", "Date", "Status"]}
      ItemsCategory={blogCategories}
      ItemsGender={[]}
      ItemsSize={[]}
    />
  );
}

export default TabelBlogs;
