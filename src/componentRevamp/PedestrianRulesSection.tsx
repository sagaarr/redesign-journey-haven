// import { Globe } from "lucide-react";
// import React from "react";


// const PedestrianRulesSection:React.FC= () => {
//     return (
//         // shadow-sm p-6 sm:p-8 md:p-10 from-slate-900 via-slate-800 to-slate-900
//         <section
//             className={
//                 "w-full min-h-[calc(100vh-64px)]  bg-[#10100e]"}
//         >
//             <div className="mx-auto max-w-7xl grid h-full gap-8 md:gap-12 md:grid-cols-12 items-center">
//                 {/* Left: Content */}
//                 <div className="space-y-6 md:col-span-7 ">

//                     <div className="space-y-4 text-white text-base leading-relaxed">
//                         <div className="flex flex-row items-center gap-3">
//                             <Globe />
//                             <p className="text-3xl">International rule for pedestrians:</p>
//                         </div>

//                         <p className="text-5xl font-bold">Walk on the footpath or facing to traffic.</p>
//                     </div>

//                     <div className="space-y-4 text-white text-base leading-relaxed">
//                         <p className="text-3xl">Rule for India:</p>
//                         <p className="text-5xl font-bold">Walk on the footpath, or walk on the right side of the road. </p>
//                         <p>(Indian Rule for Pedestrians 1989)</p>
//                     </div>
//                 </div>

//                 {/* Right: Image */}
//                 <div className="md:col-span-5 h-full flex items-center justify-center">
//                     <img
//                         src="/lovable-uploads/indian_rule_visual.png"
//                         alt="pointing left mascot image"
//                         className="
//           object-contain w-auto
//           max-h-[calc(100vh-64px-2rem)]     /* base: p-6 => 3rem total vertical padding */
//           sm:max-h-[calc(100vh-64px-3rem)]  /* sm: p-8 => 4rem */
//           md:max-h-[calc(100vh-64px-1rem)]  /* md+: p-10 => 5rem */
//         "
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default PedestrianRulesSection


// import { Globe } from "lucide-react";
// import React from "react";

// const PedestrianRulesSection: React.FC = () => {
//     return (
//         <section className="w-full min-h-[calc(100vh-64px)] bg-[#10100e]">
//             <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
//                 <div className="grid h-full gap-8 md:gap-12 md:grid-cols-12 items-center">
//                     {/* Right: Image (shown first on mobile) */}
//                     <div className="md:col-span-5 h-full flex items-center justify-center order-1 md:order-2">
//                         <img
//                             src="/lovable-uploads/walk_facing_traffic.jpg"
//                             alt="pointing left mascot image"
//                             className="
//                 object-contain w-auto
//                 max-h-[calc(100vh-64px-2rem)]     
//                 sm:max-h-[calc(100vh-64px-3rem)]  
//                 md:max-h-[calc(100vh-64px-1rem)]  
//               "
//                             loading="lazy"
//                         />
//                     </div>

//                     {/* Left: Content (center-aligned on mobile) */}
//                     <div className="space-y-6 md:col-span-7 order-2 md:order-1 text-center md:text-left">
//                         <div className="space-y-4 text-white text-base leading-relaxed">
//                             <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
//                                 <Globe />
//                                 <p className="text-3xl">International rule for pedestrians</p>
//                             </div>
//                             <p className="text-5xl font-bold">
//                                 Walk on the footpath or facing to traffic.
//                             </p>
//                         </div>

//                         <div className="space-y-4 text-white text-base leading-relaxed">
//                             <p className="text-3xl">Rule for India</p>
//                             <p className="text-5xl font-bold">
//                                 Walk on the footpath, or walk on the right side of the road.
//                             </p>
//                             <p>(Indian Rule for Pedestrians 1989)</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PedestrianRulesSection;


import { Globe, ShieldCheck } from "lucide-react";
import React from "react";

const Chip = ({
    children,
    className = "",
}: { children: React.ReactNode; className?: string }) => (
    <span
        className={
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset " +
            className
        }
    >
        {children}
    </span>
);

const Card = ({
    children,
    className = "",
}: { children: React.ReactNode; className?: string }) => (
    <div
        className={
            "relative rounded-2xl p-5 sm:p-6 shadow-lg border " + className
        }
    >
        {children}
    </div>
);

const PedestrianRulesSection: React.FC = () => {
    return (
        <section className="w-full min-h-[calc(100vh-64px)] bg-[#10100e]">
            <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
                <div className="grid h-full gap-8 md:gap-12 md:grid-cols-12 items-center">
                    {/* Image first on mobile */}
                    <div className="md:col-span-5 h-full flex items-center justify-center order-1 md:order-2">
                        <img
                            src="/lovable-uploads/walk_facing_traffic.jpg"
                            alt="Walk facing oncoming traffic"
                            className="
                object-contain w-auto
                max-h-[calc(100vh-64px-24rem)]
                sm:max-h-[calc(100vh-64px-3rem)]
                md:max-h-[calc(100vh-64px-4rem)]
              "
                            loading="lazy"
                        />
                    </div>

                    {/* Content (centered on mobile) */}
                    <div className="space-y-6 md:col-span-7 order-2 md:order-1 text-center md:text-left">
                        {/* International */}
                        <Card className="border-blue-600/40 bg-gradient-to-br from-blue-900/30 to-blue-800/20">
                            <div className="flex flex-col items-center md:items-start gap-3">
                                <Chip className="bg-blue-500/15 text-blue-200 ring-blue-400/30">
                                    <Globe className="h-4 w-4" />
                                    <span className="uppercase tracking-wide">Global</span>
                                    <span aria-hidden>•</span>
                                    <span className="font-normal">International rule</span>
                                </Chip>

                                <h2 className="text-white/90 text-2xl sm:text-3xl font-semibold">
                                    Walk on the footpath, or facing oncoming traffic.
                                </h2>
                            </div>


                        </Card>

                        {/* India */}
                        <Card className="border-emerald-600/40 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20">
                            <div className="flex flex-col items-center md:items-start gap-3">
                                <Chip className="bg-emerald-500/15 text-emerald-200 ring-emerald-400/30">
                                    <span className="text-base leading-none">🇮🇳</span>
                                    <span className="uppercase tracking-wide">India</span>
                                    <span aria-hidden>•</span>
                                    <span className="font-normal">Pedestrian rule</span>
                                </Chip>

                                <h3 className="text-white/90 text-2xl sm:text-3xl font-semibold">
                                    Walk on the footpath, or on the <span className="underline decoration-emerald-400/70 underline-offset-4">right side</span> of the road.
                                </h3>
                            </div>

                            <p className="mt-3 text-sm text-emerald-100/80 flex items-center gap-2 justify-center md:justify-start">
                                <ShieldCheck className="h-4 w-4 opacity-80" />
                                (Indian Rule for Pedestrians, 1989)
                            </p>
                        </Card>

                        {/* Tiny legend to reinforce the distinction */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                            <Chip className="bg-blue-500/10 text-blue-200 ring-blue-400/30">
                                🌍 International
                            </Chip>
                            <Chip className="bg-emerald-500/10 text-emerald-200 ring-emerald-400/30">
                                🇮🇳 India-specific
                            </Chip>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PedestrianRulesSection;
