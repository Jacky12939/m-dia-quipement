import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, CtaBand } from "@/components/site-shell";
import { SERVICES, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Nos services — MK Multi-Service" }, { name: "description", content: "Installation et réglage de paraboles, décodeurs Canal+, réparation informatique, vidéosurveillance et SAV." }, { property: "og:title", content: "Nos services — MK Multi-Service" }, { property: "og:description", content: "Installation et réglage de paraboles, décodeurs Canal+, réparation informatique, vidéosurveillance et SAV." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Nos services" title="Des prestations complètes, du toit à l'ordinateur." text="Sept services pour votre télévision, votre informatique et votre sécurité." />
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-20">
        {SERVICES.map((s, i) => (
          <article key={s.slug} className="grid gap-6 rounded-lg border bg-card p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
            <div className="flex items-center gap-4">
              <span className="font-display text-4xl font-extrabold text-primary/30">{String(i + 1).padStart(2, "0")}</span>
              <span className="grid size-14 place-items-center rounded-md bg-secondary text-primary"><s.icon className="size-7" /></span>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold">{s.title}</h2>
              <p className="mt-1 text-muted-foreground">{s.short}</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">{s.details.map((d) => <li key={d} className="flex items-center gap-1"><Check className="size-4 text-primary" />{d}</li>)}</ul>
            </div>
            <div className="flex flex-wrap gap-2 md:flex-col">
              <Button asChild><Link to="/contact" search={{ service: s.title }}>Demander ce service</Link></Button>
              <Button asChild variant="whatsapp"><a href={waLink(`Bonjour, je souhaite le service : ${s.title}`)} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
            </div>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
