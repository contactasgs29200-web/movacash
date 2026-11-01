"use client";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n/client";

// Etsy refuse depuis le 22/10/2026 les guides pratiques écrits avec l'IA : on prévient les abonnés (fermable, mémorisé).
const CLE = "mc_alerte_etsy";

export default function AlerteEtsy() {
  const t = useT();
  const [vue, setVue] = useState(true);
  useEffect(() => {
    try { setVue(localStorage.getItem(CLE) === "1"); } catch { setVue(false); }
  }, []);
  if (vue) return null;
  return (
    <div className="notice-warn" role="status">
      <p><b>{t("Important : Etsy n'accepte plus les guides pratiques écrits avec l'IA (règle du 22 octobre 2026).")}</b></p>
      <p className="mt-1">{t("Publie tes e-books sur Gumroad, Payhip ou Amazon KDP, en indiquant qu'ils sont créés avec l'IA. Si tu en as déjà mis en vente sur Etsy, retire-les pour protéger ta boutique.")}</p>
      <button type="button" className="mt-2 font-semibold underline" onClick={() => { try { localStorage.setItem(CLE, "1"); } catch {} setVue(true); }}>{t("J'ai compris")}</button>
    </div>
  );
}
