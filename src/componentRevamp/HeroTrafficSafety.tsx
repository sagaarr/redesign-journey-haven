// import React from "react";

// type Props = {
//   alt?: string;
// };

// const HeroTrafficSafety: React.FC<Props> = ({ alt = "Road Safety Mascot" }) => {
//   return (
//     <>
//       {/* bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 */}
//       <section className="relative min-h-screen bg-[#10100e]">
//         <div className="mx-auto min-h-screen max-w-7xl px-6 py-16 lg:py-24">
//           <div className="grid items-center gap-10 lg:grid-cols-2">
//             {/* Mascot (left) */}
//             <div className="mx-auto w-full max-w-md lg:max-w-lg flex items-center justify-center">
//               <img
//                 src="/lovable-uploads/sad_mascot.png"
//                 alt={alt}
//                 className="w-full h-auto drop-shadow-xl object-contain
//                      max-h-[calc(100vh-8rem)] lg:max-h-[calc(100vh-12rem)]"
//                 loading="eager"
//               />
//             </div>

//             {/* Content (right) */}
//             <div className="flex flex-col justify-center text-left text-white">
//               <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
//                 2023–2024
//               </h1>
//               <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
//                 India
//               </h1>
//               <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
//                 Pedestrian Deaths
//               </h1>

//               <p className="mt-6 text-7xl font-extrabold text-red-400">
//                 35,000
//               </p>

//               <p className="mt-3 text-5xl font-extrabold text-red-400">
//                 Doubled from 2016.
//               </p>

//               {/* Source note */}
//               <p className="mt-6 text-xs text-slate-300/70">
//                 Sources: Govt. data, NDTV, Times of India (2023 reports).
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* subtle vignette */}
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
//       </section>
//     </>
//   );
// };

// export default HeroTrafficSafety;

import React from "react";

type Props = {
  alt?: string;
};

const HeroTrafficSafety: React.FC<Props> = ({ alt = "Road Safety Mascot" }) => {
  return (
    <section className="relative min-h-[100svh] bg-[#10100e]">
      <div className="mx-auto min-h-[100svh] max-w-7xl px-4 sm:px-6 lg:px-8 py-[5rem] sm:py-14 lg:py-20">
        <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2">
          {/* Mascot (left) */}
          <div className="mx-auto w-full max-w-md md:max-w-lg flex items-center justify-center order-2 md:order-1">
            {/* Reserve visual space to avoid layout shift on mobile */}
            <div className="w-full aspect-[4/5] xs:aspect-[3/4] sm:aspect-[4/5] md:aspect-[4/5] overflow-visible">
              <img
                src="/lovable-uploads/sad_mascot.png"
                alt={alt}
                className="w-full h-full object-contain drop-shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Content (right) */}
          <div className="flex flex-col justify-center text-center md:text-left text-white items-center md:items-start order-1 md:order-2">
            <h1 className="font-bold leading-tight
                 text-3xl sm:text-4xl lg:text-5xl">
              <span className="block">2023–2024</span>
              <span className="block">India</span>
              <span className="block">Pedestrian Deaths</span>
            </h1>

            <p
              className="mt-5 font-extrabold text-red-500
               text-4xl sm:text-6xl lg:text-7xl
               text-[clamp(2rem,7vw,4.5rem)]"
              aria-label="Thirty five thousand"
            >
              35,000
            </p>

            <p
              className="mt-3 font-extrabold text-red-500
               text-2xl sm:text-3xl lg:text-4xl
               text-[clamp(1.25rem,4.5vw,2.5rem)]"
            >
              Doubled from 2016.
            </p>

            <p className="mt-5 text-xs sm:text-sm text-slate-300/70 max-w-prose">
              Sources: Govt. data, NDTV, Times of India (2023 reports).
            </p>
          </div>
        </div>
      </div>

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
    </section>
  );
};

export default HeroTrafficSafety;
