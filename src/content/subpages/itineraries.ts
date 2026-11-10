import type { SubPage } from './types';
import { SRC } from './common';

const checked = '10 November 2026';

export const itineraries: SubPage[] = [
  {
    slug: 'itineraries/one-hour-walk',
    cluster: 'Itineraries',
    title: 'Panfilov Park 1-Hour Walking Route, Almaty',
    description:
      'A focused 1-hour walk through Panfilov Park: the cathedral exterior, Glory Memorial and Eternal Flame, ideal for a short stop.',
    hero: {
      eyebrow: 'Itineraries',
      h1: '1-Hour Park Walk',
      intro:
        'Short on time? This loop covers the park’s three headline sights at a steady pace — perfect for a transit break or a first taste.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Walking loop through Panfilov Park, Almaty',
      chips: ['~60 min', 'Core sights', 'Easy pace'],
    },
    sections: [
      {
        type: 'steps',
        eyebrow: 'The route',
        heading: 'One loop, three sights',
        items: [
          { title: 'Enter at the gardens', text: 'Start on the planted avenue and orient toward the cathedral silhouette.' },
          { title: 'Ascension Cathedral (exterior)', text: 'Walk the façade and towers; note it is an active church — keep voices low.' },
          { title: 'Glory Memorial', text: 'A few minutes on to the central monument; read the inscriptions and take wide shots.' },
          { title: 'Eternal Flame', text: 'Finish at the flame within the same ensemble, then exit toward your next stop or taxi.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Notes',
        heading: 'Make it work',
        body: [
          'This route assumes the open park only; it does not include cathedral interior time (which follows a worship-dependent schedule) or museums. If you want those, move to the two-hour route.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Pace depends on you',
        text: 'Actual time varies with walking speed, photos and crowds. Build in buffer if you have a connection afterwards.',
      },
    ],
    faq: [
      { q: 'Can I see the park in an hour?', a: 'Yes — the core loop of cathedral exterior, Glory Memorial and Eternal Flame fits about an hour at a steady pace.' },
      { q: 'Does this include the cathedral inside?', a: 'No — interior access follows the church’s schedule. For that, use the two-hour route and confirm the time.' },
      { q: 'Is it suitable before a flight?', a: 'It is a compact, central loop; just keep buffer time for return transport.' },
      { q: 'What if I want photos?', a: 'Allow extra minutes at the memorial and flame; the one-hour plan is the minimum.' },
    ],
    sources: [SRC.park, SRC.maps],
    related: [
      { label: 'Two-hour cultural route', href: '/en/itineraries/two-hour-cultural-walk/' },
      { label: 'Ascension Cathedral', href: '/en/attractions/ascension-cathedral/' },
      { label: 'Glory Memorial', href: '/en/attractions/glory-memorial/' },
      { label: 'How long to spend', href: '/en/visit-duration/' },
    ],
    checked,
    schema: 'TouristTrip',
  },

  {
    slug: 'itineraries/two-hour-cultural-walk',
    cluster: 'Itineraries',
    title: 'Panfilov Park 2-Hour Cultural Route, Almaty',
    description:
      'A 2-hour cultural route: Panfilov Park, the Ascension Cathedral, the folk-instrument museum and the Green Bazaar.',
    hero: {
      eyebrow: 'Itineraries',
      h1: '2-Hour Cultural Route',
      intro:
        'Add depth to the park with the cathedral, a museum of traditional instruments and the market — a balanced culture-and-monuments morning.',
      image: '/images/zenkov-cathedral.jpg',
      imgAlt: 'Ascension Cathedral and museum within Panfilov Park',
      chips: ['~2 hours', 'Park + museum + bazaar', 'Cultural focus'],
    },
    sections: [
      {
        type: 'steps',
        eyebrow: 'The route',
        heading: 'Park, cathedral, museum, market',
        items: [
          { title: 'Panfilov Park & memorial', text: 'Begin at the Glory Memorial and Eternal Flame for the reflective core.' },
          { title: 'Ascension Cathedral', text: 'Move to the wooden cathedral; if the schedule allows, step inside respectfully.' },
          { title: 'Museum of Folk Instruments', text: 'Visit the historic building and its dombra/kobyz collection (confirm hours).' },
          { title: 'Green Bazaar & lunch', text: 'Walk south to the bazaar for snacks, produce and a casual meal.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Before you go',
        heading: 'Confirm the indoor stops',
        body: [
          'The museum and cathedral follow their own schedules. Verify both for your date so the two-hour plan holds together; if a venue is closed, swap in more time at the bazaar or a café.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Indoor venues set the clock',
        text: 'This route only works smoothly if the cathedral and museum are open when you arrive. Check both before committing to the timing.',
      },
    ],
    faq: [
      { q: 'What is included in 2 hours?', a: 'The park memorials, the Ascension Cathedral, the folk-instrument museum and the Green Bazaar with lunch.' },
      { q: 'Do I need to book the museum?', a: 'Confirm the museum’s current hours and admission; book only if it requires it.' },
      { q: 'Is this walkable?', a: 'Yes — the park, cathedral, museum and bazaar chain together on foot.' },
      { q: 'What if a venue is closed?', a: 'Swap closed indoor time for the bazaar or a café; the route is flexible.' },
    ],
    sources: [SRC.park, SRC.maps, SRC.cathedral],
    related: [
      { label: '1-hour park walk', href: '/en/itineraries/one-hour-walk/' },
      { label: 'Museum of Folk Instruments', href: '/en/attractions/musical-instruments-museum/' },
      { label: 'Green Bazaar', href: '/en/nearby/green-bazaar/' },
      { label: 'Half-day Almaty tour', href: '/en/itineraries/half-day-almaty/' },
    ],
    checked,
    schema: 'TouristTrip',
  },

  {
    slug: 'itineraries/half-day-almaty',
    cluster: 'Itineraries',
    title: 'Half-Day Almaty Walking Tour | Park, Museum & Bazaar',
    description:
      'A half-day Almaty plan linking Panfilov Park, the cathedral, the folk-instrument museum, the Green Bazaar and a lunch stop.',
    hero: {
      eyebrow: 'Itineraries',
      h1: 'Half-Day Almaty Tour',
      intro:
        'Stretch the cultural route into a relaxed half-day with more time at each stop and a proper lunch.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Half-day walking route across central Almaty',
      chips: ['~4–5 hours', 'Park + city sights', 'Leisurely'],
    },
    sections: [
      {
        type: 'steps',
        eyebrow: 'The route',
        heading: 'A slower, richer loop',
        items: [
          { title: 'Panfilov Park', text: 'Spend 60–90 min on the memorials and cathedral at ease.' },
          { title: 'Museum of Folk Instruments', text: 'Add a proper visit to the instrument collection.' },
          { title: 'Green Bazaar', text: 'Browse produce, dried fruit and souvenirs; taste as you go.' },
          { title: 'Lunch nearby', text: 'Eat at a bazaar-area eatery or a central restaurant.' },
          { title: 'Arbat & café', text: 'End with a stroll and coffee on the pedestrian street.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Why half a day',
        heading: 'Room to breathe',
        body: [
          'A half-day removes the rush: longer at the memorial, time inside the museum, a real meal and a café finish. It suits travellers who would rather enjoy fewer things well.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Confirm indoor hours',
        text: 'The museum and cathedral keep separate schedules; verify both so the half-day flows.',
      },
    ],
    faq: [
      { q: 'How long is the half-day tour?', a: 'About 4–5 hours with a relaxed pace and a lunch break.' },
      { q: 'Is it all walkable?', a: 'Yes — park, museum, bazaar and Arbat chain together on foot in central Almaty.' },
      { q: 'Can I add Kok Tobe?', a: 'Kok Tobe needs a cable car and more time; better in the one-day plan.' },
      { q: 'What if it rains?', a: 'Indoor options (museum, bazaar, cafés) keep the half-day viable.' },
    ],
    sources: [SRC.park, SRC.maps],
    related: [
      { label: '2-hour cultural route', href: '/en/itineraries/two-hour-cultural-walk/' },
      { label: 'One-day Almaty itinerary', href: '/en/itineraries/one-day-almaty/' },
      { label: 'Green Bazaar', href: '/en/nearby/green-bazaar/' },
      { label: 'Cafés near the park', href: '/en/food/cafes-near-panfilov-park/' },
    ],
    checked,
    schema: 'TouristTrip',
  },

  {
    slug: 'itineraries/one-day-almaty',
    cluster: 'Itineraries',
    title: 'One-Day Almaty Itinerary | Park, Culture & Kok Tobe',
    description:
      'A full-day Almaty plan: Panfilov Park, cathedral, museums, bazaar, Republic Square, the opera and Kok Tobe at sunset.',
    hero: {
      eyebrow: 'Itineraries',
      h1: 'One-Day Almaty',
      intro:
        'Everything in a day: morning monuments, midday culture and market, and a hilltop sunset to close it out.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Full-day route across Almaty including Kok Tobe',
      chips: ['~8–10 hours', 'City-wide', 'Sunset finish'],
    },
    sections: [
      {
        type: 'steps',
        eyebrow: 'The route',
        heading: 'From memorials to the mountain',
        items: [
          { title: 'Morning: Panfilov Park', text: 'Memorials, cathedral and (if open) the folk-instrument museum.' },
          { title: 'Late morning: Green Bazaar', text: 'Market food and souvenirs, then lunch nearby.' },
          { title: 'Afternoon: city culture', text: 'Almaty Museum, Republic Square and the Abay Opera exterior.' },
          { title: 'Late afternoon: Kok Tobe', text: 'Cable car up for viewpoints and a walk.' },
          { title: 'Sunset', text: 'Watch the light fade over the city and ranges, then return.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Logistics',
        heading: 'Getting around',
        body: [
          'The morning is walkable; the afternoon uses taxis or metro between squares and theatres; Kok Tobe needs the cable car. Confirm cable-car hours and any venue closures so the day holds together.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'It is a full day',
        text: 'Pace it; skip a stop if you prefer depth over coverage. Verify Kok Tobe cable-car hours and weather before committing the sunset finish.',
      },
    ],
    faq: [
      { q: 'Can I see Almaty in one day?', a: 'Yes — a full day covers the park, museums, bazaar, squares, the opera and Kok Tobe, though it is packed.' },
      { q: 'Do I need a taxi?', a: 'The morning is walkable; afternoon squares and Kok Tobe are easier by taxi or metro.' },
      { q: 'Is Kok Tobe included?', a: 'Yes as the sunset finish; confirm cable-car hours and weather.' },
      { q: 'What if I am short on time?', a: 'Drop the afternoon city sights and keep the park + bazaar + Kok Tobe core.' },
    ],
    sources: [SRC.park, SRC.maps, SRC.cathedral],
    related: [
      { label: 'Half-day Almaty tour', href: '/en/itineraries/half-day-almaty/' },
      { label: 'Kok Tobe', href: '/en/nearby/kok-tobe/' },
      { label: 'Republic Square', href: '/en/nearby/republic-square/' },
      { label: 'Abay Opera and Ballet Theatre', href: '/en/nearby/abay-opera-theatre/' },
    ],
    checked,
    schema: 'TouristTrip',
  },

  {
    slug: 'itineraries/family-visit',
    cluster: 'Itineraries',
    title: 'Family-Friendly Panfilov Park Itinerary, Almaty',
    description:
      'A family plan for Panfilov Park: open space, the cathedral, a museum and the bazaar, paced for children and prams.',
    hero: {
      eyebrow: 'Itineraries',
      h1: 'Family Visit',
      intro:
        'A calm, flexible plan that keeps kids moving, interested and rested — without rushing the memorial’s reflective mood.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Family walking through Panfilov Park, Almaty',
      chips: ['Kid-paced', 'Open space', 'Pram-friendly loop'],
    },
    sections: [
      {
        type: 'steps',
        eyebrow: 'The route',
        heading: 'Gentle and flexible',
        items: [
          { title: 'Arrive relaxed', text: 'Enter where there is open lawn so children can move before the monuments.' },
          { title: 'Cathedral exterior', text: 'Towers and colours interest kids; keep it brief and quiet near the church.' },
          { title: 'Memorial & flame', text: 'Explain simply; treat the space respectfully without climbing.' },
          { title: 'Bazaar break', text: 'Snacks, fruit and a casual bite keep energy up.' },
          { title: 'Café rest', text: 'End with a café stop on the Arbat for a breather.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Tips',
        heading: 'For prams and little legs',
        body: [
          'The central loop is short and mostly flat, but check surfaces and allow toilet and rest breaks. In winter, watch paths for snow and ice and pack warm layers.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Access for families',
        text: 'A map-listed accessible entrance exists, but full step-free routes and toilet access vary. Ask the venue about surfaces, gradients and assistance for prams or wheelchairs.',
      },
    ],
    faq: [
      { q: 'Is the park good for kids?', a: 'Yes — open space, a colourful cathedral and a short loop keep children engaged without long walks.' },
      { q: 'Is it pram-friendly?', a: 'The central loop is largely flat, but verify surfaces and toilet access; allow rest breaks.' },
      { q: 'How long with children?', a: 'About 1.5–2 hours with breaks, snacks and a café finish.' },
      { q: 'What about winter?', a: 'Dress warmly and watch paths for ice; keep the visit shorter.' },
    ],
    sources: [SRC.park, SRC.maps],
    related: [
      { label: 'Accessibility guide', href: '/en/accessibility/' },
      { label: '1-hour park walk', href: '/en/itineraries/one-hour-walk/' },
      { label: 'Green Bazaar', href: '/en/nearby/green-bazaar/' },
      { label: 'Cafés near the park', href: '/en/food/cafes-near-panfilov-park/' },
    ],
    checked,
    schema: 'TouristTrip',
  },
];
