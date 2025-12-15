import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
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
                href="#" 
                className="hover:opacity-70 transition-opacity"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Linqe të Shpejta</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Ballina</a></li>
              <li><a href="#produkte" className="hover:opacity-100 transition-opacity">Të gjitha produktet</a></li>
              <li><a href="#meshkuj" className="hover:opacity-100 transition-opacity">Meshkuj</a></li>
              <li><a href="#femra" className="hover:opacity-100 transition-opacity">Femra</a></li>
              <li><a href="#zbritje" className="hover:opacity-100 transition-opacity">Zbritje</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Shërbimi i Klientit</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Rreth nesh</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Politikat e kthimit</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Dërgesa</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Pyetje të shpeshta</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Na Kontaktoni</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+383 44 XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@bzsneakers.com</span>
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
