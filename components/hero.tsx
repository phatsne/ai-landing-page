"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem, RadioGroupIndicator } from "@radix-ui/react-radio-group"
import { Camera, MessageSquare } from "lucide-react"
import Book from "@/public/images/aiBook.jpg"
import Image from "next/image"

// THAY URL NÀY BẰNG URL GOOGLE APPS SCRIPT CỦA BẠN
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbz3JevqFbLFIRvM_JQnXZKCbAWfOgPdyk96VoUHoN-f5yWyMujvvdYGJCLMgZX9frRbVA/exec"

export default function Hero() {
  const [formData, setFormData] = useState({
    preference: "demo",
    company: "",
    email: "",
    phone: "",
    industry: "",
  })
  const [isLoading, setIsLoading] = useState(false) // thêm loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    if (type === "radio") {
      setFormData((prev) => ({
        ...prev,
        preference: value,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain",
        },
        mode: "no-cors",
      })

      alert("Gửi thành công! Chúng tôi sẽ liên hệ bạn sớm.")
      setFormData({ preference: "demo", company: "", email: "", phone: "", industry: "" })
    } catch (error) {
      alert("Có lỗi xảy ra. Vui lòng thử lại.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="home" className="pt-32 pb-12 md:pb-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Title and Image */}
          <div>
            <p className="text-xl pb-6 ">Đăng ký để tải sách</p>
            <div className=" flex justify-center items-center">
              <Image
                src={Book}
                alt="AI Playbook"
                width={452}
                height={680}
                className="w-full max-w-2xl rounded-xl shadow-2xl"
              />
            </div>
          </div>
          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-12 relative pb-12">
              {/* Radio Options */}
              <div>
                <p className="text-white text-xl font-medium mb-4">Tôi muốn:</p>
                <div className="space-y-3">
                  <RadioGroup
                    value={formData.preference}
                    onValueChange={(v) => setFormData((prev) => ({ ...prev, preference: v }))}
                    aria-label="Tôi muốn"
                    className="space-y-3"
                  >
                    {/* Option Demo */}
                    <label
                      htmlFor="demo"
                      className="flex items-center p-4 rounded-lg border border-white/20 bg-linear-to-r from-blue-900/30 to-purple-900/30 cursor-pointer hover:border-white/40 transition"
                    >
                      <RadioGroupItem
                        value="demo"
                        id="demo"
                        className="w-5 h-5 border border-white/50 rounded-full flex items-center justify-center shrink-0"
                      >
                        <RadioGroupIndicator className="w-3 h-3 bg-white rounded-full" />
                      </RadioGroupItem>
                      <Camera className="text-blue-400 ml-3 mr-2" />
                      <span className="text-white font-medium">Đặt lịch Demo (30 phút)</span>
                    </label>

                    {/* Option Self-Host */}
                    <label
                      htmlFor="selfhost"
                      className="flex items-center p-4 rounded-lg border border-white/20 bg-linear-to-r from-blue-900/30 to-purple-900/30 cursor-pointer hover:border-white/40 transition"
                    >
                      <RadioGroupItem
                        value="selfhost"
                        id="selfhost"
                        className="w-5 h-5 border border-white/50 rounded-full flex items-center justify-center shrink-0"
                      >
                        <RadioGroupIndicator className="w-3 h-3 bg-white rounded-full" />
                      </RadioGroupItem>
                      <MessageSquare className="text-blue-400 ml-3 mr-2" />
                      <span className="text-white font-medium">Nhận tư vấn về AI Self-Host</span>
                    </label>
                  </RadioGroup>
                </div>
              </div>

              {/* Company Name */}
              <div>
                <Label htmlFor="company" className="text-white font-medium">
                  Tên công ty <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Tên công ty của bạn"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-white/20 text-white placeholder:text-white/50 rounded-lg h-[58px]"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-white font-medium">
                  Email doanh nghiệp <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email của bạn"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-white/20 text-white placeholder:text-white/50 rounded-lg h-[58px]"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-white font-medium">
                  Số điện thoại <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Số điện thoại của bạn"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setFormData({ ...formData, phone: value });
                  }}
                  pattern="^(?:\+84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$"
                  title="Nhập số điện thoại Việt Nam hợp lệ, ví dụ: 0912345678 hoặc +84912345678"
                  className="mt-2 bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-white/20 text-white placeholder:text-white/50 rounded-lg h-[58px]"
                  required
                />
              </div>

              {/* Industry */}
              <div>
                <Label htmlFor="industry" className="text-white font-medium">
                  Ngành nghề
                </Label>
                <Input
                  id="industry"
                  name="industry"
                  type="text"
                  placeholder="Lĩnh vực nghề nghiệp của bạn"
                  value={formData.industry}
                  onChange={handleChange}
                  className="mt-2 bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-white/20 text-white placeholder:text-white/50 rounded-lg h-[58px]"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="mt-20 w-[162px] h-14 rounded-[99px] bg-linear-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-xl text-white absolute right-1"
              >
                {isLoading ? "Đang gửi..." : "Tải sách"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}