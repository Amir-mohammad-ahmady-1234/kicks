"use client";
import { TypographyP } from "@/core/components/custom/ui/Typography";
import { Input } from "@/core/components/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/shadcn/ui/select";
import React from "react";

function BlogDashboardStep1({ values, setValues }) {
  const categoriesBlog = [
    "Guide",
    "Fashion & Trends",
    "Care Guide",
    "Sports",
    "News",
    "Product Review",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");
      setValues((prev) => ({ ...prev, slug }));
    }
  };

  return (
    <div className="space-y-4 p-2">
      <div className="space-y-2">
        <TypographyP>Title</TypographyP>
        <Input
          id="title"
          name="title"
          value={values.title || ""}
          onChange={handleChange}
          placeholder="e.g., Complete Guide to Choosing Shoes"
        />
      </div>

      <div className="space-y-2">
        <TypographyP>Slug (URL)</TypographyP>
        <Input
          id="slug"
          name="slug"
          value={values.slug || ""}
          onChange={handleChange}
          placeholder="auto-generated-from-title"
          dir="ltr"
        />
      </div>

      <div className="space-y-2">
        <TypographyP>Author</TypographyP>
        <Input
          id="author"
          name="author"
          value={values.author || ""}
          onChange={handleChange}
          placeholder="Author name"
        />
      </div>

      <div className="flex justify-between">
        <div className="space-y-2">
          <TypographyP>Category</TypographyP>
          <Select
            onValueChange={(value) => setValues({ ...values, category: value })}
            value={values.category || ""}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categoriesBlog.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <TypographyP>Status</TypographyP>
          <Select
            onValueChange={(value: "PUBLISHED" | "DRAFT" | "ARCHIVED") =>
              setValues({ ...values, status: value })
            }
            value={values.status || "Published"}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DRAFT">Draft</SelectItem>
              <SelectItem value="PUBLISHED">Published</SelectItem>
              <SelectItem value="ARCHIVED">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>{" "}
      </div>
    </div>
  );
}

export default BlogDashboardStep1;
