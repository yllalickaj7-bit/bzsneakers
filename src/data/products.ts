export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'meshkuj' | 'femra';
  originalPrice: number;
  currentPrice: number;
  discount: number;
  image: string;
  image2?: string;
  sizes: number[];
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: "Air Jordan 4 Retro 'Military Black'",
    brand: 'Nike',
    category: 'meshkuj',
    originalPrice: 220,
    currentPrice: 89,
    discount: 60,
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop',
    sizes: [40, 41, 42, 43, 44, 45],
    isNew: true,
    isSale: true,
  },
  {
    id: '2',
    name: "Nike Dunk Low 'Panda'",
    brand: 'Nike',
    category: 'meshkuj',
    originalPrice: 130,
    currentPrice: 45,
    discount: 65,
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop',
    sizes: [39, 40, 41, 42, 43, 44],
    isNew: true,
    isSale: true,
  },
  {
    id: '3',
    name: "Adidas Yeezy Boost 350 V2",
    brand: 'Adidas',
    category: 'meshkuj',
    originalPrice: 280,
    currentPrice: 120,
    discount: 57,
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop',
    sizes: [40, 41, 42, 43, 44, 45, 46],
    isNew: true,
    isSale: true,
  },
  {
    id: '4',
    name: "New Balance 550 White Green",
    brand: 'New Balance',
    category: 'meshkuj',
    originalPrice: 140,
    currentPrice: 55,
    discount: 61,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop',
    sizes: [40, 41, 42, 43, 44],
    isNew: true,
    isSale: true,
  },
  {
    id: '5',
    name: "Air Jordan 1 Retro High 'Chicago'",
    brand: 'Nike',
    category: 'meshkuj',
    originalPrice: 180,
    currentPrice: 75,
    discount: 58,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop',
    sizes: [41, 42, 43, 44, 45],
    isSale: true,
  },
  {
    id: '6',
    name: "Nike Air Force 1 Low White",
    brand: 'Nike',
    category: 'femra',
    originalPrice: 120,
    currentPrice: 39,
    discount: 68,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
    sizes: [36, 37, 38, 39, 40, 41],
    isSale: true,
  },
  {
    id: '7',
    name: "Adidas Campus 00s Grey",
    brand: 'Adidas',
    category: 'femra',
    originalPrice: 110,
    currentPrice: 45,
    discount: 59,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
    sizes: [36, 37, 38, 39, 40],
    isSale: true,
  },
  {
    id: '8',
    name: "New Balance 9060 Sea Salt",
    brand: 'New Balance',
    category: 'meshkuj',
    originalPrice: 190,
    currentPrice: 85,
    discount: 55,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop',
    sizes: [40, 41, 42, 43, 44, 45],
    isNew: true,
    isSale: true,
  },
  {
    id: '9',
    name: "Nike Air Max 90",
    brand: 'Nike',
    category: 'meshkuj',
    originalPrice: 150,
    currentPrice: 59,
    discount: 61,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop',
    sizes: [40, 41, 42, 43, 44],
    isSale: true,
  },
  {
    id: '10',
    name: "Puma RS-X Reinvention",
    brand: 'Puma',
    category: 'femra',
    originalPrice: 130,
    currentPrice: 49,
    discount: 62,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
    sizes: [36, 37, 38, 39, 40],
    isSale: true,
  },
  {
    id: '11',
    name: "Converse Chuck 70 High",
    brand: 'Converse',
    category: 'femra',
    originalPrice: 90,
    currentPrice: 35,
    discount: 61,
    image: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=600&h=600&fit=crop',
    sizes: [36, 37, 38, 39, 40, 41],
    isSale: true,
  },
  {
    id: '12',
    name: "Vans Old Skool Classic",
    brand: 'Vans',
    category: 'meshkuj',
    originalPrice: 80,
    currentPrice: 29,
    discount: 64,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop',
    sizes: [39, 40, 41, 42, 43, 44],
    isSale: true,
  },
];

export const newProducts = products.filter(p => p.isNew);
export const saleProducts = products.filter(p => p.isSale);
export const menProducts = products.filter(p => p.category === 'meshkuj');
export const womenProducts = products.filter(p => p.category === 'femra');
