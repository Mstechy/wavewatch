import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Join Our Community
          </h2>
          <p className="text-lg opacity-90">
            Subscribe to receive exclusive offers, new arrivals, and watch care tips
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground h-12 flex-1"
            />
            <Button type="submit" variant="gold" size="lg">
              Subscribe
            </Button>
          </form>

          <p className="text-sm opacity-75">
            By subscribing, you agree to our Privacy Policy and consent to receive updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
