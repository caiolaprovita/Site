import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Instagram,
  LayoutPanelTop,
  Mail,
  MapPin,
  Phone,
  Workflow,
  Zap,
} from 'lucide-react'

const services = [
  {
    icon: LayoutPanelTop,
    title: 'Montagem de painéis elétricos industriais',
    text: 'Montagem de painéis com organização técnica, integração de componentes e foco em confiabilidade operacional.',
  },
  {
    icon: Cpu,
    title: 'Programação de PLC',
    text: 'Programação de PLCs para controle de processos, automação industrial e integração lógica da operação.',
  },
  {
    icon: Workflow,
    title: 'Desenvolvimento de IHM',
    text: 'Interfaces homem-máquina para operação clara, segura e eficiente dos sistemas automatizados.',
  },
  {
    icon: Zap,
    title: 'Sistemas supervisórios',
    text: 'Supervisão, monitoramento, alarmes e visualização em tempo real para maior controle do processo.',
  },
  {
    icon: CheckCircle2,
    title: 'Projetos elétricos completos',
    text: 'Projetos com documentação, dimensionamento e estrutura adequada para execução e expansão futura.',
  },
  {
    icon: Workflow,
    title: 'Integração de sistemas',
    text: 'Integração entre equipamentos, painéis, PLCs, IHMs e supervisórios para processos mais estáveis e eficientes.',
  },
]

const steps = [
  'Levantamento técnico da necessidade e análise da aplicação industrial',
  'Definição da solução elétrica e de automação mais adequada',
  'Montagem, programação e integração dos sistemas',
  'Comissionamento, testes e entrega com foco operacional',
]

export default function App() {
  return (
    <div className="page">
      <a
        className="floating-whatsapp"
        href="https://wa.me/message/7LGLNQBLBVARO1"
        target="_blank"
        rel="noreferrer"
      >
        <Phone size={18} /> WhatsApp
      </a>

      <header className="topbar">
        <div className="container nav">
          <div className="brand">
            <img src="/logo-cbl.png" alt="CBL Soluções" className="brand-logo" />
            <div>
              <strong>CBL Soluções</strong>
              <span>Elétrica e automação industrial</span>
            </div>
          </div>

          <nav className="menu">
            <a href="#servicos">Serviços</a>
            <a href="#processo">Processo</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="btn btn-primary btn-small" href="https://wa.me/message/7LGLNQBLBVARO1" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Soluções industriais em elétrica e automação</div>
              <h1>Soluções técnicas para painéis, PLC, IHM, supervisório e projetos elétricos.</h1>
              <p className="lead">
                A CBL Soluções atua no Rio de Janeiro com montagem de painéis elétricos industriais,
                programação de PLC, desenvolvimento de IHM, sistemas supervisórios, projetos elétricos completos
                e integração de sistemas.
              </p>

              <div className="actions">
                <a className="btn btn-primary" href="https://wa.me/message/7LGLNQBLBVARO1" target="_blank" rel="noreferrer">
                  Falar no WhatsApp <ArrowRight size={18} />
                </a>
                <a className="btn btn-secondary" href="https://www.instagram.com/cbl.solucoes/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>

              <div className="stats">
                <div className="stat-card">
                  <strong>Painéis</strong>
                  <span>montagem e integração</span>
                </div>
                <div className="stat-card">
                  <strong>PLCs</strong>
                  <span>programação e lógica</span>
                </div>
                <div className="stat-card">
                  <strong>Projetos</strong>
                  <span>elétricos e automação</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <span className="panel-tag">CBL Soluções</span>
                <h2>Áreas de atuação</h2>
                <div className="panel-list">
                  <div>
                    <span>Projetos elétricos</span>
                    <b>execução técnica</b>
                  </div>
                  <div>
                    <span>Programação PLC</span>
                    <b>controle e automação</b>
                  </div>
                  <div>
                    <span>IHM e supervisório</span>
                    <b>operação e monitoramento</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">Serviços</span>
              <h2>Soluções industriais em elétrica e automação com foco em execução técnica.</h2>
              <p>
                Estrutura orientada para clientes que precisam de solução elétrica e automação com aplicação prática,
                integração e confiabilidade operacional.
              </p>
            </div>

            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article key={title} className="service-card">
                  <div className="icon-wrap">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="section section-dark">
          <div className="container process-grid">
            <div>
              <span className="section-kicker light">Processo</span>
              <h2>Processo técnico pensado para entregar solução funcional, segura e aplicável no campo.</h2>
              <p>
                A proposta da CBL Soluções é desenvolver e implementar soluções industriais com clareza técnica,
                confiabilidade e aderência à necessidade operacional do cliente.
              </p>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <div key={step} className="step-card">
                  <span>Etapa {String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cta-box">
            <div>
              <span className="section-kicker">Contato</span>
              <h2>Solicite uma análise inicial da sua demanda.</h2>
              <p>
                Atendimento inicial pelo WhatsApp e Instagram para entender a demanda, avaliar a aplicação e estruturar
                a solução mais adequada para a operação.
              </p>
            </div>

            <div className="contact-card" id="contato">
              <a href="https://wa.me/message/7LGLNQBLBVARO1" target="_blank" rel="noreferrer">
                <Phone size={18} /> WhatsApp
              </a>
              <a href="https://www.instagram.com/cbl.solucoes/" target="_blank" rel="noreferrer">
                <Instagram size={18} /> Instagram
              </a>
              <div>
                <Mail size={18} /> caiolaprovita@gmail.com
              </div>
              <div>
                <MapPin size={18} /> Rio de Janeiro
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
