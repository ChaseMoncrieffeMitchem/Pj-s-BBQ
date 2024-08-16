import Image from "next/image";

export default function Sides() {
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2">
            <div className=" flex w-32 h-32 justify-center bg-black flex-shrink-0 items-center">
              <Image
                src="/PotatoSalad.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">Potato Salad</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$20.00/tray</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2">
            <div className=" flex w-32 h-32 justify-center bg-black flex-shrink-0 items-center">
              <Image
                src="/BBQBeans.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">BBQ Beans</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$22.00/tray</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2">
            <div className=" flex w-32 h-32 justify-center bg-black flex-shrink-0 items-center">
              <Image
                src="/GreenBeans.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">Green Beans</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$22.00/tray</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2">
            <div className=" flex w-32 h-32 justify-center bg-black flex-shrink-0 items-center">
              <Image
                src="/cropped-MacNCheese.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">Mac & Cheese</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$25.00/tray</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2">
            <div className=" flex w-32 h-32 justify-center bg-black flex-shrink-0 items-center">
              <Image
                src="/GreenSalad.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">Green Salad</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$20.00/tray</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2 bg-black">
            <div className=" flex w-32 h-32 justify-center bg-black flex-shrink-0 items-center pl-1 pr-1">
              <Image
                src="/DinnerRolls.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md mr-2"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">Dinner Rolls</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$7.00/12 count</span>
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
