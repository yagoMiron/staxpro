import Image from "next/image";
import logo from "../../assets/logo.svg";
import slogan from "../../assets/slogan.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-5">
      <Image src={logo} alt="Stax" className="h-16 w-auto" />
      <Image
        src={slogan}
        alt="StaxPro Soluções empresáriais"
        className="h-16 w-auto"
      />
    </div>
  );
};
export default Logo;
