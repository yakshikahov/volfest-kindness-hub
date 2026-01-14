import { Button } from "@/components/ui/button";
import logo from "@/assets/volfest-logo-main.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={logo} 
              alt="VolFest Logo" 
              className="h-16 md:h-20 w-auto mx-auto mb-6"
            />
          </div>
          
          <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3 text-foreground">
            Be part of the celebration of kindness
          </h3>
          <p className="text-muted-foreground mb-8">
            Together, we believe in doing good.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Register Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("partner")}
            >
              Partner With Us
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-1">
              Organized by <span className="font-medium text-foreground">Humans of Volunteering</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © 2026 VolFest. All rights reserved. | Celebrating kindness since 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
