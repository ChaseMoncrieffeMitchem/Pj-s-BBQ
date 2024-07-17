import Image from "next/image";
import bbq from "../public/bbq1.jpg";
import NavBar from "@/components/navbar";
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <>
      <div className="row">
        <NavBar />
        <AboutUs />
      </div>
    </>
  );
}
