import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  sizes: number[];
  stock: number;
  images: string[];
  description: string;
  isNew: boolean;
  isSale: boolean;
}

interface DBProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  original_price: number;
  current_price: number;
  discount: number;
  sizes: string;
  stock: number;
  image_url: string;
  images: string[] | null;
  description: string | null;
  is_new: boolean;
  is_sale: boolean;
}

// Transform database product to frontend product format
const transformProduct = (dbProduct: DBProduct): Product => {
  // Ensure images is always a valid array with at least one image
  let imagesArray: string[] = [];
  
  if (Array.isArray(dbProduct.images) && dbProduct.images.length > 0) {
    imagesArray = dbProduct.images.filter(img => img && typeof img === 'string');
  }
  
  // Fallback to image_url if images array is empty
  if (imagesArray.length === 0 && dbProduct.image_url) {
    imagesArray = [dbProduct.image_url];
  }
  
  // Final fallback to placeholder
  if (imagesArray.length === 0) {
    imagesArray = ['/placeholder.svg'];
  }

  return {
    id: dbProduct.id,
    name: dbProduct.name,
    brand: dbProduct.brand,
    category: dbProduct.category,
    originalPrice: Number(dbProduct.original_price) || 0,
    currentPrice: Number(dbProduct.current_price) || 0,
    discount: dbProduct.discount || 0,
    sizes: dbProduct.sizes ? dbProduct.sizes.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n)) : [],
    stock: dbProduct.stock || 0,
    images: imagesArray,
    description: dbProduct.description || '',
    isNew: dbProduct.is_new || false,
    isSale: dbProduct.is_sale || false,
  };
};

// Fetch all products
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return (data as DBProduct[]).map(transformProduct);
    },
  });
};

// Fetch products by category
export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .gt('stock', 0)
        .order('created_at', { ascending: false });
      
      if (category !== 'te-gjitha') {
        query = query.eq('category', category);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return (data as DBProduct[]).map(transformProduct);
    },
  });
};

// Fetch single product by ID
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .maybeSingle();
      
      if (error) throw error;
      if (!data) return null;
      return transformProduct(data as DBProduct);
    },
    enabled: !!id,
  });
};

// Fetch new products (in stock)
export const useNewProducts = () => {
  return useQuery({
    queryKey: ['products', 'new'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_new', true)
        .gt('stock', 0)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return (data as DBProduct[]).map(transformProduct);
    },
  });
};

// Fetch sale products (in stock)
export const useSaleProducts = () => {
  return useQuery({
    queryKey: ['products', 'sale'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_sale', true)
        .gt('stock', 0)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return (data as DBProduct[]).map(transformProduct);
    },
  });
};

// Fetch men's products (in stock)
export const useMenProducts = () => {
  return useQuery({
    queryKey: ['products', 'men'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'meshkuj')
        .gt('stock', 0)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return (data as DBProduct[]).map(transformProduct);
    },
  });
};

// Fetch women's products (in stock)
export const useWomenProducts = () => {
  return useQuery({
    queryKey: ['products', 'women'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'femra')
        .gt('stock', 0)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return (data as DBProduct[]).map(transformProduct);
    },
  });
};

// Fetch related products by brand
export const useRelatedProducts = (brand: string, excludeId: string) => {
  return useQuery({
    queryKey: ['products', 'related', brand, excludeId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('brand', brand)
        .neq('id', excludeId)
        .gt('stock', 0)
        .limit(4);
      
      if (error) throw error;
      return (data as DBProduct[]).map(transformProduct);
    },
    enabled: !!brand && !!excludeId,
  });
};
