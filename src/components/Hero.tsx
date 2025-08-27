import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

// Helper so each slide can swap sources by viewport
const SlideImage: React.FC<{
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}> = ({ desktopSrc, mobileSrc, alt }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <picture>
        {/* Mobile first */}
        <source media="(max-width: 767px)" srcSet={mobileSrc} />
        {/* Fallback: tablet/desktop */}
        <img
          src={desktopSrc}
          alt={alt}
          className="
         
            object-contain w-auto
            max-h-[calc(100vh-64px-2rem)]
            sm:max-h-[calc(100vh-64px-3rem)]
            md:max-h-[calc(100vh-64px-1rem)]
          "
          loading="lazy"
        />
      </picture>
    </div>
  );
};

type Slide = {
  id: number;
  alt: string;
  desktopSrc: string;
  mobileSrc: string;
  title: string;
  message: string;
};

const slides: Slide[] = [
  {
    id: 1,
    alt: "pointing left mascot image",
    desktopSrc: "/lovable-uploads/hero_slider/test/childrenwalk.jpg",
    mobileSrc: "/lovable-uploads/hero_slider/mobile/childrenwalk.jpg",
    title: "Children Saftey",
    message:
      "While walking on the road or footpath, ensure that children walk on your right-hand side.",
  },
  {
    id: 2,
    alt: "pointing left mascot image",
    desktopSrc: "/lovable-uploads/hero_slider/test/chain_snatching.jpg",
    mobileSrc: "/lovable-uploads/hero_slider/mobile/chain_snatching.jpg",
    title: "Women's Safety",
    message:
      "Keep bags on the inner side of the footpath and stay alert at crowded junctions.",
  },
  {
    id: 3,
    alt: "pointing left mascot image",
    desktopSrc: "/lovable-uploads/hero_slider/test/mobilewalkboy.jpg",
    mobileSrc: "/lovable-uploads/hero_slider/mobile/mobilewalkboy.jpg",
    title: "Use Zebra Crossing",
    message:
      "While crossing the road, stay focused on the traffic—avoid using mobile phones.",
  },
  {
    id: 5,
    alt: "pointing left mascot image",
    desktopSrc: "/lovable-uploads/hero_slider/test/jogging.webp",
    mobileSrc: "/lovable-uploads/hero_slider/mobile/jogging.png",
    title: "jogger's Safety",
    message:
      "At night, prefer light/reflective clothing and stay in well-lit areas.",
  },
];

const Hero: React.FC = () => {
  // const [api, setApi] = React.useState<CarouselApi | null>(null);
  // const [current, setCurrent] = React.useState(0);

  // React.useEffect(() => {
  //   if (!api) return;
  //   // Set initial state and subscribe to changes
  //   const update = () => setCurrent(api.selectedScrollSnap());
  //   update();
  //   api.on("select", update);
  //   api.on("reInit", update);
  //   return () => {
  //     api.off("select", update);
  //     api.off("reInit", update);
  //   };
  // }, [api]);

  // const active = slides[current] ?? slides[0];

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);

  // Handle active slide updates
  React.useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  // ✅ Autoplay every 5 seconds
  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // change to 3000 for 3s, 8000 for 8s, etc.

    return () => clearInterval(interval); // cleanup
  }, [api]);

  const active = slides[current] ?? slides[0];

  return (
    // <section className="w-full min-h-[calc(100vh-64px)] bg-[#10100e] text-white rounded-xl overflow-hidden">
    <section className="w-full bg-[#10100e] text-white rounded-xl overflow-hidden">

      {/* <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] md:min-h-[calc(100vh-64px)]"> */}
      <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr]">
        {/* LEFT: Slider (70%) */}
        <div className="relative order-1 md:order-1">
          <div className="w-full  p-4">
            <Carousel opts={{ loop: true, align: 'start' }} className="w-full" setApi={setApi}>
              <CarouselContent className="md:h-full h-[570px]">
                {slides.map((s) => (
                  <CarouselItem key={s.id} className="h-full">
                    <SlideImage
                      desktopSrc={s.desktopSrc}
                      mobileSrc={s.mobileSrc}
                      alt={s.alt}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Controls */}
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2" />

              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => api?.scrollTo(i)}
                    className={[
                      "h-2 w-2 rounded-full transition-opacity",
                      current === i ? "opacity-100 bg-white" : "opacity-40 bg-white",
                    ].join(" ")}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>

        {/* RIGHT: Synced text (30%) */}
        <aside className="order-2 md:order-2 ">
          <div className="w-full p-6 sm:p-8 md:p-10 flex flex-col justify-start md:h-full md:justify-center">
            <div className="mb-3 text-xs uppercase tracking-widest text-white/60">
              Slide {current + 1} / {slides.length}
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
              {active.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/90" aria-live="polite">
              {active.message}
            </p>

            {/* Optional CTA per slide (uncomment & add to slides if needed) */}
            {/* {active.cta && (
              <button className="mt-6 inline-flex items-center justify-center rounded-2xl px-4 py-2 bg-white/10 hover:bg-white/20 transition">
                {active.cta}
              </button>
            )} */}

            {/* Optional manual nav */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => api?.scrollPrev()}
                className="rounded-full px-3 py-2 bg-white/10 hover:bg-white/20"
              >
                Prev
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="rounded-full px-3 py-2 bg-white/10 hover:bg-white/20"
              >
                Next
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
