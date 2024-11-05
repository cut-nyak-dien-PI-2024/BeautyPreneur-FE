import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NotFoundComponent from "../NotFoundComponent";

export default function DataCourse(props) {
  let { isFilterActive } = props;
  const dataStateCourse = useSelector((state) => state.course);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 ${
        isFilterActive ? "w-[70%]" : "w-full"
      }`}
    >
      {dataStateCourse?.dataCourses?.length !== 0 ? (
        dataStateCourse?.dataCourses?.map((item, index) => (
          <Link
            key={index}
            to={`/kursus/${item.id}`}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 min-h-[450px] flex flex-col justify-between"
          >
            {/* Bagian gambar kursus */}
            <img
              src={item?.headline_img}
              alt="img"
              className="w-full h-[180px] object-cover"
            />

            {/* Bagian deskripsi kursus */}
            <div className="p-4">
              <h4 className="text-lg font-semibold">{item?.title}</h4>
              <p className="text-gray-500">{item?.location}</p>
              <p className="text-gray-800 font-semibold">Rp. {item?.price}</p>

              {/* Bagian tanggal kursus */}
              <div className="flex items-center space-x-2 mt-2">
                <img
                  src="/icons/calendar-black.png"
                  alt="calendar icon"
                  className="w-5 h-5"
                />
                <span className="text-sm text-gray-600">{item?.duration?.date}</span>
              </div>

              {/* Bagian waktu kursus */}
              <div className="flex items-center space-x-2 mt-1">
                <img
                  src="/icons/clock.png"
                  alt="clock icon"
                  className="w-5 h-5"
                />
                <span className="text-sm text-gray-600">{item?.duration?.time || item?.duration?.hour}</span>
              </div>

              {/* Bagian info mentor */}
              <div className="flex items-center mt-3 space-x-3">
                <img
                  src={item?.image_mentor}
                  alt="mentor"
                  className="w-8 h-8 rounded-full"
                />
                <span>{item?.mentor}</span>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <NotFoundComponent />
      )}
    </div>
  );
}
