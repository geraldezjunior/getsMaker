import Image from 'next/image';
import waterMarkerImg from './assets/getWaterMarker.png';
import getsMakerLogo from './assets/getsMaker.png';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
          <Image
            src={getsMakerLogo}
            alt="getsMaker Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">
            GetsMaker
          </div>
        </div>
      </nav>

      {/* Header / Hero Section */}
      <header className="bg-[var(--color-primary)] text-white py-20 px-6 text-center shadow-md">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          getsMaker
        </h1>
        <p className="max-w-3xl mx-auto text-xl font-medium leading-relaxed opacity-95">
          Bem-vindo à linha getsMaker! Nós reunimos em um só lugar diversas
          funcionalidades simples e úteis que você precisa no dia a dia. Chega
          de procurar por ferramentas soltas na internet, aqui você encontra
          suas soluções de forma rápida e gratuita.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-16 px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">
            Nossas Ferramentas
          </h2>
          <p className="text-slate-600">
            Escolha um dos nossos serviços abaixo para facilitar seu trabalho.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* getWaterMarker Card */}
          <a
            href="https://getwatermarker.getsmaker.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:border-[var(--color-watermarker)] transition-all duration-300 flex flex-col h-full"
          >
            <div className="h-40 bg-white border-b border-slate-100 flex items-center justify-center relative p-4 group-hover:bg-slate-50 transition-colors">
              <Image
                src={waterMarkerImg}
                alt="getWaterMarker Logo"
                className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                getWaterMarker
              </h3>
              <p className="text-slate-600 text-sm flex-grow">
                Faça o upload de suas imagens e de uma logo, e adicione marca
                d'água a todas as fotos de forma simultânea e automática.
              </p>
              <div className="mt-6 flex items-center text-slate-800 font-bold text-sm">
                Acessar ferramenta
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </a>

          {/* Em Breve - Placeholder */}
          <div className="bg-slate-50 border border-slate-200 border-dashed rounded-2xl flex flex-col items-center justify-center p-8 text-center min-h-[300px] opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-slate-400 mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <h3 className="text-lg font-bold text-slate-600 mb-1">
              Novas Ferramentas
            </h3>
            <p className="text-slate-500 text-sm">
              Estamos criando mais utilidades para facilitar o seu dia a dia.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-200 mt-auto">
        &copy; {new Date().getFullYear()} getsMaker. Todos os direitos
        reservados.
      </footer>
    </div>
  );
}
