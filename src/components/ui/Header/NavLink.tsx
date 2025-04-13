"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  className,
  children,
  highlightHref,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  highlightHref?: string;
}) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${path.startsWith(href) || path.includes(highlightHref!) 
        ? "bg-primary hover:bg-primary-hover p-2 rounded-full transition-all duration-300" 
        : undefined} ${className}`}
    >
      {children}
    </Link>
  );
}
