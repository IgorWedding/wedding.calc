import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { json, error } from "@/lib/api";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  plan: z.enum(["PRO", "Business"]).nullable(),
});

export async function POST(req: Request) {
  try {
    await requireUser(["developer"]);
    const body = schema.parse(await req.json());
    const user = await prisma.user.update({
      where: { email: body.email.toLowerCase() },
      data: { premiumPlan: body.plan },
    });
    return json({
      user: { email: user.email, premiumPlan: user.premiumPlan },
    });
  } catch (e: any) {
    if (e?.message === "UNAUTHORIZED") return error("Не авторизован", 401);
    if (e?.message === "FORBIDDEN") return error("Нет доступа", 403);
    if (e?.name === "ZodError") return error("Неверные данные", 400);
    console.error(e);
    return error("Ошибка", 500);
  }
}
