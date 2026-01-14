import heroImage from "@/assets/hero-volfest.jpg";
import volunteersAction from "@/assets/volunteers-action.jpg";
import festivalStalls from "@/assets/festival-stalls.jpg";
import volunteersKids from "@/assets/volunteers-kids.jpg";
import corporateVolunteers from "@/assets/corporate-volunteers.jpg";
import unityHands from "@/assets/unity-hands.jpg";
import foodSharing from "@/assets/volfest-food-sharing.jpg";
import storiesWall from "@/assets/volfest-stories-wall.jpg";
import performance from "@/assets/volfest-performance.jpg";
import { Play, FileText } from "lucide-react";

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
    <section id="gallery" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Moments that celebrate the spirit of volunteering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-card hover:shadow-festival transition-smooth"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-56 object-cover hover:scale-105 transition-smooth"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Watch Our Journey
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <a 
                href="https://www.youtube.com/watch?v=Ap7lUBklc_g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary text-sm font-medium transition-smooth"
              >
                <Play className="w-4 h-4" />
                VolFest 2024 Aftermovie
              </a>
              <a 
                href="https://www.youtube.com/watch?v=Kifly31lP9k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/10 hover:bg-secondary/20 rounded-lg text-secondary text-sm font-medium transition-smooth"
              >
                <Play className="w-4 h-4" />
                VolFest 2023 Aftermovie
              </a>
              <a 
                href="https://img1.wsimg.com/blobby/go/667a94a2-24b1-48b1-a49d-1475281cc697/VolFest%20In%20a%20PDF.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 hover:bg-accent/20 rounded-lg text-accent text-sm font-medium transition-smooth"
              >
                <FileText className="w-4 h-4" />
                VolFest'24 Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
