import React, { useEffect, useState } from "react";
import { getAllMakeupPackage } from "../components/services/makeupBudgetService";
import { Link } from "react-router-dom";

export default function MakeupBudgetList() {
  const [isMakeupPackage, setIsMakeupPackage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const hitApi = async () => {
    const getData = await getAllMakeupPackage();
    setTimeout(() => {
      setIsMakeupPackage(getData.data);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    hitApi();
  }, []);


  return (
    <div className="flex flex-col h-fit w-full mx-auto md:my-40 mt-10 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-14 font-medium capitalize max-w-7xl">
      <div className="flex flex-col gap-10 mx-auto text-center">
        <h4 className="text-3xl text-[#EB395F]">Makeup Budget List</h4>
        <h5 className="text-xl">
          Temukkan Makeup yang sesuai dengan budgetmu bersama kami
        </h5>
      </div>
      <div className="flex flex-row w-full justify-center">
        {isLoading === true ? (
          <h5 className="text-xl">loadingg.....</h5>
        ) : (
          <div className="flex md:flex-row flex-col flex-wrap mx-auto items-center justify-center gap-10 w-full">
            {isMakeupPackage.map((item, index) => (
              <Link
                key={index}
                to={`/makeup-budget-list/${item._id}`}
                className="bg-[#FCC9D4] cursor-pointer flex flex-col items-center md:w-[25%] w-[80%]  rounded-[10px]"
              >
                <div className=" mt-4 mb-4  px-4 py-2 ">
                  <h5 className="text-[16px] text-[#EB395F]">{item.name}</h5>
                </div>
                <img
                  src={item.image_url}
                  alt="image"
                  className="w-full h-[190px] rounded-none"
                />
                <div className=" px-4 py-2 mb-4 justify-start text-[14px] text-[#EB395F] w-full flex flex-col">
                  <h5 className="mb-6 mt-4">{item.total_price}</h5>
                  <h5>Check</h5>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
