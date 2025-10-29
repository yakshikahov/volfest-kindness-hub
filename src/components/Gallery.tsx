import heroImage from "@/assets/hero-volfest.jpg";
import volunteersAction from "@/assets/volunteers-action.jpg";
import festivalStalls from "@/assets/festival-stalls.jpg";
import volunteersKids from "@/assets/volunteers-kids.jpg";
import corporateVolunteers from "@/assets/corporate-volunteers.jpg";
import unityHands from "@/assets/unity-hands.jpg";
import foodSharing from "@/assets/volfest-food-sharing.jpg";
import storiesWall from "@/assets/volfest-stories-wall.jpg";
import performance from "@/assets/volfest-performance.jpg";

const Gallery = () => {
  const images = [
    { src: foodSharing, alt: "Volunteers sharing food and kindness" },
    { src: storiesWall, alt: "VolFest Stories of Change wall" },
    { src: performance, alt: "Cultural performance at VolFest" },
    { src: heroImage, alt: "Festival celebration with volunteers" },
    { src: volunteersAction, alt: "Volunteers planting trees" },
    { src: festivalStalls, alt: "Festival stalls and booths" },
    { src: volunteersKids, alt: "Volunteers with children" },
    { src: corporateVolunteers, alt: "Corporate volunteer team" },
    { src: unityHands, alt: "Unity circle of diverse hands" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Moments that celebrate the spirit of volunteering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-card hover:shadow-neon transition-bounce hover:scale-105 animate-fade-in border border-primary/10 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-110 transition-smooth brightness-90 hover:brightness-100"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-heading mb-6">
              📹 Watch Our Journey
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <a 
                href="https://www.youtube.com/watch?v=Ap7lUBklc_g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-full text-primary font-medium transition-bounce border border-primary/30 hover:border-primary hover:shadow-neon"
              >
                ▶️ VolFest 2025 Aftermovie
              </a>
              <a 
                href="https://www.youtube.com/watch?v=Kifly31lP9k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary/10 hover:bg-secondary/20 rounded-full text-secondary font-medium transition-bounce border border-secondary/30 hover:border-secondary hover:shadow-[0_0_20px_rgba(255,140,0,0.4)]"
              >
                ▶️ VolFest 2024 Aftermovie
              </a>
              <a 
                href="https://img1.wsimg.com/blobby/go/667a94a2-24b1-48b1-a49d-1475281cc697/VolFest%20In%20a%20PDF.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent/10 hover:bg-accent/20 rounded-full text-accent font-medium transition-bounce border border-accent/30 hover:border-accent hover:shadow-[0_0_20px_rgba(255,220,0,0.4)]"
              >
                📄 VolFest'24 Report (PDF)
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Follow us on social media for the latest updates and highlights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
