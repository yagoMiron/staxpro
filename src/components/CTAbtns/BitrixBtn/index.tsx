import Link from "next/link";
import relogio from "@/src/assets/bitrixClock_white.svg";
import Image from "next/image";
import styles from "../styles.module.css";

const BitrixBtn = () => {
  return (
    <Link href={"/"} className={`bg-sky-500 hover:bg-sky-700 ${styles.btn}`}>
      <Image src={relogio} alt="Conhecer a Bitrix24" className={styles.icon} />
      <span className={styles.textBitrix}>
        Quero a Bitrix24 na minha empresa
      </span>
    </Link>
  );
};
export default BitrixBtn;
