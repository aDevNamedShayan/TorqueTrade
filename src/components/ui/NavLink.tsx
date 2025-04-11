'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  const path = usePathname()
  
  return (
    <Link href={href} className={`${path === href ? 'bg-primary hover:bg-primary-hover p-2 rounded-full transition-all duration-300' : undefined} ${className}`}>{children}</Link>
  );
}