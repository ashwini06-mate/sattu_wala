export function getWhatsAppLink(message = 'Hi! I want to order Sattu Wala.') {
  const base = 'https://wa.me/9181282349';
  const encoded = encodeURIComponent(message);
  return `${base}?text=${encoded}`;
}

export const ROSATU_FLAVORS = [
  {
    id: 'masala-sattu',
    name: 'Masala Sattu Premix',
    tagline: 'Kholo Gholo Peelo — The Indian Super Drink',
    description: 'Traditional roasted sattu premix with digestive spices, cumin, black salt, and ginger. Just add cold water, mix, and drink!',
    protein: '31.44g',
    calories: '210 kcal',
    carbs: '22g',
    fat: '2.1g',
    rating: 4.98,
    reviewsCount: 2450,
    themeColor: '#D97706',
    accentTeal: '#00A4C5',
    accentRed: '#DC2626',
    ingredients: ['Roasted Sattu (Bengal Gram)', 'Roasted Cumin', 'Kala Namak', 'Dry Ginger', 'Black Pepper', 'Cinnamon'],
    badges: ['HIGH PROTEIN', 'HIGH ENERGY', 'GLUTEN FREE'],
    badge: 'SIGNATURE TUB',
    tubColor: '#E6B012',
    tubTeal: '#00A4C5',
    tubRed: '#C02626',
  },
  {
    id: 'jaggery-elaichi',
    name: 'Jaggery & Elaichi Premix',
    tagline: 'Royal Sweet Roasted Sattu',
    description: 'Slow-roasted sattu sweetened naturally with unrefined organic jaggery (Gur) and fragrant green cardamom pods.',
    protein: '30.50g',
    calories: '220 kcal',
    carbs: '24g',
    fat: '1.9g',
    rating: 4.92,
    reviewsCount: 1120,
    themeColor: '#B45309',
    accentTeal: '#0284C7',
    accentRed: '#B91C1C',
    ingredients: ['Roasted Bengal Gram Sattu', 'Organic Gur (Jaggery)', 'Green Cardamom (Elaichi)', 'Nutmeg'],
    badges: ['HIGH PROTEIN', '100% ORGANIC GUR', 'GLUTEN FREE'],
    badge: 'SWEET FAVOURITE',
    tubColor: '#D97706',
    tubTeal: '#0284C7',
    tubRed: '#991B1B',
  },
  {
    id: 'spiced-cacao',
    name: 'Spiced Cacao Sattu Premix',
    tagline: 'Dark Cocoa Energy Fuel',
    description: 'Pure raw Indian cacao blended with roasted barley sattu and warm cinnamon notes for workout recovery.',
    protein: '32.00g',
    calories: '230 kcal',
    carbs: '21g',
    fat: '2.8g',
    rating: 4.90,
    reviewsCount: 890,
    themeColor: '#7C2D12',
    accentTeal: '#0D9488',
    accentRed: '#991B1B',
    ingredients: ['Roasted Grain Sattu', 'Raw Indian Cocoa', 'Organic Jaggery', 'Ceylon Cinnamon', 'Pink Salt'],
    badges: ['HIGH PROTEIN', 'RAW CACAO', 'FITNESS BLEND'],
    badge: 'POST-WORKOUT',
    tubColor: '#7C2D12',
    tubTeal: '#0D9488',
    tubRed: '#7F1D1D',
  },
  {
    id: 'golden-turmeric',
    name: 'Golden Turmeric & Ginger Premix',
    tagline: 'Immunity & Metabolism Booster',
    description: 'High-curcumin Lakadong turmeric paired with sun-dried ginger, black pepper extract, and roasted protein.',
    protein: '30.80g',
    calories: '195 kcal',
    carbs: '18g',
    fat: '1.6g',
    rating: 4.88,
    reviewsCount: 670,
    themeColor: '#059669',
    accentTeal: '#0891B2',
    accentRed: '#B91C1C',
    ingredients: ['Lakadong Turmeric', 'Sun-Dried Ginger', 'Roasted Sattu', 'Black Pepper (Piperine)', 'Organic Gur'],
    badges: ['HIGH PROTEIN', 'IMMUNITY BOOST', 'HIGH ENERGY'],
    badge: 'WELLNESS',
    tubColor: '#059669',
    tubTeal: '#0891B2',
    tubRed: '#991B1B',
  }
];

export const NUTRITION_FACTS = [
  { label: 'Natural Protein', value: '31.44g', detail: '100% Plant & Grain Bio-available' },
  { label: 'Organic Sweetener', value: '0g White Sugar', detail: 'Sweetened with Organic Jaggery or Spices' },
  { label: 'Dietary Fiber', value: '9.2g', detail: 'Gut-friendly prebiotic fiber' },
  { label: 'Essential Minerals', value: 'Iron, Magnesium, Potassium', detail: 'Sustained energy & muscle recovery' },
  { label: 'Preparation', value: 'Kholo • Gholo • Peelo', detail: 'Instant mix in 30 seconds with cold water' },
];

export const HERITAGE_TIMELINE = [
  {
    era: '500 BCE',
    title: 'Ancient Warrior Fuel',
    description: 'Sattu was relied upon by Indian travelers, scholars, and soldiers for instant sustained physical energy during long journeys.',
  },
  {
    era: 'Traditional',
    title: 'Stone-Roasted Perfection',
    description: 'Bengal gram is hand-roasted in sand to lock in minerals, creating the iconic aromatic roasted flavor.',
  },
  {
    era: 'Sattu Wala',
    title: 'Modern Instant Premix',
    description: 'We made India’s ultimate super drink accessible everywhere in convenient ready-to-mix tubs.',
  }
];

export const CUSTOMER_REVIEWS = [
  {
    name: 'Ananya Sharma',
    role: 'Fitness Enthusiast',
    location: 'Mumbai',
    comment: 'The Masala Sattu Premix tub is fantastic! Literally kholo, gholo, peelo in 30 seconds. So refreshing after my morning run!',
    rating: 5,
    verified: true,
  },
  {
    name: 'Vikram Verma',
    role: 'Software Engineer',
    location: 'Bengaluru',
    comment: '31g protein with pure traditional masala flavor and no bloating. Excellent healthy drink!',
    rating: 5,
    verified: true,
  },
  {
    name: 'Sneha Patel',
    role: 'Nutritionist',
    location: 'Ahmedabad',
    comment: 'I recommend Sattu Wala to all my clients looking for a clean, gluten-free Indian super drink with natural protein.',
    rating: 5,
    verified: true,
  }
];
