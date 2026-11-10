// Content model for the 35 English sub-pages (SEO expansion).
// All sub-pages are English-only; RU/KK translations are out of scope for now.

export type SubSection =
  | {
      type: 'prose';
      eyebrow?: string;
      heading?: string;
      lead?: string;
      body: string[];
    }
  | {
      type: 'cards';
      eyebrow?: string;
      heading?: string;
      columns?: 2 | 3 | 4;
      items: { title: string; text: string; icon?: string }[];
    }
  | {
      type: 'list';
      eyebrow?: string;
      heading?: string;
      ordered?: boolean;
      items: { title?: string; text: string }[];
    }
  | {
      type: 'steps';
      eyebrow?: string;
      heading?: string;
      items: { title: string; text: string }[];
    }
  | {
      type: 'facts';
      eyebrow?: string;
      heading?: string;
      items: { k: string; v: string }[];
    }
  | {
      type: 'callout';
      tone?: 'note' | 'warn';
      title: string;
      text: string;
    }
  | {
      type: 'map';
      eyebrow?: string;
      heading?: string;
      query: string;
      alt: string;
      hl?: string;
    };

export interface RelatedLink {
  label: string;
  href: string;
  hint?: string;
}

export interface SubPage {
  /** Path under /en/, e.g. "opening-hours" or "attractions/ascension-cathedral". */
  slug: string;
  /** Cluster label used for breadcrumb + internal grouping. */
  cluster: string;
  /** SEO title (keep <= ~60 chars). */
  title: string;
  /** Meta description (keep <= ~155 chars). */
  description: string;
  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
    image: string;
    imgAlt: string;
    chips?: string[];
  };
  sections: SubSection[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  related: RelatedLink[];
  /** Date the factual claims were last reviewed (shown near sources). */
  checked: string;
  /** Primary JSON-LD entity for the page. */
  schema?: 'TouristAttraction' | 'Place' | 'Article' | 'TouristTrip' | 'FAQPage';
  /** Optional coordinates for attraction/place pages (do not fabricate). */
  geo?: { latitude: number; longitude: number };
}
