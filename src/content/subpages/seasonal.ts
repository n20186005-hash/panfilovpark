import type { SubPage } from './types';
import { SRC } from './common';

const checked = '10 November 2026';

export const seasonal: SubPage[] = [
  {
    slug: 'seasonal/winter',
    cluster: 'Seasonal',
    title: 'Panfilov Park in Winter, Almaty | Snow, Light & Tips',
    description:
      'Visiting Panfilov Park in winter: snowy photography, lit memorials, cold-weather tips and what stays open.',
    hero: {
      eyebrow: 'Seasonal',
      h1: 'Panfilov Park in Winter',
      intro:
        'Snow turns the park into a quiet, photogenic scene — but cold and short days change how you should plan.',
      image: '/images/panfilov-memorial.jpg',
      imgAlt: 'Snow-covered memorial in Panfilov Park, Almaty, in winter',
      chips: ['Snowy scenes', 'Lit memorials', 'Dress warmly'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'Is winter worth it?',
        heading: 'A calm, white park',
        lead: 'Yes — if you like quiet, snow and strong contrasts.',
        body: [
          'Winter gives the park its most peaceful mood: snow on the cathedral towers, bare trees framing the memorial, and the Eternal Flame lit against the dark. Crowds thin and photos gain drama.',
          'The trade-off is cold, shorter daylight and potentially icy paths. The open park remains listed as accessible, but indoor venues keep their own schedules and weather can affect plans.',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Photo ideas',
        heading: 'Winter shots to try',
        columns: 2,
        items: [
          { title: 'Snowy cathedral', text: 'Towers and domes capped with snow read beautifully against blue sky.', icon: '⛪' },
          { title: 'Lit flame at dusk', text: 'The Eternal Flame pops against early nightfall.', icon: '🔥' },
          { title: 'Bare-tree lines', text: 'Avenues with snow on branches make clean leading lines.', icon: '🌳' },
          { title: 'Memorial in white', text: 'The Glory Memorial under snow is sober and photogenic.', icon: '🗿' },
        ],
      },
      {
        type: 'list',
        eyebrow: 'Cold-weather plan',
        heading: 'Before you go',
        items: [
          { title: 'Dress in layers', text: 'Hats, gloves and warm shoes; exposure is higher at the open memorial.' },
          { title: 'Watch paths', text: 'Snow and ice can make surfaces slippery — wear grippy soles.' },
          { title: 'Use daylight', text: 'Days are short; aim for late morning to mid-afternoon light.' },
          { title: 'Confirm indoors', text: 'Cathedral and museums follow their own winter schedules; verify.' },
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Rain/snow alternatives',
        text: 'If weather is harsh, pair the park with the indoor folk-instrument museum and the Green Bazaar; keep outdoor time brief.',
      },
    ],
    faq: [
      { q: 'Is Panfilov Park worth visiting in winter?', a: 'Yes for snowy, quiet scenes and strong photography; dress warmly and watch paths.' },
      { q: 'What should I wear?', a: 'Layers, hat, gloves and grippy warm shoes; exposure is higher in the open memorial.' },
      { q: 'Are indoor venues open?', a: 'The cathedral and museums keep their own winter schedules; verify before going.' },
      { q: 'When is light best?', a: 'Late morning to mid-afternoon, given short winter days; flame shots work at dusk.' },
    ],
    sources: [SRC.park, SRC.cathedral, SRC.maps],
    related: [
      { label: 'Spring & autumn guide', href: '/en/seasonal/spring-autumn/' },
      { label: 'Photography guide', href: '/en/photography/' },
      { label: 'Accessibility guide', href: '/en/accessibility/' },
      { label: 'Opening hours', href: '/en/opening-hours/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'seasonal/spring-autumn',
    cluster: 'Seasonal',
    title: 'Panfilov Park in Spring & Autumn, Almaty | Light & Itineraries',
    description:
      'Visiting Panfilov Park in spring and autumn: green gardens, colour and mild walking, plus how to combine park and city sights.',
    hero: {
      eyebrow: 'Seasonal',
      h1: 'Panfilov Park in Spring & Autumn',
      intro:
        'These shoulder seasons are the most comfortable for walking — green in spring, golden in autumn, and rarely too hot or too cold.',
      image: '/images/zenkov-cathedral.jpg',
      imgAlt: 'Cathedral and gardens of Panfilov Park in spring or autumn',
      chips: ['Mild weather', 'Good light', 'Best for walking'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'Why these seasons',
        heading: 'The comfortable middle',
        lead: 'Spring and autumn avoid summer heat and winter cold.',
        body: [
          'Late spring brings green gardens and long daylight; early autumn brings cooler air and warm, soft light with changing tree colour. Both suit a combined walking day with the bazaar and Arbat.',
          'Crowds are moderate outside holidays, and the park’s open layout is easiest to enjoy when you are not fighting heat or ice.',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Planning',
        heading: 'Pair park with the city',
        columns: 2,
        items: [
          { title: 'Spring gardens', text: 'Fresh green lawns and blossoms make the cathedral setting pop.', icon: '🌿' },
          { title: 'Autumn colour', text: 'Golden trees frame the memorial for warm photos.', icon: '🍂' },
          { title: 'Walk the loop', text: 'Comfortable weather means you can add the bazaar and Arbat on foot.', icon: '🚶' },
          { title: 'Long light', text: 'Extended daylight in spring/early autumn eases timing.', icon: '☀' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Religion & remembrance',
        heading: 'Be mindful of timing',
        body: [
          'In spring, Orthodox observances around the cathedral can affect interior access; in autumn, check for any local events at the square. As always, confirm indoor venue schedules for your date.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Verify indoor hours',
        text: 'Cathedral and museum schedules stay separate from the park’s 24-hour listing; confirm before you rely on them.',
      },
    ],
    faq: [
      { q: 'Is spring or autumn better?', a: 'Both are comfortable; spring is greenest, early autumn has the best light and colour. Avoid summer heat and winter cold.' },
      { q: 'Can I walk everywhere?', a: 'Yes — mild weather makes the park, bazaar and Arbat an easy combined walk.' },
      { q: 'Any events to watch?', a: 'Religious observances and local events can affect access; confirm cathedral and museum schedules.' },
      { q: 'What should I pack?', a: 'Light layers; a jacket for cooler mornings or evenings.' },
    ],
    sources: [SRC.park, SRC.cathedral, SRC.maps],
    related: [
      { label: 'Winter guide', href: '/en/seasonal/winter/' },
      { label: 'Best time to visit', href: '/en/best-time-to-visit/' },
      { label: 'Half-day Almaty tour', href: '/en/itineraries/half-day-almaty/' },
      { label: 'Green Bazaar', href: '/en/nearby/green-bazaar/' },
    ],
    checked,
    schema: 'Article',
  },
];
