import { CTAButton } from "@/components/ui/cta-button";
import heroImage from "@/assets/ai-business-hero.jpg";

const Header = () => {
  return (
    <header className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 lg:py-24 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Bạn Đang Bỏ Lỡ Cơ Hội <span className="text-yellow-300">Vàng</span> Để Biến Đổi
            <br />
            Doanh Nghiệp Kế Toán Của Mình!
          </h1>
          
          {/* Subtitle */}
          <div className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
            <p className="mb-4">
              Khám phá <strong>7 Giải Pháp AI Tiên Tiến</strong> – 
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-yellow-200 font-semibold">
              <span>✨ Tiết Kiệm 70% Thời Gian</span>
              <span>📈 Tăng Doanh Thu 40%</span>
              <span>⚖️ Tuân Thủ Pháp Luật Hoàn Hảo 2025</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="space-y-4">
            <CTAButton 
              size="large" 
              className="text-xl px-10 py-5 animate-pulse"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 LIÊN HỆ DEMO MIỄN PHÍ NGAY!
            </CTAButton>
            <p className="text-sm text-blue-200">
              ⏰ Chỉ còn đến hết 31/07/2025 - Giảm ngay 10%!
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <span className="text-green-300">✓</span>
              <span>Tuân thủ Nghị định 132/2020/NĐ-CP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300">✓</span>
              <span>Chuẩn OECD 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300">✓</span>
              <span>Bảo mật theo Luật BVDL 2023</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;