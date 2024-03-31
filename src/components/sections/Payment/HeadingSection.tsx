import { getSingleCar } from "@/redux/features/car/car.api";
import { ILocation } from "@/types/ApiResponse";
import dayjs from "dayjs";
import { FaAngleRight } from "react-icons/fa6";

const HeadingSection = async ({ carId, queryParams }: { carId: string; queryParams: any }) => {
  const carData = await getSingleCar({
    id: carId,
    params: {
      populate: "location",
    },
  });
  return (
    <div className="">
      <div className="flex items-center gap-10 border-[1.5px] p-2 rounded-md">
        <div>
          <h2 className="lg:text-lg font-bold py-1">{(carData?.car?.location as ILocation)?.name}</h2>
          <p className="text-slate-500">
            {dayjs(queryParams?.pickDate).format("ddd, DD MMM YYYY")}, {queryParams?.pickTime}
          </p>
        </div>
        <div>
          <p>
            <FaAngleRight />
          </p>
        </div>
        <div>
          <h2 className="lg:text-lg font-bold py-1">{(carData?.car?.location as ILocation)?.name}</h2>
          <p className="text-slate-500">{dayjs(queryParams?.returnDate).format("ddd, DD MMM YYYY")}, {queryParams?.returnTime}</p>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
