import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {product.discount > 0 && (
          <span className="sale-badge">-{product.discount}%</span>
        )}
        {product.isNew && !product.discount && (
          <span className="absolute top-3 left-3 bg-success text-primary-foreground px-2 py-1 text-xs font-bold rounded">
            E RE
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        <div className="product-actions">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Heart size={18} />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full">
            <Eye size={18} />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full">
            <ShoppingBag size={18} />
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.brand}
        </p>
        <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground capitalize">
          {product.category === 'meshkuj' ? 'Meshkuj' : 'Femra'}
        </p>
        <div className="flex items-center gap-2">
          {product.originalPrice !== product.currentPrice && (
            <span className="price-original">{product.originalPrice.toFixed(2)}€</span>
          )}
          <span className="price-current">{product.currentPrice.toFixed(2)}€</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
