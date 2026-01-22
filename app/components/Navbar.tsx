"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl flex items-center font-bold text-[#C76A00]">
            <img src="/logo.png" alt="" className="w-14" />{" "}
            <span>SLJ Textile</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-[#C76A00]">
            <NavLink href="/" active={pathname === "/"}>
              Home
            </NavLink>
            <NavLink
              href="/categories"
              active={pathname.startsWith("/categories")}
            >
              Categories
            </NavLink>
            <NavLink href="/products" active={pathname.startsWith("/products")}>
              Products
            </NavLink>
            <NavLink href="/about" active={pathname === "/about"}>
              About
            </NavLink>
            <NavLink href="/contact" active={pathname === "/contact"}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#775b27]"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-white text-[#775b27] transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <span className="text-2xl font-bold">SLJ Textile</span>
          <button onClick={() => setOpen(false)} aria-label="Close Menu">
            <X size={28} />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-8 text-lg font-medium">
          <MobileLink
            href="/"
            active={pathname === "/"}
            onClick={() => setOpen(false)}
          >
            Home
          </MobileLink>
          <MobileLink
            href="/categories"
            active={pathname.startsWith("/categories")}
            onClick={() => setOpen(false)}
          >
            Categories
          </MobileLink>
          <MobileLink
            href="/products"
            active={pathname.startsWith("/products")}
            onClick={() => setOpen(false)}
          >
            Products
          </MobileLink>
          <MobileLink
            href="/about"
            active={pathname === "/about"}
            onClick={() => setOpen(false)}
          >
            About
          </MobileLink>
          <MobileLink
            href="/contact"
            active={pathname === "/contact"}
            onClick={() => setOpen(false)}
          >
            Contact
          </MobileLink>
        </nav>
      </div>
    </>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative transition
        ${
          active
            ? "text-amber-500 after:w-full"
            : "hover:text-amber-400 after:w-0"
        }
        after:absolute after:-bottom-1 text-[#552C1F] after:left-0 after:h-[2px]
        after:bg-amber-400 after:transition-all`}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  active,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-2xl tracking-wide transition
        ${active ? "text-yellow-500 font-semibold" : "hover:text-yellow-400"}`}
    >
      {children}
    </Link>
  );
}
