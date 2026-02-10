import { Building2, Target, Users, TrendingUp, Mail } from "lucide-react";

const Partner = () => {
  const benefits = [
    {
      icon: Target,
      title: "CSR Alignment",
      description:
        "Meet your corporate social responsibility goals through meaningful volunteering initiatives",
    },
    {
      icon: Users,
      title: "Employee Engagement",
      description:
        "Boost team morale and create lasting memories through hands-on community service",
    },
    {
      icon: TrendingUp,
      title: "Brand Visibility",
      description:
        "Showcase your commitment to social good to thousands of engaged participants",
    },
    {
      icon: Building2,
      title: "Community Impact",
      description:
        "Create real, measurable impact in communities while strengthening your brand",
    },
  ];

  return (
    <section id="partner" className="py-20 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Partner With VolFest
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in creating a movement of doing good. Gain meaningful visibility and
              community engagement opportunities.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 shadow-card border border-border hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Professional Contact Section */}
          <div className="bg-background rounded-xl p-12 shadow-card border border-border text-center">
            
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>

            <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">
              Let’s Create Impact Together
            </h3>

            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              We’re currently reviewing partnership inquiries directly via email.
              If you're interested in collaborating with VolFest, please reach out to us at:
            </p>

            <a
              href="mailto:contact@humansofvolunteering.com"
              className="inline-block text-lg font-medium text-primary hover:underline transition"
            >
              contact@humansofvolunteering.com
            </a>

            <p className="text-sm text-muted-foreground mt-6">
              Our team will respond within 2–3 business days.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Partner;
