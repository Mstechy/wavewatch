import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Warranty from "./pages/Warranty";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import WatchCareGuide from "./pages/WatchCareGuide";
import Authenticity from "./pages/Authenticity";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/category/:category", element: <Category /> },
  { path: "/search", element: <Search /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <Wishlist /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/contact", element: <Contact /> },
  { path: "/shipping", element: <Shipping /> },
  { path: "/returns", element: <Returns /> },
  { path: "/warranty", element: <Warranty /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/about", element: <About /> },
  { path: "/watch-care-guide", element: <WatchCareGuide /> },
  { path: "/authenticity", element: <Authenticity /> },
  { path: "/careers", element: <Careers /> },
  { path: "/press", element: <Press /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WishlistProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <RouterProvider router={router} />
        </CartProvider>
      </WishlistProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
