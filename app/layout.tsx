import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'getsMaker | Ferramentas Gratuitas para o seu Dia a Dia',
  description:
    'O getsMaker reúne diversas ferramentas práticas e utilidades essenciais em um só lugar. Automatize tarefas cotidianas de forma rápida, inteligente e totalmente gratuita.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
