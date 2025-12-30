import Image from "next/image";
import stax from "@/src/assets/stax.svg";

const ConhecaStaxBtn = () => {
  return (
    <button
      onClick={() => {
        const el = document.getElementById("staxPro");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="cursor-pointer bg-gradient-stax h-11 rounded-3xl p-2 px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
    >
      <Image src={stax} alt="Conhecer a StaxPro" className="h-6 w-6" />
      <span className="text-black font-bold text-xl">Conhecer a StaxPro</span>
    </button>
  );
};

export default ConhecaStaxBtn;
