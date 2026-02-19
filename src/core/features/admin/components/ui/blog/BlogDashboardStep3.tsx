"use client";
import { TypographyP } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import { Textarea } from "@/core/components/shadcn/ui/textarea";
import { X } from "lucide-react";
import React, { useState } from "react";

function BlogDashboardStep3({ values, setValues }) {
  const [tagInput, setTagInput] = useState("");
  const tags = values.tags || [];
  console.log(values);

  function handleAddTag() {
    if (tagInput.trim() && !values.tags.includes(tagInput.trim())) {
      setValues({
        ...values,
        tags: [...values.tags, tagInput.trim()],
      });
      setTagInput("");
    }
  }

  function handleRemoveTag(tagToRemove: string) {
    setValues({
      ...values,
      tags: values.tags.filter((tag) => tag !== tagToRemove),
    });
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  }
  console.log(values);

  return (
    <div className="space-y-4 p-2">
      <div className="space-y-2">
        <TypographyP>Content</TypographyP>
        <Textarea
          id="content"
          name="content"
          value={values.content || ""}
          onChange={(e) => setValues({ ...values, content: e.target.value })}
          placeholder="Main content of the article..."
          rows={4}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="space-y-2 ">
          <TypographyP>Tags</TypographyP>
          <div className="flex gap-2 items-center ">
            <Input
              id="tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter a tag and press Enter"
              className="flex-1"
            />
            <Button
              type="button"
              className="mt-2"
              onClick={handleAddTag}
              variant="outline"
            >
              Add
            </Button>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg space-y-2">
        <h3 className="font-medium">Review your information</h3>
        <div className="text-sm space-y-1 text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Title:</span>{" "}
            {values.title || "Not set"}
          </p>
          <p>
            <span className="font-medium text-foreground">Author:</span>{" "}
            {values.author || "Not set"}
          </p>
          <p>
            <span className="font-medium text-foreground">Category:</span>{" "}
            {values.category || "Not set"}
          </p>
          <p>
            <span className="font-medium text-foreground">Status:</span>{" "}
            {values.status}
          </p>
          <p>
            <span className="font-medium text-foreground">Tags:</span>{" "}
            {values.tags.length || 0} tags
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDashboardStep3;
