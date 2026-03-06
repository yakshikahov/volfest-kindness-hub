import { useMemo } from "react";
import { Play, FileText } from "lucide-react";

/*
  Optimized Gallery

  Improvements:
  - No manual image preloading
  - No Promise.all blocking
  - Masonry layout via CSS columns (fast)
  - No grid span calculations
  - Better lazy loading
  - content-visibility for scroll performance
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

const Gallery = () => {
  const items = useMemo(() => rawGallery, []);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Moments that celebrate the spirit of volunteering
            </p>
          </div>

          {/* Masonry Layout */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

            {items.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid rounded-lg overflow-hidden shadow-card transition-transform hover:scale-[1.02]"
                style={{
                  contentVisibility: "auto",
                  containIntrinsicSize: "300px",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full h-auto object-cover"
                />

                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors pointer-events-none" />
              </div>
            ))}

          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Watch Our Journey
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">

              <a
                href="https://www.youtube.com/watch?v=Ap7lUBklc_g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary text-sm font-medium transition-all"
              >
                <Play className="w-4 h-4" />
                VolFest 2025 Aftermovie
              </a>

              <a
                href="https://www.canva.com/design/DAGk3Wn30HM/Ol9duYbx82C6n8qmfHw_zw/view"
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