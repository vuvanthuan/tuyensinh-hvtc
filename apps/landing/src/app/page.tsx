import { DegreeNote } from "~/components/DegreeNote";
import { EnrollmentSection } from "~/components/EnrollmentSection";
import { FloatingButtons } from "~/components/FloatingButtons";
import { Footer } from "~/components/Footer";
import { HeroSection } from "~/components/HeroSection";
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
        <MajorsSection />
        <EnrollmentSection />
        <LearningFormat />
        <ValuesSection />
        <DegreeNote />
        <Testimonials />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
