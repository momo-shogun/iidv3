import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src?: string;
  alt: string;
  name?: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
        {logos.map((logo, index) => (
          logo.src ? (
            <img
              alt={logo.alt}
              className="pointer-events-none h-8 select-none md:h-10 dark:brightness-0 dark:invert"
              height={logo.height || "auto"}
              key={`logo-${logo.alt}-${index}`}
              loading="lazy"
              src={logo.src}
              width={logo.width || "auto"}
            />
          ) : (
            <div
              key={`logo-${logo.alt}-${index}`}
              className="pointer-events-none h-8 md:h-10 flex items-center justify-center px-6"
            >
              <span className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300">
                {logo.name || logo.alt}
              </span>
            </div>
          )
        ))}
      </InfiniteSlider>
    </div>
  );
}
