import { Prisma } from "@prisma/client";

export default function errorHandeler(error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      const target =
        (error.meta as { target?: string[] })?.target?.[0] || "نام محصول";
      return {
        success: false,
        error: `محصول با این ${target} قبلاً وجود دارد`,
      };
    }

    if (error.code === "P2025") {
      return { success: false, error: "رکورد مورد نظر پیدا نشد" };
    }
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return {
      success: false,
      error: "داده‌های ارسالی معتبر نیست (مثل دسته‌بندی اشتباه)",
    };
  }

  console.error("Error creating product:", error);
  return { success: false, error: "خطای سرور در ایجاد محصول" };
}
