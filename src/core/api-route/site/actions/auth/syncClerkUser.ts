"use server";

import prisma from "@/core/lib/db/client";
import { currentUser } from "@clerk/nextjs/server";

export async function syncClerkUser() {
  const clerkUser = await currentUser();

  const user = await prisma.user.upsert({
    where: { clerkId: clerkUser.id },
    update: {
      email: clerkUser.emailAddresses[0]?.emailAddress ?? "",
      name:
        `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim() ||
        null,
      image: clerkUser.imageUrl ?? null,
    },
    create: {
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses[0]?.emailAddress ?? "",
      name:
        `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim() ||
        "new user",
      image: clerkUser.imageUrl ?? null,
    },
  });

  return user;
}
