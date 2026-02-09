import { Store, Mic2, Heart } from "lucide-react";
import unityImage from "@/assets/unity-hands.png";

const About = () => {
  const components = [
    {
      icon: Store,
      title: "NGO Stalls",
      description: "Connect with nonprofits and explore volunteering opportunities",
    },
    {
      icon: Mic2,
      title: "Performances",
      description: "Cultural performances celebrating the spirit of giving",
    },
    {
      icon: Heart,
      title: "Volunteering Arena",
      description: "Hands-on experiences that create real community impact",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About VolFest
          </h2>
          {/* <p className="text-lg text-muted-foreground mb-6">
            India's premier festival celebrating volunteering and community action
          </p> */}
          <p className="text-base text-foreground leading-relaxed">
            VolFest is an annual festival that celebrates compassion, unity, and the power of volunteering. Organized by Humans of Volunteering, it is a platform where people experience volunteering firsthand, connect with nonprofits, and take meaningful action for social good. In the last three years, VolFest has brought together 10,000+ participants and 80+ NGOs across communities.
          </p>
        </div>

        {/* Unity Image */}
        <div className="max-w-2xl mx-auto mb-16 rounded-lg overflow-hidden shadow-card">
          <img 
            src={unityImage} 
            alt="Hands coming together in unity" 
            className="w-full h-auto"
          />
        </div>

        {/* Components
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-xl md:text-2xl font-semibold mb-8 text-center text-foreground">
            Components of VolFest
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {components.map((component, index) => {
              const Icon = component.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 shadow-card border border-border hover:border-primary/30 transition-smooth"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold mb-2 text-foreground">
                    {component.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {component.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
