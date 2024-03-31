import CheckoutSection from "@/components/sections/Payment/CheckoutSection";
import HeadingSection from "@/components/sections/Payment/HeadingSection";

const CheckoutPage = ({ params: { id }, searchParams }: { params: { id: string }; searchParams: any }) => {
  return (
    <div>
      <div className="md:mt-28 mt-20 container mx-auto px-5">
        <HeadingSection carId={id} queryParams={searchParams}/>
        <CheckoutSection carId={id} queryParams={searchParams}/>
      </div>
    </div>
  );
};

export default CheckoutPage;
