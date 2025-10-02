import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  useEffect(() => {
    document.title = "Shopping Cart - WatchWave";
  }, []);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container px-4">
            <div className="max-w-md mx-auto text-center space-y-6">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground" />
              <h1 className="font-serif text-3xl font-bold">Your cart is empty</h1>
              <p className="text-muted-foreground">
                Start shopping to add items to your cart
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

  const total = getCartTotal();
  const shipping = total > 1500000 ? 0 : 37500;
  const finalTotal = total + shipping;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container px-4">
          <h1 className="font-serif text-4xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
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
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-5 w-5 text-destructive" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="font-serif text-xl font-bold">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 shadow-card sticky top-24 space-y-6">
                <h2 className="font-serif text-2xl font-bold">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `₦${shipping.toLocaleString()}`}</span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-sm text-accent">
                      🎉 You qualified for free shipping!
                    </p>
                  )}
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₦{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  variant="luxury"
                  size="lg"
                  className="w-full"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => navigate("/")}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
