import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    slug: 'signature-japanese-floral-print-shirt',
    name: 'Signature Japanese Floral Print Shirt',
    category: 'printed-shirts',
    price: 1890,
    originalPrice: 2490,
    featured: true,
    newArrival: true,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603252109303-2751441ec157?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Obsidian Black Floral', 'Navy Botanical', 'Ivory Blossom'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Inspired by the signature piece featured on our Chiplun store racks. Crafted from ultra-breathable rayon-cotton blend featuring striking ivory floral motifs against a midnight backdrop. Designed with an Italian camp collar and a tailored drape that transitions effortlessly from celebratory evenings to relaxed weekend outings.',
    fabric: '100% Premium Mercerized Rayon-Cotton Blend',
    fit: 'Contemporary Relaxed Fit with gentle contour',
    careInstructions: [
      'Gentle cold hand wash or delicate dry clean',
      'Iron on reverse with low heat',
      'Do not tumble dry to preserve fabric drape'
    ],
    inStock: true
  },
  {
    id: 2,
    slug: 'classic-obsidian-luxury-black-shirt',
    name: 'Classic Obsidian Luxury Black Shirt',
    category: 'shirts',
    price: 1690,
    originalPrice: 2190,
    featured: true,
    newArrival: false,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Jet Black', 'Deep Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A quintessential cornerstone of the modern gentleman\'s wardrobe. Woven with fine two-ply Giza cotton for a deep luster that never fades. Features subtle smoked mother-of-pearl buttons and a stiffened spread collar that holds its sharp shape throughout the day.',
    fabric: '100% Giza Long-Staple Cotton (80s Two-Ply)',
    fit: 'Tailored Slim Fit',
    careInstructions: [
      'Machine wash gentle cold',
      'Warm iron while damp for crisp finish',
      'Dry in shade'
    ],
    inStock: true
  },
  {
    id: 3,
    slug: 'milano-pleated-relaxed-trouser-charcoal',
    name: 'Milano Pleated Relaxed Trouser',
    category: 'trousers',
    price: 2190,
    originalPrice: 2790,
    featured: true,
    newArrival: true,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Charcoal Grey', 'Sand Taupe', 'Midnight Olive'],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'A masterclass in modern Italian sartorial tailoring. Features double forward pleats, an extended waistband tab, side adjusters for a custom fit without a belt, and a relaxed taper down to a clean cuff.',
    fabric: 'High-Twist Tropical Poly-Viscose with Natural Stretch',
    fit: 'Relaxed Tapered Fit with Mid-to-High Rise',
    careInstructions: [
      'Dry clean recommended',
      'Steam press or medium iron with pressing cloth',
      'Hang on contoured trouser hanger'
    ],
    inStock: true
  },
  {
    id: 4,
    slug: 'emerald-geo-abstract-resort-shirt',
    name: 'Emerald Geo Abstract Resort Shirt',
    category: 'printed-shirts',
    price: 1750,
    originalPrice: 2250,
    featured: true,
    newArrival: true,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Emerald & Gold', 'Cobalt Abstract'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Capturing the carefree elegance of coastal Konkan evenings and luxury resort retreats. Adorned with geometric micro-motifs in forest emerald and champagne accents, cut with an airy relaxed fit.',
    fabric: '100% Breathable Lyocell-Linen Weave',
    fit: 'Relaxed Resort Fit',
    careInstructions: [
      'Cold water delicate cycle',
      'Do not wring or twist',
      'Line dry in shade'
    ],
    inStock: true
  },
  {
    id: 5,
    slug: 'textured-waffle-knit-open-collar-polo',
    name: 'Textured Waffle Knit Open Collar Polo',
    category: 'polos',
    price: 1590,
    originalPrice: 1990,
    featured: false,
    newArrival: true,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Champagne Ivory', 'Graphite Black', 'Sage Green'],
    sizes: ['M', 'L', 'XL'],
    description: 'An elevated take on the timeless leisure classic. Knit from tactile waffle-weave pima cotton, featuring a buttonless Johnny collar and ribbed hems that frame the silhouette cleanly.',
    fabric: '100% Combed Compact Pima Cotton Knit',
    fit: 'Modern Athletic Fit',
    careInstructions: [
      'Wash inside out in cold water',
      'Dry flat to retain structure',
      'Do not hang knitwear while wet'
    ],
    inStock: true
  },
  {
    id: 6,
    slug: 'heritage-selvedge-raw-indigo-denim',
    name: 'Heritage Selvedge Raw Indigo Denim',
    category: 'denim',
    price: 2690,
    originalPrice: 3490,
    featured: true,
    newArrival: false,
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Deep Indigo', 'Washed Obsidian'],
    sizes: ['30', '32', '34', '36'],
    description: 'Crafted on vintage shuttle looms from genuine 13.5oz ring-spun denim with red-line selvedge ticker. Designed to develop unique individual patina and fading whiskers customized to your lifestyle over time.',
    fabric: '100% Ring-Spun Cotton 13.5oz Selvedge Denim',
    fit: 'Regular Straight Cut with subtle modern taper',
    careInstructions: [
      'Wash sparingly inside out with cold water',
      'Air dry naturally',
      'Do not bleach or dry clean'
    ],
    inStock: true
  },
  {
    id: 7,
    slug: 'pure-linen-resort-shirt-off-white',
    name: 'Pure French Linen Resort Shirt',
    category: 'shirts',
    price: 1990,
    originalPrice: 2590,
    featured: false,
    newArrival: true,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Off-White', 'Sky Blue', 'Sand Stone'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Woven from authentic French flax linen, pre-washed for velvety softness and effortless rumpled elegance. The essential hot-weather garment for sophisticated weekend wear in Chiplun and beyond.',
    fabric: '100% Certified French Flax Linen',
    fit: 'Relaxed Casual Fit',
    careInstructions: [
      'Machine wash cold on gentle',
      'Warm iron or embrace natural organic wrinkles',
      'Tumble dry low or line dry'
    ],
    inStock: true
  },
  {
    id: 8,
    slug: 'baroque-gold-filigree-nightfall-shirt',
    name: 'Baroque Gold Filigree Nightfall Shirt',
    category: 'printed-shirts',
    price: 1990,
    originalPrice: 2590,
    featured: true,
    newArrival: true,
    images: [
      'https://images.unsplash.com/photo-1603252109303-2751441ec157?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Gold & Noir', 'Silver Damask'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Royal aesthetics meet modern nightlife. Intricate baroque filigree screen-printed with metallic gold foil accents that catch warm restaurant and gala lights with subtle shimmer.',
    fabric: '100% Mercerized Cotton Sateen',
    fit: 'Contoured Modern Fit',
    careInstructions: [
      'Dry clean or cold hand wash only',
      'Iron inside out on lowest temperature',
      'Do not iron directly over foil accents'
    ],
    inStock: true
  },
  {
    id: 9,
    slug: 'gurkha-waistband-chinos-sand',
    name: 'Gurkha Waistband Chinos',
    category: 'trousers',
    price: 2090,
    originalPrice: 2590,
    featured: false,
    newArrival: false,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Desert Sand', 'Midnight Navy', 'Olive Drab'],
    sizes: ['30', '32', '34', '36'],
    description: 'Inspired by historic military tailoring, this trouser showcases an iconic cross-over double buckle waistband closure, high-rise silhouette, and pleated front drape.',
    fabric: 'Heavyweight Stretch Cotton Twill (98% Cotton, 2% Elastane)',
    fit: 'High-Rise Relaxed Taper',
    careInstructions: [
      'Machine wash cold with like colors',
      'Tumble dry low or hang dry',
      'Warm iron'
    ],
    inStock: true
  },
  {
    id: 10,
    slug: 'monarch-royal-bandhgala-evening-jacket',
    name: 'Monarch Royal Bandhgala Evening Jacket',
    category: 'festive',
    price: 4990,
    originalPrice: 6490,
    featured: true,
    newArrival: true,
    images: [
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Midnight Royal', 'Jet Black', 'Wine Velvet'],
    sizes: ['38', '40', '42', '44'],
    description: 'The pinnacle of regal celebratory elegance for Chiplun weddings, receptions, and festivals. Features a structured Mandarin collar, hand-stitched antique brass buttons, and a tailored canvassed chest.',
    fabric: 'High-Density Wool-Blend Suiting with Silk Jacquard Lining',
    fit: 'Structured Tailored Fit',
    careInstructions: [
      'Professional dry clean only',
      'Store in provided breathable garment bag',
      'Hang on wide-shoulder suit hanger'
    ],
    inStock: true
  },
  {
    id: 11,
    slug: 'mercerized-heavyweight-essential-tee',
    name: 'Mercerized Heavyweight Essential Tee',
    category: 'polos',
    price: 1190,
    originalPrice: 1490,
    featured: false,
    newArrival: false,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Matte Black', 'Chalk White', 'Smoked Olive'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'The ultimate foundational layer. Cut from 240 GSM liquid-smooth mercerized cotton with a lustrous sheen that resists shrinkage, pilling, and collar-sag over hundreds of wears.',
    fabric: '100% 240 GSM Double-Mercerized Combed Cotton',
    fit: 'Slightly Dropped Shoulder Boxy Fit',
    careInstructions: [
      'Machine wash cold gentle',
      'Do not bleach',
      'Dry flat'
    ],
    inStock: true
  },
  {
    id: 12,
    slug: 'vintage-washed-slim-taper-denim',
    name: 'Vintage Washed Slim Taper Denim',
    category: 'denim',
    price: 2390,
    originalPrice: 2990,
    featured: false,
    newArrival: false,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: ['Mid Vintage Blue', 'Washed Grey'],
    sizes: ['30', '32', '34', '36'],
    description: 'Hand-sanded in artisanal batches to create natural authentic wear patterns and honeycombs. Enhanced with 1% comfort stretch for all-day freedom of movement.',
    fabric: '99% Organic Cotton, 1% Comfort Stretch',
    fit: 'Slim Tapered Fit',
    careInstructions: [
      'Wash inside out in cold water',
      'Line dry in shade',
      'Warm iron if desired'
    ],
    inStock: true
  }
];
