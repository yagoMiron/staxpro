import Badge from "../../Badge";
import styles from "../styles.module.css";
import { Separator } from "@/components/ui/separator";
import support from "@/src/assets/support.svg";
import sell from "@/src/assets/sell.svg";
import robot from "@/src/assets/robot.svg";
import integracao from "@/src/assets/automation.svg";
import chat from "@/src/assets/chat.svg";
import processos from "@/src/assets/config.svg";
import Image from "next/image";
import diagonal from "@/src/assets/diagonal.svg";
import FaleConsultorBtn from "../../CTAbtns/FaleConsultorBtn";
import ConhecaSolucoesBtn from "../../CTAbtns/ConhecaSolucoesBtn";
import ConhecaStaxBtn from "../../CTAbtns/ConhecaStaxBtn";

const SliderPage2 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.textDiv}>
          <h1 className={styles.title}>
            {'"'}Não há mais tempo para errar!{'"'}
          </h1>
          <Separator className={styles.separator} />
          <h3 className={styles.paragraph}>
            &ensp; Crescer sem estrutura custa caro. A StaxPro organiza sua
            empresa com{" "}
            <strong className="text-meu-verde-300">
              estratégia, tecnologia e gestão inteligente
            </strong>{" "}
            para que cada decisão seja baseada em dados, processos e resultados
            reais.
          </h3>
          <p className={styles.paragraph}>
            &ensp; Chegou a hora de crescer com segurança, controle e visão de
            futuro.
          </p>

          <div className={styles.btnsDiv}>
            <div className="mr-auto">
              <ConhecaSolucoesBtn />
            </div>
            <div className="mr-auto">
              <FaleConsultorBtn />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.imgDiv}>
          <div className={`${styles.bgImg} ${styles.bgSlide2}`}>
            <button className={`${styles.linking} bg-gradient-stax`}>
              <Image src={diagonal} alt="linking" />
            </button>
            <Badge img={support} title="CRM" top={-30} left={80} />
            <Badge img={sell} title="Vendas" top={80} right={-40} />
            <Badge img={integracao} title="Integração" top={"15%"} left={-60} />
            <Badge img={robot} title="IA" bottom={20} right={-60} />
            <Badge img={chat} title="Chatbot" bottom={"30%"} left={-80} />
            <Badge
              img={processos}
              title="Processos"
              bottom={"50%"}
              right={-100}
            />
            <div
              className={`${styles.text} bg-white w-full text-black mt-auto`}
            >
              <Separator className="bg-meu-azul-800 m-auto mb-2 mt-2 w-16 p-0.5 rounded-4xl" />
              <h2 className="text-center lg:p-2 p-1 pt-0 lg:text-xl text-base">
                Melhore seu negócio
              </h2>

              <div className={`${styles.desc}`}>
                <p className="text-xs lg:text-base text-justify">
                  • Na StaxPro, organizamos processos, estruturamos o
                  financeiro, integramos sistemas e potencializamos resultados
                  para que o crescimento aconteça de forma sustentável e segura.
                </p>
                <Separator className="bg-meu-azul-800 m-auto mb-2 mt-2 w-2/3 rounded-4xl" />
                <div className="w-full flex justify-center">
                  <ConhecaStaxBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderPage2;
