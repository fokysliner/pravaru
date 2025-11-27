"use client";

// app/faq/page.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faq = [
    {
      q: "Это официально и законно?",
      a: "Да. Мы работаем в рамках законодательства РФ, заключаем договор и фиксируем объём услуг.",
    },
    {
      q: "Сколько стоит ваша помощь?",
      a: "Базовая консультация — бесплатно. Точная стоимость зависит от сложности ситуации. После разбора называем фиксированную цену.",
    },
    {
      q: "Вы можете гарантировать результат?",
      a: "Мы не даём «волшебных гарантий», но честно объясняем риски, шансы и делаем максимум в рамках закона.",
    },
    {
      q: "Можно всё сделать удалённо?",
      a: "Во многих случаях — да: мы работаем онлайн, используем мессенджеры и ЭЦП. Детали зависят от вашего кейса.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← На главную
        </a>

        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Частые вопросы</h1>
        <p className="mt-2 text-sm text-slate-400 md:text-base">
          Если здесь нет ответа — напишите нам в Telegram (@Bondar_enk), разберём
          индивидуально.
        </p>

        <div className="mt-8 space-y-4">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-shadow ${
                  isOpen ? "border-emerald-600 shadow-lg" : "border-white/10"
                } bg-slate-900/70`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-4 text-sm font-medium text-slate-100"
                  aria-expanded={isOpen}
                >
                  <span className="text-left">{item.q}</span>
                  <span className="flex items-center gap-3">
                    <span className={`text-xs text-slate-400 transition-transform ${isOpen ? "hidden" : "block"}`}>
                      раскрыть
                    </span>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="text-slate-400"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                    >
                      <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                    </motion.svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28 }}
                      className="px-4 pb-4 text-sm text-slate-300"
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
