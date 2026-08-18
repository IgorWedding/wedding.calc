import { prisma } from "@/lib/prisma";
import { json } from "@/lib/api";

export async function GET() {
  const items = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
  return json({ items });
}
