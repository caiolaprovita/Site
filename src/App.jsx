import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, BarChart3, Target, Zap, Mail, Phone, MapPin } from "lucide-react";

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
      "Programação de PLCs para controle de processos e automação industrial.",
  },
  {
    icon: BarChart3,
    title: "Desenvolvimento de IHM",
    image: "/ihm.jpg",
    description:
      "Interfaces homem-máquina para operação clara e eficiente.",
  },
  {
    icon: CheckCircle2,
    title: "Sistemas supervisórios",
    image: "/supervisorio.jpg",
    description:
      "Monitoramento e controle em tempo real dos processos.",
  },
  {
    icon: Target,
    title: "Projetos elétricos completos",
    image: "/projeto.jpg",
    description:
      "Projetos elétricos com documentação e dimensionamento técnico.",
  },
  {
    icon: Zap,
    title: "Integração de sistemas",
    image: "/integracao.jpg",
    description:
      "Integração entre equipamentos e sistemas industriais.",
  },
];

export default function SiteInstitucional() {
  return (
    <div className="min-h-screen text-zinc-950" style={{ backgroundColor: "#F2F0EC" }}>
      <header className="sticky top-0 z-40 border-b backdrop-blur" style={{ backgroundColor: "rgba(242,240,236,0.92)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold">CBL Soluções</span>
          <a href="https://wa.me/message/7LGLNQBLBVARO1" target="_blank">
            <button style={{ backgroundColor: "#EF7D00", color: "#fff" }} className="px-4 py-2 rounded-xl">
              WhatsApp
            </button>
          </a>
        </div>
      </header>

      <main>
        <section
          className="relative px-6 py-24"
          style={{
            backgroundImage: "url('/bg-industrial.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} />
          <div className="relative max-w-4xl text-white">
            <h1 className="text-5xl font-bold">CBL Soluções</h1>
            <p className="mt-4 text-xl">
              Elétrica e automação industrial com execução técnica e confiável.
            </p>
            <a href="https://wa.me/message/7LGLNQBLBVARO1" target="_blank">
              <button className="mt-6 px-6 py-3 rounded-xl" style={{ backgroundColor: "#EF7D00" }}>
                Falar no WhatsApp
              </button>
            </a>
          </div>
        </section>

        <section className="px-6 py-20">
          <h2 className="text-3xl font-semibold mb-10">Serviços</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible">
                  <div className="bg-white rounded-2xl shadow p-5">
                    <img src={service.image} className="w-full h-40 object-cover rounded-xl mb-4" />
                    <Icon className="mb-2" />
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                    <p className="text-sm mt-2 text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="px-6 py-20" style={{ backgroundColor: "#124F7E", color: "white" }}>
          <h2 className="text-3xl font-semibold mb-6">Contato</h2>
          <p>Rio de Janeiro</p>
          <p>Email: caiolaprovita@gmail.com</p>
          <p>Telefone: 21 99719-0668</p>
        </section>
      </main>
    </div>
  );
}

