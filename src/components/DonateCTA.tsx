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
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We need you so that we can provide much to others. Your donation doesn’t fund “projects.” It fuels the heartbeat of what we do:
            1. VolFest is completely free for everyone—no entry fees, no barriers. We believe volunteering should be accessible to all, and cost should never stand in the way of making a difference.
            2. At HOV, we strive to make volunteering a national habit. That’s why VolFest, our annual flagship festival, isn’t about profit - it’s about celebrating the spirit of volunteering.
            3. VolFest is brought to life by dedicated volunteers, but making it happen comes with operational costs. We rely on support to keep it running - so join us, be a part of the experience, and see every penny turn into impact!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Donate Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            {/* <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Learn How to Support
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCTA;