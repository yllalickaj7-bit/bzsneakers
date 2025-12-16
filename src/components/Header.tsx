import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import SearchModal from './SearchModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();
  const { user, signOut, loading } = useAuth();
  const cartCount = getTotalItems();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    toast.success('Ju u çkyçët me sukses');
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
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
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-2xl md:text-3xl tracking-wider">
                BZ SNEAKERS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="nav-link">Ballina</Link>
              <Link to="/category/te-gjitha" className="nav-link">Atlete</Link>
              <Link to="/category/meshkuj" className="nav-link">Meshkuj</Link>
              <Link to="/category/femra" className="nav-link">Femra</Link>
              <Link to="/category/zbritje" className="nav-link text-[hsl(var(--sale))]">Zbritje</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={20} />
              </Button>
              
              {/* User Account */}
              {!loading && (
                user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative">
                        <User size={20} />
                        <span className="absolute -top-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-background"></span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem className="text-sm text-muted-foreground">
                        {user.email}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-600">
                        <LogOut size={16} className="mr-2" />
                        Çkyçu
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => navigate('/auth')}
                  >
                    <User size={20} />
                  </Button>
                )
              )}
              
              <Button variant="ghost" size="icon">
                <Heart size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[hsl(var(--sale))] text-[hsl(var(--sale-foreground))] text-xs w-5 h-5 rounded-full flex items-center justify-center">
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
              <Link to="/" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Ballina</Link>
              <Link to="/category/te-gjitha" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Atlete</Link>
              <Link to="/category/meshkuj" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Meshkuj</Link>
              <Link to="/category/femra" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Femra</Link>
              <Link to="/category/zbritje" className="nav-link py-2 text-[hsl(var(--sale))]" onClick={() => setIsMenuOpen(false)}>Zbritje</Link>
              {!user && (
                <Link to="/auth" className="nav-link py-2 font-semibold text-primary" onClick={() => setIsMenuOpen(false)}>
                  Kyçu / Regjistrohu
                </Link>
              )}
              {user && (
                <button onClick={handleSignOut} className="nav-link py-2 text-left text-red-600">
                  Çkyçu
                </button>
              )}
            </nav>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
