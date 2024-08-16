import Image from "next/image";
import bbq from "../public/bbq1.jpg";
import NavBar from "@/components/navbar";
import AboutUs from "./AboutUs";
import HeroArea from "./HeroArea";
import Menu from "./Menu";
import entrees from "@/assets/entrees";
import sides from "@/assets/sides";
import desserts from "@/assets/desserts";

export default function Home() {
  return (
    <>
      <div className="row">
        <NavBar />
        <HeroArea />
        <Menu entrees={entrees} sides={sides} desserts={desserts}/>
        <AboutUs />
      </div>
    </>
  );
}
