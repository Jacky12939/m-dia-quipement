import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShieldCheck, Zap, MapPin, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site-shell";
import { SERVICES, PRODUCTS, REALISATIONS, waLink } from "@/lib/site-data";
import atelier from "@/assets/atelier.asset.json";
import canal from "@/assets/canal.asset.json";
import appareils from "@/assets/appareils.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "MK Multi-Service — Canal+ et électronique à Bandjoun" }, { name: "description", content: "Abonnements Canal+, installation de paraboles, réparation informatique et vente d'appareils électroniques à Bandjoun." }, { property: "og:title", content: "MK Multi-Service — Canal+ et électronique à Bandjoun" }, { property: "og:description", content: "Abonnements Canal+, installation de paraboles, réparation informatique et vente d'appareils électroniques à Bandjoun." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

const PERKS = [
  { icon: Zap, title: "Intervention rapide", text: "Un technicien disponible chez vous dans les meilleurs délais." },
  { icon: ShieldCheck, title: "Travail garanti", text: "Un service après-vente sérieux après chaque prestation." },
  { icon: ThumbsUp, title: "Prix justes", text: "Des tarifs clairs et adaptés à votre budget." },
  { icon: MapPin, title: "Proximité", text: "Une boutique à Bandjoun, face à la montée de la mairie." },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <img src={atelier.url} alt="Atelier technique de MK Multi-Service" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36">
          <p className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">Bandjoun · Cameroun</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[1.02] md:text-7xl animate-rise">
            Canal+, paraboles &amp; appareils électroniques.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-secondary-foreground/80">MK Multi-Service installe, règle, répare et vend. <span className="font-semibold text-accent">Votre satisfaction, notre priorité.</span></p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/services">Découvrir nos services <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="whatsapp"><a href={waLink("Bonjour MK Multi-Service !")} target="_blank" rel="noreferrer"><MessageCircle /> Contact rapide</a></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-extrabold">Nos services</h2>
          <Link to="/services" className="font-semibold text-primary">Tout voir →</Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 4).map((s) => (
            <div key={s.slug} className="group rounded-lg border bg-card p-6 transition hover:-translate-y-1 hover:border-primary">
              <s.icon className="size-9 text-primary" />
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <img src={canal.url} alt="Chaînes Canal+" className="rounded-lg bg-card shadow-sm" />
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Distributeur Canal+</p>
            <h2 className="mt-2 text-4xl font-extrabold">Tout Canal+ au même endroit</h2>
            <p className="mt-4 text-muted-foreground">Cinéma, sport, séries, family : nous vendons les décodeurs, gérons vos abonnements et réabonnements, et réglons votre installation pour une image parfaite.</p>
            <Button asChild className="mt-6"><a href={waLink("Bonjour, je souhaite un abonnement Canal+.")} target="_blank" rel="noreferrer">Demander un abonnement</a></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Boutique</p>
          <h2 className="mt-2 text-4xl font-extrabold">Appareils électroniques et informatiques</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {PRODUCTS.slice(3, 9).map((p) => <li key={p.id} className="rounded-md border bg-card px-3 py-2 text-sm font-medium">{p.name}</li>)}
          </ul>
          <Button asChild className="mt-6"><Link to="/produits">Voir la boutique <ArrowRight /></Link></Button>
        </div>
        <img src={appareils.url} alt="Appareils électroniques en vente" className="order-1 mx-auto max-h-[520px] rounded-lg object-contain md:order-2" />
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((p) => (
            <div key={p.title}><p.icon className="size-8 text-primary" /><h3 className="mt-3 text-lg font-bold">{p.title}</h3><p className="mt-1 text-sm text-secondary-foreground/70">{p.text}</p></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-4xl font-extrabold">Quelques réalisations</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {REALISATIONS.filter((_, i) => i % 2 === 0).map((r) => (
            <div key={r.title} className="rounded-lg border-l-4 border-primary bg-card p-6 shadow-sm">
              <p className="text-xs font-bold uppercase text-primary">{r.category}</p>
              <h3 className="mt-2 font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
