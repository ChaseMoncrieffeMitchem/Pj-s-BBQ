import Image from "next/image";
import * as React from "react";

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/items");

    return {
      props: {
        entrees: response.data.type.entree,
        sides: response.data.type.side,
        desserts: response.data.type.desert
      },
    };
  } catch (error) {
    console.error("Error fetching data: ", error);
    return {
      props: {
        items: [],
      },
    };
  }
}

export default function Menu({ entrees, sides, desserts }) {
  console.log(entrees, sides, desserts);

  return (
    <>
    <div className="bg-black">

      <h1 className="flex justify-center pt-[18px] mb-[18px] text-[30px] text-red-500">
        Entrees
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {entrees?.map((entree) => (
          <div className="flex pl-[16px] pr-[16px] mb-[16px]" key={entree.id}>
            <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2 bg-red-500">
              <div className=" flex w-32 h-32 flex-shrink-0 pl-1 pr-1 items-center justify-center">
                <Image
                  src={entree.image}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="rounded-md mr-2"
                  alt={entree.alt}
                />
              </div>
              <div className="bg-white w-[300px] shadow-custom relative flex flex-col justify-center items-center">
                <h1 className="text-[20px]">{entree.name}</h1>
                <div className="flex justify-between items-center flex-col">
                  <span className="mt-1 mb-1">{entree.price}</span>
                  <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="flex justify-center mt-[18px] mb-[18px] text-[30px] text-red-500">
        Sides
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {sides?.map((side) => (
          <div className="flex pl-[16px] pr-[16px] mb-[16px]" key={side.id}>
            <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2 bg-red-500">
              <div className=" flex w-32 h-32 flex-shrink-0 pl-1 pr-1 items-center justify-center">
                <Image
                  src={side.image}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="rounded-md mr-2"
                  alt={side.alt}
                />
              </div>
              <div className="bg-white w-[300px] shadow-custom relative flex flex-col justify-center items-center">
                <h1 className="text-[20px]">{side.name}</h1>
                <div className="flex justify-between items-center flex-col">
                  <span className="mt-1 mb-1">{side.price}</span>
                  <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="flex justify-center mt-[18px] mb-[18px] text-[30px] text-red-500">
        Desserts
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {desserts?.map((dessert) => (
          <div className="flex pl-[16px] pr-[16px] mb-[16px]" key={dessert.id}>
            <div className="text-center transition-all ease-linear duration-400 flex h-full border border-[#bdbdbd] rounded-lg pl-2 ml-2 mr-2 bg-red-500">
              <div className=" flex w-32 h-32 flex-shrink-0 pl-1 pr-1 items-center justify-center">
                <Image
                  src={dessert.image}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="rounded-md mr-2"
                  alt={dessert.alt}
                />
              </div>
              <div className="bg-white w-[300px] shadow-custom relative flex flex-col justify-center items-center">
                <h1 className="text-[20px]">{dessert.name}</h1>
                <div className="flex justify-between items-center flex-col">
                  <span className="mt-1 mb-1">{dessert.price}</span>
                  <button className="bg-red-500 rounded-md pl-1 pr-1 text-white hover:text-black transition-colors duration-250 duration-400 ease-linear">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
