import Image from "next/image";
export default function Desserts() {
  return (
    <>
      <div className="flex flex-wrap justify-evenly">

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2 bg-black">
              <div className=" flex w-32 h-32 flex-shrink-0 pl-1 pr-1 items-center justify-center bg-black">
                <Image
                  src="/SweetPie.webp"
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="rounded-md mr-2"
                  alt="BBQ"
                />
              </div>

              <div className="bg-white w-[300px] shadow-custom relative flex flex-col justify-center">
                <h1 className="text-[20px]">Sweet Potato Pie</h1>
                <div className="flex justify-between items-center flex-col">
                  <span className="mt-1 mb-1">$15.00/pie</span>
                  <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                    Order Now
                  </button>
                </div>
              </div>
          </div>
        </div>

        

      </div>
    </>
  );
}
