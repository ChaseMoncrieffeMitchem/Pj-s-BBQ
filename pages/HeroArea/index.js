import Image from "next/image";

export default function HeroArea() {
  return (
    <>
    <div className="hidden flex">

    </div>
      <div className="hidden md:block">
        <div
          className="relative overflow-hidden w-[58px] h-[58px] leading-[58px] p-0"
          style={{ width: "100%", height: "100%", margin: "0 auto" }}
        >
          {/* Slide 1 */}
          <div
            className="bg-cover bg-center transition-transform duration-[5000ms] kensburns-effect"
            style={{ transition: "transform 5s ease-out" }}
          >
            <div style={{ height: "100vh", position: "relative", width: "100%"}}>
              <Image
                layout="fill"
                objectFit="cover"
                src={"/bbq1.jpg"}
                className="whitespace-nowrap mr-0 mb-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
