# Wedding Calc PRO — полный стек

Общая база для всех пользователей: Next.js 14 + PostgreSQL + Prisma + JWT.

## 1. Что нужно один раз

1. Установить **Node.js 20** — https://nodejs.org  
2. Создать бесплатный аккаунт **GitHub** — https://github.com/signup  
3. Создать бесплатный проект **Supabase** или **Neon** (PostgreSQL) — скопировать `DATABASE_URL`  
4. (Опционально) Домен **weddingcalc.ru**

## 2. Локально

```bash
cd weddingcalc
cp .env.example .env
# вставь DATABASE_URL и JWT_SECRET в .env

npm install
npx prisma db push
npm run db:seed
npm run dev
```

Открой http://localhost:3000

DEV-вход API: `igor@dreamwedding.dev` / `IgorDev2026!`

## 3. Выложить бесплатно / дёшево

### Вариант A — Vercel (frontend+api) + Neon (БД)

1. Залей папку `weddingcalc` в GitHub (Create repository → upload).  
2. https://vercel.com → Import project → выбери репозиторий.  
3. Environment Variables:
   - `DATABASE_URL` = строка из Neon/Supabase  
   - `JWT_SECRET` = длинная случайная строка  
4. Deploy.  
5. После деплоя в Vercel → Settings → Domains → `weddingcalc.ru`.

### Вариант B — Railway

1. railway.app → New Project → Deploy from GitHub.  
2. Add PostgreSQL plugin.  
3. Variables подставятся сами + `JWT_SECRET`.  
4. Domain → Custom domain.

## 4. API (уже в проекте)

| Метод | Путь | Описание |
|-------|------|----------|
| POST | /api/auth/register | Регистрация pair/contractor |
| POST | /api/auth/login | Вход (+ авто-создание developer) |
| POST | /api/auth/logout | Выход |
| GET | /api/auth/me | Текущий пользователь |
| GET | /api/contractors | Список подрядчиков (фильтры city, type, travel) |
| POST | /api/contractors | Создать (contractor/developer) |
| POST | /api/requests | Заявка на слот |
| GET | /api/requests | Заявки (по роли) |
| POST | /api/admin/premium | Выдать PRO/Business (только developer) |
| GET | /api/articles | База знаний |

## 5. Связка с UI

Файл `public/app.html` — твой текущий красивый прототип.  
Чтобы данные стали общими, в нём `localStorage` заменяется на `fetch('/api/...')`.

## 6. Почта и платежи (следующий шаг)

- Письма о заявках: SMTP на dreamwedding@internet.ru  
- Премиум: ЮKassa → webhook → `User.premiumPlan`

Разработка: **Igor Minasyan**
