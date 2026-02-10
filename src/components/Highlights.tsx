import { Users, Building2, Heart, Award } from "lucide-react";
import volunteersAction from "@/assets/volunteers-action.jpg";
import volunteersKids from "@/assets/volunteers-kids.jpg";
import { useCountUp } from "@/hooks/use-count-up";

const Highlights = () => {
  const stats = [
    { icon: Users, target: 10000, suffix: "+", label: "Citizens" },
    { icon: Building2, target: 80, suffix: "+", label: "NGOs" },
    { icon: Heart, target: null, suffix: "", label: "Smiles" },
    { icon: Award, target: 5, suffix: "", label: "Years Strong" },
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
            {stats.map((stat, index) => (
              <CountUpCard key={index} icon={stat.icon} target={stat.target} suffix={stat.suffix} label={stat.label} />
            ))}
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

const CountUpCard = ({ icon: Icon, target, suffix, label }: { icon: any; target: number | null; suffix: string; label: string }) => {
  const counter = useCountUp(target ?? 0, 2000);

  return (
    <div className="bg-muted/50 rounded-lg p-5 text-center">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div ref={counter.ref as React.RefObject<HTMLDivElement>} className="font-heading text-2xl font-bold text-foreground mb-1">
        {target === null ? "Unlimited" : `${counter.count.toLocaleString()}${suffix}`}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default Highlights;
