import Clinics from "@/components/Clinics/Clinics";
import EmirmedSlider from "@/components/emirmedSlider/EmirmedSlider";
import Hero from "@/components/hero/Hero";
import Link from "next/link";

const Clinics1 = () => {
  return (
    <div>
      <EmirmedSlider />
      <div style={{ background: "white" }} className="pt-[30px] pb-[10px]">
        <div className="container">
          <div className="flex gap-[35px]">
            <Link
              className="text-[18px] font-normal hover:text-[#FF6200]"
              href={"/clinics"}
            >
              Врачи
            </Link>
            <Link
              className="text-[18px] font-normal hover:text-[#FF6200]"
              href={"/clinics/about"}
            >
              О клинике
            </Link>
          </div>
        </div>
      </div>
      <Clinics />
    </div>
  );
};

export default Clinics1;
