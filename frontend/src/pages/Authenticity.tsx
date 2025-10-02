import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Authenticity = () => {
  useEffect(() => {
    document.title = "Authenticity Guarantee - WatchWave";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                Authenticity Guarantee
              </h1>
              <p className="text-lg text-muted-foreground">
                Your confidence in every purchase, backed by our ironclad authenticity promise.
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <p>
                At WatchWave, authenticity is not just a promise—it's our foundation. Every watch in our collection
                undergoes rigorous verification by our expert team and comes with comprehensive documentation
                to guarantee its legitimacy.
              </p>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Our Verification Process</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Serial number verification with manufacturer databases</li>
                  <li>Physical inspection for quality and craftsmanship</li>
                  <li>Movement and component authentication</li>
                  <li>Documentation review and validation</li>
                  <li>Independent third-party authentication for high-value pieces</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">What You Receive</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Certificate of Authenticity</li>
                  <li>Manufacturer warranty card</li>
                  <li>Serial number documentation</li>
                  <li>WatchWave authenticity guarantee</li>
                  <li>Professional appraisal (for luxury pieces)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Our Guarantee</h2>
                <p className="mb-4">
                  If any watch purchased from WatchWave is found to be counterfeit or misrepresented,
                  we will refund your purchase price in full, plus return shipping costs, no questions asked.
                </p>
                <p>
                  This guarantee is valid for the lifetime of the watch and is transferable to future owners.
                </p>
              </div>

              <p>
                Shop with confidence knowing that every WatchWave timepiece is authentic, genuine, and exactly as described.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Authenticity;
