import type { SubPage } from './types';
import { SRC, HOME } from './common';

const checked = '10 November 2026';

export const attractions: SubPage[] = [
  {
    slug: 'attractions/ascension-cathedral',
    cluster: 'Park attractions',
    title: 'Ascension Cathedral, Almaty | Zenkov Wooden Cathedral in Panfilov Park',
    description:
      'The Ascension Cathedral (Zenkov Cathedral) in Panfilov Park: its wooden architecture, history, visiting etiquette and photography notes.',
    hero: {
      eyebrow: 'Inside the park',
      h1: 'Ascension Cathedral',
      intro:
        'A towering wooden Russian Orthodox cathedral built in the early 1900s, the Ascension Cathedral is the park’s most photographed landmark — and an active place of worship.',
      image: '/images/zenkov-cathedral.jpg',
      imgAlt: 'Ascension Cathedral (Zenkov Cathedral) in Panfilov Park, Almaty',
      chips: ['Wooden cathedral', 'Active Orthodox church', 'Early-1900s landmark'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The building',
        heading: 'A wooden cathedral that defied the earthquakes',
        lead: 'Few city-centre cathedrals are built almost entirely of timber — this is one of the most famous.',
        body: [
          'The Ascension Cathedral, often called the Zenkov Cathedral after the architect Andrey Pavlovich Zenkov, was built in the first decade of the 20th century (commonly dated to 1904–1907) in the then-new garden city that became Panfilov Park.',
          'Its distinctive feature is construction largely in wood, with a tall, colourful tiered tower and onion domes that rise above the trees. Local accounts credit the structure with surviving the 1911 Kebin (Chile–Almaty) earthquake with little damage, which added to its reputation.',
          'Today it remains an active Orthodox church, so the building serves worshippers as much as visitors. That dual role shapes when and how you can go inside.',
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Visiting',
        heading: 'Hours, services and access',
        body: [
          'The cathedral operator states it is open through the day for visiting and closes about 30 minutes after the evening service. The national tourism portal instead lists a daytime window; use the operator’s service-dependent notice and confirm your date directly with the cathedral.',
          'Because it is a working church, interior access, photography and dress expectations follow worship. During services the space is for congregants; a quiet, respectful walk-through is usually possible at other times, but no fixed “tourist hours” are guaranteed.',
        ],
      },
      {
        type: 'list',
        eyebrow: 'Etiquette',
        heading: 'Before you go inside',
        items: [
          { title: 'Services first', text: 'Worship takes priority over sightseeing; step back during services.' },
          { title: 'Dress & behaviour', text: 'Modest dress and quiet voices are appropriate in an active church.' },
          { title: 'Photography', text: 'Follow posted signs and ask about restricted interiors; do not interrupt worship.' },
          { title: 'People', text: 'Seek consent before photographing identifiable individuals.' },
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Confirm the schedule',
        text: 'No separate current operator admission tariff was verified, and the visiting window depends on services. Check the cathedral’s own notice for your date rather than assuming fixed tourist hours.',
      },
      {
        type: 'map',
        eyebrow: 'Location',
        heading: 'Map of the cathedral',
        query: 'Ascension Cathedral, Panfilov Park, Almaty, Kazakhstan',
        alt: 'Map of the Ascension Cathedral in Panfilov Park',
      },
    ],
    faq: [
      { q: 'Is the Ascension Cathedral made of wood?', a: 'Yes — it is one of the few large wooden cathedrals, built in the early 1900s and known for surviving the 1911 earthquake with little damage.' },
      { q: 'When can I visit inside?', a: 'The operator states daytime visiting, closing about 30 minutes after evening service. Confirm the date with the cathedral, as it is a working church.' },
      { q: 'Is there an entrance fee?', a: 'Worship is free to attend; no separate current operator admission tariff was verified. Respect service times and posted guidance.' },
      { q: 'Can I take photos?', a: 'Follow posted signs and ask about restricted interiors; do not interrupt worship and seek consent for people.' },
    ],
    sources: [SRC.cathedral, SRC.park, SRC.maps],
    related: [
      { label: 'Panfilov Park opening hours', href: '/en/opening-hours/' },
      { label: 'Glory Memorial', href: '/en/attractions/glory-memorial/' },
      { label: 'Eternal Flame', href: '/en/attractions/eternal-flame/' },
      { label: 'Two-hour cultural route', href: '/en/itineraries/two-hour-cultural-walk/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'attractions/glory-memorial',
    cluster: 'Park attractions',
    title: 'Glory Memorial, Panfilov Park | History & Visitor Guide',
    description:
      'The Glory Memorial in Panfilov Park, Almaty: its history, sculpture, meaning and respectful visiting etiquette.',
    hero: {
      eyebrow: 'Inside the park',
      h1: 'Glory Memorial',
      intro:
        'The central monument of the park, the Glory Memorial honours the sacrifice of war and anchors the park’s identity as a place of remembrance.',
      image: '/images/panfilov-memorial.jpg',
      imgAlt: 'The Glory Memorial in 28 Panfilov Guardsmen Park, Almaty',
      chips: ['Central monument', 'Remembrance space', 'Open-air, free'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'Background',
        heading: 'What the memorial commemorates',
        lead: 'The monument is the emotional and visual centre of the park.',
        body: [
          'The city administration dates the present name of the park to 1942 and the Glory Memorial’s opening to 8 May 1975, the 30th anniversary of victory in the Second World War. The memorial forms the focal point of a remembrance ensemble that includes the Eternal Flame.',
          'The sculpted group and surrounding space are designed for reflection rather than recreation. Visitors typically walk the area quietly, read the inscriptions, and use it as the starting point for understanding the park’s name and purpose.',
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Seeing it',
        heading: 'What to expect on site',
        body: [
          'The memorial is open-air and free to approach at any time the park is accessible. Sculpture, bas-reliefs and inscribed names make it photogenic, especially in low evening light. Nearby barriers and signs mark the respectful boundaries of the space.',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Treat it as a memorial, not a playground',
        text: 'Keep recreation off memorial surfaces, follow current barriers and signs, and avoid climbing or posing on the sculpture. A city restoration article from February 2025 is historical context, not evidence of current works or closure.',
      },
    ],
    faq: [
      { q: 'What does the Glory Memorial commemorate?', a: 'It honours wartime sacrifice and anchors the park’s identity as a remembrance space; the city dates its opening to 8 May 1975.' },
      { q: 'Is it free to visit?', a: 'Yes — it is an open-air memorial within the free public park.' },
      { q: 'Can I take photos?', a: 'Yes, respectfully; avoid climbing on the sculpture and follow posted signs.' },
      { q: 'Is it connected to the Eternal Flame?', a: 'Yes — the flame is part of the same remembrance ensemble beside the memorial.' },
    ],
    sources: [SRC.memorial, SRC.park, SRC.maps],
    related: [
      { label: 'Eternal Flame', href: '/en/attractions/eternal-flame/' },
      { label: 'History of the 28 Panfilov Guardsmen', href: '/en/history/28-panfilov-guardsmen/' },
      { label: 'Photography guide', href: '/en/photography/' },
      { label: 'One-hour walking route', href: '/en/itineraries/one-hour-walk/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'attractions/eternal-flame',
    cluster: 'Park attractions',
    title: 'Eternal Flame, Panfilov Park | Meaning & Visiting Notes',
    description:
      'The Eternal Flame in Panfilov Park, Almaty: its place in the memorial ensemble, what it honours, and how to visit respectfully.',
    hero: {
      eyebrow: 'Inside the park',
      h1: 'Eternal Flame',
      intro:
        'A perpetually burning flame within the memorial ensemble, the Eternal Flame is a quiet, symbolic focal point beside the Glory Memorial.',
      image: '/images/panfilov-memorial.jpg',
      imgAlt: 'The Eternal Flame in Panfilov Park, Almaty',
      chips: ['Part of the memorial', 'Always lit', 'Respectful space'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'Meaning',
        heading: 'A flame that stays lit',
        lead: 'The Eternal Flame is a symbolic, continuously burning memorial fire.',
        body: [
          'Set within the same remembrance landscape as the Glory Memorial, the Eternal Flame honours those who died in war. Its “eternal” character — kept lit without interruption — is the universal language of such memorials, and it reads clearly even to visitors who do not read the inscriptions.',
          'Because it is paired with the memorial sculpture, most visitors experience the two together as one reflective stop rather than separate sights.',
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Visiting',
        heading: 'Best seen at dusk',
        body: [
          'The flame is open-air and free, reachable whenever the park is accessible. It is most atmospheric after dark, when it is lit against the darker memorial — a good reason to include the park in an evening walk. Indoor venues will be closed then.',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Keep it respectful',
        text: 'This is a remembrance space. Avoid recreation on or around the flame, follow signs and barriers, and keep noise low so others can reflect.',
      },
    ],
    faq: [
      { q: 'What does the Eternal Flame honour?', a: 'It is a symbolic, continuously burning memorial fire within the park’s remembrance ensemble beside the Glory Memorial.' },
      { q: 'Is it free and open?', a: 'Yes — it is open-air within the free public park, reachable whenever the grounds are accessible.' },
      { q: 'When is it best to see?', a: 'After dark, when the lit flame stands out against the memorial; indoor venues are closed then.' },
      { q: 'Can I photograph it?', a: 'Yes, respectfully; it is especially photogenic at dusk and blue hour.' },
    ],
    sources: [SRC.memorial, SRC.park, SRC.maps],
    related: [
      { label: 'Glory Memorial', href: '/en/attractions/glory-memorial/' },
      { label: 'History of the 28 Panfilov Guardsmen', href: '/en/history/28-panfilov-guardsmen/' },
      { label: 'Photography guide', href: '/en/photography/' },
      { label: 'Panfilov Park at night (hours)', href: '/en/opening-hours/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'attractions/musical-instruments-museum',
    cluster: 'Park attractions',
    title: 'Ykylas Museum of Folk Musical Instruments, Almaty',
    description:
      'The Ykylas Museum of Folk Musical Instruments in Panfilov Park: traditional Kazakh instruments, the historic building and visiting notes.',
    hero: {
      eyebrow: 'Inside the park',
      h1: 'Museum of Folk Musical Instruments',
      intro:
        'Housed in a handsome historic wooden building, this museum celebrates Kazakhstan’s traditional instruments — from the dombra to the kobyz.',
      image: '/images/zenkov-cathedral.jpg',
      imgAlt: 'Historic wooden building in Panfilov Park, Almaty',
      chips: ['Traditional instruments', 'Historic building', 'Indoor venue — separate hours'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The collection',
        heading: 'Kazakhstan’s musical heritage under one roof',
        lead: 'The museum is named after Ykylas, a noted Kazakh composer and dombra player.',
        body: [
          'The museum focuses on the traditional instruments of Kazakhstan and neighbouring cultures: the dombra (a long-necked lute central to Kazakh music), the kobyz (a bowed string instrument), the sybyzgy (flute) and many regional variants.',
          'The building itself is part of the experience — a wooden historic structure within the park that matches the garden-city character of the surroundings. Exhibits usually combine instruments, portraits and context on how the music fits Kazakh oral tradition.',
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Visiting',
        heading: 'An indoor stop with its own schedule',
        body: [
          'As an indoor museum, it keeps separate admission and hours from the open park. Confirm the specific institution’s opening times, ticket terms and any guided-concert schedule before adding it to your day; do not assume the park’s 24-hour listing covers it.',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Verify before you go',
        text: 'Museum hours, admission and any live-performance schedule change. Check the institution directly for your date; a park-level listing does not substitute for the museum’s own terms.',
      },
    ],
    faq: [
      { q: 'What is in the museum?', a: 'Traditional Kazakh and regional instruments such as the dombra, kobyz and sybyzgy, with context on musical heritage.' },
      { q: 'Is it inside Panfilov Park?', a: 'Yes — it occupies a historic wooden building within the park grounds.' },
      { q: 'Do I need a separate ticket?', a: 'The museum sets its own admission; confirm current ticket terms with the institution, as it is separate from free park entry.' },
      { q: 'What are the opening hours?', a: 'Indoor venues keep their own schedule; verify the museum’s hours for your date rather than the park’s 24-hour listing.' },
    ],
    sources: [SRC.park, SRC.maps],
    related: [
      { label: 'Ascension Cathedral', href: '/en/attractions/ascension-cathedral/' },
      { label: 'Opening hours', href: '/en/opening-hours/' },
      { label: 'Two-hour cultural route', href: '/en/itineraries/two-hour-cultural-walk/' },
      { label: 'Half-day Almaty walking tour', href: '/en/itineraries/half-day-almaty/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'attractions/military-history-museum',
    cluster: 'Park attractions',
    title: 'Military History Museum, Panfilov Park | Visitor Guide',
    description:
      'The Military History Museum in Panfilov Park, Almaty: what it covers, how it relates to the park’s name, and visiting notes.',
    hero: {
      eyebrow: 'Inside the park',
      h1: 'Military History Museum',
      intro:
        'A museum within the park that expands on the military history behind the park’s name and memorials.',
      image: '/images/panfilov-memorial.jpg',
      imgAlt: 'Memorial and museum area of Panfilov Park, Almaty',
      chips: ['Themed museum', 'Indoor venue', 'Separate hours & tickets'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'Context',
        heading: 'The museum and the park’s story',
        lead: 'The national park listing mentions a military museum among the park’s features.',
        body: [
          'The museum extends the themes of the Glory Memorial and the park’s name: the 316th Rifle Division and the defence of Moscow in 1941. Exhibits typically cover uniforms, documents, weapons and personal items, though the exact collection and any renovation status change over time.',
          'Treat it as a complement to the open-air memorial: the monument gives the emotional frame, the museum adds the documented detail.',
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Visiting',
        heading: 'Check before adding it',
        body: [
          'As an indoor institution it has its own entrance, programme and ticket terms, distinct from the free park. Confirm the specific museum, its hours and admission before your visit; a park-level listing does not cover it.',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Confirm the institution',
        text: 'Before visiting, verify the specific museum, its entrance, programme and ticket conditions; do not assume the general park card applies to the indoor venue.',
      },
    ],
    faq: [
      { q: 'What does the museum cover?', a: 'It expands on the military history behind the park’s name and memorials, typically with uniforms, documents and artefacts.' },
      { q: 'Is it free with the park?', a: 'No — as an indoor venue it sets its own admission; confirm ticket terms with the institution.' },
      { q: 'Where is it?', a: 'Within Panfilov Park; confirm the specific building entrance before you go.' },
      { q: 'What are the hours?', a: 'Indoor venues keep separate schedules; verify with the museum for your date.' },
    ],
    sources: [SRC.park, SRC.memorial, SRC.maps],
    related: [
      { label: 'History of the 28 Panfilov Guardsmen', href: '/en/history/28-panfilov-guardsmen/' },
      { label: 'Glory Memorial', href: '/en/attractions/glory-memorial/' },
      { label: 'Opening hours', href: '/en/opening-hours/' },
      { label: 'Architecture & monuments', href: '/en/history/architecture-monuments/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'history/28-panfilov-guardsmen',
    cluster: 'History',
    title: 'History of the 28 Panfilov Guardsmen | Fact vs. Legend',
    description:
      'The story of the 28 Panfilov Guardsmen: the 316th Rifle Division, the defence of Moscow, and how scholarship treats the famous account.',
    hero: {
      eyebrow: 'History',
      h1: 'The 28 Panfilov Guardsmen',
      intro:
        'The park is named for a division and a famous wartime story. This page separates the documented history from the commemorative legend.',
      image: '/images/panfilov-memorial.jpg',
      imgAlt: 'The Glory Memorial commemorating the Panfilov Guardsmen, Almaty',
      chips: ['316th Rifle Division', 'Defence of Moscow, 1941', 'Legend vs. record'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The division',
        heading: 'Panfilov’s division and the defence of Moscow',
        lead: 'The name connects Almaty to one of the Second World War’s best-known units.',
        body: [
          'The national tourism portal associates the park’s name with the 316th Rifle Division, commanded by General Ivan Panfilov, and its role in the defence of Moscow in 1941. Many of the division’s soldiers came from Central Asia, which is why the memory is strongly rooted in Kazakhstan.',
          'The city administration dates the present name of the park to 1942, tying the green space to the division’s honour.',
        ],
      },
      {
        type: 'prose',
        eyebrow: 'The famous account',
        heading: 'Twenty-eight guardsmen: story and scholarship',
        body: [
          'The most familiar version tells of 28 guardsmen who, under Panfilov’s command, held a position against overwhelming armour. It is a powerful commemorative narrative that the memorial preserves.',
          'Scholarly research, however, has challenged details of that account — including exact numbers and specific events. This guide describes the memorial’s purpose and the division’s documented history without presenting disputed battle totals or a reconstructed engagement as settled fact.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Commemoration and evidence are different',
        text: 'The memorial honours the division and its sacrifice. Precise battlefield claims about the 28 are contested by historians; this page reflects the commemorative tradition while noting the scholarly debate.',
      },
    ],
    faq: [
      { q: 'Who were the Panfilov Guardsmen?', a: 'They refer to the 316th Rifle Division under General Ivan Panfilov, associated with the 1941 defence of Moscow; the park is named in their honour.' },
      { q: 'Is the story of 28 men accurate?', a: 'It is a strong commemorative narrative, but historians have challenged details such as exact numbers and events. Treat precise battle claims as disputed.' },
      { q: 'Why is the park named for them?', a: 'The city dates the name to 1942, linking the park to the division’s honour and the defence of Moscow.' },
      { q: 'Where can I read the sources?', a: 'See the national tourism portal, the city memorial history notice and historical scholarship linked on this page.' },
    ],
    sources: [SRC.park, SRC.memorial, SRC.maps],
    related: [
      { label: 'Glory Memorial', href: '/en/attractions/glory-memorial/' },
      { label: 'Eternal Flame', href: '/en/attractions/eternal-flame/' },
      { label: 'Architecture & monuments', href: '/en/history/architecture-monuments/' },
      { label: 'Military History Museum', href: '/en/attractions/military-history-museum/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'history/architecture-monuments',
    cluster: 'History',
    title: 'Architecture & Monuments of Panfilov Park, Almaty',
    description:
      'The designed landscape of Panfilov Park: the wooden cathedral, the memorial sculpture, the flame and how the ensemble was planned.',
    hero: {
      eyebrow: 'History',
      h1: 'Architecture & Monuments',
      intro:
        'The park is a layered landscape — a garden-city setting, a wooden cathedral, and a 1970s memorial ensemble — that rewards a slower look.',
      image: '/images/zenkov-cathedral.jpg',
      imgAlt: 'Wooden cathedral and monuments within Panfilov Park, Almaty',
      chips: ['Garden-city layout', 'Wooden cathedral', '1975 memorial ensemble'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The setting',
        heading: 'A planned green space',
        lead: 'The park’s character comes from how its pieces were arranged, not from a single building.',
        body: [
          'The park began as a garden-city green space in the early 20th century, the same moment that produced the wooden Ascension Cathedral. Tree-lined avenues and open lawns give the memorials a calm frame.',
          'The commemorative layer was added later: the Glory Memorial opened in 1975 (per the city administration), with the Eternal Flame as part of the remembrance ensemble. The result is a coherent walk from tranquil gardens to solemn monument.',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Key elements',
        heading: 'What to look for',
        columns: 2,
        items: [
          { title: 'Wooden cathedral', text: 'Early-1900s timber architecture with tiered towers and domes — the park’s signature silhouette.', icon: '⛪' },
          { title: 'Glory Memorial', text: 'Sculpted 1975 ensemble that anchors the park’s meaning as a place of remembrance.', icon: '🗿' },
          { title: 'Eternal Flame', text: 'A continuously burning memorial fire within the same ensemble.', icon: '🔥' },
          { title: 'Avenues & lawns', text: 'Planted paths and open ground that separate the contemplative monument from the lively city beyond.', icon: '🌳' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Reading the park',
        heading: 'A short walk tells the story',
        body: [
          'Approach from the gardens, meet the cathedral, then move to the memorial and flame. The shift in mood — from green calm to solemn remembrance — is the park’s real “architecture.”',
        ],
      },
    ],
    faq: [
      { q: 'When was the park laid out?', a: 'As a garden-city green space in the early 20th century; the city dates the present memorial name to 1942 and the Glory Memorial to 1975.' },
      { q: 'What style is the cathedral?', a: 'A wooden Russian Orthodox cathedral with tiered towers and domes, built in the early 1900s.' },
      { q: 'How old is the memorial?', a: 'The Glory Memorial opened in 1975, with the Eternal Flame as part of the ensemble.' },
      { q: 'Is the layout worth a guided look?', a: 'Yes — the sequence from gardens to cathedral to memorial is the park’s defining experience.' },
    ],
    sources: [SRC.park, SRC.memorial, SRC.cathedral, SRC.maps],
    related: [
      { label: 'Ascension Cathedral', href: '/en/attractions/ascension-cathedral/' },
      { label: 'Glory Memorial', href: '/en/attractions/glory-memorial/' },
      { label: 'History of the 28 Panfilov Guardsmen', href: '/en/history/28-panfilov-guardsmen/' },
      { label: 'Two-hour cultural route', href: '/en/itineraries/two-hour-cultural-walk/' },
    ],
    checked,
    schema: 'Article',
  },
];
