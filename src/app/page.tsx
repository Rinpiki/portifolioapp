import Link from "next/link";
import Image from "next/image";
import { Search, Moon, X } from "lucide-react";
import HeaderPage from "@/components/HeaderPage";
import HeroSection from "@/components/HeroSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <HeaderPage />
      <main className="px-6 py-16 max-w-7xl mx-auto">
        <HeroSection />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
          <div className="bg-[#161f32] p-6 rounded-lg transition-all duration-300 hover:bg-[#252a35] hover:transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="text-yellow-400">💡</span>
              Intuitive
            </h3>
            <p className="text-gray-400">
              Stores are as familiar as components. API designed to let you
              write well organized stores.
            </p>
          </div>
          <div className="bg-[#161f32] p-6 rounded-lg transition-all duration-300 hover:bg-[#252a35] hover:transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="text-yellow-400">🔍</span>
              Type Safe
            </h3>
            <p className="text-gray-400">
              Types are inferred, which means stores provide you with
              autocompletion even in JavaScript!
            </p>
          </div>
          <div className="bg-[#161f32] p-6 rounded-lg transition-all duration-300 hover:bg-[#252a35] hover:transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="text-yellow-400">🛠</span>
              Devtools support
            </h3>
            <p className="text-gray-400">
              Pinia hooks into Vue devtools to give you an enhanced development
              experience in both Vue 2 and Vue 3.
            </p>
          </div>
          <div className="bg-[#161f32] p-6 rounded-lg transition-all duration-300 hover:bg-[#252a35] hover:transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="text-yellow-400">🔌</span>
              Extensible
            </h3>
            <p className="text-gray-400">
              React to store changes and actions to extend Pinia with
              transactions, local storage synchronization, etc.
            </p>
          </div>
          <div className="bg-[#161f32] p-6 rounded-lg transition-all duration-300 hover:bg-[#252a35] hover:transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="text-yellow-400">📦</span>
              Modular by design
            </h3>
            <p className="text-gray-400">
              Build multiple stores and let your bundler code split them
              automatically.
            </p>
          </div>
          <div className="bg-[#161f32] p-6 rounded-lg transition-all duration-300 hover:bg-[#252a35] hover:transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="text-yellow-400">🪶</span>
              Extremely light
            </h3>
            <p className="text-gray-400">
              Pinia weighs ~1.5kb, you will forget it&apos;s even there!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
