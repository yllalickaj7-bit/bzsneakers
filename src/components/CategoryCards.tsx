const CategoryCards = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = [
    {
      name: 'Meshkuj',
      image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=700&h=500&fit=crop',
      sectionId: 'meshkuj',
    },
    {
      name: 'Femra',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&h=500&fit=crop',
      sectionId: 'femra',
    },
  ];

  return (
    <section className="py-16" id="kategori">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => scrollToSection(category.sectionId)}
              className="category-card aspect-[7/5] rounded-lg overflow-hidden group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="category-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl md:text-5xl font-display text-primary-foreground tracking-wider">
                  {category.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
