import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Building2, UserPlus, Heart, Mic2, HandHeart, BadgeDollarSign } from "lucide-react";
import festivalImage from "@/assets/festival-stalls.jpg";

const Festival2026 = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="festival" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              VolFest 2026
            </h2>
            <p className="text-lg text-muted-foreground">
              After 3 successful editions (2023, 2024, 2025), we're back bigger and better!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <img 
                src={festivalImage} 
                alt="Festival stalls and activities" 
                className="w-full rounded-lg shadow-card"
              />
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">When</h3>
                  <p className="text-sm text-muted-foreground">
                    Dates to be announced soon. Mark your calendars for Delhi's biggest volunteering celebration!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">Where</h3>
                  <p className="text-sm text-muted-foreground">
                    Delhi, India — Location details coming soon
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">What to Expect</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Month-round volunteering events at NGO Partners</li>
                    <li>• Nonprofit stalls & volunteering opportunities</li>
                    <li>• Inspiring performances and cultural programs</li>
                    <li>• Connect with fellow changemakers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - For Citizens */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <UserPlus className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">For Citizens</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Join us and experience the joy of doing good
              </p>
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                Register Now
              </Button>
            </div>

            {/* Card 2 - For NGOs */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-secondary/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                <Heart className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">For NGOs</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Set up a stall and connect with volunteers
              </p>
              <Button variant="secondary" onClick={() => scrollToSection("contact")} className="w-full">
                Partner as NGO
              </Button>
            </div>

            {/* Card 3 - For Corporates */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <Building2 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">For Corporates</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Enable employee engagement and CSR impact
              </p>
              <Button variant="outline" onClick={() => scrollToSection("partner")} className="w-full">
                Partner as Corporate
              </Button>
            </div>

            {/* Card 4 - Host Activity */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <HandHeart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Host a Volunteering Activity</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Organize an impactful activity during VolFest
              </p>
              <Button variant="outline" onClick={() => scrollToSection("contact")} className="w-full">
                Host Activity
              </Button>
            </div>

            {/* Card 5 - Be a Performer */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-secondary/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                <Mic2 className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Be a Performer</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Showcase your talent on our stage
              </p>
              <Button variant="secondary" onClick={() => scrollToSection("contact")} className="w-full">
                Perform at VolFest
              </Button>
            </div>

            {/* Card 6 - Be a Sponsor */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <BadgeDollarSign className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Be a Sponsor</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Support the movement and gain visibility
              </p>
              <Button variant="outline" onClick={() => scrollToSection("contact")} className="w-full">
                Sponsor VolFest
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festival2026;
