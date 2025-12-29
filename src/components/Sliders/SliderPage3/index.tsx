import Badge from "../../Badge";
import styles from "./styles.module.css";
import filter from "@/src/assets/filter.svg";
import phone from "@/src/assets/phone.svg";
import group from "@/src/assets/group.svg";
import mobile from "@/src/assets/mobile.svg";
import robot from "@/src/assets/robot.svg";
import leaderboard from "@/src/assets/leaderboard.svg";
import whatsapp from "@/src/assets/whatsapp_green.svg";
import marketing from "@/src/assets/marketing.svg";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import chevronBronze from "@/src/assets/chevron-bronze.png";
import bitrixLogo from "@/src/assets/bitrix24logo.svg";
import relogio from "@/src/assets/schedule.svg";
import whatsappBtn from "@/src/assets/whatsapp.svg";

const SliderPage3 = () => {
  return (
    <>
      <div className="flex h-full w-1/2 items-center justify-center">
        <div className="flex flex-col max-w-xl">
          <h1 className="font-bold text-white text-5xl flex gap-2 items-end">
            Conheça o{" "}
            <Image src={bitrixLogo} alt="Bitrix24" className="h-10 w-52 m-1" />{" "}
          </h1>
          <Separator className="m-6 ml-0" />
          <h3 className="text-2xl">
            &ensp; O Bitrix24 é uma das plataformas mais completas do mercado
            para gestão empresarial, reunindo CRM, automações, funil de vendas,
            atendimento, tarefas e comunicação em um único sistema.
          </h3>
          <p className="text-2xl mt-2">
            &ensp; A StaxPro é{" "}
            <strong className="text-meu-verde-300">
              Parceira Bronze Bitrix24,
            </strong>{" "}
            o que garante implementação profissional, configuração estratégica e
            suporte especializado para que sua empresa utilize todo o potencial
            da ferramenta.
          </p>

          <div className="flex flex-col mt-8 p-4 gap-4">
            <Link
              href={"/"}
              className="bg-gradient-stax h-11 rounded-3xl p-2 px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
            >
              <Image
                src={relogio}
                alt="Conhecer a Bitrix24"
                className="h-6 w-6"
              />
              <span className="text-black font-bold text-xl">
                Quero conhecer a Bitrix24
              </span>
            </Link>
            <Link
              href={"/"}
              className="bg-gradient-stax h-11 rounded-3xl px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
            >
              <Image src={whatsappBtn} alt="Fale conosco" className="h-6 w-6" />
              <span className="text-black font-bold text-xl">
                Fale com um especialista
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-full w-1/2 items-center justify-center">
        <div className={`${styles.bgImg} relative`}>
          <Badge img={filter} title="Filtro de vendas" top={"10%"} left={-60} />
          <Badge img={mobile} title="CRM no celular" top={"10%"} right={-60} />
          <Badge img={group} title="Equipe de vendas" top={"30%"} left={-60} />

          <Badge
            img={leaderboard}
            title="Análises de relatórios"
            top={"30%"}
            right={-60}
          />
          <Badge img={phone} title="Contact Center" top={"50%"} left={-60} />
          <Badge img={marketing} title="Marketing" top={"50%"} right={-60} />
          <Badge
            img={whatsapp}
            title="Integração com o Whatsapp"
            top={"70%"}
            left={-60}
          />
          <Badge img={robot} title="IA no CRM" top={"70%"} right={-60} />
          <button
            className="p-2 absolute hover:cursor-pointer"
            style={{
              bottom: -60,
              left: 170,
            }}
          >
            <Image
              className="h-29 w-50 transition-all"
              src={chevronBronze}
              alt="linking"
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default SliderPage3;
