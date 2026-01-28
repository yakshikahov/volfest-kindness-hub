import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-volfest.jpg";
import logo from "@/assets/volfest-logo-main.png";

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
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Calendar className="w-4 h-4" />
            <span>India's Festival of Volunteering 2026</span>
          </div> */}
          
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="VolFest - India's Volunteering Festival" 
              className="h-28 md:h-36 lg:h-44 w-auto mx-auto"
            />
          </div>
          
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            India's Volunteering Festival
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            VolFest is a celebration of volunteering that brings together citizens, nonprofits, and companies to do good-together. It turns volunteering into a festival with meaningful, well-designed action opportunities. From individual acts of kindness to large-scale collective impact, VolFest makes doing good joyful and visible.
          </p>

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Calendar className="w-4 h-4" />
            <span>28th and 29th of March, 2026. Delhi</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto gap-2"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            {/* <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("about")}
              className="w-full sm:w-auto"
            >
              Learn More
            </Button> */}
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground text-lg">3</span>
              <span>Successful Editions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground text-lg">80+</span>
              <span>NGO Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground text-lg">10000+</span>
              <span>Citizens Engaged</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
