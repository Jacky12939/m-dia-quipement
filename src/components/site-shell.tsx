import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADDRESS, HOURS, PHONES, telLink, waLink } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/produits", label: "Boutique" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/sav", label: "Après-vente" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2">
      <span className="grid h-10 w-10 place-items-center rounded-md bg-primary font-display text-lg font-extrabold text-primary-foreground">MK</span>
      <span className="leading-tight">
        <span className="block font-display text-base font-extrabold">MK Multi-Service</span>
        <span className="block text-[11px] text-muted-foreground">Votre satisfaction, notre priorité</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-muted" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex"><a href={telLink(PHONES[0])}><Phone /> {PHONES[0]}</a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t px-4 pb-4 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}
              className="block border-b py-3 font-medium" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">MK Multi-Service</p>
          <p className="mt-2 text-secondary-foreground/70">Canal+, paraboles, informatique, vidéosurveillance et appareils électroniques à Bandjoun.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="flex gap-2"><MapPin className="size-4 shrink-0 text-primary" />{ADDRESS}</p>
          {PHONES.map((p) => <a key={p} href={telLink(p)} className="flex gap-2 hover:text-primary"><Phone className="size-4 text-primary" />{p}</a>)}
        </div>
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2 font-semibold"><Clock className="size-4 text-primary" />Horaires</p>
          {HOURS.map((h) => <p key={h.day} className="flex justify-between gap-4 text-secondary-foreground/70"><span>{h.day}</span><span>{h.time}</span></p>)}
        </div>
      </div>
      <div className="stripe h-2 opacity-80" />
      <p className="py-4 text-center text-xs text-secondary-foreground/60">© {new Date().getFullYear()} MK Multi-Service — Votre satisfaction, notre priorité.</p>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={waLink("Bonjour MK Multi-Service, j'aimerais avoir des informations.")} target="_blank" rel="noreferrer"
      aria-label="Écrire sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:scale-110">
      <MessageCircle className="size-7" />
    </a>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="stripe absolute -right-10 top-0 h-full w-40 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-6xl animate-rise">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/75">{text}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">Besoin d'un technicien ?</h2>
          <p className="mt-2 opacity-90">Appelez-nous ou écrivez-nous sur WhatsApp, nous répondons rapidement.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="secondary"><a href={telLink(PHONES[0])}><Phone /> Appeler</a></Button>
          <Button asChild size="lg" variant="whatsapp"><a href={waLink("Bonjour, je souhaite demander un service.")} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
        </div>
      </div>
    </section>
  );
}
