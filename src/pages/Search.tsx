import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Heart, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { products } from "@/data/products";

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    document.title = `Search results for "${query}" - WatchWave`;
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container px-4">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Search results for "{query}"
          </h1>

          {results.length === 0 ? (
            <p className="text-muted-foreground">No results found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500"
                >
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </div>
                  )}

                  <button
                    className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                    onClick={() => {
                      const inWishlistLocal = isInWishlist(product.id);
                      if (inWishlistLocal) {
                        removeFromWishlist(product.id);
                      } else {
                        addToWishlist(product);
                      }
                    }}
                    aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-destructive text-destructive" : ""}`}
                    />
                  </button>

                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-square overflow-hidden bg-secondary">
                      <picture>
                        <source
                          srcSet={`${product.image}?w=300 300w, ${product.image}?w=600 600w, ${product.image}?w=900 900w`}
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
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
