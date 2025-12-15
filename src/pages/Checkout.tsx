import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    street: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.city || !formData.street) {
      toast.error('Ju lutem plotësoni të gjitha fushat e detyrueshme');
      return;
    }

    // Build the WhatsApp message
    const orderDetails = items.map(item => 
      `• ${item.product.name} (Madhësia: ${item.size}) x${item.quantity} - ${(item.product.currentPrice * item.quantity).toFixed(2)}€`
    ).join('\n');

    const message = `🛒 *POROSI E RE - BZ SNEAKERS*

👤 *Të dhënat e klientit:*
Emri: ${formData.firstName} ${formData.lastName}
Telefoni: ${formData.phone}
Qyteti: ${formData.city}
Adresa: ${formData.street}
${formData.notes ? `Shënime: ${formData.notes}` : ''}

📦 *Produktet:*
${orderDetails}

💰 *TOTALI: ${getTotalPrice().toFixed(2)}€*

Faleminderit për porosinë tuaj!`;

    // Encode and create WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/38343502651?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Clear cart and redirect
    clearCart();
    toast.success('Porosia u dërgua me sukses!');
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-display mb-4">Shporta juaj është bosh</h1>
            <Link to="/">
              <Button>Kthehu në Dyqan</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-secondary">
        {/* Breadcrumb */}
        <div className="container py-4">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft size={20} />
            <span>Kthehu në Dyqan</span>
          </Link>
        </div>

        <div className="container pb-12">
          <h1 className="text-3xl md:text-4xl font-display mb-8">CHECKOUT</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-background rounded-lg p-6 space-y-6">
                <h2 className="font-display text-xl">TË DHËNAT E DËRGESËS</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Emri *</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Shkruaj emrin"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Mbiemri *</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Shkruaj mbiemrin"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Numri i Telefonit *</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+383 44 XXX XXX"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Qyteti *</Label>
                  <Input 
                    id="city" 
                    name="city" 
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="P.sh. Prishtinë"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="street">Adresa / Rruga *</Label>
                  <Input 
                    id="street" 
                    name="street" 
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Rruga, numri i ndërtesës, kati"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Shënime për Porosinë (opsionale)</Label>
                  <Textarea 
                    id="notes" 
                    name="notes" 
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Komente shtesë për dërgesën..."
                    rows={3}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <MessageCircle size={20} />
                  DËRGO POROSINË NË WHATSAPP
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Duke klikuar butonin, do të ridrejtoheni në WhatsApp për të konfirmuar porosinë tuaj.
                </p>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-background rounded-lg p-6 sticky top-24">
                <h2 className="font-display text-xl mb-4">PËRMBLEDHJA E POROSISË</h2>
                
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {items.map((item) => (
                    <div 
                      key={`${item.product.id}-${item.size}`} 
                      className="flex gap-3 pb-4 border-b border-border"
                    >
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm line-clamp-1">{item.product.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          Madhësia: {item.size} | Sasia: {item.quantity}
                        </p>
                        <p className="font-bold text-sm mt-1">
                          {(item.product.currentPrice * item.quantity).toFixed(2)}€
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-border mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Nëntotali</span>
                    <span>{getTotalPrice().toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Dërgesa</span>
                    <span className="text-success">Falas</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                    <span>Totali</span>
                    <span>{getTotalPrice().toFixed(2)}€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
