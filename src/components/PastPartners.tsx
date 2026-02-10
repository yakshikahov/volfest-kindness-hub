import { useEffect, useState } from "react";

/* -------------------- LOGO IMPORTS (VITE) -------------------- */

// Featured partner logos (top 4 with description)
const featuredModules = import.meta.glob(
  "../assets/partners/partner/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

const featuredLogos = Object.values(featuredModules).map(
  (mod) => mod.default
);

// NGO logos for carousel
const ngoModules = import.meta.glob(
  "../assets/partners/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

const ngoLogos = Object.values(ngoModules)
  .map((mod) => mod.default)
  // safety filter (ignore partner subfolder if ever matched)
  .filter((path) => !path.includes("/partner/"));

/* ------------------------------------------------------------ */

const PastPartners = () => {
  const [sliderPosition, setSliderPosition] = useState(0);

  const featuredPartners = [
    {
      name: "Good Deeds Day",
      description:
        "Good Deeds Day is a global celebration of kindness in action - where millions of people across the world come together to do good, give back, and make a positive difference in their communities. It’s a reminder that every small act matters, and when we choose compassion, generosity, and action, we create ripples of change far beyond ourselves. On this day, doing good isn’t just encouraged—it’s celebrated. 💛",
    },
    {
      name: "Youth For India | SBI Foundation",
      description:
        "Youth for India Fellowship stands as a beacon of rural empowerment. Through this program, fellows engage in grassroots development projects alongside NGOs, building networks across 20+ states of India.",
    },
    {
      name: "DonateKart",
      description:
        "DonateKart is an India-based social enterprise that allows individuals to donate supplies needed to a charity instead of donating money, enabling direct product donations to charitable organizations.",
    },
    {
      name: "Indian School of Development Management",
      description:
        "ISDM is a pioneering institution established to enable ecosystem shifts towards transformative change in society, committed to building leadership and management practices for the social sector.",
    },
    {
      name: "iVolunteer",
      description:
        "Beginning from 2001, iVolunteer now engages 17,000+ volunteers every year through a range of programs. iVolunteer delivers impact in 12 social development areas including education, health, and child welfare.",
    },
  ];

  const ITEM_WIDTH = 180; // px per logo card

  /* -------------------- AUTO SLIDE -------------------- */
  useEffect(() => {
    if (!ngoLogos.length) return;

    const interval = setInterval(() => {
      setSliderPosition((prev) => (prev + 1) % ngoLogos.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* --------------------------------------------------- */

  return (
    <section id="past-partners" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* ---------- HEADER ---------- */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Partners from the Past
            </h2>
            <p className="text-lg text-muted-foreground">
              Organizations that have made VolFest possible over the years
            </p>
          </div>

          {/* ---------- FEATURED PARTNERS ---------- */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredPartners.map((partner, index) => {
            const isMain = index === 0;
          
            return (
              <div
                key={index}
                className={`
                  bg-background rounded-lg p-6 border transition-all
                  ${isMain 
                    ? "md:col-span-2 border-primary/40 shadow-md hover:shadow-lg" 
                    : "border-border hover:border-primary/30"}
                `}
              >
                <div className="flex items-start gap-4">
                  
                  {/* Logo */}
                  <div className={`
                    ${isMain ? "w-20 h-20" : "w-16 h-16"}
                    rounded-lg bg-muted flex items-center justify-center 
                    flex-shrink-0 overflow-hidden
                  `}>
                    {featuredLogos[index] && (
                      <img
                        src={featuredLogos[index]}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className={`
                      font-heading font-semibold mb-2
                      ${isMain ? "text-xl" : "text-lg"}
                    `}>
                      {partner.name}
                    </h3>
                    
                    <p className={`
                      text-muted-foreground leading-relaxed
                      ${isMain ? "text-base" : "text-sm"}
                    `}>
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


          {/* ---------- NGO CAROUSEL ---------- */}
          <div className="border-t border-border pt-12">
            <h3 className="font-heading text-xl font-semibold text-center mb-4">
              NGO Partners from the Past
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Let's get to know them & how we can volunteer!
            </p>

            <div className="relative overflow-hidden">
              <div
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${sliderPosition * ITEM_WIDTH}px)`,
                }}
              >
                {[...ngoLogos, ...ngoLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[180px] h-[100px] bg-background rounded-lg border border-border flex items-center justify-center p-4 hover:border-primary/30 transition-all"
                  >
                    <img
                      src={logo}
                      alt={`ngo-${index}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* gradient edges */}
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
