import { Truck, Shield, RefreshCcw, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Dërgesa Falas',
    description: 'Për porosi mbi 50€',
  },
  {
    icon: Shield,
    title: 'Produkte Origjinale',
    description: '100% autentike',
  },
  {
    icon: RefreshCcw,
    title: 'Kthim i Lehtë',
    description: 'Brenda 14 ditëve',
  },
  {
    icon: Headphones,
    title: 'Mbështetje 24/7',
    description: 'Ndihmë e shpejtë',
  },
];

const FeatureBanner = () => {
  return (
    <section className="py-8 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <feature.icon size={24} className="text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
