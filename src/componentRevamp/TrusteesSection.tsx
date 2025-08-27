import React from "react";
import { Linkedin, Twitter } from "lucide-react";

export type Trustee = {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    bio?: string;
    linkedin?: string;
    twitter?: string;
};

type TrusteesSectionProps = {
    title?: string;
    subtitle?: string;
    trustees: Trustee[];
    className?: string;
};

const cn = (...cls: Array<string | false | undefined>) => cls.filter(Boolean).join(" ");

export const TrusteesSection: React.FC<TrusteesSectionProps> = ({
    title = "Board of Trustees",
    subtitle = "Guiding UNM Foundation’s mission with experience and integrity.",
    trustees,
    className,
}) => {
    if (!trustees?.length) return null;

    return (
        <section id="trustees" className={cn("w-full bg-[#10100e] py-16 sm:py-20", className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        {title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-300">
                        {subtitle}
                    </p>
                </div>

                {/* Grid */}
                <ul
                    className="
            mt-10 grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
                    aria-label="Trustees"
                >
                    {trustees.map((t) => (
                        <li
                            key={t.id}
                            className="
                group relative overflow-hidden rounded-2xl border border-white/10
                
                transition
              "
                        >
                            {/* Photo */}
                            <div className="p-3">
                                <div className="relative w-full overflow-hidden rounded-xl aspect-[4/5] bg-white/5">

                                    <img
                                        src={t.imageUrl}
                                        alt={`${t.name}, ${t.role}`}
                                        loading="lazy"
                                        className="
                      h-full w-full object-cover
                    "
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-4 pb-4">
                                <h3 className="text-base sm:text-lg font-semibold text-white">
                                    {t.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-300">{t.role}</p>

                                {t.bio && (
                                    <p className="mt-2 line-clamp-3 text-xs text-slate-400">
                                        {t.bio}
                                    </p>
                                )}

                                {/* Socials */}
                                {(t.linkedin || t.twitter) && (
                                    <div className="mt-3 flex items-center gap-3">
                                        {t.linkedin && (
                                            <a
                                                href={t.linkedin}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`${t.name} on LinkedIn`}
                                                className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 hover:text-white  transition"
                                            >
                                                <Linkedin className="h-4 w-4" />
                                            </a>
                                        )}
                                        {t.twitter && (
                                            <a
                                                href={t.twitter}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`${t.name} on X/Twitter`}
                                                className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 hover:text-white  transition"
                                            >
                                                <Twitter className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* subtle top gradient on hover */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-x-0 -top-24 h-24 translate-y-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition group-hover:opacity-100"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
