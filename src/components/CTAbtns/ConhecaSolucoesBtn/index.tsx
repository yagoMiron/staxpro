import Image from "next/image";
import task from "@/src/assets/order_approve_blue.svg";

const ConhecaSolucoesBtn = () => {
  return (
    <button
      onClick={() => {
        const el = document.getElementById("solucoes");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="bg-gradient-stax cursor-pointer h-11 rounded-3xl p-2 md:px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
    >
      <Image src={task} alt="Conhecer a StaxPro" className="h-6 w-6" />
      <span className="text-black font-bold md:text-xl text-base">
        Conheça nossas soluções
      </span>
    </button>
  );
};
export default ConhecaSolucoesBtn;
