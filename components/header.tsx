"use client"

import HeroImage from "@/public/images/backgroundHeader.jpg"

export default function HeroSection() {
    return (
        <section
            className="relative min-h-[640px] flex items-center justify-center"
            style={{
                backgroundImage: `url(${HeroImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Nội dung */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block text-white">
                        Giải pháp{" "}
                        <span className="text-[#A5D6FF]">
                            AI Self-Host
                        </span>{" "}
                        Dành cho
                    </span>
                    <span className="block text-white">
                        Doanh nghiệp Việt Nam
                    </span>
                </h1>

                <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/85 max-w-5xl mx-auto leading-relaxed">
                    Sức mạnh của{" "}
                    <span className="text-cyan-300 font-semibold">UX Pilot & Computer Vision</span>,
                    triển khai 100% trên hạ tầng của bạn.
                    <br className="hidden md:block" />
                    <span className="text-cyan-200 font-medium">
                        Không một byte dữ liệu nào rời khỏi tường lửa công ty.
                    </span>
                </p>
            </div>
        </section>
    )
}