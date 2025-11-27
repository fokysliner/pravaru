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

const SPECTECH_CONTENT: Record<
  string,
  {
    title: string;
    image: string;
    hero: string;
    subtitle: string;
    listTitle: string;
    list: string[];
    steps: string[];
  }
> = {
  pogruzchik: {
    title: "Права на погрузчик",
    image: "/images/spectech-pogruzchik.jpg",
    hero: "Помогаем оформить удостоверение машиниста на различные виды погрузчиков с возможностью проверки документов.",
    subtitle:
      "Работаем с клиентами по всей России. Подскажем, какие права нужны именно под вашу технику и условия работы.",
    listTitle: "Когда актуальны права на погрузчик",
    list: [
      "Устраиваетесь в складскую компанию или логистику.",
      "Работаете с техникой на стройке или производстве.",
      "Нужны официальные документы для допуска к работе.",
    ],
    steps: [
      "Пишите нам в Telegram и коротко описываете, с каким погрузчиком работаете.",
      "Мы объясняем, какие права и отметки нужны, и собираем необходимые данные.",
      "Происходит оформление удостоверения машиниста.",
      "Получаете документы и можете официально приступать к работе.",
    ],
  },
  traktor: {
    title: "Права на трактор",
    image: "/images/spectech-traktor.jpg",
    hero: "Оформляем удостоверение тракториста-машиниста для работы на различных видах тракторов.",
    subtitle:
      "Подходит как для сельского хозяйства, так и для строительных и коммунальных работ. Работаем по всей РФ.",
    listTitle: "Кому нужны права на трактор",
    list: [
      "Механизаторам и трактористам в агросфере.",
      "Сотрудникам коммунальных и дорожных служб.",
      "Тем, кто работает на арендованной технике и обязан иметь допуск.",
    ],
    steps: [
      "Связываетесь с нами в Telegram и описываете, где и на какой технике планируете работать.",
      "Поясняем по категориям и собираем данные для оформления.",
      "Происходит оформление удостоверения с нужными отметками.",
      "Получаете документ и сможете без проблем проходить проверки.",
    ],
  },
  katok: {
    title: "Права на каток",
    image: "/images/spectech-katok.jpg",
    hero: "Удостоверение для работы на дорожных и строительных катках.",
    subtitle:
      "Помогаем оформить права машиниста катка с учётом требований работодателей и инспекций по всей России.",
    listTitle: "Для кого оформляют права на каток",
    list: [
      "Дорожные рабочие, занятые в асфальтировании и ремонте дорог.",
      "Сотрудники подрядных организаций на стройках.",
      "Те, кто переводится на новую технику и нуждается в допуске.",
    ],
    steps: [
      "Пишите нам в Telegram с кратким описанием вашей ситуации.",
      "Мы подбираем нужный тип удостоверения и собираем данные.",
      "Производится оформление и проверка документов.",
      "Вы получаете права и можете официально выходить на смену.",
    ],
  },
  evakuator: {
    title: "Права на эвакуатор",
    image: "/images/spectech-evakuator.jpg",
    hero: "Помощь в оформлении документов для работы на эвакуаторе.",
    subtitle:
      "Разберём, какие категории и отметки понадобятся под конкретный тип эвакуатора. Работаем по всей РФ.",
    listTitle: "Кому особенно актуальны права на эвакуатор",
    list: [
      "Водителям, устраивающимся в службу эвакуации.",
      "Тем, кто хочет открыть своё дело по эвакуации авто.",
      "Тем, кто уже работает на эвакуаторе, но хочет привести документы в порядок.",
    ],
    steps: [
      "Описываете тип эвакуатора и регион работы в Telegram.",
      "Мы уточняем, какие категории и документы необходимы.",
      "Происходит оформление прав с нужными отметками.",
      "Вы получаете документы и можете спокойно работать.",
    ],
  },
  buldozer: {
    title: "Права на бульдозер",
    image: "/images/spectech-buldozer.jpg",
    hero: "Удостоверение машиниста бульдозера для строительных и карьерных работ.",
    subtitle:
      "Помогаем оформить документы с учётом типа техники и условий эксплуатации. Работаем с заказчиками по всей России.",
    listTitle: "Кому нужны права на бульдозер",
    list: [
      "Машинистам на стройках и карьерах.",
      "Сотрудникам крупных подрядчиков и подрядных организаций.",
      "Тем, кто хочет официально устроиться на работу с тяжёлой техникой.",
    ],
    steps: [
      "Пишите нам в Telegram и рассказываете, на каком бульдозере будете работать.",
      "Мы поясняем по категориям и собираем данные.",
      "Происходит оформление удостоверения машиниста.",
      "Вы получаете документ и без проблем проходите проверки.",
    ],
  },
  kombajn: {
    title: "Права на комбайн",
    image: "/images/spectech-kombajn.jpg",
    hero: "Документы для работы на зерноуборочных и других видах комбайнов.",
    subtitle:
      "Разбираем ваш случай и помогаем оформить права машиниста-комбайнёра по всей РФ.",
    listTitle: "Кому необходимы права на комбайн",
    list: [
      "Механизаторам в сельском хозяйстве.",
      "Сезонным работникам на уборочных кампаниях.",
      "Тем, кто выезжает работать в другие регионы и должен иметь официальный допуск.",
    ],
    steps: [
      "Связываетесь с нами в Telegram и описываете технику и регион.",
      "Мы подбираем подходящий вариант оформления.",
      "Происходит оформление документов в согласованные сроки.",
      "Вы получаете удостоверение и можете спокойно выходить в поле.",
    ],
  },
};

export default function SpectechPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const key = slug.toLowerCase();
  const data = SPECTECH_CONTENT[key];

  if (!data) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center text-sm text-slate-700">
          Услуга не найдена.{" "}
          <Link href="/#spectech" className="text-emerald-600 hover:underline">
            Вернуться к списку спецтехники
          </Link>
        </div>
      </main>
    );
  }

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
            /{" "}
            <Link href="/#spectech" className="hover:text-slate-800">
              Спецтехника
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
                  Обсудить спецтехнику в Telegram
                </a>
                <Link
                  href="/#spectech"
                  className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
                >
                  Вернуться к списку →
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
            {data.listTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {data.list.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            Как обычно проходит оформление
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {data.steps.map((step, index) => (
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

          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-slate-800">
            Если остались вопросы по вашей технике или региону — просто
            напишите нам в Telegram. Коротко опишите ситуацию, и мы подскажем,
            какие варианты есть именно для вас.
          </div>
        </div>
      </section>
    </main>
  );
}
