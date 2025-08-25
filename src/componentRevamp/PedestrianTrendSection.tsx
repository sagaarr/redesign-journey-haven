// PedestrianTrendSection.tsx
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

type PeriodDatum = {
  period: string;          // "2016–2017"
  deaths: number;          // pedestrian deaths sum for the period
  injuries: number;        // pedestrian injuries sum for the period
};

type Props = {
  data?: PeriodDatum[];    // optional: pass real data; otherwise we use the demoData below
  className?: string;
};

const numberFmt = (n: number) =>
  n.toLocaleString(undefined, { maximumFractionDigits: 0 });

const demoData: PeriodDatum[] = [
  { period: "2016–2017", deaths: 58000, injuries: 142000 },
  { period: "2018–2019", deaths: 64000, injuries: 153000 },
  { period: "2020–2021", deaths: 61000, injuries: 140000 },
  { period: "2022–2023", deaths: 68000, injuries: 161000 },
  { period: "2024–2025", deaths: 72000, injuries: 168000 }, // replace with provisional/final
];

const PedestrianTrendSection: React.FC<Props> = ({ data = demoData, className }) => {
  return (
    <section
      className={[
        "relative w-full bg-slate-900/90 text-white",
        "px-6 py-12 lg:py-16",
        className ?? "",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl">
        {/* 80 / 20 split on large screens, stacked on small */}
        <div className="grid gap-8 lg:grid-cols-[4fr_1fr]">
          {/* Chart (80%) */}
          <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-4 md:p-6">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Pedestrian Deaths & Injuries</h2>
                <p className="mt-1 text-sm text-slate-300/80">
                  Sum by two-year ranges (2016–2025)
                </p>
              </div>
            </div>

            <div className="h-[360px] md:h-[440px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 8, right: 16, bottom: 8, left: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
                  <XAxis
                    dataKey="period"
                    tick={{ fill: "rgba(255,255,255,0.85)" }}
                    tickMargin={8}
                  />
                  <YAxis
                    tick={{ fill: "rgba(255,255,255,0.85)" }}
                    tickFormatter={numberFmt}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(15,23,42,0.96)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 12,
                    }}
                    formatter={(value: unknown, name) => [numberFmt(value as number), name]}
                  />
                  <Legend
                    wrapperStyle={{ color: "rgba(255,255,255,0.95)" }}
                    iconType="circle"
                  />
                  {/* Stack the two series so the bar shows total height */}
                  <Bar dataKey="injuries" name="Injuries" stackId="sum" />
                  <Bar dataKey="deaths" name="Deaths" stackId="sum" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-3 text-xs text-slate-300/70">
              *Replace demo numbers with official totals for each period. Bars are stacked:
              total height = deaths + injuries.
            </p>
          </div>

          {/* Side panel (20%) */}
          <aside className="rounded-2xl border border-white/10 bg-slate-800/40 p-5 lg:p-6">
            <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
              What next?
            </p>
            <h3 className="mt-3 text-xl font-semibold">Make crossings safer</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200/90">
              <li>Median refuges & raised zebra crossings</li>
              <li>Lower urban speed limits, strict enforcement</li>
              <li>Night visibility: street lighting & reflectors</li>
              <li>Safe school zones & calming near markets</li>
              <li>Public awareness & helmet/seatbelt compliance</li>
            </ul>
            <div className="mt-5">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/20 hover:bg-white/15"
              >
                View full action plan
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PedestrianTrendSection;
