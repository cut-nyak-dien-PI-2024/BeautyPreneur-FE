export default function NotFoundComponent() {
    return (
      <div className=" w-full flex flex-col justify-center items-center md:text-base text-sm ">
        <img
          src="/assets/image/not-found.png"
          alt="not-found"
          className=" md:w-[400px] md:h-[340px] w-[230px] h-[200px]  cursor-pointer"
        />
        <h4>Maaf data yang Anda cari tidak ada atau belum tersedia 😥 </h4>
      </div>
    );
  }
  