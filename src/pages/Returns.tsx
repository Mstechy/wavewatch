import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Returns = () => {
  useEffect(() => {
    document.title = "Returns - WatchWave";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                Returns & Refunds
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn about our return policy and how to request a refund for your watch purchase.
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <p>
                We want you to be completely satisfied with your purchase. If you are not happy with your watch,
                you may return it within 30 days of receipt for a full refund or exchange.
              </p>
              <p>
                To be eligible for a return, the watch must be in its original condition, unworn, and with all original packaging and tags.
              </p>
              <p>
                Please contact our customer service team to initiate a return and receive a return authorization number.
              </p>
              <p>
                Refunds will be processed to the original payment method within 7-10 business days after we receive the returned item.
              </p>
              <p>
                Shipping costs for returns are the responsibility of the customer unless the return is due to a defect or error on our part.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
