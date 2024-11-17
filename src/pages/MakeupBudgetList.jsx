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
    }, 300);
  };

  useEffect(() => {
    hitApi();
  }, []);

  return (
    <div className="flex flex-col h-fit w-full mx-auto md:my-40 mt-10 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-14 font-medium capitalize max-w-7xl">
      <div className="flex flex-col gap-5 mx-auto text-center">
        <h4 className="text-3xl text-[#d63583] font-bold mb-0">Makeup Budget List</h4>
        <h5 className="text-xl text-[#feacc4] mt-0">
          Temukkan Makeup yang sesuai dengan budgetmu bersama kami
        </h5>
      </div>
      <div className="flex flex-row w-full justify-center">
        {isLoading ? (
          <h5 className="text-xl">Loading...</h5>
        ) : (
          <div className="flex flex-wrap mx-auto items-center justify-center gap-10 w-full">
            {isMakeupPackage.map((item, index) => (
              <Link
                key={index}
                to={`/makeup-budget-list/${item._id}`}
                className="bg-white shadow-lg overflow-hidden md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105 border-none" 
              >
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col"> 
                  <div className="flex justify-between items-center">
                    <h5 className="text-[16px] text-[#d63583] font-bold">{item.name}</h5> 
                    <h5 className="text-sm text-[#ff779e] font-bold">{item.total_price}</h5> 
                  </div>
                  <div className="mt-4">
                    <h5 className="text-sm text-[#feacc4]">Check</h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}