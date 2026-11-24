import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WorkSection } from "@/components/WorkSection";
import { FieldRecord } from "@/components/FieldRecord";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <WorkSection />
        <FieldRecord />
      </main>
      <ContactFooter />
    </>
  );
}
