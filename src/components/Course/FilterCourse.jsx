/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Checkbox } from "antd";
import { dataFilter } from "../../datas/DataInfoCourse";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DataCourse from "./DataCourse";
import { useDispatch, useSelector } from "react-redux";
import { updateListCourse } from "../../features/coursesSlice";

export default function FilterCourse(props) {
  let { isApplyFilter, setIsApplyFilter, isFilterActive, setIsFilterActive } =
    props;
  const [dataFilterCourse, setDataFilterCourse] = useState([]);
  const [isDataBasedOnCategory, setIsDataBasedOnCategory] = useState({
    location: [],
    level: [],
  });
  const dataAllCourse = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const updateFieldStatus = (item) => {
    const isDataThere = dataFilterCourse.map((dt) =>
      dt.id === item.id ? { ...dt, activeField: !dt.activeField } : dt
    );
    setDataFilterCourse(isDataThere);
  };

  const handleCheckbox = (itemCheck) => {
    let { e, data, title, item } = itemCheck;

    const isDataThere = dataFilterCourse.map((dt) => {
      if (dt.id === item.id) {
        const updatedData = dt.data.map((isDt) => {
          return isDt.id === data.id
            ? { ...isDt, isActive: !isDt.isActive }
            : isDt;
        });

        return { ...dt, data: updatedData };
      }

      return dt;
    });

    setDataFilterCourse(isDataThere);

    if (e.target.checked === true) {
      const dataObjectFilter = {
        id: data.id,
        value: data.value,
        isActive: !data.isActive,
        title,
      };
      switch (title.toLowerCase()) {
        case "tingkat":
          setIsDataBasedOnCategory((prevState) => ({
            ...prevState,
            level: [...prevState.level, dataObjectFilter],
          }));
          break;
        case "lokasi":
          setIsDataBasedOnCategory((prevState) => ({
            ...prevState,
            location: [...prevState.location, dataObjectFilter],
          }));
          break;
      }

      setIsApplyFilter([...isApplyFilter, dataObjectFilter]);
    } else {
      switch (title.toLowerCase()) {
        case "tingkat":
          {
            const filterDataLevel = isDataBasedOnCategory.level.filter(
              (item) => item.id !== data.id
            );
            setIsDataBasedOnCategory((prevState) => ({
              ...prevState,
              level: filterDataLevel,
            }));
          }
          break;
        case "lokasi":
          {
            const filterDataLocation = isDataBasedOnCategory.location.filter(
              (item) => item.id !== data.id
            );

            setIsDataBasedOnCategory((prevState) => ({
              ...prevState,
              location: filterDataLocation,
            }));
          }

          break;
      }

      const filterData = isApplyFilter.filter(
        (item) => item.value !== data.value
      );
      setIsApplyFilter(filterData);
    }
  };

  useEffect(() => {
    const getDataFilter = dataFilter();
    const putActiveField = getDataFilter.map((item) => {
      return { ...item, activeField: false };
    });
    setDataFilterCourse(putActiveField);
  }, []);

  const handleDataResult = () => {
    //get all value from level
    const descLevel = isDataBasedOnCategory?.level?.map((item) => item.value);

    //get all value from location
    const descLocation = isDataBasedOnCategory?.location?.map(
      (item) => item.value
    );

    const getDataResult = dataAllCourse?.keepDataForFilter?.filter((item) => {
      //is item level in keep data match with items of isDataBasedOnCategory ?
      const matchLevel =
        isDataBasedOnCategory?.level.length > 0
          ? descLevel.includes(item.level)
          : true;

      //is item location in keep data match with items of isDataBasedOnCategory ?
      const matchLocation =
        isDataBasedOnCategory?.location.length > 0
          ? descLocation.includes(item.location)
          : true;

      // return both match data
      return matchLevel && matchLocation;
    });

    dispatch(updateListCourse(getDataResult));
  };

  useEffect(() => {
    handleDataResult();
  }, [isDataBasedOnCategory]);

  return (
    <div className="w-full flex flex-col md:px-20 px-5">
      {/* Filter  */}
      <div
        className="justify-start flex flex-row gap-5 md:text-[16px] text-[12px] cursor-pointer"
        onClick={() => setIsFilterActive(!isFilterActive)}
      >
        <img
          src="/assets/icons/filter.png"
          alt="logo"
          className="w-[20px] h-[20px] cursor-pointer"
        />
        <h4>{isFilterActive ? "Sembunyikan Filter" : "Filter"}</h4>
        <div className="border px-10 border-l-black border-white  md:text-[16px] text-[12px] text-black">
          <h4>{dataAllCourse?.dataCourses?.length ?? 0} Kursus</h4>
        </div>
      </div>

      {/* Data Filter  */}
      <div className=" w-full md:mt-10 mt-4 flex md:flex-row flex-col">
        {isFilterActive && (
          <div className="flex flex-col  md:w-[30%] w-full">
            {dataFilterCourse?.map((item, index) => (
              <div
                key={index}
                className="w-full flex-col md:text-[15px] text-[12px]  py-2"
              >
                <div
                  key={index}
                  onClick={() => updateFieldStatus(item)}
                  className="cursor-pointer border border-gray-400 md:w-[70%] w-full md:text-[15px] text-[12px] px-2 py-2 items-center flex flex-row justify-between"
                >
                  <h4>{item?.title}</h4>
                  <img
                    src="/assets/icons/plus.png"
                    alt="logo"
                    className="w-[18px] h-[14px] cursor-pointer"
                  />
                </div>
                {item.activeField &&
                  item?.data?.map((dt, index) => (
                    <div
                      key={index}
                      className="w-[70%] mt-2  md:text-[15px] text-[10px]  flex flex-row justify-start gap-4"
                    >
                      <Checkbox
                        checked={dt?.isActive}
                        onChange={(e) =>
                          handleCheckbox({
                            e: e,
                            data: dt,
                            title: item?.title,
                            item: item,
                          })
                        }
                      >
                        {dt.name}
                      </Checkbox>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}
        <DataCourse isFilterActive={isFilterActive} />
      </div>
    </div>
  );
}

FilterCourse.propsType = {
  isApplyFilter: PropTypes.array,
  setIsApplyFilter: PropTypes.func,
  isFilterActive: PropTypes.bool,
  setIsFilterActive: PropTypes.func,
};
