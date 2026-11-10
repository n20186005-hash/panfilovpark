import type { SubPage } from './types';
import { SRC, HOME } from './common';

const cluster = 'Visitor information';
const checked = '10 November 2026';

export const visitor: SubPage[] = [
  {
    slug: 'opening-hours',
    cluster,
    title: 'Panfilov Park Opening Hours | Almaty Day & Night Access',
    description:
      'When Panfilov Park in Almaty is open, how the 24-hour public park differs from the cathedral and museums, and what to check before you visit.',
    hero: {
      eyebrow: 'Visitor information',
      h1: 'Panfilov Park Opening Hours',
      intro:
        'The public park is listed as open around the clock and free, but the cathedral, museums and memorial ceremony spaces keep their own schedules. Plan the open ground and each building separately.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Aerial view of 28 Panfilov Guardsmen Park in Almaty',
      chips: ['Public park: listed 24h', 'Free public access', 'Indoor venues: separate hours'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'At a glance',
        heading: 'The park ground vs. the buildings',
        lead: 'Treating the whole site as one timetable is the most common mistake visitors make.',
        body: [
          'Kazakhstan’s national tourism portal lists the park itself as open 24 hours and free of charge. That refers to the public grounds — the paths, trees, memorial square and open-air monuments — not to every gate, event or indoor institution inside or beside it.',
          'The Ascension Cathedral is an active Orthodox church with a worship-dependent schedule rather than fixed tourist hours. The on-site military and folk-instrument museums, and any ticketed exhibitions, follow their own published timetables that can differ by season and day of the week.',
          'So the practical answer to “what time does Panfilov Park open?” is: the open park is accessible day and night, while each indoor stop needs its own confirmation for the date you plan to come.',
        ],
      },
      {
        type: 'facts',
        eyebrow: 'Reference points',
        heading: 'What is listed, and what is not',
        items: [
          { k: 'Public park grounds', v: 'Listed 24 hours / free (national tourism portal; Maps snapshot 30 Oct 2026 also showed 24h).' },
          { k: 'Ascension Cathedral', v: 'Active church; operator states daytime visiting, closing 30 minutes after evening service. Not a fixed 09–18 timetable.' },
          { k: 'Museums on site', v: 'Separate operator schedules; verify the specific institution before adding an indoor stop.' },
          { k: 'Memorial & Eternal Flame', v: 'Open-air remembrance space within the park; no ticket office, but ceremony or restoration work can affect access.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Timing your visit',
        heading: 'Day vs. night at the park',
        body: [
          'Daytime is best for the cathedral interior, photography with natural light, and combining the park with nearby sights such as the Green Bazaar. The open memorial square is calm and photogenic after dark, when the Glory Memorial and Eternal Flame are lit, but indoor venues will be closed.',
          'If your goal is the cathedral or a museum, build the whole plan around that venue’s hours first, then fit the outdoor monuments around it. If your goal is a quiet walk and the lit memorial, an evening visit works well.',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Confirm before you travel',
        text: 'Public-holiday services, winter schedules, private events and restoration work can change what is open. Check the cathedral operator and the specific museum for your exact date rather than assuming the park’s 24-hour listing covers every building.',
      },
      {
        type: 'map',
        eyebrow: 'Find it',
        heading: 'Map of Panfilov Park',
        query: '28 Panfilov Guardsmen Park, Almaty, Kazakhstan',
        alt: 'Map of Panfilov Park (28 Panfilov Guardsmen Park), Almaty',
      },
    ],
    faq: [
      { q: 'Is Panfilov Park open 24 hours?', a: 'The public grounds are listed as open 24 hours and free. Indoor venues such as the cathedral and museums keep separate schedules, so confirm those individually.' },
      { q: 'What time does the Ascension Cathedral open?', a: 'It is an active church with a worship-dependent schedule; the operator states daytime visiting and closure about 30 minutes after the evening service. Verify the date with the cathedral.' },
      { q: 'Can I walk the park at night?', a: 'Yes, the open park is listed as accessible at night and the memorial is lit, but indoor venues will be closed and some paths may be dimmer — plan lighting and return transport.' },
      { q: 'Are the museums inside the park free too?', a: 'The public park is free, but museum admission and hours are set by each institution. Check the specific museum before you go.' },
    ],
    sources: [SRC.park, SRC.cathedral, SRC.memorial, SRC.maps],
    related: [
      { label: 'Is Panfilov Park free? Tickets & entry', href: '/en/tickets/', hint: 'What costs money and what does not.' },
      { label: 'How to get to Panfilov Park', href: '/en/how-to-get-there/' },
      { label: 'Ascension Cathedral guide', href: '/en/attractions/ascension-cathedral/' },
      { label: 'Best time to visit', href: '/en/best-time-to-visit/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'tickets',
    cluster,
    title: 'Is Panfilov Park Free? Tickets, Entry Fees & Visitor Guide',
    description:
      'Panfilov Park is free to enter. This guide separates the free public park from cathedral, museum and tour costs so you can budget correctly.',
    hero: {
      eyebrow: 'Visitor information',
      h1: 'Panfilov Park Tickets & Entry',
      intro:
        'The park itself is free and needs no ticket. Costs only appear for specific indoor venues or optional tours — and those are easy to confuse with park entry if you do not separate them.',
      image: '/images/panfilov-memorial.jpg',
      imgAlt: 'The Glory Memorial in 28 Panfilov Guardsmen Park, Almaty',
      chips: ['Park entry: free', 'No booking needed', 'Venues & tours: separate'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The short answer',
        heading: 'Walking into the park costs nothing',
        lead: 'You do not buy a ticket to stroll the grounds, see the Glory Memorial or view the Eternal Flame.',
        body: [
          'The national tourism portal lists the park as free, and there is no gate, turnstile or ticket booth at the public entrances. You can arrive on your own, walk the paths and visit the open-air memorial spaces without paying or booking.',
          'Where money enters the picture is with specific venues and services, not with the park itself. Keeping that distinction clear prevents two common errors: assuming a “park ticket” is required (it is not), and assuming a cathedral or museum visit is included in free park entry (it is not).',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Where cost may apply',
        heading: 'Free vs. paid at a glance',
        columns: 2,
        items: [
          { title: 'Public park & memorial', text: 'Free, open-air. No ticket, no reservation. Includes the Glory Memorial and Eternal Flame.', icon: '✓' },
          { title: 'Ascension Cathedral', text: 'An active church; worship is free to attend. Photography or tourist access during services follows the operator’s posted guidance.', icon: '⛪' },
          { title: 'Museums on site', text: 'The military and folk-instrument museums set their own admission and may charge; confirm the specific institution.', icon: '◫' },
          { title: 'Tours & transport', text: 'Private guides, city tours and cable cars (e.g. Kok Tobe) are separate purchases organised by third parties, not by the park.', icon: '↝' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Booking',
        heading: 'Do you need to reserve?',
        body: [
          'For independent visitors, no reservation is needed to enter the park or walk its open monuments. If you join a guided city tour that includes the park, the booking and any fee are with the tour operator, not the park.',
          'If you plan to visit a museum or attend a cathedral service, check that institution’s own admission and any advance-notice requirements. Do not treat a travel-agency “Almaty tour” ticket as park entry — the park remains free regardless.',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Avoid mixing up the layers',
        text: 'A paid city tour that lists the park as a stop is not a park ticket. The park stays free; you are paying the operator for guidance, transport or bundled sights.',
      },
    ],
    faq: [
      { q: 'Do I need a ticket for Panfilov Park?', a: 'No. The public park and its open-air memorials are free and unticketed. You can walk in without booking.' },
      { q: 'Is the Ascension Cathedral free?', a: 'Worship is free to attend as an active church. Tourist photography and access during services follow the cathedral operator’s posted rules; confirm directly with the cathedral.' },
      { q: 'Are the museums free?', a: 'Not necessarily. On-site museums set their own admission. Verify the specific museum’s current terms before visiting.' },
      { q: 'Should I book ahead?', a: 'Only if you join a third-party guided tour. Independent park entry needs no reservation.' },
    ],
    sources: [SRC.park, SRC.cathedral, SRC.maps],
    related: [
      { label: 'Panfilov Park opening hours', href: '/en/opening-hours/' },
      { label: 'How to get to Panfilov Park', href: '/en/how-to-get-there/' },
      { label: 'Glory Memorial guide', href: '/en/attractions/glory-memorial/' },
      { label: 'Kok Tobe (cable car is separate)', href: '/en/nearby/kok-tobe/' },
    ],
    checked,
    schema: 'FAQPage',
  },

  {
    slug: 'how-to-get-there',
    cluster,
    title: 'How to Get to Panfilov Park, Almaty | Metro, Bus & Taxi',
    description:
      'Ways to reach Panfilov Park in central Almaty by metro, bus, taxi or on foot, plus how to confirm the right entrance for your destination.',
    hero: {
      eyebrow: 'Visitor information',
      h1: 'How to Get to Panfilov Park',
      intro:
        'The park sits in central Almaty, walkable from several city sights. Choose your destination inside the park first — the cathedral, the memorial square or a museum — then confirm the nearest entrance.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Aerial view of Panfilov Park in central Almaty',
      chips: ['Central Almaty', 'Walkable from many sights', 'Confirm your entrance'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'First step',
        heading: 'Name the exact destination',
        lead: '“Panfilov Park” is a large green space; the right drop-off depends on what you came to see.',
        body: [
          'Type the full name with the city — “28 Panfilov Guardsmen Park, Almaty, Kazakhstan” — into your map app, then pick the entrance closest to your planned stop. The map pin marks the park area, not a guaranteed vehicle gate or the door of a specific building.',
          'If your priority is the Ascension Cathedral, route to the cathedral rather than the generic park pin. If it is the Glory Memorial or Eternal Flame, aim for the memorial square. This small step avoids a long cross-park walk with luggage or children.',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Options',
        heading: 'Ways to arrive',
        columns: 2,
        items: [
          { title: 'Metro', text: 'Almaty’s metro has stations within walking distance of the park; confirm the nearest exit for your entrance on the day of travel.', icon: 'M' },
          { title: 'Bus / public transport', text: 'Several city routes serve central Almaty. Check the current route, stop and fare with the operator; do not rely on a single older blog post.', icon: '🚌' },
          { title: 'Taxi / ride app', text: 'Convenient for direct drop-off. Ask the driver to use a legal stopping point and confirm parking limits near your entrance.', icon: '🚕' },
          { title: 'On foot', text: 'The park is walkable from the Green Bazaar, Arbat street and other central sights — ideal for a combined walking day.', icon: '🚶' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Driving',
        heading: 'Drop-off and parking',
        body: [
          'If a driver or tour drops you, agree on a legal stopping point and ask about parking restrictions and charges near your chosen entrance. A dedicated tourist-bus bay or guaranteed street space is not something this guide can promise.',
          'For a calm arrival, many visitors combine the park with the Green Bazaar on foot, then take a taxi onward to farther sights such as Kok Tobe or the Central Mosque.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Verify live conditions',
        text: 'Routes, stops, fares and service changes belong to the transport operators. Confirm current details for your travel date rather than trusting a static guide.',
      },
      {
        type: 'map',
        eyebrow: 'Plan the route',
        heading: 'Map of Panfilov Park',
        query: '28 Panfilov Guardsmen Park, Almaty, Kazakhstan',
        alt: 'Map of Panfilov Park, Almaty',
      },
    ],
    faq: [
      { q: 'Which metro station is nearest Panfilov Park?', a: 'Central Almaty metro stations are within walking distance; confirm the nearest exit for your chosen entrance on the day of travel.' },
      { q: 'Can I walk from the Green Bazaar?', a: 'Yes — the park is walkable from the Green Bazaar and Arbat street, making them easy to combine on foot.' },
      { q: 'Where should a taxi drop me?', a: 'Ask for a legal stopping point near the entrance closest to your destination (cathedral, memorial square or museum), and confirm parking limits.' },
      { q: 'Is there guaranteed parking?', a: 'No guaranteed tourist-bus bay or street space is promised; check restrictions and charges with your driver or the venue.' },
    ],
    sources: [SRC.park, SRC.maps],
    related: [
      { label: 'Panfilov Park map & entrances', href: '/en/map-entrances/' },
      { label: 'Opening hours', href: '/en/opening-hours/' },
      { label: 'Green Bazaar (walkable)', href: '/en/nearby/green-bazaar/' },
      { label: 'Arbat walking street', href: '/en/nearby/arbat-street/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'map-entrances',
    cluster,
    title: 'Panfilov Park Map & Entrances | Where to Enter in Almaty',
    description:
      'Understand Panfilov Park’s layout, where its entrances are, and how to navigate between the cathedral, Glory Memorial and Eternal Flame.',
    hero: {
      eyebrow: 'Visitor information',
      h1: 'Panfilov Park Map & Entrances',
      intro:
        'The park is a compact, walkable rectangle in central Almaty. Knowing the rough layout helps you enter nearest your goal and move efficiently between the main sights.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Aerial view of the layout of Panfilov Park, Almaty',
      chips: ['Walkable layout', 'Multiple entrances', 'Sights close together'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'Layout',
        heading: 'A compact memorial park',
        lead: 'The headline sights sit within a short walk of one another.',
        body: [
          'The Ascension Cathedral, the Glory Memorial and the Eternal Flame are clustered in the central part of the park, so most first-time visitors can see all three in one loop without covering much distance.',
          'Because the park is planted and partly enclosed by city streets, the “best” entrance depends on which sight you reach first. Approaching from the cathedral side, the memorial side, or a connecting street each work; there is no single official front gate that every visitor must use.',
        ],
      },
      {
        type: 'list',
        eyebrow: 'Navigating',
        heading: 'Moving between the sights',
        items: [
          { title: 'Cathedral → memorial', text: 'A few minutes on paved paths through the planted central avenue.' },
          { title: 'Memorial → Eternal Flame', text: 'The flame sits within the same remembrance ensemble; allow time to walk respectfully.' },
          { title: 'To the museums', text: 'On-site museums have their own doors and access; confirm the specific building entrance.' },
          { title: 'Exiting toward the city', text: 'Multiple gaps in the perimeter connect to side streets; pick the one nearest your next stop (bazaar, metro, taxi).' },
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'The map pin is not a gate',
        text: 'The supplied map point locates the park area, not a verified vehicle entrance or a specific building door. Confirm the entrance for your chosen venue rather than treating the pin as a street address.',
      },
      {
        type: 'map',
        eyebrow: 'Interactive map',
        heading: 'Locate the park',
        query: '28 Panfilov Guardsmen Park, Almaty, Kazakhstan',
        alt: 'Map of Panfilov Park, Almaty',
      },
    ],
    faq: [
      { q: 'Where is the main entrance?', a: 'There is no single official front gate every visitor must use; the park has several perimeter gaps. Enter nearest your first sight.' },
      { q: 'How far apart are the cathedral and the memorial?', a: 'They are clustered in the central park and a short paved walk apart, easily seen in one loop.' },
      { q: 'Can I drive to a specific building?', a: 'The map pin marks the park area, not a guaranteed vehicle gate. Arrange a legal drop-off near your destination with your driver.' },
      { q: 'Is the park easy to walk?', a: 'Yes — it is compact and the main sights are close, though surfaces and gradients vary; see the accessibility guide.' },
    ],
    sources: [SRC.park, SRC.maps],
    related: [
      { label: 'How to get to Panfilov Park', href: '/en/how-to-get-there/' },
      { label: 'Accessibility guide', href: '/en/accessibility/' },
      { label: 'Ascension Cathedral', href: '/en/attractions/ascension-cathedral/' },
      { label: 'Glory Memorial', href: '/en/attractions/glory-memorial/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'best-time-to-visit',
    cluster,
    title: 'Best Time to Visit Panfilov Park, Almaty | Season & Light Tips',
    description:
      'When to visit Panfilov Park for good light, fewer crowds and comfortable walking, plus how seasons change the cathedral, memorial and gardens.',
    hero: {
      eyebrow: 'Visitor information',
      h1: 'Best Time to Visit Panfilov Park',
      intro:
        'Late spring through early autumn offers the most comfortable walking and green gardens, while snowy winter gives a quiet, photogenic memorial. The “best” time depends on what you want from the visit.',
      image: '/images/panfilov-memorial.jpg',
      imgAlt: 'The Glory Memorial in Panfilov Park under seasonal light',
      chips: ['Spring–autumn: green & mild', 'Winter: snow & calm', 'Mornings: fewer people'],
    },
    sections: [
      {
        type: 'cards',
        eyebrow: 'Seasons',
        heading: 'What each season offers',
        columns: 2,
        items: [
          { title: 'Late spring (May–Jun)', text: 'Green gardens, mild temperatures and long daylight — comfortable for a combined walking day with the bazaar.', icon: '🌿' },
          { title: 'Summer (Jul–Aug)', text: 'Warm and lively; go early or late to avoid midday heat and peak crowds on open paths.', icon: '☀' },
          { title: 'Early autumn (Sep–Oct)', text: 'Cool, clear and good for photography; trees change colour and the light is soft.', icon: '🍂' },
          { title: 'Winter (Nov–Mar)', text: 'Snow transforms the memorial and cathedral setting; quieter but cold — dress warmly and watch paths.', icon: '❄' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Time of day',
        heading: 'Morning, midday or evening',
        body: [
          'Mornings are usually the calmest and give clean light for the cathedral’s façade. Midday is convenient if you are combining sights on foot. Evenings light the memorial and Eternal Flame and suit a reflective walk, though indoor venues will be closed.',
          'If the cathedral interior matters to you, plan around its worship-dependent schedule (see the opening-hours guide) rather than around the weather alone.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Match the season to your goal',
        text: 'Gardens and walking favour late spring to early autumn; snowy photography and a quiet memorial favour winter. Indoor venues follow their own hours in every season.',
      },
    ],
    faq: [
      { q: 'What is the best month to visit?', a: 'Late spring and early autumn are most comfortable for walking and photography, with mild weather and good light.' },
      { q: 'Is winter worth it?', a: 'Yes if you like snowy, quiet scenes and lit memorials; dress warmly and expect colder paths. Indoor venues keep their own schedules.' },
      { q: 'When are crowds lowest?', a: 'Mornings and weekdays are typically calmer than midday weekends.' },
      { q: 'Does the season affect the cathedral?', a: 'The cathedral follows a worship-dependent schedule year-round; verify the date rather than assuming seasonal tourist hours.' },
    ],
    sources: [SRC.park, SRC.cathedral, SRC.maps],
    related: [
      { label: 'Panfilov Park in winter', href: '/en/seasonal/winter/' },
      { label: 'Spring & autumn guide', href: '/en/seasonal/spring-autumn/' },
      { label: 'Opening hours', href: '/en/opening-hours/' },
      { label: 'Photography guide', href: '/en/photography/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'visit-duration',
    cluster,
    title: 'How Long to Spend at Panfilov Park, Almaty | 1–2 Hour Planning',
    description:
      'How much time to allow for Panfilov Park: a 30–60 minute memorial walk versus a 2-hour visit with the cathedral and museums.',
    hero: {
      eyebrow: 'Visitor information',
      h1: 'How Long to Spend at Panfilov Park',
      intro:
        'Most visitors spend 1–2 hours, but you can see the core memorial in under an hour. The right duration depends on whether you add the cathedral, museums and nearby sights.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Walking paths through Panfilov Park, Almaty',
      chips: ['Core loop: ~1 hour', 'With cathedral/museum: ~2h', 'Add city sights: half-day'],
    },
    sections: [
      {
        type: 'cards',
        eyebrow: 'Typical durations',
        heading: 'Pick the right window',
        columns: 3,
        items: [
          { title: '30–60 min', text: 'Cathedral exterior, Glory Memorial and Eternal Flame at a steady pace. Good for a transit break.', icon: '⏱' },
          { title: '1.5–2 hours', text: 'Adds time inside the cathedral (when open) and a slower, photo-friendly walk through the memorial.', icon: '⏳' },
          { title: 'Half-day+', text: 'Pairs the park with the folk-instrument museum, Green Bazaar and lunch within walking distance.', icon: '🗓' },
        ],
      },
      {
        type: 'list',
        eyebrow: 'What eats the time',
        heading: 'Factors that change your plan',
        items: [
          { title: 'Cathedral interior', text: 'Only when the worship-dependent schedule allows; build the visit around it.' },
          { title: 'Museum stops', text: 'On-site museums add their own duration; confirm before including them.' },
          { title: 'Photography', text: 'Golden-hour and detail shots can double a relaxed visit.' },
          { title: 'Access needs', text: 'Step-free routes, rest breaks and assistance requests add buffer time.' },
          { title: 'Return transport', text: 'Allow time to reach your next stop or taxi, especially in winter.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Planning',
        heading: 'A simple rule',
        body: [
          'Plan around the indoor venues first, then fit the open-air memorial around them. If everything is closed or you only want the monuments, an hour is enough; if you want the full experience plus the neighbourhood, block out a half-day.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'No single “correct” duration',
        text: 'There is no uniform visit length. Your time depends on the venues you choose, services or events, your access needs and return transport.',
      },
    ],
    faq: [
      { q: 'How long is a basic visit?', a: 'The core memorial and cathedral exterior can be seen in roughly 30–60 minutes at a steady pace.' },
      { q: 'How long with the cathedral and museums?', a: 'Allow 1.5–2 hours, more if museums or photography are included.' },
      { q: 'Can I do it as part of a half-day?', a: 'Yes — pair the park with the folk-instrument museum and the Green Bazaar for a natural half-day walk.' },
      { q: 'Is there a fixed recommended time?', a: 'No uniform duration is established; plan around your chosen venues and return transport.' },
    ],
    sources: [SRC.park, SRC.cathedral, SRC.maps],
    related: [
      { label: 'One-hour walking route', href: '/en/itineraries/one-hour-walk/' },
      { label: 'Two-hour cultural route', href: '/en/itineraries/two-hour-cultural-walk/' },
      { label: 'Opening hours', href: '/en/opening-hours/' },
      { label: 'Accessibility guide', href: '/en/accessibility/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'photography',
    cluster,
    title: 'Panfilov Park Photography Guide | Best Spots & Light in Almaty',
    description:
      'Where to photograph Panfilov Park: the Ascension Cathedral, Glory Memorial and Eternal Flame, with light tips and respectful etiquette.',
    hero: {
      eyebrow: 'Visitor information',
      h1: 'Panfilov Park Photography Guide',
      intro:
        'The park packs several photogenic subjects into a small area: a towering wooden cathedral, a sculpted memorial and a perpetually burning flame. Here is how to frame them respectfully.',
      image: '/images/zenkov-cathedral.jpg',
      imgAlt: 'Ascension Cathedral (Zenkov) in Panfilov Park, Almaty',
      chips: ['Cathedral hero shots', 'Lit memorial at dusk', 'Respectful etiquette'],
    },
    sections: [
      {
        type: 'cards',
        eyebrow: 'Spots',
        heading: 'Where to point the camera',
        columns: 2,
        items: [
          { title: 'Ascension Cathedral', text: 'Shoot from the open广场 for the full façade; side angles show the wooden towers against the trees. Interiors follow the church’s posted photography rules.', icon: '⛪' },
          { title: 'Glory Memorial', text: 'Wide shots capture the sculpted ensemble and symmetry; low angles emphasise the monument’s height.', icon: '🗿' },
          { title: 'Eternal Flame', text: 'Best at dusk or night when it is lit; use a steady hand or rest for longer exposures.', icon: '🔥' },
          { title: 'Tree-lined avenues', text: 'The planted central path gives leading-line compositions, especially in autumn colour or winter snow.', icon: '🌳' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Light',
        heading: 'Timing your shots',
        body: [
          'Morning light rakes across the cathedral façade; late afternoon warms the memorial; blue hour and dusk make the Eternal Flame and lit memorial pop. Overcast days soften contrast for detail shots of sculpture and timber.',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Ask before you shoot people and interiors',
        text: 'No site-specific current photography permission was verified. Follow posted signs, ask about restricted interiors or equipment, do not interrupt worship, and seek consent before photographing identifiable people.',
      },
    ],
    faq: [
      { q: 'When is the best light?', a: 'Mornings for the cathedral façade, late afternoon for the memorial, and dusk/blue hour for the lit Eternal Flame.' },
      { q: 'Can I photograph inside the cathedral?', a: 'Follow the church’s posted photography guidance and avoid interrupting worship; no specific current permission was verified.' },
      { q: 'Is the memorial good at night?', a: 'Yes — the Glory Memorial and Eternal Flame are lit and photogenic after dark, though indoor venues are closed.' },
      { q: 'Any etiquette rules?', a: 'Keep recreation off memorial surfaces, follow signs, and ask consent before photographing people.' },
    ],
    sources: [SRC.park, SRC.cathedral, SRC.maps],
    related: [
      { label: 'Best time to visit', href: '/en/best-time-to-visit/' },
      { label: 'Ascension Cathedral', href: '/en/attractions/ascension-cathedral/' },
      { label: 'Glory Memorial', href: '/en/attractions/glory-memorial/' },
      { label: 'Panfilov Park in winter', href: '/en/seasonal/winter/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'accessibility',
    cluster,
    title: 'Panfilov Park Accessibility Guide | Step-Free, Seniors & Families',
    description:
      'Accessibility at Panfilov Park, Almaty: what is step-free, surfaces and gradients to check, and questions to ask for wheelchair, senior and family visits.',
    hero: {
      eyebrow: 'Visitor information',
      h1: 'Panfilov Park Accessibility Guide',
      intro:
        'The park’s main paths are generally walkable, but full step-free routes, gradients and indoor accessibility vary. This guide explains what to verify before you go.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Pathways through Panfilov Park, Almaty',
      chips: ['Mostly flat paths', 'Verify gradients', 'Ask venues directly'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'What we know',
        heading: 'Access at the park level',
        lead: 'Map data marks an accessible entrance, but that is not the same as a surveyed step-free route.',
        body: [
          'Public map listings indicate an accessible entrance point for the park. That tells you there is a marked access point, not that every path, gradient, toilet or interior has been independently audited as step-free.',
          'The open ground is largely flat and paved, which suits most visitors, prams and many wheelchair users for a relaxed loop between the cathedral and the memorial. Specific gradients, kerbs, surfaces after snow, and indoor venues are the parts to confirm.',
        ],
      },
      {
        type: 'list',
        eyebrow: 'Questions to ask',
        heading: 'Before you travel',
        items: [
          { title: 'Surfaces & gradients', text: 'Ask the venue about path surfaces, slopes and any steps between entrances and the sights you want.' },
          { title: 'Toilets', text: 'Confirm accessible toilet locations; public parks do not always have step-free facilities near every entrance.' },
          { title: 'Indoor venues', text: 'The cathedral and museums set their own interior access; verify ramps, steps and assistance with each.' },
          { title: 'Assistance', text: 'If you need help, arrange it in advance and confirm meeting points with your driver or group.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Families & seniors',
        heading: 'Comfort tips',
        body: [
          'For families with prams and seniors, the central loop is short and shaded; build in rest breaks and toilet checks. In winter, watch for snow and ice on paths and allow extra time for a slower pace.',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Do not assume full step-free access',
        text: 'A marked accessible entrance is not proof of a fully surveyed step-free route or accessible interior. Ask the venue about surfaces, gradients, toilets and assistance for your specific needs.',
      },
    ],
    faq: [
      { q: 'Is Panfilov Park wheelchair accessible?', a: 'A map-listed accessible entrance exists and the ground is largely flat, but a fully surveyed step-free route and interiors are not confirmed. Ask the venue about gradients and toilets.' },
      { q: 'Are there accessible toilets?', a: 'Confirm accessible toilet locations with the venue; public parks may not have step-free facilities near every entrance.' },
      { q: 'Is it good for families with prams?', a: 'The short central loop is generally pram-friendly, but check surfaces and allow rest breaks and toilet stops.' },
      { q: 'What about winter?', a: 'Snow and ice can affect paths; allow extra time and verify conditions on the day.' },
    ],
    sources: [SRC.park, SRC.cathedral, SRC.maps],
    related: [
      { label: 'Map & entrances', href: '/en/map-entrances/' },
      { label: 'How long to spend', href: '/en/visit-duration/' },
      { label: 'Family-friendly itinerary', href: '/en/itineraries/family-visit/' },
      { label: 'Ascension Cathedral', href: '/en/attractions/ascension-cathedral/' },
    ],
    checked,
    schema: 'Article',
  },
];
