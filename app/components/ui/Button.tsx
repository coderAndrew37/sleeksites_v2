// components/ui/Button.tsx
import { forwardRef, ButtonHTMLAttributes } from "react";
import { ButtonProps } from "../types/Index";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      icon,
      loading = false,
      className = "",
      onClick,
      type = "button",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseClasses: string =
      "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4";

    const variants: Record<string, string> = {
      primary:
        "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 focus:ring-orange-500/30 shadow-lg hover:shadow-xl",
      secondary:
        "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-300 focus:ring-blue-500/30 shadow-lg hover:shadow-xl",
      outline:
        "bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-900 focus:ring-white/30",
    };

    const sizes: Record<string, string> = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl",
    };

    const widthClass: string = fullWidth ? "w-full" : "";
    const isDisabled: boolean = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseClasses} ${variants[variant]} ${
          sizes[size]
        } ${widthClass} ${className} ${
          isDisabled ? "opacity-70 cursor-not-allowed" : ""
        }`}
        disabled={isDisabled}
        onClick={onClick}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {icon && !loading && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
