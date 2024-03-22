"use client";
import { DatePicker, Input, TimePicker, type CheckboxProps, Button } from "antd";
import { CiSearch } from "react-icons/ci";

const HomeBanner = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <div className="bg-[url('/imgs/banner-bg.jpg')] relative after:bg-primary after:absolute after:h-full after:w-full after:opacity-60 after:top-0 after:left-0 after:z-30 min-h-[80vh] py-20 bg-center bg-no-repeat bg-cover w-full h-full">
        <div className="container md:pt-20 pt-10 px-5 mx-auto flex justify-center items-center">
          <div className="z-40">
            <h2 className="text-center md:leading-relaxed font-sans mx-3 md:mx-0 text-black font-semibold text-[22px] md:text-[23px] mb-8 md:mb-14">
              Affordable Car Rentals: Drive Your Way to Convenience and Savings
              <br />
              Today!&rdquo; Car Rental -Search, Compare & Save
            </h2>
            <div className="md:px-0 px-4">
              <div className="flex-none md:flex gap-2 justify-center items-center rounded-md py-5 px-3 md:py-3 md:px-2 bg-[#ffb700]">
                <div className="flex bg-white gap-2 items-center justify-center rounded-md">
                  <div className="ms-2">
                    <CiSearch />
                  </div>
                  <div>
                    <label className="text-[12px] ms-4 md:ms-0">Pick Up Location</label>
                    <Input defaultValue="Paris, Ile de France, France" />
                  </div>
                </div>
                <div className="md:flex flex-none items-center justify-center">
                  <div className="flex gap-2 md:mt-0 mt-3">
                    <div className="bg-white md:pe-0 pe-4 rounded-md block gap-3 justify-center items-center">
                      <label className="text-[12px] ms-4 md:ms-2">Pick Up Date</label>
                      <div>
                        <DatePicker />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 md:mt-0 mt-3">
                    <div className="bg-white md:pe-0 pe-4 rounded-md block gap-3 justify-center items-center md:ms-[10px] ms-0">
                      <label className="text-[12px] ms-4 md:ms-2">Pick Up Date</label>
                      <div>
                        <DatePicker />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-none gap-3 justify-center items-center mt-3 md:mt-0">
                  <Button type="primary" className="h-full">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
