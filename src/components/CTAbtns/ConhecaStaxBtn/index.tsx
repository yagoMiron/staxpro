import Image from "next/image";
import stax from "@/src/assets/stax.svg";
import styles from "../styles.module.css";

const ConhecaStaxBtn = () => {
  return (
    <button
      onClick={() => {
        const el = document.getElementById("staxPro");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`bg-gradient-stax hover:bg-gradient-stax-2 ${styles.btn}`}
    >
      <Image src={stax} alt="Conhecer a StaxPro" className={styles.icon} />
      <span className={styles.text}>Conhecer a StaxPro</span>
    </button>
  );
};

export default ConhecaStaxBtn;
