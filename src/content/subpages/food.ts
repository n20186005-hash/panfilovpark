import type { SubPage } from './types';
import { SRC } from './common';

const checked = '10 November 2026';
const verify = {
  type: 'callout' as const,
  tone: 'warn' as const,
  title: 'Verify before you go',
  text: 'This guide does not list live prices, ratings or guaranteed opening times. Restaurant, café and hotel status changes often — confirm the exact address, branch, hours and availability with the business (or a current map listing) before you travel or book.',
};

export const food: SubPage[] = [
  {
    slug: 'food/restaurants-near-panfilov-park',
    cluster: 'Food & stay',
    title: 'Best Restaurants Near Panfilov Park, Almaty',
    description:
      'Where to eat near Panfilov Park: dining areas, cuisine types and how to choose verified restaurants within walking or short taxi distance.',
    hero: {
      eyebrow: 'Food & stay',
      h1: 'Restaurants Near Panfilov Park',
      intro:
        'The streets around the park and toward the Green Bazaar hold Almaty’s densest dining options. This guide shows how to choose, not a fixed ranking.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Central Almaty streets with restaurants near Panfilov Park',
      chips: ['Walkable options', 'Many cuisines', 'Verify before booking'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'Where to look',
        heading: 'Two easy dining zones',
        lead: 'You do not need to go far for a good meal after the park.',
        body: [
          'The first zone is the park’s immediate surroundings and the pedestrian Arbat, where cafés and restaurants cluster for a post-sightseeing lunch. The second is the Green Bazaar area, a few minutes’ walk south, where casual eateries and market-food counters sit side by side.',
          'For a wider choice, a short taxi reaches the city’s main dining streets. Pick by cuisine and current reviews rather than by a single “best” list, which goes stale quickly.',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Choosing',
        heading: 'How to pick well',
        columns: 2,
        items: [
          { title: 'Cuisine first', text: 'Decide between Kazakh, Central Asian, Caucasian, Asian or international, then filter by area.', icon: '🍽' },
          { title: 'Check the branch', text: 'Many Almaty names are chains; confirm the exact branch nearest the park.', icon: '📍' },
          { title: 'Read recent reviews', text: 'Use a current map app and sort by recent; old blog lists mislead.', icon: '⭐' },
          { title: 'Confirm hours', text: 'Kitchens and closing times vary; call or check the listing for the day.', icon: '🕑' },
        ],
      },
      {
        type: 'list',
        eyebrow: 'Examples to research',
        heading: 'Well-known Almaty names (verify)',
        items: [
          { title: 'Kazakh & Central Asian', text: 'Established local-cuisine restaurants exist near the centre; look up current branches and hours.' },
          { title: 'Caucasian & grills', text: 'Several grill houses serve within a short taxi of the park; confirm the nearest one.' },
          { title: 'International', text: 'Pan-Asian and European options sit along the main dining streets; verify what is open.' },
        ],
      },
      verify,
    ],
    faq: [
      { q: 'Where should I eat after the park?', a: 'The Arbat and Green Bazaar areas are walkable; a short taxi reaches more choices. Pick by cuisine and recent reviews.' },
      { q: 'Are there Kazakh restaurants nearby?', a: 'Yes — several local-cuisine restaurants operate in central Almaty; verify the exact branch and hours.' },
      { q: 'What does a meal cost?', a: 'This guide does not list live prices; check the venue’s current menu or a map listing for typical ranges.' },
      { q: 'Do I need a reservation?', a: 'For popular dinner spots, yes — confirm with the restaurant for your date and party size.' },
    ],
    sources: [SRC.maps, SRC.park],
    related: [
      { label: 'Cafés near Panfilov Park', href: '/en/food/cafes-near-panfilov-park/' },
      { label: 'Kazakh food near the park', href: '/en/food/kazakh-food/' },
      { label: 'Green Bazaar street food', href: '/en/food/green-bazaar-street-food/' },
      { label: 'Where to stay near the park', href: '/en/stay/hotels-near-panfilov-park/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'food/cafes-near-panfilov-park',
    cluster: 'Food & stay',
    title: 'Best Cafés Near Panfilov Park, Almaty',
    description:
      'Cafés near Panfilov Park for coffee, cake and a rest: where they cluster, what to expect and how to find one open now.',
    hero: {
      eyebrow: 'Food & stay',
      h1: 'Cafés Near Panfilov Park',
      intro:
        'For a coffee break between monuments, the park’s edges and the Arbat have the easiest cafés to drop into.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Café terrace in central Almaty near Panfilov Park',
      chips: ['Coffee breaks', 'Walkable', 'Verify opening'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'The scene',
        heading: 'Coffee within a short walk',
        lead: 'Almaty has a strong café culture; you are rarely far from an espresso.',
        body: [
          'Cafés line the Arbat and the streets around the park, ranging from quick stand-and-sip counters to sit-down terraces. They are ideal for a mid-morning break or an afternoon rest after the memorial walk.',
          'Specialty-coffee shops, bakery-cafés and chain branches all exist; the right one depends on whether you want a quiet table, wifi, or just a fast coffee to keep moving.',
        ],
      },
      {
        type: 'list',
        eyebrow: 'Picking one',
        heading: 'What to check',
        items: [
          { title: 'Opening hours', text: 'Some cafés open early, others mid-morning; verify for the day.' },
          { title: 'Seating', text: 'If you need a table for a group, confirm space or book.' },
          { title: 'Wi-fi', text: 'Not all cafés offer reliable wifi; check if you need to work.' },
          { title: 'Dietary', text: 'Ask about milk alternatives and allergens at the counter.' },
        ],
      },
      verify,
    ],
    faq: [
      { q: 'Are there cafés near the park?', a: 'Yes — the Arbat and surrounding streets have many, from quick counters to terrace cafés.' },
      { q: 'Where is the best coffee?', a: 'This guide does not rank; use a current map app sorted by recent reviews near your location.' },
      { q: 'Can I work from a café?', a: 'Some offer wifi and seating; confirm before settling in with a group.' },
      { q: 'What are the hours?', a: 'They vary; verify the specific café’s opening time for the day.' },
    ],
    sources: [SRC.maps, SRC.park],
    related: [
      { label: 'Restaurants near Panfilov Park', href: '/en/food/restaurants-near-panfilov-park/' },
      { label: 'Arbat walking street', href: '/en/nearby/arbat-street/' },
      { label: 'Kazakh food near the park', href: '/en/food/kazakh-food/' },
      { label: 'Green Bazaar', href: '/en/nearby/green-bazaar/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'food/kazakh-food',
    cluster: 'Food & stay',
    title: 'Kazakh Food Near Panfilov Park, Almaty | Dishes to Try',
    description:
      'Kazakh dishes to try near Panfilov Park: beshbarmak, manty, lagman, kazy and where to find authentic Kazakh cuisine in Almaty.',
    hero: {
      eyebrow: 'Food & stay',
      h1: 'Kazakh Food Near the Park',
      intro:
        'From beshbarmak to baursak, Almaty is a good place to taste Kazakhstan’s national cuisine — and the park’s neighbourhood is a convenient base.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Traditional Kazakh dishes served in Almaty',
      chips: ['National cuisine', 'Hearty dishes', 'Verify the venue'],
    },
    sections: [
      {
        type: 'cards',
        eyebrow: 'Dishes',
        heading: 'What to look for on the menu',
        columns: 2,
        items: [
          { title: 'Beshbarmak', text: 'Boiled meat with flat noodles and onion broth — the national dish.', icon: '🍜' },
          { title: 'Manty', text: 'Steamed dumplings, often lamb and pumpkin.', icon: '🥟' },
          { title: 'Lagman', text: 'Hand-pulled noodles in a savoury broth with vegetables.', icon: '🍲' },
          { title: 'Kazy & baursak', text: 'Horse-meat sausage and fried dough; festive staples.', icon: '🥖' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Finding it',
        heading: 'Where to eat Kazakh food',
        body: [
          'Dedicated Kazakh and broader Central Asian restaurants operate in central Almaty, within a short walk or taxi of the park. The Green Bazaar is also a place to sample dried curds (kurt), nuts and breads.',
          'Choose a venue by recent reviews and confirm it serves the dishes you want that day — menus rotate and some items are weekend or event specials.',
        ],
      },
      verify,
    ],
    faq: [
      { q: 'What is the national dish?', a: 'Beshbarmak — boiled meat with flat noodles and onion broth — is considered Kazakhstan’s national dish.' },
      { q: 'Where can I try Kazakh food near the park?', a: 'Central Almaty Kazakh/Central Asian restaurants are a short walk or taxi away; verify the branch and menu.' },
      { q: 'Is the food halal?', a: 'Much of the cuisine is halal by tradition, but confirm with the specific restaurant if it matters to you.' },
      { q: 'What does it cost?', a: 'This guide does not list live prices; check the venue’s current menu or a map listing.' },
    ],
    sources: [SRC.maps, SRC.park],
    related: [
      { label: 'Restaurants near Panfilov Park', href: '/en/food/restaurants-near-panfilov-park/' },
      { label: 'Green Bazaar street food', href: '/en/food/green-bazaar-street-food/' },
      { label: 'Green Bazaar', href: '/en/nearby/green-bazaar/' },
      { label: 'Cafés near Panfilov Park', href: '/en/food/cafes-near-panfilov-park/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'food/green-bazaar-street-food',
    cluster: 'Food & stay',
    title: 'Street Food at Green Bazaar, Almaty | What to Eat',
    description:
      'Eating at the Green Bazaar near Panfilov Park: market snacks, fresh food and how to enjoy it safely.',
    hero: {
      eyebrow: 'Food & stay',
      h1: 'Street Food at Green Bazaar',
      intro:
        'The Green Bazaar turns a park morning into a food adventure — samples, snacks and fresh produce you can eat on the spot.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Food counters at the Green Bazaar, Almaty',
      chips: ['Market snacks', 'Walkable', 'Fresh & local'],
    },
    sections: [
      {
        type: 'list',
        eyebrow: 'Try',
        heading: 'Market eats to sample',
        items: [
          { title: 'Dried fruit & nuts', text: 'Buy by weight; good for tasting and as gifts.' },
          { title: 'Fresh produce', text: 'Seasonal fruit is a cheap, refreshing snack while walking.' },
          { title: 'Baked goods', text: 'Market bakeries sell breads and pastries; confirm what is fresh that day.' },
          { title: 'Counter snacks', text: 'Some stalls and nearby eateries serve quick hot bites; verify hygiene and hours.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Staying safe',
        heading: 'Eat smart at the market',
        body: [
          'Choose busy stalls with high turnover, and prefer items you see prepared fresh. If you have a sensitive stomach, be selective with raw items and unbottled water.',
          'The bazaar is a working market, so not every counter is a sit-down experience — part of the fun is grazing as you browse.',
        ],
      },
      verify,
    ],
    faq: [
      { q: 'Can I eat at the Green Bazaar?', a: 'Yes — it is a great place for snacks, dried fruit, nuts and fresh produce, plus nearby quick bites.' },
      { q: 'Is the food safe?', a: 'Choose high-turnover stalls and fresh-prepared items; be cautious with raw foods if you have a sensitive stomach.' },
      { q: 'How do I get there from the park?', a: 'It is walkable from the park’s southern side; use a map app to the market entrance.' },
      { q: 'What are the hours?', a: 'Markets vary by day; confirm current opening hours locally before going.' },
    ],
    sources: [SRC.maps, SRC.park],
    related: [
      { label: 'Green Bazaar', href: '/en/nearby/green-bazaar/' },
      { label: 'Kazakh food near the park', href: '/en/food/kazakh-food/' },
      { label: 'Restaurants near Panfilov Park', href: '/en/food/restaurants-near-panfilov-park/' },
      { label: 'Half-day Almaty walking tour', href: '/en/itineraries/half-day-almaty/' },
    ],
    checked,
    schema: 'Article',
  },

  {
    slug: 'stay/hotels-near-panfilov-park',
    cluster: 'Food & stay',
    title: 'Where to Stay Near Panfilov Park, Almaty | Areas & Tips',
    description:
      'Where to stay near Panfilov Park, Almaty: best neighbourhoods, how location helps your trip, and how to book verified hotels.',
    hero: {
      eyebrow: 'Food & stay',
      h1: 'Where to Stay Near the Park',
      intro:
        'Staying near Panfilov Park puts you within walking distance of the city’s calmest landmark and close to the bazaar and Arbat.',
      image: '/images/panfilov-aerial.jpg',
      imgAlt: 'Central Almaty neighbourhood near Panfilov Park',
      chips: ['Walkable base', 'Central location', 'Book verified'],
    },
    sections: [
      {
        type: 'prose',
        eyebrow: 'Location',
        heading: 'Why stay in this neighbourhood',
        lead: 'A central base saves transit time across a spread-out city.',
        body: [
          'Hotels and apartments around Panfilov Park and the Green Bazaar put you close to monuments, markets and dining, with good metro and taxi access to farther sights like Kok Tobe and the mountains.',
          'The trade-off is that the centre is busier and less scenic than the foothills; if mountain views matter most, look at southern districts instead and accept a longer ride to the park.',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Choosing',
        heading: 'What to weigh',
        columns: 2,
        items: [
          { title: 'Walkability', text: 'Pick a spot within a few minutes of the park or bazaar for easy mornings.', icon: '🚶' },
          { title: 'Transit', text: 'Near a metro station widens your options across the city.', icon: 'M' },
          { title: 'Reviews', text: 'Sort by recent, verified stays; older rankings mislead.', icon: '⭐' },
          { title: 'Budget', text: 'Centre ranges from hostels to upscale; confirm what is included.', icon: '₸' },
        ],
      },
      {
        type: 'list',
        eyebrow: 'Booking',
        heading: 'Before you reserve',
        items: [
          { title: 'Exact address', text: 'Confirm the property’s real location, not just the district name.' },
          { title: 'Current price', text: 'Rates shift by season and event; verify the night you need.' },
          { title: 'Cancellation', text: 'Prefer flexible terms in case plans change.' },
          { title: 'Access', text: 'If you need step-free access, confirm with the property directly.' },
        ],
      },
      verify,
    ],
    faq: [
      { q: 'Is it good to stay near Panfilov Park?', a: 'Yes for a central, walkable base near monuments, the bazaar and dining; farther sights need a taxi or metro.' },
      { q: 'Which area is best?', a: 'Around the park and Green Bazaar for centrality; southern districts for mountain views (longer ride to the park).' },
      { q: 'What does a hotel cost?', a: 'This guide does not list live rates; check a booking site for your dates and a flexible rate.' },
      { q: 'How do I verify a hotel?', a: 'Use recent verified reviews and confirm the exact address, price and cancellation with the property or platform.' },
    ],
    sources: [SRC.maps, SRC.park],
    related: [
      { label: 'Restaurants near Panfilov Park', href: '/en/food/restaurants-near-panfilov-park/' },
      { label: 'How to get to Panfilov Park', href: '/en/how-to-get-there/' },
      { label: 'Green Bazaar', href: '/en/nearby/green-bazaar/' },
      { label: 'One-day Almaty itinerary', href: '/en/itineraries/one-day-almaty/' },
    ],
    checked,
    schema: 'Article',
  },
];
