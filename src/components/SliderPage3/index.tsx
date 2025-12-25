import Badge from "../Badge";
import styles from "./styles.module.css";
import filter from "../../assets/filter.svg";
import phone from "../../assets/phone.svg";
import group from "../../assets/group.svg";
import mobile from "../../assets/mobile.svg";
import leaderboard from "../../assets/leaderboard.svg";
import whatsapp from "../../assets/whatsapp_green.svg";
import marketing from "../../assets/marketing.svg";

const SliderPage3 = () => {
  return (
    <>
      <div className="flex h-full w-1/2 items-center justify-center">
        <div className="flex flex-col max-w-xl"></div>
      </div>
      <div className="flex h-full w-1/2 items-center justify-center">
        <div className={`${styles.bgImg} relative`}>
          <Badge img={filter} title="Filtro de vendas" top={0} left={0} />
          <Badge img={mobile} title="CRM no celular" top={"15%"} right={-40} />
          <Badge img={group} title="Equipe de vendas" top={"30%"} left={-80} />

          <Badge
            img={leaderboard}
            title="Análises de relatórios"
            top={"45%"}
            right={-100}
          />
          <Badge img={phone} title="Contact Center" top={"60%"} left={-60} />
          <Badge img={marketing} title="Marketing" top={"75%"} right={0} />
          <Badge
            img={whatsapp}
            title="Integração com o Whatsapp"
            top={"90%"}
            left={0}
          />
        </div>
      </div>
    </>
  );
};
export default SliderPage3;
