import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/vf-logo-pink.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks: { label: string; id?: string; href?: string }[] = [
    { label: "Home", href: "https://humansofvolunteering.com/" },
    { label: "About", id: "about" },
    { label: "Festival 2026", id: "festival" },
    { label: "Highlights", id: "highlights" },
    { label: "Gallery", id: "gallery" },
    { label: "Partner", id: "partner" },
  ];

  const handleNavAction = (link: { label: string; id?: string; href?: string }) => {
    setIsMobileMenuOpen(false);
    if (link.href) {
      // navigate to external site (same tab)
      window.location.href = link.href;
    } else if (link.id) {
      scrollToSection(link.id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/98 backdrop-blur-sm shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo: goes to external site and made more visible */}
          <button
            onClick={() => (window.location.href = "https://humansofvolunteering.com/")}
            className="flex items-center"
            aria-label="Go to Humans of Volunteering home"
          >
            <img
              src={logo}
              alt="VolFest"
              className="h-12 md:h-16 w-auto transition-smooth hover:opacity-90"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavAction(link)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                {link.label}
              </button>
            ))}
            <Button size="sm" onClick={() => scrollToSection("contact")}>
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-2 px-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavAction(link)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth text-left py-2 px-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="sm"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("contact");
                }}
                className="mt-2"
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
