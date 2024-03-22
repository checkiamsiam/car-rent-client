import PublicLayout from "@/components/layout/PublicLayout";
import AboutUs from "@/components/sections/Home/AboutUs/AboutUs";
import HomeBanner from "@/components/sections/Home/Banner/HomeBanner";
import Car from "@/components/sections/Home/CarSection/Car";
import Choose from "@/components/sections/Home/ChooseUs/Choose";

export default function Home() {
  return (
    <main>
      <PublicLayout>
        <HomeBanner />
        <Choose />
        <Car />
        <AboutUs />
      </PublicLayout>
    </main>
  );
}
