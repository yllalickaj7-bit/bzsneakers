import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useProductsByCategory, useNewProducts, useSaleProducts } from '@/hooks/useProducts';

const categoryMeta: Record<string, { title: string; description: string; type: 'category' | 'new' | 'sale' }> = {
  'te-gjitha': {
    title: 'Të Gjitha Atletet',
    description: 'Shfletoni koleksionin tonë të plotë të këpucëve',
    type: 'category',
  },
  'meshkuj': {
    title: 'Për Meshkuj',
    description: 'Këpucë sportive për meshkuj',
    type: 'category',
  },
  'femra': {
    title: 'Për Femra',
    description: 'Këpucë sportive për femra',
    type: 'category',
  },
  'zbritje': {
    title: 'Produkte me Zbritje',
    description: 'Çmimet më të mira - kurseni deri në 70%',
    type: 'sale',
  },
  'te-reja': {
    title: 'Produkte të Reja',
    description: 'Modelet më të fundit në dyqanin tonë',
    type: 'new',
  },
};

const CategoryPage = () => {
  const { category } = useParams();
  const meta = categoryMeta[category || ''] || categoryMeta['te-gjitha'];
  
  // Use the appropriate hook based on category type
  const { data: categoryProducts, isLoading: loadingCategory } = useProductsByCategory(
    meta.type === 'category' ? (category || 'te-gjitha') : ''
  );
  const { data: newProducts, isLoading: loadingNew } = useNewProducts();
  const { data: saleProducts, isLoading: loadingSale } = useSaleProducts();
  
  // Select the right products based on category type
  const products = meta.type === 'new' ? newProducts : 
                   meta.type === 'sale' ? saleProducts : 
                   categoryProducts;
  const isLoading = meta.type === 'new' ? loadingNew : 
                    meta.type === 'sale' ? loadingSale : 
                    loadingCategory;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary border-b border-border">
          <div className="container py-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft size={20} />
              <span>Kthehu në Ballina</span>
            </Link>
          </div>
        </div>

        {/* Header */}
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-display mb-4">{meta.title}</h1>
            <p className="text-lg opacity-80">{meta.description}</p>
            {!isLoading && products && (
              <p className="mt-4 text-sm opacity-60">{products.length} produkte</p>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container">
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-square rounded-lg" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>
            ) : !products || products.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">Nuk ka produkte në këtë kategori</p>
                <Link to="/">
                  <Button>Kthehu në Ballina</Button>
                </Link>
              </div>
            ) : (
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
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
