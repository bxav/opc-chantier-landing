export type ArticleCategory = "guide" | "conseil" | "actualite"

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: ArticleCategory
  date: string
  readTime: number
  thumbnail: string
  content: string
}

export const categoryLabels: Record<ArticleCategory, string> = {
  guide: "Guide",
  conseil: "Conseil",
  actualite: "Actualite",
}

export const categoryColors: Record<ArticleCategory, string> = {
  guide: "bg-blue-100 text-blue-700",
  conseil: "bg-green-100 text-green-700",
  actualite: "bg-purple-100 text-purple-700",
}

export const articles: Article[] = [
  {
    slug: "optimiser-reunions-chantier",
    title: "Comment optimiser vos reunions de chantier",
    excerpt: "Decouvrez les meilleures pratiques pour des reunions de chantier efficaces et productives. Gagnez du temps et ameliorez la communication.",
    category: "guide",
    date: "2026-01-15",
    readTime: 8,
    thumbnail: "/images/blog/reunion.jpg",
    content: `
# Comment optimiser vos reunions de chantier

Les reunions de chantier sont essentielles pour la bonne coordination des travaux. Cependant, elles peuvent rapidement devenir chronophages si elles ne sont pas bien organisees.

## Preparez votre reunion en amont

Une reunion efficace commence par une bonne preparation. Avant chaque reunion :

- Etablissez un ordre du jour precis
- Envoyez-le aux participants 48h a l'avance
- Rassemblez les documents necessaires (plans, photos, CR precedent)
- Identifiez les points critiques a aborder

## Structurez le deroulement

Pendant la reunion, respectez une structure claire :

1. **Tour de table rapide** (5 min) - Point sur l'avancement general
2. **Review des actions precedentes** (10 min) - Verification du suivi
3. **Points techniques** (30 min) - Discussion des sujets du jour
4. **Planning** (10 min) - Coordination des interventions a venir
5. **Divers** (5 min) - Questions ouvertes

## Utilisez les bons outils

L'enregistrement audio de vos reunions avec transcription automatique vous permet de :

- Ne rien oublier des echanges
- Produire un compte-rendu en quelques minutes
- Retrouver facilement une information

## Assurez le suivi

Apres la reunion :

- Envoyez le compte-rendu sous 24h
- Assignez clairement les actions avec des delais
- Planifiez des rappels automatiques

Avec ces pratiques, vos reunions de chantier deviendront un vrai levier de productivite.
    `,
  },
  {
    slug: "photos-annotees-communication-chantier",
    title: "Photos annotees : l'arme secrete de la communication chantier",
    excerpt: "Pourquoi les photos annotees revolutionnent la documentation et la communication sur les chantiers de construction.",
    category: "conseil",
    date: "2026-01-10",
    readTime: 5,
    thumbnail: "/images/blog/photo-annotee.jpg",
    content: `
# Photos annotees : l'arme secrete de la communication chantier

Une image vaut mille mots. Sur un chantier, une photo annotee en vaut dix mille.

## Le probleme des descriptions textuelles

Combien de fois avez-vous recu un email decrivant un defaut avec des termes vagues comme "fissure au niveau de la zone technique" ? Sans photo, l'interpretation est subjective et source d'erreurs.

## Les avantages de l'annotation

Les photos annotees permettent de :

- **Localiser precisement** le probleme sur l'image
- **Ajouter des mesures** et des references
- **Indiquer la gravite** avec des codes couleur
- **Dater et geotaguer** automatiquement

## Bonnes pratiques

Pour des annotations efficaces :

1. Prenez la photo avec suffisamment de recul pour le contexte
2. Utilisez des fleches pour pointer les elements importants
3. Ajoutez des notes courtes et precises
4. Numerotez si plusieurs elements a signaler

## Integration dans vos processus

Les photos annotees s'integrent facilement dans :

- Les comptes-rendus de visite
- Les rapports de non-conformite
- La documentation de reception
- Les echanges avec le bureau d'etudes

Adoptez les photos annotees et transformez votre communication chantier.
    `,
  },
  {
    slug: "ia-construction-tendances-2026",
    title: "L'IA dans la construction : tendances 2026",
    excerpt: "Comment l'intelligence artificielle transforme le secteur du BTP et ce que cela signifie pour les professionnels du chantier.",
    category: "actualite",
    date: "2026-01-05",
    readTime: 6,
    thumbnail: "/images/blog/ia-construction.jpg",
    content: `
# L'IA dans la construction : tendances 2026

L'intelligence artificielle n'est plus une technologie du futur. Elle est deja presente sur les chantiers et transforme nos metiers.

## Transcription et synthese automatique

Les outils de transcription IA permettent desormais de :

- Convertir les reunions en texte en temps reel
- Generer des comptes-rendus structures automatiquement
- Identifier les actions et les responsables

## Assistance technique intelligente

Les assistants IA specialises construction peuvent :

- Repondre aux questions techniques sur les DTU
- Suggerer des solutions basees sur des cas similaires
- Aider a la redaction de documents

## Analyse predictive

L'IA analyse les donnees historiques pour :

- Anticiper les retards potentiels
- Optimiser les plannings
- Detecter les risques de non-qualite

## Ce que cela change pour vous

Ces technologies ne remplacent pas l'expertise humaine, elles l'augmentent. Les professionnels qui adoptent ces outils gagnent en efficacite et peuvent se concentrer sur les taches a forte valeur ajoutee.

## L'accessibilite comme enjeu cle

La democratisation de l'IA passe par des outils simples d'acces, fonctionnant hors ligne, et ne necessitant pas d'expertise technique pour etre utilises.

L'avenir appartient aux professionnels qui sauront integrer ces technologies dans leur pratique quotidienne.
    `,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getRelatedArticles(currentSlug: string, limit = 2): Article[] {
  return articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, limit)
}
