import { Heart, Users, Sparkles } from "lucide-react";
import unityImage from "@/assets/unity-hands.jpg";

const About = () => {
  const components = [
    {
      icon: Users,
      title: "NGO Stalls",
      description: "Connect with amazing nonprofits and explore volunteering opportunities",
    },
    {
      icon: Sparkles,
      title: "Performances",
      description: "Enjoy cultural performances celebrating the spirit of giving",
    },
    {
      icon: Heart,
      title: "Volunteering Arena",
      description: "Hands-on volunteering experiences that make real impact",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card/50 relative overflow-hidden glow-effect">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">VolFest</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            VolFest is India's festival that celebrates volunteering
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            We believe doing good is not an act, but a culture. Every edition brings together people 
            who choose kindness as their way of life.
          </p>
        </div>

        {/* Unity Image */}
        <div className="max-w-3xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-card border border-primary/20 hover:border-primary/40 transition-smooth animate-scale-in">
          <img 
            src={unityImage} 
            alt="Hands coming together in unity" 
            className="w-full h-auto"
          />
        </div>

        {/* Components of VolFest */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Components of VolFest
          </h3>
          <p className="text-xl text-primary font-semibold">
            Because kindness deserves a stage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl p-8 shadow-card border border-primary/10 hover:border-primary/30 hover:shadow-neon transition-bounce hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-full gradient-festival flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-heading text-xl font-bold mb-3 text-center">
                  {component.title}
                </h4>
                <p className="text-muted-foreground text-center">
                  {component.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
