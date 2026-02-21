import { BlogStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedBlogs() {
  console.log("Seeding blogs...");

  await prisma.blog.deleteMany();

  const blogsData = [
    {
      title: "Ultimate Sneaker Trends of 2026",
      slug: "ultimate-sneaker-trends-2026",
      excerpt: "Explore the hottest sneaker styles taking over 2026.",
      content: `<p>In 2026, the sneaker world has exploded with vibrant colors...</p>`,
      Image: "/common/img/main/blog/blog2.png",
      author: "Admin Team",
      category: "Sneaker Trends",
      tags: ["sneakers", "2026", "trends"],
      status: BlogStatus.PUBLISHED,
    },
    {
      title: "How to Style Boots for Every Occasion",
      slug: "how-to-style-boots-every-occasion",
      excerpt:
        "Boots are a wardrobe staple — learn how to wear them everywhere!",
      content: `<p>Boots are no longer just functional — they are fashion statements...</p>`,
      Image: "/common/img/main/blog/blog1.png",
      author: "Style Expert",
      category: "Footwear Tips",
      tags: ["boots", "style", "guide"],
      status: BlogStatus.PUBLISHED,
    },
    {
      title: "Comfort Meets Function: Best Outdoor Shoes",
      slug: "comfort-meets-function-best-outdoor-shoes",
      excerpt: "The best outdoor shoes that balance comfort and performance.",
      content: `<p>Outdoor adventures demand footwear that can keep up...</p>`,
      Image: "/common/img/main/blog/blog3.png",
      author: "Gear Reviewer",
      category: "Outdoor",
      tags: ["outdoor", "hiking", "comfort"],
      status: BlogStatus.PUBLISHED,
    },
  ];

  for (const blog of blogsData) {
    await prisma.blog.create({ data: blog });
  }

  console.log("Blogs seeded successfully.");
}

seedBlogs()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
