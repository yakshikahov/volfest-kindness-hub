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
              After three powerful editions, VolFest is back - bringing the spirit of doing good, bigger and stronger than ever.
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
                    28th & 29th of March, 2026
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
                    <li>• Stalls featuring nonprofits and the impact they create</li>
                    <li>• Experience Hands-on volunteering at the arena</li>
                    <li>• Stories of Change shared by volunteers on the ground</li>
                    <li>• Performances that celebrate compassion and social action</li>
                    <li>• A vibrant community coming together to do good, together</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - For NGOs */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <UserPlus className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">For NGOs</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Set up an NGO stall to showcase your cause, programs, and impact. Connect directly with volunteers and build long-term engagement.
              </p>
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                Partner as an NGO
              </Button>
            </div>

            {/* Card 2 - For Volunteer activity */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-secondary/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                <Heart className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Host a Volunteer Activity</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Design and host a structured, hands-on volunteering activity at the VolFest arena. Give participants a real-time experience of doing good.
              </p>
              <Button variant="secondary" onClick={() => scrollToSection("contact")} className="w-full">
                Host an Activity
              </Button>
            </div>

            {/* Card 3 - For Corporates */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <Building2 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">For Corporates</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Engage employees in meaningful volunteering and strengthen CSR impact. Be part of a collective movement for social good.
              </p>
              <Button variant="accent" onClick={() => scrollToSection("partner")} className="w-full">
                Partner as Corporate
              </Button>
            </div>

            {/* Card 4 - Stories of Change */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <HandHeart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Stories of Change</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Share your volunteering journey and the impact you’ve created. Inspire others to step up and take action.
              </p>
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                Share Your Story
              </Button>
            </div>

            {/* Card 5 - Be a Performer */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-secondary/40 hover:shadow-md transition-all duration-200 text-center flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                <Mic2 className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">Be a Performer</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                Use art, music, dance, or spoken word to highlight social causes. Perform pro-bono and inspire change through creativity.
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
                Support the volunteering movement while gaining visibility and reach. Help scale impact across communities.
              </p>
              <Button variant="accent" onClick={() => scrollToSection("contact")} className="w-full">
                Become a Sponsor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festival2026;
