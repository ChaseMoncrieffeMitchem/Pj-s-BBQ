import Image from "next/image";
import * as React from "react";

export default function Entrees() {
  
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg">
            <div className="flex w-32 h-32 flex-shrink-0 items-center ml-2 mr-2">
              <Image
                src="/cropped-NewBrisket.webp"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
                alt="Brisket"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center items-center">
              <div className="flex flex-col items-center">
                <h1 className="text-[20px]">Brisket</h1>
                <span className="mb-1 mt-1">$65.00 - $95.00</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2">
            <div className=" flex w-32 h-32 flex-shrink-0 items-center">
              <Image
                src="/Ribs.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">Ribs</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$30.00/rack</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2">
            <div className="flex w-32 h-32 flex-shrink-0 items-center">
              <Image
                src="/chicken.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
             <h1 className="text-[20px]">Chicken</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$35.00 - $40.00</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2">
            <div className=" flex w-32 h-32 flex-shrink-0 items-center">
              <Image
                src="/sausagechopped.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
             <h1 className="text-[20px]">Sausage</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$16.00/lbs</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2">
            <div className="flex w-32 h-32 flex-shrink-0 items-center">
              <Image
                src="/cropped-wings.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
             <h1 className="text-[20px]">Wings</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$35.00/30pcs</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2">
            <div className=" flex w-32 h-32 flex-shrink-0 items-center">
              <Image
                src="/ham.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">Whole Ham</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$60.00/each</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2">
            <div className=" flex w-32 h-32 flex-shrink-0 items-center">
              <Image
                src="/wholeturkey.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">Smoked Turkey</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$70.00/each</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2">
            <div className=" flex w-32 h-32 flex-shrink-0 items-center">
              <Image
                src="/friedTurkey.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">Fried Turkey</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$80.00/each</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2">
            <div className=" flex w-32 h-32 flex-shrink-0 items-center">
              <Image
                src="/sandwhiches-wrapped.webp"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-md"
                alt="BBQ"
              />
            </div>
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1 className="text-[20px]">Sandwhiches</h1>
              <div className="flex justify-between items-center flex-col">
                <span className="mb-1 mt-1">$50.00 - $80.00</span>
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
