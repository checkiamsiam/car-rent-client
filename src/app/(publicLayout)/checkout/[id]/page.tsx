import CheckoutSection from "@/components/sections/Payment/CheckoutSection";
import HeadingSection from "@/components/sections/Payment/HeadingSection";

const page = () => {
  return (
    <div>
      <div className="md:mt-28 mt-20 container mx-auto px-5">
        <HeadingSection />
        <CheckoutSection />
      </div>
    </div>
  );
};

export default page;
