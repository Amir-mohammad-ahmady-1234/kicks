import Modal from "@/core/components/custom/ui/Modal";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import FormCreateBlog from "@/core/features/admin/components/ui/blog/FormCreateBlog";
import { Plus } from "lucide-react";
function HeadFilterBlog() {
  return (
    <div className="flex items-center justify-between">
      <TypographyH3>Blog</TypographyH3>

      <Modal
        trigger={
          <Button variant="outline">
            <Plus /> ADD NEW Blog
          </Button>
        }
        title="new product"
        description="Please enter product information"
        className="w-2xl"
      >
        <FormCreateBlog />
      </Modal>
    </div>
  );
}

export default HeadFilterBlog;
