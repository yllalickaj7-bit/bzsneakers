import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import FeatureBanner from '@/components/FeatureBanner';
import BrandBanners from '@/components/BrandBanners';
import CategoryCards from '@/components/CategoryCards';
import ProductSection from '@/components/ProductSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { useNewProducts, useSaleProducts, useMenProducts, useWomenProducts } from '@/hooks/useProducts';
import { Skeleton } from '@/components/ui/skeleton';

const ProductSectionSkeleton = () => (
  <div className="py-8 md:py-16">
    <div className="container">
      <Skeleton className="h-10 w-64 mx-auto mb-8" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-square rounded-lg" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  const { data: newProducts, isLoading: loadingNew } = useNewProducts();
  const { data: saleProducts, isLoading: loadingSale } = useSaleProducts();
  const { data: menProducts, isLoading: loadingMen } = useMenProducts();
  const { data: womenProducts, isLoading: loadingWomen } = useWomenProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <FeatureBanner />
        <BrandBanners />
        <CategoryCards />
        
        {loadingNew ? <ProductSectionSkeleton /> : newProducts && newProducts.length > 0 && (
          <ProductSection 
            title="Produkte të Reja" 
            products={newProducts.slice(0, 4)} 
            viewAllLink="/category/te-reja"
          />
        )}
        
        {loadingSale ? <ProductSectionSkeleton /> : saleProducts && saleProducts.length > 0 && (
          <ProductSection 
            title="Produkte me Zbritje" 
            products={saleProducts.slice(0, 8)} 
            viewAllLink="/category/zbritje"
          />
        )}
        
        <div className="bg-secondary py-2">
          {loadingMen ? <ProductSectionSkeleton /> : menProducts && menProducts.length > 0 && (
            <ProductSection 
              title="Për Meshkuj" 
              products={menProducts.slice(0, 4)} 
              viewAllLink="/category/meshkuj"
            />
          )}
        </div>
        
        {loadingWomen ? <ProductSectionSkeleton /> : womenProducts && womenProducts.length > 0 && (
          <ProductSection 
            title="Për Femra" 
            products={womenProducts.slice(0, 4)} 
            viewAllLink="/category/femra"
          />
        )}
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
