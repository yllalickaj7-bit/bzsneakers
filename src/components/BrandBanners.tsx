import { ChevronRight } from 'lucide-react';

const brands = [
  {
    name: 'Nike',
    tagline: 'Fuqi dhe Stil',
    description: 'Bli patikat Nike për rehati dhe performancë çdo ditë.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=400&fit=crop',
    color: 'from-red-600 to-red-900',
  },
  {
    name: 'Adidas',
    tagline: 'Komoditet dhe Rezistencë',
    description: 'Zgjidh patikat Adidas për stil modern dhe lëvizje të lirë.',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=400&fit=crop',
    color: 'from-blue-600 to-blue-900',
  },
  {
    name: 'New Balance',
    tagline: 'Stabilitet dhe Besueshmëri',
    description: 'Shijo patikat New Balance për rehati afatgjatë në çdo hap.',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=400&fit=crop',
    color: 'from-gray-600 to-gray-900',
  },
];

const BrandBanners = () => {
  const scrollToSection = () => {
    const element = document.getElementById('produkte');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <button
              key={brand.name}
              onClick={scrollToSection}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-64 w-full text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${brand.color} opacity-70 group-hover:opacity-80 transition-opacity`}></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground">
                <p className="text-sm uppercase tracking-wider opacity-90">{brand.tagline}</p>
                <h3 className="text-2xl font-display mb-2">{brand.name}</h3>
                <p className="text-sm opacity-80 mb-4 line-clamp-2">{brand.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all">
                  <span>Shiko më shumë</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBanners;
