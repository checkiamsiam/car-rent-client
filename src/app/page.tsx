import PublicLayout from "@/components/layout/PublicLayout";
import FAQ from "@/components/sections/FAQ/FAQ";
import AboutUs from "@/components/sections/Home/AboutUs/AboutUs";
import HomeBanner from "@/components/sections/Home/Banner/HomeBanner";
import Car from "@/components/sections/Home/CarSection/Car";
import Choose from "@/components/sections/Home/ChooseUs/Choose";
import Contact from "@/components/sections/Home/Contact/Contact";

export default function Home() {
  return (
    <main>
      <PublicLayout>
        <HomeBanner />
        <Car />
        <AboutUs />
        <FAQ />
        <Contact />
      </PublicLayout>
    </main>
  );
}
