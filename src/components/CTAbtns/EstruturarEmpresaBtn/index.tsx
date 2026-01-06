import Image from "next/image";
import Link from "next/link";
import doubleRight from "@/src/assets/double_right.svg";

const ExtruturarEmpresaBtn = () => {
  return (
    <Link
      href={"/"}
      className="bg-gradient-stax h-11 rounded-3xl md:px-8 px-4 flex items-center justify-center mr-auto hover:px-16 hover:bg-gradient-stax-2 transition-all"
    >
      <Image src={doubleRight} alt="Conhecer a StaxPro" className="h-8 w-8" />
      <span className="text-black font-bold md:text-xl text-base">
        Quero estruturar minha empresa
      </span>
    </Link>
  );
};
export default ExtruturarEmpresaBtn;
