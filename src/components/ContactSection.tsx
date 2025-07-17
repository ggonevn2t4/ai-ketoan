import { CTAButton } from "@/components/ui/cta-button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-success to-success/80 text-success-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ⏰ Đừng Để Cơ Hội Trôi Qua!
            </h2>
            <p className="text-xl md:text-2xl mb-6 text-green-100">
              Còn <strong className="text-yellow-300">15 ngày</strong> để nhận ưu đãi giảm 10%
            </p>
            <div className="bg-red-600 text-white inline-block px-6 py-3 rounded-lg font-bold text-lg animate-pulse">
              🔥 Chỉ có 5 slot cuối cùng trong tháng này!
            </div>
          </div>

          {/* Main CTA */}
          <div className="mb-12">
            <CTAButton 
              variant="secondary"
              size="large" 
              className="text-2xl px-12 py-6 mb-6 transform hover:scale-105 shadow-2xl"
            >
              🚀 LIÊN HỆ NGAY ĐỂ NHẬN ưu đãi!
            </CTAButton>
            <p className="text-lg text-green-100">
              Demo miễn phí + Tư vấn chuyên sâu từ chuyên gia
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Contact */}
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">📧 Email Trực Tiếp</h3>
              <a 
                href="mailto:lan@aiketoan.vn?subject=Đăng ký Demo 7 Giải pháp AI&body=Tôi muốn đăng ký demo miễn phí và nhận ưu đãi 10%"
                className="text-yellow-300 hover:text-yellow-200 text-lg font-semibold underline"
              >
                lan@aiketoan.vn
              </a>
              <p className="text-sm text-green-100 mt-2">
                Trả lời trong vòng 2 giờ
              </p>
            </div>

            {/* Phone Contact */}
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">📞 Hotline 24/7</h3>
              <a 
                href="tel:0708684608"
                className="text-yellow-300 hover:text-yellow-200 text-lg font-semibold"
              >
                0708 684 608
              </a>
              <p className="text-sm text-green-100 mt-2">
                Gọi ngay để được tư vấn
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">📝 Đăng Ký Demo Nhanh</h3>
            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Họ và tên *"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                required
              />
              <input
                type="tel"
                placeholder="Số điện thoại *"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                required
              />
              <input
                type="text"
                placeholder="Tên công ty"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <textarea
                placeholder="Ghi chú thêm (tùy chọn)"
                rows={3}
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <CTAButton 
                variant="secondary"
                size="large" 
                className="w-full text-lg py-4"
                type="submit"
              >
                🎯 Gửi Yêu Cầu Demo Ngay!
              </CTAButton>
            </form>
            <p className="text-xs text-green-100 mt-4">
              * Thông tin của bạn được bảo mật 100% theo Luật BVDL 2023
            </p>
          </div>

          {/* Final Incentive */}
          <div className="mt-12 bg-yellow-400 text-yellow-900 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">🎁 Quà tặng đặc biệt!</h4>
            <p className="text-lg">
              Khách hàng đầu tiên sẽ nhận thêm <strong>1 năm hỗ trợ VIP miễn phí</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;