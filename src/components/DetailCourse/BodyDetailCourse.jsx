import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function BodyDetailCourse() {
  const dataDetail = useSelector((state) => state.course);
  const [isData, setIsData] = useState({});

  useEffect(() => {
    setIsData(dataDetail.dataDetailCourses);
  }, [dataDetail])

  return (
    <div className="flex flex-col text-left w-full">
      {/* Profile Mentor */}
      <h4 className="md:text-[20px] text-[12px]">Profile Mentor</h4>
      <div className="h-14 flex flex-row gap-3 md:text-[20px] text-[12px] items-center">
        <img
          src="/assets/img/person-pelatihan-4.jpg"
          alt="img"
          className="w-[40px] h-[36px] rounded-full"
        />{" "}
        <div className="flex flex-col w-[40%]">
          <h5 className="md:text-[15px] text-[12px]">{isData?.mentor}</h5>
          <div className="flex flex-row gap-3 md:text-[12px] text-[12px]">
            <img
              src="/assets/icons/users.png"
              alt="img"
              className="w-[18px] h-[18px] rounded-full"
            />{" "}
            <h5>{isData?.totalStudent} siswa</h5>
          </div>
        </div>
      </div>
      {/* Location */}
      <div className="flex mt-4 flex-col gap-3 md:text-[20px] text-[12px]">
        <h4>Lokasi</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1159186150776!2d106.98854127571482!3d-6.248452661182905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c33198e9c27%3A0x601f156c56889521!2sMetropolitan%20Mall%20Bekasi!5e0!3m2!1sid!2sid!4v1727773763439!5m2!1sid!2sid"
          width="100%"
          height="300"
          //   style="border:0;"

          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h5 className="md:text-[16px] text-[12px] text-gray-400">{isData?.location}</h5>
      </div>
    </div>
  );
}
