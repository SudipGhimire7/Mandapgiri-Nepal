export interface TripOutlook {
  tripMode: string;
  trekGrade: string;
  highestAltitude: string;
  peopleAndCulture: string;
  trekkingDuration: string;
  totalTrip: string;
  season: string;
}

export interface PackageDetail {
  title: string;
  price: number;
  duration: string;
  subtitle: string;
  description: string;
  tripOutlook: TripOutlook;
  overview: string;
  highlights: string[];
  itinerary: { day: number; title: string }[];
  image: string;
  gallery?: string[];
}

export const ebcDetails: PackageDetail = {
  title: "EVEREST BASE CAMP TREKKING",
  price: 168000,
  duration: "17 Days",
  subtitle: "‘a scenic and cultural adventure with climb to high Kalapathar view top’",
  description: "Exciting views of high snow-capped peaks on daily scenic walks\nAdventure around Sagarmatha National Park, World Heritage Site.\nExplore lovely traditional Sherpa villages adorned with Buddhist culture\nWalk from green forest to remorseless fields of ice and glaciers at base camp\nStand beneath Mt. Everest at base camp, climb to high Kalapathar view top",
  image: "https://images.unsplash.com/photo-1601062224947-3ca636754fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGV2ZXJlc3QlMjBoaW1hbGF5YXMlMjBuZXBhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzU4MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  tripOutlook: {
    tripMode: "On Hotels and Lodge on treks.",
    trekGrade: "From Moderate to Adventurous walks.",
    highestAltitude: "At Kalapathar 5,545 m and Everest Base Camp 5,365 m.",
    peopleAndCulture: "Populated by Sherpa the Highlanders of Everest with age-old Buddhist religion and interesting culture.",
    trekkingDuration: "12 Nights and 13 Days (Lukla to Lukla)",
    totalTrip: "16 Nights and 17 Days (Kathmandu to Kathmandu)",
    season: "Nearly all months of the year except monsoon wet from June to August. The best time is spring from March to May and autumn / Fall from September to November."
  },
  overview: "Everest base camp trekking an adventure of a lifetime experience, an enjoyable feat for all interested adventurers and trekkers. An ever exciting walk in the heart of world’s highest Mt. Everest and towering giant peaks of Khumbu Himal.\n\nEverest base camp located Nepal North Mid-Eastern Himalaya around Khumbu areas and Everest region. The trek follows amidst lovely Sherpa villages of immense cultural interest, interwoven to Buddhism religion and cultures.\n\nEverest base camp trek, begins with breathtaking, panoramic flight to Lukla from Kathmandu. A short scenic flight landing at Tenzing & Hillary Airport in Lukla, the gateway town to various adventure destinations.\n\nFrom Lukla the trek leads on pleasant scenic trail following the Dudh Koshi River, valley and gorge. As walk progress walking past lovely Sherpa villages coming across Buddhist monuments. Walking around Mani Walls and prayer spinning wheels with close backdrop of mountain views.\n\nSlowly climb leads to high hills covered in lovely forest of rhododendron and pine trees to reach famous Namche Bazaar. Spending a day for acclimatize before heading higher elevation. Enjoy short scenic hike to view-point facing fabulous views of Everest, Ama-Dablam with array of peaks.\n\nAdventure continues heading higher to picturesque spot at Tengboche and the majestic monastery. Outlined by lovely woods, after visiting the monastery of great religious interest. Journey leads to high windswept mountain wilderness on leaving the tree lines behind.\n\nSpending pleasant overnights in Dingboche and Lobuche, then finally towards our main highlight of the adventure. Reaching Everest base camp right beneath towering South Face of Mt. Everest with adjoining giant peaks.\n\nStand amidst remorseless fields of ice and glaciers close in front of massive Khumbu Ice Falls. Next adventure takes you to steep climb on top high Kalapathar at 5,545 m the highest spot of the trek. Enjoy grand views of Everest at close distance with adjoin towering peaks.\n\nReturn journey downhill to Lukla past Namche Bazaar for short scenic flight to Kathmandu. After marvelous adventure and great experience on Everest Base Camp Trekking.",
  highlights: [
    "Exciting views of high snow-capped peaks on daily scenic walks",
    "Adventure around Sagarmatha National Park, World Heritage Site",
    "Explore lovely traditional Sherpa villages adorned with Buddhist culture",
    "Walk from green forest to remorseless fields of ice and glaciers at base camp",
    "Stand beneath Mt. Everest at base camp, climb to high Kalapathar view top"
  ],
  itinerary: [
    { day: 1, title: "Arrival in Kathmandu and transfer to hotel." },
    { day: 2, title: "Tour of Kathmandu heritage sites of great interest." },
    { day: 3, title: "Fly to Lukla 2, 846 m and trek to Phakding 2,645 m - 04 hrs." },
    { day: 4, title: "Trek to Namche Bazaar 3,440 m / 11, 350 feet - 06 hrs." },
    { day: 5, title: "At Namche for acclimatization and a short scenic hike." },
    { day: 6, title: "Trek to Tengboche 3,867 m - 05 hrs" },
    { day: 7, title: "Trek to Dingboche 4,340 m - 05 hrs." },
    { day: 8, title: "Rest day in Dingboche for acclimatization and short excursion." },
    { day: 9, title: "Trek to Lobuche 4,960 m - 05 hrs." },
    { day: 10, title: "Trek to Everest Base Camp 5,364 m and back to Gorakshep - 06 hrs." },
    { day: 11, title: "Climb Kalapathar 5,643 m / 18,514 feet trek to Pangboche 3, 900 m." },
    { day: 12, title: "Trek to Kyang-Jima 3, 650 m via Tengboche - 06 hrs." },
    { day: 13, title: "Trek to Monjo 2,880 m via Namche Bazaar- 05 hrs." },
    { day: 14, title: "Trek to Lukla 2, 846 m - 04 hours." },
    { day: 15, title: "Fly from Lukla to Kathmandu with afternoon free at leisure." },
    { day: 16, title: "Free day as contingency and for individual activities." },
    { day: 17, title: "International departure for homeward bound" }
  ]
};

export const kathmanduDetails: PackageDetail = {
  title: "KATHMANDU VALLEY TOUR",
  price: 51000,
  duration: "5 Days",
  subtitle: "‘Discover the rich tapestry of history, art, and culture in the valley of gods’",
  description: "Explore the ancient kingdoms and UNESCO World Heritage Sites.\nExperience the living history in the bustling streets of Kathmandu.\nMarvel at the intricate wood carvings and pagoda-style temples.\nWitness the harmonious blend of Hinduism and Buddhism.\nEnjoy panoramic views from the Swayambhunath Stupa.",
  image: "https://images.unsplash.com/photo-1590580808179-c0d0b572d3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxrYXRobWFuZHUlMjBuZXBhbCUyMHRlbXBsZXN8ZW58MXx8fHwxNzc1ODI4MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  tripOutlook: {
    tripMode: "On Hotels with private transport for sightseeing.",
    trekGrade: "Leisurely and Cultural Tour.",
    highestAltitude: "At Kathmandu 1,400 m, Nagarkot 2,175 m.",
    peopleAndCulture: "Inhabited predominantly by the Newar community, featuring a mix of Hindu traditions and unique festivals.",
    trekkingDuration: "No trekking, daily sightseeing tours.",
    totalTrip: "4 Nights and 5 Days (Kathmandu to Kathmandu)",
    season: "All year round, though spring and autumn offer the clearest skies."
  },
  overview: "The Kathmandu Valley Tour offers a mesmerizing journey into the historical and cultural heart of Nepal. Known as the 'Valley of Gods', Kathmandu is a vibrant blend of ancient traditions and modern life, characterized by its intricately carved architecture and sacred temples.\n\nOver the course of 5 days, you'll wander through the ancient courtyards of the three medieval kingdoms—Kathmandu, Patan, and Bhaktapur—each boasting its own unique charm and UNESCO World Heritage Sites.\n\nFrom the spiritual aura of the Pashupatinath Temple to the serene heights of the Swayambhunath Stupa, this tour provides a deep dive into the harmonious coexistence of Hinduism and Buddhism in Nepal. Conclude your days with the sweeping sunrise views over the Himalayas from Nagarkot.",
  highlights: [
    "Visit 7 UNESCO World Heritage sites in the Kathmandu Valley",
    "Witness ancient traditions at Pashupatinath Temple",
    "Explore the pottery and crafts of Bhaktapur Durbar Square",
    "Enjoy a spectacular sunrise view of the Himalayas from Nagarkot",
    "Sample exquisite local Newari cuisine in authentic settings"
  ],
  itinerary: [
    { day: 1, title: "Arrival in Kathmandu and transfer to hotel." },
    { day: 2, title: "Full day sightseeing: Kathmandu Durbar Square and Swayambhunath." },
    { day: 3, title: "Explore Patan Durbar Square and Pashupatinath Temple, drive to Nagarkot." },
    { day: 4, title: "Sunrise at Nagarkot, visit Bhaktapur Durbar Square, return to Kathmandu." },
    { day: 5, title: "Final departure to onward destination." }
  ]
};

export const annapurnaDetails: PackageDetail = {
  title: "ANNAPURNA CIRCUIT",
  price: 142000,
  duration: "12 Days",
  subtitle: "‘A legendary trek through diverse landscapes and over the majestic Thorong La Pass’",
  description: "Trek through a kaleidoscope of ecosystems, from lush jungles to alpine deserts.\nCross the thrilling Thorong La Pass at an elevation of 5,416 meters.\nExperience the warmth of Gurung and Manangi hospitality in remote villages.\nMarvel at the towering peaks of Annapurna and Dhaulagiri.\nRejuvenate in the natural hot springs of Tatopani.",
  image: "https://images.unsplash.com/photo-1580424917967-a8867a6e676e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb3VudCUyMGV2ZXJlc3QlMjBoaW1hbGF5YXMlMjBuZXBhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzU4MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  tripOutlook: {
    tripMode: "On Hotels and Lodge (Tea-house) on treks.",
    trekGrade: "Adventurous to Challenging walks.",
    highestAltitude: "At Thorong La Pass 5,416 m.",
    peopleAndCulture: "Rich cultural mix of Gurung, Thakali, and Manangi people following Buddhism and Hinduism.",
    trekkingDuration: "10 Nights and 11 Days on the trail",
    totalTrip: "11 Nights and 12 Days (Kathmandu to Kathmandu)",
    season: "Spring (March to May) and Autumn (September to November) offer the best weather and visibility."
  },
  overview: "The Annapurna Circuit is frequently hailed as one of the world’s greatest treks. It is an adventurous odyssey that circles the entire Annapurna Massif, offering an unparalleled variety of landscapes ranging from subtropical forests to high-altitude trans-Himalayan deserts.\n\nStarting from the lower Marshyangdi River valley, the trail gradually climbs into the arid and rugged terrain of Manang, passing through diverse cultural settlements along the way. The climax of this trek is the crossing of the formidable Thorong La Pass, demanding physical endurance but rewarding with breathtaking panoramic vistas.\n\nAs the journey descends into the Kali Gandaki Gorge—the deepest gorge in the world—trekkers are greeted with the hospitable culture of the Thakali people. This trip perfectly encapsulates the profound natural beauty and cultural richness of the Nepalese Himalayas.",
  highlights: [
    "Cross the challenging Thorong La Pass (5,416m)",
    "Hike through the world's deepest gorge, the Kali Gandaki",
    "Experience the unique Tibetan-like culture in Manang and Mustang",
    "Bathe in the therapeutic natural hot springs at Tatopani",
    "Unobstructed views of the Annapurna and Dhaulagiri ranges"
  ],
  itinerary: [
    { day: 1, title: "Drive from Kathmandu to Besisahar, then jeep to Chame." },
    { day: 2, title: "Trek from Chame to Pisang (3,200m)." },
    { day: 3, title: "Trek from Pisang to Manang (3,540m)." },
    { day: 4, title: "Acclimatization day in Manang. Short hikes recommended." },
    { day: 5, title: "Trek from Manang to Yak Kharka (4,050m)." },
    { day: 6, title: "Trek from Yak Kharka to Thorong Phedi (4,450m)." },
    { day: 7, title: "Cross Thorong La Pass (5,416m) and trek down to Muktinath." },
    { day: 8, title: "Trek from Muktinath to Jomsom via Kagbeni." },
    { day: 9, title: "Drive from Jomsom to Tatopani. Enjoy the hot springs." },
    { day: 10, title: "Trek from Tatopani to Ghorepani (2,860m)." },
    { day: 11, title: "Early hike to Poon Hill, then trek to Nayapul and drive to Pokhara." },
    { day: 12, title: "Fly or drive back to Kathmandu." }
  ]
};

export const chitwanDetails: PackageDetail = {
  title: "CHITWAN SAFARI ADVENTURE",
  price: 77000,
  duration: "4 Days",
  subtitle: "‘Dive into the dense tropical jungles of Nepal in search of exotic wildlife’",
  description: "Experience the thrill of a jungle safari in the heart of Chitwan.\nSpot the endangered one-horned rhinoceros and the elusive Bengal tiger.\nNavigate the Rapti River on a traditional dug-out canoe.\nImmerse yourself in the vibrant culture of the indigenous Tharu people.\nEnjoy serene elephant rides and guided nature walks.",
  image: "https://images.unsplash.com/photo-1643114638231-741d6c6bdb7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Y2hpdHdhbiUyMG5lcGFsJTIwanVuZ2xlfGVufDF8fHx8MTc3NTgyODI4NHww&ixlib=rb-4.1.0&q=80&w=1080",
  tripOutlook: {
    tripMode: "On jungle resorts and lodges with guided activities.",
    trekGrade: "Leisurely Wildlife Tour.",
    highestAltitude: "Around 415 m above sea level.",
    peopleAndCulture: "Home to the indigenous Tharu people, known for their distinct culture and colorful tribal dances.",
    trekkingDuration: "No trekking, daily jungle activities.",
    totalTrip: "3 Nights and 4 Days (Kathmandu to Kathmandu)",
    season: "October to March is ideal; however, wildlife is active year-round."
  },
  overview: "Chitwan National Park is Nepal’s premier wildlife destination and a UNESCO World Heritage site. Located in the subtropical inner Terai lowlands, the Chitwan Safari Adventure promises close encounters with some of the rarest distinct animal species on the planet.\n\nOver the course of 4 days, you will partake in an array of exciting activities. Whether it is tracking the one-horned rhinoceros on an elephant back safari, searching for the Royal Bengal tiger during a deep jungle jeep drive, or gliding past sunbathing crocodiles in a canoe, the experiences are exhilarating.\n\nBeyond its flora and fauna, Chitwan is culturally rich. The Tharu people have lived here for centuries, and an evening spent watching their rhythmic cultural dances offers a captivating end to an adventurous day in the wild.",
  highlights: [
    "Thrilling jeep and elephant safaris through dense forests",
    "Canoe ride along the Rapti River spotting Gharial crocodiles",
    "Guided nature walks and bird watching excursions",
    "Visit the elephant breeding center",
    "Experience the vibrant Tharu cultural dance program"
  ],
  itinerary: [
    { day: 1, title: "Drive or fly to Chitwan, hotel transfer, and Tharu village tour." },
    { day: 2, title: "Full day jungle activities: Canoe ride, jungle walk, and elephant safari." },
    { day: 3, title: "Early morning bird watching, elephant bathing, and deep jungle jeep safari." },
    { day: 4, title: "Morning activity and departure to Kathmandu or onward destination." }
  ]
};

export const pokharaDetails: PackageDetail = {
  title: "POKHARA PARADISE",
  price: 64000,
  duration: "6 Days",
  subtitle: "‘Relax on the serene shores of Phewa Lake under the shadow of the Annapurnas’",
  description: "Unwind in the tranquil and picturesque city of Pokhara.\nEnjoy an early morning sunrise view over the Himalayas from Sarangkot.\nTake a peaceful boat ride on the expansive Phewa Lake.\nExplore mystical caves, waterfalls, and the iconic Peace Pagoda.\nExperience the thrill of paragliding alongside majestic mountains.",
  image: "https://images.unsplash.com/photo-1671210528714-9eb963f279df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwb2toYXJhJTIwbmVwYWwlMjBsYWtlfGVufDF8fHx8MTc3NTgyODI4NHww&ixlib=rb-4.1.0&q=80&w=1080",
  tripOutlook: {
    tripMode: "On Hotels with local transport for tours.",
    trekGrade: "Leisurely Holiday Tour.",
    highestAltitude: "At Sarangkot 1,600 m.",
    peopleAndCulture: "A cosmopolitan blend, but featuring significant Gurung, Magar, and Thakali populations.",
    trekkingDuration: "Minimal walking, mostly local sightseeing.",
    totalTrip: "5 Nights and 6 Days (Kathmandu to Kathmandu)",
    season: "Best experienced from September to November, and February to April."
  },
  overview: "Pokhara is often described as a slice of paradise. Cradled beside the serene Phewa Lake and shadowed by the towering, snow-capped peaks of the Annapurna range, it is a city that naturally inspires peace and rejuvenation.\n\nThis 6-day tour allows you to soak in the chill vibes of Lakeside, while offering plenty of opportunities for soft adventure. From waking up early to catch the golden sunrise over Machhapuchhre (Fishtail mountain) at Sarangkot, to exploring the depths of Gupteshwor Cave and the thundering Davis Falls, every moment in Pokhara is memorable.\n\nWhether you’re quietly rowing across the lake towards the World Peace Pagoda or taking to the skies on a tandem paragliding flight, the Pokhara Paradise package is the perfect blend of relaxation and exhilaration.",
  highlights: [
    "Witness unforgettable sunrises stretching across the Annapurna range from Sarangkot",
    "Relaxing boating on Phewa Lake with a visit to Tal Barahi Temple",
    "Explore the mysterious Gupteshwor Cave and the powerful Davis Falls",
    "Optional adrenaline activities like paragliding and zip-lining",
    "Hike up to the World Peace Pagoda for an aerial view of the city and lake"
  ],
  itinerary: [
    { day: 1, title: "Drive or fly from Kathmandu to Pokhara. Evening lakeside walk." },
    { day: 2, title: "Early sunrise tour to Sarangkot. Afternoon boating on Phewa Lake." },
    { day: 3, title: "Half day sightseeing: Davis Falls, Gupteshwor Cave, and Seti River Gorge." },
    { day: 4, title: "Hike to the World Peace Pagoda and explore the Tibetan Refugee Camp." },
    { day: 5, title: "Free day for optional activities (paragliding/shopping/relaxing)." },
    { day: 6, title: "Return to Kathmandu." }
  ]
};

export const mustangDetails: PackageDetail = {
  title: "UPPER MUSTANG EXPEDITION",
  price: 207000,
  duration: "15 Days",
  subtitle: "‘Step into the Forbidden Kingdom and explore ancient caves and Tibetan culture’",
  description: "Trek through the rain-shadow of the Himalayas to Lo Manthang.\nDiscover nomadic cultures and ancient sky caves.\nExperience the stark beauty of the trans-Himalayan desert.\nHigh-altitude adventure with unique geological formations.",
  image: "/images/upper_mustang.png",
  gallery: [
    "/images/upper_mustang.png",
    "https://images.unsplash.com/photo-1544734861-5b721aa3d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YW5nJTIwbmVwYWx8ZW58MXx8fHwxNzc1ODI4MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWJldGFuJTIwY3VsdHVyZXxlbnwxfHx8fDE3NzU4MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  tripOutlook: {
    tripMode: "Hotels in Kathmandu and tea houses/lodges in Mustang.",
    trekGrade: "Adventurous and high-altitude.",
    highestAltitude: "Lo Manthang at 3,840 m.",
    peopleAndCulture: "Heavily influenced by Tibetan Buddhism and the unique Loba people.",
    trekkingDuration: "12 days on trail.",
    totalTrip: "15 days.",
    season: "March to November (including monsoon as it's in the rain shadow)."
  },
  overview: "Upper Mustang, once a forbidden kingdom, offers a trekking experience unlike any other in Nepal. The landscape is a high-altitude desert featuring dramatic red cliffs and deep canyons. You'll reach the walled city of Lo Manthang, the capital of the former kingdom, and witness a culture that has remained virtually unchanged for centuries.",
  highlights: [
    "Ancient Sky Caves of Mustang",
    "Walled City of Lo Manthang",
    "Trans-Himalayan desert landscapes",
    "Century-old monasteries (Gompas)",
    "Spectacular views of Nilgiri and Dhaulagiri"
  ],
  itinerary: [
    { day: 1, title: "Arrival in Kathmandu and transfer to hotel." },
    { day: 2, title: "Fly to Pokhara and evening by the lake." },
    { day: 3, title: "Fly to Jomsom and trek to Kagbeni." },
    { day: 4, title: "Trek to Chele." },
    { day: 5, title: "Trek to Syanbochen." },
    { day: 6, title: "Trek to Ghami." },
    { day: 7, title: "Trek to Tsarang." },
    { day: 8, title: "Trek to Lo Manthang." },
    { day: 9, title: "Explore Lo Manthang and sky caves." },
    { day: 10, title: "Trek to Dakmar." },
    { day: 11, title: "Trek to Ghiling." },
    { day: 12, title: "Trek to Chhusang." },
    { day: 13, title: "Trek back to Jomsom." },
    { day: 14, title: "Fly back to Pokhara then to Kathmandu." },
    { day: 15, title: "Final departure." }
  ]
};

export const lumbiniDetails: PackageDetail = {
  title: "LUMBINI HERITAGE TOUR",
  price: 45000,
  duration: "3 Days",
  subtitle: "‘A spiritual journey to the birthplace of Lord Buddha, the Light of Asia’",
  description: "Visit the Sacred Garden where Queen Mayadevi gave birth.\nExplore international monasteries representing Buddhist traditions.\nWitness the Ashoka Pillar and the Eternal Peace Flame.\nExperience a profound sense of serenity in this UNESCO World Heritage Site.",
  image: "/images/lumbini.png",
  gallery: [
    "/images/lumbini.png",
    "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdW1iaW5pfGVufDF8fHx8MTc3NTgyODI4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1534062013898-d8db55aa3e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhidWRkaGF8ZW58MXx8fDE3NzU4MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  tripOutlook: {
    tripMode: "Deluxe hotels with private transfers.",
    trekGrade: "Leisurely Heritage Tour.",
    highestAltitude: "150 m (Terai lowlands).",
    peopleAndCulture: "A multicultural spiritual hub with monastic communities from across Asia.",
    trekkingDuration: "No trekking.",
    totalTrip: "3 days.",
    season: "September to April (to avoid extreme Terai heat)."
  },
  overview: "Lumbini is one of the most significant spiritual sites in the world. As the birthplace of Siddhartha Gautama, who later became the Buddha, it attracts thousands of pilgrims and travelers seeking peace. The Monastic Zone features breathtaking temples built by different countries, showcasing various architectural styles and Buddhist traditions.",
  highlights: [
    "Mayadevi Temple and Sacred Pond",
    "Ashoka Pillar (dating to 249 BC)",
    "World Peace Pagoda",
    "International Monastic Zone",
    "Eternal Peace Flame"
  ],
  itinerary: [
    { day: 1, title: "Fly or drive from Kathmandu to Lumbini. Hotel check-in." },
    { day: 2, title: "Full day tour of the Sacred Garden, Ashoka Pillar, and Monastic Zone." },
    { day: 3, title: "Visit Kapilvastu (ancient Tilaurakot) and return to Kathmandu." }
  ]
};

export const langtangDetails: PackageDetail = {
  title: "LANGTANG VALLEY TREK",
  price: 103000,
  duration: "8 Days",
  subtitle: "‘Trek through glacial valleys and experience the resilient spirit of the Tamang people’",
  description: "Explore the nearest Himalayan valley from Kathmandu.\nHike through rhododendron and bamboo forests to alpine meadows.\nStand below the massive peaks of Langtang Lirung.\nVisit the ancient Kyanjin Gompa and sample local yak cheese.",
  image: "/images/langtang.png",
  gallery: [
    "/images/langtang.png",
    "https://images.unsplash.com/photo-1628169123896-1cbaa79df30f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndGFuZyUyMG5lcGFsfGVufDF8fHx8MTc3NTgyODI4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1502476570535-c085fc51203d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzU4MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  tripOutlook: {
    tripMode: "Tea houses and lodges.",
    trekGrade: "Moderate with some steep climbs.",
    highestAltitude: "Kyanjin Ri at 4,773 m.",
    peopleAndCulture: "Home to the Tamang people with their unique culture, dialect, and traditions.",
    trekkingDuration: "6 days on trail.",
    totalTrip: "8 days.",
    season: "March to May and September to November."
  },
  overview: "The Langtang Valley trek is often called the 'Valley of Glaciers.' It offers a perfect combination of diverse landscapes, from lush forests to towering rock faces and glaciers. Despite being close to Kathmandu, it remains less crowded than Everest or Annapurna, providing a more intimate Himalayan experience.",
  highlights: [
    "Panoramic views from Kyanjin Ri",
    "Langtang National Park biodiversity",
    "Kyanjin Gompa monastery",
    "Resilient Tamang villages",
    "Proximity to the Tibetan border"
  ],
  itinerary: [
    { day: 1, title: "Drive from Kathmandu to Syabrubesi." },
    { day: 2, title: "Trek to Lama Hotel (2,470m)." },
    { day: 3, title: "Trek to Langtang Village (3,430m)." },
    { day: 4, title: "Trek to Kyanjin Gompa (3,870m)." },
    { day: 5, title: "Acclimatization/Hiking day to Kyanjin Ri (4,773m)." },
    { day: 6, title: "Trek back to Lama Hotel." },
    { day: 7, title: "Trek back to Syabrubesi." },
    { day: 8, title: "Drive back to Kathmandu." }
  ]
};

export const allPackageDetails: Record<string, PackageDetail> = {
  'Everest Base Camp Trek': ebcDetails,
  'Kathmandu Valley Tour': kathmanduDetails,
  'Annapurna Circuit': annapurnaDetails,
  'Chitwan Safari Adventure': chitwanDetails,
  'Pokhara Paradise': pokharaDetails,
  'Upper Mustang Expedition': mustangDetails,
  'Lumbini Heritage Tour': lumbiniDetails,
  'Langtang Valley Trek': langtangDetails,
};
