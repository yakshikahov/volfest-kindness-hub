import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 mx-auto mb-4 text-primary" fill="currentColor" />
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Be part of the celebration of kindness
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
              className="border-background text-background hover:bg-background/10"
            >
              Partner With Us
            </Button>
          </div>

          <div className="border-t border-background/20 pt-8">
            <p className="text-sm opacity-75 mb-2">
              Organized by <span className="font-bold">Humans of Volunteering</span>
            </p>
            <p className="text-sm opacity-75">
              © 2025 VolFest. All rights reserved. | Celebrating kindness since 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
