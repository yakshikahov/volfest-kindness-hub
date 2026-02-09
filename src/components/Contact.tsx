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
        <div className="max-w-5xl mx-auto">

          {/* Heading (centered) */}
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Join the Celebration
            </h2>
            {/* <p className="text-sm md:text-lg text-muted-foreground">
              Register now for VolFest 2026
            </p> */}
          </div>

          {/* Luma registration card - wider on large screens */}
          <div className="w-full mx-auto bg-muted rounded-lg p-4 md:p-6 mb-10 shadow-sm border border-slate-200/30">
            <h3 className="font-heading text-base md:text-lg font-semibold mb-4 text-foreground text-center">
              Register for VolFest 2026
            </h3>

            {/* 16:9 responsive wrapper via paddingTop (56.25%) */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://luma.com/embed/event/evt-ijjTYAhcbzz8LzS/simple"
                title="VolFest 2026 registration"
                className="absolute inset-0 w-full h-full rounded-lg"
                style={{ border: "1px solid rgba(191,203,218,0.53)", borderRadius: 8 }}
                frameBorder="0"
                allow="fullscreen; payment"
                loading="lazy"
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>

          {/* Get in touch (centered) */}
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-8">
            <div className="w-full">
              <h3 className="text-center font-heading text-lg font-semibold mb-4 text-foreground">Get in Touch</h3>

              {/* Contact rows: each row centered as a single block, but icon + text aligned */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">contact@humansofvolunteering.com</p>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Follow Us */}
            <div className="w-full text-center">
              <h4 className="font-heading text-sm md:text-base font-semibold mb-3 text-foreground">Follow Us</h4>
              <div className="flex items-center justify-center gap-3">
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

            {/* Quote */}
            <div className="bg-muted rounded-lg p-5 w-full">
              <p className="text-foreground font-medium text-sm mb-1 text-center">
                "Making Volunteering A National Habit"
              </p>
              <p className="text-xs text-muted-foreground text-center">
                — Humans of Volunteering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
