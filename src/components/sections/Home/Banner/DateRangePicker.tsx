import { setOpenRangePickerOpen, setOpenRangePickerResOpen } from "@/redux/features/searchbox/searchboxSlice";
import { useAppDispatch } from "@/redux/hooks";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";

const DateRangePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(setOpenRangePickerOpen(false));
    dispatch(setOpenRangePickerResOpen(false));
  };

  return (
    <div className="bg-white p-5">
      <div className=" flex justify-center">
        <div>
          <div className="flex justify-between px-5 w-full ">
            <h1>Calender</h1>
            <button onClick={close}>X</button>
          </div>
          <div className="max-lg:hidden">
            <DateRange
              onChange={(item) => setState([item.selection])}
              // showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              showDateDisplay={false}
            />
          </div>
          <div className="lg:hidden">
            <DateRange
              onChange={(item) => setState([item.selection])}
              // showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={10}
              ranges={state}
              direction="vertical"
              showDateDisplay={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
