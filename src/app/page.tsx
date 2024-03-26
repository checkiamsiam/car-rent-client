import PublicLayout from "@/components/layout/PublicLayout";
import AboutUs from "@/components/sections/Home/AboutUs/AboutUs";
import HomeBanner from "@/components/sections/Home/Banner/HomeBanner";
import Car from "@/components/sections/Home/CarSection/Car";
import Choose from "@/components/sections/Home/ChooseUs/Choose";
import Contact from "@/components/sections/Home/Contact/Contact";
import CheckoutSection from "@/components/sections/Payment/CheckoutSection";
import HeadingSection from "@/components/sections/Payment/HeadingSection";

export default function Home() {
  return (
    <main>
      <PublicLayout>
        <HomeBanner />
        <Choose />
        <Car />
        <AboutUs />
        <Contact />
        <div className="lg:w-10/12 mx-auto py-5 px-5">
          <HeadingSection />
          <CheckoutSection />
        </div>
      </PublicLayout>
    </main>
  );
}
