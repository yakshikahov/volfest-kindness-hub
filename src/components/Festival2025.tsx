import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Building2, UserPlus } from "lucide-react";
import festivalImage from "@/assets/festival-stalls.jpg";

const Festival2025 = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="festival" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              This Year at <span className="text-gradient">VolFest 2025</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img 
                src={festivalImage} 
                alt="Festival stalls and activities" 
                className="w-full rounded-3xl shadow-festival"
              />
            </div>

            <div className="space-y-8 animate-fade-in-up">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">When</h3>
                  <p className="text-muted-foreground">
                    Dates to be announced soon. Mark your calendars for Delhi's biggest volunteering celebration!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">Where</h3>
                  <p className="text-muted-foreground">
                    Delhi, India — Location details coming soon
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">What to Expect</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Month-round volunteering events at NGO Partners</li>
                    <li>• Nonprofit stalls & volunteering opportunities</li>
                    <li>• Inspiring performances and cultural programs</li>
                    <li>• Connect with fellow changemakers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-festival hover:shadow-glow transition-smooth hover:scale-105 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">For Citizens</h3>
              <p className="text-muted-foreground mb-6">
                Join us as an attendee and experience the joy of doing good
              </p>
              <Button variant="default" onClick={() => scrollToSection("contact")} className="w-full">
                Register as Participant
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-festival hover:shadow-glow transition-smooth hover:scale-105 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">For NGOs</h3>
              <p className="text-muted-foreground mb-6">
                Set up a stall and connect with passionate volunteers
              </p>
              <Button variant="secondary" onClick={() => scrollToSection("contact")} className="w-full">
                Partner as NGO
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-festival hover:shadow-glow transition-smooth hover:scale-105 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">For Corporates</h3>
              <p className="text-muted-foreground mb-6">
                Enable employee engagement and CSR impact
              </p>
              <Button variant="outline" onClick={() => scrollToSection("partner")} className="w-full">
                Partner as Corporate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add missing import
import { Sparkles, Heart } from "lucide-react";

export default Festival2025;
