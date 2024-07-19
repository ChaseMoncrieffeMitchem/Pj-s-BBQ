import { Button } from "@mui/material";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className="flex h-[50vh] items-center justify-evenly bg-gray-500">
        <div className="flex">
            <Image src={'/Brisket.webp'} height={100} width={100}/>
            <Image src={'/Sausage.webp'} height={100} width={100}/>
            <Image src={'/Ribs.webp'} height={100} width={100}/>
            <Image src={'/Sandwhich.webp'} height={100} width={100}/>
        </div>
        <div >
            <h1>Welcome to Pj's Smokin' BBQ</h1>
            <p>Lorem</p>
            <p>Lorem</p>
            <Button variant="container" href="/AboutUs-ReadMore">Read More</Button>
        </div>
      </div>
    </>
  );
}
