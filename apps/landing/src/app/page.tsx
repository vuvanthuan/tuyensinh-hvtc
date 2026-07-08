import { AdvisorSection } from "~/components/AdvisorSection";
import { DegreeNote } from "~/components/DegreeNote";
import { EnrollmentSection } from "~/components/EnrollmentSection";
import { FloatingButtons } from "~/components/FloatingButtons";
import { Footer } from "~/components/Footer";
import { HeroSection } from "~/components/HeroSection";
import { IntroSection } from "~/components/IntroSection";
import { LearningFormat } from "~/components/LearningFormat";
import { MajorsSection } from "~/components/MajorsSection";
import { Navbar } from "~/components/Navbar";
import { Testimonials } from "~/components/Testimonials";
import { ValuesSection } from "~/components/ValuesSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <MajorsSection />
        <ValuesSection />
        <LearningFormat />
        <EnrollmentSection />
        <AdvisorSection />
        <DegreeNote />
        <Testimonials />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
