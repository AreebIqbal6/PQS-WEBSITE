"use client";
import React, { useEffect, useState } from "react";

// Register liquid-glass-js web component on the client only
export default function FloatingGlass() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    import("liquid-glass-js").then(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute top-1/4 right-[10%] z-30 pointer-events-auto">
      {/* @ts-ignore - Custom Web Component */}
      <liquid-glass 
        background="#hero-background" 
        width="300" 
        height="400" 
        radius="100"
        scale="40" 
        chroma="0.15" 
        tint="0.1"
      ></liquid-glass>
    </div>
  );
}
