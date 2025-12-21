"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import arrow_back from "@/src/assets/arrow_back.svg";
import arrow_forward from "@/src/assets/arrow_forward.svg";
import type { EmblaCarouselType } from "embla-carousel";
import styles from "./styles.module.css";
import codeBlock from "@/src/assets/code_blocks_fill.svg";
import finance from "@/src/assets/finance.svg";
import marketing from "@/src/assets/marketing.svg";
import gestao from "@/src/assets/gestao.svg";
import process from "@/src/assets/process.svg";
import consultoria from "@/src/assets/consultoria.svg";
import diagonal from "@/src/assets/diagonal.svg";
import stax from "@/src/assets/stax.svg";
import doubleRight from "@/src/assets/double_right.svg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Badge from "../Badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const MainCarousel = () => {
  const [api, setApi] = React.useState<EmblaCarouselType | undefined>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({
      delay: 300000, //tempo em millisegundos
      stopOnInteraction: true,
    })
  );

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className={`relative h-screen w-full ${styles.backgroundTransparent}`}>
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        className="h-full w-full"
      >
        <CarouselContent className={`h-full`}>
          {/* Slide 1 */}
          <CarouselItem className={`h-screen`}>
            <div className={`${styles.slide}`}>
              <div className="flex h-full w-1/2 items-center justify-center">
                <div className="flex flex-col max-w-xl">
                  <h1 className="font-bold text-white text-5xl">
                    Sua Solução Business{" "}
                    <strong className="text-meu-verde-300">360°</strong> para
                    crescer com estratégia, tecnologia e controle
                  </h1>
                  <Separator className="m-4" />
                  <h3 className="text-2xl">
                    ➥ Unimos consultoria, sistemas, marketing e BPO financeiro
                    para transformar empresas desorganizadas em negócios
                    estruturados, escaláveis e lucrativos.
                  </h3>
                  <div className="flex flex-col mt-8 p-4 gap-4">
                    <Link
                      href={"/"}
                      className="bg-gradient-stax h-11 rounded-3xl p px-8 flex items-center justify-center mr-auto g-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
                    >
                      <Image
                        src={doubleRight}
                        alt="Conhecer a StaxPro"
                        className="h-10 w-10"
                      />
                      <span className="text-black font-bold text-xl">
                        Quero estruturar minha empresa
                      </span>
                    </Link>
                    <Link
                      href={"/"}
                      className="bg-gradient-stax h-11 rounded-3xl p-2 px-8 flex items-center justify-center mr-auto gap-2 hover:px-16 hover:bg-gradient-stax-2 transition-all"
                    >
                      <Image
                        src={stax}
                        alt="Conhecer a StaxPro"
                        className="h-6 w-6"
                      />
                      <span className="text-black font-bold text-xl">
                        Conhecer a StaxPro
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-1/2 items-center justify-center">
                <div className={`${styles.bgImg} relative`}>
                  <button
                    className="p-2 rounded-full absolute bg-gradient-stax hover:cursor-pointer transition"
                    style={{
                      top: -20,
                      right: -20,
                    }}
                  >
                    <Image
                      className="h-10 w-10 hover:h-12 hover:w-12 transition-all"
                      src={diagonal}
                      alt="linking"
                    />
                  </button>
                  <Badge
                    img={codeBlock}
                    title="Programação"
                    top={-20}
                    left={80}
                  />
                  <Badge
                    img={finance}
                    title="BPO Financeiro"
                    top={80}
                    right={-100}
                  />
                  <Badge
                    img={process}
                    title="Processos"
                    bottom={80}
                    right={-60}
                  />
                  <Badge img={gestao} title="Gestão" bottom={-20} right={60} />
                  <Badge
                    img={consultoria}
                    title="Consultoria"
                    bottom={60}
                    left={-80}
                  />
                  <Badge
                    img={marketing}
                    title="Marketing"
                    top={80}
                    left={-40}
                  />
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2 */}
          <CarouselItem className="h-screen">
            <div className={`${styles.slide}`}>
              <h1 className="text-4xl font-bold text-white">2</h1>
            </div>
          </CarouselItem>

          {/* Slide 3 */}
          <CarouselItem className="h-screen">
            <div className={`${styles.slide}`}>
              <h1 className="text-4xl font-bold text-white">3</h1>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Botão Anterior */}
      <button
        onClick={() => api?.scrollPrev()}
        className={`left-4 ${styles.arrowBtn}`}
        aria-label="Slide anterior"
      >
        <Image src={arrow_back} alt="Voltar" className="h-8 w-8" />
      </button>

      {/* Botão Próximo */}
      <button
        onClick={() => api?.scrollNext()}
        className={`right-4 ${styles.arrowBtn}`}
        aria-label="Próximo slide"
      >
        <Image src={arrow_forward} alt="Avançar" className="h-8 w-8" />
      </button>
      {/* Indicadores (bolinhas) */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-3 w-3 rounded-full transition-all",
              current === index
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;
