import type { SubPage } from './types';
import { SRC } from './common';

const checked = '10 November 2026';
const kt = { label: 'Kazakhstan.travel — Almaty attractions', url: 'https://www.kazakhstan.travel/en' };

export const nearby: SubPage[] = [
  {
    slug: 'nearby/green-bazaar',
    cluster: 'Nearby Almaty',
    title: 'Green Bazaar, Almaty | Market, Food & How to Get There',
    description:
      'The Green Bazaar near Panfilov Park: what to buy, how to get there on foot, and how to visit the market respectfully.',
    hero: {
      eyebrow: 'Nearby Almaty',
      h1: 'Green Bazaar',
      intro:
        'A short walk from Panfilov Park, the Green Bazaar (Zelyony Bazaar) is Almaty’s central market — the easiest place to taste the city’s food culture.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Central Almaty streets near the Green Bazaar',
      chips: ['Central market', 'Walkable from park', 'Food & souvenirs'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The market',
        heading: 'A working city market',
        lead: 'Unlike a museum, the bazaar is where Almaty shops and eats every day.',
        body: [
          'The Green Bazaar is a large covered market selling dried fruit, nuts, spices, meat, cheese, bread and seasonal produce, with surrounding stalls for snacks and souvenirs. It is busy, sensory and very local — a good counterpoint to the quiet park.',
          'It sits within walking distance of Panfilov Park, which makes the two a natural pair: monuments in the morning, market and lunch afterwards.',
        ],
      },
      {
        type: 'list',
        eyebrow: 'What to try',
        heading: 'Typical finds',
        items: [
          { title: 'Dried fruit & nuts', text: 'Kazakhstan’s dried apricots, raisins and nuts are popular take-home gifts.' },
          { title: 'Kurt & cheese', text: 'Traditional dairy — kurt (dried salted cheese balls) and local cheeses.' },
          { title: 'Fresh produce', text: 'Seasonal fruit and vegetables; prices vary by season and stall.' },
          { title: 'Snacks', text: 'Nearby counters and cafés serve quick bites; verify what is open on the day.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Getting there',
        heading: 'On foot from the park',
        body: [
          'The bazaar is walkable from the park’s southern side. Use a map app to pick the entrance nearest the section you want, and confirm current opening days — markets can have quieter weekdays and busier weekends.',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Confirm market hours locally',
        text: 'Opening days and stall availability change. Check current hours and any renovation notices before you go; this guide does not promise specific times.',
      },
    ],
    faq: [
      { q: 'How far is the Green Bazaar from Panfilov Park?', a: 'It is within walking distance; most visitors pair the two on foot in a single morning.' },
      { q: 'What can I buy?', a: 'Dried fruit, nuts, spices, cheese, bread, produce and souvenirs — it is a working market, not a tourist hall.' },
      { q: 'What are the opening hours?', a: 'Markets vary by day; confirm current hours locally before visiting.' },
      { q: 'Is it good for food?', a: 'Yes — it is the easiest place near the park to sample local food culture and buy snacks.' },
    ],
    sources: [kt, SRC.maps],
    related: [
      { label: 'Kazakh food near the park', href: '/en/food/kazakh-food/' },
      { label: 'Street food at the bazaar', href: '/en/food/green-bazaar-street-food/' },
      { label: 'How to get to Panfilov Park', href: '/en/how-to-get-there/' },
      { label: 'Half-day Almaty walking tour', href: '/en/itineraries/half-day-almaty/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'nearby/arbat-street',
    cluster: 'Nearby Almaty',
    title: 'Arbat Walking Street, Almaty | Street Art, Cafés & Culture',
    description:
      'Almaty’s Arbat (Zhibek Zholy pedestrian street): what to see, cafés, street performers and how it links to Panfilov Park.',
    hero: {
      eyebrow: 'Nearby Almaty',
      h1: 'Arbat Walking Street',
      intro:
        'A pedestrian street of cafés, art and street life — an easy, lively add-on to a park visit.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Pedestrian street scene in central Almaty',
      chips: ['Pedestrian street', 'Cafés & art', 'Easy add-on'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The street',
        heading: 'Almaty’s open-air promenade',
        lead: 'Known locally as the Arbat, this pedestrian stretch is for strolling, not transit.',
        body: [
          'The Arbat (along Zhibek Zholy) is a car-free promenade with cafés, souvenir stalls, portrait artists and occasional street performers. It is the kind of place you wander rather than tick off a list.',
          'It is close enough to Panfilov Park to combine on foot, especially as a relaxed end to a sightseeing morning.',
        ],
      },
      {
        type: 'list',
        eyebrow: 'What to do',
        heading: 'On the Arbat',
        items: [
          { title: 'Café stops', text: 'Numerous outdoor cafés for coffee or ice cream.' },
          { title: 'Art & portraits', text: 'Artists and sketch sellers line the street; prices are set per vendor.' },
          { title: 'Souvenirs', text: 'Stalls sell crafts and gifts — compare a few before buying.' },
          { title: 'People-watching', text: 'Street performers and a relaxed local crowd make it lively.' },
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Hours and vendors vary',
        text: 'Stalls and performances appear on their own schedule; some are weekend-focused. Verify what is open on your visit date.',
      },
    ],
    faq: [
      { q: 'What is the Arbat in Almaty?', a: 'A pedestrian promenade (along Zhibek Zholy) with cafés, art, souvenirs and street life.' },
      { q: 'Is it near Panfilov Park?', a: 'Yes — close enough to combine on foot after the park.' },
      { q: 'What is there to do?', a: 'Cafés, portrait artists, souvenir stalls and occasional performers.' },
      { q: 'When is it busiest?', a: 'Weekends and evenings tend to be liveliest; vendor presence varies by day.' },
    ],
    sources: [kt, SRC.maps],
    related: [
      { label: 'Cafés near Panfilov Park', href: '/en/food/cafes-near-panfilov-park/' },
      { label: 'Green Bazaar', href: '/en/nearby/green-bazaar/' },
      { label: 'How to get to Panfilov Park', href: '/en/how-to-get-there/' },
      { label: 'One-day Almaty itinerary', href: '/en/itineraries/one-day-almaty/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'nearby/central-mosque',
    cluster: 'Nearby Almaty',
    title: 'Almaty Central Mosque | Visiting Guide & Etiquette',
    description:
      'The Almaty Central Mosque: scale, architecture, visiting etiquette and how it fits a Panfilov Park day.',
    hero: {
      eyebrow: 'Nearby Almaty',
      h1: 'Almaty Central Mosque',
      intro:
        'One of Central Asia’s largest mosques, the Almaty Central Mosque is a striking example of contemporary Islamic architecture.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Domes and minarets of a large mosque in Almaty',
      chips: ['Large mosque', 'Modern architecture', 'Dress & etiquette'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The building',
        heading: 'A landmark of scale',
        lead: 'The Central Mosque is among the biggest in the region, with a tall main dome and minarets.',
        body: [
          'The mosque is a major city landmark, notable for its size, blue-toned interior, large central hall and courtyard. It serves a working congregation and is also visited for its architecture.',
          'It lies some distance from Panfilov Park, so treat it as a separate destination reached by taxi or public transport rather than a walk from the park.',
        ],
      },
      {
        type: 'list',
        eyebrow: 'Visiting',
        heading: 'Etiquette to follow',
        items: [
          { title: 'Dress modestly', text: 'Cover shoulders and knees; women may be asked to cover hair.' },
          { title: 'Remove shoes', text: 'Shoes are removed before entering the carpeted prayer hall.' },
          { title: 'Respect prayer times', text: 'The hall is for worship during prayers; visit quietly between them.' },
          { title: 'Ask before photos', text: 'Photography of people, especially worshippers, needs consent.' },
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Confirm visiting access',
        text: 'Opening for visitors, prayer times and any tourist restrictions change. Check the mosque’s current guidance for your date.',
      },
    ],
    faq: [
      { q: 'How big is the Almaty Central Mosque?', a: 'It is one of the largest in Central Asia, with a tall main dome, minarets and a large prayer hall.' },
      { q: 'Is it near Panfilov Park?', a: 'No — it is a separate destination; reach it by taxi or public transport.' },
      { q: 'Can tourists visit?', a: 'Generally yes outside prayer times; follow dress and behaviour etiquette and confirm current access.' },
      { q: 'What should I wear?', a: 'Modest dress covering shoulders and knees; women may cover hair. Remove shoes inside.' },
    ],
    sources: [kt, SRC.maps],
    related: [
      { label: 'How to get to Panfilov Park', href: '/en/how-to-get-there/' },
      { label: 'Abay Opera and Ballet Theatre', href: '/en/nearby/abay-opera-theatre/' },
      { label: 'Republic Square', href: '/en/nearby/republic-square/' },
      { label: 'One-day Almaty itinerary', href: '/en/itineraries/one-day-almaty/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'nearby/arasan-baths',
    cluster: 'Nearby Almaty',
    title: 'Arasan Baths, Almaty | Soviet-Era Bathhouse Experience',
    description:
      'The Arasan Baths near Panfilov Park: the historic bathhouse experience, what to expect, and visiting notes.',
    hero: {
      eyebrow: 'Nearby Almaty',
      h1: 'Arasan Baths',
      intro:
        'A rare Soviet-era public bathhouse, the Arasan Baths offer a traditional steam-and-plunge experience in central Almaty.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Historic bathhouse building in Almaty',
      chips: ['Historic baths', 'Steam & plunge', 'Central location'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The baths',
        heading: 'A working piece of Soviet leisure',
        lead: 'Arasan is a large public bathhouse rather than a spa hotel.',
        body: [
          'The Arasan Baths are a historic public bathing complex with separate facilities for men and women, steam rooms and cold plunges — a continuation of Central Asian bath traditions in a Soviet-built setting.',
          'Its central location makes it a feasible add-on to a park-and-bazaar day, though it is an experience with its own etiquette and schedule rather than a quick photo stop.',
        ],
      },
      {
        type: 'list',
        eyebrow: 'What to know',
        heading: 'Before you go',
        items: [
          { title: 'Separate sections', text: 'Facilities are typically divided by gender; confirm the current arrangement.' },
          { title: 'Bring supplies', text: 'Towel and slippers may be rented or brought; check what is provided.' },
          { title: 'Schedule', text: 'Opening hours and session times change; verify before arriving.' },
          { title: 'Etiquette', text: 'Follow local bathhouse customs and staff guidance.' },
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Verify access and hours',
        text: 'Session times, prices and what is provided vary. Confirm directly with the baths for your visit date; this guide does not list specific tariffs.',
      },
    ],
    faq: [
      { q: 'What are the Arasan Baths?', a: 'A historic public bathhouse in central Almaty with steam rooms and cold plunges, separated by gender.' },
      { q: 'Are they near Panfilov Park?', a: 'Yes — central enough to combine with a park and bazaar day.' },
      { q: 'What should I bring?', a: 'Towel and slippers may be rented or brought; confirm what the baths provide.' },
      { q: 'What are the hours?', a: 'Session times and prices change; verify with the baths before you go.' },
    ],
    sources: [kt, SRC.maps],
    related: [
      { label: 'Green Bazaar', href: '/en/nearby/green-bazaar/' },
      { label: 'Kazakh food near the park', href: '/en/food/kazakh-food/' },
      { label: 'How to get to Panfilov Park', href: '/en/how-to-get-there/' },
      { label: 'Where to stay near the park', href: '/en/stay/hotels-near-panfilov-park/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'nearby/almaty-museum',
    cluster: 'Nearby Almaty',
    title: 'Almaty Museum | City History & Visiting Guide',
    description:
      'The Almaty Museum (former Shakhvorostov mansion): what it covers, the historic building, and how to visit.',
    hero: {
      eyebrow: 'Nearby Almaty',
      h1: 'Almaty Museum',
      intro:
        'Housed in a preserved early-20th-century mansion, the Almaty Museum tells the story of the city and region.',
      image: '/images/zenkov-cathedral.jpg',
      imgAlt: 'Historic mansion housing the Almaty Museum',
      chips: ['City history', 'Historic building', 'Indoor museum'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The museum',
        heading: 'The city’s story in a historic house',
        lead: 'The museum occupies a preserved mansion, adding architecture to the exhibits.',
        body: [
          'The Almaty Museum is set in a historic residence (often described as the former Shakhvorostov mansion) and covers the city’s development, culture and notable figures. The building itself — with period detail — is part of the visit.',
          'As an indoor museum it keeps its own hours and admission, separate from the free park. It works well as a calm, air-conditioned counterpart to an outdoor day.',
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Visiting',
        heading: 'Plan as an indoor stop',
        body: [
          'Confirm the museum’s current opening days, ticket terms and any guided options before you go. Pair it with the park and cathedral for a balanced culture-and-monuments day.',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Confirm before visiting',
        text: 'Museum hours, admission and exhibition status change; verify with the institution for your date.',
      },
    ],
    faq: [
      { q: 'What is the Almaty Museum?', a: 'A city-history museum in a preserved early-20th-century mansion, covering Almaty’s development and culture.' },
      { q: 'Is it near Panfilov Park?', a: 'Within central Almaty; reachable by taxi or a longer walk combined with other sights.' },
      { q: 'Do I need a ticket?', a: 'As an indoor museum it sets its own admission; confirm current terms.' },
      { q: 'What are the hours?', a: 'Indoor venues keep their own schedule; verify with the museum for your date.' },
    ],
    sources: [kt, SRC.maps],
    related: [
      { label: 'Ascension Cathedral', href: '/en/attractions/ascension-cathedral/' },
      { label: 'Military History Museum', href: '/en/attractions/military-history-museum/' },
      { label: 'Half-day Almaty walking tour', href: '/en/itineraries/half-day-almaty/' },
      { label: 'Opening hours', href: '/en/opening-hours/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'nearby/kok-tobe',
    cluster: 'Nearby Almaty',
    title: 'Kok Tobe, Almaty | Hilltop Views, Cable Car & How to Visit',
    description:
      'Kok Tobe hill above Almaty: the cable car, viewpoints, attractions and how to combine it with Panfilov Park.',
    hero: {
      eyebrow: 'Nearby Almaty',
      h1: 'Kok Tobe',
      intro:
        'The green hill on the city’s edge, reached by cable car, gives the best panoramic views of Almaty and the mountains beyond.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Hilltop viewpoint above Almaty',
      chips: ['Hilltop views', 'Cable car', 'City combo, not walkable'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The hill',
        heading: 'Almaty from above',
        lead: 'Kok Tobe is a mountain-edge recreation area, not a park within walking distance.',
        body: [
          'Kok Tobe (“Green Hill”) sits on the southeastern edge of the city and is most easily reached by cable car from the lower station. At the top there are viewpoints, a small amusement area and space to walk with the skyline and Trans-Ili Alatau ranges behind.',
          'Because it is farther from the centre, position it as a city-wide combo with Panfilov Park rather than a walk from the park. A typical plan is monuments in the morning and Kok Tobe for sunset.',
        ],
      },
      {
        type: 'list',
        eyebrow: 'On top',
        heading: 'What to expect',
        items: [
          { title: 'Cable car', text: 'The cable car is the main way up; confirm current operation and fares.' },
          { title: 'Viewpoints', text: 'Open decks and rails look back over the city and mountains.' },
          { title: 'Walks & attractions', text: 'A small recreation zone with paths and family features; specifics change by season.' },
          { title: 'Timing', text: 'Late afternoon to sunset is the most popular window for light.' },
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'It is not next to the park',
        text: 'Kok Tobe is a separate hillside destination reached by cable car or road, not a walk from Panfilov Park. Verify cable-car hours, fares and weather before you go.',
      },
    ],
    faq: [
      { q: 'How do I get to Kok Tobe?', a: 'Mainly by cable car from the lower station; confirm current operation and fares.' },
      { q: 'Is it walkable from Panfilov Park?', a: 'No — it is a hillside destination across the city; treat it as a separate combo stop.' },
      { q: 'What is there to do?', a: 'Viewpoints over the city and mountains, a small recreation zone and walking paths.' },
      { q: 'When should I go?', a: 'Late afternoon to sunset is popular for the light; check cable-car hours and weather.' },
    ],
    sources: [kt, SRC.maps],
    related: [
      { label: 'One-day Almaty itinerary', href: '/en/itineraries/one-day-almaty/' },
      { label: 'Half-day Almaty walking tour', href: '/en/itineraries/half-day-almaty/' },
      { label: 'Best time to visit', href: '/en/best-time-to-visit/' },
      { label: 'Where to stay near the park', href: '/en/stay/hotels-near-panfilov-park/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'nearby/republic-square',
    cluster: 'Nearby Almaty',
    title: 'Republic Square, Almaty | History & Visiting Guide',
    description:
      'Republic Square in Almaty: its role in Kazakhstan’s independence, the monument, and how to visit.',
    hero: {
      eyebrow: 'Nearby Almaty',
      h1: 'Republic Square',
      intro:
        'The city’s grand central square and the site of key moments in Kazakhstan’s modern history.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Open central square in Almaty',
      chips: ['Central square', 'Independence monument', 'Civic history'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The square',
        heading: 'Where modern Kazakhstan was celebrated',
        lead: 'Republic Square is the city’s main civic space and a backdrop for national events.',
        body: [
          'Republic Square is associated with Kazakhstan’s independence and hosts the Independence Monument, a tall column with symbolic relief. It is a large open space used for state occasions rather than a crowded attraction.',
          'It is some distance from Panfilov Park, so visit it as part of a broader city tour (often paired with the opera or museum district) rather than on foot from the park.',
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Visiting',
        heading: 'A quick, open-air stop',
        body: [
          'The square is free and open; most visitors spend a short time for photos and context. Combine it with nearby cultural sights for an efficient city loop.',
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Event closures possible',
        text: 'As a civic square, it may be restricted during state events. Check for closures on your date if you plan to visit.',
      },
    ],
    faq: [
      { q: 'What is Republic Square known for?', a: 'Almaty’s main civic square and the site of the Independence Monument, linked to Kazakhstan’s modern history.' },
      { q: 'Is it near Panfilov Park?', a: 'No — it is a separate city-centre stop, best paired with the opera or museum district.' },
      { q: 'Is it free?', a: 'Yes — it is an open public square.' },
      { q: 'How long to spend?', a: 'Usually a short photo-and-context stop.' },
    ],
    sources: [kt, SRC.maps],
    related: [
      { label: 'Abay Opera and Ballet Theatre', href: '/en/nearby/abay-opera-theatre/' },
      { label: 'Almaty Museum', href: '/en/nearby/almaty-museum/' },
      { label: 'One-day Almaty itinerary', href: '/en/itineraries/one-day-almaty/' },
      { label: 'How to get to Panfilov Park', href: '/en/how-to-get-there/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },

  {
    slug: 'nearby/abay-opera-theatre',
    cluster: 'Nearby Almaty',
    title: 'Abay Opera and Ballet Theatre, Almaty | Visiting Guide',
    description:
      'The Abay Opera and Ballet Theatre: its historic building, what to see, and how to attend a performance.',
    hero: {
      eyebrow: 'Nearby Almaty',
      h1: 'Abay Opera and Ballet Theatre',
      intro:
        'A landmark of Almaty’s cultural life, the Abay Opera and Ballet Theatre is as impressive inside as the performances it hosts.',
      image: '/images/zenkov-cathedral.jpg',
      imgAlt: 'Grand theatre façade in Almaty',
      chips: ['Historic theatre', 'Opera & ballet', 'Box office separate'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The theatre',
        heading: 'A cultural landmark',
        lead: 'The Abay Opera and Ballet Theatre is one of Almaty’s signature cultural buildings.',
        body: [
          'Named after the poet Abay Qunanbayuli, the theatre stages opera and ballet in a grand historic building with an ornate interior. Even a foyer visit is worthwhile if you enjoy architecture.',
          'It is not next to Panfilov Park; reach it by taxi or as part of a city-centre culture loop with Republic Square and the museums.',
        ],
      },
      {
        type: 'list',
        eyebrow: 'Attending',
        heading: 'If you go to a show',
        items: [
          { title: 'Check the schedule', text: 'Performances and the season vary; confirm what is on during your visit.' },
          { title: 'Book tickets', text: 'Buy through the official box office or authorised seller; verify before paying.' },
          { title: 'Dress', text: 'Smart-casual to formal is common for evening performances.' },
          { title: 'Arrive early', text: 'Allow time for the building, cloakroom and seating.' },
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'Confirm the programme',
        text: 'Performance dates, availability and ticket terms change. Verify with the theatre’s official box office for your dates; this guide does not list a current schedule.',
      },
    ],
    faq: [
      { q: 'What is the Abay Opera and Ballet Theatre?', a: 'A landmark Almaty theatre staging opera and ballet in a grand historic building.' },
      { q: 'Is it near Panfilov Park?', a: 'No — reach it by taxi or as part of a city-centre culture loop.' },
      { q: 'Can I watch a performance?', a: 'Yes if scheduled; check the programme and book via the official box office.' },
      { q: 'Is the building worth seeing?', a: 'Yes — the historic interior is notable even for a short foyer visit.' },
    ],
    sources: [kt, SRC.maps],
    related: [
      { label: 'Republic Square', href: '/en/nearby/republic-square/' },
      { label: 'Almaty Museum', href: '/en/nearby/almaty-museum/' },
      { label: 'One-day Almaty itinerary', href: '/en/itineraries/one-day-almaty/' },
      { label: 'Where to stay near the park', href: '/en/stay/hotels-near-panfilov-park/' },
    ],
    checked,
    schema: 'TouristAttraction',
  },
];
