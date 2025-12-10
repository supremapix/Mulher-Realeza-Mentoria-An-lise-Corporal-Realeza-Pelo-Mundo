import { 
  BookOpen, 
  Video, 
  BrainCircuit, 
  MessageCircle, 
  Crown, 
  Users, 
  Plane 
} from 'lucide-react';
import { ServiceItem, Testimonial, FaqItem, FunnelStep } from './types';

export const WHATSAPP_NUMBER = '5541998667758';
export const EMAIL = 'mulherrealeza01@gmail.com';
export const INSTAGRAM = 'carlatutschke';

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Produto de Entrada",
    price: "R$ 10",
    description: "E-book exclusivo + 5 aulas profundas sobre a ferida masculina e como ela afeta suas relações.",
    ctaText: "Começar Agora",
    whatsappMessage: "Olá, gostaria de adquirir o Produto de Entrada por R$10."
  },
  {
    id: 2,
    title: "Kit Cura Emocional",
    price: "R$ 27",
    description: "Acesso a 20 conteúdos diversos e práticos para acelerar sua jornada de cura emocional.",
    ctaText: "Comprar Kit",
    whatsappMessage: "Olá, tenho interesse no Kit Cura Emocional por R$27."
  },
  {
    id: 3,
    title: "Análise Corporal",
    price: "R$ 297",
    originalPrice: "R$ 500",
    description: "Sessão individual com gráfico e devolutiva completa. Entenda como sua mente moldou seu corpo.",
    highlight: true,
    ctaText: "Agendar Análise",
    whatsappMessage: "Olá, gostaria de agendar minha Análise Corporal com desconto."
  },
  {
    id: 4,
    title: "Sessão Estratégica",
    price: "Consultar",
    description: "30 minutos de triagem e orientação direcionada para identificar seus bloqueios atuais.",
    ctaText: "Solicitar Sessão",
    whatsappMessage: "Olá, gostaria de saber mais sobre a Sessão Estratégica."
  },
  {
    id: 5,
    title: "Mentoria Mulher Realeza",
    price: "R$ 4.000",
    description: "Programa exclusivo de 6 encontros para uma transformação profunda e renascimento pessoal.",
    ctaText: "Aplicar para Mentoria",
    whatsappMessage: "Olá, gostaria de aplicar para a Mentoria Mulher Realeza."
  },
  {
    id: 6,
    title: "Imersões",
    price: "Sob Consulta",
    description: "Experiências presenciais ou online de alto impacto para desbloqueio emocional.",
    ctaText: "Saiba Mais",
    whatsappMessage: "Olá, tenho interesse nas Imersões."
  },
  {
    id: 7,
    title: "Viagens Realeza",
    price: "Sob Cotação",
    description: "A celebração final da sua jornada. Viagens transformadoras pelo mundo com acompanhamento.",
    ctaText: "Solicitar Cotação",
    whatsappMessage: "Olá, gostaria de uma cotação para as Viagens Realeza."
  }
];

export const FUNNEL_STEPS: FunnelStep[] = [
  { title: "Despertar", price: "R$ 10", description: "Entendendo a ferida", icon: BookOpen },
  { title: "Conhecimento", price: "R$ 27", description: "Ferramentas de cura", icon: Video },
  { title: "Imersão", description: "Vivência profunda", icon: Users },
  { title: "Diagnóstico", description: "Sessão Estratégica", icon: MessageCircle },
  { title: "Transformação", price: "Mentoria", description: "Acompanhamento VIP", icon: Crown },
  { title: "Celebração", description: "Viagem Realeza", icon: Plane },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Empresária",
    text: "A análise corporal mudou minha vida. Entendi por que repetia os mesmos padrões nos relacionamentos.",
    image: "https://picsum.photos/id/1011/100/100"
  },
  {
    id: 2,
    name: "Beatriz Santos",
    role: "Advogada",
    text: "A mentoria me trouxe a leveza que eu buscava há anos. Me sinto uma verdadeira rainha.",
    image: "https://picsum.photos/id/1027/100/100"
  },
  {
    id: 3,
    name: "Carla Oliveira",
    role: "Médica",
    text: "A viagem transformadora foi o divisor de águas. Conexão, luxo e cura em um só lugar.",
    image: "https://picsum.photos/id/338/100/100"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Como funciona a Análise Corporal?",
    answer: "A análise é feita através do formato do seu corpo, que revela como sua mente funciona. É uma sessão online onde mapeamos seus traços de caráter e te entregamos um 'manual de instruções' de si mesma."
  },
  {
    id: 2,
    question: "A mentoria é individual ou em grupo?",
    answer: "A Mentoria Mulher Realeza é um acompanhamento individual e personalizado, focado nas suas dores e objetivos específicos."
  },
  {
    id: 3,
    question: "As viagens são apenas para mentoradas?",
    answer: "Não, as viagens são abertas para mulheres que buscam transformação, mas alunas da mentoria têm condições especiais."
  },
  {
    id: 4,
    question: "O que está incluso no produto de R$10?",
    answer: "Você recebe um E-book exclusivo e acesso a aulas gravadas que introduzem o conceito da ferida masculina e os primeiros passos para a cura."
  }
];