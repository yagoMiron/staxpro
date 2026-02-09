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
          <Separator className={styles.separator} />
          <h3 className={styles.paragraph}>
            &ensp; Unimos consultoria, sistemas, marketing e BPO financeiro para
            transformar empresas desorganizadas em negócios estruturados,
            escaláveis e lucrativos.
          </h3>
          <div className={styles.btnsDiv}>
            <div className="mr-auto">
              <ConhecaStaxBtn />
            </div>
            <div className="mr-auto">
              <ExtruturarEmpresaBtn />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.imgDiv}>
          <div className={`${styles.bgImg} ${styles.bgSlide1}`}>
            <button className={`${styles.linking} bg-gradient-stax`}>
              <Image src={diagonal} alt="linking" />
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
