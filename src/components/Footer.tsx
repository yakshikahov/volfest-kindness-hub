import { Button } from "@/components/ui/button";
import logo from "@/assets/volfest-logo-final.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-dark border-t border-primary/20 py-16 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={logo} 
              alt="VolFest Logo" 
              className="h-20 md:h-24 w-auto mx-auto mb-6 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-105 transition-bounce"
            />
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Be part of the <span className="text-gradient">celebration of kindness</span>
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Together, we believe in doing good.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              onClick={() => scrollToSection("contact")}
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection("partner")}
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-bounce"
            >
              Partner With Us
            </Button>
          </div>

          <div className="border-t border-primary/20 pt-8">
            <p className="text-sm text-muted-foreground mb-2">
              Organized by <span className="font-bold text-primary">Humans of Volunteering</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 VolFest. All rights reserved. | Celebrating kindness since 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
