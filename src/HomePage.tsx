import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Search, Gift, SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
    return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFD166] via-[#FF6B6B] to-[#4ECDC4] text-gray-900">
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#FF6B6B] font-quicksand text-2xl font-bold">
            <Gift className="w-6 h-6" /> Givly
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-[#FF6B6B]">Suchen</a>
            <a href="#" className="hover:text-[#FF6B6B]">Entdecken</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-white mb-6">
          Entdecke die perfekten Geschenke
        </h1>
        <p className="text-white text-lg max-w-2xl mx-auto mb-8">
          Finde einzigartige und passende Geschenkideen für jeden Anlass und jede Person – einfach, schnell und inspirierend
        </p>
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="flex flex-1 items-center bg-[#f5f5f7] rounded-full px-4 py-3 shadow-sm">
            <input
              type="text"
              placeholder="Für wen oder zu welchem Anlass suchst du ein Geschenk?"
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 px-2"
            />
            <button className="ml-4 w-10 h-10 rounded-full bg-[#FF6B6B] flex items-center justify-center shrink-0">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
          <button
            className="py-5 px-6 h-15 rounded-full bg-[#f5f5f7] flex items-center justify-center gap-2 border border-gray-300 text-sm font-medium group hover:text-[#FF6B6B]"
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-900 group-hover:text-[#FF6B6B]" />
            <span className="text-gray-900 group-hover:text-[#FF6B6B]">Filter</span>
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-6 text-sm text-white/90">
          <span>Beliebt:</span>
          <span className="bg-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white/30">Geburtstag</span>
          <span className="bg-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white/30">Weihnachten</span>
          <span className="bg-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white/30">Personalisiert</span>
          <span className="bg-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white/30">Unter 50€</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-6 text-sm font-medium">
            <span className="text-[#FF6B6B] border-b-2 border-[#FF6B6B] pb-1 cursor-pointer">Beliebt</span>
            <span className="hover:text-[#FF6B6B] cursor-pointer">Neuheiten</span>
            <span className="hover:text-[#FF6B6B] cursor-pointer">Geburtstag</span>
            <span className="hover:text-[#FF6B6B] cursor-pointer">Hochzeit</span>
            <span className="hover:text-[#FF6B6B] cursor-pointer">Weihnachten</span>
            <span className="hover:text-[#FF6B6B] cursor-pointer">Jahrestag</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img
                src={`https://fastly.picsum.photos/id/835/500/300.jpg?hmac=-YGtvgqL6iNxKvqRze3-qDrtPAOXXigTgFU2YHhNYZQ`}
                alt="Gift Image"
                className="w-full h-52 object-cover border-b"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-base">Geschenkidee #{i + 1}</h3>
                    <p className="text-sm text-gray-500">Kategorie XYZ</p>
                  </div>
                  <span className="text-[#FF6B6B] font-bold">{(Math.random() * 100).toFixed(2)} €</span>
                </div>
                <div className="text-xs mb-2">
                  <span className="bg-[#4ECDC4]/10 text-[#4ECDC4] rounded px-2 py-0.5 mr-2">Anlass</span>
                  <span className="bg-[#FFD166]/10 text-[#FFD166] rounded px-2 py-0.5">Empfänger</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 border-t pt-2 mt-2">
                  <span className="flex items-center gap-1">⭐ 4.{Math.floor(Math.random() * 9)}</span>
                  <span className="flex items-center gap-1">❤️ {Math.floor(Math.random() * 200)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
