import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Heart, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { getProductsByCategory } from "@/data/products";

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const products = getProductsByCategory(category || "");

  useEffect(() => {
    if (category) {
      document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} Watches - WatchWave`;
    }
  }, [category]);

  if (!category || products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Category not found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container px-4">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Button>

          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                {category.charAt(0).toUpperCase() + category.slice(1)} Collection
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our premium {category} timepieces, crafted for style and precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const inWishlist = isInWishlist(product.id);
                const toggleWishlist = () => {
                  if (inWishlist) {
                    removeFromWishlist(product.id);
                  } else {
                    addToWishlist(product);
                  }
                };

                return (
                  <div
                    key={product.id}
                    className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500"
                  >
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </div>
                    )}

                    {/* Wishlist Button */}
                    <button
                      className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                      onClick={toggleWishlist}
                      aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart
                        className={`h-5 w-5 ${inWishlist ? "fill-destructive text-destructive" : ""}`}
                      />
                    </button>

                    {/* Image */}
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <picture>
                          <source
                            srcSet={`${product.image}?w=300 300w, ${product.image}?w=600 600w, ${product.image}?w=600 600w, ${product.image}?w=900 900w`}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            type="image/jpeg"
                          />
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                          />
                        </picture>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <Link to={`/product/${product.id}`}>
                          <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span className="font-medium text-foreground">{product.rating}</span>
                          </div>
                          <span>({product.reviews} reviews)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="font-serif text-2xl font-bold">{product.priceDisplay}</p>
                        <Button
                          variant="luxury"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
