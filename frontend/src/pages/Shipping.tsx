import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Shipping = () => {
  useEffect(() => {
    document.title = "Shipping Info - WatchWave";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                Shipping Information
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn about our shipping policies and delivery options for your watch purchases.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Shipping Options</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">Standard Shipping</h3>
                    <p>5-7 business days - Free on orders over $100</p>
                    <p className="text-sm">$9.99 for orders under $100</p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">Express Shipping</h3>
                    <p>2-3 business days - $19.99</p>
                    <p className="text-sm">Available for most locations</p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">Overnight Shipping</h3>
                    <p>1 business day - $39.99</p>
                    <p className="text-sm">Available for select locations</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">International Shipping</h2>
                <p className="text-muted-foreground mb-4">
                  We ship worldwide! International shipping rates and delivery times vary by location.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Europe: 7-14 business days</li>
                  <li>Asia: 10-21 business days</li>
                  <li>Australia: 10-21 business days</li>
                  <li>Other regions: Please contact us for rates</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Tracking Your Order</h2>
                <p className="text-muted-foreground">
                  Once your order ships, you'll receive a tracking number via email. You can track your package
                  on our website or the carrier's site.
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

export default Shipping;
