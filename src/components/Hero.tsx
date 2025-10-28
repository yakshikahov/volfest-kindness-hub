import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-volfest.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Heart className="w-12 h-12 text-primary opacity-30" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-16 h-16 text-secondary opacity-30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <Heart className="w-10 h-10 text-accent opacity-30" fill="currentColor" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-heading text-xl md:text-2xl mb-4 animate-fade-in">
            India's Festival of Volunteering is Back!
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gradient">VolFest 2025</span>
          </h1>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Believe in Doing Good
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            A celebration of kindness, collaboration, and community action — bringing together citizens, 
            corporates, and nonprofits to reimagine the way we do good.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("partner")}
              className="w-full sm:w-auto"
            >
              Partner With Us
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => scrollToSection("highlights")}
              className="w-full sm:w-auto"
            >
              See Highlights
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <p className="text-sm text-muted-foreground">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
