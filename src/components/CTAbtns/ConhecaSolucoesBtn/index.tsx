import Image from "next/image";
import task from "@/src/assets/order_approve_blue.svg";
import styles from "../styles.module.css";

const ConhecaSolucoesBtn = () => {
  return (
    <button
      onClick={() => {
        const el = document.getElementById("solucoes");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`bg-gradient-stax hover:bg-gradient-stax-2 ${styles.btn}`}
    >
      <Image src={task} alt="Conhecer a StaxPro" className={styles.icon} />
      <span className={styles.text}>Conheça nossas soluções</span>
    </button>
  );
};
export default ConhecaSolucoesBtn;
