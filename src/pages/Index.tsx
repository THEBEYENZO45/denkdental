import { Phone, MessageCircle, Menu, X, Mail, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import denkLogo from "@/assets/denk_logorett.png";
import AnimatedSection from "@/components/AnimatedSection";

const WHATSAPP_URL = "https://wa.me/551145135722?text=Olá! Encontrei vocês pelo site, gostaria de mais informações.";
const INSTAGRAM_URL = "https://www.instagram.com/dental.denk/";
const FACEBOOK_URL = "https://www.facebook.com/dental.denk/?locale=pt_BR";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={denkLogo} alt="Dental Denk" className="h-10 md:h-14 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary-foreground/80 hover:text-primary-foreground font-medium text-sm uppercase tracking-wider transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg border-2 border-white hover:bg-primary-foreground hover:scale-105 transition-all duration-200 text-sm uppercase tracking-wider shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-primary-foreground p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground font-medium text-sm uppercase tracking-wider py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 py-2">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg border-2 border-white text-sm uppercase tracking-wider shadow-md mt-2"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

const HeroSection = () => (
  <section id="inicio" className="relative bg-[#0f2033] min-h-[80vh] flex items-center pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f2033] via-[#132a42] to-[#0a1724] opacity-90" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
      <AnimatedSection>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Se o assunto é dente,{" "}
          <span className="text-[#4da3ff]">Denk!</span>
        </h1>
      </AnimatedSection>
      <AnimatedSection delay="200ms">
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Referência em produtos odontológicos no ABC paulista desde 1997. 
          Tradição, qualidade e compromisso com o profissional da odontologia.
        </p>
      </AnimatedSection>
      <AnimatedSection delay="400ms">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-5 rounded-xl text-lg uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
        >
          <MessageCircle className="w-6 h-6" />
          Fale pelo WhatsApp
        </a>
      </AnimatedSection>
    </div>
  </section>
);

const timelineItems = [
  {
    year: "1997",
    title: "Fundação",
    description: "Nasce a Comercial Denk em Mauá, focada em descartáveis para saúde.",
  },
  {
    year: "Crescimento",
    title: "Expansão Odontológica",
    description: "Com a crescente demanda no ABC, migramos para o público odontológico.",
  },
  {
    year: "2009",
    title: "Dental Denk",
    description: "Reestruturação da marca, ampliação do espaço e adequação às normas sanitárias.",
  },
  {
    year: "Hoje",
    title: "Referência Digital",
    description: "Mais de 3.800 avaliações no Google, abraçando a revolução digital no setor.",
  },
];

const HistorySection = () => (
  <section id="sobre" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Nossa História
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Conheça a trajetória da Dental Denk e como nos tornamos referência na região.
        </p>
      </AnimatedSection>

      <div className="relative">
        <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-primary/20 -translate-y-1/2" />
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 overflow-x-auto pb-8 snap-x">
          {timelineItems.map((item, index) => (
            <div key={index} className="flex-1 min-w-[280px] snap-center relative">
              <AnimatedSection delay={`${index * 150}ms`}>
                <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-all h-full flex flex-col items-center text-center">
                  <div className="hidden md:flex items-center justify-center w-5 h-5 bg-primary rounded-full border-4 border-secondary absolute top-[-10px] left-1/2 -translate-x-1/2 z-10" />
                  
                  <span className="inline-block bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const differentials = [
  {
    icon: "🏛️",
    title: "Tradição desde 1997",
    description: "Mais de 25 anos de experiência no mercado odontológico do ABC paulista.",
  },
  {
    icon: "🦷",
    title: "Foco no Dentista",
    description: "Informação, atualização profissional e proximidade com o dentista.",
  },
  {
    icon: "✅",
    title: "Normas Sanitárias",
    description: "Compromisso total com a adequação e cumprimento das normas sanitárias.",
  },
  {
    icon: "🎤",
    title: "Eventos e Palestras",
    description: "Promovemos eventos com especialistas para atualização dos profissionais.",
  },
];

const DifferentialsSection = () => (
  <section id="diferenciais" className="py-20 md:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Nossos Diferenciais
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          O que nos torna a escolha certa para o profissional da odontologia.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {differentials.map((item, index) => (
          <AnimatedSection key={index} delay={`${index * 100}ms`}>
            <div className="bg-card rounded-xl p-8 text-center shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span className="text-5xl mb-5 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contato" className="py-20 md:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Entre em Contato
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Estamos prontos para atendê-lo. Venha nos visitar ou entre em contato!
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-card rounded-xl p-8 shadow-md border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Informações</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-muted-foreground">R. José Figueiredo, 41 - Vila Assis Brasil, Mauá - SP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Telefone / WhatsApp</p>
                  <p className="text-muted-foreground">(11) 4513-5722</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">E-mail SAC</p>
                  <a href="mailto:sac@dentaldenk.com.br" className="text-primary hover:underline">sac@dentaldenk.com.br</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Redes Sociais</p>
                  <div className="flex items-center gap-4 mt-1">
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">Instagram</a>
                    <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-5 rounded-xl text-lg uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6" />
            Fale Conosco pelo WhatsApp
          </a>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md border border-border h-80 lg:h-auto min-h-[320px]">
          <iframe
            title="Localização Dental Denk"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.6!2d-46.4610813!3d-23.6785717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6bdf7eeae035%3A0x64c74af58885c6b0!2sR.+Jos%C3%A9+Figueiredo%2C+99-41+-+Vila+Assis+Brasil%2C+Mau%C3%A1+-+SP%2C+09370-660!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <img src={denkLogo} alt="Dental Denk" className="h-12 w-auto mx-auto mb-3" />
        <div className="flex items-center justify-center gap-4 mb-3">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
        <p className="text-primary-foreground/60 mt-3 text-sm">
          R. José Figueiredo, 41 - Vila Assis Brasil, Mauá - SP | (11) 4513-5722
        </p>
        <p className="text-primary-foreground/40 mt-4 text-xs">
          © {new Date().getFullYear()} Dental Denk. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-200"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HistorySection />
      <DifferentialsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
