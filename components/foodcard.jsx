import Image from "next/image";
import * as React from "react";

export default function FoodCard() {
  const cardItems = {
    Image: {
      src: {},
    },
  };
  return (
    <>
      <div className="flex flex-wrap justify-evenly">

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg">
            <div className="flex w-32 h-32 flex-shrink-0 items-center">
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
            <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
              <h1>Brisket</h1>
              <div className="flex justify-between items-center">
                <span className="pr-[18px]">$65.00 - $95.00</span>
                <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
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
            <h1>Ribs</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$30.00/rack</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
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
            <h1>Chicken</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$35.00 - $40.00</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
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
            <h1>Sausage</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$16.00/lbs</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
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
            <h1>Wings</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$35.00/30pcs</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
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
            <h1>Whole Ham</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$60.00</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
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
            <h1>Smoked Turkey</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$70.00/whole</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
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
            <h1>Fried Turkey</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$80.00/whole</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
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
            <h1>Sandwhiches</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$50.00 - $80.00</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className=" flex w-32 h-32 flex-shrink-0 items-center">
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
            <h1>Potato Salad</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$20.00/tray</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className=" flex w-32 h-32 flex-shrink-0 items-center">
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
            <h1>BBQ Beans</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$22.00/tray</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className=" flex w-32 h-32 flex-shrink-0 items-center">
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
            <h1>Green Beans</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$22.00/tray</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className=" flex w-32 h-32 flex-shrink-0 items-center">
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
            <h1>Mac & Cheese</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$25.00/tray</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className=" flex w-32 h-32 flex-shrink-0 items-center">
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
            <h1>Green Salad</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$20.00/tray</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className=" flex w-32 h-32 flex-shrink-0 items-center">
            <Image
              src="/DinnerRolls.webp"
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-md"
              alt="BBQ"
            />
          </div>
          <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
            <h1>Dinner Rolls</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$7.00/12 count</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className=" flex w-32 h-32 flex-shrink-0 items-center">
            <Image
              src="/SweetPie.webp"
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-md"
              alt="BBQ"
            />
          </div>
          <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
            <h1>Sweet Potato Pie</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$15.00/pie</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className=" flex w-32 h-32 flex-shrink-0 items-center">
            <Image
              src="/BananaPuddingCrop.webp"
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-md"
              alt="BBQ"
            />
          </div>
          <div className="bg-white w-[300px] pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
            <h1>Banana Pudding</h1>
            <div className="flex justify-between items-center">
              <span className="pr-[18px]">$30.00/tray</span>
              <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
