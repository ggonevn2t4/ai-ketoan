import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "large";
  variant?: "primary" | "secondary";
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, size = "default", variant = "primary", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",
          {
            "px-6 py-3 text-lg": size === "default",
            "px-8 py-4 text-xl": size === "large",
            "bg-success text-success-foreground hover:bg-success/90": variant === "primary",
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "secondary",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export { CTAButton };