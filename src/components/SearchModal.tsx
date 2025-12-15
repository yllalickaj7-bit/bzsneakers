import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredProducts = query.length >= 2
    ? products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleProductClick = () => {
    setQuery('');
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 z-50 animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-2xl animate-fade-in">
        <div className="container py-4">
          {/* Search Input */}
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Kërko produkte sipas emrit ose markës..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg"
              />
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={24} />
            </Button>
          </div>

          {/* Results */}
          {query.length >= 2 && (
            <div className="mt-4 pb-4">
              {filteredProducts.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Nuk u gjet asnjë produkt për "{query}"
                </p>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-4">
                    {filteredProducts.length} rezultate për "{query}"
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[60vh] overflow-y-auto">
                    {filteredProducts.map(product => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={handleProductClick}
                        className="flex gap-4 p-3 rounded-lg border border-border hover:bg-secondary transition-colors"
                      >
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground uppercase">{product.brand}</p>
                          <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                          <p className="font-bold text-sm mt-1">{product.currentPrice.toFixed(2)}€</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quick Links */}
          {query.length < 2 && (
            <div className="mt-4 pb-4">
              <p className="text-sm text-muted-foreground mb-3">Kërko sipas markës:</p>
              <div className="flex flex-wrap gap-2">
                {['Nike', 'Adidas', 'New Balance', 'Puma', 'Converse', 'Vans'].map(brand => (
                  <button
                    key={brand}
                    onClick={() => setQuery(brand)}
                    className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchModal;
