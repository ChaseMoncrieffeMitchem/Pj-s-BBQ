import Image from "next/image";
import bbq from "../public/bbq1.jpg";
import NavBar from "@/components/navbar";
import AboutUs from "./AboutUs";
import HeroArea from "./HeroArea";
import Menu from "./Menu";

export default function Home() {
  return (
    <>
      <div className="row">
        <NavBar />
        <HeroArea />
        <Menu />
        <AboutUs />
      </div>
    </>
  );
}
