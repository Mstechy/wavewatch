import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { getProductById, getProductsByCategory } from "@/data/products";
import { Star, Heart, Shield, Truck, RotateCcw, ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const product = getProductById(Number(id));

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - WatchWave`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

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

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-secondary shadow-luxury">
                <picture>
                  <source
                    srcSet={`${product.image}?w=300 300w, ${product.image}?w=600 600w, ${product.image}?w=900 900w`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    type="image/jpeg"
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {product.badge && (
                <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </span>
              )}
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                {product.name}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="font-semibold text-lg">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-3xl font-serif font-bold">{product.priceDisplay}</p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  variant="luxury"
                  className="flex-1"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
                <Button size="lg" variant={isInWishlist(product.id) ? "luxury" : "outline"} onClick={toggleWishlist}>
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center space-y-2">
                  <Truck className="h-6 w-6 mx-auto text-accent" />
                  <p className="text-sm text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center space-y-2">
                  <Shield className="h-6 w-6 mx-auto text-accent" />
                  <p className="text-sm text-muted-foreground">2 Year Warranty</p>
                </div>
                <div className="text-center space-y-2">
                  <RotateCcw className="h-6 w-6 mx-auto text-accent" />
                  <p className="text-sm text-muted-foreground">30 Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold">You May Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500"
                  >
                    <div className="aspect-square overflow-hidden bg-secondary">
                      <picture>
                        <source
                          srcSet={`${relatedProduct.image}?w=300 300w, ${relatedProduct.image}?w=600 600w, ${relatedProduct.image}?w=900 900w`}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          type="image/jpeg"
                        />
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-serif text-lg font-semibold group-hover:text-accent transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="font-serif text-xl font-bold">
                        {relatedProduct.priceDisplay}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
