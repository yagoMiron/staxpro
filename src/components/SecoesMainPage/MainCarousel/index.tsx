"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import arrow_back from "@/src/assets/arrow_back.svg";
import arrow_forward from "@/src/assets/arrow_forward.svg";
import type { EmblaCarouselType } from "embla-carousel";
import styles from "./styles.module.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SliderPage1 from "../../Sliders/SliderPage1";
import SliderPage2 from "../../Sliders/SliderPage2";
import SliderPage3 from "../../Sliders/SliderPage3";

const MainCarousel = () => {
  const [api, setApi] = React.useState<EmblaCarouselType | undefined>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({
      delay: 5000, //tempo em millisegundos
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
    <div
      className={`relative min-h-screen w-full ${styles.backgroundTransparent}`}
    >
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        className="min-h-full w-full"
      >
        <CarouselContent className={`min-h-full`}>
          {/* Slide 1 */}
          <CarouselItem
            className={`min-h-screen w-screen mt-8 md:mt-0 lg:p-20 pt-32 pb-32`}
          >
            <div className={`${styles.slide} ml-auto mr-auto`}>
              <SliderPage1 />
            </div>
          </CarouselItem>

          {/* Slide 2 */}
          <CarouselItem className="h-screen">
            <div className={`${styles.slide} ml-auto mr-auto`}>
              <SliderPage2 />
            </div>
          </CarouselItem>

          {/* Slide 3 */}
          <CarouselItem className="h-screen">
            <div className={`${styles.slide} ml-auto mr-auto`}>
              <SliderPage3 />
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
      <div className="absolute bottom-28 left-1/2 flex -translate-x-1/2 gap-3">
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
