import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselApi,
} from "@/components/ui/carousel";

// Small helper so each slide can swap sources by viewport
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

const slides = [
    {
        id: 1,
        alt: "pointing left mascot image",
        desktopSrc: "/lovable-uploads/slider/1.png",
        mobileSrc: "/lovable-uploads/slider/mobile/1.png",
    },
    {
        id: 2,
        alt: "pointing left mascot image",
        desktopSrc: "/lovable-uploads/slider/2.png",
        mobileSrc: "/lovable-uploads/slider/mobile/2.png",
    },
    {
        id: 3,
        alt: "pointing left mascot image",
        desktopSrc: "/lovable-uploads/slider/3.png",
        mobileSrc: "/lovable-uploads/slider/mobile/3.png",
    },
    {
        id: 4,
        alt: "pointing left mascot image",
        desktopSrc: "/lovable-uploads/slider/4.png",
        mobileSrc: "/lovable-uploads/slider/mobile/4.png",
    },
];

const SaftySlider: React.FC = () => {

    const [api, setApi] = React.useState<CarouselApi | null>(null);
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;
        // Set initial state and subscribe to changes
        const update = () => setCurrent(api.selectedScrollSnap());
        update();
        api.on("select", update);
        api.on("reInit", update);
        return () => {
            api.off("select", update);
            api.off("reInit", update);
        };
    }, [api]);

    const active = slides[current] ?? slides[0];
    return (
        // min-h-[calc(100vh-64px)]
        <section className="w-full min-h[calc(100svh-64px)] md:min-h-[calc(100vh-64px)]   flex bg-[#10100e] text-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full p-4 h-full">
                <Carousel opts={{ loop: true, align: 'start' }} className="w-full h-full" setApi={setApi}>
                    <CarouselContent className="h-full">
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
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2" />
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
        </section>
    );
};

export default SaftySlider;
