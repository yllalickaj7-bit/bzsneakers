import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Faleminderit!",
        description: "Ju jeni regjistruar me sukses në newsletter-in tonë.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Mail size={48} className="mx-auto opacity-80" />
          <h2 className="text-3xl md:text-4xl font-display">
            Regjistrohu për Ofertat Ekskluzive
          </h2>
          <p className="text-lg opacity-80">
            Merr njoftimet e para për produktet e reja dhe zbritjet speciale.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email adresa juaj"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              required
            />
            <Button 
              type="submit"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Send size={18} className="mr-2" />
              Regjistrohu
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
