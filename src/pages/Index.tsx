import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Sword, Trophy,Footprints, Users, Zap, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Suscripción exitosa!",
        description: "Te has suscrito correctamente.",
      });
      setEmail("");
    }
  };

  const features = [
    {
      icon: Sword,
      title: "Estudio Convertido en Juego",
      description:
         "Transforma tus apuntes y PDFs en cartas de preguntas y mini-retos adictivos con IA.",
    },
    {
      icon: Trophy,
      title: "Progreso que Motiva",
      description:
        "Gana XP, sube de nivel, desbloquea cartas raras y compite en el ranking académico.",
    },
    {
      icon: Footprints,
       title: "Recompensas por Moverse",
      description:
        "Desbloquea power-ups y comodines cumpliendo misiones físicas en el mundo real.",
    },
    {
      icon: Zap,
      title: "Progreso Rápido",
      description:
        "Sigue tu avance en tiempo real y alcanza tus metas académicas más rápido.",
    },
  ];

  const faqs = [
    {
      question: "¿StudyLoop es un juego o una app de estudio?",
      answer:
      "¡Ambas cosas! Es la primera app que convierte tu estudio en una experiencia como Clash Royale o Pokémon GO. Transformamos tus apuntes en cartas de juego, tus sesiones de estudio en partidas y te recompensamos por mantenerte activo.",
    },
    {
       question: "¿Es gratis?",
      answer:
        "Sí, tenés un plan gratuito para probar todas las mecánicas principales. El plan premium desbloquea mazos ilimitados, estadísticas avanzadas y diferente rarezas de cartas.",
    },
    {
      question: "¿En serio tengo que moverme para desbloquear cosas?",
      answer:
        "No es obligatorio pero completar misiones físicas te da ventajas en el juego: power-ups, cartas raras y XP extra. Combate el sedentarismo mientras estudias.",
    },
    {
      question: "¿Puedo usar StudyLoop en mi móvil?",
      answer:
        "¡Por supuesto! StudyLoop está completamente optimizado para dispositivos móviles, tablets y computadoras. Puedes acceder desde cualquier lugar y en cualquier momento.",
    },
    {
      question: "¿Cómo convierto mis apuntes en cartas?",
      answer:
        "Es súper simple: cargás tus PDFs o apuntes en la app, y nuestra IA los transforma automáticamente en mazos de cartas con preguntas y retos. En segundos, tenés tu material de estudio gamificado.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aprende Más Rápido
              <br />
              con StudyLoop
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              La plataforma definitiva para estudiantes que quieren optimizar su
              aprendizaje, organizar su material de estudio y alcanzar el éxito
              académico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" >
              <a href="#suscribirse">
                <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 shadow-[var(--shadow-glow)]"
              >
                Comenzar Gratis
              </Button>
              </a>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por qué elegir StudyLoop?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Herramientas diseñadas para transformar tu experiencia de
              aprendizaje
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105 animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Respuestas a las dudas más comunes sobre StudyLoop
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    
      {/* Contact Section 
      <section id="contacto" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contáctenos</h2>
            <p className="text-xl text-muted-foreground">
              Estamos aquí para ayudarte en tu viaje de aprendizaje
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">contact@studyloop.com</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
              <p className="text-muted-foreground">
                Ciudad de México, México
              </p>
            </Card>
          </div>
        </div>
      </section>
*/}
      {/* Subscribe Section */}
      <section id="suscribirse" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Únete a StudyLoop
            </h2>
            <p className="text-xl text-muted-foreground">
              Recibe actualizaciones y recursos
              exclusivos en tu correo
            </p>
          </div>

          <Card className="p-8 shadow-[var(--shadow-soft)]">
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="correo@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-lg text-center "
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg"
              >
                Suscribirse Ahora
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Al suscribirte, aceptas recibir correos electrónicos de
                StudyLoop. Puedes darte de baja en cualquier momento.
              </p>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
