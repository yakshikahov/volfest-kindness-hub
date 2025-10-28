import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Target, Users, Sparkles, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import corporateImage from "@/assets/corporate-volunteers.jpg";

const Partner = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you soon to discuss partnership opportunities.",
    });
    setFormData({ name: "", organization: "", email: "", message: "" });
  };

  const benefits = [
    {
      icon: Target,
      title: "CSR Alignment",
      description: "Meet your corporate social responsibility goals through meaningful volunteering initiatives",
    },
    {
      icon: Users,
      title: "Employee Engagement",
      description: "Boost team morale and create lasting memories through hands-on community service",
    },
    {
      icon: Sparkles,
      title: "Brand Visibility",
      description: "Showcase your commitment to social good to thousands of engaged participants",
    },
    {
      icon: Building2,
      title: "Community Impact",
      description: "Create real, measurable impact in communities while strengthening your brand",
    },
  ];

  return (
    <section id="partner" className="py-20 md:py-32 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Partner With <span className="text-gradient">VolFest</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in creating a movement of doing good. VolFest partners gain meaningful visibility, 
              community engagement opportunities, and a front-row seat to India's growing volunteering culture.
            </p>
          </div>

          {/* Corporate Image */}
          <div className="max-w-4xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-festival animate-scale-in">
            <img 
              src={corporateImage} 
              alt="Corporate volunteers team" 
              className="w-full h-auto"
            />
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-festival hover:shadow-glow transition-smooth hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-full gradient-festival flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Partnership Inquiry Form */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-festival animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="font-heading text-3xl font-bold mb-4">
                Let's Create Impact Together
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to partner? Fill out the form below or download our partnership deck.
              </p>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download Partner Deck
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Organization</label>
                  <Input
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or NGO name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your organization and how you'd like to partner..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="festival" className="w-full" size="lg">
                Submit Partnership Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
