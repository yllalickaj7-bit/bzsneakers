import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block bg-[hsl(var(--sale))] text-[hsl(var(--sale-foreground))] px-4 py-1 text-sm font-bold uppercase tracking-wider rounded">
              Zbritje deri në 70%
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight">
              ZBRITJET E<br />
              <span className="text-[hsl(var(--gold))]">FUNDVITIT!</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Të gjitha modelet e këpucëve tani me zbritje të jashtëzakonshme — 
              çmimet duke filluar nga vetëm <span className="font-bold">29.99€</span>!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold uppercase tracking-wide"
                onClick={() => scrollToSection('produkte')}
              >
                Shiko Koleksionin
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold uppercase tracking-wide"
                onClick={() => scrollToSection('produkte-reja')}
              >
                Produkte të Reja
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&h=600&fit=crop"
                alt="Featured Sneaker"
                className="w-full h-auto rounded-lg shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-10 right-10 w-full h-full bg-[hsl(var(--gold))]/20 rounded-lg transform rotate-[5deg]"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(var(--gold))]/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
