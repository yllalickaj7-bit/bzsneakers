import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl">BZ SNEAKERS</h3>
            <p className="text-sm opacity-80">
              Dyqani juaj i preferuar për këpucë origjinale me çmime të volitshme.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/bz.sneakerss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://wa.me/38343502651" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Linqe të Shpejta</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Ballina</Link></li>
              <li><button onClick={() => scrollToSection('produkte')} className="hover:opacity-100 transition-opacity">Të gjitha produktet</button></li>
              <li><button onClick={() => scrollToSection('meshkuj')} className="hover:opacity-100 transition-opacity">Meshkuj</button></li>
              <li><button onClick={() => scrollToSection('femra')} className="hover:opacity-100 transition-opacity">Femra</button></li>
              <li><button onClick={() => scrollToSection('zbritje')} className="hover:opacity-100 transition-opacity">Zbritje</button></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Shërbimi i Klientit</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="https://wa.me/38343502651" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Na Kontaktoni</a></li>
              <li><span className="cursor-default">Politikat e kthimit</span></li>
              <li><span className="cursor-default">Dërgesa Falas</span></li>
              <li><span className="cursor-default">Pyetje të shpeshta</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Na Kontaktoni</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="https://wa.me/38343502651" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                  +383 43 502 651
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <a href="https://instagram.com/bz.sneakerss" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                  @bz.sneakerss
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>Prishtinë, Kosovë</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>© 2024 BZ Sneakers. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
