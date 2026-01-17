import { useEffect, useState } from "react";

const PastPartners = () => {
  const [sliderPosition, setSliderPosition] = useState(0);

  const featuredPartners = [
    {
      name: "Youth For India | SBI Foundation",
      description: "Youth for India Fellowship stands as a beacon of rural empowerment. Through this program, fellows engage in grassroots development projects alongside NGOs, building networks across 20+ states of India.",
    },
    {
      name: "iVolunteer",
      description: "Beginning from 2001, iVolunteer now engages 17,000+ volunteers every year through a range of programs. iVolunteer delivers impact in 12 social development areas including education, health, and child welfare.",
    },
    {
      name: "Indian School of Development Management",
      description: "ISDM is a pioneering institution established to enable ecosystem shifts towards transformative change in society, committed to building leadership and management practices for the social sector.",
    },
    {
      name: "DonateKart",
      description: "DonateKart is an India-based social enterprise that allows individuals to donate supplies needed to a charity instead of donating money, enabling direct product donations to charitable organizations.",
    },
  ];

  const ngoPartners = [
    "Maya Foundation",
    "Teach For India",
    "Goonj",
    "FairGift",
    "Smile Foundation",
    "Robin Hood Army",
    "Let's Do It India",
    "Feeding India",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderPosition((prev) => (prev + 1) % ngoPartners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ngoPartners.length]);

  return (
    <section id="past-partners" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Partners from the Past
            </h2>
            <p className="text-lg text-muted-foreground">
              Organizations that have made VolFest possible over the years
            </p>
          </div>

          {/* Featured Partners Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 border border-border hover:border-primary/30 transition-smooth"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-xl font-bold text-primary">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NGO Partners Slider */}
          <div className="border-t border-border pt-12">
            <h3 className="font-heading text-xl font-semibold text-center mb-8 text-foreground">
              NGO Partners from the Past
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Let's get to know them & how we can volunteer!
            </p>
            
            <div className="relative overflow-hidden">
              <div 
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${sliderPosition * 150}px)` }}
              >
                {[...ngoPartners, ...ngoPartners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-32 h-20 bg-background rounded-lg border border-border flex items-center justify-center p-4 hover:border-primary/30 transition-smooth"
                  >
                    <span className="font-medium text-sm text-center text-muted-foreground">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Gradient overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastPartners;