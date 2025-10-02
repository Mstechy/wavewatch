import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers - WatchWave";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                Join Our Team
              </h1>
              <p className="text-lg text-muted-foreground">
                Be part of a passionate team dedicated to exceptional timepieces and customer service.
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <p>
                At WatchWave, we're always looking for talented individuals who share our passion for watches
                and commitment to excellence. Whether you're a watch enthusiast, a customer service expert,
                or a marketing professional, we offer opportunities to grow and contribute to our mission.
              </p>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Current Openings</h2>
                <p className="mb-4">
                  We don't have any open positions at the moment, but we're always interested in hearing from
                  qualified candidates. Check back regularly or send us your resume for future opportunities.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">What We Look For</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Passion for watches and luxury goods</li>
                  <li>Excellent customer service skills</li>
                  <li>Attention to detail and quality</li>
                  <li>Team player with a positive attitude</li>
                  <li>Continuous learning and growth mindset</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Benefits</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Competitive salary and benefits package</li>
                  <li>Employee discount on watches</li>
                  <li>Professional development opportunities</li>
                  <li>Flexible work arrangements</li>
                  <li>Collaborative and supportive work environment</li>
                </ul>
              </div>

              <p>
                Interested in joining our team? Send your resume and cover letter to careers@watchwave.com
                with the subject line "WatchWave Career Opportunity".
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
