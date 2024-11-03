import { useDispatch, useSelector } from "react-redux";
import { updateListCourse } from "../../features/coursesSlice";

export default function HeaderCourse() {
  const getDataCourse = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const handleSearch = (dataSearch) => {
    if (dataSearch.trim() !== "") {
      let findData = getDataCourse?.keepDataForFilter?.filter((item) =>
        item.title.toLowerCase().includes(dataSearch.toLowerCase())
      );
      dispatch(updateListCourse(findData));
    } else {
      dispatch(updateListCourse(getDataCourse?.keepDataForFilter));
    }
  };

  return (
    <div className="w-full mx-auto md:my-10 mt-24 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-14 font-medium capitalize flex flex-col  max-w-7xl">
      <div className="flex flex-col gap-4">
      <h3 className="md:text-3xl text-xl text-center">Kursus Makeup</h3>
      <h5 className="md:text-2xl text-l text-center">untuk pemula hingga profesional</h5>
      </div>
      <div className="md:w-[50%] w-full px-4 md:px-0 mx-auto">
        <div className="border py-2 px-4 w-full flex flex-row items-center justify-between  border-gray-400 rounded-[10px]">
          <input
            placeholder="cari pelatihan apa?"
            onChange={(e) => handleSearch(e.target.value)}
            className="capitalize w-[90%] md:text-[16px] text-xs outline-none ring-0 "
            type="text"
          />
          {/* Logo */}
          <img
            src="/icons/search.png"
            alt="logo"
            className="md:w-[20px] md:h-[20px] w-[12px] h-[14px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
