import { Separator } from "@/components/ui/separator";
import ExtruturarEmpresaBtn from "../../CTAbtns/EstruturarEmpresaBtn";
import ShapeDivider from "../../ShapeDivider";
import styles from "./styles.module.css";
import Image from "next/image";
import stax from "@/src/assets/stax.svg";
import staxGradient from "@/src/assets/staxGradient.svg";

const SecaoStax = () => {
  return (
    <div className={`w-full min-h-screen bg-gradient-stax`} id="staxPro">
      <div className={`h-full w-full flex flex-col ${styles.background}`}>
        <ShapeDivider imgTag="waves" />
        <div className="flex-1 flex items-center lg:p-8 pt-16 pb-10">
          <div className="flex flex-col min-h-[calc(100vh-160px)] items-center">
            <div className="m-auto flex lg:flex-row flex-col gap-10 w-10/12 h-full">
              <div
                className={`lg:w-1/2 flex flex-col p-6 md:p-10 bg-meu-azul-700 rounded-3xl relative ${styles.drop}`}
              >
                <Image
                  src={staxGradient}
                  alt="staxpro logo"
                  className="h-14 w-14 absolute bg-meu-azul-700 p-3 rounded-full"
                  style={{
                    top: -15,
                    left: -15,
                  }}
                />
                <h2 className="lg:text-4xl text-2xl font-bold text-center">
                  Oque é a StaxPro?
                </h2>
                <Separator className="m-6 ml-0" />
                <div className="text-justify lg:text-lg text-base flex flex-col gap-4 mb-10">
                  <p>
                    A <strong className="text-meu-verde-300">StaxPro</strong> é
                    uma empresa de soluções empresariais que atua de forma
                    estratégica para organizar, estruturar e impulsionar
                    negócios. Unimos{" "}
                    <strong className="text-meu-verde-300">
                      consultoria, tecnologia, processos e gestão
                    </strong>{" "}
                    para transformar empresas que enfrentam dificuldades
                    operacionais em negócios eficientes, organizados e prontos
                    para crescer.
                  </p>
                  <p>
                    Nosso diferencial está na visão{" "}
                    <strong className="text-meu-verde-300">360°</strong>, onde
                    analisamos cada área da empresa — administrativo,
                    financeiro, comercial e marketing — e aplicamos soluções
                    integradas, pensadas sob medida para a realidade de cada
                    cliente.
                  </p>
                  <p>
                    Mais do que prestar serviços, a StaxPro atua como{" "}
                    <strong className="text-meu-verde-300">
                      parceira de crescimento
                    </strong>
                    , acompanhando a evolução da empresa e garantindo que cada
                    decisão seja tomada com base em dados, estratégia e
                    controle.
                  </p>
                </div>
                <div className="m-auto">
                  <ExtruturarEmpresaBtn />
                </div>
              </div>
              <div className="lg:w-1/2 flex">
                <div className="flex w-full items-center justify-center">
                  <div className="flex items-center justify-center w-96 h-96 relative">
                    <div
                      className={`ml-auto mr-auto bg-gradient-stax w-82 h-82 flex items-center justify-center border-meu-azul-800 rounded-full ${styles.float}`}
                    >
                      <Image
                        src={stax}
                        alt="StaxPro"
                        className={`pl-8 w-60 h-60`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShapeDivider imgTag="wavesUpsideDown" />
      </div>
    </div>
  );
};
export default SecaoStax;
