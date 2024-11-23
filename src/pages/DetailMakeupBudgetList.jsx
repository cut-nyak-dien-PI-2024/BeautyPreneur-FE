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
  const [items, setItems] = useState([]);

  const fetchWithTimeout = (url, timeout = 500) => {
    return Promise.race([
      getDataProductFromDetailMakeupPackage(url),
      new Promise(
        (_, reject) =>
          setTimeout(() => reject(new Error("Request Timeout")), timeout)
      ),
    ]);
  };

  const getDataProduct = async (products) => {
    let resultsData = [];
    if (!Array.isArray(products) || products.length === 0) {
      return [];
    }

    const promises = products.map((product) => fetchWithTimeout(product));

    Promise.allSettled(promises)
      .then((responses) => {
        const getData = responses.filter((item) => item.status === "fulfilled");
        const loopData = getData.map((item) => item.value.data);
        setItems(loopData);
        isLoading(false);
      })
      .catch((error) => {
        setItems([]);
      });

    return items;
  };

  const hitApi = async (id) => {
    const getData = await getDetailMakeupPackage(id);
    setIsDetailMakeupPackage(getData.data);
  };

  const hitSecondApi = async () => {
    await getDataProduct(isDetailMakeupPackage.data);
  };

  useEffect(() => {
    hitApi(id);
  }, [id]);

  useEffect(() => {
    if (isDetailMakeupPackage?.data?._id !== "") hitSecondApi();
  }, [isDetailMakeupPackage]);

  return (
    <div className="flex flex-col h-fit w-full mx-auto md:my-40 mt-10 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-14 font-medium capitalize max-w-7xl">
      <div className="flex flex-col gap-5 mx-auto text-center">
        <h4 className="text-3xl text-[#d63583] font-bold mb-0">
          {isDetailMakeupPackage.name}
        </h4>
        <h5 className="text-base text-[#feacc4] mt-0">List Produk Sesuai Budget Kamu :</h5>
      </div>
      <div className="flex md:flex-row flex-col w-full justify-center">
        {isLoading && items.length === 0 ? (
          <h5 className="text-xl">loadingg.....</h5>
        ) : (
          <div className="flex md:flex-row flex-col flex-wrap mx-auto items-center justify-center gap-10 w-full">
            {items?.length !== 0 &&
              items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg overflow-hidden md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105 border-none"
                >
                  <img
                    src={item.image_url}
                    alt="image"
                    className="w-full rounded-none"
                  />
                  <div className="p-4 flex flex-col mb-4">
                    <h5 className="text-[16px] text-[#d63583] font-bold mb-2">
                      {item.product_name}
                    </h5>
                    <div className="flex justify-between items-center text-[14px] text-[#ff779e]">
                      <span>{item.price}</span>
                      <a href={item.product_link} className="text-[#feacc4] hover:underline">
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}