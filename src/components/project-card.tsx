import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconRenderer } from "@/components/icon-renderer";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: string;
    type: string;
    href: string;
    badgeImage?: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div className="group rounded-lg border border-border overflow-hidden hover:bg-accent/30 transition-colors">
      <Link
        href={href || "#"}
        className={cn("block overflow-hidden aspect-[16/10]", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        )}
        {image || !video ? (
          <div className="relative h-full w-full">
            {image ? (
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling?.removeAttribute("hidden");
                }}
              />
            ) : null}
            <div
              hidden={Boolean(image)}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent via-background to-accent px-6 text-center"
            >
              <div>
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-xl border border-border bg-background/80 text-sm font-bold text-foreground shadow-sm">
                  {title
                    .split(/\s+/)
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <p className="text-xs font-medium text-muted-foreground">{title}</p>
              </div>
            </div>
          </div>
        ) : null}
      </Link>
      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium truncate">{title}</p>
          <span className="text-[10px] text-muted-foreground whitespace-nowrap">{dates}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{description}</p>
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconRenderer icon={link.icon} className="size-3" />
                {link.type}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
