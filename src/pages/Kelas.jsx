/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import"./Kelas.css";
import BodyCourse from "../components/Course/BodyCourse"
import HeaderCourse from "../components/Course/HeaderCourse"
// import { DataDummy } from "../datas/DataCourseDummy";
import { addCourses } from "../features/coursesSlice";
import { useDispatch } from "react-redux";
import { setLoading } from "../features/generalSlice";
import {getAllCourses} from "../components/services/coursesServices";


export default function Course() {
  const dispatch = useDispatch();

    const hitAPICourse = async () => {
      try {
        // const data = DataDummy();
         const data = await getAllCourses();
         console.log(data, 'ini data');
        dispatch(addCourses(data.data));
      } catch (error) {
        console.error("failed", error);
      }
    };

    useEffect(() => {
      window.scroll(0, 0);
      hitAPICourse();
      dispatch(setLoading(true));
    }, []);


  return (
   <>
     <HeaderCourse />
     <BodyCourse />
   </>
  )
}
