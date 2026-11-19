import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site-shell";
import { ADDRESS, HOURS, PHONES, SERVICES, telLink, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { service?: string | undefined } => ({ service: typeof s["service"] === "string" ? s["service"] : undefined }),
  head: () => ({ meta: [{ title: "Contact — MK Multi-Service" }, { name: "description", content: "Appelez le 691 491 998 ou le 671 346 506, ou passez à notre boutique à Bandjoun." }, { property: "og:title", content: "Contact — MK Multi-Service" }, { property: "og:description", content: "Appelez le 691 491 998 ou le 671 346 506, ou passez à notre boutique à Bandjoun." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Contact,
});

function Contact() {
  const { service } = Route.useSearch();
  const [f, setF] = useState({ name: "", phone: "", service: service ?? "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour MK Multi-Service,\nNom : ${f.name}\nTéléphone : ${f.phone}\nService : ${f.service || "—"}\n\n${f.message}`;
    window.open(waLink(text), "_blank");
  };
  return (
    <>
      <PageHero eyebrow="Contact" title="Parlons de votre besoin." text="Demandez un devis, une information ou une intervention." />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold"><Phone className="size-5 text-primary" />Téléphone</h2>
            {PHONES.map((p) => <a key={p} href={telLink(p)} className="mt-2 block font-display text-2xl font-extrabold hover:text-primary">{p}</a>)}
            <Button asChild variant="whatsapp" className="mt-4"><a href={waLink("Bonjour !")} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold"><MapPin className="size-5 text-primary" />Adresse</h2>
            <p className="mt-2 text-muted-foreground">{ADDRESS}</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold"><Clock className="size-5 text-primary" />Horaires</h2>
            {HOURS.map((h) => <p key={h.day} className="mt-2 flex justify-between text-muted-foreground"><span>{h.day}</span><span className="font-semibold text-foreground">{h.time}</span></p>)}
          </div>
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-lg border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-extrabold">Formulaire de contact</h2>
          <Input required placeholder="Votre nom" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className="h-11" />
          <Input required type="tel" placeholder="Votre téléphone" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} className="h-11" />
          <select value={f.service} onChange={(e) => setF({ ...f, service: e.target.value })} className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm">
            <option value="">Choisir un service (facultatif)</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Achat de produit">Achat de produit</option>
          </select>
          <Textarea required rows={6} placeholder="Votre message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
          <Button type="submit" size="lg" className="w-full"><Send /> Envoyer via WhatsApp</Button>
        </form>
      </section>
    </>
  );
}
