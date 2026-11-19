import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MessageCircle, Package, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/site-shell";
import { CATEGORIES, PRODUCTS, waLink, type Product } from "@/lib/site-data";
import appareils from "@/assets/appareils.asset.json";

export const Route = createFileRoute("/produits")({
  head: () => ({ meta: [{ title: "Boutique — MK Multi-Service" }, { name: "description", content: "Ordinateurs, accessoires, pièces, décodeurs Canal+, caméras et appareils électroniques à Bandjoun." }, { property: "og:title", content: "Boutique — MK Multi-Service" }, { property: "og:description", content: "Ordinateurs, accessoires, pièces, décodeurs Canal+, caméras et appareils électroniques à Bandjoun." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Shop,
});

export function filterProducts(list: Product[], q: string, cat: string) {
  const s = q.trim().toLowerCase();
  return list.filter((p) => (cat === "Tout" || p.category === cat) && (!s || (p.name + " " + p.description).toLowerCase().includes(s)));
}

function Shop() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Tout");
  const [sel, setSel] = useState<Product | null>(null);
  const list = useMemo(() => filterProducts(PRODUCTS, q, cat), [q, cat]);
  return (
    <>
      <PageHero eyebrow="Boutique" title="Appareils électriques et électroniques." text="Consultez notre catalogue et demandez un prix ou commandez directement sur WhatsApp." />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher un produit…" className="h-11 pl-9" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Tout", ...CATEGORIES].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${cat === c ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.id} className="flex flex-col rounded-lg border bg-card p-5">
              <div className="grid h-36 place-items-center rounded-md bg-muted"><Package className="size-12 text-primary" /></div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-primary">{p.category}</p>
              <h3 className="mt-1 text-lg font-bold">{p.name}</h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-semibold">{p.price ?? "Prix sur demande"}</span>
                {p.available && <span className="rounded-full bg-whatsapp/15 px-2 py-0.5 text-xs font-semibold text-whatsapp">En stock</span>}
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setSel(p)}>Détails</Button>
                <Button asChild variant="whatsapp" className="flex-1"><a href={waLink(`Bonjour, je voudrais le prix de : ${p.name}`)} target="_blank" rel="noreferrer"><MessageCircle /> Commander</a></Button>
              </div>
            </article>
          ))}
        </div>
        {list.length === 0 && <p className="mt-10 text-center text-muted-foreground">Aucun produit trouvé. Écrivez-nous, nous l'avons peut-être !</p>}
      </section>
      {sel && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-secondary/70 p-4" onClick={() => setSel(null)}>
          <div className="relative w-full max-w-lg rounded-lg bg-card p-6" onClick={(e) => e.stopPropagation()}>
            <button className="absolute right-3 top-3" aria-label="Fermer" onClick={() => setSel(null)}><X /></button>
            <img src={appareils.url} alt="" className="h-40 w-full rounded-md object-cover" />
            <p className="mt-4 text-xs font-bold uppercase text-primary">{sel.category}</p>
            <h2 className="text-2xl font-extrabold">{sel.name}</h2>
            <p className="mt-2 text-muted-foreground">{sel.description}</p>
            <p className="mt-3 text-sm"><b>Prix :</b> {sel.price ?? "sur demande"} · <b>Disponibilité :</b> {sel.available ? "en stock" : "à confirmer"}</p>
            <Button asChild variant="whatsapp" className="mt-5 w-full"><a href={waLink(`Bonjour, je suis intéressé(e) par : ${sel.name}`)} target="_blank" rel="noreferrer"><MessageCircle /> Demander le prix sur WhatsApp</a></Button>
          </div>
        </div>
      )}
    </>
  );
}
