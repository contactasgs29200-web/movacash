import type { Metadata } from "next";
import { getT } from "@/lib/i18n/server";
import LegalPage from "@/components/LegalPage";
import { APP_NAME } from "@/lib/config";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getT();
  return { title: t("Avertissement sur les revenus") };
}

export default function IncomeDisclaimer() {
  return (
    <LegalPage title="Avertissement sur les revenus">
      <p>{APP_NAME} est un outil de création de contenu. Nous ne vendons pas d'opportunité de revenus et nous ne garantissons aucun gain.</p>
      <ul>
        <li>La plupart des boutiques en ligne réalisent peu ou pas de ventes au début ; certaines n'en réalisent jamais.</li>
        <li>Les résultats dépendent du sujet choisi, de la qualité et de la relecture de l'e-book, de la fiche produit, des visuels, du prix, de la concurrence, de la promotion et du temps investi.</li>
        <li>Les plateformes de vente (Gumroad, Payhip, Amazon KDP…) prélèvent des frais (commission sur les ventes, frais de paiement) et peuvent modifier leurs règles ou retirer des produits.</li>
        <li>Les exemples de prix (par exemple 5 à 10 € par e-book) sont des fourchettes observées pour ce type de produit, pas une estimation de vos revenus.</li>
      </ul>
      <p>Abonnez-vous si l'outil vous fait gagner du temps pour créer des produits de qualité, pas sur la base d'une promesse de revenus.</p>
    </LegalPage>
  );
}
