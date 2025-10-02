import { Link } from "react-router-dom";
import luxuryImg from "@/assets/collection-luxury.jpg";
import smartImg from "@/assets/collection-smart.jpg";
import casualImg from "@/assets/collection-casual.jpg";
import classicImg from "@/assets/collection-classic.jpg";

const categories = [
  {
    title: "Luxury",
    description: "Premium timepieces for the discerning collector",
    image: luxuryImg,
    href: "#luxury",
  },
  {
    title: "Smart",
    description: "Technology meets style in perfect harmony",
    image: smartImg,
    href: "#smart",
  },
  {
    title: "Casual",
    description: "Everyday elegance for every occasion",
    image: casualImg,
    href: "#casual",
  },
  {
    title: "Classic",
    description: "Timeless designs that never go out of style",
    image: classicImg,
    href: "#classic",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-secondary/30" id="collections">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Explore Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect watch from our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={`/category/${category.title.toLowerCase()}`}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-luxury transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <picture>
                  <source
                    srcSet={`${category.image}?w=300 300w, ${category.image}?w=600 600w, ${category.image}?w=900 900w`}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    type="image/jpeg"
                  />
                  <img
                    src={category.image}
                    alt={`${category.title} watches collection`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
                <h3 className="font-serif text-2xl font-semibold mb-2 transform transition-transform group-hover:translate-y-[-4px]">
                  {category.title}
                </h3>
                <p className="text-sm opacity-90 transition-opacity group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
