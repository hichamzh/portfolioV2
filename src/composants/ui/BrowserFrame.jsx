export function BrowserFrame({ src, alt, url, className = "", priority = false }) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)] ring-1 ring-black/10 ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-black/10 bg-[#E9EEEC] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-black/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-black/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-black/20" />
        </span>
        <span className="truncate rounded-md bg-white/80 px-3 py-0.5 text-xs text-encre/60">
          {url}
        </span>
      </div>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="block w-full"
      />
    </div>
  );
}
