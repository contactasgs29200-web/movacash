/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@electric-sql/pglite", "pdfkit"],
  outputFileTracingIncludes: { "/api/**/*": ["./fonts/**/*"], "/**/*": ["./node_modules/@electric-sql/pglite/dist/*.wasm", "./node_modules/@electric-sql/pglite/dist/*.data"] },
  // Anciens guides centrés sur Etsy (Etsy refuse les e-books écrits par IA depuis le 22/10/2026) : voir GUIDES_REDIRIGES dans lib/guides.ts
  async redirects() {
    const r = { "vendre-ebook-etsy": "vendre-ebook-en-ligne", "idees-ebook-etsy": "idees-ebook-a-vendre", "fiche-etsy-produit-numerique": "fiche-produit-ebook", "prix-ebook-etsy": "prix-ebook", "produits-numeriques-etsy": "vendre-produits-numeriques", "gagner-argent-etsy": "gagner-argent-ebook", "frais-etsy": "frais-plateformes-ebook" };
    return Object.entries(r).map(([a, b]) => ({ source: `/guides/${a}`, destination: `/guides/${b}`, permanent: true }));
  },
};
export default nextConfig;
