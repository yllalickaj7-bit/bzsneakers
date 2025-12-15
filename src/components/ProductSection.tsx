import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import type { Product } from '@/data/products';

interface ProductSectionProps {
  title: string;
  products: Product[];
  id?: string;
  showViewAll?: boolean;
}

const ProductSection = ({ title, products, id, showViewAll = true }: ProductSectionProps) => {
  return (
    <section className="py-12 md:py-16" id={id}>
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">{title}</h2>
          {showViewAll && (
            <Button variant="ghost" className="hidden md:flex items-center gap-2 uppercase tracking-wider text-sm">
              Shiko të gjitha
              <ChevronRight size={18} />
            </Button>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {showViewAll && (
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="uppercase tracking-wider">
              Shiko të gjitha
              <ChevronRight size={18} className="ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
