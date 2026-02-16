import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database with specific IDs...");

  // ========== ۱. پاک کردن دیتای قبلی ==========
  await prisma.message.deleteMany();
  await prisma.ticket.deleteMany();

  console.log("🗑️ Old data cleared");

  // ========== ۲. ساختن ادمین با آیدی مشخص ==========
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.create({
    data: {
      id: "cmllbm2hg000mv8iweoj1cku4",
      email: "admin@kicks.com",
      name: "Admin",
      password: hashedPassword,
      role: "ADMIN",
      image: "https://i.pravatar.cc/150?img=7",
      phone: "+98 912 111 1111",
      bio: "System Administrator",
    },
  });
  console.log(`✅ Admin created with ID: ${admin.id}`);

  // ========== ۳. گزارش نهایی ==========
  console.log("\n📊 Seeding completed!");
  console.log(`👤 ADMIN: ${admin.name} (ID: ${admin.id})`);
  console.log(`🔑 Admin password: admin123`);
  console.log(`\n🌐 URLs:`);
  console.log(`- Admin panel: /admin/suppurt`);
  console.log(`- Users can register and create tickets themselves`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
