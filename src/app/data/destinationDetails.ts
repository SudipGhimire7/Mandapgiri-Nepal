export interface DestinationDetail {
  name: string;
  title: string;
  overview: string;
  experience: string[];
  keyPlacesTitle: string;
  keyPlaces: string[];
  duration: string;
  difficulty?: string;
  cta1: string;
  cta2: string;
}

export const destinationDetails: Record<string, DestinationDetail> = {
  Kathmandu: {
    name: 'Kathmandu',
    title: 'Kathmandu → Discover Culture',
    overview: 'Explore the rich cultural heritage of Kathmandu, where ancient temples, vibrant streets, and spiritual traditions come alive.',
    experience: [
      'Visit UNESCO heritage sites',
      'Explore ancient temples and shrines',
      'Walk through traditional Newari streets',
      'Experience local markets and food'
    ],
    keyPlacesTitle: 'Key Places',
    keyPlaces: [
      'Kathmandu Durbar Square',
      'Swayambhunath Stupa',
      'Pashupatinath Temple',
      'Boudhanath Stupa'
    ],
    duration: 'Half-day / Full-day tours available',
    cta1: 'Book Cultural Tour',
    cta2: 'WhatsApp Inquiry'
  },
  Pokhara: {
    name: 'Pokhara',
    title: 'Pokhara → Lakeside Escape',
    overview: 'Relax in the peaceful city of Pokhara, surrounded by lakes and breathtaking Himalayan views.',
    experience: [
      'Boating on Phewa Lake',
      'Sunrise from Sarangkot',
      'Stunning Annapurna mountain views',
      'Cafés, nightlife & lakeside vibe'
    ],
    keyPlacesTitle: 'Key Attractions',
    keyPlaces: [
      'Phewa Lake',
      'Sarangkot',
      'Davis Falls',
      'World Peace Pagoda'
    ],
    duration: '2–3 days recommended',
    cta1: 'View Packages',
    cta2: 'Plan Your Trip'
  },
  Everest: {
    name: 'Everest',
    title: 'Everest → Start Trek',
    overview: 'Begin your journey to the base of the world’s highest peak and experience the adventure of a lifetime.',
    experience: [
      'Trek through Sherpa villages',
      'Breathtaking Himalayan landscapes',
      'Visit monasteries and glaciers',
      'Reach Everest Base Camp'
    ],
    keyPlacesTitle: 'Key Highlights',
    keyPlaces: [
      'Everest Base Camp',
      'Namche Bazaar',
      'Tengboche Monastery'
    ],
    duration: '12–14 days trek',
    difficulty: 'Moderate to Challenging',
    cta1: 'Start Your Trek',
    cta2: 'Talk to Guide'
  },
  Chitwan: {
    name: 'Chitwan',
    title: 'Chitwan → Jungle Safari',
    overview: 'Dive into the wild at Chitwan and experience Nepal’s rich biodiversity and jungle adventure.',
    experience: [
      'Jeep safari in the jungle',
      'Spot rhinos, deer, and birds',
      'Canoe ride along rivers',
      'Tharu cultural dance'
    ],
    keyPlacesTitle: 'Key Attractions',
    keyPlaces: [
      'Chitwan National Park',
      'Rapti River',
      'Tharu Village Experience'
    ],
    duration: '2–3 days',
    cta1: 'Book Safari',
    cta2: 'WhatsApp Now'
  }
};
