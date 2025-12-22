import Badge from "../Badge";
import styles from "./styles.module.css";
import { Separator } from "@/components/ui/separator";
import support from "@/src/assets/support.svg";
import sell from "@/src/assets/sell.svg";
import robot from "@/src/assets/robot.svg";
import integracao from "@/src/assets/automation.svg";
import chat from "@/src/assets/chat.svg";
import processos from "@/src/assets/config.svg";
import Image from "next/image";
import diagonal from "@/src/assets/diagonal.svg";
import stax from "@/src/assets/stax.svg";
import whatsapp from "@/src/assets/whatsapp.svg";
import task from "@/src/assets/order_approve_blue.svg";
import Link from "next/link";

const SliderPage2 = () => {
  return (
    <>
      <div className="flex h-full w-1/2 items-center justify-center">
        <div className="flex flex-col max-w-xl">
          <h1 className="font-bold text-white text-5xl italic">
            {'"'}Não há mais tempo para errar!{'"'}
          </h1>
          <Separator className="m-6 ml-0" />
          <h3 className="text-2xl">
            • Crescer sem estrutura custa caro. A StaxPro organiza sua empresa
            com{" "}
            <strong className="text-meu-verde-300">
              estratégia, tecnologia e gestão inteligente
            </strong>{" "}
            para que cada decisão seja baseada em dados, processos e resultados
            reais.
          </h3>
          <p className="text-2xl mt-2">
            • Chegou a hora de crescer com segurança, controle e visão de
            futuro.
          </p>

          <div className="flex flex-col mt-8 p-4 gap-4">
            <Link
              href={"/"}
              className="bg-gradient-stax h-11 rounded-3xl px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
            >
              <Image src={whatsapp} alt="Whatsapp" className="h-6 w-6" />
              <span className="text-black font-bold text-xl">
                Fale com um Consultor
              </span>
            </Link>
            <Link
              href={"/"}
              className="bg-gradient-stax h-11 rounded-3xl p-2 px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
            >
              <Image src={task} alt="Conhecer a StaxPro" className="h-6 w-6" />
              <span className="text-black font-bold text-xl">
                Conheça nossas soluções
              </span>
            </Link>
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
          <Badge img={support} title="CRM" top={-30} left={80} />
          <Badge img={sell} title="Vendas" top={80} right={-40} />
          <Badge img={integracao} title="Integração" top={"15%"} left={-60} />
          <Badge img={robot} title="A.I." bottom={20} right={-60} />
          <Badge img={chat} title="Chatbot" bottom={"30%"} left={-80} />
          <Badge
            img={processos}
            title="Processos"
            bottom={"50%"}
            right={-100}
          />
          <div className={`${styles.text} bg-white w-full text-black mt-auto`}>
            <Separator className="bg-meu-azul-800 m-auto mb-2 mt-2 w-16 p-0.5 rounded-4xl" />
            <h2 className="text-center p-2 pt-0 text-xl">
              Melhore seu negócio
            </h2>

            <div className={`${styles.desc}`}>
              <p className="text-lg text-justify">
                • Na StaxPro, organizamos processos, estruturamos o financeiro,
                integramos sistemas e potencializamos resultados para que o
                crescimento aconteça de forma sustentável e segura.
              </p>
              <Separator className="bg-meu-azul-800 m-auto mb-2 mt-2 w-2/3 rounded-4xl" />
              <Link
                href={"/"}
                className="bg-gradient-stax h-11 rounded-3xl m-auto my-2 flex items-center justify-center gap-2 hover:px-4 hover:bg-gradient-stax-2 transition-all"
              >
                <Image
                  src={stax}
                  alt="Conhecer a StaxPro"
                  className="h-6 w-6"
                />
                <span className="text-meu-azul-800 font-bold text-lg">
                  Faça sua consulta já
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderPage2;
