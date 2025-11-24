import { Card, CardContent, CardHeader, } from "@/components/ui/card"
import Image from "next/image"
import Image1 from "@/public/icon/Lock.svg"
import Image2 from "@/public/icon/Piggybank.svg"
import Image3 from "@/public/icon/Bussiness.svg"

const challenges = [
  {
    icon: Image1,
    title: "Lo ngại bảo mật",
    description: "Không thể đưa dữ liệu nhạy cảm (hợp đồng, CCCD, hồ sơ bệnh án) lên các nền tảng AI công cộng?",
  },
  {
    icon: Image2,
    title: "Chi phí khó kiểm soát",
    description: "API calls tăng vọt khi scale? Không biết trước chi phí hàng tháng từ OpenAI/Claude?",
  },
  {
    icon: Image3,
    title: "Yêu cầu tuân thủ",
    description: "Ngân hàng Nhà nước, Bộ Y tế yêu cầu dữ liệu KHÔNG được lưu trữ ở nước ngoài?",
  },
]

export default function Challenges() {
  return (
    <section id="benefits" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Tiêu đề section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
            Bạn có đang đối mặt với những thách thức này?
          </h2>
        </div>
        {/* Grid 3 card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 
             bg-card/80 backdrop-blur-sm overflow-hidden 
             min-h-[500px] border-2 border-[#217AA7]
             flex flex-col"
            >
              <div className="absolute inset-0 bg-linear-to-b from-[#125A8D]/25 to-[#125A8D]/5" />

              <CardHeader className="pb-8 pt-14 relative">
                <div className="mx-auto w-[150px] h-[150px] flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-4 mt-8">
                <h3 className="text-xl md:text-2xl font-bold text-center text-foreground">
                  {item.title}
                </h3>
                <p className="text-center text-muted-foreground leading-relaxed text-base md:text-lg">
                  {item.description}
                </p>
              </CardContent>
            </Card>

          ))}
        </div>
      </div>
    </section>
  )
}
