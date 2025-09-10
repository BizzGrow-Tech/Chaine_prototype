// app/page.tsx (Next.js 13+ App Router)
//import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#2b1c17] to-[#4a3327] text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
            ☕
          </div>
          <span className="text-xl font-bold">Elza Coffee</span>
        </div>
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="hover:text-yellow-300">
            Home
          </a>
          <a href="#menu" className="hover:text-yellow-300">
            Menu
          </a>
          <a href="#services" className="hover:text-yellow-300">
            Services
          </a>
          <a href="#product" className="hover:text-yellow-300">
            Product
          </a>
          <a href="#blog" className="hover:text-yellow-300">
            Blog
          </a>
          <a href="#contact" className="hover:text-yellow-300">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button>☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16">
        {/* Left content */}
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-6">Elza Coffee</h1>
          <p className="mb-6 text-lg text-gray-300">
            Today’s good mood is sponsored by coffee ☕ <br />
            Search for your coffee now
          </p>
          <div className="flex space-x-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full">
              Shop Now
            </Button>
            <Button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-600/20 px-6 py-2 rounded-full">
              Catalog
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="mt-10 md:mt-0">
          <img
            src="/coffee-hero.png"
            alt="Coffee cup"
            className="rounded-2xl shadow-lg w-[500px]"
          />
        </div>
      </section>

      {/* Highlight Card */}
      <section className="px-10 md:px-20 pb-16">
        <div className="bg-[#3b2821] rounded-2xl p-6 flex items-center gap-6 max-w-xl shadow-lg">
          <img
            src="/coffee-hero.png"
            alt="Coffee cup"
            className="rounded-2xl shadow-lg w-[500px]"
          />

          <div>
            <h3 className="text-xl font-semibold">Best Fresh Coffee</h3>
            <Button className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-full">
              Buy Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
