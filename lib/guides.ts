// Guides publics (référencement) : de vrais articles utiles, en français et en anglais.
// Règles de rédaction : aucune promesse de revenus, chiffres vérifiables (frais vérifiés le 01/11/2026), conseils concrets.
// Depuis le 22/10/2026, Etsy refuse les guides pratiques écrits par IA : les guides recommandent Gumroad, Payhip et Amazon KDP.
// Traductions dans lib/guides-i18n/<langue>.json ; une langue sans traduction affiche la version anglaise (canonique : ?lang=en).
// Anciennes adresses (…-etsy) redirigées dans next.config (GUIDES_REDIRIGES).

export type Section = { h: string; p?: string[]; ul?: string[] };
export type GuideText = { title: string; description: string; intro: string; sections: Section[]; faq?: [string, string][] };
export type Guide = { slug: string; date: string; fr: GuideText; en: GuideText };

export const GUIDES_REDIRIGES: Record<string, string> = {
  "vendre-ebook-etsy": "vendre-ebook-en-ligne",
  "idees-ebook-etsy": "idees-ebook-a-vendre",
  "fiche-etsy-produit-numerique": "fiche-produit-ebook",
  "prix-ebook-etsy": "prix-ebook",
  "produits-numeriques-etsy": "vendre-produits-numeriques",
  "gagner-argent-etsy": "gagner-argent-ebook",
  "frais-etsy": "frais-plateformes-ebook",
};

const D = "2026-11-01";

export const GUIDES: Guide[] = [
  {
    slug: "vendre-ebook-en-ligne",
    date: D,
    fr: {
      title: "Comment vendre un e-book en ligne : le guide complet",
      description: "Choisir une plateforme (Gumroad, Payhip, Amazon KDP), trouver un sujet, créer le PDF, rédiger la fiche produit et fixer le prix : toutes les étapes pour vendre ton premier e-book.",
      intro: "Un e-book en PDF est un des produits les plus simples à vendre en ligne : l'acheteur paie, télécharge le fichier, et tu n'as rien à expédier. Voici la marche à suivre, étape par étape, sans raccourci magique.",
      sections: [
        { h: "1. Choisir où vendre", p: ["Pour un premier e-book, deux plateformes sont simples et acceptent les livres créés avec l'IA : Gumroad et Payhip. Tu crées un compte gratuit, une page produit, et tu reçois tes ventes sur ton compte bancaire ou PayPal. Amazon KDP est une troisième option, avec une audience énorme, à condition de déclarer l'usage de l'IA à la publication.", "Attention : depuis le 22 octobre 2026, Etsy n'accepte plus les guides pratiques et e-books écrits par IA. Ne publie pas ce type de produit sur Etsy."] },
        { h: "2. Choisir un sujet qui répond à un vrai besoin", p: ["Un bon e-book résout un problème précis pour un public précis : « Préparer l'arrivée de bébé : la checklist complète » se vend mieux que « Tout sur la parentalité ». Cherche ton sujet sur Amazon, lis les avis des acheteurs et repère ce qui manque : un niveau débutant, un format plus pratique, une langue moins couverte."], ul: ["Un public identifiable (débutants, jeunes parents, sportifs, étudiants…)", "Un résultat concret (un plan, une méthode, une checklist)", "Un sujet que tu peux présenter honnêtement, sans promesse médicale ou financière"] },
        { h: "3. Créer le PDF", p: ["Ton e-book doit être agréable à lire : un sommaire, des chapitres courts, des exemples, des exercices et un plan d'action. Vise la qualité plutôt que le nombre de pages. Avec un outil comme Movacash, l'IA rédige le plan et les chapitres à partir de ton sujet, puis tu relis, modifies ce qui ne te plaît pas et exportes un PDF A4, A5 ou US Letter."] },
        { h: "4. Rédiger une fiche produit claire", p: ["Le titre doit contenir les mots que tapent tes acheteurs. La description dit ce que contient le fichier, pour qui il est fait, le format (PDF, nombre de pages) et qu'il s'agit d'un téléchargement. Indique aussi que le contenu a été créé avec l'aide de l'IA : c'est obligatoire sur Amazon KDP et c'est une bonne pratique partout."] },
        { h: "5. Soigner la couverture", p: ["La couverture est la première chose qu'on voit. Elle doit montrer un titre lisible en petit, faire comprendre qu'il s'agit d'un e-book et donner envie de cliquer. Évite les visuels surchargés et les promesses écrites en gros."] },
        { h: "6. Fixer ton prix et faire connaître ton e-book", p: ["Regarde les prix des e-books comparables et tiens compte des frais de la plateforme (voir notre guide sur les frais). Sur Gumroad et Payhip, les acheteurs arrivent surtout par tes propres liens : Pinterest, réseaux sociaux, blog ou newsletter. Sur Amazon, la recherche interne peut t'amener des lecteurs."] },
        { h: "7. Publier régulièrement et apprendre", p: ["Un seul e-book donne rarement des résultats. Ceux qui progressent publient plusieurs e-books sur des sujets proches, regardent leurs statistiques (visites, ventes) et améliorent les titres et les couvertures qui ne fonctionnent pas."] },
      ],
      faq: [
        ["Faut-il un statut pour vendre des e-books ?", "Pour une activité régulière, oui. En France, la micro-entreprise est le statut le plus simple pour démarrer."],
        ["Peut-on vendre sur Etsy un e-book écrit avec l'IA ?", "Non : depuis le 22 octobre 2026, Etsy refuse les guides pratiques et e-books écrits par IA. Gumroad et Payhip les acceptent, Amazon KDP aussi avec une déclaration."],
        ["Combien peut-on gagner ?", "Personne ne peut le garantir. Les ventes dépendent du sujet, de la qualité de la fiche, de la concurrence et de ta régularité."],
      ],
    },
    en: {
      title: "How to sell an e-book online: the complete guide",
      description: "Pick a platform (Gumroad, Payhip, Amazon KDP), find a topic, create the PDF, write the product listing and set your price: every step to sell your first e-book.",
      intro: "A PDF e-book is one of the simplest products to sell online: the buyer pays, downloads the file, and you have nothing to ship. Here is the process, step by step, with no magic shortcut.",
      sections: [
        { h: "1. Choose where to sell", p: ["For a first e-book, two platforms are simple and accept books created with AI: Gumroad and Payhip. You create a free account and a product page, and your sales are paid out to your bank account or PayPal. Amazon KDP is a third option with a huge audience, as long as you disclose AI use when you publish.", "Note: since 22 October 2026, Etsy no longer accepts AI-written practical guides and e-books. Don't publish this kind of product on Etsy."] },
        { h: "2. Pick a topic that solves a real problem", p: ["A good e-book solves a specific problem for a specific audience: “Preparing for baby: the complete checklist” sells better than “All about parenting”. Search your topic on Amazon, read buyer reviews and spot what's missing: a beginner level, a more practical format, a less covered language."], ul: ["A clear audience (beginners, new parents, athletes, students…)", "A concrete outcome (a plan, a method, a checklist)", "A topic you can present honestly, without medical or financial promises"] },
        { h: "3. Create the PDF", p: ["Your e-book should be pleasant to read: a table of contents, short chapters, examples, exercises and an action plan. Aim for quality rather than page count. With a tool like Movacash, AI writes the outline and chapters from your topic, then you review, edit what you don't like and export an A4, A5 or US Letter PDF."] },
        { h: "4. Write a clear product listing", p: ["The title should contain the words your buyers type. The description says what the file contains, who it's for, the format (PDF, page count) and that it's a download. Also state that the content was created with the help of AI: it's mandatory on Amazon KDP and good practice everywhere."] },
        { h: "5. Take care of the cover", p: ["The cover is the first thing people see. It should show a title that's readable at small size, make it obvious that it's an e-book and make people want to click. Avoid cluttered visuals and big written promises."] },
        { h: "6. Set your price and get the word out", p: ["Look at comparable e-books and account for the platform's fees (see our fees guide). On Gumroad and Payhip, buyers mostly come through your own links: Pinterest, social media, a blog or a newsletter. On Amazon, the store's search can bring you readers."] },
        { h: "7. Publish consistently and learn", p: ["A single e-book rarely does much. People who make progress publish several e-books on related topics, watch their stats (visits, sales) and improve the titles and covers that don't perform."] },
      ],
      faq: [
        ["Do I need a business status to sell e-books?", "For regular activity, usually yes. Check the rules in your country before you start."],
        ["Can I sell an AI-written e-book on Etsy?", "No: since 22 October 2026, Etsy refuses AI-written practical guides and e-books. Gumroad and Payhip accept them, and so does Amazon KDP with a disclosure."],
        ["How much can I earn?", "Nobody can guarantee it. Sales depend on the topic, the listing quality, competition and your consistency."],
      ],
    },
  },
  {
    slug: "idees-ebook-a-vendre",
    date: D,
    fr: {
      title: "Quels e-books vendre en ligne ? 30 idées de sujets",
      description: "30 idées d'e-books à vendre en ligne, classées par thème, et la méthode pour vérifier qu'un sujet a des acheteurs avant de te lancer.",
      intro: "Les e-books qui se vendent ne sont pas les plus longs ni les plus ambitieux : ce sont ceux qui répondent à une question précise que des gens se posent vraiment. Voici des pistes, puis une méthode pour vérifier la tienne.",
      sections: [
        { h: "Organisation et vie pratique", ul: ["Organiser un déménagement sans stress", "Préparer l'arrivée de bébé : la checklist", "Le grand ménage de printemps en 10 jours", "Organiser un mariage avec un petit budget", "Planifier les repas de la semaine pour une famille"] },
        { h: "Argent et budget (sans promesse de gains)", ul: ["Tenir son budget avec la méthode des enveloppes", "Préparer son premier rendez-vous à la banque", "Réduire ses factures d'énergie à la maison", "Gérer l'argent en colocation", "Préparer un voyage à petit prix"] },
        { h: "Sport et bien-être (sans allégation médicale)", ul: ["Débuter la course à pied en 8 semaines", "Routine de mobilité pour télétravailleurs", "Yoga doux pour débutants", "Préparer sa première randonnée en montagne", "Mieux organiser ses soirées pour se coucher plus tôt"] },
        { h: "Loisirs et création", ul: ["Débuter le tricot : 5 projets faciles", "Créer un potager sur un balcon", "Apprendre l'aquarelle en 30 jours", "Photographier ses plats avec un téléphone", "Débuter la calligraphie"] },
        { h: "Numérique et travail", ul: ["Utiliser l'IA au quotidien sans être technicien", "Réussir son premier entretien d'embauche", "Créer un CV clair en une soirée", "Organiser ses fichiers et ses photos", "Débuter sur Canva pour ses visuels"] },
        { h: "Famille et animaux", ul: ["Activités sans écran pour les 3-6 ans", "Éduquer un chiot : les 30 premiers jours", "Accueillir un chat adulte", "Préparer un road trip en famille", "Routines du soir pour enfants"] },
        { h: "Comment vérifier qu'un sujet a des acheteurs", p: ["Tape ton sujet dans la recherche d'Amazon (rayon Kindle) et regarde : existe-t-il des livres sur ce sujet ? Ont-ils des avis récents ? Les avis signalent-ils un manque (trop compliqué, pas assez pratique, pas dans ta langue) ? Un sujet sans aucun livre a souvent peu de demande ; un sujet très encombré demande un angle plus précis."] },
      ],
      faq: [
        ["Faut-il être expert du sujet ?", "Non, mais tu dois relire le contenu, vérifier les conseils et ne rien promettre. L'IA rédige, tu restes responsable de ce que tu vends."],
        ["Mieux vaut un sujet large ou précis ?", "Précis. « Débuter la course à pied après 40 ans » trouve plus facilement ses lecteurs que « Le sport »."],
      ],
    },
    en: {
      title: "Which e-books to sell online? 30 topic ideas",
      description: "30 e-book ideas to sell online, grouped by theme, plus a method to check that a topic has buyers before you start.",
      intro: "The e-books that sell aren't the longest or most ambitious: they're the ones that answer a precise question people really ask. Here are some ideas, then a method to check yours.",
      sections: [
        { h: "Organisation and everyday life", ul: ["Moving house without stress", "Preparing for baby: the checklist", "A 10-day spring clean", "Planning a wedding on a small budget", "Weekly meal planning for a family"] },
        { h: "Money and budgeting (no earnings promises)", ul: ["Sticking to a budget with the envelope method", "Preparing your first meeting with the bank", "Cutting your energy bills at home", "Managing money in a shared flat", "Planning a trip on a budget"] },
        { h: "Fitness and wellbeing (no medical claims)", ul: ["Start running in 8 weeks", "A mobility routine for remote workers", "Gentle yoga for beginners", "Preparing your first mountain hike", "Evening routines to get to bed earlier"] },
        { h: "Hobbies and crafts", ul: ["Learn to knit: 5 easy projects", "A vegetable garden on a balcony", "Learn watercolour in 30 days", "Food photography with a phone", "Getting started with calligraphy"] },
        { h: "Digital and work", ul: ["Using AI every day without being technical", "Acing your first job interview", "A clear CV in one evening", "Organising your files and photos", "Getting started with Canva"] },
        { h: "Family and pets", ul: ["Screen-free activities for ages 3-6", "Training a puppy: the first 30 days", "Welcoming an adult cat", "Planning a family road trip", "Bedtime routines for children"] },
        { h: "How to check that a topic has buyers", p: ["Type your topic into Amazon's search (Kindle store) and look: are there books on it? Do they have recent reviews? Do reviews point to a gap (too complicated, not practical enough, not in your language)? A topic with no books often has little demand; a very crowded one needs a more specific angle."] },
      ],
      faq: [
        ["Do I need to be an expert?", "No, but you must review the content, check the advice and promise nothing. AI writes; you stay responsible for what you sell."],
        ["Broad or specific topic?", "Specific. “Start running after 40” finds readers more easily than “Fitness”."],
      ],
    },
  },
  {
    slug: "creer-ebook-ia",
    date: D,
    fr: {
      title: "Créer un e-book avec l'IA : la méthode pas à pas",
      description: "Du sujet au PDF : comment utiliser l'IA pour écrire un e-book utile, éviter les erreurs classiques et obtenir un produit prêt à vendre.",
      intro: "L'IA peut écrire un e-book entier en quelques minutes. Mais un bon e-book, ce n'est pas un texte long : c'est un texte utile, bien structuré et sans erreurs. Voici une méthode qui fonctionne.",
      sections: [
        { h: "1. Définir le lecteur et la promesse du livre", p: ["Avant de générer quoi que ce soit, écris en une phrase pour qui est le livre et ce qu'il permet de faire. Exemple : « Aider un grand débutant à coudre ses 5 premiers projets en un mois. » Cette phrase guide tout le reste."] },
        { h: "2. Faire générer un plan détaillé", p: ["Demande d'abord un plan : 7 à 12 chapitres, chacun avec un objectif clair. Relis-le : l'ordre est-il logique ? Manque-t-il une étape ? Un chapitre fait-il doublon ? Corriger le plan prend deux minutes et évite de réécrire des pages."] },
        { h: "3. Générer chapitre par chapitre", p: ["Un chapitre à la fois donne un texte plus précis qu'un livre entier d'un coup. Chaque chapitre devrait contenir une explication, des exemples concrets, un exercice ou une checklist, et un résumé de ce qu'il faut retenir."] },
        { h: "4. Relire et vérifier", ul: ["Supprimer les chiffres et statistiques que tu ne peux pas vérifier", "Retirer les promesses (« garanti », « résultat en 7 jours »)", "Vérifier les conseils de sécurité, de santé et d'argent", "Ajouter tes propres astuces : c'est ce qui rend le livre unique"] },
        { h: "5. Mettre en page et exporter", p: ["Un sommaire, une couverture, une pagination et des titres clairs font la différence. Exporte en PDF au format attendu par tes acheteurs (A4 en Europe, US Letter aux États-Unis, A5 pour la lecture sur téléphone)."] },
        { h: "6. Choisir une plateforme qui accepte l'IA", p: ["Gumroad et Payhip acceptent les e-books créés avec l'IA. Amazon KDP aussi, à condition de le déclarer au moment de la publication. Etsy, en revanche, refuse depuis le 22 octobre 2026 les guides pratiques écrits par IA."] },
        { h: "Ce que fait Movacash", p: ["Movacash enchaîne ces étapes : plan détaillé, chapitres avec exemples et exercices, couverture, PDF et fiche produit. Le contenu est écrit pour éviter les statistiques inventées et les promesses excessives, et tu restes l'auteur : tu relis et tu modifies ce que tu veux avant de vendre."] },
      ],
      faq: [
        ["Un e-book écrit par l'IA est-il légal à vendre ?", "Oui, dans la plupart des cas, à condition de ne pas reprendre de contenu protégé et d'indiquer l'usage de l'IA quand la plateforme le demande, comme Amazon KDP."],
        ["Combien de pages faut-il ?", "Il n'y a pas de minimum. 40 à 60 pages bien remplies valent mieux que 150 pages délayées."],
      ],
    },
    en: {
      title: "Create an e-book with AI: a step-by-step method",
      description: "From topic to PDF: how to use AI to write a useful e-book, avoid classic mistakes and get a ready-to-sell product.",
      intro: "AI can write a whole e-book in minutes. But a good e-book isn't a long text: it's a useful, well-structured text with no mistakes. Here is a method that works.",
      sections: [
        { h: "1. Define the reader and the book's promise", p: ["Before generating anything, write in one sentence who the book is for and what it helps them do. Example: “Help a complete beginner sew their first 5 projects in a month.” That sentence guides everything else."] },
        { h: "2. Generate a detailed outline", p: ["Ask for an outline first: 7 to 12 chapters, each with a clear goal. Review it: is the order logical? Is a step missing? Does a chapter overlap another? Fixing the outline takes two minutes and saves rewriting pages."] },
        { h: "3. Generate chapter by chapter", p: ["One chapter at a time gives more precise text than a whole book at once. Each chapter should include an explanation, concrete examples, an exercise or checklist, and a summary of key takeaways."] },
        { h: "4. Review and check", ul: ["Remove figures and statistics you can't verify", "Remove promises (“guaranteed”, “results in 7 days”)", "Check safety, health and money advice", "Add your own tips: that's what makes the book unique"] },
        { h: "5. Lay out and export", p: ["A table of contents, a cover, page numbers and clear headings make the difference. Export a PDF in the size your buyers expect (A4 in Europe, US Letter in the US, A5 for phone reading)."] },
        { h: "6. Choose a platform that accepts AI", p: ["Gumroad and Payhip accept e-books created with AI. So does Amazon KDP, as long as you disclose it when you publish. Etsy, however, has refused AI-written practical guides since 22 October 2026."] },
        { h: "What Movacash does", p: ["Movacash chains these steps: detailed outline, chapters with examples and exercises, cover, PDF and product listing. The content is written to avoid made-up statistics and exaggerated promises, and you stay the author: you review and edit whatever you want before selling."] },
      ],
      faq: [
        ["Is it legal to sell an AI-written e-book?", "In most cases yes, as long as you don't reuse protected content and you disclose AI use when the platform asks for it, as Amazon KDP does."],
        ["How many pages do I need?", "There's no minimum. 40 to 60 solid pages beat 150 padded ones."],
      ],
    },
  },
  {
    slug: "fiche-produit-ebook",
    date: D,
    fr: {
      title: "Fiche produit d'un e-book : titre, mots-clés et description",
      description: "Comment rédiger la page de vente de ton e-book sur Gumroad, Payhip ou Amazon : un titre qui se trouve, des mots-clés justes et une description honnête.",
      intro: "Un bon e-book mal présenté ne se vend pas. La fiche produit doit faire deux choses : être trouvée par les bons acheteurs, et leur dire clairement ce qu'ils vont recevoir.",
      sections: [
        { h: "Le titre", p: ["Commence par les mots que ton acheteur tape vraiment (« budget familial », « course à pied débutant »), puis précise le format et le bénéfice. Évite les majuscules partout, les emojis et les promesses (« garanti », « en 7 jours »)."] },
        { h: "Les mots-clés", p: ["Gumroad et Payhip proposent des tags, Amazon KDP sept mots-clés. Utilise des expressions de deux ou trois mots, variées, sans répéter ton titre mot pour mot : synonymes, public visé, problème résolu."] },
        { h: "La description", ul: ["Une accroche : le problème que le livre résout", "Pour qui il est fait (et pour qui il ne l'est pas)", "Ce qu'il contient : la liste des chapitres", "Le format : PDF, nombre de pages, téléchargement immédiat, aucun envoi physique", "La mention : contenu créé avec l'aide de l'IA", "Pour les sujets santé ou argent : un avertissement indiquant que le guide est informatif"] },
        { h: "La couverture et les aperçus", p: ["Une couverture lisible en petit, puis deux ou trois aperçus : le sommaire, une page intérieure, la liste de ce qu'on apprend. Montrer de vraies pages rassure l'acheteur."] },
        { h: "Ce que fait Movacash", p: ["Pour chaque e-book, Movacash prépare un titre, des mots-clés, une description complète avec la mention IA et une couverture produit, prêts à copier dans Gumroad, Payhip ou Amazon. Une vérification signale les promesses excessives et les marques citées."] },
      ],
      faq: [
        ["Faut-il indiquer que l'e-book est écrit avec l'IA ?", "Sur Amazon KDP, c'est obligatoire. Ailleurs, c'est conseillé : c'est honnête envers l'acheteur et ça évite les mauvaises surprises."],
        ["Quelle longueur pour la description ?", "Assez pour répondre aux questions de l'acheteur : souvent 150 à 300 mots, avec des listes faciles à lire."],
      ],
    },
    en: {
      title: "An e-book product listing: title, keywords and description",
      description: "How to write your e-book's sales page on Gumroad, Payhip or Amazon: a findable title, the right keywords and an honest description.",
      intro: "A good e-book that's badly presented won't sell. The product listing has two jobs: get found by the right buyers, and tell them clearly what they'll receive.",
      sections: [
        { h: "The title", p: ["Start with the words your buyer actually types (“family budget”, “running for beginners”), then add the format and the benefit. Avoid all caps, emojis and promises (“guaranteed”, “in 7 days”)."] },
        { h: "Keywords", p: ["Gumroad and Payhip use tags; Amazon KDP gives you seven keywords. Use varied two- or three-word phrases without repeating your title word for word: synonyms, target audience, problem solved."] },
        { h: "The description", ul: ["A hook: the problem the book solves", "Who it's for (and who it isn't for)", "What's inside: the list of chapters", "The format: PDF, page count, instant download, nothing shipped", "The notice: content created with the help of AI", "For health or money topics: a disclaimer saying the guide is informational"] },
        { h: "Cover and previews", p: ["A cover that's readable at small size, then two or three previews: the table of contents, an inside page, the list of what readers will learn. Showing real pages reassures buyers."] },
        { h: "What Movacash does", p: ["For each e-book, Movacash prepares a title, keywords, a full description with the AI notice and a product cover, ready to paste into Gumroad, Payhip or Amazon. A check flags exaggerated promises and brand names."] },
      ],
      faq: [
        ["Do I have to say the e-book was written with AI?", "On Amazon KDP it's mandatory. Elsewhere it's recommended: it's honest with buyers and avoids bad surprises."],
        ["How long should the description be?", "Long enough to answer the buyer's questions: often 150 to 300 words, with easy-to-read lists."],
      ],
    },
  },
  {
    slug: "prix-ebook",
    date: D,
    fr: {
      title: "À quel prix vendre un e-book ?",
      description: "Comment fixer le prix d'un e-book en PDF : les prix courants, les frais des plateformes, les paliers d'Amazon KDP et les erreurs à éviter.",
      intro: "Il n'existe pas de prix parfait, mais il existe des repères. Le bon prix dépend de ce que tu apportes, de ce que proposent les autres et des frais de la plateforme.",
      sections: [
        { h: "Les repères", p: ["Pour un guide pratique de 30 à 60 pages, on voit souvent des prix entre 5 et 15 €. Un guide très court ou une simple checklist se vend plutôt sous 5 €. Un guide complet avec exercices et modèles peut viser plus haut s'il est clairement plus utile que la concurrence."] },
        { h: "Les frais à prévoir", ul: ["Gumroad : 10 % + 0,50 $ par vente, plus les frais de paiement (30 % si la vente vient de sa vitrine Discover)", "Payhip : 5 % par vente en formule gratuite (2 % ou 0 % en formules payantes), plus les frais PayPal ou Stripe", "Amazon KDP : 70 % de redevance entre 2,99 $ et 12,99 $ (moins des frais de livraison selon la taille du fichier), 35 % en dehors"] },
        { h: "Le cas d'Amazon KDP", p: ["Depuis le 7 juillet 2026, la redevance de 70 % s'applique aux livres Kindle vendus entre 2,99 $ et 12,99 $ (au lieu de 9,99 $ avant). En dessous de 2,99 $ ou au-dessus de 12,99 $, tu touches 35 %. Rester dans cette fourchette est souvent le plus intéressant."] },
        { h: "Les erreurs à éviter", ul: ["Vendre trop cher un premier e-book sans avis", "Brader à 0,99 € : les acheteurs doutent de la qualité", "Oublier les frais et la TVA dans ton calcul", "Changer de prix tous les jours sans regarder les résultats"] },
      ],
      faq: [
        ["Faut-il proposer des promotions ?", "Ponctuellement, oui : une baisse temporaire peut aider à obtenir les premières ventes et les premiers avis."],
        ["Movacash conseille-t-il un prix ?", "Oui, chaque idée de la base a une fourchette de prix conseillée, estimée à partir de produits comparables. C'est un repère, pas une garantie."],
      ],
    },
    en: {
      title: "How much should you charge for an e-book?",
      description: "How to price a PDF e-book: common prices, platform fees, Amazon KDP's royalty bands and mistakes to avoid.",
      intro: "There's no perfect price, but there are benchmarks. The right price depends on what you offer, what others charge and the platform's fees.",
      sections: [
        { h: "Benchmarks", p: ["For a 30- to 60-page practical guide, prices between €5 and €15 are common. A very short guide or a simple checklist usually sells under €5. A complete guide with exercises and templates can aim higher if it's clearly more useful than the competition."] },
        { h: "Fees to plan for", ul: ["Gumroad: 10% + $0.50 per sale, plus payment processing (30% if the sale comes from its Discover marketplace)", "Payhip: 5% per sale on the free plan (2% or 0% on paid plans), plus PayPal or Stripe fees", "Amazon KDP: 70% royalty between $2.99 and $12.99 (minus a delivery fee based on file size), 35% outside that range"] },
        { h: "The Amazon KDP case", p: ["Since 7 July 2026, the 70% royalty applies to Kindle books priced from $2.99 to $12.99 (up from $9.99). Below $2.99 or above $12.99, you earn 35%. Staying within that range is often the best option."] },
        { h: "Mistakes to avoid", ul: ["Overpricing a first e-book with no reviews", "Underpricing at €0.99: buyers doubt the quality", "Forgetting fees and VAT in your maths", "Changing the price every day without looking at results"] },
      ],
      faq: [
        ["Should I run promotions?", "Occasionally, yes: a temporary discount can help you get your first sales and reviews."],
        ["Does Movacash suggest a price?", "Yes, every idea in the database comes with a suggested price range, estimated from comparable products. It's a benchmark, not a guarantee."],
      ],
    },
  },
  {
    slug: "etsy-ia-regles",
    date: D,
    fr: {
      title: "Etsy et l'IA : pourquoi les e-books écrits par IA n'y sont plus acceptés",
      description: "Depuis le 22 octobre 2026, Etsy refuse les guides pratiques et e-books écrits par IA. Ce que dit la règle, que faire de tes annonces, et où vendre à la place.",
      intro: "Etsy a longtemps accepté les créations réalisées avec l'IA, à condition de le signaler. Ce n'est plus le cas pour les guides pratiques : la plateforme a resserré ses règles. Voici ce qu'il faut savoir.",
      sections: [
        { h: "Ce qui a changé", p: ["Depuis le 22 octobre 2026, Etsy n'accepte plus les guides pratiques, e-books d'instructions et contenus du même type rédigés par une IA. Les annonces concernées peuvent être retirées et la boutique sanctionnée."] },
        { h: "Si tu as déjà des annonces sur Etsy", ul: ["Retire les e-books écrits avec l'IA pour protéger ta boutique", "Garde tes fichiers : tu peux les republier ailleurs", "Relis les règles officielles d'Etsy si tu vends d'autres produits numériques"] },
        { h: "Où vendre à la place", p: ["Gumroad et Payhip acceptent les e-books créés avec l'IA : tu crées une page produit, tu partages ton lien, et l'acheteur télécharge le PDF. Amazon KDP les accepte aussi, à condition de déclarer l'usage de l'IA au moment de la publication. Certaines plateformes, comme Kobo, sont plus restrictives : lis toujours leurs règles avant de publier."] },
        { h: "Les bonnes pratiques partout", ul: ["Indiquer que le contenu a été créé avec l'aide de l'IA", "Relire et personnaliser le texte", "Ne faire aucune promesse médicale ou financière", "Ne pas utiliser les logos de marques"] },
      ],
      faq: [
        ["Etsy accepte-t-il encore des produits faits avec l'IA ?", "Pas les guides pratiques ni les e-books écrits par IA, depuis le 22 octobre 2026. Pour les autres catégories, vérifie les règles officielles d'Etsy."],
        ["Movacash publie-t-il sur Etsy ?", "Non. Movacash prépare l'e-book et la fiche produit ; tu publies toi-même, et nous recommandons Gumroad, Payhip ou Amazon KDP."],
      ],
    },
    en: {
      title: "Etsy and AI: why AI-written e-books are no longer accepted",
      description: "Since 22 October 2026, Etsy refuses AI-written practical guides and e-books. What the rule says, what to do with your listings, and where to sell instead.",
      intro: "For a long time Etsy accepted creations made with AI, as long as you disclosed it. That's no longer true for practical guides: the platform has tightened its rules. Here's what you need to know.",
      sections: [
        { h: "What changed", p: ["Since 22 October 2026, Etsy no longer accepts practical guides, instructional e-books and similar content written by AI. Affected listings can be removed and the shop penalised."] },
        { h: "If you already have listings on Etsy", ul: ["Remove AI-written e-books to protect your shop", "Keep your files: you can republish them elsewhere", "Re-read Etsy's official rules if you sell other digital products"] },
        { h: "Where to sell instead", p: ["Gumroad and Payhip accept e-books created with AI: you create a product page, share your link, and the buyer downloads the PDF. Amazon KDP accepts them too, as long as you disclose AI use when you publish. Some platforms, such as Kobo, are stricter: always read their rules before publishing."] },
        { h: "Good practice everywhere", ul: ["State that the content was created with the help of AI", "Review and personalise the text", "Make no medical or financial promises", "Don't use brand logos"] },
      ],
      faq: [
        ["Does Etsy still accept products made with AI?", "Not AI-written practical guides or e-books, since 22 October 2026. For other categories, check Etsy's official rules."],
        ["Does Movacash publish on Etsy?", "No. Movacash prepares the e-book and the product listing; you publish it yourself, and we recommend Gumroad, Payhip or Amazon KDP."],
      ],
    },
  },
  {
    slug: "vendre-produits-numeriques",
    date: D,
    fr: {
      title: "Vendre des produits numériques en ligne : par où commencer",
      description: "E-books, checklists, planners : ce qu'est un produit numérique, ses avantages, ses limites, et les plateformes simples pour démarrer.",
      intro: "Un produit numérique se crée une fois et se télécharge autant de fois qu'il trouve preneur. Pas de stock, pas d'envoi. C'est simple à lancer, mais ça demande de la méthode pour se vendre.",
      sections: [
        { h: "Les formats courants", ul: ["E-books et guides pratiques en PDF", "Checklists et fiches imprimables", "Planners et agendas", "Modèles (CV, budget, menus)"] },
        { h: "Les avantages", ul: ["Aucun stock ni expédition", "Le même fichier peut se vendre plusieurs fois", "Tu fixes ton prix", "Tu peux commencer petit, à côté d'un autre travail"] },
        { h: "Les limites", ul: ["Beaucoup de concurrence sur les sujets génériques", "Il faut faire connaître ses produits", "Les ventes ne sont jamais garanties", "Chaque plateforme a ses règles, notamment sur l'IA"] },
        { h: "Où vendre", p: ["Gumroad et Payhip permettent d'ouvrir une boutique gratuite en quelques minutes et de vendre des fichiers numériques. Amazon KDP est adapté aux e-books au format Kindle. Etsy n'accepte plus les guides écrits par IA depuis le 22 octobre 2026."] },
      ],
      faq: [
        ["Faut-il un site internet ?", "Non. Gumroad et Payhip te donnent une page de vente prête à partager."],
        ["Combien de temps pour créer un produit ?", "Avec l'IA, un premier e-book peut être prêt en une soirée, relecture comprise. La vente, elle, prend plus de temps."],
      ],
    },
    en: {
      title: "Selling digital products online: where to start",
      description: "E-books, checklists, planners: what a digital product is, its advantages and limits, and simple platforms to get started.",
      intro: "A digital product is created once and downloaded as many times as it finds buyers. No stock, no shipping. It's simple to launch, but selling it takes method.",
      sections: [
        { h: "Common formats", ul: ["PDF e-books and practical guides", "Checklists and printables", "Planners and diaries", "Templates (CV, budget, menus)"] },
        { h: "Advantages", ul: ["No stock or shipping", "The same file can sell many times", "You set your price", "You can start small, alongside another job"] },
        { h: "Limits", ul: ["Lots of competition on generic topics", "You need to get the word out", "Sales are never guaranteed", "Each platform has its rules, especially about AI"] },
        { h: "Where to sell", p: ["Gumroad and Payhip let you open a free shop in minutes and sell digital files. Amazon KDP suits e-books in Kindle format. Etsy no longer accepts AI-written guides since 22 October 2026."] },
      ],
      faq: [
        ["Do I need a website?", "No. Gumroad and Payhip give you a sales page that's ready to share."],
        ["How long does it take to create a product?", "With AI, a first e-book can be ready in an evening, review included. Selling it takes longer."],
      ],
    },
  },
  {
    slug: "gagner-argent-ebook",
    date: D,
    fr: {
      title: "Gagner de l'argent avec des e-books : ce qui est réaliste",
      description: "Vendre des e-books peut rapporter un complément, mais rien n'est garanti. Ce qui fait vraiment la différence, et les pièges à éviter.",
      intro: "Tu as sûrement vu des promesses de revenus faciles. La réalité est plus nuancée : beaucoup de boutiques font peu de ventes au début, certaines n'en font jamais. Voici ce qui aide vraiment.",
      sections: [
        { h: "Ce qui fait la différence", ul: ["Des sujets précis, pour un public précis", "Plusieurs e-books sur une même thématique", "Des couvertures et des fiches soignées", "Une présence là où sont tes acheteurs (Pinterest, réseaux, blog)", "De la régularité sur plusieurs mois"] },
        { h: "Les pièges", ul: ["Croire qu'un seul e-book suffit", "Publier sans relire", "Promettre des résultats (santé, argent)", "Choisir une plateforme qui refuse l'IA, comme Etsy pour les guides depuis octobre 2026"] },
        { h: "Faire le calcul honnêtement", p: ["Prends ton prix, retire les frais de la plateforme, puis demande-toi combien de ventes il faudrait pour atteindre ton objectif. Ce calcul montre l'effort nécessaire ; ce n'est pas une prévision."] },
      ],
      faq: [
        ["Movacash garantit-il des revenus ?", "Non. Movacash fait gagner du temps sur la création ; les ventes dépendent de ton sujet, de ta fiche et de ta régularité."],
      ],
    },
    en: {
      title: "Making money with e-books: what's realistic",
      description: "Selling e-books can bring in extra income, but nothing is guaranteed. What really makes a difference, and the traps to avoid.",
      intro: "You've probably seen promises of easy income. Reality is more nuanced: many shops make few sales at first, and some never do. Here's what actually helps.",
      sections: [
        { h: "What makes the difference", ul: ["Specific topics for a specific audience", "Several e-books on the same theme", "Polished covers and listings", "Being where your buyers are (Pinterest, social media, a blog)", "Consistency over several months"] },
        { h: "Traps", ul: ["Thinking one e-book is enough", "Publishing without reviewing", "Promising results (health, money)", "Choosing a platform that refuses AI, such as Etsy for guides since October 2026"] },
        { h: "Do the maths honestly", p: ["Take your price, subtract the platform's fees, then ask how many sales you'd need to reach your goal. The calculation shows the effort required; it isn't a forecast."] },
      ],
      faq: [
        ["Does Movacash guarantee income?", "No. Movacash saves time on creation; sales depend on your topic, your listing and your consistency."],
      ],
    },
  },
  {
    slug: "frais-plateformes-ebook",
    date: D,
    fr: {
      title: "Frais de Gumroad, Payhip et Amazon KDP comparés",
      description: "Combien prennent Gumroad, Payhip et Amazon KDP sur la vente d'un e-book ? Commissions, frais de paiement et paliers de redevance, vérifiés en novembre 2026.",
      intro: "Avant de fixer ton prix, regarde ce que la plateforme garde. Voici les frais de trois plateformes qui acceptent les e-books créés avec l'IA. Ils peuvent changer : vérifie toujours leurs pages officielles.",
      sections: [
        { h: "Gumroad", ul: ["Aucun abonnement", "10 % + 0,50 $ par vente directe, plus les frais de paiement (environ 2,9 % + 0,30 $ par carte)", "30 % tout compris si l'acheteur vient de la vitrine Discover de Gumroad", "Gumroad collecte et reverse lui-même la TVA (vendeur officiel)"] },
        { h: "Payhip", ul: ["Formule gratuite : 5 % par vente", "Formule Plus (29 $ par mois) : 2 % par vente", "Formule Pro (99 $ par mois) : 0 % par vente", "Dans tous les cas, plus les frais PayPal ou Stripe"] },
        { h: "Amazon KDP", ul: ["Aucun abonnement", "70 % de redevance pour un e-book Kindle vendu entre 2,99 $ et 12,99 $ (depuis le 7 juillet 2026), moins des frais de livraison selon la taille du fichier", "35 % en dessous de 2,99 $ ou au-dessus de 12,99 $", "Déclaration obligatoire du contenu généré par l'IA"] },
        { h: "Lequel choisir ?", p: ["Pour démarrer sans frais fixes, Gumroad ou la formule gratuite de Payhip suffisent. Si tu vends régulièrement, une formule payante de Payhip peut devenir plus intéressante. Amazon KDP apporte une audience, mais au format Kindle et avec ses propres règles."] },
      ],
      faq: [
        ["Etsy reste-t-il une option ?", "Pas pour les e-books écrits par IA : Etsy les refuse depuis le 22 octobre 2026."],
      ],
    },
    en: {
      title: "Gumroad, Payhip and Amazon KDP fees compared",
      description: "How much do Gumroad, Payhip and Amazon KDP take on an e-book sale? Commissions, payment fees and royalty bands, checked in November 2026.",
      intro: "Before setting your price, look at what the platform keeps. Here are the fees of three platforms that accept e-books created with AI. They can change: always check their official pages.",
      sections: [
        { h: "Gumroad", ul: ["No subscription", "10% + $0.50 per direct sale, plus payment processing (about 2.9% + $0.30 per card)", "30% all-in if the buyer comes from Gumroad's Discover marketplace", "Gumroad collects and remits VAT itself (merchant of record)"] },
        { h: "Payhip", ul: ["Free plan: 5% per sale", "Plus plan ($29 a month): 2% per sale", "Pro plan ($99 a month): 0% per sale", "In every case, plus PayPal or Stripe fees"] },
        { h: "Amazon KDP", ul: ["No subscription", "70% royalty for a Kindle e-book priced from $2.99 to $12.99 (since 7 July 2026), minus a delivery fee based on file size", "35% below $2.99 or above $12.99", "Mandatory disclosure of AI-generated content"] },
        { h: "Which one to choose?", p: ["To start with no fixed costs, Gumroad or Payhip's free plan are enough. If you sell regularly, a paid Payhip plan can become better value. Amazon KDP brings an audience, but in Kindle format and with its own rules."] },
      ],
      faq: [
        ["Is Etsy still an option?", "Not for AI-written e-books: Etsy has refused them since 22 October 2026."],
      ],
    },
  },
  {
    slug: "ou-vendre-ebook",
    date: D,
    fr: {
      title: "Où vendre un e-book écrit avec l'IA en 2026 ?",
      description: "Gumroad, Payhip, Amazon KDP, Etsy, Kobo : quelles plateformes acceptent les e-books créés avec l'IA, et laquelle choisir pour débuter.",
      intro: "Toutes les plateformes ne traitent pas l'IA de la même façon. Voici un tour d'horizon pour savoir où publier sans risque.",
      sections: [
        { h: "Gumroad", p: ["Simple, gratuit au départ, accepte les e-books créés avec l'IA. Tu partages ton lien de vente ; Gumroad gère le paiement, le téléchargement et la TVA."] },
        { h: "Payhip", p: ["Proche de Gumroad, avec une formule gratuite et des formules payantes qui réduisent la commission. Accepte les e-books créés avec l'IA."] },
        { h: "Amazon KDP", p: ["La plus grande librairie en ligne. Accepte les livres créés avec l'IA, à condition de le déclarer à la publication. Le livre est vendu au format Kindle."] },
        { h: "Etsy", p: ["N'accepte plus les guides pratiques et e-books écrits par IA depuis le 22 octobre 2026. À éviter pour ce type de produit."] },
        { h: "Kobo et Apple Books", p: ["Plus restrictifs ou plus exigeants sur l'IA : Apple Books demande de la signaler, et Kobo refuse souvent ce type de livres. Lis leurs règles avant de publier."] },
        { h: "Notre conseil pour débuter", p: ["Commence par Gumroad ou Payhip, avec un ou deux e-books bien présentés, puis ajoute Amazon KDP si tu veux toucher les lecteurs Kindle."] },
      ],
      faq: [
        ["Peut-on vendre le même e-book sur plusieurs plateformes ?", "Oui, sauf si tu choisis une option d'exclusivité (comme KDP Select chez Amazon)."],
      ],
    },
    en: {
      title: "Where to sell an AI-written e-book in 2026?",
      description: "Gumroad, Payhip, Amazon KDP, Etsy, Kobo: which platforms accept e-books created with AI, and which to choose as a beginner.",
      intro: "Not every platform treats AI the same way. Here's an overview so you know where you can publish safely.",
      sections: [
        { h: "Gumroad", p: ["Simple, free to start, accepts e-books created with AI. You share your sales link; Gumroad handles payment, download and VAT."] },
        { h: "Payhip", p: ["Similar to Gumroad, with a free plan and paid plans that lower the commission. Accepts e-books created with AI."] },
        { h: "Amazon KDP", p: ["The biggest online bookstore. Accepts books created with AI, as long as you disclose it when publishing. The book is sold in Kindle format."] },
        { h: "Etsy", p: ["No longer accepts AI-written practical guides and e-books since 22 October 2026. Avoid it for this kind of product."] },
        { h: "Kobo and Apple Books", p: ["Stricter or more demanding about AI: Apple Books asks you to disclose it, and Kobo often rejects such books. Read their rules before publishing."] },
        { h: "Our advice for beginners", p: ["Start with Gumroad or Payhip, with one or two well-presented e-books, then add Amazon KDP if you want to reach Kindle readers."] },
      ],
      faq: [
        ["Can I sell the same e-book on several platforms?", "Yes, unless you choose an exclusivity option (such as KDP Select on Amazon)."],
      ],
    },
  },
  {
    slug: "movacash",
    date: D,
    fr: {
      title: "Movacash : comment ça marche et combien ça coûte",
      description: "Ce que fait Movacash, étape par étape : idées d'e-books, rédaction par l'IA, PDF, fiche produit et couverture. Prix, limites et questions fréquentes.",
      intro: "Movacash est une application web (installable sur téléphone) qui aide à créer des e-books avec l'IA et à les vendre en téléchargement sur des plateformes comme Gumroad, Payhip ou Amazon KDP. Voici précisément ce qu'elle fait, ce qu'elle ne fait pas, et ce qu'elle coûte.",
      sections: [
        { h: "1. Un questionnaire pour trouver ton idée", p: ["Quelques questions sur ton temps, ton niveau, tes centres d'intérêt et tes envies. Movacash te propose ensuite 3 idées d'e-books tirées de sa base de plus de 500 sujets (sport, parentalité, budget, outils d'IA, loisirs créatifs, jardin, animaux…), avec une estimation de la demande, de la concurrence et un prix conseillé."] },
        { h: "2. L'IA écrit l'e-book", p: ["Un plan détaillé, puis les chapitres : environ 40 à 60 pages avec méthodes, exemples, exercices, checklists et plan d'action. Chaque chapitre peut être relu et modifié. L'e-book peut être écrit dans 22 langues européennes."] },
        { h: "3. Un PDF prêt à vendre", p: ["Couverture, sommaire, numéros de page, mise en page soignée, au format A4, A5 ou US Letter. La mention de l'usage de l'IA est incluse."] },
        { h: "4. La fiche produit et la couverture", p: ["Un titre, des mots-clés, une description complète et une couverture produit, prêts à copier dans Gumroad, Payhip ou Amazon. Les sujets santé et argent reçoivent des avertissements, et les promesses exagérées et les marques sont évitées."] },
        { h: "Ce que Movacash ne fait pas", ul: ["Il ne publie pas à ta place : tu restes maître de ta boutique", "Il ne garantit ni ventes ni revenus", "Il n'est affilié à aucune plateforme de vente"] },
        { h: "Les prix", p: ["Trois formules mensuelles sans engagement : Starter à 19,90 € (20 e-books par mois), Pro à 39,90 € (50 e-books par mois) et Business à 79,90 € (120 e-books par mois). En paiement annuel, les prix sont réduits de 50 %. Résiliation à tout moment depuis l'espace client. Le questionnaire et les premières idées sont gratuits."] },
      ],
      faq: [
        ["Movacash est-il gratuit ?", "Le questionnaire et la découverte de tes idées sont gratuits. La création des e-books, des PDF et des fiches produits demande un abonnement, à partir de 19,90 € par mois (−50 % en annuel)."],
        ["Faut-il savoir écrire ?", "Non. L'IA rédige dans la langue choisie parmi 22 langues européennes ; tu relis et tu ajustes ce que tu veux."],
        ["Les e-books créés m'appartiennent-ils ?", "Oui, tu peux vendre les e-books créés avec Movacash, en respectant les règles des plateformes (dont la mention de l'IA)."],
        ["Où vendre mes e-books ?", "Sur Gumroad, Payhip ou Amazon KDP. Pas sur Etsy, qui refuse les guides écrits par IA depuis le 22 octobre 2026."],
        ["Movacash garantit-il des ventes ?", "Non. Les ventes dépendent du sujet, de la fiche, de la concurrence et de ta régularité. Movacash fait gagner du temps sur la création ; il ne promet aucun revenu."],
      ],
    },
    en: {
      title: "Movacash: how it works and what it costs",
      description: "What Movacash does, step by step: e-book ideas, AI writing, PDF, product listing and cover. Pricing, limits and FAQ.",
      intro: "Movacash is a web app (installable on phone) that helps you create e-books with AI and sell them as downloads on platforms such as Gumroad, Payhip or Amazon KDP. Here's exactly what it does, what it doesn't, and what it costs.",
      sections: [
        { h: "1. A questionnaire to find your idea", p: ["A few questions about your time, your level, your interests and your goals. Movacash then suggests 3 e-book ideas from its database of 500+ topics (fitness, parenting, budgeting, AI tools, crafts, gardening, pets…), with an estimate of demand and competition and a suggested price."] },
        { h: "2. AI writes the e-book", p: ["A detailed outline, then the chapters: about 40 to 60 pages with methods, examples, exercises, checklists and an action plan. Every chapter can be reviewed and edited. The e-book can be written in 22 European languages."] },
        { h: "3. A ready-to-sell PDF", p: ["Cover, table of contents, page numbers and a clean layout, in A4, A5 or US Letter. The AI-use disclosure is included."] },
        { h: "4. The product listing and cover", p: ["A title, keywords, a full description and a product cover, ready to paste into Gumroad, Payhip or Amazon. Health and money topics get disclaimers, and exaggerated promises and brand names are avoided."] },
        { h: "What Movacash doesn't do", ul: ["It doesn't publish for you: you stay in control of your shop", "It doesn't guarantee sales or income", "It isn't affiliated with any sales platform"] },
        { h: "Pricing", p: ["Three monthly plans with no commitment: Starter at €19.90 (20 e-books a month), Pro at €39.90 (50 e-books a month) and Business at €79.90 (120 e-books a month). With yearly billing, prices are 50% lower. Cancel anytime from your account. The questionnaire and the first ideas are free."] },
      ],
      faq: [
        ["Is Movacash free?", "The questionnaire and discovering your ideas are free. Creating e-books, PDFs and product listings requires a subscription, from €19.90 a month (−50% yearly)."],
        ["Do I need to be a good writer?", "No. AI writes the content in your chosen language among 22 European languages; you review and adjust what you want."],
        ["Do I own the e-books I create?", "Yes, you can sell the e-books you create with Movacash, following the platforms' rules (including the AI disclosure)."],
        ["Where should I sell my e-books?", "On Gumroad, Payhip or Amazon KDP. Not on Etsy, which has refused AI-written guides since 22 October 2026."],
        ["Does Movacash guarantee sales?", "No. Sales depend on the topic, the listing, competition and your consistency. Movacash saves time on creation; it doesn't promise any income."],
      ],
    },
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
