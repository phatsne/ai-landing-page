"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import logoImage from "../public/images/Innoverse.png"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Giải pháp", href: "#solution" },
    { label: "Use Cases", href: "#usecases" },
    { label: "Về chúng tôi", href: "#about" },
    { label: "Câu hỏi", href: "#faq" },
  ]

  return (
    <nav className="sticky top-0 z-50 duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center h-22 px-6 rounded-[64px] border border-white/20 bg-linear-to-r from-white/5 to-white/5 backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="rounded-lg flex items-center justify-center">
              <Image
                src={logoImage}
                alt="InnoVerse Logo"
                height={50}
                className="logo-img"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-center ">
            <div className="flex gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-lg font-medium transition-colors ${isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-linear-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white text-base rounded-full px-6 py-2 font-semibol min-w-[178px] h-[58]">
              Đặt lịch Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 px-6 py-4 rounded-2xl border border-white/20 bg-linear-to-r from-white/5 to-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button className="w-full bg-linear-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white rounded-full py-2 font-semibold">
                Đặt lịch Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
