import styles from "./styles.module.css";
import codeBlock from "@/src/assets/code_blocks_fill.svg";
import finance from "@/src/assets/finance.svg";
import marketing from "@/src/assets/marketing.svg";
import gestao from "@/src/assets/gestao.svg";
import process from "@/src/assets/process.svg";
import consultoria from "@/src/assets/consultoria.svg";
import diagonal from "@/src/assets/diagonal.svg";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Badge from "../../Badge";
import ExtruturarEmpresaBtn from "../../CTAbtns/EstruturarEmpresaBtn";
import ConhecaStaxBtn from "../../CTAbtns/ConhecaStaxBtn";

const SliderPage1 = () => {
  return (
    <>
      <div className="flex h-full w-1/2 items-center justify-center">
        <div className="flex flex-col max-w-xl">
          <h1 className="font-bold text-white text-5xl">
            Sua Solução Business{" "}
            <strong className="text-meu-verde-300">360°</strong> para crescer
            com estratégia, tecnologia e controle
          </h1>
          <Separator className="m-6 ml-0" />
          <h3 className="text-2xl">
            &ensp; Unimos consultoria, sistemas, marketing e BPO financeiro para
            transformar empresas desorganizadas em negócios estruturados,
            escaláveis e lucrativos.
          </h3>
          <div className="flex flex-col mt-8 p-4 gap-4">
            <ConhecaStaxBtn />
            <ExtruturarEmpresaBtn />
          </div>
        </div>
      </div>
      <div className="flex h-full w-1/2 items-center justify-center">
        <div className={`${styles.bgImg} relative`}>
          <button
            className="p-2 rounded-full absolute bg-gradient-stax hover:cursor-pointer transition"
            style={{
              top: -20,
              right: -20,
            }}
          >
            <Image
              className="h-10 w-10 hover:h-12 hover:w-12 transition-all"
              src={diagonal}
              alt="linking"
            />
          </button>
          <Badge img={codeBlock} title="Programação" top={-20} left={80} />
          <Badge img={finance} title="BPO Financeiro" top={80} right={-100} />
          <Badge img={process} title="Processos" bottom={80} right={-60} />
          <Badge img={gestao} title="Gestão" bottom={-20} right={60} />
          <Badge img={consultoria} title="Consultoria" bottom={60} left={-80} />
          <Badge img={marketing} title="Marketing" top={80} left={-40} />
        </div>
      </div>
    </>
  );
};

export default SliderPage1;
