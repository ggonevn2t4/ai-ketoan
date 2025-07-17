const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">AI Kế Toán Việt</h3>
              <p className="text-blue-200 mb-4">
                Dẫn đầu công nghệ AI trong lĩnh vực kế toán và thuế tại Việt Nam
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-300">✓</span>
                <span>Tuân thủ 100% pháp luật Việt Nam</span>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-lg font-bold mb-4">Thông Tin Liên Hệ</h4>
              <div className="space-y-2 text-blue-200">
                <div className="flex items-center gap-2">
                  <span>👤</span>
                  <span>Quanglopez - Giám đốc Kinh doanh</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:0708684608" className="hover:text-white">
                    0708 684 608
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:admin@aiketoan.vn" className="hover:text-white">
                    admin@aiketoan.vn
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span>🌐</span>
                  <span>www.aiketoan.vn</span>
                </div>
              </div>
            </div>

            {/* Legal & Compliance */}
            <div>
              <h4 className="text-lg font-bold mb-4">Tuân Thủ & Pháp Lý</h4>
              <div className="space-y-2 text-blue-200 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Nghị định 132/2020/NĐ-CP</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Chuẩn OECD 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Luật Bảo vệ Dữ liệu 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>ISO 27001 - Bảo mật thông tin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-blue-300/20 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-blue-200 text-sm">
                © 2025 AI Kế Toán Việt. Bảo lưu mọi quyền.
              </div>
              <div className="flex gap-6 text-sm text-blue-200">
                <a href="#" className="hover:text-white">Chính sách bảo mật</a>
                <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
                <a href="#" className="hover:text-white">Hỗ trợ khách hàng</a>
              </div>
            </div>
            
            {/* Final CTA */}
            <div className="mt-6 bg-success text-success-foreground inline-block px-6 py-3 rounded-lg">
              <strong>⏰ Ưu đãi kết thúc sau 15 ngày - Đặt hàng ngay!</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;