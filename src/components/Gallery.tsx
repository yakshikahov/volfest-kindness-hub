import { useEffect, useMemo, useState } from "react";
import { Play, FileText } from "lucide-react";

/**
 * Gallery component: automatically loads images from src/assets/gallery
 * and arranges them into a dynamic collage based on image aspect ratios.
 *
 * Requirements: Vite + Tailwind CSS (no extra npm installs)
 *
 * Place your images in: src/assets/gallery/*
 */

const galleryModules = import.meta.glob(
  "../assets/gallery/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

const rawGallery = Object.entries(galleryModules).map(([path, mod]) => {
  const filename = path.split("/").pop() || "";
  const name = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
  const alt = name
    .split(" ")
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");
  return {
    src: (mod as { default: string }).default,
    alt,
    filename,
  };
});

const computeSpan = (aspect: number, idx: number) => {
  // aspect = width / height
  // default algorithm: tune these thresholds to your taste
  // Add slight variety based on index to avoid uniform patterns
  const noise = (idx % 3) * 0.05; // tiny deterministic variance

  if (aspect > 2.0 + noise) {
    // very wide banner
    return { colSpan: 3, rowSpan: 1 };
  }
  if (aspect > 1.4 + noise) {
    // wide
    return { colSpan: 2, rowSpan: 1 };
  }
  if (aspect < 0.6 - noise) {
    // tall
    return { colSpan: 1, rowSpan: 2 };
  }
  if (aspect < 0.9 - noise) {
    // slightly tall / square
    return { colSpan: 1, rowSpan: 1 };
  }
  // square-ish or medium
  return { colSpan: 2, rowSpan: 2 };
};

const Gallery = () => {
  const [items, setItems] = useState<Array<{ src: string; alt: string; filename: string; aspect: number; colSpan: number; rowSpan: number; id: string }>>([]);

  // Build initial items (with src/alt) once — memo so path parsing is cheap
  const initial = useMemo(() => rawGallery, []);

  useEffect(() => {
    // Load each image to measure aspect and compute spans.
    let mounted = true;
    const promises = initial.map(
      (imgObj, idx) =>
        new Promise<{ src: string; alt: string; filename: string; aspect: number; colSpan: number; rowSpan: number }>((resolve) => {
          const img = new Image();
          img.onload = () => {
            const aspect = img.naturalWidth / img.naturalHeight || 1;
            const { colSpan, rowSpan } = computeSpan(aspect, idx);
            resolve({
              ...imgObj,
              aspect,
              colSpan,
              rowSpan,
            });
          };
          img.onerror = () => {
            resolve({
              ...imgObj,
              aspect: 1,
              colSpan: 1,
              rowSpan: 1,
            });
          };
          img.src = imgObj.src;
        })
    );

    Promise.all(promises).then((resolved) => {
      if (!mounted) return;
      // Optional: shuffle a little to make collage look more organic
      const arranged = resolved
        // sort deterministically by filename length + aspect to get variety,
        // but you can randomize if you prefer
        .sort((a, b) => {
          const scoreA = a.aspect * a.filename.length;
          const scoreB = b.aspect * b.filename.length;
          return scoreB - scoreA;
        })
        .map((it, i) => ({ ...it, id: `${it.filename}-${i}` }));
      setItems(arranged);
    });

    return () => {
      mounted = false;
    };
  }, [initial]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Moments that celebrate the spirit of volunteering
            </p>
          </div>

          {/* Collage grid:
              - responsive columns: 2 / 4 / 6
              - auto-rows set so row-span works (arbitrary row height)
          */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4
                       auto-rows-[8rem] md:auto-rows-[10rem] lg:auto-rows-[12rem]"
          >
            {items.map((item, index) => {
              const { colSpan, rowSpan } = item;
              // inline grid placement using span values computed earlier
              const style = {
                gridColumn: `span ${Math.min(colSpan, 6)}`,
                gridRow: `span ${rowSpan}`,
              };
              return (
                <div
                  key={item.id}
                  style={style}
                  className="relative rounded-lg overflow-hidden shadow-card transform hover:scale-[1.01] transition-all"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover block"
                    loading="lazy"
                    draggable={false}
                    // optional style to help preserve focal point
                    style={{ willChange: "transform" }}
                  />
                  {/* subtle overlay and label on hover */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/8 transition-colors pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* CTA / watch links */}
          <div className="text-center mt-12">
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Watch Our Journey
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.youtube.com/watch?v=Ap7lUBklc_g "
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary text-sm font-medium transition-all"
              >
                <Play className="w-4 h-4" />
                VolFest 2025 Aftermovie
              </a>
              <a
                href="https://www.canva.com/design/DAGk3Wn30HM/Ol9duYbx82C6n8qmfHw_zw/view?utm_content=DAGk3Wn30HM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9533022569"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 hover:bg-accent/20 rounded-lg text-accent text-sm font-medium transition-all"
              >
                <FileText className="w-4 h-4" />
                VolFest'25 Report
              </a>
              <a
                href="https://www.youtube.com/watch?v=Kifly31lP9k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/10 hover:bg-secondary/20 rounded-lg text-secondary text-sm font-medium transition-all"
              >
                <Play className="w-4 h-4" />
                VolFest 2024 Aftermovie
              </a>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
