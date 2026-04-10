import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Target,
  Zap,
  Mail,
  Phone,
  MapPin,
  Cpu,
  Workflow,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

const services = [
  {
    icon: Target,
    title: "Montagem de painéis elétricos industriais",
    image: "/painel.jpg",
    description:
      "Montagem de painéis elétricos industriais com organização técnica, integração de componentes e foco em confiabilidade operacional.",
  },
  {
    icon: Zap,
    title: "Programação de PLC",
    image: "/plc.jpg",
    description:
      "Programação de PLCs para controle de processos, automação industrial e lógica aplicada à operação.",
  },
  {
    icon: BarChart3,
    title: "Desenvolvimento de IHM",
    image: "/ihm.jpg",
    description:
      "Interfaces homem-máquina para operação clara, segura e eficiente dos sistemas automatizados.",
  },
  {
    icon: CheckCircle2,
    title: "Sistemas supervisórios",
    image: "/supervisorio.jpg",
    description:
      "Monitoramento, visualização e controle em tempo real com foco em rastreabilidade e confiabilidade.",
  },
  {
    icon: Cpu,
    title: "Projetos elétricos completos",
    image: "/projeto.jpg",
    description:
      "Projetos elétricos com documentação, dimensionamento e estrutura técnica para execução e expansão.",
  },
  {
    icon: Workflow,
    title: "Integração de sistemas",
    image: "/integracao.jpg",
    description:
      "Integração entre equipamentos, painéis, PLCs, IHMs e sistemas industriais para operação mais estável e eficiente.",
  },
];

const differentials = [
  "Execução técnica orientada à aplicação real",
  "Soluções em elétrica e automação industrial",
  "Integração de sistemas com foco operacional",
  "Atendimento no Rio de Janeiro",
];

const processSteps = [
  {
    title: "Levantamento técnico",
    text: "Entendimento da necessidade, processo e aplicação industrial.",
  },
  {
    title: "Definição da solução",
    text: "Estruturação elétrica e de automação conforme a demanda da operação.",
  },
  {
    title: "Execução e integração",
    text: "Montagem, programação, desenvolvimento de interfaces e integração dos sistemas.",
  },
  {
    title: "Entrega operacional",
    text: "Testes, validações e preparação da solução para uso em campo.",
  },
];

export default function SiteInstitucional() {
  return (
    <div
      className="min-h-screen text-zinc-950"
      style={{ backgroundColor: "#F2F0EC" }}
    >
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "rgba(242,240,236,0.94)",
          borderColor: "rgba(18,79,126,0.12)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo-cbl.png"
              alt="CBL Soluções"
              className="h-20 w-auto object-contain"
            />
            <div>
              <div
                className="text-lg font-semibold tracking-tight"
                style={{ color: "#124F7E" }}
              >
                CBL Soluções
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Elétrica e automação
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#servicos" className="text-sm text-zinc-700 hover:text-zinc-950">
              Serviços
            </a>
            <a href="#diferenciais" className="text-sm text-zinc-700 hover:text-zinc-950">
              Diferenciais
            </a>
            <a href="#processo" className="text-sm text-zinc-700 hover:text-zinc-950">
              Processo
            </a>
            <a href="#contato" className="text-sm text-zinc-700 hover:text-zinc-950">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/message/7LGLNQBLBVARO1"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="rounded-xl px-4 py-2 text-sm font-medium transition hover:opacity-90"
              style={{ backgroundColor: "#EF7D00", color: "#fff" }}
            >
              WhatsApp
            </button>
          </a>
        </div>
      </header>

      <main>
        <section
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/bg-industrial.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(8,20,31,0.88) 0%, rgba(8,20,31,0.74) 48%, rgba(8,20,31,0.52) 100%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="max-w-3xl text-white"
              >
                <div
                  className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm"
                  style={{
                    borderColor: "rgba(239,125,0,0.5)",
                    color: "#F4C48B",
                    backgroundColor: "rgba(239,125,0,0.08)",
                  }}
                >
                  Soluções técnicas para elétrica e automação industrial
                </div>

                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Engenharia aplicada para painéis, PLC, IHM, supervisão e integração de sistemas.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
                  A CBL Soluções atua com montagem de painéis elétricos industriais,
                  programação de PLC, desenvolvimento de IHM, sistemas supervisórios,
                  projetos elétricos completos e integração de sistemas com foco técnico,
                  confiabilidade e aplicação prática.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/message/7LGLNQBLBVARO1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="inline-flex items-center rounded-xl px-6 py-3 text-base font-medium transition hover:opacity-90"
                      style={{ backgroundColor: "#EF7D00", color: "#fff" }}
                    >
                      Falar no WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </a>

                  <a
                    href="https://www.instagram.com/cbl.solucoes/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="rounded-xl border px-6 py-3 text-base font-medium text-white transition hover:bg-white/10"
                      style={{ borderColor: "rgba(255,255,255,0.28)" }}
                    >
                      Ver Instagram
                    </button>
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Painéis", "montagem industrial"],
                    ["PLC + IHM", "automação aplicada"],
                    ["Projetos", "execução técnica"],
                  ].map(([value, label], i) => (
                    <motion.div
                      key={label}
                      custom={i + 1}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      className="rounded-2xl border p-4"
                      style={{
                        borderColor: "rgba(255,255,255,0.12)",
                        backgroundColor: "rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="text-xl font-semibold">{value}</div>
                      <div className="mt-1 text-sm text-zinc-300">{label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="relative"
              >
                <div
                  className="rounded-[28px] border p-6 text-white shadow-2xl"
                  style={{
                    borderColor: "rgba(255,255,255,0.12)",
                    backgroundColor: "rgba(8,20,31,0.72)",
                  }}
                >
                  <div className="border-b border-white/10 pb-5">
                    <div className="text-sm uppercase tracking-[0.18em] text-zinc-400">
                      Especialidades
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold">Áreas centrais de atuação</h3>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      "Montagem de painéis elétricos industriais",
                      "Programação de PLC",
                      "Desenvolvimento de IHM",
                      "Sistemas supervisórios",
                      "Projetos elétricos completos",
                      "Integração de sistemas",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border p-4"
                        style={{
                          borderColor: "rgba(255,255,255,0.08)",
                          backgroundColor: "rgba(255,255,255,0.04)",
                        }}
                      >
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5"
                          style={{ color: "#EF7D00" }}
                        />
                        <span className="text-sm leading-6 text-zinc-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="servicos" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="max-w-3xl"
            >
              <div
                className="text-sm font-medium uppercase tracking-[0.22em]"
                style={{ color: "#124F7E" }}
              >
                Serviços
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Soluções para instalações, automação, controle e integração industrial.
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-600">
                Estrutura técnica orientada para clientes que precisam de execução confiável,
                clareza no escopo e aplicação prática em campo.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                  >
                    <div
                      className="h-full overflow-hidden rounded-[28px] border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      style={{ borderColor: "rgba(18,79,126,0.10)" }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-52 w-full object-cover"
                      />

                      <div className="p-6">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                            style={{ backgroundColor: "#124F7E" }}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-lg font-semibold leading-6">
                            {service.title}
                          </h3>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-zinc-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="diferenciais"
          className="px-6 py-20 lg:px-8"
          style={{ backgroundColor: "#E9E5DD" }}
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div
                className="text-sm font-medium uppercase tracking-[0.22em]"
                style={{ color: "#124F7E" }}
              >
                Diferenciais
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Atuação voltada para necessidade real da operação.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                A CBL Soluções trabalha com abordagem técnica, foco em confiabilidade
                e desenvolvimento de soluções coerentes com a aplicação industrial.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {differentials.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  className="rounded-2xl border bg-white p-5"
                  style={{ borderColor: "rgba(18,79,126,0.10)" }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: "#EF7D00" }}
                    />
                    <div className="text-sm leading-7 text-zinc-700">{item}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="processo"
          className="px-6 py-20 text-white lg:px-8"
          style={{ backgroundColor: "#124F7E" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-orange-200">
                Processo
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Fluxo técnico para estruturar, executar e entregar com consistência.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-200">
                O processo é orientado para transformar necessidade operacional em solução
                elétrica e de automação com clareza, integração e viabilidade de aplicação.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  className="rounded-[24px] border p-6"
                  style={{
                    borderColor: "rgba(255,255,255,0.12)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="text-sm uppercase tracking-[0.16em] text-orange-200">
                    Etapa {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-200">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div
              className="grid gap-8 rounded-[32px] border p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "rgba(18,79,126,0.10)",
              }}
            >
              <div>
                <div
                  className="text-sm font-medium uppercase tracking-[0.22em]"
                  style={{ color: "#124F7E" }}
                >
                  Contato
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Solicite uma análise inicial da sua demanda.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                  Atendimento inicial para entender a aplicação, avaliar a necessidade
                  técnica e estruturar a solução mais adequada para o seu processo.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://wa.me/message/7LGLNQBLBVARO1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-zinc-700 hover:text-zinc-950"
                  >
                    <Phone className="h-5 w-5" style={{ color: "#EF7D00" }} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="https://www.instagram.com/cbl.solucoes/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-zinc-700 hover:text-zinc-950"
                  >
                    <ArrowRight className="h-5 w-5" style={{ color: "#EF7D00" }} />
                    <span>Instagram / @cbl.solucoes</span>
                  </a>

                  <div className="flex items-center gap-3 text-zinc-700">
                    <Mail className="h-5 w-5" style={{ color: "#EF7D00" }} />
                    <span>caiolaprovita@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-700">
                    <Phone className="h-5 w-5" style={{ color: "#EF7D00" }} />
                    <span>21 99719-0668</span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-700">
                    <MapPin className="h-5 w-5" style={{ color: "#EF7D00" }} />
                    <span>Rio de Janeiro</span>
                  </div>
                </div>
              </div>

              <div
                className="rounded-[28px] p-6 text-white"
                style={{ backgroundColor: "#0F3858" }}
              >
                <div className="text-sm uppercase tracking-[0.18em] text-orange-200">
                  CBL Soluções
                </div>
                <h3 className="mt-3 text-2xl font-semibold">
                  Elétrica e automação com foco em solução técnica.
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-200">
                  Estrutura voltada para montagem de painéis, automação industrial,
                  programação de PLC, interfaces de operação, supervisão e integração
                  de sistemas com aplicação prática e confiável.
                </p>

                <a
                  href="https://wa.me/message/7LGLNQBLBVARO1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="mt-8 w-full rounded-xl px-5 py-3 text-sm font-medium transition hover:opacity-90"
                    style={{ backgroundColor: "#EF7D00", color: "#fff" }}
                  >
                    Entrar em contato agora
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/message/7LGLNQBLBVARO1"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <button
          className="rounded-full px-5 py-3 text-sm font-medium shadow-lg transition hover:scale-[1.02]"
          style={{ backgroundColor: "#EF7D00", color: "#fff" }}
        >
          WhatsApp
        </button>
      </a>
    </div>
  );
}
