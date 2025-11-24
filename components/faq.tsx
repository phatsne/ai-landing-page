"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Self-host có khó triển khai không?",
      answer:
        "Không. Chúng tôi đảm nhận toàn bộ: từ setup infrastructure đến training model. Bạn chỉ cần cung cấp server/cloud và dữ liệu.",
    },
    {
      question: "Chi phí có đắt hơn dùng ChatGPT API không?",
      answer:
        "Ngắn hạn: Cao hơn (do có initial investment).Dài hạn: Rẻ hơn nhiều nếu volume lớn (>100K requests/tháng).Bonus: Bảo mật tuyệt đối + tuân thủ pháp luật.",
    },
    {
      question: "Mô hình self-host có mạnh bằng GPT-4 không?",
      answer:
        "Our self-hosted models are oVới fine-tuning đúng cách, mô hình open-source như LLaMA 3, Mistral có thể đạt accuracy tương đương hoặc CAO HƠN GPT-4 cho use case đặc thù.",
    },
    {
      question: "Nếu không có đội ngũ AI, có vận hành được không?",
      answer:
        " Được. Chúng tôi cung cấp gói Managed Service: chúng tôi vận hành, bạn chỉ cần dùng qua API/dashboard.",
    },
    {
      question: "Bao lâu để go-live?",
      answer:
        "PoC: 2-4 tuần | Production: 2-3 tháng (tùy complexity)",
    },
  ]

  return (
    <section id="faq" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27] min-h-[800px]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Giải đáp mọi thắc mắc</h2>
          <p className="text-lg text-foreground/70">Những câu hỏi phổ biến nhất về giải pháp AI Self-Host</p>
        </div>

        <Accordion type="single" collapsible className="space-y-8 ">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 py-2">
              <AccordionTrigger className="text-left hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pt-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
