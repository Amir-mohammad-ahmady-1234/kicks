"use server";
import prisma from "@/core/lib/db/client";

export async function rateProduct(pid: string, rate: number) {
  try {
    const product = await prisma.products.findUnique({
      where: { id: pid },
      select: { totalStars: true, totalVotes: true },
    });

    const newTotalStars = (product?.totalStars || 0) + rate;
    const newTotalVotes = (product?.totalVotes || 0) + 1;
    const newAverage = newTotalStars / newTotalVotes;

    await prisma.products.update({
      where: { id: pid },
      data: {
        totalStars: newTotalStars,
        totalVotes: newTotalVotes,
        star: newAverage,
      },
    });

    return {
      success: true,
      average: newAverage,
      votes: newTotalVotes,
    };
  } catch (err) {
    console.log(err);
    return { success: false, message: "server error" };
  }
}
