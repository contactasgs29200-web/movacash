import { ETSY_CHECKLIST } from "@/lib/etsy";
import { getT } from "@/lib/i18n/server";
import { rich } from "@/lib/i18n/rich";

export default async function EtsyGuide() {
  const { t } = await getT();
  const lien = (href: string) => (s: string) => <a className="underline" href={href} target="_blank" rel="noreferrer">{s}</a>;
  return (
    <div className="prose-legal max-w-3xl">
      <p className="eyebrow-ws">{t("Guide")}</p>
      <h1 className="h1 mb-4 mt-2">{t("Vendre ses e-books en ligne : les règles à respecter")}</h1>
      <p>{rich(t("Ce guide résume les points essentiels. Les règles des plateformes évoluent : vérifie toujours leurs pages officielles avant de publier (<1>Amazon KDP</1>, <2>Gumroad</2>)."), { 1: lien("https://kdp.amazon.com/help/topic/G200672390"), 2: lien("https://gumroad.com/terms") })}</p>

      <h2>{t("1. Contenu créé avec l'IA : divulgation obligatoire")}</h2>
      <p>{t("Gumroad et Payhip acceptent les e-books créés avec l'IA. Amazon KDP demande de le déclarer au moment de la publication. Etsy, lui, n'accepte plus les guides pratiques écrits par IA depuis le 22 octobre 2026 : n'y publie pas. La fiche produit générée ajoute la mention IA automatiquement et le PDF la reprend sur la page de droits. Ne la supprime pas.")}</p>

      <h2>{t("2. Ton contenu, pas celui des autres")}</h2>
      <p>{t("Revendre tels quels des fichiers achetés ou récupérés (PLR, packs « droits de revente ») n'est pas autorisé. Chaque e-book généré ici est créé à partir de tes choix (sujet, public, ton, consignes) et de tes modifications : relis-le et personnalise-le, c'est aussi ce qui fera la différence face aux autres vendeurs.")}</p>

      <h2>{t("3. Sujets santé, nutrition, sport, argent")}</h2>
      <ul>
        <li>{t("Aucune allégation médicale (guérir, traiter, soigner) : les plateformes de vente interdisent les produits qui font des promesses médicales.")}</li>
        <li>{t("Aucune promesse de résultat chiffré garanti (« perdez 10 kg », « gagnez 3000 €/mois »).")}</li>
        <li>{t("Un avertissement clair : le guide est informatif et ne remplace pas un professionnel. Il est ajouté automatiquement au PDF pour les sujets marqués sensibles.")}</li>
      </ul>

      <h2>{t("4. Marques et propriété intellectuelle")}</h2>
      <p>{t("Tu peux parler de TikTok, Vinted ou Canva pour décrire le sujet, mais n'utilise pas leurs logos et ne laisse pas croire à un partenariat. Ajoute « non affilié à … » dans la description.")}</p>

      <h2>{t("5. Une fiche honnête et complète")}</h2>
      <p>{t("Indique le format (PDF numérique, nombre de pages), précise qu'aucun envoi physique n'a lieu, montre de vraies pages intérieures et fixe un prix cohérent avec la longueur réelle.")}</p>

      <h2>{t("6. Réalisme sur les ventes")}</h2>
      <p>{t("Publier ne suffit pas à vendre. Ce qui marche le mieux : des sujets précis plutôt que génériques, plusieurs e-books sur une même thématique, des visuels soignés, des mots-clés travaillés et de la régularité. Les frais de la plateforme (commission, paiement) sont à prendre en compte dans ton prix.")}</p>

      <h2>{t("Check-list avant chaque publication")}</h2>
      <ul>{ETSY_CHECKLIST.map((c) => <li key={c}>{t(c)}</li>)}</ul>
    </div>
  );
}
