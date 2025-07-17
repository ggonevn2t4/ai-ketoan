const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Bà Nguyễn Thị Lan",
      position: "Giám đốc Công ty TNHH Kế toán ABC",
      location: "TP.HCM",
      content: "Sau khi sử dụng 7 giải pháp AI, công ty tôi tiết kiệm được hàng chục giờ mỗi tuần! Đặc biệt là tính năng lập tờ khai tự động - không còn lo sợ bị phạt nữa. ROI chỉ sau 2 tháng!",
      rating: 5,
      highlight: "Tiết kiệm hàng chục giờ!"
    },
    {
      name: "Ông Trần Văn Minh", 
      position: "Trưởng phòng Kế toán",
      location: "Hà Nội",
      content: "Tôi đã làm kế toán 15 năm nhưng chưa bao giờ thấy công cụ nào hiệu quả như vậy. Khách hàng rất hài lòng với tốc độ xử lý nhanh. Đầu tư xứng đáng nhất từ trước đến nay!",
      rating: 5,
      highlight: "Hiệu quả nhất 15 năm!"
    },
    {
      name: "Cô Lê Thị Mai",
      position: "Kế toán trưởng Công ty XYZ",
      location: "Đà Nẵng", 
      content: "Chatbot Zalo 24/7 giúp tôi phục vụ khách hàng tốt hơn rất nhiều. Doanh thu khóa học tăng 45% chỉ sau 3 tháng sử dụng. Công nghệ AI thực sự thay đổi cuộc chơi!",
      rating: 5,
      highlight: "Tăng doanh thu 45%!"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
            <p className="text-lg text-muted-foreground">
              Hàng trăm doanh nghiệp đã tin tường và thành công với giải pháp AI của chúng tôi
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg border border-border">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">⭐</span>
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {testimonial.highlight}
                </div>

                {/* Content */}
                <blockquote className="text-card-foreground mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary">{testimonial.location}</div>
                </div>

                {/* Verified Badge */}
                <div className="mt-3 flex items-center gap-2 text-green-600">
                  <span className="text-sm">✓</span>
                  <span className="text-xs">Khách hàng đã xác thực</span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Doanh nghiệp tin tưởng</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Khách hàng hài lòng</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2.5M+</div>
                <div className="text-sm opacity-90">Giờ làm việc tiết kiệm</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Hỗ trợ khách hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;