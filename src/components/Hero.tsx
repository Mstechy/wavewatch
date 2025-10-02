import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroWatch from "@/assets/hero-watch.jpg";

const Hero = () => {
  const scrollToFeatured = () => {
    const element = document.getElementById('featured');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCollections = () => {
    const element = document.getElementById('collections');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                Timeless Elegance
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Discover Your
                <span className="block text-accent">Perfect Timepiece</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Explore our curated collection of <a href="#luxury" className="text-accent hover:underline">#luxury</a>, <a href="#smart" className="text-accent hover:underline">#smart</a>, and <a href="#classic" className="text-accent hover:underline">#classic</a> watches.
                Every moment deserves precision and style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" variant="luxury" onClick={scrollToFeatured}>
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="xl" variant="outline" onClick={scrollToCollections}>
                View Collections
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 border-t">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold">2 Year</p>
                <p className="text-sm text-muted-foreground">Warranty</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold">Free</p>
                <p className="text-sm text-muted-foreground">Shipping</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold">30 Day</p>
                <p className="text-sm text-muted-foreground">Returns</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <picture>
                <source
                  srcSet={`${heroWatch}?w=400 400w, ${heroWatch}?w=800 800w, ${heroWatch}?w=1200 1200w`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  type="image/jpeg"
                />
                <img
                  src={heroWatch}
                  alt="Luxury chronograph watch with black leather strap"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
