import React, { useEffect, useState } from 'react';
import { RxSwitch } from 'react-icons/rx';
import { useTheme } from './contexts/ContextProvider';

export default function App() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scrollspy: atualiza a aba ativa conforme o scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['historia', 'duda', 'review'];
      let current = '';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Se o centro da tela está dentro da seção, marque ela como ativa
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // chama ao montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const extraOffset = id === 'historia' ? -60 : 10;

      const offset =
        element.offsetTop -
        window.innerHeight / 2 +
        element.offsetHeight / 2 -
        headerHeight / 2 +
        extraOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white font-poppins min-h-screen overflow-x-hidden">
      {/* Cabeçalho */}
      <header className="w-full py-4 fixed top-0 left-0 bg-white dark:bg-black z-50 shadow-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <nav className="hidden md:flex space-x-6">
            <a
              href="#historia"
              className={`hover:text-[#9faad1] ${activeSection === 'historia' ? 'text-[#9faad1] font-semibold' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('historia');
              }}
            >
              História
            </a>
            <a
              href="#duda"
              className={`hover:text-[#d7cb8b] ${activeSection === 'duda' ? 'text-[#d7cb8b] font-semibold' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('duda');
              }}
            >
              Comprar
            </a>
            <a
              href="#review"
              className={`hover:text-[#b0867e] ${activeSection === 'review' ? 'text-[#b0867e] font-semibold' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('review');
              }}
            >
              Review
            </a>
          </nav>
          <button type="button" onClick={toggleTheme} className="scale-x-100 dark:-scale-x-100">
            <RxSwitch className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-start h-auto md:h-screen max-w-7xl mx-auto px-8 pt-20 md:pt-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug mb-6 text-center md:text-left">
            A Hora da Estrela – Clarice Lispector e o Silêncio das Vidas Invisíveis
          </h1>

          <p className="mt-6 text-lg md:text-2xl mb-8">
            Uma jornada literária{' '}
            <span className="text-[#d7cb8b] font-semibold">pela dor,</span>{' '}
            <span className="text-[#9faad1] font-semibold">identidade</span> e{' '}
            <span className="text-[#b0867e] font-semibold">invisibilidade de Macabéa</span>
          </p>
        </div>

        <div className="flex md:hidden w-full justify-center mt-8">
          <img
            src="/livro.png"
            alt="Mobile Mockup"
            className="w-[110%] max-w-xs object-contain"
          />
        </div>

        <div className="hidden md:flex w-full md:w-1/2 justify-end items-center ml-10">
          <img
            src="/livro.png"
            alt="Laptop Mockup"
            className="w-[50%] md:scale-150 object-contain"
          />
        </div>
      </div>

      {/* Seção História */}
      <section
        id="historia"
        className="flex flex-col items-center bg-white dark:bg-black py-12 mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center sm:text-3xl">
          Descrição
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-12">
          "A Hora da Estrela", obra-prima de Clarice Lispector, é mais do que um romance - é uma
          reflexão crua e poética sobre a existência. Neste site, exploramos os múltiplos sentidos da
          obra, o universo de sua protagonista Macabéa, e a complexa relação entre narrador e
          personagem. Da análise literária ao contexto histórico, este espaço é dedicado a todos que
          desejam mergulhar na essência desse clássico da literatura brasileira.
        </p>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12">
            <div className="flex-1 w-full lg:w-1/2">
              <img
                src="/fundo.png"
                className="max-w-md lg:max-w-sm mx-auto rounded-lg object-contain"
                alt="Imagem fundo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção Comprar */}
      <section
        id="duda"
        className="flex flex-col items-center justify-center py-16 px-4 mt-4 bg-white dark:bg-gray-900"
      >
        <h3 className="text-5xl font-bold mb-6 text-center">Comprar o Livro</h3>
        <div className="w-full max-w-4xl bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center border dark:border-gray-700">
          <div className="w-full md:w-1/2">
            <img
              src="/livro2.png"
              alt="Capa do Livro A Hora da Estrela"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              A Hora da Estrela
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Uma obra-prima de Clarice Lispector que mergulha na alma de Macabéa, uma jovem nordestina em busca de identidade e sentido em meio à invisibilidade social.
            </p>
            <p className="text-xl font-semibold text-[#d7cb8b] mb-6">R$ 34,90</p>
            <a
              href="https://www.amazon.com.br/dp/B076MZ1KZL" // troque pela URL de venda real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9faad1] hover:bg-[#8a97c2] text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* Seção Review */}
      <section
        id="review"
        className="flex flex-col items-center justify-center py-16 px-4 mt-4 bg-white dark:bg-gray-900"
      >
        <h3 className="text-5xl font-bold mb-6 text-center">Review</h3>
        <div className="w-full max-w-4xl bg-white dark:bg-black rounded-xl  overflow-hidden flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src="/duda.png"
              alt="Foto da Duda"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Duda Perez
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Duda é o tipo de pessoa que carrega a literatura no olhar. Entre tantas histórias, foi <em>A Hora da Estrela</em> que conquistou seu coração de forma definitiva. Ela se emociona com a trajetória de Macabéa, se conecta com sua solidão silenciosa e encontra beleza nas entrelinhas que Clarice escreve com tanta sensibilidade. Para Duda, esse livro não é só uma leitura — é uma experiência profunda que reverbera na alma.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
