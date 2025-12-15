import { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p className="animate-pulse-soft">
          🎉 ZBRITJET E FUNDVITIT - Deri në <span className="font-bold">70% OFF</span> 🎉
        </p>
      </div>

      {/* Main header */}
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl tracking-wider">
              BZ SNEAKERS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="nav-link">Ballina</a>
            <a href="#produkte" className="nav-link">Atlete</a>
            <a href="#meshkuj" className="nav-link">Meshkuj</a>
            <a href="#femra" className="nav-link">Femra</a>
            <a href="#zbritje" className="nav-link text-sale">Zbritje</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-sale text-sale-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            <a href="/" className="nav-link py-2">Ballina</a>
            <a href="#produkte" className="nav-link py-2">Atlete</a>
            <a href="#meshkuj" className="nav-link py-2">Meshkuj</a>
            <a href="#femra" className="nav-link py-2">Femra</a>
            <a href="#zbritje" className="nav-link py-2 text-sale">Zbritje</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
