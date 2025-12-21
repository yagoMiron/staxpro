import Image from "next/image";
import styles from "./styles.module.css";
type Props = {
  title: string;
  img: string;
  top?: string | number;
  right?: string | number;
  left?: string | number;
  bottom?: string | number;
};

const Badge = ({ title, img, top, right, left, bottom }: Props) => {
  return (
    <div
      className={`flex items-center bg-meu-azul-600 border-2 border-meu-azul-700 rounded-2xl absolute p-2 gap-1 hover:px-6 ${styles.animate}`}
      style={{
        top: top,
        right: right,
        left: left,
        bottom: bottom,
      }}
    >
      <Image src={img} alt={title} className="h-6 w-" />
      <span className="text-meu-verde-300 font-bold">{title}</span>
    </div>
  );
};

export default Badge;
