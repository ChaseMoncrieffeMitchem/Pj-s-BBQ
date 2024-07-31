import Image from "next/image";

export default function HeroArea() {
  return (
    <>
      <div className="hidden md:block">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Slide 1 */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] kensburns-effect"
            style={{ transition: "transform 5s ease-out" }}
          >
            
          </div>
        </div>
      </div>
    </>
  );
}
