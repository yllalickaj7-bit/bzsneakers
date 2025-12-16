import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden min-h-[500px] md:min-h-[600px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=1080&fit=crop')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-wider rounded">
              Zbritje deri në 70%
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-tight text-white">
              ZBRITJET E<br />
              <span className="text-yellow-400">FUNDVITIT!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              Të gjitha modelet e këpucëve tani me zbritje të jashtëzakonshme — 
              çmimet duke filluar nga vetëm <span className="font-bold text-yellow-400">29.99€</span>!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/category/te-gjitha">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-100 font-semibold uppercase tracking-wide shadow-lg px-8"
                >
                  Shiko Koleksionin
                  <ChevronRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/category/te-reja">
                <Button 
                  size="lg" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold uppercase tracking-wide px-8"
                >
                  Produkte të Reja
                </Button>
              </Link>
            </div>
          </div>

          {/* Featured Sneaker Image - visible on all devices */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop"
                alt="Featured Sneaker"
                className="w-full max-w-md h-auto rounded-lg shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg shadow-lg">
                -70%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
