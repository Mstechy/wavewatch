import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "Our Story - WatchWave";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground">
                Crafting timeless elegance since 2025.
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <p>
                Founded in 2025, WatchWave emerged from a passion for exceptional timepieces and a vision to make
                premium watches accessible to discerning individuals worldwide. Our journey began with a simple belief:
                that every person deserves to own a watch that tells their story.
              </p>

              <p>
                What started as a small boutique has grown into a trusted destination for watch enthusiasts,
                collectors, and everyday wearers alike. We curate an exquisite selection of luxury, smart, casual,
                and classic watches from renowned brands and emerging artisans.
              </p>

              <p>
                At WatchWave, we don't just sell watches—we share stories. Each timepiece in our collection carries
                the legacy of craftsmanship, innovation, and timeless design. Our expert team is dedicated to helping
                you find the perfect watch that complements your style and marks your most important moments.
              </p>

              <p>
                As we continue to grow, our commitment remains unwavering: to provide unparalleled service,
                authentic products, and an experience that celebrates the art of timekeeping.
              </p>
            </div>

            <div className="text-center">
              <h2 className="font-serif text-2xl font-semibold mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Authenticity</h3>
                  <p className="text-sm text-muted-foreground">
                    Every watch is guaranteed authentic with full documentation.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team of watch specialists provides personalized guidance.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    We source only the finest timepieces from trusted manufacturers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
