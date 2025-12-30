import Link from "next/link";
import relogio from "@/src/assets/bitrixClock_white.svg";
import Image from "next/image";

const BitrixBtn = () => {
  return (
    <Link
      href={"/"}
      className="bg-sky-500 hover:bg-sky-700 h-11 rounded-3xl p-2 px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 transition-all"
    >
      <Image src={relogio} alt="Conhecer a Bitrix24" className="h-6 w-6" />
      <span className="text-sky-100 font-bold text-xl">
        Quero a Bitrix24 na minha empresa
      </span>
    </Link>
  );
};
export default BitrixBtn;
