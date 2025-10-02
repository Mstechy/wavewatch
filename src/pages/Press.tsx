import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Press = () => {
  useEffect(() => {
    document.title = "Press - WatchWave";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                Press & Media
              </h1>
              <p className="text-lg text-muted-foreground">
                Latest news, press releases, and media resources from WatchWave.
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Press Releases</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold">WatchWave Launches Premium Online Boutique</h3>
                    <p className="text-sm text-muted-foreground">January 15, 2025</p>
                    <p>WatchWave announces the launch of its comprehensive online platform for luxury timepieces...</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold">New Collection Features Cutting-Edge Smart Watches</h3>
                    <p className="text-sm text-muted-foreground">December 1, 2024</p>
                    <p>WatchWave expands its catalog with the latest in wearable technology...</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Media Kit</h2>
                <p className="mb-4">
                  Download our media kit for high-resolution logos, brand guidelines, and product images.
                </p>
                <button className="bg-accent text-accent-foreground px-6 py-2 rounded-md font-medium hover:bg-accent/90 transition-colors">
                  Download Media Kit
                </button>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Press Inquiries</h2>
                <p className="mb-4">
                  For press inquiries, interviews, or media requests, please contact our press team.
                </p>
                <p>
                  <strong>Email:</strong> press@watchwave.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>

              <p>
                Stay updated with the latest from WatchWave by following us on social media and subscribing to our newsletter.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
