-- Create products table for easy management
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL DEFAULT 'Unknown',
  category TEXT NOT NULL DEFAULT 'meshkuj',
  original_price DECIMAL(10,2) NOT NULL,
  current_price DECIMAL(10,2) NOT NULL,
  discount INTEGER NOT NULL DEFAULT 0,
  sizes TEXT NOT NULL DEFAULT '38, 39, 40, 41, 42, 43, 44',
  stock INTEGER NOT NULL DEFAULT 10,
  image_url TEXT NOT NULL,
  images TEXT[] DEFAULT ARRAY[]::TEXT[],
  description TEXT,
  is_new BOOLEAN NOT NULL DEFAULT false,
  is_sale BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products (everyone can view products)
CREATE POLICY "Products are publicly viewable" 
ON public.products 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_products_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_products_updated_at();

-- Insert sample products (you can add more via Supabase or CSV import)
INSERT INTO public.products (name, brand, category, original_price, current_price, discount, sizes, stock, image_url, images, description, is_new, is_sale) VALUES
('Nike Air Force 1 ''07', 'Nike', 'meshkuj', 139.99, 119.99, 14, '38, 39, 40, 41, 42, 43, 44, 45', 15, 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500', ARRAY['https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500'], 'Klasikja e përjetshme Nike Air Force 1 me lëkurë të butë dhe teknologji Air.', true, false),
('Adidas Ultraboost 22', 'Adidas', 'meshkuj', 189.99, 149.99, 21, '39, 40, 41, 42, 43, 44, 45', 8, 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500', ARRAY['https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500'], 'Komoditeti maksimal me teknologjinë Boost për vrapim dhe përditshmëri.', false, true),
('Nike Air Max 90', 'Nike', 'femra', 159.99, 129.99, 19, '36, 37, 38, 39, 40, 41', 12, 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500', ARRAY['https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500'], 'Ikona e stilit retro me njësinë Air Max të dukshme.', true, true),
('Jordan 1 Retro High', 'Jordan', 'meshkuj', 179.99, 179.99, 0, '40, 41, 42, 43, 44, 45', 5, 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500', ARRAY['https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500'], 'Legjendat e basketbollit në këmbët tuaja - Jordan 1 origjinale.', true, false),
('New Balance 574', 'New Balance', 'femra', 109.99, 89.99, 18, '36, 37, 38, 39, 40, 41, 42', 20, 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500', ARRAY['https://images.unsplash.com/photo-1539185441755-769473a23570?w=500'], 'Stili klasik i New Balance me komoditet të jashtëzakonshëm.', false, true);