import styles from "../styles.module.css";
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
      <div className={styles.section}>
        <div className={styles.textDiv}>
          <h1 className={styles.title}>
            Sua Solução Business{" "}
            <strong className="text-meu-verde-300">360°</strong> para crescer
            com estratégia, tecnologia e controle
          </h1>
          <Separator className="m-6 ml-2" />
          <h3 className={styles.paragraph}>
            &ensp; Unimos consultoria, sistemas, marketing e BPO financeiro para
            transformar empresas desorganizadas em negócios estruturados,
            escaláveis e lucrativos.
          </h3>
          <div className={styles.btnsDiv}>
            <ConhecaStaxBtn />
            <ExtruturarEmpresaBtn />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.imgDiv}>
          <div className={`${styles.bgImg}`}>
            <button
              className="lg:p-2 p-1 rounded-full absolute bg-gradient-stax hover:cursor-pointer transition"
              style={{
                top: -10,
                right: -10,
              }}
            >
              <Image
                className="lg:h-10 lg:w-10 w-6 h-6 hover:h-12 hover:w-12 transition-all"
                src={diagonal}
                alt="linking"
              />
            </button>
            <Badge img={codeBlock} title="Programação" top={-20} left={60} />
            <Badge img={finance} title="BPO Financeiro" top={80} right={-60} />
            <Badge img={process} title="Processos" bottom={80} right={-60} />
            <Badge img={gestao} title="Gestão" bottom={-20} right={60} />
            <Badge
              img={consultoria}
              title="Consultoria"
              bottom={60}
              left={-40}
            />
            <Badge img={marketing} title="Marketing" top={80} left={-40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderPage1;
