import { PrismaClient, categoryP } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding products...");

  await prisma.products.deleteMany();

  const baseurlimg = "/common/img/main/products/";
  const imagesp = [
    `${baseurlimg}Rectangle1.png`,
    `${baseurlimg}Rectangle2.png`,
    `${baseurlimg}Rectangle3.png`,
    `${baseurlimg}Rectangle4.png`,
    `${baseurlimg}Rectangle5.png`,
    `${baseurlimg}Rectangle6.png`,
  ];

  const productsData = [
    {
      name: "Classic Crocs",
      description: "Comfortable everyday crocs.",
      specs: "Lightweight, water friendly",
      price: 49,
      discount: 10,
      mainImage: imagesp[0],
      images: imagesp,
      star: 4.5,
      size: ["S", "M", "L"],
      category: categoryP.crocs,
    },
    {
      name: "Summer Nirkenstock",
      description: "Breezy sandals perfect for warm weather.",
      specs: "Ergonomic foot bed",
      price: 79,
      discount: 15,
      mainImage: imagesp[1],
      images: imagesp,
      star: 4.7,
      size: ["M", "L"],
      category: categoryP.nirkenstock,
    },
    {
      name: "Clarks Runner",
      description: "Durable and stylish runner.",
      specs: "Breathable mesh upper.",
      price: 99,
      discount: 0,
      mainImage: imagesp[2],
      images: imagesp,
      star: 4.2,
      size: ["S", "M", "L", "XL"],
      category: categoryP.clarks,
    },
    {
      name: "Timberland Boot",
      description: "Tough boots for the outdoors.",
      specs: "Waterproof premium leather.",
      price: 150,
      discount: 20,
      mainImage: imagesp[3],
      images: imagesp,
      star: 4.8,
      size: ["M", "L", "XL"],
      category: categoryP.timberland,
    },
    {
      name: "Allen High Tops",
      description: "Stylish high top sneakers.",
      specs: "Cushioned inner sole.",
      price: 110,
      discount: 5,
      mainImage: imagesp[4],
      images: imagesp,
      star: 4.3,
      size: ["S", "M", "L"],
      category: categoryP.allen,
    },
    {
      name: "Oofos Recovery Clog",
      description: "Comfortable recovery footwear.",
      specs: "OOfoam technology.",
      price: 65,
      discount: 10,
      mainImage: imagesp[5],
      images: imagesp,
      star: 4.6,
      size: ["M", "L"],
      category: categoryP.oofos,
    },
  ];

  for (const p of productsData) {
    await prisma.products.create({
      data: p,
    });
  }

  console.log("Products seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
