import React, { useEffect } from 'react';
import { RxSwitch } from 'react-icons/rx';
import { useTheme } from './contexts/ContextProvider';

export default function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

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
    } else {
      // console.warn(`Elemento com o ID "${id}" não encontrado.`);
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
              className="hover:text-[#9faad1]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('historia');
              }}
            >
              História
            </a>
            <a
              href="#time"
              className="hover:text-[#d7cb8b]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('time');
              }}
            >
              Time
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
            src="/qhuntpc.png"
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

      {/* Seção Time */}
      <section
        id="time"
        className="flex flex-col items-center justify-center py-8 mt-4"
      >
        <h3 className="text-5xl font-bold mb-4">Time</h3>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mb-8"></p>
        <div className="w-full flex justify-center">
          <img
            src="/time.png"
            alt="Time"
            className="w-full max-w-3xl h-auto object-contain rounded-lg"
          />
        </div>
      </section>

      {/* Barra colorida */}
      <div className="w-full flex" style={{ height: '5px' }}>
        <div className="flex-1 bg-[#22b2ab]" />
        <div className="flex-1 bg-yellow-500" />
        <div className="flex-1 bg-[#18837e]" />
      </div>
    </div>
  );
}
