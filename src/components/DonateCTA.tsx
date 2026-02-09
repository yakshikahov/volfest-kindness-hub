import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const DonateCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-7 h-7 text-white" />
          </div>
          
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white">
            Support the Movement
          </h2>

          {/* Intro */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We need you so that we can provide more to others. Your donation doesn’t fund “projects.”
            It fuels the heartbeat of what we do:
          </p>

          {/* LIST */}
          <ul className="text-white/90 text-base md:text-lg space-y-5 max-w-3xl mx-auto text-left mb-10">
            <li>
              <span className="font-semibold text-white">1. VolFest is completely free.</span>
              <br />
              No entry fees, no barriers. We believe volunteering should be accessible to all,
              and cost should never stand in the way of making a difference.
            </li>

            <li>
              <span className="font-semibold text-white">2. We’re building a culture of volunteering.</span>
              <br />
              At HOV, we strive to make volunteering a national habit. VolFest isn’t about profit —
              it’s about celebrating the spirit of service.
            </li>

            <li>
              <span className="font-semibold text-white">3. Operational costs are real.</span>
              <br />
              VolFest is powered by dedicated volunteers, but bringing it to life requires
              infrastructure, logistics, and coordination. Your support keeps it running.
            </li>
          </ul>
          
          <Button  onClick={() => window.open("https://give.do/fundraisers/volfest26-or-empowering-communities-through-volunteering?", "_blank")}
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
