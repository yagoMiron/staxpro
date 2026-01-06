import Image from "next/image";
import Link from "next/link";
import whatsapp from "@/src/assets/whatsapp.svg";

const FaleConsultorBtn = () => {
  return (
    <Link
      href={"/"}
      className="bg-gradient-stax h-11 rounded-3xl md:px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
    >
      <Image src={whatsapp} alt="Whatsapp" className="h-6 w-6" />
      <span className="text-black font-bold md:text-xl text-base">
        Fale com um Consultor
      </span>
    </Link>
  );
};
export default FaleConsultorBtn;
