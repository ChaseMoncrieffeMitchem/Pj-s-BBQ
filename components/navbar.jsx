import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <div className="relative h-[50vh] bg-blue-400 w-full">
        <div className="background-image"></div>

        <div className="absolute left-0 bottom-[350px] w-full h-[150px] flex items-center justify-between text-white z-10 text-[20px]">
          <Image src={"/Logo.png"} width={100} height={100} className="ml-4 mt-4"/>
          <ul className="flex gap-6 items-center justify-evenly pr-8">
            <li className="relative">
              <Link
                href={"/"}
                className="after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-0 after:bottom-[-2px] after:right-0 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                href={"/about"}
                className="after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-0 after:bottom-[-2px] after:right-0 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-in-out"
              >
                About
              </Link>
            </li>
            <li className="relative">
              <Link
                href={"/menu"}
                className="after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-0 after:bottom-[-2px] after:right-0 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-in-out"
              >
                Menu
              </Link>
            </li>
            <Button variant="contained" href="orders">
              Order Now
            </Button>
          </ul>
        </div>

        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full pl-8 pr-8">
          <div className="w-[60%]">
            <h1 className="text-white text-4xl">Pj's Smokin' BBQ</h1>
            <p className="pt-2 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ipsa, repellat deleniti nihil blanditiis cumque labore alias
              incidunt ea ut illum corrupti fugit tenetur at et, explicabo
              corporis placeat excepturi.
            </p>
            <Button variant="contained" href="orders">
              Order Now
            </Button>
          </div>
          <div className="w-[40%] flex items-center justify-center">
            <Image src={"/bbq1.jpg"} width={200} height={200} />
          </div>
        </div>
      </div>
    </>
  );
}
