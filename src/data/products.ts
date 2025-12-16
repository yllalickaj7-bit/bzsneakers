/**
 * ============================================
 * PRODUKTET - BZ SNEAKERS
 * ============================================
 * 
 * SI TË SHTOSH PRODUKT TË RI:
 * 1. Kopjo një objekt ekzistues më poshtë
 * 2. Ndrysho ID-në (duhet të jetë unike, p.sh. '13', '14', etj.)
 * 3. Ndrysho emrin, markën, kategorinë
 * 4. Vendos çmimet:
 *    - originalPrice: çmimi i vjetër (para zbritjes)
 *    - currentPrice: çmimi aktual (pas zbritjes)
 *    - discount: përqindja e zbritjes (llogaritet automatikisht: (originalPrice - currentPrice) / originalPrice * 100)
 * 5. Shto fotot në "images" array (foto e parë shfaqet kryesore)
 * 6. Vendos madhësitë në "sizes"
 * 7. Vendos sasinë në "stock" (0 = i shitur)
 * 8. isNew: true/false - për badge "E RE"
 * 9. isSale: true/false - për të shfaqur në faqen e zbritjeve
 * 
 * SI TË NDRYSHOSH ÇMIMIN:
 * - Gjej produktin dhe ndrysho "currentPrice"
 * - Nëse ka zbritje, ndrysho edhe "discount" përqindjen
 * 
 * SI TË HEQËSH PRODUKT:
 * - Fshije tërë objektin nga lista, ose
 * - Vendos stock: 0 për ta shënuar si "I SHITUR"
 */

export interface Product {
  id: string;                        // ID unike (p.sh. '1', '2', '3')
  name: string;                      // Emri i produktit
  brand: string;                     // Marka (Nike, Adidas, etj.)
  category: 'meshkuj' | 'femra' | 'femije';  // Kategoria
  originalPrice: number;             // Çmimi origjinal (para zbritjes)
  currentPrice: number;              // Çmimi aktual (pas zbritjes)
  discount: number;                  // Përqindja e zbritjes (p.sh. 60 = -60%)
  images: string[];                  // Lista e fotove - foto e parë shfaqet kryesore
  sizes: number[];                   // Madhësitë në dispozicion
  stock: number;                     // Sasia në dispozicion (0 = i shitur)
  isNew?: boolean;                   // true = shfaq badge "E RE"
  isSale?: boolean;                  // true = shfaq në faqen e zbritjeve
  description?: string;              // Përshkrimi i produktit
}

export const products: Product[] = [
  // =====================================================
  // PRODUKTET PËR MESHKUJ
  // =====================================================
  {
    id: '1',
    name: "Air Jordan 4 Retro 'Military Black'",
    brand: 'Nike',
    category: 'meshkuj',
    originalPrice: 220,
    currentPrice: 89,
    discount: 60,
    images: [
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=600&fit=crop',
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    stock: 15, // 15 copë në dispozicion
    isNew: true,
    isSale: true,
    description: 'Këpucë sportive me cilësi të lartë nga Nike. Dizajn modern dhe komod për përdorim të përditshëm.',
  },
  {
    id: '2',
    name: "Nike Dunk Low 'Panda'",
    brand: 'Nike',
    category: 'meshkuj',
    originalPrice: 130,
    currentPrice: 45,
    discount: 65,
    images: [
      'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=600&fit=crop',
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    stock: 8,
    isNew: true,
    isSale: true,
    description: 'Nike Dunk Low klasik në ngjyrë të bardhë dhe të zezë.',
  },
  {
    id: '3',
    name: "Adidas Yeezy Boost 350 V2",
    brand: 'Adidas',
    category: 'meshkuj',
    originalPrice: 280,
    currentPrice: 120,
    discount: 57,
    images: [
      'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&h=800&fit=crop',
    ],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    stock: 5,
    isNew: true,
    isSale: true,
    description: 'Yeezy Boost 350 V2 - stil unik dhe rehati maksimale.',
  },
  {
    id: '4',
    name: "New Balance 550 White Green",
    brand: 'New Balance',
    category: 'meshkuj',
    originalPrice: 140,
    currentPrice: 55,
    discount: 61,
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=800&fit=crop',
    ],
    sizes: [40, 41, 42, 43, 44],
    stock: 12,
    isNew: true,
    isSale: true,
    description: 'New Balance 550 me ngjyrë të bardhë dhe të gjelbër.',
  },
  {
    id: '5',
    name: "Air Jordan 1 Retro High 'Chicago'",
    brand: 'Nike',
    category: 'meshkuj',
    originalPrice: 180,
    currentPrice: 75,
    discount: 58,
    images: [
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=800&fit=crop',
    ],
    sizes: [41, 42, 43, 44, 45],
    stock: 7,
    isSale: true,
    description: 'Air Jordan 1 Retro High në ngjyrën ikonike Chicago.',
  },
  {
    id: '8',
    name: "New Balance 9060 Sea Salt",
    brand: 'New Balance',
    category: 'meshkuj',
    originalPrice: 190,
    currentPrice: 85,
    discount: 55,
    images: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop',
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    stock: 10,
    isNew: true,
    isSale: true,
    description: 'New Balance 9060 me dizajn modern dhe ngjyra neutrale.',
  },
  {
    id: '9',
    name: "Nike Air Max 90",
    brand: 'Nike',
    category: 'meshkuj',
    originalPrice: 150,
    currentPrice: 59,
    discount: 61,
    images: [
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop',
    ],
    sizes: [40, 41, 42, 43, 44],
    stock: 20,
    isSale: true,
    description: 'Nike Air Max 90 - klasik që nuk del kurrë nga moda.',
  },
  {
    id: '12',
    name: "Vans Old Skool Classic",
    brand: 'Vans',
    category: 'meshkuj',
    originalPrice: 80,
    currentPrice: 29,
    discount: 64,
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop',
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    stock: 25,
    isSale: true,
    description: 'Vans Old Skool - stili skater klasik.',
  },

  // =====================================================
  // PRODUKTET PËR FEMRA
  // =====================================================
  {
    id: '6',
    name: "Nike Air Force 1 Low White",
    brand: 'Nike',
    category: 'femra',
    originalPrice: 120,
    currentPrice: 39,
    discount: 68,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    stock: 18,
    isSale: true,
    description: 'Nike Air Force 1 Low në ngjyrë të bardhë - klasik i përjetshëm.',
  },
  {
    id: '7',
    name: "Adidas Campus 00s Grey",
    brand: 'Adidas',
    category: 'femra',
    originalPrice: 110,
    currentPrice: 45,
    discount: 59,
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
    ],
    sizes: [36, 37, 38, 39, 40],
    stock: 14,
    isSale: true,
    description: 'Adidas Campus 00s me ngjyrë gri - stil retro.',
  },
  {
    id: '10',
    name: "Puma RS-X Reinvention",
    brand: 'Puma',
    category: 'femra',
    originalPrice: 130,
    currentPrice: 49,
    discount: 62,
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
    ],
    sizes: [36, 37, 38, 39, 40],
    stock: 9,
    isSale: true,
    description: 'Puma RS-X me dizajn të guximshëm dhe ngjyra të ndezura.',
  },
  {
    id: '11',
    name: "Converse Chuck 70 High",
    brand: 'Converse',
    category: 'femra',
    originalPrice: 90,
    currentPrice: 35,
    discount: 61,
    images: [
      'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=600&h=600&fit=crop',
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    stock: 22,
    isSale: true,
    description: 'Converse Chuck 70 High - ikonë e modës.',
  },
];

// =====================================================
// FILTRAT AUTOMATIK - MOS I NDRYSHONI
// =====================================================
export const newProducts = products.filter(p => p.isNew && p.stock > 0);
export const saleProducts = products.filter(p => p.isSale && p.stock > 0);
export const menProducts = products.filter(p => p.category === 'meshkuj' && p.stock > 0);
export const womenProducts = products.filter(p => p.category === 'femra' && p.stock > 0);
export const allProducts = products.filter(p => p.stock > 0);

// Funksion për të gjetur produktin sipas ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
