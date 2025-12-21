import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Heart, Share2, Truck, Shield, RotateCcw, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const relatedProducts = products
    .filter(p => p.id !== id && p.brand === product?.brand && p.stock > 0)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-display mb-4">Produkti nuk u gjet</h1>
            <Link to="/">
              <Button>Kthehu në Ballina</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isOutOfStock = product.stock === 0;
  const maxQuantity = Math.min(product.stock, 10);

  const handleAddToCart = () => {
    if (isOutOfStock) {
      toast.error('Ky produkt nuk është në dispozicion');
      return;
    }
    
    if (!selectedSize) {
      toast.error('Ju lutem zgjidhni madhësinë');
      return;
    }

    if (quantity > product.stock) {
      toast.error(`Vetëm ${product.stock} copë në dispozicion`);
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
    toast.success(`${product.name} u shtua në shportë`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-4">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft size={20} />
            <span>Kthehu</span>
          </Link>
        </div>

        {/* Product Section */}
        <div className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-secondary rounded-lg overflow-hidden relative">
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {isOutOfStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded font-bold">
                      I SHITUR
                    </span>
                  </div>
                )}
              </div>
              
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === index ? 'border-primary' : 'border-transparent hover:border-muted-foreground'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Brand & Badges */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm text-gold uppercase tracking-wider font-semibold">
                  {product.brand}
                </span>
                {product.discount > 0 && (
                  <span className="bg-sale text-sale-foreground px-2 py-1 text-xs font-bold rounded">
                    -{product.discount}%
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-gold text-primary px-2 py-1 text-xs font-bold rounded">
                    E RE
                  </span>
                )}
                {isOutOfStock && (
                  <span className="bg-destructive text-destructive-foreground px-2 py-1 text-xs font-bold rounded">
                    I SHITUR
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-display">{product.name}</h1>

              {/* Category */}
              <p className="text-muted-foreground capitalize">
                {product.category === 'meshkuj' ? 'Meshkuj' : 'Femra'}
              </p>

              {/* Stock Info */}
              {!isOutOfStock && (
                <p className="text-sm flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${product.stock <= 5 ? 'bg-gold' : 'bg-success'}`}></span>
                  {product.stock <= 5 ? (
                    <span className="text-gold">Vetëm {product.stock} copë të mbetura!</span>
                  ) : (
                    <span className="text-muted-foreground">{product.stock} copë në dispozicion</span>
                  )}
                </p>
              )}

              {/* Price */}
              <div className="flex items-center gap-4">
                {product.originalPrice !== product.currentPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice.toFixed(2)}€
                  </span>
                )}
                <span className="text-3xl font-bold text-gold">
                  {product.currentPrice.toFixed(2)}€
                </span>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Zgjidhni Madhësinë</span>
                  <button className="text-sm text-muted-foreground underline hover:text-foreground">
                    Udhëzues për madhësinë
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={isOutOfStock}
                      className={`py-3 rounded-lg border-2 font-medium transition-all ${
                        selectedSize === size 
                          ? 'border-primary bg-primary text-primary-foreground' 
                          : 'border-border hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <span className="font-medium">Sasia</span>
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={isOutOfStock}
                  >
                    <Minus size={18} />
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
                    disabled={isOutOfStock || quantity >= maxQuantity}
                  >
                    <Plus size={18} />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gold text-primary hover:bg-gold/90"
                  onClick={handleAddToCart}
                  disabled={isOutOfStock}
                >
                  {isOutOfStock ? 'I SHITUR' : 'SHTO NË SHPORTË'}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    toggleWishlist(product);
                    toast.success(isInWishlist(product.id) ? 'U hoq nga të preferuarat' : 'U shtua në të preferuarat');
                  }}
                  className={isInWishlist(product.id) ? 'bg-gold text-primary border-gold hover:bg-gold/90' : ''}
                >
                  <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 size={20} />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck size={24} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Dërgesa Falas</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Shield size={24} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">100% Origjinale</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <RotateCcw size={24} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Kthim 14 Ditë</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 pt-6 border-t border-border">
                <h3 className="font-display text-lg">PËRSHKRIMI</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description || `Këpucë sportive me cilësi të lartë nga ${product.brand}. Dizajn modern dhe komod për përdorim të përditshëm. Materiale të zgjedhura që garantojnë qëndrueshmëri dhe rehati maksimale.`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="bg-secondary py-12">
            <div className="container">
              <h2 className="section-title mb-8">PRODUKTE TË NGJASHME</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
