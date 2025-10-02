import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { Heart, ShoppingBag } from "lucide-react";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    document.title = "My Wishlist - WatchWave";
  }, []);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container px-4">
            <div className="max-w-md mx-auto text-center space-y-6">
              <Heart className="h-24 w-24 mx-auto text-muted-foreground" />
              <h1 className="font-serif text-3xl font-bold">Your wishlist is empty</h1>
              <p className="text-muted-foreground">
                Start browsing and add items to your wishlist
              </p>
              <Button variant="luxury" size="lg" onClick={() => navigate("/")}>
                Continue Shopping
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container px-4">
          <h1 className="font-serif text-4xl font-bold mb-8">My Wishlist</h1>

          <div className="grid gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl p-6 shadow-card flex gap-6"
              >
                <Link
                  to={`/product/${item.id}`}
                  className="w-24 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </Link>

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link
                        to={`/product/${item.id}`}
                        className="font-serif text-xl font-semibold hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-muted-foreground text-sm capitalize">
                        {item.category}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Heart className="h-5 w-5 text-destructive fill-destructive" />
                    </Button>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <p className="font-serif text-xl font-bold">
                      {item.priceDisplay}
                    </p>
                    <Button
                      variant="luxury"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/")}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Continue Shopping
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
