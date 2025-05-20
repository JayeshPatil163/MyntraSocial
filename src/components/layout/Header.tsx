
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X, Compass, Users, MessageSquare } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import NavDropdown from './NavDropdown';
import { navigationCategories } from '@/lib/navigationData';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems: cartItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search for:', searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrnmr3CB1oDs0WqiWPzNxENXCnRE-1yKVKw&s" 
                alt="Myntra Logo" 
                className="h-10 md:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation using NavDropdown */}
          <NavDropdown category={navigationCategories} />

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-sm bg-gray-100 text-gray-900 py-3 text-xs w-full pl-10 p-2.5 focus:outline-none focus:ring-0.5 focus:ring-gray-600 focus:border focus:border-gray-100 focus:bg-white"
                  placeholder="Search for products, brands and more"
                />
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex ml-10 items-center space-x-10">
            {/* Profile with Hover Card */}
            <div className="relative hidden md:flex flex-col items-center">
              <HoverCard openDelay={100} closeDelay={200}>
                <HoverCardTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-transparent flex flex-col items-center">
                  {isAuthenticated && user?.avatar ? (
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="font-normal">{user.name[0]?.toUpperCase()}</AvatarFallback>
                      </Avatar>
                  ) : (
                    <User size={20} />
                  )}  
                  <span className="text-xs font-bold">Profile</span>
                </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  {isAuthenticated ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={user?.avatar} />
                          <AvatarFallback>{user?.name[0]?.toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Hi, {user?.name}</h4>
                          <p className="text-xs text-gray-500">@{user?.username || user?.name?.toLowerCase().replace(' ', '')}</p>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="grid grid-cols-2 gap-3">
                        <Link to="/profile">
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <User size={16} className="mr-2" />
                            My Profile
                          </Button>
                        </Link>
                        <Link to="/wishlist">
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <Heart size={16} className="mr-2" />
                            Wishlist ({wishlistItems})
                          </Button>
                        </Link>
                        <Link to="/cart">
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <ShoppingBag size={16} className="mr-2" />
                            My Bag ({cartItems})
                          </Button>
                        </Link>
                        <Link to="/community">
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <MessageSquare size={16} className="mr-2" />
                            Community
                          </Button>
                        </Link>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <Link to="/groups">
                          <Button variant="ghost" size="sm">
                            <Users size={16} className="mr-1" />
                            Groups
                          </Button>
                        </Link>
                        
                        <Button variant="ghost" size="sm" onClick={logout}>
                          Logout
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h4 className="font-medium">Welcome to Myntra</h4>
                      <p className="text-sm text-gray-500">Sign in to access your account and personalized shopping experience</p>
                      <div className="grid grid-cols-2 gap-3">
                        <Link to="/login">
                          <Button variant="outline" className="w-full">Login</Button>
                        </Link>
                        <Link to="/signup">
                          <Button className="w-full">Sign Up</Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Wishlist */}
            <div className="relative hidden md:flex flex-col items-center">
              <Link to="/wishlist" className="flex flex-col items-center">
                <div className="relative">
                  <Heart size={20} strokeWidth={1}/>
                  {wishlistItems > 0 && (
                    <span className="badge-count">{wishlistItems}</span>
                  )}
                </div>
                <span className="text-xs font-bold mt-1">Wishlist</span>
              </Link>
            </div>

            {/* Cart */}
            <div className="relative hidden md:flex flex-col items-center">
              <Link to="/cart" className="flex flex-col items-center">
                <div className="relative">
                  <ShoppingBag size={20} strokeWidth={1}/>
                  {cartItems > 0 && (
                    <span className="badge-count">{cartItems}</span>
                  )}
                </div>
                <span className="text-xs font-bold mt-1">Bag</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t pt-2 pb-4 px-4">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-full w-full pl-10 p-2.5 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Search for products, brands"
              />
            </div>
          </form>
          
          <nav className="flex flex-col space-y-3">
            {navigationCategories.map((category) => (
              <Link 
                key={category.name} 
                to={category.path}
                className="nav-link font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            
            {/* New social links */}
            <Link 
              to="/community"
              className="flex items-center space-x-2 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageSquare size={18} />
              <span>Community</span>
            </Link>
            
            <Link 
              to="/discover"
              className="flex items-center space-x-2 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Compass size={18} />
              <span>Discover People</span>
            </Link>
            
            <Link 
              to="/groups"
              className="flex items-center space-x-2 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Users size={18} />
              <span>Shopping Groups</span>
            </Link>
            
            <div className="flex justify-between py-2 border-b border-gray-100">
              <Link 
                to="/wishlist"
                className="flex items-center space-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart size={18} />
                <span>Wishlist ({wishlistItems})</span>
              </Link>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-100">
              <Link 
                to="/cart"
                className="flex items-center space-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingBag size={18} />
                <span>Bag ({cartItems})</span>
              </Link>
            </div>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/profile"
                  className="flex items-center space-x-2 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={18} />
                  <span>Profile</span>
                </Link>
                
                <Button 
                  variant="link" 
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="justify-start p-0 py-2"
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex space-x-4 pt-2">
                <Button 
                  asChild 
                  size="sm" 
                  variant="outline"
                  className="flex-1"
                >
                  <Link 
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  size="sm"
                  className="flex-1"
                >
                  <Link 
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
