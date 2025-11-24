"use client"

import Image from "next/image"
import LogoInnovers from "@/public/images/Innoverse.png"
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0A0E27] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Cột 1: Logo + Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src={LogoInnovers}
                alt="InnoVerse Logo"
                width={168}
                height={48}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Giải pháp AI Self-Host cho Doanh nghiệp
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>contact@innoverse.vn</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+84 xxx xxx xxx</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>[Địa chỉ văn phòng]</span>
              </div>
            </div>
          </div>

          {/* Cột 2: Dịch vụ */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Dịch vụ</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                Large Language Models
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                Computer Vision
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                Self-Host Infrastructure
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                AI Consulting
              </li>
            </ul>
          </div>

          {/* Cột 3: Tài nguyên */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Tài nguyên</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                Blog
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                Case Studies
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                Whitepapers
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                FAQs
              </li>
            </ul>
          </div>

          {/* Cột 4: Công ty */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Công ty</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                Về InnoVerse
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                Đội ngũ
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                Careers
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="text-cyan-400">→</span>
                Liên hệ
              </li>
            </ul>
          </div>
        </div>

        {/* Dòng dưới cùng */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-white/50">
            © 2025 Innoverse. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}