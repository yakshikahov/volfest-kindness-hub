import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Ticket, Users, ShieldCheck } from "lucide-react";

const DonateCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-7 h-7 text-white" />
          </div>

          {/* Heading */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white">
            Support the Movement
          </h2>

          {/* Intro */}
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
            We need you so that we can provide more to others. Your donation doesn’t fund “projects.”
            It fuels the heartbeat of what we do:
          </p>

          {/* CARDS */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            
            {/* Card 1 */}
            <div className="bg-white/12 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-left flex flex-col h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4">
                <Ticket className="w-5 h-5 text-primary" />
              </div>

              <h4 className="text-white font-semibold text-lg mb-2">
                VolFest is completely free
              </h4>

              <p className="text-white/90 text-sm flex-grow">
                No entry fees, no barriers. We believe volunteering should be accessible to all,
                and cost should never stand in the way of making a difference.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/12 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-left flex flex-col h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-primary" />
              </div>

              <h4 className="text-white font-semibold text-lg mb-2">
                We’re building a culture of volunteering
              </h4>

              <p className="text-white/90 text-sm flex-grow">
                At HOV, we strive to make volunteering a national habit. VolFest isn’t about profit —
                it’s about celebrating the spirit of service and local action.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/12 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-left flex flex-col h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>

              <h4 className="text-white font-semibold text-lg mb-2">
                Operational costs are real
              </h4>

              <p className="text-white/90 text-sm flex-grow">
                VolFest is powered by dedicated volunteers, but bringing it to life needs infrastructure,
                logistics, and coordination. Your support keeps it running smoothly.
              </p>
            </div>

          </div>

          {/* Donate Button */}
          <Button
            onClick={() =>
              window.open(
                "https://give.do/fundraisers/volfest26-or-empowering-communities-through-volunteering?",
                "_blank"
              )
            }
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold"
          >
            Donate Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

        </div>
      </div>
    </section>
  );
};

export default DonateCTA;
