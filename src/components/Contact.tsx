import { Mail, Phone, Instagram, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/humansofvolunteering/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/humans-of-volunteering" },
    { icon: Globe, label: "Website", href: "https://humansofvolunteering.com/" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Join the Celebration
            </h2>
            <p className="text-lg text-muted-foreground">
              Register now for VolFest 2026
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">humansofvolunteering123@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-smooth"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-smooth" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-muted rounded-lg p-5">
                <p className="text-foreground font-medium text-sm mb-1">
                  "Together, we believe in doing good."
                </p>
                <p className="text-xs text-muted-foreground">
                  — Humans of Volunteering
                </p>
              </div>
            </div>

            {/* Luma Registration */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">
                Register for VolFest 2026
              </h3>
              <iframe 
                src="https://lu.ma/embed/event/evt-d7T2CqS6okPMXby/simple" 
                width="100%" 
                height="500" 
                frameBorder="0"
                className="rounded-lg bg-background"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
