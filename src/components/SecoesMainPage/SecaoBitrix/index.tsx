import Image from "next/image";
import ShapeDivider from "../../ShapeDivider";
import { Separator } from "@/components/ui/separator";
import relogio from "@/src/assets/bitrixClock.svg";
import styles from "./styles.module.css";
import BitrixLogo from "../../BitrixLogo";
import bronzePartner from "@/src/assets/chevron-bronze.png";
import BitrixBtn from "../../CTAbtns/BitrixBtn";

const SecaoBitrix = () => {
  return (
    <div className={`w-full min-h-screen bg-gradient-bitrix`} id="bitrix">
      <div className={`h-full w-full flex flex-col`}>
        <ShapeDivider imgTag="waves" />
        <div className="flex-1 flex items-center lg:p-8 pt-16 pb-10">
          <div className="flex flex-col min-h-[calc(100vh-160px)] items-center">
            <div className="m-auto flex lg:flex-row flex-col gap-10 w-10/12 h-full">
              <div
                className={`lg:w-1/2 flex flex-col lg:p-10 p-6 bg-sky-100 text-sky-900 rounded-3xl relative ${styles.drop}`}
              >
                <Image
                  src={relogio}
                  alt="staxpro logo"
                  className="h-14 w-14 absolute bg-sky-100 p-1.5 rounded-full"
                  style={{
                    top: -15,
                    left: -15,
                  }}
                />
                <h2 className="lg:text-4xl text-2xl font-bold text-center">
                  Somos parceiros da
                  <BitrixLogo />
                </h2>
                <Separator className="m-6 ml-0 bg-sky-900" />
                <div className="text-justify lg:text-lg text-base flex flex-col gap-4 mb-10 leading-tight">
                  <p>
                    A{" "}
                    <strong className="text-sky-600">
                      StaxPro é Parceira Bronze oficial da Bitrix24
                    </strong>
                    , uma das maiores plataformas de gestão empresarial do
                    mundo. Isso significa que possuímos{" "}
                    <strong className="text-sky-600">
                      certificação, conhecimento técnico e experiência prática
                    </strong>{" "}
                    na implementação, configuração e suporte da ferramenta.
                  </p>
                  <p className="font-bold">
                    Ser parceiro Bronze garante que nossos clientes tenham
                    acesso a:
                  </p>
                  <ul>
                    <li>✔ Implementações feitas da forma correta;</li>
                    <li>✔ Configuração estratégica do CRM e automações;</li>
                    <li>✔ Suporte especializado durante todo o processo;</li>
                    <li>
                      ✔ Soluções alinhadas às boas práticas da plataforma.
                    </li>
                  </ul>
                  <p>
                    Mais do que utilizar o sistema, a StaxPro garante que o{" "}
                    <strong className="text-sky-600">
                      Bitrix24 trabalhe a favor do seu negócio
                    </strong>
                    , organizando processos, vendas, atendimento e gestão em um
                    único lug
                  </p>
                </div>
                <div className="m-auto">
                  <BitrixBtn />
                </div>
              </div>
              <div className="lg:w-1/2 flex">
                <div className="flex w-full items-center justify-center">
                  <div className="flex items-center justify-center w-3/4 relative">
                    <div
                      className={`ml-auto mr-auto flex items-center justify-center border-meu-azul-800 rounded-full ${styles.float}`}
                    >
                      <Image src={bronzePartner} alt="StaxPro" />
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
export default SecaoBitrix;
