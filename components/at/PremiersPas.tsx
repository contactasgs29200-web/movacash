"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n/client";
import { tk } from "@/lib/i18n/t";

// Guide court pour les abonnés qui débutent la vente en ligne (Gumroad, Payhip) : 5 étapes d'une ligne, cochables, et le support à portée de clic.
const ETAPES: { titre: string; detail: string; liens?: [string, string][] }[] = [
  { titre: tk("Ouvre ta boutique Gumroad ou Payhip"), detail: tk("Inscription gratuite : un e-mail, le nom de ta boutique, puis ton compte bancaire ou PayPal pour recevoir tes ventes."), liens: [["https://gumroad.com", tk("Ouvrir Gumroad")], ["https://payhip.com", tk("Ouvrir Payhip")]] },
  { titre: tk("Choisis ton idée et crée ton e-book"), detail: tk("Juste en dessous : « Générer », puis « Créer cet e-book ». L'IA écrit tout.") },
  { titre: tk("Télécharge ton PDF"), detail: tk("Dans ton e-book, onglet « Export PDF ».") },
  { titre: tk("Crée ton produit en ligne"), detail: tk("Sur Gumroad ou Payhip, crée un produit numérique. Copie le titre, les mots-clés et la description de l'onglet « Fiche produit », ajoute la couverture et le PDF, et indique que l'e-book est créé avec l'IA.") },
  { titre: tk("Publie, puis recommence"), detail: tk("Gumroad et Payhip prennent une commission sur chaque vente, sans abonnement obligatoire. Ajoute ensuite un nouvel e-book régulièrement pour faire vivre ta boutique.") },
];
const CLE = "mc_premiers_pas";

// Guillemets français jamais seuls en bout de ligne.
const insecable = (s: string) => s.replace(/« /g, "«\u00a0").replace(/ »/g, "\u00a0»");

// apresGeneration : affiché à la fin de la génération d'un e-book, centré sur la mise en vente (l'étape « créer l'e-book » est déjà faite).
export default function PremiersPas({ apresGeneration = false }: { apresGeneration?: boolean }) {
  const t = useT();
  const etapes = ETAPES.map((e, k) => ({ ...e, k })).filter((e) => !apresGeneration || e.k !== 1);
  const [faits, setFaits] = useState<number[]>([]);
  const [ouvert, setOuvert] = useState(true);
  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem(CLE) || "{}");
      const f: number[] = Array.isArray(s.faits) ? s.faits : [];
      if (apresGeneration) {
        // L'e-book vient d'être créé : l'étape 2 est cochée aussi sur la carte de l'accueil.
        const avec = f.includes(1) ? f : [...f, 1];
        setFaits(avec);
        localStorage.setItem(CLE, JSON.stringify({ ...s, faits: avec }));
      } else {
        setFaits(f);
        if (s.ferme) setOuvert(false);
      }
    } catch {}
  }, [apresGeneration]);
  const garder = (f: number[], o: boolean) => {
    try {
      // Replier la carte de fin de génération ne replie pas celle de l'accueil.
      const ferme = apresGeneration ? !!JSON.parse(localStorage.getItem(CLE) || "{}").ferme : !o;
      localStorage.setItem(CLE, JSON.stringify({ faits: f, ferme }));
    } catch {}
  };
  const cocher = (k: number) => {
    const f = faits.includes(k) ? faits.filter((x) => x !== k) : [...faits, k];
    setFaits(f);
    garder(f, ouvert);
  };
  const basculer = () => {
    setOuvert(!ouvert);
    garder(faits, !ouvert);
  };
  const support = () => {
    const w = window as unknown as { $crisp?: unknown[][] };
    if (w.$crisp) w.$crisp.push(["do", "chat:open"]);
    else window.location.href = "/app/support";
  };

  return (
    <section className={apresGeneration ? "pp pp-pret" : "pp"}>
      <button type="button" className="pp-tete" onClick={basculer} aria-expanded={ouvert}>
        <span>
          <b>{apresGeneration ? t("Ton e-book est prêt : comment le mettre en vente en ligne") : t("Tes premiers pas pour vendre en ligne")}</b>
          <small>{t("{n} sur {total} faits", { n: etapes.filter((e) => faits.includes(e.k)).length, total: etapes.length })}</small>
        </span>
        <i aria-hidden="true">{ouvert ? "−" : "+"}</i>
      </button>
      {ouvert && (
        <>
          <ol className="pp-liste">
            {etapes.map(({ k, ...e }, i) => (
              <li key={k} className={faits.includes(k) ? "fait" : ""}>
                <button type="button" className="pp-case" onClick={() => cocher(k)} aria-pressed={faits.includes(k)} aria-label={t("Marquer comme fait")}>{faits.includes(k) ? "✓" : i + 1}</button>
                <div>
                  <b>{t(e.titre)}</b>
                  <p>
                    {insecable(t(e.detail))}
                    {e.liens?.map(([h, l]) => <span key={h}> <a href={h} target="_blank" rel="noopener noreferrer">{t(l)} ↗</a></span>)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="pp-aide">
            <p>{t("Bloqué à une étape ? Pose ta question : un conseiller Movacash te répond au plus vite.")}</p>
            <button type="button" className="at-btn" onClick={support}>{t("Poser ma question")}</button>
            <Link href="/app/regles-etsy" className="pp-regles">{t("Les règles des plateformes à connaître")}</Link>
          </div>
        </>
      )}
    </section>
  );
}
