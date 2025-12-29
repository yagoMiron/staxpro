import { Separator } from "@/components/ui/separator";
import ExtruturarEmpresaBtn from "../../CTAbtns/EstruturarEmpresaBtn";
import ShapeDivider from "../../ShapeDivider";

const SecaoStax = () => {
  return (
    <div className="w-full bg-meu-azul-600 h-screen flex flex-col">
      <ShapeDivider imgTag="waves" />
      <div className="flex-1 flex items-center">
        <div className="flex flex-col items-center">
          <div className="m-auto flex w-10/12 h-full">
            <div className="w-1/2 flex flex-col p-10 bg-meu-azul-700 rounded-3xl">
              <h2 className="text-4xl font-bold">Oque é a StaxPro?</h2>
              <Separator className="m-6 ml-0" />
              <div className="text-justify text-lg flex flex-col gap-4 mb-10">
                <p>
                  A <strong className="text-meu-verde-300">StaxPro</strong> é
                  uma empresa de soluções empresariais que atua de forma
                  estratégica para organizar, estruturar e impulsionar negócios.
                  Unimos{" "}
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
                  analisamos cada área da empresa — administrativo, financeiro,
                  comercial e marketing — e aplicamos soluções integradas,
                  pensadas sob medida para a realidade de cada cliente.
                </p>
                <p>
                  Mais do que prestar serviços, a StaxPro atua como{" "}
                  <strong className="text-meu-verde-300">
                    parceira de crescimento
                  </strong>
                  , acompanhando a evolução da empresa e garantindo que cada
                  decisão seja tomada com base em dados, estratégia e controle.
                </p>
              </div>
              <ExtruturarEmpresaBtn />
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
      <ShapeDivider imgTag="wavesUpsideDown" />
    </div>
  );
};
export default SecaoStax;
