import Image from "next/image";
import ShapeDivider from "../ShapeDivider";
import Link from "next/link";
import stax from "@/src/assets/staxGradient.svg";
import styles from "./styles.module.css";
import { ReactNode } from "react";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
  cta: string;
  imgTag: "layeredLeft" | "layeredRight" | "layeredCenter";
  children: ReactNode;
};

const SolucaoCard = ({
  icon,
  title,
  subtitle,
  cta,
  imgTag,
  children,
}: Props) => {
  return (
    <div className="bg-gradient-stax-3 text-meu-azul-800 rounded-3xl sm:w-sm w-xs relative ml-auto mr-auto flex flex-col justify-between">
      <div className="flex flex-col justify-between h-full">
        <Image
          src={icon}
          alt="finance"
          className="absolute bg-meu-verde-300 rounded-full h-16 w-16 p-1 border-8 border-meu-azul-800"
          style={{
            top: -20,
            left: -20,
          }}
        />
        <div className="p-6 pb-0">
          <h3 className="text-3xl font-bold ml-4">{title}</h3>
          <h4 className="text-xl mb-6 ml-4">{subtitle}</h4>
          {children}
        </div>
        <div className="flex w-full justify-center mb-8 mt-12">
          <Link
            href={"/"}
            className="bg-meu-azul-800 hover:bg-meu-azul-700 h-11 rounded-3xl p-6 hover:p-8 flex items-center justify-center gap-2 transition-all"
          >
            <Image src={stax} alt="Stax Logo" className="h-6 w-6" />
            <span
              className={`font-bold sm:text-base text-sm  ${styles.gradient_text}`}
            >
              {cta}
            </span>
          </Link>
        </div>
      </div>
      <div>
        <ShapeDivider imgTag={imgTag} />
      </div>
    </div>
  );
};
export default SolucaoCard;
