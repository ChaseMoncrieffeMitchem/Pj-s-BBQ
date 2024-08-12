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
      <div className="flex justify-evenly flex-wrap items-center">
        
        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="flex w-32 h-32 flex-shrink-0 items-center">
            <Image
              src="/BrisketPic.webp"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
              className="rounded-md aspect-w-1S"
              alt="Brisket"
            />
          </div>
          <div className="bg-white pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
            <h1>Brisket</h1>
            <h2>Blah Blah Blah Brisket is good</h2>
            <span className="pr-[18px]">
              $40.00 <button>Order Now</button>
            </span>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className=" flex w-32 h-32 flex-shrink-0 items-center">
            <Image
              src="/bbq1.jpg"
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-md"
              alt="BBQ"
            />
          </div>
          <div className="bg-white pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
            <h1>BBQ</h1>
            <h2>Blah Blah Blah BBQ is good</h2>
            <span className="pr-[18px]">
              $40.00 <button>Order Now</button>
            </span>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className="flex w-32 h-32 flex-shrink-0 items-center">
            <Image
              src="/Sandwhich.webp"
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-md"
              alt="BBQ"
            />
          </div>
          <div className="bg-white pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
            <h1>BBQ</h1>
            <h2>Blah Blah Blah BBQ is good</h2>
            <span className="pr-[18px]">
              $40.00 <button>Order Now</button>
            </span>
          </div>
        </div>

        <div className="flex pl-[16px] pr-[16px] mb-[16px]">
          <div className=" flex w-32 h-32 flex-shrink-0 items-center">
            <Image
              src="/Sausage.webp"
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-md"
              alt="BBQ"
            />
          </div>
          <div className="bg-white pl-[75px] pr-[10px] pb-[30px] pt-[10px] shadow-custom relative flex flex-col justify-center">
            <h1>BBQ</h1>
            <h2>Blah Blah Blah BBQ is good</h2>
            <span className="pr-[18px]">
              $40.00 <button>Order Now</button>
            </span>
          </div>
        </div>

      </div>
    </>
  );
}
