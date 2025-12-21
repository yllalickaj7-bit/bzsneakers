import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { allProducts, menProducts, womenProducts, saleProducts, newProducts } from '@/data/products';

const categoryConfig: Record<string, { title: string; description: string; products: typeof allProducts }> = {
  'te-gjitha': {
    title: 'Të Gjitha Atletet',
    description: 'Shfletoni koleksionin tonë të plotë të këpucëve',
    products: allProducts,
  },
  'meshkuj': {
    title: 'Për Meshkuj',
    description: 'Këpucë sportive për meshkuj',
    products: menProducts,
  },
  'femra': {
    title: 'Për Femra',
    description: 'Këpucë sportive për femra',
    products: womenProducts,
  },
  'zbritje': {
    title: 'Produkte me Zbritje',
    description: 'Çmimet më të mira - kurseni deri në 70%',
    products: saleProducts,
  },
  'te-reja': {
    title: 'Produkte të Reja',
    description: 'Modelet më të fundit në dyqanin tonë',
    products: newProducts,
  },
};

const CategoryPage = () => {
  const { category } = useParams();
  const config = categoryConfig[category || ''] || categoryConfig['te-gjitha'];

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
            <h1 className="text-4xl md:text-5xl font-display mb-4">{config.title}</h1>
            <p className="text-lg opacity-80">{config.description}</p>
            <p className="mt-4 text-sm opacity-60">{config.products.length} produkte</p>
          </div>
        </div>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container">
            {config.products.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">Nuk ka produkte në këtë kategori</p>
                <Link to="/">
                  <Button>Kthehu në Ballina</Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {config.products.map((product, index) => (
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
