import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBadges from "@/components/StatsBadges";
import ValueProps from "@/components/ValueProps";
import Platforms from "@/components/Platforms";
import Flow from "@/components/Flow";
import Comparison from "@/components/Comparison";
import MidCTA from "@/components/MidCTA";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBadges />
        <ValueProps />
        <Platforms />
        <Flow />
        <Comparison />
        <MidCTA text="この違い、詳しく聞いてみる" />
        <Testimonials />
        <Pricing />
        <FAQ />
        <MidCTA text="まずは話を聞いてみる" />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
