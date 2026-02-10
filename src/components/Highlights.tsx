import { Users, Building2, Heart, Award } from "lucide-react";
import volunteersAction from "@/assets/volunteers-action.jpg";
import volunteersKids from "@/assets/volunteers-kids.jpg";

const Highlights = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Citizens" },
    { icon: Building2, number: "80+", label: "NGOs" },
    { icon: Heart, number: "Unlimited", label: "Smiles" },
    { icon: Award, number: "5", label: "Years Strong" },
  ];

  const testimonials = [
    {
      quote: "VolFest showed me that making a difference can be joyful and celebratory. The energy was incredible!",
      author: "Participant, 2024",
    },
    {
      quote: "We connected with so many passionate volunteers. VolFest truly understands the power of community.",
      author: "NGO Partner, 2024",
    },
  ];

  return (
    <section id="highlights" className="py-20 md:py-1 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            {/* <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Highlights from the Past
            </h2> */}
            {/* <p className="text-lg text-muted-foreground">
              Celebrating a year of kindness, connection, and community impact
            </p> */}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-muted/50 rounded-lg p-5 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-heading text-2xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Gallery */}
          {/* <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="rounded-lg overflow-hidden shadow-card">
              <img 
                src={volunteersAction} 
                alt="Volunteers planting trees together" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-card">
              <img 
                src={volunteersKids} 
                alt="Volunteers with children" 
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}

          {/* Testimonials */}
          {/* <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-muted/50 rounded-lg p-6 border border-border"
              >
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
