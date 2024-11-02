import { useEffect, useState } from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background-color: #cccccc;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .slick-dots li.slick-active button {
    background-color: #000000;
  }

  .slick-dots li {
    margin: 0 5px;
  }
`;

export default function SliderDetailCourse() {
  const dataDetail = useSelector((state) => state.course);
  const [isData, setIsData] = useState({});

  const [urlImage, setUrlImage] = useState("");
  const [optionFilter, setOptionFilter] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateScreens = () => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  useEffect(() => {
    setOptionFilter("foto");
    updateScreens();
  }, []);

  useEffect(() => {
    setIsData(dataDetail.dataDetailCourses);
 }, [dataDetail]);


  return (
    <div className="w-full flex md:flex-row flex-col md:gap-10 gap-4">
      {/* <h5 className="order-first flex md:hidden text-center justify-center text-[20px]">{isData?.title}</h5> */}
      {/* Slider Web dan mobile*/}
      {windowWidth < 744 ? (
        <StyledCarousel
          slidesToShow={2.5}
          autoplay
          className="flex flex-row h-full w-full"
        >
          {isData?.portofolio?.map((item, index) => (
            <div key={index} className="w-full px-1">
              <img
                src={item?.url}
                alt="img"
                className="md:w-[200px] md:h-[100px] w-[240px] h-[74px] min-h-[68px] max-h-[120px] rounded-md cursor-pointer"
                onClick={() => setUrlImage(item?.url)}
              />
            </div>
          ))}
        </StyledCarousel>
      ) : (
        <div className="md:w-[20%] w-full gap-4 md:flex hidden md:flex-col flex-row">
          {isData?.portofolio?.map((item, index) => (
            <img
              key={index}
              src={item?.url}
              alt="img"
              className="md:w-[200px] md:h-[100px] w-[120px] h-[64px] rounded-md cursor-pointer"
              onClick={() => setUrlImage(item?.url)}
            />
          ))}
        </div>
      )}
      {/* Image Slider */}
      <div className="md:w-[70%] relative md:h-fit flex flex-col gap-4">
        {optionFilter === "foto" && (
          <img
            src={urlImage !== "" ? urlImage : isData?.headline_img}
            alt="img"
            className="w-full md:h-[20rem] h-[12rem] rounded-md"
          />
        )}
        {optionFilter === "video" && (
          <video
            className="rounded-md w-full md:h-[300px]   object-cover object-center backdrop-brightness-50"
            loop
            autoPlay
            muted
          >
            <source src="/assets/video/makeup-vid.mp4" type="video/mp4" />
          </video>
        )}
        {/* Button */}
        <div className="flex flex-row justify-start gap-4 md:relative px-2 md:px-0 absolute inset-0 top-32 md:top-0">
          <div
            onClick={() => setOptionFilter("foto")}
            className="flex flex-row cursor-pointer items-center  gap-4 rounded-[10px] h-fit md:px-6 px-4 py-2 md:w-[120px] w-[100px] text-center text-base text-black bg-white border border-slate-500"
          >
            <img
              src="/assets/icons/image.png"
              alt="img"
              className="md:w-[50px] md:h-[24px] w-[18px] h-[18px] rounded-md cursor-pointer"
            />
            <h5>Foto</h5>
          </div>
          <div
            onClick={() => setOptionFilter("video")}
            className="flex flex-row cursor-pointer   items-center  gap-4 rounded-[10px] h-fit md:px-6 px-4 py-2 md:w-[120px] w-[100px] text-center text-base text-black bg-white border border-slate-500"
          >
            <img
              src="/assets/icons/video.png"
              alt="img"
              className="md:w-[50px] md:h-[24px] w-[18px] h-[18px] rounded-md cursor-pointer"
            />
            <h5>Video</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
