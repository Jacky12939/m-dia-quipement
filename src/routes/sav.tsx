import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ClipboardList, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site-shell";
import { PHONES, telLink, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/sav")({
  head: () => ({ meta: [{ title: "Service après-vente — MK Multi-Service" }, { name: "description", content: "Assistance technique et suivi après achat ou intervention. Signalez un problème par téléphone ou WhatsApp." }, { property: "og:title", content: "Service après-vente — MK Multi-Service" }, { property: "og:description", content: "Assistance technique et suivi après achat ou intervention. Signalez un problème par téléphone ou WhatsApp." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Sav,
});

const STEPS = [
  { icon: ClipboardList, t: "1. Signalez", d: "Décrivez votre problème par téléphone, WhatsApp ou via le formulaire." },
  { icon: Wrench, t: "2. Diagnostic", d: "Un technicien analyse la panne, à distance ou sur place." },
  { icon: ShieldCheck, t: "3. Solution", d: "Réparation, réglage ou remplacement selon votre garantie." },
];

function Sav() {
  return (
    <>
      <PageHero eyebrow="Après-vente" title="On reste à vos côtés après l'achat." text="Une question, une panne, un réglage ? Notre assistance technique vous accompagne." />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => <div key={s.t} className="rounded-lg border bg-card p-6"><s.icon className="size-8 text-primary" /><h3 className="mt-3 text-xl font-bold">{s.t}</h3><p className="mt-1 text-muted-foreground">{s.d}</p></div>)}
        </div>
        <div className="mt-12 rounded-lg bg-secondary p-8 text-secondary-foreground md:p-12">
          <h2 className="text-3xl font-extrabold">Signaler un problème</h2>
          <p className="mt-2 text-secondary-foreground/75">Pour aller plus vite, ayez à portée de main votre numéro de décodeur ou la référence de l'appareil, et une photo du problème si possible.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="whatsapp"><a href={waLink("Bonjour, je souhaite signaler un problème : ")} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
            {PHONES.map((p) => <Button key={p} asChild size="lg" variant="inverse"><a href={telLink(p)}><Phone /> {p}</a></Button>)}
            <Button asChild size="lg"><Link to="/contact" search={{ service: "Service après-vente" }}>Formulaire</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
