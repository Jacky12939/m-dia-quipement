import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, CtaBand } from "@/components/site-shell";
import { REALISATIONS } from "@/lib/site-data";
import atelier from "@/assets/atelier.asset.json";
import canal from "@/assets/canal.asset.json";
import appareils from "@/assets/appareils.asset.json";

export const Route = createFileRoute("/realisations")({
  head: () => ({ meta: [{ title: "Nos réalisations — MK Multi-Service" }, { name: "description", content: "Installations satellitaires, interventions informatiques et vidéosurveillance réalisées par MK Multi-Service." }, { property: "og:title", content: "Nos réalisations — MK Multi-Service" }, { property: "og:description", content: "Installations satellitaires, interventions informatiques et vidéosurveillance réalisées par MK Multi-Service." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Works,
});

const IMG: Record<string, string> = { Satellite: canal.url, Informatique: atelier.url, Vidéosurveillance: appareils.url };

function Works() {
  const [cat, setCat] = useState("Tout");
  const cats = ["Tout", "Satellite", "Informatique", "Vidéosurveillance"];
  return (
    <>
      <PageHero eyebrow="Réalisations" title="Nos travaux parlent pour nous." text="Un aperçu des installations et interventions réalisées pour nos clients." />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 text-sm font-medium ${cat === c ? "border-primary bg-primary text-primary-foreground" : "bg-card"}`}>{c}</button>)}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REALISATIONS.filter((r) => cat === "Tout" || r.category === cat).map((r) => (
            <figure key={r.title} className="overflow-hidden rounded-lg border bg-card">
              <img src={IMG[r.category]} alt={r.title} className="h-52 w-full object-cover" loading="lazy" />
              <figcaption className="p-5"><p className="text-xs font-bold uppercase text-primary">{r.category}</p><h3 className="mt-1 font-bold">{r.title}</h3><p className="mt-1 text-sm text-muted-foreground">{r.text}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
