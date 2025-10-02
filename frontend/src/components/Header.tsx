import { useState } from "react";
import { ShoppingCart, Search, Menu, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Header = () => {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-luxury">
            <div className="h-6 w-6 rounded-full border-2 border-primary-foreground" />
          </div>
          <span className="font-serif text-xl font-semibold tracking-tight">
            WatchWave
          </span>
        </Link>

        {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
          <Link to="/category/luxury" className="text-sm font-medium transition-colors hover:text-accent">
            Luxury Watches
          </Link>
          <Link to="/category/casual" className="text-sm font-medium transition-colors hover:text-accent">
            Casual Watches
          </Link>
          <Link to="/category/smart" className="text-sm font-medium transition-colors hover:text-accent">
            Smart Watches
          </Link>
          <Link to="/category/classic" className="text-sm font-medium transition-colors hover:text-accent">
            Classic Watches
          </Link>
          <a href="#collections" className="text-sm font-medium transition-colors hover:text-accent">
            Collections
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="hidden sm:flex items-center gap-2">
            <Input
              type="search"
              placeholder="Search watches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48"
            />
            <Button type="submit" variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
          </form>
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-label="Search"
            onClick={() => alert('Search functionality coming soon')}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:flex" 
            aria-label="User Account"
            onClick={() => alert('User account functionality coming soon')}
          >
            <User className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => navigate("/wishlist")}
          >
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                {wishlistCount}
              </span>
            )}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-6">
                {/* Navigation Links */}
                <SheetClose asChild>
                  <Link to="/category/luxury" className="text-lg font-medium transition-colors hover:text-accent">
                    Luxury
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/category/casual" className="text-lg font-medium transition-colors hover:text-accent">
                    Casual
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/category/smart" className="text-lg font-medium transition-colors hover:text-accent">
                    Smart
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/category/classic" className="text-lg font-medium transition-colors hover:text-accent">
                    Classic
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#collections" className="text-lg font-medium transition-colors hover:text-accent">
                    Collections
                  </a>
                </SheetClose>
                {/* Actions for mobile */}
                <div className="border-t pt-4 mt-4">
                  <form onSubmit={handleSearch} className="flex gap-2">
                    <Input
                      type="search"
                      placeholder="Search watches..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" variant="ghost" size="icon">
                      <Search className="h-5 w-5" />
                    </Button>
                  </form>
                  <SheetClose asChild>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => alert('User account functionality coming soon')}>
                      <User className="h-5 w-5 mr-2" />
                      Account
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
