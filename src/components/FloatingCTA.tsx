"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      {isExpanded && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 max-w-sm animate-in slide-in-from-bottom-4">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-bold mb-2 text-xeta-blue">Besoin d'aide ?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Discutez avec notre équipe et obtenez un devis gratuit en 24h
          </p>
          <Link href="/contact">
            <Button className="w-full bg-gradient-to-r from-xeta-blue to-blue-600 hover:from-xeta-blue/90 hover:to-blue-700">
              Démarrer une conversation
            </Button>
          </Link>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-r from-xeta-blue to-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}