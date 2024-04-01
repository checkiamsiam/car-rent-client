import CarSearch from "@/components/sections/CarSearch/CarSearch";
import HeadingBox from "@/components/sections/CarSearch/HeaderBox";

const SearchResultPage = ({ searchParams }: { searchParams: any }) => {
 
  return (
    <div className="md:mt-28 mt-10 container mx-auto px-5">
      <HeadingBox locationId={searchParams.location} queryParams={searchParams} />
      <CarSearch searchParams={searchParams} />
    </div>
  );
};

export default SearchResultPage;
