import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDataProductFromDetailMakeupPackage,
  getDetailMakeupPackage,
} from "../components/services/makeupBudgetService";

export default function DetailMakeupBudgetList() {
  const { id } = useParams();

  const [isDetailMakeupPackage, setIsDetailMakeupPackage] = useState({});
  const [
    isDataProductDetailMakeupPackage,
    setIsDataProductDetailMakeupPackage,
  ] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getDataProduct = async (products) => {
    const promises = products?.map((id) =>
      getDataProductFromDetailMakeupPackage(id)
    );
    if (!Array.isArray(promises)) {
      console.error("promises is not an array:", promises);
      return;
    }

    const results = await Promise.all(promises);
    return results;
  };

  const hitApi = async (id) => {
    const getData = await getDetailMakeupPackage(id);
    setIsDetailMakeupPackage(getData.data);
  };

  const hitSecondApi = async () => {
    const dataProducts = await getDataProduct(isDetailMakeupPackage.data);
    if (dataProducts?.length !== 0) {
      const isData = dataProducts?.map((item) => item.data);
      if (isData) {
        setIsDataProductDetailMakeupPackage(isData);
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    }
  };

  useEffect(() => {
    hitApi(id);
  }, [id]);

  useEffect(() => {
    hitSecondApi();
  }, [isDetailMakeupPackage]);

  return (
    <div className="flex flex-col h-fit w-full mx-auto md:my-40 mt-10 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-14 font-medium capitalize max-w-7xl">
      <div className="flex flex-col gap-10 mx-auto text-left">
        <h4 className="text-3xl text-[#EB395F]">
          {isDetailMakeupPackage.name}
        </h4>
        <h5 className="text-base">List Produk Sesuai Budget Kamu :</h5>
      </div>
      <div className="flex md:flex-row flex-col w-full justify-center">
        {isLoading === true ? (
          <h5 className="text-xl">loadingg.....</h5>
        ) : (
          <div className="flex md:flex-row flex-col flex-wrap mx-auto items-center justify-center gap-10 w-full">
            {isDataProductDetailMakeupPackage?.length !== 0 &&
              isDataProductDetailMakeupPackage.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FCC9D4] cursor-pointer flex flex-col items-center md:w-[25%] w-[80%] rounded-[10px]"
                >
                  <div className=" mt-4 mb-4  px-4 py-2 ">
                    <h5 className="text-[16px] text-[#EB395F]">
                      {item.product_name}
                    </h5>
                  </div>
                  <img
                    src={item.image_url}
                    alt="image"
                    className="w-full h-[190px] rounded-none"
                  />
                  <div className=" px-4 py-2 mb-4 justify-start text-[14px] text-[#EB395F] w-full flex flex-col">
                    <h5 className="mb-6 mt-4">{item.price}</h5>
                    <a href={item.product_link}>Checkout</a>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
