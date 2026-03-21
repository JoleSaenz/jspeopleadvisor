import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 p-8 ${
        hover
          ? "transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1 hover:border-purple-200"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
