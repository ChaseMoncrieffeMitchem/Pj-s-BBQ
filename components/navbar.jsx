import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <header className="relative z-40">
        <div className="transition duration-400 ease-in-out">
          <div className="border-b border-customGray">
            <div className="max-w-[1244px] pl-[12px] pr-[12px]">
              <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                  <div className="pt-3 pb-3">
                    <Link href={"/"}>
                      <Image src={"/Logo.png"} height={100} width={100} />
                    </Link>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <nav className="hidden lg:inline-block">
                    <ul className="flex">
                      <li className="mt-[15px] mb-[15px]">
                        <Link className="pl-[31.5px] pr-31.5px block font-medium text-base uppercase text-white hover:text-red-400 transition-colors duration-300 ease-in-out" href={"/"}>Home</Link>
                      </li>
                      <li className="mt-[15px] mb-[15px]">
                        <Link className="pl-[31.5px] pr-31.5px block font-medium text-base uppercase text-white hover:text-red-400 transition-colors duration-300 ease-in-out" href={"/menu"}>Menu</Link>
                      </li>
                      <li className="mt-[15px] mb-[15px]">
                        <Link className="pl-[31.5px] pr-31.5px block font-medium text-base uppercase text-white hover:text-red-400 transition-colors duration-300 ease-in-out" href={"/about"}>About</Link>
                      </li>
                      <li className="mt-[15px] mb-[15px]">
                        <Link className="pl-[31.5px] pr-31.5px block font-medium text-base uppercase text-white hover:text-red-400 transition-colors duration-300 ease-in-out" href={"/catering-events"}>Catering/Events</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="flex-shrink-0">
                    <div className="h-full flex items-center gap-[25px]">
                        <Link href={"/orders"} className="relative z-20 overflow-hidden align-middle inline-block border-none uppercase text-center text-sm font-medium leading-none py-[21px] px-[35px] rounded-md transition-colors duration-250 duration-400 ease-linear bg-red-500 text-white hover:bg-white hover:text-gray-700">Order Online</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
