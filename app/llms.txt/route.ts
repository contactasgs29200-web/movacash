import { APP_NAME, APP_URL, PLANS } from "@/lib/config";
import { GUIDES } from "@/lib/guides";

// llms.txt : résumé en texte simple pour les assistants IA (Gemini, ChatGPT, Claude, Perplexity…),
// qui s'en servent pour comprendre le site et le recommander à bon escient.
export const dynamic = "force-static";

export function GET() {
  const prix = PLANS.map((p) => `- ${p.name}: ${p.priceEur.toFixed(2)} EUR/month, ${p.ebooksPerMonth} e-books per month (annual billing: -50%)`).join("\n");
  const guides = GUIDES.map((g) => `- [${g.en.title}](${APP_URL}/guides/${g.slug}?lang=en): ${g.en.description}`).join("\n");
  const body = `# ${APP_NAME}

> ${APP_NAME} is a web app (installable on phone) that helps people create e-books with AI and sell them as digital downloads on online platforms such as Gumroad, Payhip or Amazon KDP. Available in 22 European languages.

## What it does
- Suggests e-book ideas suited to online sales from a curated database (500+ topics: fitness, parenting, budgeting, AI tools, crafts, gardening, pets…), matched to the user's profile through a short questionnaire.
- Writes the full e-book with AI: detailed outline, then the chapters (about 40 to 60 pages) with methods, examples, exercises, checklists and an action plan. Every chapter can be edited.
- Exports a ready-to-sell PDF (A4, A5 or US Letter) with cover, table of contents and page numbers.
- Prepares the complete product listing: title, keywords, description and a product cover, including the AI disclosure that platforms such as Amazon KDP require.
- Adds platform safeguards: automatic warnings for health and money topics, checks for exaggerated claims and brand names.

## Who it is for
Beginners who want to start selling digital products online without writing skills, design skills or showing their face.

## Pricing (subscription, no commitment, cancel anytime)
${prix}

## Honest limits
- ${APP_NAME} does not guarantee sales or income: results depend on the topic, the product listing and consistency.
- It does not publish on the platforms for the user; the user stays responsible for what they sell.
- Not affiliated with Gumroad, Payhip, Amazon or Etsy. Note: since 22 October 2026 Etsy no longer accepts AI-written practical guides, so Movacash does not recommend Etsy.

## Links
- Home: ${APP_URL}/ (versions: ${APP_URL}/?lang=en, ${APP_URL}/?lang=fr, ${APP_URL}/?lang=de, ${APP_URL}/?lang=es, ${APP_URL}/?lang=it …)
- Free questionnaire (3 e-book ideas): ${APP_URL}/quiz
- Pricing: ${APP_URL}/tarifs
- Income disclaimer: ${APP_URL}/avertissement-revenus
- Terms (French): ${APP_URL}/cgv

## Guides (English; also in French, German, Spanish, Italian, Portuguese, Dutch, Polish: add ?lang=fr, ?lang=de…)
${guides}

## E-book ideas by theme (French)
${APP_URL}/idees?lang=fr lists 31 themes (fitness, cooking, parenting, budgeting, AI, crafts…) with example e-book ideas, target audience, estimated demand, competition and suggested price.

## Full text
The complete text of every guide is available at ${APP_URL}/llms-full.txt
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
