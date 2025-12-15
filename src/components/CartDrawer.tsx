import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-display text-xl flex items-center gap-2">
              <ShoppingBag size={20} />
              SHPORTA ({getTotalItems()})
            </h2>
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
              <X size={24} />
            </Button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Shporta juaj është bosh</p>
                <Button 
                  className="mt-4"
                  onClick={() => setIsCartOpen(false)}
                >
                  Vazhdo Blerjen
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div 
                    key={`${item.product.id}-${item.size}`} 
                    className="flex gap-4 p-3 bg-card rounded-lg border border-border"
                  >
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm line-clamp-2">{item.product.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Madhësia: {item.size}
                      </p>
                      <p className="font-bold mt-1">{item.product.currentPrice.toFixed(2)}€</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-7 w-7 ml-auto text-destructive"
                          onClick={() => removeFromCart(item.product.id, item.size)}
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Totali:</span>
                <span className="text-2xl font-bold">{getTotalPrice().toFixed(2)}€</span>
              </div>
              <Link 
                to="/checkout" 
                className="block"
                onClick={() => setIsCartOpen(false)}
              >
                <Button className="w-full" size="lg">
                  VAZHDO ME CHECKOUT
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
