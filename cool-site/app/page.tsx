"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const TELEGRAM_LINK = "https://t.me/Bondar_enk"; // Telegram контакты — @Bondar_enk

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const burgerLineBase =
  "h-[2px] w-4 rounded bg-slate-800 transition-transform transition-opacity duration-200";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const navItems = [
    { href: "#how", label: "Как работаем" },
    { href: "#benefits", label: "Почему мы" },
    { href: "#services", label: "Категории" },
    { href: "#spectech", label: "Спецтехника" },
    { href: "/faq", label: "FAQ" },
    { href: "#contacts", label: "Контакты" },
  ];

  const categoryCards = [
    { code: "a", title: "Права категории A", img: "/images/prava-a.jpg" },
    { code: "b", title: "Права категории B", img: "/images/prava-b.jpg" },
    { code: "c", title: "Права категории C", img: "/images/prava-c.jpg" },
    { code: "d", title: "Права категории D", img: "/images/prava-d.jpg" },
    { code: "e", title: "Права категории E", img: "/images/prava-e.jpg" },
    { code: "m", title: "Права категории M", img: "/images/prava-m.jpg" },
  ];

  const spectechItems = [
    { slug: "pogruzchik", title: "Права на погрузчик" },
    { slug: "traktor", title: "Права на трактор" },
    { slug: "katok", title: "Права на каток" },
    { slug: "evakuator", title: "Права на эвакуатор" },
    { slug: "buldozer", title: "Права на бульдозер" },
    { slug: "kombajn", title: "Права на комбайн" },
  ];

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 50) {
        setShowHeader(true);
      } else if (y > lastY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Шапка */}
      <header
        className={`sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur transform transition-transform duration-300 ease-in-out ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Верхний контактный бар */}
        <div className="border-b border-slate-200 bg-emerald-50/70">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-slate-700">
            <div className="flex flex-wrap items-center gap-3">
              <span className="hidden text-slate-500 sm:inline">
                Работаем по всей России, 24/7
              </span>
            </div>
            <div className="hidden gap-3 sm:flex">
              <span className="text-slate-500">Быстрая консультация:</span>
              <span className="font-medium text-emerald-700">
                Пишите в Telegram
              </span>
            </div>
          </div>
        </div>

        {/* Основная часть шапки */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <img
                src="/images/logo.jpg"
                alt="RuPrava"
                className="h-9 w-9 rounded-full object-cover"
              />
            </Link>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                RuPrava
              </div>
              <div className="text-xs text-slate-500">
                помощь с правами и документами по всей РФ
              </div>
            </div>
          </div>

          {/* Десктоп-меню */}
          <nav className="hidden gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 transition-colors hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Telegram + бургер */}
          <div className="flex items-center gap-2">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              className="hidden rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-500/30 transition-colors hover:bg-emerald-400 md:inline-flex"
            >
              Написать в Telegram
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-700 md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Открыть меню"
            >
              <span className="sr-only">Меню</span>
              <div className="flex flex-col gap-1">
                <span
                  className={`${burgerLineBase} ${
                    menuOpen ? "translate-y-[4px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`${burgerLineBase} ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`${burgerLineBase} ${
                    menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <motion.div
          initial={false}
          animate={menuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, y: 0, height: "auto" },
            closed: { opacity: 0, y: -10, height: 0 },
          }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-1.5 text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-500/30 hover:bg-emerald-400"
            >
              Написать в Telegram
            </a>
          </nav>
        </motion.div>
      </header>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionStagger}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden border-b border-slate-200"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.6)), url('/images/fon.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-row md:items-center md:pb-24 md:pt-16">
          <motion.div
            className="relative z-10 md:w-3/5"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/80 px-3 py-1 text-xs text-emerald-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Официальная помощь с правами и штрафами по РФ
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Решим вопросы с правами
              <span className="block text-emerald-600">
                быстро и без лишней нервотрёпки
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-slate-700 md:text-base">
              Консультируем, сопровождаем и помогаем оформить документы.
              Работаем по всей России, всё максимально прозрачно и понятно.
              Пишите в Telegram — разберём именно вашу ситуацию.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-transform transition-shadow hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-xl"
              >
                Бесплатная консультация в Telegram
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                Посмотреть категории →
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-600 md:text-sm">
              <span>✦ Работаем по всей РФ</span>
              <span>✦ Официальные договора</span>
              <span>✦ Поддержка в мессенджерах</span>
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 mt-4 md:mt-0 md:w-2/5"
            variants={fadeInUp}
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
                <span>Ваш кейс</span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-700">
                  онлайн разбор
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <motion.div
                  variants={fadeInUp}
                  className="rounded-2xl bg-slate-50 p-3"
                >
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">
                    01. Ситуация
                  </div>
                  <div className="mt-1 text-slate-800">
                    Рассказываете, что случилось: лишение прав, штрафы, ГИБДД,
                    суд и т.д.
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="rounded-2xl bg-slate-50 p-3"
                >
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">
                    02. Анализ
                  </div>
                  <div className="mt-1 text-slate-800">
                    Проверяем документы, сроки, риски и даём понятный план
                    действий.
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3"
                >
                  <div className="text-[11px] uppercase tracking-wide text-emerald-700">
                    03. Результат
                  </div>
                  <div className="mt-1 text-slate-800">
                    Сопровождаем до результата: документы, суд, возврат прав —
                    по ситуации.
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs text-slate-700"
              >
                ⚡ Напишите сейчас — ответим в рабочее время и сориентируем по
                срокам и стоимости.
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Почему мы */}
      <motion.section
        id="benefits"
        variants={sectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative border-b border-slate-200 bg-slate-50 py-12 md:py-16 overflow-hidden"
      >
        {/* background image behind content */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/doverie.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "contrast(0.9) saturate(0.8) brightness(0.85)",
            }}
          />
          <div className="absolute inset-0 bg-white/80 md:bg-white/70" />
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-semibold md:text-3xl"
              >
                Почему нам доверяют
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-2 max-w-xl text-sm text-slate-600 md:text-base"
              >
                Не обещаем чудес, но честно объясняем, что можно сделать в вашей
                ситуации и как это будет происходить.
              </motion.p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Прозрачно",
                    text: "Сразу говорим, какие есть риски, сроки и примерная стоимость. Без скрытых платежей и странных формулировок.",
                  },
                  {
                    title: "Официально",
                    text: "Работаем по договору, фиксируем объём услуг и ответственность.",
                  },
                  {
                    title: "На связи",
                    text: "Отвечаем в мессенджерах, объясняем простым языком, а не «юридским».",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="rounded-2xl border border-slate-200 bg-white p-4 transition-transform transition-shadow hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="text-sm font-semibold text-emerald-700">
                      {item.title}
                    </div>
                    <p className="mt-2 text-xs text-slate-700 md:text-sm">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* the background image is now behind the whole section */}
            <div className="hidden" />
          </div>
        </div>
      </motion.section>

      {/* Как работаем */}
      <motion.section
        id="how"
        variants={sectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-b border-slate-200 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-semibold md:text-3xl"
          >
            Как мы работаем
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-2 max-w-xl text-sm text-slate-600 md:text-base"
          >
            Простые шаги: от заявки до результата. Всё прозрачно, без скрытых
            условий.
          </motion.p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Заявка",
                text: "Пишите в Telegram или оставляете заявку — коротко описываете ситуацию.",
              },
              {
                step: "02",
                title: "Анализ",
                text: "Изучаем документы, разъясняем риски и предлагаем варианты.",
              },
              {
                step: "03",
                title: "Договор",
                text: "Фиксируем стоимость и сроки. Работаем официально.",
              },
              {
                step: "04",
                title: "Результат",
                text: "Ведём дело до результата и остаёмся на связи.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="text-sm font-semibold text-emerald-700">
                  {item.step}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  {item.title}
                </div>
                <div className="mt-2 text-xs text-slate-700 md:text-sm">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Категории прав */}
      <motion.section
        id="services"
        variants={sectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-b border-slate-200 bg-slate-50 py-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-center text-2xl font-semibold md:text-3xl"
          >
            Права на авто по всей России
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-2 text-center text-sm text-slate-600 md:text-base"
          >
            Выберите нужную категорию — откроется отдельная страница с
            подробным описанием и ответами на вопросы. Работаем с клиентами из
            любых регионов РФ.
          </motion.p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {categoryCards.map((card) => (
              <motion.div
                key={card.code}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900/80 shadow-sm"
              >
                <Link href={`/prava/${card.code}`}>
                  <div
                    className="relative flex h-44 items-end justify-center bg-cover bg-center p-4 md:h-52"
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('${card.img}')`,
                    }}
                  >
                    <span className="text-center text-sm font-semibold text-white md:text-base">
                      {card.title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* СПЕЦТЕХНИКА */}
      <section
        id="spectech"
        className="border-b border-slate-200 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-md rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
            <div className="rounded-t-2xl bg-sky-700 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white">
              Спецтехника
            </div>
            <ul className="divide-y divide-slate-200 bg-white">
              {spectechItems.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/spectech/${item.slug}`}
                    className="flex items-center justify-between px-4 py-3 text-sm text-slate-800 hover:bg-slate-50"
                  >
                    <span>{item.title}</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-xs text-slate-500">
                      +
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Документы (без формы заявки) */}
      <section
        id="docs"
        className="border-b border-slate-200 bg-slate-50 py-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Какие документы обычно нужны
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
            Точный список зависит от вашей ситуации, но в большинстве случаев
            пригодится следующее.
          </p>

          <div className="mt-8 max-w-xl rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
            <h3 className="text-sm font-semibold text-slate-900 md:text-base">
              Часто запрашиваем:
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Паспорт РФ</li>
              <li>• Водительское удостоверение (если есть на руках)</li>
              <li>• Постановления, протоколы, повестки</li>
              <li>• Скриншоты из ГИБДД/Госуслуг</li>
              <li>• Всё, что вы уже получили по делу (копии, фото)</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              Если чего-то нет — не страшно. Отправьте, что есть, а остальное
              подскажем по ходу в переписке.
            </p>
          </div>
        </div>
      </section>

      {/* Контакты + футер */}
      <section
        id="contacts"
        className="border-t border-slate-200 bg-white py-10"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Контакты</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
            Напишите коротко, что случилось, — и мы предложим варианты решения.
            Работаем с клиентами по всей России.
          </p>

          <div className="mt-6 flex flex-col gap-4 text-sm text-slate-800 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div>
                Telegram: {" "}
                <a href={TELEGRAM_LINK} target="_blank" className="font-mono text-emerald-700">
                  @Bondar_enk
                </a>
              </div>
            </div>

            <a
              href={TELEGRAM_LINK}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition-transform transition-shadow hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-lg"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} RuPrava. 
      </footer>

      {/* Плавающая кнопка Telegram */}
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        className="fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-emerald-500/40 transition-transform transition-shadow hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-xl sm:text-sm"
      >
        <span className="text-lg leading-none">✉️</span>
        <span className="hidden sm:inline">Написать в Telegram</span>
      </a>
    </main>
  );
}
