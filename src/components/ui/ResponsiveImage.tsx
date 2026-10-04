type Props = {
  readonly src: string;
  readonly alt: string;
  readonly className?: string;
  readonly loading?: 'eager' | 'lazy';
};

export function ResponsiveImage({ src, alt, className, loading = 'lazy' }: Props) {
  const name = src.slice(1).replace(/\.[^.]+$/, '');
  return (
    <picture>
      <source type="image/webp" srcSet={`/media/${name}-480.webp 480w, /media/${name}-960.webp 960w, /media/${name}-1440.webp 1440w`} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 52vw" />
      <img src={src} alt={alt} className={className} width="1440" height="960" loading={loading} decoding="async" />
    </picture>
  );
}
