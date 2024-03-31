import CheckoutSection from "@/components/sections/Payment/CheckoutSection";
import HeadingSection from "@/components/sections/Payment/HeadingSection";

const CheckoutPage = ({ params: { id }, searchParams }: { params: { id: string }; searchParams: any }) => {
  console.log(searchParams);
  console.log(id);
  return (
    <div>
      <div className="md:mt-28 mt-20 container mx-auto px-5">
        <HeadingSection locationId={id} queryParams={searchParams}/>
        <CheckoutSection />
      </div>
    </div>
  );
};

export default CheckoutPage;
