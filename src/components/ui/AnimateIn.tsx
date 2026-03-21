"use client";

import { type ReactNode } from "react";
import useInView from "@/hooks/useInView";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: AnimateInProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
