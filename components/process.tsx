"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import Product1 from "@/public/images/product1.png"
import Product2 from "@/public/images/product4.png"
import Product3 from "@/public/images/product3.png"
import Product4 from "@/public/images/product2.png"

export default function Process() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const steps = [
    {
      image: Product1,
      title: "Workshop & Khảo sát",
      description: "Hiểu nỗi lo lắng của khách hàng, xác định use case phù hợp",
    },
    {
      image: Product2,
      title: "PoC - Proof of Concept",
      description: "Triển khai thử nghiệm trên dữ liệu thực tế, đo lường KPIs",
    },
    {
      image: Product3,
      title: "Fine-tuning & Tích hợp",
      description: "Huấn luyện mô hình, tích hợp vào hệ thống hiện có",
    },
    {
      image: Product4,
      title: "Vận hành & Đồng hành",
      description: "Đào tạo team, hỗ trợ 24/7, bảo trì & nâng cấp",
    },
  ]

  return (
    <section id="process" className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Quy trình hợp tác đơn giản, minh bạch
          </h2>
        </div>

        {/* MOBILE */}
        {isMobile ? (
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5 items-start">
                <div className="w-16 h-16 relative shrink-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-start justify-center gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center flex-1 transition-all duration-500 hover:-translate-y-3 ${index === 0 || index === 2
                  ? "translate-y-28"
                  : "translate-y-0"
                  }`}
              >
                {/* Ảnh */}
                <div className="w-40 h-40 md:w-52 md:h-52 relative mb-10">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Tiêu đề */}
                <h3 className="text-xl md:text-2xl font-bold text-white text-center leading-tight">
                  {step.title}
                </h3>

                {/* Mô tả */}
                <p className="text-white/75 text-center mt-5 max-w-xs text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}