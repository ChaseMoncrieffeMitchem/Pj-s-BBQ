import Desserts from "@/components/desserts";
import Entrees from "@/components/entrees";
import Sides from "@/components/sides";

export default function Menu() {
  return (
    <>
      <h1 className="flex justify-center mt-[18px] mb-[18px] text-[30px]">
        Entrees
      </h1>
      <Entrees />
      <h1 className="flex justify-center mt-[18px] mb-[18px] text-[30px] ">
        Sides
      </h1>
      <Sides />
      <h1 className="flex justify-center mt-[18px] mb-[18px] text-[30px] ">
        Desserts
      </h1>
      <Desserts />
    </>
  );
}
