import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - WatchWave";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our watches and services.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">How do I know what size watch to buy?</h3>
                <p className="text-muted-foreground">
                  Watch sizes are measured by case diameter. Standard sizes are 38mm, 40mm, and 42mm for men's watches,
                  and 28mm, 30mm, and 34mm for women's watches. Consider your wrist size and personal preference.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Are your watches water-resistant?</h3>
                <p className="text-muted-foreground">
                  Water resistance varies by model. Most of our watches are water-resistant to 50-100 meters.
                  Check the product description for specific water resistance ratings.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Do you offer international shipping?</h3>
                <p className="text-muted-foreground">
                  Yes, we ship worldwide. International shipping rates and delivery times vary by location.
                  See our Shipping Info page for more details.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">What is your return policy?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day return policy for unworn watches in original condition.
                  See our Returns page for complete details.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">How do I care for my watch?</h3>
                <p className="text-muted-foreground">
                  Regular cleaning and proper storage are key. Avoid extreme temperatures and magnetic fields.
                  Check our Watch Care Guide for detailed maintenance tips.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Do you authenticate watches?</h3>
                <p className="text-muted-foreground">
                  Yes, all our watches come with certificates of authenticity. We guarantee the legitimacy of every timepiece we sell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
