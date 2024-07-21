import { Button } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

  return (
    <>
      {/* <div>
        <Slider {...settings}>
          <div>
            <Image src={"/Brisket.webp"} height={300} width={300} />
          </div>
          <div>
            <Image src={"/Sausage.webp"} height={300} width={300} />
          </div>
          <div>
            <Image src={"/Ribs.webp"} height={300} width={300} />
          </div>
          <div>
            <Image src={"/Sandwhich.webp"} height={300} width={300} />
          </div>
        </Slider>
      </div> */}
    </>
  );
}
