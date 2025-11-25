"use client"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import Partner1 from "@/public/images/partner/VnResource.jpg"
import Partner2 from "@/public/images/partner/humannext1.png"
import Partner3 from "@/public/images/partner/gumac.jpg"
import Partner4 from "@/public/images/partner/propcom.png"
import Partner5 from "@/public/images/partner/phuhunglogo.png"
import Partner6 from "@/public/images/partner/aiking.png"
import Partner7 from "@/public/images/partner/hvc.png"
import Partner8 from "@/public/images/partner/pcg.png"
import Partner9 from "@/public/images/partner/colina.png"
import Partner10 from "@/public/images/partner/Grandemy.png"
import Partner11 from "@/public/images/partner/Apac.png"
import Partner12 from "@/public/images/partner/kiwooza.png"
import Partner13 from "@/public/images/partner/thangloi.png"
import Partner14 from "@/public/images/partner/NNI.png"
import Partner15 from "@/public/images/partner/pacisoft.png"
import Partner16 from "@/public/images/partner/phuonganh.jpg"
import Partner17 from "@/public/images/partner/Eagle_ventures.png"

export default function PartnersSection() {
  const controls = useAnimation()
  const [isMobile, setIsMobile] = useState(false) // Thêm state này để fix lỗi window

  // Kiểm tra mobile an toàn, chỉ chạy trên client
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Animation khi scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("partners-section")
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (rect.top < windowHeight * 0.6 && rect.bottom > 0) {
        controls.start({ scale: 1, opacity: 1 })
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [controls])

  const logos = [
    { src: Partner1, name: "VnResource", top: "5%", left: "0%", width: 120, height: 120 },
    { src: Partner2, name: "HumanNext", top: "5%", left: "20%", width: 150, height: 150 },
    { src: Partner3, name: "Gumac", top: "5%", left: "40%", width: 150, height: 150 },
    { src: Partner4, name: "PropCom", top: "0%", left: "55%", width: 100, height: 100 },
    { src: Partner5, name: "PhuHung", top: "20%", left: "62%", width: 120, height: 120 },
    { src: Partner6, name: "AIKing", top: "0%", left: "75%", width: 120, height: 120 },
    { src: Partner7, name: "HVC", top: "10%", left: "90%", width: 100, height: 100 },
    { src: Partner8, name: "PCG", top: "30%", left: "90%", width: 100, height: 100 },
    { src: Partner9, name: "Colina", top: "50%", left: "80%", width: 120, height: 120 },
    { src: Partner10, name: "Grandemy", top: "75%", left: "85%", width: 120, height: 120 },
    { src: Partner11, name: "Apac", top: "82%", left: "73%", width: 100, height: 100 },
    { src: Partner12, name: "Kiwooza", top: "70%", left: "55%", width: 150, height: 150 },
    { src: Partner13, name: "ThangLoi", top: "65%", left: "40%", width: 150, height: 150 },
    { src: Partner14, name: "NNI", top: "75%", left: "27%", width: 100, height: 100 },
    { src: Partner15, name: "PaciSoft", top: "72%", left: "8%", width: 160, height: 160 },
    { src: Partner16, name: "PhuongAnh", top: "50%", left: "0%", width: 130, height: 130 },
    { src: Partner17, name: "Eagle Ventures", top: "25%", left: "5%", width: 150, height: 150 },
  ]

  return (
    <section id="partners-section" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden my-20">
      {/* Main content container */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full max-w-6xl h-[700px]"
      >
        {/* Logos */}
        {logos.map((logo, i) => {
          const w = logo.width ?? 80
          const h = logo.height ?? 80
          const scale = isMobile ? 0.7 : 1

          return (
            <div
              key={i}
              className="absolute flex items-center justify-center overflow-hidden rounded-2xl"
              style={{
                top: logo.top,
                left: logo.left,
                width: `${w * scale}px`,
                height: `${h * scale}px`,
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={w}
                height={h}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          )
        })}

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-semibold max-w-3xl leading-snug">
            Đối tác & Khách Hàng
          </h1>
        </div>
      </motion.div>

      {/* Twinkle animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  )
}