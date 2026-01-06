import Image from "next/image";
import relogio from "@/src/assets/schedule.svg";

const ConhecaBitrixBtn = () => {
  return (
    <button
      onClick={() => {
        const el = document.getElementById("bitrix");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="bg-gradient-stax cursor-pointer h-11 rounded-3xl p-2 px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
    >
      <Image src={relogio} alt="Conhecer a Bitrix24" className="h-6 w-6" />
      <span className="text-black font-bold md:text-xl text-base">
        Conheça a Bitrix24
      </span>
    </button>
  );
};
export default ConhecaBitrixBtn;
