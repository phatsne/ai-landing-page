"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Brain_icon from "@/public/images/Brain-icon.png"
import Eye_icon from "@/public/images/Eye-icon.png"
import Rocket_icon from "@/public/images/Rocket-icon.png"
import Arrow from "@/public/icon/Arrow.png"

export default function Features() {
  const features = [
    {
      title: "Mô hình Ngôn ngữ lớn",
      icon: Brain_icon,
      items: [
        "Chatbot & Trợ lý ảo thông minh: Hỗ trợ khách hàng 24/7",
        "Fine-tuning theo ngành: Hiểu thuật ngữ chuyên ngành",
        "Hệ thống RAG: Kết nối các số tư thức công ty",
        "Phân tích văn bản: Tóm tắt hộp đơn, phân loại email",
      ],
    },
    {
      title: "Thị giác máy tính",
      icon: Eye_icon,
      items: [
        "eKYC & Trích xuất dữ liệu: Nhận diện CCCD, hóa đơn",
        "QC Sản xuất tự động: Phát hiện lỗi real-time",
        "Giám sát An ninh thông minh: Nhận diện hành vi bất thường",
        "Nhận diện Đối tượng: Biển số xe, khuôn mặt",
      ],
    },
    {
      title: "Hạ tầng tự vận hành",
      icon: Rocket_icon,
      items: [
        "Dữ liệu KHÔNG BAO GIỜ rời hạ tầng của bạn",
        "Tuân thủ 100% quy định nội bộ & phép luật VN",
        "Chi phí dự đoán: Trả 1 lần, dùng không giới hạn",
        "Tốc độ nhanh: Không phụ thuộc Internet",
      ],
    },
  ]

  return (
    <section id="features" className="py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Tiêu đề section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            InnoAI: Mạnh mẽ, bảo mật tuyệt đối
          </h2>
          <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
            Chúng tôi triển khai các mô hình AI tiên tiến (Mô hình ngôn ngữ, Thị giác máy tính)
            trực tiếp trên hạ tầng của doanh nghiệp — on-premise hoặc private cloud.
          </p>
        </div>

        {/* Grid 3 Card bằng shadcn/ui */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#217AA7]
                         bg-linear-to-b from-black/90 via-white/0 to-[#217AA7]
                         backdrop-blur-sm hover:border-[#8AB0F9]
                         hover:shadow-2xl
                         h-full min-h-[520px]
                         flex flex-col p-0.5 "
            >
              {/* Halo glow khi hover */}
              <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div className="absolute top-10 w-48 h-48 bg-blue-400/20 blur-3xl 
                                scale-0 group-hover:scale-150 transition-transform duration-700" />
              </div>

              {/* Icon */}
              <CardHeader className="flex justify-center">
                <div className="relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={150}
                    height={150}
                    className="w-32 h-32 md:w-36 md:h-36 object-contain drop-shadow-2xl
                               group-hover:scale-110 transition-all duration-500"
                    priority={index === 0}
                  />
                </div>
              </CardHeader>

              {/* Tiêu đề + Danh sách */}
              <CardContent className="flex flex-col flex-1 px-8 pb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                  {feature.title}
                </h3>

                {/* Danh sách – đẩy xuống sát đáy */}
                <ul className="space-y-4 mt-auto text-white/80">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-base leading-relaxed mx-6">
                      <Image
                        src={Arrow}
                        alt=""
                        width={24}
                        height={24}
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}