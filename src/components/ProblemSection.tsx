const ProblemSection = () => {
  return (
    <section className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Problem Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Doanh Nghiệp Kế Toán Đang Đối Mặt Với Những Thách Thức Lớn!
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trong bối cảnh pháp luật ngày càng phức tạp và cạnh tranh gay gắt năm 2025...
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <div className="text-red-500 text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Kê Khai Thuế Phức Tạp</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Nghị định 132/2020/NĐ-CP sửa đổi phức tạp</li>
                <li>• Rủi ro phạt lên đến 25 triệu VND</li>
                <li>• Thời gian xử lý quá lâu</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <div className="text-orange-500 text-4xl mb-4">🏃‍♂️</div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Cạnh Tranh Khốc Liệt</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Khách hàng yêu cầu dịch vụ nhanh hơn</li>
                <li>• Giá cả ngày càng cạnh tranh</li>
                <li>• Thiếu công cụ để tăng hiệu quả</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="text-purple-500 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Rủi Ro Bảo Mật</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Luật Bảo vệ Dữ liệu 2023 nghiêm ngặt</li>
                <li>• Dữ liệu khách hàng nhạy cảm</li>
                <li>• Chi phí bảo mật cao</li>
              </ul>
            </div>
          </div>

          {/* Solution Teaser */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Nhưng Có Một Giải Pháp Toàn Diện!
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold">ROI Nhanh</h4>
                <p className="text-sm">Hoàn vốn trong 3-6 tháng</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="font-bold">Bảo Mật Cao</h4>
                <p className="text-sm">Tuân thủ Luật BVDL 2023</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-bold">Tự Động Hóa</h4>
                <p className="text-sm">Giảm 70% thời gian thủ công</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;