import MainCarousel from "@/src/components/SecoesMainPage/MainCarousel";
import SecaoStax from "@/src/components/SecoesMainPage/SecaoStax";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-meu-azul-800">
      <MainCarousel />
      <SecaoStax />
    </div>
  );
}
