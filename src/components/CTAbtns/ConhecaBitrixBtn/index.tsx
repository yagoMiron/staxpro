import Image from "next/image";
import Link from "next/link";
import relogio from "@/src/assets/schedule.svg";

const ConhecaBitrixBtn = () => {
  return (
    <Link
      href={"/"}
      className="bg-gradient-stax h-11 rounded-3xl p-2 px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
    >
      <Image src={relogio} alt="Conhecer a Bitrix24" className="h-6 w-6" />
      <span className="text-black font-bold text-xl">
        Quero conhecer a Bitrix24
      </span>
    </Link>
  );
};
export default ConhecaBitrixBtn;
