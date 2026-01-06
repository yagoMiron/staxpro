import Image from "next/image";
import relogio from "@/src/assets/schedule.svg";
import styles from "../styles.module.css";

const ConhecaBitrixBtn = () => {
  return (
    <button
      onClick={() => {
        const el = document.getElementById("bitrix");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`bg-gradient-stax hover:bg-gradient-stax-2 ${styles.btn}`}
    >
      <Image src={relogio} alt="Conhecer a Bitrix24" className={styles.icon} />
      <span className={styles.text}>Conheça a Bitrix24</span>
    </button>
  );
};
export default ConhecaBitrixBtn;
