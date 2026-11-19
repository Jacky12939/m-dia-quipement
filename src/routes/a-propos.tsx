import { createFileRoute } from "@tanstack/react-router";
import { Heart, Target, Award, Handshake } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site-shell";
import atelier from "@/assets/atelier.asset.json";

export const Route = createFileRoute("/a-propos")({
  head: () => ({ meta: [{ title: "À propos — MK Multi-Service" }, { name: "description", content: "Découvrez MK Multi-Service, votre partenaire Canal+, informatique et électronique à Bandjoun." }, { property: "og:title", content: "À propos — MK Multi-Service" }, { property: "og:description", content: "Découvrez MK Multi-Service, votre partenaire Canal+, informatique et électronique à Bandjoun." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: About,
});

const VALUES = [
  { icon: Heart, t: "Satisfaction client", d: "Chaque client repart avec une solution qui fonctionne." },
  { icon: Award, t: "Expertise", d: "Des techniciens formés au satellite, à l'informatique et à la sécurité." },
  { icon: Handshake, t: "Honnêteté", d: "Des conseils sincères et des prix transparents." },
  { icon: Target, t: "Réactivité", d: "Nous intervenons vite, parce que votre temps compte." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="À propos" title="Une entreprise locale, plusieurs savoir-faire." text="MK Multi-Service accompagne les particuliers et les entreprises de Bandjoun pour la télévision, l'informatique et la sécurité." />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <img src={atelier.url} alt="Atelier de réparation" className="rounded-lg shadow-sm" />
        <div className="space-y-5 text-muted-foreground">
          <h2 className="text-3xl font-extrabold text-foreground">Notre mission</h2>
          <p>Rendre la technologie simple et accessible : regarder ses chaînes préférées sans coupure, travailler sur un ordinateur qui fonctionne, protéger sa maison ou son commerce.</p>
          <p>Nous installons et réglons les paraboles, distribuons les équipements et abonnements Canal+, réparons les ordinateurs, posons des caméras de vidéosurveillance et vendons du matériel informatique et électronique.</p>
          <p className="font-semibold text-foreground">Notre engagement : votre satisfaction, notre priorité.</p>
        </div>
      </section>
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl font-extrabold">Nos valeurs</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => <div key={v.t} className="rounded-lg bg-card p-6"><v.icon className="size-8 text-primary" /><h3 className="mt-3 font-bold">{v.t}</h3><p className="mt-1 text-sm text-muted-foreground">{v.d}</p></div>)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
