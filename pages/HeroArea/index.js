import Image from "next/image";

export default function HeroArea() {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      <Image
        src="/bbq1.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        layout="fill"
        alt="BBQ Image"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to PJ's BBQ</h1>
        <h2 className="text-2xl">We offer the best food around</h2>
      </div>
    </div>
  );
}
