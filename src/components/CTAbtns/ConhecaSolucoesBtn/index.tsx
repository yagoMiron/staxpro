import Image from "next/image";
import Link from "next/link";
import task from "@/src/assets/order_approve_blue.svg";

const ConhecaSolucoesBtn = () => {
  return (
    <Link
      href={"/"}
      className="bg-gradient-stax h-11 rounded-3xl p-2 px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
    >
      <Image src={task} alt="Conhecer a StaxPro" className="h-6 w-6" />
      <span className="text-black font-bold text-xl">
        Conheça nossas soluções
      </span>
    </Link>
  );
};
export default ConhecaSolucoesBtn;
