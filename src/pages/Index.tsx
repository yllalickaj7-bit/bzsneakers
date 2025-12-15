import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import FeatureBanner from '@/components/FeatureBanner';
import BrandBanners from '@/components/BrandBanners';
import CategoryCards from '@/components/CategoryCards';
import ProductSection from '@/components/ProductSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { newProducts, saleProducts, menProducts, womenProducts } from '@/data/products';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <FeatureBanner />
        <BrandBanners />
        <CategoryCards />
        <ProductSection 
          title="Produkte të Reja" 
          products={newProducts.slice(0, 4)} 
          id="produkte"
        />
        <ProductSection 
          title="Produkte me Zbritje" 
          products={saleProducts.slice(0, 8)} 
          id="zbritje"
        />
        <div className="bg-secondary py-2">
          <ProductSection 
            title="Për Meshkuj" 
            products={menProducts.slice(0, 4)} 
            id="meshkuj"
          />
        </div>
        <ProductSection 
          title="Për Femra" 
          products={womenProducts.slice(0, 4)} 
          id="femra"
        />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
