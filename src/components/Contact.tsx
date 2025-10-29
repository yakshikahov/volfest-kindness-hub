import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Instagram, Linkedin, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration received!",
      description: "Thank you for registering. We'll send you more details soon.",
    });
    setFormData({ name: "", email: "", phone: "", type: "", message: "" });
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Globe, label: "Website", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Join the <span className="text-gradient">Celebration</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Be part of the celebration of kindness! Register now for VolFest 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@volfest.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 rounded-full bg-card shadow-festival hover:shadow-glow flex items-center justify-center transition-smooth hover:scale-110"
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-festival">
                <p className="text-foreground font-medium mb-2">
                  "Together, we believe in doing good."
                </p>
                <p className="text-sm text-muted-foreground">
                  — Humans of Volunteering
                </p>
              </div>
            </div>

            {/* Luma Registration */}
            <div className="bg-card rounded-3xl p-8 shadow-festival animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-heading text-2xl font-bold mb-6">Register on Luma</h3>
              <iframe 
                src="https://lu.ma/embed/event/evt-d7T2CqS6okPMXby/simple" 
                width="100%" 
                height="600" 
                frameBorder="0"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
