-- Drop the trigger first
DROP TRIGGER IF EXISTS update_products_updated_at ON public.products;

-- Drop the function
DROP FUNCTION IF EXISTS public.update_products_updated_at();

-- Remove the columns
ALTER TABLE public.products DROP COLUMN IF EXISTS created_at;
ALTER TABLE public.products DROP COLUMN IF EXISTS updated_at;