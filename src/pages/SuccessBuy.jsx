export default function SuccessBuy() {
  return (
    <div className="w-full mx-auto md:my-10 mt-24 md:mt-20 md:text-[22px] text-[14px] text-center  px-2 md:px-0 gap-14 font-medium capitalize flex flex-col md:justify-center justify-center max-w-7xl">
      <img
        src="/assets/icons/check-succes.png"
        alt="activity"
        className="md:w-[200px] md:h-[200px] w-[100px] h-[100px] mx-auto cursor-pointer"
      />
      <h4>Terima kasih !</h4>
      <h5 className="text-[12px] -mt-10 md:w-[30%] w-[80%] mx-auto">
        Kami akan menginformasikan statusnya melalui email atau dashboard Anda
        secepat mungkin.{" "}
      </h5>
    </div>
  );
}
