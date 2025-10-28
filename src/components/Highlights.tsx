import { Users, Building2, Heart, Award } from "lucide-react";
import volunteersAction from "@/assets/volunteers-action.jpg";
import volunteersKids from "@/assets/volunteers-kids.jpg";

const Highlights = () => {
  const stats = [
    { icon: Users, number: "5,500+", label: "Citizens" },
    { icon: Building2, number: "40+", label: "NGOs" },
    { icon: Heart, number: "1000s", label: "Smiles" },
    { icon: Award, number: "3", label: "Years Strong" },
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
    <section id="highlights" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Highlights</span> from 2024
            </h2>
            <p className="text-xl text-muted-foreground">
              Celebrating a year of kindness, connection, and community impact
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 text-center shadow-festival hover:shadow-glow transition-smooth hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full gradient-festival flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-3xl overflow-hidden shadow-festival hover:shadow-glow transition-smooth animate-fade-in">
              <img 
                src={volunteersAction} 
                alt="Volunteers planting trees together" 
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-festival hover:shadow-glow transition-smooth animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src={volunteersKids} 
                alt="Volunteers with children" 
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-festival animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <p className="text-muted-foreground font-medium">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
