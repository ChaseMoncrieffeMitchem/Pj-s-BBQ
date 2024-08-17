import { Button } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {
  return (
    <>
      <div className="bg-black h-full">
        <div className="flex"> 
          <div>
            <Image src={"/pjPhoto.webp"} height={500} width={500} />
          </div>
          <div className="max-w-[500px] text-center m-auto">
            <h1 className="text-white pb-2">Our Promise</h1>
            <p className="text-white">
              We are a family owned & operated food service offering Texas
              smoked meats. Originated by James Herndon, aka PJ. He grew up in
              Kemp, TX and has always had a heart for serving others. After
              retiring from driving trucks for over 40 years he perfected his
              craft in the art of Texas-style smoked meats. He's built a
              thriving business from scratch and he's proud to offer great
              tasting, high quality smoked meat. From our family to yours, we
              put lots of love and careful attention in each item. We hope you
              enjoy our work as much as we enjoy bringing it to you! We look
              forward to serving you. Questions or want something you don't see
              on this site? Call us: <span className="text-[#982a1c]">469.626.8764</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
