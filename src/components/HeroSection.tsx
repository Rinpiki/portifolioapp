import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-5xl lg:text-5xl font-bold -mb-4">
          <span className="bg-gradient-to-t from-yellow-400 to-green-400 bg-clip-text text-transparent">
            Marcos Coelho
          </span>
          <span className="text-4xl font-bold leading-tight block text-[#d9e6eb] md:text-5xl">
            Desenvolvedor fullstack
          </span>
        </h1>
        <p className="text-gray-400 text-2xl">
          Criando aplicações seguras
          <br />
          otimizadas e de alta performance.
        </p>
        <div className="space-y-4 flex flex-col items-center lg:items-start">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/get-started"
              className="bg-yellow-400 text-black px-6 py-2  rounded-full font-medium hover:bg-yellow-500"
            >
              Veja meu currículo
            </Link>
            <Link
              href="/demo"
              className="bg-[#252a35] px-6 py-2 rounded-full font-medium hover:bg-gray-800"
            >
              Github
            </Link>
            <Link
              href="/mastering"
              className="bg-[#252a35] px-6 py-2 rounded-full font-medium hover:bg-gray-800 flex items-center gap-2"
            >
              Projeto mais recente
            </Link>
          </div>
        </div>
      </div>
      <div className="relative order-first lg:order-last">
        <div className="relative z-10 mx-auto text-center text-[100px] sm:text-[150px] md:text-[200px] lg:text-[200px]">
          🐇
        </div>
        <div className="absolute inset-0 bg-green-400 opacity-20 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
}
