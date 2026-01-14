import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Target, Users, TrendingUp, Download } from "lucide-react";
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
      icon: TrendingUp,
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
    <section id="partner" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Partner With VolFest
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in creating a movement of doing good. Gain meaningful visibility and 
              community engagement opportunities.
            </p>
          </div>

          {/* Corporate Image */}
          <div className="max-w-3xl mx-auto mb-12 rounded-lg overflow-hidden shadow-card">
            <img 
              src={corporateImage} 
              alt="Corporate volunteers team" 
              className="w-full h-auto"
            />
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 shadow-card border border-border hover:border-primary/30 transition-smooth"
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

          {/* Partnership Inquiry Form */}
          <div className="bg-background rounded-lg p-8 shadow-card border border-border">
            <div className="text-center mb-8">
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                Let's Create Impact Together
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ready to partner? Fill out the form below or download our partnership deck.
              </p>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download Partner Deck
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-foreground">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-foreground">Organization</label>
                  <Input
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or NGO name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your organization and partnership interest..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
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
