import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-volfest.jpg";
import logo from "@/assets/vf-logo-black.png";
import { useCountUp } from "@/hooks/use-count-up";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Clean Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/55 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-10">
        <div className="max-w-3xl mx-auto">
          {/* Logo (increased size) */}
          <div className="mb-6">
            <img 
              src={logo} 
              alt="VolFest - India's Volunteering Festival" 
              className="h-36 md:h-48 lg:h-56 w-auto mx-auto" 
              style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))" }}
            />
          </div>
          
          {/* <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl font-extrabold text-foreground mb-6">
            India's Volunteering Festival
          </h2> */}
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            VolFest is a celebration of volunteering that brings together citizens, nonprofits, and companies to do good-together. It turns volunteering into a festival with meaningful, well-designed action opportunities. From individual acts of kindness to large-scale collective impact, VolFest makes doing good joyful and visible.
          </p>

          {/* Date + Location: stacked vertically (always) */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div
              role="group"
              aria-label="Event date"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              <Calendar className="w-4 h-4" />
              <span>28th and 29th of March, 2026</span>
            </div>

            {/* Location is now a clickable link to Google Maps */}
            <a
              href="https://maps.app.goo.gl/KvPzFBunH8RPtZah6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Baansera Park location in Google Maps"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition"
            >
              <MapPin className="w-4 h-4" />
              <span>Baansera Park, Delhi</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => window.open("https://luma.com/l6vagn7q", "_blank")}
              className="w-full sm:w-auto gap-2"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick Stats */}
          <HeroStats />
        </div>
      </div>
    </section>
  );
};

const HeroStats = () => {
  const editions = useCountUp(3, 1500);
  const ngos = useCountUp(80, 2000);
  const citizens = useCountUp(10000, 2500);

  return (
    <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <span ref={editions.ref as React.RefObject<HTMLSpanElement>} className="font-bold text-foreground text-lg">{editions.count}</span>
        <span>Successful Editions</span>
      </div>
      <div className="flex items-center gap-2">
        <span ref={ngos.ref as React.RefObject<HTMLSpanElement>} className="font-bold text-foreground text-lg">{ngos.count}+</span>
        <span>NGO Partners</span>
      </div>
      <div className="flex items-center gap-2">
        <span ref={citizens.ref as React.RefObject<HTMLSpanElement>} className="font-bold text-foreground text-lg">{citizens.count.toLocaleString()}+</span>
        <span>Citizens Engaged</span>
      </div>
    </div>
  );
};

export default Hero;
