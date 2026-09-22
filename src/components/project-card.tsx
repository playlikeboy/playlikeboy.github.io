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
    <div className="group rounded-lg border border-border overflow-hidden bg-background hover:border-foreground/20 hover:shadow-sm transition-all">
      <Link
        href={href || "#"}
        className={cn("block overflow-hidden aspect-[16/10] bg-accent/30", className)}
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
        {video ? (
          <video src={video} autoPlay loop muted playsInline preload="metadata" className="h-full w-full object-cover" />
        ) : image ? (
          <img
            src={image}
            alt={title + " preview"}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.nextElementSibling?.removeAttribute("hidden");
            }}
          />
        ) : null}
        <div
          hidden={Boolean(image || video)}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent via-background to-accent px-6 text-center"
        >
          <div>
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-xl border border-border bg-background/80 text-sm font-bold text-foreground shadow-sm">
              {title.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join("").toUpperCase()}
            </div>
            <p className="text-xs font-medium text-muted-foreground">{title}</p>
          </div>
        </div>
      </Link>
      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium truncate">{title}</p>
          <span className="text-[10px] text-muted-foreground whitespace-nowrap">{dates}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1.5 line-clamp-3 leading-relaxed">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded bg-accent px-1.5 py-0.5 text-[10px] text-muted-foreground">{tag}</span>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-3 pt-2 border-t border-border">
            {links.slice(0, 3).map((link, idx) => (
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
