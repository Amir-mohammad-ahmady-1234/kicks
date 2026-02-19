"use client";
import { createBlog } from "@/core/api-route/admin/handlers/blog/createBlog";
import BtnSubmitForm from "@/core/components/custom/ui/BtnSubmitForm";
import { useState } from "react";
import { toast } from "sonner";
import { BlogFormData } from "../../../assets/types/BlogTypes";
import BlogDashboardStep1 from "./BlogDashboardStep1";
import BlogDashboardStep2 from "./BlogDashboardStep2";
import BlogDashboardStep3 from "./BlogDashboardStep3";

function FormCreateBlog() {
  const [step, setStep] = useState(1);
  const [isSubmit, setIsSubmit] = useState(false);

  const [values, setValues] = useState<BlogFormData>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    Image: "",
    author: "",
    category: "",
    tags: [],
    status: "DRAFT",
  });
  console.log(values);
  async function handleSubmit() {
    console.log(values);

    if (!values.title || !values.author || !values.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setIsSubmit(true);
      toast.loading("Creating blog post...", { id: "create-blog" });
      const newblog = await createBlog(values);
      if (newblog.success === true) {
        toast.success(newblog.success, {
          id: "create-blog",
        });
        return;
      } else {
        toast.error(newblog.error, {
          id: "create-blog",
        });
        return;
      }
    } catch {
      toast.error("Error creating blog post", { id: "create-blog" });
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step === 3) {
            handleSubmit();
          }
        }}
      >
        {step === 1 && (
          <BlogDashboardStep1 setValues={setValues} values={values} />
        )}

        {step === 2 && (
          <BlogDashboardStep2 setValues={setValues} values={values} />
        )}

        {step === 3 && (
          <BlogDashboardStep3 setValues={setValues} values={values} />
        )}
      </form>

      <BtnSubmitForm
        isSubmit={isSubmit}
        setStep={setStep}
        step={step}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default FormCreateBlog;
