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

          {/* CTA Cards - Row 1 */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-muted/50 rounded-lg p-6 border border-border hover:border-primary/30 transition-smooth text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">For Citizens</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join us and experience the joy of doing good
              </p>
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                Register Now
              </Button>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 border border-border hover:border-secondary/30 transition-smooth text-center">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">For NGOs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Set up a stall and connect with volunteers
              </p>
              <Button variant="secondary" onClick={() => scrollToSection("contact")} className="w-full">
                Partner as NGO
              </Button>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 border border-border hover:border-accent/30 transition-smooth text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">For Corporates</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Enable employee engagement and CSR impact
              </p>
              <Button variant="outline" onClick={() => scrollToSection("partner")} className="w-full">
                Partner as Corporate
              </Button>
            </div>
          </div>

          {/* CTA Cards - Row 2 */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/50 rounded-lg p-6 border border-border hover:border-primary/30 transition-smooth text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Host a Volunteering Activity</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Organize an impactful activity during VolFest
              </p>
              <Button variant="outline" onClick={() => scrollToSection("contact")} className="w-full">
                Host Activity
              </Button>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 border border-border hover:border-secondary/30 transition-smooth text-center">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Mic2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Be a Performer</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Showcase your talent on our stage
              </p>
              <Button variant="secondary" onClick={() => scrollToSection("contact")} className="w-full">
                Perform at VolFest
              </Button>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 border border-border hover:border-accent/30 transition-smooth text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <BadgeDollarSign className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Be a Sponsor</h3>
              <p className="text-sm text-muted-foreground mb-4">
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
