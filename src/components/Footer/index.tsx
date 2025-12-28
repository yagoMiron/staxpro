import call from "../../assets/call.svg";
import mail from "../../assets/mail.svg";
import local from "../../assets/location.svg";
import styles from "./styles.module.css";
import Image from "next/image";
import Logo from "../Logo";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={`${styles.waves} bg-meu-azul-800`}>
      <div className="w-full">
        <div className="flex items-center justify-between px-12">
          <Logo />
          <div className="flex justify-center gap-4">
            <div
              className={`flex items-center bg-meu-azul-600 rounded-2xl p-2 gap-1 hover:px-6 ${styles.animate}`}
            >
              <Image src={mail} alt={"email"} className="h-6 w-6" />
              <span className="text-meu-verde-300 font-bold">
                ola@staxpro.com.br
              </span>
            </div>
            <div
              className={`flex items-center bg-meu-azul-600 rounded-2xl p-2 gap-1 hover:px-6 ${styles.animate}`}
            >
              <Image src={call} alt={"telefone"} className="h-6 w-6" />
              <span className="text-meu-verde-300 font-bold">
                +55 11 3090-6711
              </span>
            </div>
            <div
              className={`flex items-center bg-meu-azul-600 rounded-2xl p-2 gap-1 hover:px-6 ${styles.animate}`}
            >
              <Image src={local} alt={"location"} className="h-6 w-6" />
              <span className="text-meu-verde-300 font-bold">
                Campo Grande, MS
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-4 px-14 mt-2 text-blue-300">
          <div className="flex gap-2 items-center">
            <Link href={"https://www.instagram.com/staxpro_consult/"}>
              <Image
                src={instagram}
                alt="instagram"
                className="w-8 h-8 bg-meu-verde-300 hover:bg-meu-azul-600 rounded-full p-1"
              />
            </Link>
            <Link href={"https://www.facebook.com/staxprocrm"}>
              <Image
                src={facebook}
                alt="facebook"
                className="w-8 h-8 bg-meu-verde-300 hover:bg-meu-azul-600 rounded-full p-1"
              />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/company/106361120/admin/dashboard/"
              }
            >
              <Image
                src={linkedin}
                alt="linkedin"
                className="w-8 h-8 bg-meu-verde-300 hover:bg-meu-azul-600 rounded-full p-1"
              />
            </Link>
          </div>
          <p>StaxPro® 2025. Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
