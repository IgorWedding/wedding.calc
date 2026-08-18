import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash("IgorDev2026!", 10);
  await prisma.user.upsert({
    where: { email: "igor@dreamwedding.dev" },
    update: {},
    create: {
      email: "igor@dreamwedding.dev",
      name: "Igor Minasyan",
      role: "developer",
      passwordHash: hash,
    },
  });

  const count = await prisma.contractor.count();
  if (count === 0) {
    const samples = [
      { name: "Артём Волков", type: "ведущий", city: "Москва", price: 90000, rating: 4.9, travel: true, radius: 200, tags: ["юмор", "интерактив"] },
      { name: "Студия «Свет»", type: "фото", city: "Москва", price: 120000, rating: 4.8, travel: true, radius: 150, tags: ["репортаж"] },
      { name: "Мария Соколова", type: "ведущий", city: "Санкт-Петербург", price: 75000, rating: 4.9, travel: true, radius: 180, tags: ["тёплая"] },
      { name: "Ильдар Хайруллин", type: "ведущий", city: "Казань", price: 55000, rating: 4.9, travel: true, radius: 250, tags: ["энергия"] },
      { name: "Ставрополь Event", type: "ведущий", city: "Ставрополь", price: 48000, rating: 4.7, travel: true, radius: 200, tags: ["местный"] },
      { name: "Рязань Photo", type: "фото", city: "Рязань", price: 45000, rating: 4.6, travel: true, radius: 150, tags: ["репортаж"] },
      { name: "Елец Салон", type: "фото", city: "Елец", price: 28000, rating: 4.5, travel: false, radius: 0, tags: ["камерный"] },
      { name: "Сочи Flowers", type: "декор", city: "Сочи", price: 150000, rating: 4.9, travel: true, radius: 80, tags: ["премиум"] },
      { name: "Казанский Двор", type: "площадка", city: "Казань", price: 140000, rating: 4.8, travel: false, radius: 0, tags: ["банкет"] },
    ];
    await prisma.contractor.createMany({ data: samples });
  }

  const articles = await prisma.article.count();
  if (articles === 0) {
    await prisma.article.createMany({
      data: [
        {
          title: "Сезонность цен по России",
          summary: "Летом дороже в большинстве регионов.",
          label: "Цены",
          body: "<p>В большинстве городов <strong>июнь–август</strong> — высокий сезон: +25–40% к ценам.</p><p>Зимой обычно дешевле, кроме горнолыжных курортов.</p>",
        },
        {
          title: "Свадьбы в малых городах",
          summary: "Логистика и бронирование.",
          label: "Регионы",
          body: "<p>Часто ведущего и фото везут из областного центра. Заложите трансфер и бронируйте заранее.</p>",
        },
      ],
    });
  }

  console.log("Seed OK");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
