"use client";
import React from "react";

/**
 * Clean hardware-accelerated scrolling wrapper.
 * By using native browser scrolling with CSS scroll-smooth,
 * we eliminate the 1.2s momentum input lag and wheel stutter caused by virtual scrollers.
 */
export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
