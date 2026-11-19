import { describe, it, expect } from "vitest";
import { filterProducts } from "@/routes/produits";
import { PRODUCTS } from "@/lib/site-data";
describe("recherche boutique", () => {
  it("filtre par catégorie", () => {
    expect(filterProducts(PRODUCTS, "", "Vidéosurveillance").every((p) => p.category === "Vidéosurveillance")).toBe(true);
  });
  it("recherche par nom", () => {
    expect(filterProducts(PRODUCTS, "décodeur", "Tout").map((p) => p.id)).toContain("decodeur-canal");
  });
});
