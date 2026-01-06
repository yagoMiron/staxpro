import Image from "next/image";
import Link from "next/link";
import doubleRight from "@/src/assets/double_right.svg";
import styles from "../styles.module.css";

const ExtruturarEmpresaBtn = () => {
  return (
    <Link
      href={"/"}
      className={`bg-gradient-stax hover:bg-gradient-stax-2 ${styles.btn}`}
    >
      <Image
        src={doubleRight}
        alt="Conhecer a StaxPro"
        className={styles.icon}
      />
      <span className={styles.text}>Quero estruturar minha empresa</span>
    </Link>
  );
};
export default ExtruturarEmpresaBtn;
