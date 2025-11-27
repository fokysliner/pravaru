"use client";

import { use } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const TELEGRAM_LINK = "https://t.me/Bondar_enk";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const CATEGORY_CONTENT: Record<
  string,
  {
    title: string;
    hero: string;
    subtitle: string;
    image: string;
    whyTitle: string;
    why: string[];
    howSteps: string[];
    whoTitle: string;
    who: string[];
  }
> = {
  /* ... содержимое как в прошлой версии, уже с формулировками "по всей России" ... */
  /* Я не сокращаю структуру: оставь здесь ту версию CATEGORY_CONTENT,
     которую я отправляв в попередньому повідомленні, только с TELEGRAM_LINK в текстах
     менять ничего не нужно — там уже РФ, не регион. */
  a: {
    title: "Права категории A",
    hero: "Мотоциклы, скутеры, мопеды и вся двухколёсная свобода.",
    subtitle:
      "Расскажем, как можно оформить права категории A с внесением данных в реестр ГИБДД. Работаем с клиентами по всей России.",
    image: "/images/prava-a.jpg",
    whyTitle: "Почему оформляют права категории A через нас",
    why: [
      "Не нужно тратить месяцы на автошколу и очереди на экзамены.",
      "Снижаем риск отказов за счёт аккуратной работы с документами и сроками.",
      "Подсказываем, какие варианты есть, если вы уже были лишены прав.",
      "Работаем с клиентами из любых регионов РФ, а не только из одного города или области.",
    ],
    howSteps: [
      "Оставляете заявку или пишете нам в Telegram — кратко описываете запрос.",
      "Мы собираем необходимый пакет документов и согласовываем детали.",
      "Производится оформление и внесение данных в реестры ГИБДД.",
      "Вы получаете подтверждение и оригинал прав удобным способом доставки.",
    ],
    whoTitle: "Кому особенно актуальна категория A",
    who: [
      "Тем, кто ежедневно передвигается по городу на мотоцикле или скутере.",
      "Курьерам и доставщикам, для которых транспорт — это работа.",
      "Жителям небольших городов и сёл, где двухколёсный транспорт удобнее авто.",
    ],
  },
  // ... аналогично b, c, d, e, m (можеш просто залишити як в попередньому коді, тільки
  // де было 'пишите в WhatsApp' замінити на 'пишите в Telegram', якщо зустрінеш)
  b: {
    title: "Права категории B",
    hero: "Классические водительские права на легковой автомобиль.",
    subtitle:
      "Помогаем оформить права категории B с возможностью проверки по официальным базам. Работаем по всей России.",
    image: "/images/prava-b.jpg",
    whyTitle: "Зачем обращаться за категорией B к нам",
    why: [
      "Экономия времени: без многочасовых занятий в группе и ожидания экзаменов.",
      "Поддержка на каждом шаге — объясняем простым языком, что и как делаем.",
      "Работаем без предоплаты в ряде случаев, фиксируем договорённости письменно.",
      "Действительные документы для работы, поездок и повседневной жизни по всей РФ.",
    ],
    howSteps: [
      "Пишите нам в Telegram или оставляете заявку на сайте.",
      "Уточняем вашу ситуацию: нужны новые права или восстановление утраченных.",
      "Готовим и оформляем документы в установленные сроки.",
      "Передаём результат и даём рекомендации, как правильно пользоваться документами.",
    ],
    whoTitle: "Кому подойдёт категория B",
    who: [
      "Тем, кому права нужны для работы (такси, доставка, командировки).",
      "Тем, кто не хочет зависеть от общественного транспорта.",
      "Тем, кто переезжает в другой регион и хочет быстро закрыть вопрос с документами.",
    ],
  },
  // c, d, e, m — оставь по тому же принципу
  // ...
};

export default function PravaCategoryPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = use(params);
  const normalizedCode = code.toLowerCase();
  const data = CATEGORY_CONTENT[normalizedCode] ?? CATEGORY_CONTENT.a;

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionStagger}
        className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100"
      >
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-8 md:pb-14 md:pt-12">
          <motion.div variants={fadeInUp} className="text-xs text-slate-500">
            <Link href="/" className="hover:text-slate-800">
              Главная
            </Link>{" "}
            / {data.title}
          </motion.div>

          <div className="mt-4 grid gap-6 md:grid-cols-[3fr,2fr] md:items-stretch">
            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                {data.title} по всей России
              </h1>
              <p className="mt-3 text-sm text-slate-700 md:text-base">
                {data.hero}
              </p>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                {data.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition-transform transition-shadow hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-lg"
                >
                  Обсудить категорию в Telegram
                </a>
                <Link
                  href="/#services"
                  className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
                >
                  Вернуться к выбору категорий →
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900/80 shadow-sm"
            >
              <div
                className="h-48 bg-cover bg-center md:h-full"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.1)), url('${data.image}')`,
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="border-b border-slate-200 bg-white py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            {data.whyTitle}
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <ul className="space-y-2 text-sm text-slate-700">
              {data.why.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-slate-800">
              Мы работаем аккуратно и конфиденциально, объясняем каждый шаг
              простым языком. Наша задача — не просто «сделать документ», а
              помочь вам спокойно и безопасно пользоваться своими правами.
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            Как обычно проходит оформление
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {data.howSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
              >
                <div className="text-sm font-semibold text-emerald-700">
                  0{index + 1}
                </div>
                <div className="mt-2 text-xs md:text-sm">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            {data.whoTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {data.who.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-slate-800">
            Если вы не уверены, подходит ли вам именно эта категория — просто
            напишите нам в Telegram. Коротко опишите свою ситуацию, и мы
            подскажем, какие варианты у вас есть.
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition-transform transition-shadow hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-lg"
            >
              Задать вопрос по категории
            </a>
            <Link
              href="/"
              className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
            >
              На главную →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
