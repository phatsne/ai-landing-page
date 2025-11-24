"use client"

import { motion, useAnimation } from "framer-motion"
import Img from "next/image"
import { useEffect, useState } from "react"

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
    { src: "VnResource.jpg", top: "5%", left: "0%", width: 120, height: 120 },
    { src: "humannext1.png", top: "5%", left: "20%", width: 150, height: 150 },
    { src: "gumac.jpg", top: "5%", left: "40%", width: 150, height: 150 },
    { src: "propcom.png", top: "0%", left: "55%", width: 100, height: 100 },
    { src: "phuhunglogo.png", top: "20%", left: "62%", width: 120, height: 120 },
    { src: "aiking.png", top: "0%", left: "75%", width: 120, height: 120 },
    { src: "hvc.png", top: "10%", left: "90%", width: 100, height: 100 },
    { src: "pcg.png", top: "30%", left: "90%", width: 100, height: 100 },
    { src: "colina.png", top: "50%", left: "80%", width: 120, height: 120 },
    { src: "Grandemy.png", top: "75%", left: "85%", width: 120, height: 120 },
    { src: "Apac.png", top: "82%", left: "73%", width: 100, height: 100 },
    { src: "kiwooza.png", top: "70%", left: "55%", width: 150, height: 150 },
    { src: "thangloi.png", top: "65%", left: "40%", width: 150, height: 150 },
    { src: "NNI.png", top: "75%", left: "27%", width: 100, height: 100 },
    { src: "pacisoft.png", top: "72%", left: "8%", width: 160, height: 160 },
    { src: "phuonganh.jpg", top: "50%", left: "0%", width: 130, height: 130 },
    { src: "Eagle_ventures.png", top: "25%", left: "5%", width: 150, height: 150 },
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
              <Img
                src={`/images/partner/${logo.src}`}
                alt={logo.src.replace(/\.[^/.]+$/, "")}
                width={w}
                height={h}
                className="object-contain hover:scale-110 transition-transform duration-300"
                unoptimized
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