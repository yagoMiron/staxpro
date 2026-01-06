import Badge from "../../Badge";
import styles from "../styles.module.css";
import filter from "@/src/assets/filter.svg";
import phone from "@/src/assets/phone.svg";
import group from "@/src/assets/group.svg";
import mobile from "@/src/assets/mobile.svg";
import robot from "@/src/assets/robot.svg";
import leaderboard from "@/src/assets/leaderboard.svg";
import whatsapp from "@/src/assets/whatsapp_green.svg";
import marketing from "@/src/assets/marketing.svg";
import { Separator } from "@/components/ui/separator";
import ConhecaBitrixBtn from "../../CTAbtns/ConhecaBitrixBtn";
import FaleConsultorBtn from "../../CTAbtns/FaleConsultorBtn";
import BitrixLogo from "../../BitrixLogo";

const SliderPage3 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.textDiv}>
          <h1 className={styles.title}>
            Conheça o <BitrixLogo />
          </h1>
          <Separator className={styles.separator} />
          <h3 className={styles.paragraph}>
            &ensp; O Bitrix24 é uma das plataformas mais completas do mercado
            para gestão empresarial, reunindo CRM, automações, funil de vendas,
            atendimento, tarefas e comunicação em um único sistema.
          </h3>
          <p className={styles.paragraph}>
            &ensp; A StaxPro é{" "}
            <strong className="text-sky-400">Parceira Bronze Bitrix24,</strong>{" "}
            o que garante implementação profissional, configuração estratégica e
            suporte especializado para que sua empresa utilize todo o potencial
            da ferramenta.
          </p>

          <div className={styles.btnsDiv}>
            <ConhecaBitrixBtn />
            <FaleConsultorBtn />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.imgDiv}>
          <div className={`${styles.bgImg} ${styles.bgSlide3}`}>
            <Badge
              img={filter}
              title="Filtro de vendas"
              top={"10%"}
              left={-60}
            />
            <Badge
              img={mobile}
              title="CRM no celular"
              top={"10%"}
              right={-60}
            />
            <Badge
              img={group}
              title="Equipe de vendas"
              top={"30%"}
              left={-60}
            />

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
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderPage3;
