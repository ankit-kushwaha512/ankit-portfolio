import { useEffect, useRef, useState } from 'react';
import { marqueeImages } from '../data/siteData';

const row1Source = marqueeImages.slice(0, 11);
const row2Source = marqueeImages.slice(11);

const row1 = [...row1Source, ...row1Source, ...row1Source];
const row2 = [...row2Source, ...row2Source, ...row2Source];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const raw =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={row1} translateX={offset - 200} />
        <MarqueeRow images={row2} translateX={-(offset - 200)} />
      </div>
    </section>
  );
}

function MarqueeRow({
  images,
  translateX,
}: {
  images: string[];
  translateX: number;
}) {
  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${translateX}px)`,
        willChange: 'transform',
      }}
    >
      {images.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt=""
          loading="lazy"
          className="rounded-2xl object-cover flex-shrink-0"
          style={{ width: 420, height: 270 }}
        />
      ))}
    </div>
  );
}
