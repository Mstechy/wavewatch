import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Warranty = () => {
  useEffect(() => {
    document.title = "Warranty - WatchWave";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                Warranty Information
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn about our comprehensive warranty coverage for your timepieces.
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Manufacturer Warranty</h2>
                <p className="mb-4">
                  All watches come with the manufacturer's standard warranty, which typically covers defects in materials and workmanship.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Luxury watches: 2-5 years depending on brand</li>
                  <li>Smart watches: 1-2 years</li>
                  <li>Casual and classic watches: 1-2 years</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">WatchWave Extended Warranty</h2>
                <p className="mb-4">
                  We offer an optional extended warranty for additional peace of mind.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Additional 2 years of coverage</li>
                  <li>Protection against accidental damage</li>
                  <li>Free repairs and replacements</li>
                  <li>Available at checkout for a small fee</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">What’s Covered</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Manufacturing defects</li>
                  <li>Mechanical failures</li>
                  <li>Battery issues (for applicable models)</li>
                  <li>Crystal and dial damage</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">What’s Not Covered</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Normal wear and tear</li>
                  <li>Water damage (unless water-resistant)</li>
                  <li>Unauthorized modifications</li>
                  <li>Loss or theft</li>
                </ul>
              </div>

              <p>
                For warranty claims, please contact our customer service team with your order number and proof of purchase.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Warranty;
