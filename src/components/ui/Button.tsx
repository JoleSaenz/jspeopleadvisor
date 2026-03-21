"use client";

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2";

const variants = {
  primary:
    "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25 active:scale-[0.98]",
  secondary:
    "bg-white text-purple-700 border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 active:scale-[0.98]",
  outline:
    "bg-transparent text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white active:scale-[0.98]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return <a href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
