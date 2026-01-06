import Image from "next/image";
import Link from "next/link";
import whatsapp from "@/src/assets/whatsapp.svg";
import styles from "../styles.module.css";

const FaleConsultorBtn = () => {
  return (
    <Link
      href={"/"}
      className={`bg-gradient-stax hover:bg-gradient-stax-2 ${styles.btn}`}
    >
      <Image src={whatsapp} alt="Whatsapp" className={styles.icon} />
      <span className={styles.text}>Fale com um Consultor</span>
    </Link>
  );
};
export default FaleConsultorBtn;
