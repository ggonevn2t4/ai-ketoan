const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      icon: "📋",
      title: "Lập Tờ Khai Giao Dịch Liên Kết (Phụ lục 01)",
      description: "AI phân tích dữ liệu tự động, tạo file XML chuẩn, kiểm tra lỗi thông minh",
      benefits: [
        "Tiết kiệm 50% thời gian lập tờ khai",
        "Tránh phạt lên đến 25 triệu VND",
        "Tự động kiểm tra và sửa lỗi",
        "Xuất file XML chuẩn Tổng cục Thuế"
      ],
      highlight: "Tiết kiệm 50% thời gian"
    },
    {
      id: 2,
      icon: "📊",
      title: "Báo Cáo Giao Dịch Liên Kết",
      description: "Benchmarking CUP/RPM tự động, tạo hồ sơ Local File và CbCR chuẩn OECD",
      benefits: [
        "Tuân thủ hoàn hảo chuẩn OECD 2025",
        "Giảm 30% chi phí kiểm toán",
        "Tự động so sánh giá thị trường",
        "Tạo báo cáo đa ngôn ngữ"
      ],
      highlight: "Chuẩn OECD 2025"
    },
    {
      id: 3,
      icon: "🔍",
      title: "Lọc Sổ Sách Kế Toán",
      description: "AI lọc sổ cái thông minh, phát hiện bất thường, chuẩn bị kiểm toán",
      benefits: [
        "Tăng tốc báo cáo gấp 5 lần",
        "Phát hiện sai sót tự động",
        "Hỗ trợ kiểm toán hiệu quả",
        "Báo cáo chi tiết theo yêu cầu"
      ],
      highlight: "Tăng tốc 5x"
    },
    {
      id: 4,
      icon: "💰",
      title: "So Sánh Đơn Giá Thị Trường",
      description: "AI so sánh giá thị trường real-time, highlight chênh lệch bất thường",
      benefits: [
        "Tối ưu hóa chi phí doanh nghiệp",
        "Phát hiện rủi ro GDLK sớm",
        "Cập nhật giá thị trường liên tục",
        "Báo cáo phân tích chuyên sâu"
      ],
      highlight: "Phát hiện rủi ro sớm"
    },
    {
      id: 5,
      icon: "💬",
      title: "Trả Lời Tự Động Trên Zalo",
      description: "Chatbot AI 24/7, trả lời tự động các câu hỏi thường gặp về thuế",
      benefits: [
        "Giảm tải CSKH 80%",
        "Phục vụ khách hàng 24/7",
        "Tăng độ hài lòng khách hàng",
        "Tích hợp đa nền tảng"
      ],
      highlight: "Phục vụ 24/7"
    },
    {
      id: 6,
      icon: "🎯",
      title: "Nhắn Tin Sale Khóa Học",
      description: "AI tạo nội dung cá nhân hóa, broadcast thông minh đến đúng đối tượng",
      benefits: [
        "Tăng 40% tỷ lệ chuyển đổi",
        "Tối ưu hóa doanh thu khóa học",
        "Nội dung cá nhân hóa thông minh",
        "Phân tích hiệu quả real-time"
      ],
      highlight: "Tăng 40% chuyển đổi"
    },
    {
      id: 7,
      icon: "⚖️",
      title: "Trả Lời Câu Hỏi Trích Luật",
      description: "AI trích dẫn chính xác từ hệ thống luật thuế mới nhất",
      benefits: [
        "Đáp ứng câu hỏi tức thì",
        "Trích dẫn luật chính xác 100%",
        "Tránh rủi ro sai pháp lý",
        "Cập nhật luật tự động"
      ],
      highlight: "Chính xác 100%"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              7 Giải Pháp AI Cách Mạng Cho Doanh Nghiệp Kế Toán
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bộ công cụ toàn diện giúp bạn dẫn đầu trong kỷ nguyên số hóa kế toán
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id}
                className={`flex flex-col lg:flex-row items-center gap-8 p-8 rounded-xl shadow-lg ${
                  index % 2 === 0 ? 'bg-card lg:flex-row' : 'bg-gray-light lg:flex-row-reverse'
                }`}
              >
                {/* Solution Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{solution.icon}</div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                        {solution.title}
                      </h3>
                      <div className="inline-block bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold mt-2">
                        {solution.highlight}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg">
                    {solution.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-card-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Visual */}
                <div className="flex-shrink-0 w-full lg:w-80">
                  <div className="bg-gradient-to-br from-primary to-primary/70 p-8 rounded-xl text-center text-primary-foreground">
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <div className="text-2xl font-bold mb-2">Giải pháp #{solution.id}</div>
                    <div className="text-sm opacity-90">Công nghệ AI tiên tiến</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-success to-success/80 text-success-foreground p-8 rounded-xl inline-block">
              <h3 className="text-2xl font-bold mb-4">
                Đủ Mạnh Để Biến Đổi Hoàn Toàn Doanh Nghiệp Của Bạn!
              </h3>
              <p className="text-lg opacity-90">
                7 giải pháp này sẽ giúp bạn tiết kiệm hàng trăm giờ làm việc mỗi tháng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;