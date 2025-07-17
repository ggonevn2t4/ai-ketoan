import { CTAButton } from "@/components/ui/cta-button";

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Đầu Tư Một Lần - Lợi Ích Trọn Đời
            </h2>
            <p className="text-lg text-muted-foreground">
              Giá trị vượt trội so với chi phí bỏ ra
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Gói Giải Pháp Toàn Diện AI Kế Toán
              </h3>
              <p className="text-lg opacity-90">7 Giải Pháp AI Chuyên Nghiệp</p>
            </div>

            {/* Pricing Details */}
            <div className="p-8">
              {/* Main Price */}
              <div className="text-center mb-8">
                <div className="text-gray-500 text-lg line-through mb-2">
                  Giá gốc: 35,000,000 VND
                </div>
                <div className="text-4xl md:text-5xl font-bold text-success mb-2">
                  31,500,000 VND
                </div>
                <div className="text-lg text-muted-foreground mb-4">
                  (Sử dụng trọn đời)
                </div>
                <div className="bg-red-100 text-red-700 inline-block px-4 py-2 rounded-full font-semibold">
                  🔥 GIẢM 10% - Tiết kiệm 3,5 triệu VND
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-center">Bao Gồm Toàn Bộ:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "✅ 7 Giải pháp AI hoàn chỉnh",
                    "✅ Tích hợp A-Z không phí ẩn",
                    "✅ Đào tạo sử dụng miễn phí",
                    "✅ Hỗ trợ 24/7 trong 1 năm đầu",
                    "✅ Cập nhật tính năng mới",
                    "✅ Tuân thủ 100% pháp luật 2025",
                    "✅ Bảo mật cấp ngân hàng",
                    "✅ Sao lưu dữ liệu tự động"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maintenance Fee */}
              <div className="bg-gray-medium p-6 rounded-lg mb-8">
                <h4 className="text-lg font-bold mb-2">Phí Duy Trì Hệ Thống:</h4>
                <div className="text-2xl font-bold text-primary">
                  3,500,000 VND/năm
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Bao gồm: Hosting, bảo trì, cập nhật luật, hỗ trợ kỹ thuật
                </p>
              </div>

              {/* Special Offer */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg mb-8 text-center">
                <h4 className="text-xl font-bold mb-2">🎯 ưu đãi có hạn!</h4>
                <p className="text-lg mb-2">
                  <strong>Ký hợp đồng trước 31/07/2025</strong>
                </p>
                <div className="text-lg">
                  <div>• Giảm 10% giá gốc (tiết kiệm 3,5 triệu)</div>
                  <div>• Tặng kèm đào tạo chuyên sâu</div>
                  <div>• Hỗ trợ tích hợp miễn phí</div>
                </div>
              </div>

              {/* ROI Calculator */}
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
                <h4 className="text-lg font-bold text-green-800 mb-4">💰 Tính Toán Lợi Nhuận:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-green-700">Tiết kiệm thời gian</div>
                    <div>70% = 140 giờ/tháng</div>
                    <div className="text-green-600">≈ 14 triệu/tháng</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-700">Tăng doanh thu</div>
                    <div>40% khách hàng mới</div>
                    <div className="text-green-600">≈ 20 triệu/tháng</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-700">Tránh phạt</div>
                    <div>Giảm rủi ro pháp lý</div>
                    <div className="text-green-600">≈ 5 triệu/tháng</div>
                  </div>
                </div>
                <div className="text-center mt-4 p-3 bg-green-600 text-white rounded font-bold">
                  Tổng lợi ích: 39+ triệu VND/tháng
                </div>
                <div className="text-center mt-2 text-green-800 font-semibold">
                  → Hoàn vốn trong 1 tháng!
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <CTAButton 
                  size="large"
                  className="w-full md:w-auto px-12 py-4 text-xl mb-4"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🚀 ĐẶT HÀNG NGAY - NHẬN ưu đãi 10%
                </CTAButton>
                <p className="text-sm text-muted-foreground">
                  ⏰ Chỉ còn <strong className="text-red-600">15 ngày</strong> để nhận ưu đãi!
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  * Cam kết hoàn tiền 100% nếu không hài lòng trong 30 ngày đầu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;