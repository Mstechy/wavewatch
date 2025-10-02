import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WatchCareGuide = () => {
  useEffect(() => {
    document.title = "Watch Care Guide - WatchWave";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                Watch Care Guide
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn how to properly care for your timepiece to ensure it lasts a lifetime.
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Daily Care</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Wipe your watch daily with a soft, lint-free cloth</li>
                  <li>Avoid exposing your watch to extreme temperatures</li>
                  <li>Keep your watch away from strong magnetic fields</li>
                  <li>Store your watch in a cool, dry place when not wearing</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Water Resistance</h2>
                <p className="mb-4">
                  Water resistance is not permanent and can diminish over time. Have your watch checked annually
                  by a professional to ensure continued water resistance.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Do not press buttons underwater</li>
                  <li>Rinse with fresh water after exposure to salt water</li>
                  <li>Avoid hot showers, saunas, and steam rooms</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Battery & Movement</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Have your watch serviced every 3-5 years for mechanical watches</li>
                  <li>Replace batteries promptly when they run low</li>
                  <li>Keep automatic watches wound by wearing them regularly</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Cleaning & Maintenance</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use only gentle, non-abrasive cleaners</li>
                  <li>Avoid harsh chemicals and solvents</li>
                  <li>Have professional cleaning done annually</li>
                  <li>Check and tighten screws periodically</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Professional Service</h2>
                <p>
                  Regular professional maintenance is essential for keeping your watch in optimal condition.
                  We recommend having your watch serviced by a certified watchmaker every 3-5 years,
                  or sooner if you notice any irregularities in timekeeping or function.
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

export default WatchCareGuide;
