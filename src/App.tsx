import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  ShieldCheck,
  Users,
  Wrench,
  Sparkles,
  Truck,
  Zap,
  Star,
  CheckCircle2,
  Award,
  ArrowRight,
  Lightbulb,
  Car,
  PackageCheck,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import heroCar from "@/assets/hero-car.jpg";
import productMirror from "@/assets/product-mirror.jpg";
import productHeadlight from "@/assets/product-headlight.jpg";
import productTaillight from "@/assets/product-taillight.jpg";
import workshop from "@/assets/workshop-new.jpg";
import logo from "@/assets/logo.png";
import { FloatingWhatsApp, buildWhatsappLink } from "@/components/WhatsAppButton";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const products = [
  {
    title: "Retrovisores",
    desc: "Retrovisores nacionais e importados com excelente acabamento e encaixe perfeito.",
    img: productMirror,
    cta: "Solicitar Retrovisor",
    msg: "Olá! Gostaria de solicitar um orçamento de retrovisor.",
  },
  {
    title: "Faróis",
    desc: "Faróis automotivos com alta durabilidade e visual impecável para o seu veículo.",
    img: productHeadlight,
    cta: "Solicitar Farol",
    msg: "Olá! Gostaria de solicitar um orçamento de farol.",
  },
  {
    title: "Lanternas",
    desc: "Lanternas automotivas com qualidade premium e instalação especializada.",
    img: productTaillight,
    cta: "Solicitar Lanterna",
    msg: "Olá! Gostaria de solicitar um orçamento de lanterna.",
  },
];

const extras = [
  { icon: Lightbulb, label: "Lâmpadas" },
  { icon: Zap, label: "Faróis Auxiliares" },
  { icon: Car, label: "Espelhos" },
  { icon: PackageCheck, label: "Acessórios" },
];

const services = [
  { icon: Wrench, title: "Instalação de Peças", desc: "Montagem profissional com garantia." },
  { icon: Sparkles, title: "Recuperação de Faróis", desc: "Polimento e restauração completa." },
  { icon: Award, title: "Polimento", desc: "Restauração do brilho original." },
  { icon: PackageCheck, title: "Troca de Peças", desc: "Substituição ágil e segura." },
  { icon: Truck, title: "Delivery Automotivo", desc: "Entrega de peças em toda BH." },
  { icon: Zap, title: "Atendimento Rápido", desc: "Resposta imediata no WhatsApp." },
];

const benefits = [
  { icon: Users, text: "Mais de 9 mil clientes satisfeitos" },
  { icon: ShieldCheck, text: "Garantia de 90 dias" },
  { icon: Zap, text: "Atendimento rápido" },
  { icon: PackageCheck, text: "Peças nacionais e importadas" },
  { icon: Wrench, text: "Equipe especializada" },
  { icon: Award, text: "Excelente custo-benefício" },
  { icon: MapPin, text: "Referência na região da Pedro II" },
  { icon: CheckCircle2, text: "Serviço de instalação" },
];

const testimonials = [
  {
    name: "Carlos Henrique",
    text: "Atendimento excelente, peça de qualidade e preço justo. Instalaram o retrovisor na hora. Recomendo demais!",
  },
  {
    name: "Mariana Souza",
    text: "Precisei de um farol urgente, eles entregaram no mesmo dia. Muito profissionais e atenciosos.",
  },
  {
    name: "Ricardo Almeida",
    text: "Comprei lanterna importada para meu carro. Encaixe perfeito e o preço bem melhor que nas concessionárias.",
  },
  {
    name: "Juliana Pereira",
    text: "Já é a terceira vez que compro aqui. Sempre rápido, honesto e com peças de confiança. Top!",
  },
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#111111]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-2 text-white">
            <img src={logo} alt="Garagem Retrovisores" className="h-10 w-auto md:h-12" />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-white/80 transition-smooth hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={buildWhatsappLink("Olá! Quero solicitar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-smooth hover:scale-105 lg:inline-block"
          >
            Solicitar Orçamento
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-[#111111] lg:hidden">
            <nav className="flex flex-col px-4 py-4">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-white/90 transition-smooth hover:text-primary"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={buildWhatsappLink("Olá! Quero solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-gradient-primary px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={heroCar}
            alt="Carro premium com faróis acesos"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3 w-3" /> Desde 2015 em Belo Horizonte
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white text-balance md:text-6xl lg:text-7xl">
              Especialistas em <span className="text-primary">Retrovisores</span>, Faróis e Lanternas Automotivas
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Peças automotivas com qualidade, agilidade e preço justo. Atendimento ágil e instalação especializada para o seu veículo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsappLink("Olá! Quero fazer um orçamento de peças.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 font-display font-bold text-white shadow-glow transition-smooth hover:scale-105"
              >
                Fazer Orçamento <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={buildWhatsappLink("Olá! Quero falar com a Garagem Retrovisores.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-4 font-display font-bold text-white backdrop-blur-sm transition-smooth hover:border-primary hover:bg-primary/20"
              >
                <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, t: "90 dias de garantia" },
                { icon: Users, t: "+9 mil clientes" },
                { icon: PackageCheck, t: "Nacionais e importadas" },
              ].map((b) => (
                <div
                  key={b.t}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <b.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-white">{b.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Catálogo</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl text-balance">
              Os principais produtos para o seu veículo
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trabalhamos com peças novas, usadas, nacionais e importadas selecionadas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-2 hover:shadow-elevated"
              >
                <div className="relative h-60 overflow-hidden bg-[#111]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-display text-2xl font-extrabold text-white">
                    {p.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                  <a
                    href={buildWhatsappLink(p.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 font-display text-sm font-bold text-background transition-smooth hover:bg-primary"
                  >
                    {p.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-[#F5F5F5] p-8">
            <h3 className="text-center font-display text-xl font-bold text-foreground">
              Também trabalhamos com
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {extras.map((e) => (
                <div
                  key={e.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 transition-smooth hover:border-primary hover:shadow-card"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <e.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-bold text-foreground">{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-[#F5F5F5] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">O que fazemos</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl text-balance">
              Serviços especializados para o seu carro
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-primary hover:shadow-elevated"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow transition-smooth group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={buildWhatsappLink("Olá! Quero solicitar recuperação de faróis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-display font-bold text-background transition-smooth hover:bg-primary"
            >
              Solicitar Recuperação
            </a>
            <a
              href={buildWhatsappLink("Olá! Quero pedir um delivery de peça automotiva.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-display font-bold text-white shadow-glow transition-smooth hover:scale-105"
            >
              <Truck className="h-5 w-5" /> Pedir Delivery
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-primary/20" />
            <img
              src={workshop}
              alt="Loja Garagem Retrovisores em Belo Horizonte"
              loading="lazy"
              className="relative w-full rounded-2xl object-cover shadow-elevated"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Sobre Nós</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl text-balance">
              Tradição e confiança <span className="text-primary">desde 2015</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              A Garagem Retrovisores é referência em Belo Horizonte quando o assunto é retrovisores, faróis e lanternas automotivas. Trabalhamos com peças novas e usadas, atendimento ágil e uma equipe altamente especializada para oferecer a melhor solução para cada cliente.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "10+", l: "Anos de mercado" },
                { v: "9k+", l: "Clientes" },
                { v: "4.8★", l: "Avaliação Google" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-[#F5F5F5] p-4 text-center">
                  <div className="font-display text-2xl font-extrabold text-primary md:text-3xl">{s.v}</div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <img src={heroCar} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Diferenciais</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-5xl text-balance">
              Por que escolher a Garagem Retrovisores?
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.text}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-smooth hover:border-primary hover:bg-primary/10"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                  <b.icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-white/90">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="bg-[#F5F5F5] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Depoimentos</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl text-balance">
              Quem compra, recomenda
            </h2>
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full border border-border bg-card px-6 py-3 shadow-card">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <span className="ml-2 font-display font-bold text-foreground">4.8</span>
              </div>
              <span className="text-sm text-muted-foreground">+167 avaliações no Google</span>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Cliente verificado</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 lg:py-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#111]/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-white md:text-5xl text-balance">
            Precisa de peças ou serviços automotivos?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Fale agora com nossa equipe e receba atendimento rápido no WhatsApp.
          </p>
          <a
            href={buildWhatsappLink("Olá! Quero atendimento da Garagem Retrovisores.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-10 py-5 font-display text-lg font-extrabold text-white shadow-elevated pulse-glow transition-smooth hover:scale-105 hover:bg-white hover:text-[#111111]"
          >
            <MessageCircle className="h-6 w-6" /> Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-[#111111] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Garagem Retrovisores" className="h-12 w-auto" />
            </div>
            <p className="mt-4 text-sm text-white/70">
              Especialistas em retrovisores, faróis e lanternas automotivas em Belo Horizonte desde 2015.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-smooth hover:bg-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-smooth hover:bg-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={buildWhatsappLink("Olá!")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-smooth hover:bg-primary"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Av. Dom Pedro II, 777 - Carlos Prates, Belo Horizonte - MG
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" /> (31) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> (31) 3333-3333
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Horário</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Seg a Sex: 08h - 18h
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Sábado: 08h - 13h
              </li>
              <li className="text-white/50">Domingo: Fechado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Localização</h4>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Mapa Garagem Retrovisores"
                src="https://www.google.com/maps?q=Av.+Dom+Pedro+II,+777+-+Carlos+Prates,+Belo+Horizonte+-+MG&output=embed"
                width="100%"
                height="180"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Garagem Retrovisores. Todos os direitos reservados.
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}
