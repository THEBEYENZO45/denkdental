import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const AnimatedSection = ({ children, className, delay = "0ms" }: AnimatedSectionProps) => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
