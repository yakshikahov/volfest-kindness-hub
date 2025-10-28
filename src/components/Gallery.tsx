import heroImage from "@/assets/hero-volfest.jpg";
import volunteersAction from "@/assets/volunteers-action.jpg";
import festivalStalls from "@/assets/festival-stalls.jpg";
import volunteersKids from "@/assets/volunteers-kids.jpg";
import corporateVolunteers from "@/assets/corporate-volunteers.jpg";
import unityHands from "@/assets/unity-hands.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Festival celebration with volunteers" },
    { src: volunteersAction, alt: "Volunteers planting trees" },
    { src: festivalStalls, alt: "Festival stalls and booths" },
    { src: volunteersKids, alt: "Volunteers with children" },
    { src: corporateVolunteers, alt: "Corporate volunteer team" },
    { src: unityHands, alt: "Unity circle of diverse hands" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
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
                className="rounded-2xl overflow-hidden shadow-festival hover:shadow-glow transition-smooth hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-110 transition-smooth"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              More photos and videos from VolFest 2024 & 2023
            </p>
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
