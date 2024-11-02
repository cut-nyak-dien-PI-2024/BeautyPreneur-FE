import { useState } from "react"
import FilterCourse from "./FilterCourse";

export default function BodyCourse() {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isApplyFilter, setIsApplyFilter] = useState([]);

  return (
    <div className="flex md:flex-row flex-col h-fit w-full mx-auto md:my-40 mt-10 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-14 font-medium capitalize max-w-7xl">
      <FilterCourse setIsApplyFilter={setIsApplyFilter} isApplyFilter={isApplyFilter} isFilterActive={isFilterActive} setIsFilterActive={setIsFilterActive}/>
    </div>
  );
}
