
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { X, ShoppingBag, Share, Lock, Globe, Users } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';

const WishlistPage = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [privacyStatus, setPrivacyStatus] = useState<'public' | 'private' | 'friends-only'>('private');
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  
  const handleShareItem = (productId: string) => {
    setSelectedItemId(productId);
    setShowShareDialog(true);
  };
  
  const handleShareWithGroup = (groupId: string) => {
    // In a real app, we would send an API request to share the item
    setShowShareDialog(false);
    
    toast({
      title: "Item Shared",
      description: "Item has been shared with the group",
    });
  };
  
  const handlePrivacyChange = (privacy: 'public' | 'private' | 'friends-only') => {
    setPrivacyStatus(privacy);
    
    toast({
      title: "Privacy Updated",
      description: `Your wishlist is now ${privacy === 'public' ? 'public' : privacy === 'private' ? 'private' : 'visible to friends only'}`,
    });
  };
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h1>
            <p className="text-gray-500 mb-8">Save items that you like in your wishlist. Review them anytime and easily move them to the bag.</p>
            <Link to="/">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold mb-2 md:mb-0">My Wishlist ({items.length})</h1>
          
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  {privacyStatus === 'public' && <Globe className="mr-2 h-4 w-4" />}
                  {privacyStatus === 'private' && <Lock className="mr-2 h-4 w-4" />}
                  {privacyStatus === 'friends-only' && <Users className="mr-2 h-4 w-4" />}
                  {privacyStatus === 'public' ? 'Public' : privacyStatus === 'private' ? 'Private' : 'Friends Only'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handlePrivacyChange('public')}>
                  <Globe className="mr-2 h-4 w-4" />
                  Public
                  <span className="text-xs text-gray-500 ml-2">Anyone can view</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handlePrivacyChange('friends-only')}>
                  <Users className="mr-2 h-4 w-4" />
                  Friends Only
                  <span className="text-xs text-gray-500 ml-2">Only friends can view</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handlePrivacyChange('private')}>
                  <Lock className="mr-2 h-4 w-4" />
                  Private
                  <span className="text-xs text-gray-500 ml-2">Only you can view</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button asChild>
              <Link to="/discover">Discover People</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <Link to={`/product/${item.product.id}`}>
                  <img 
                    src={item.product.images[0]} 
                    alt={item.product.title}
                    className="w-full h-64 object-cover"
                  />
                </Link>
                <button 
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
                  onClick={() => removeFromWishlist(item.product.id)}
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium truncate">{item.product.brand}</h3>
                <p className="text-sm text-gray-500 truncate">{item.product.title}</p>
                <div className="flex items-center mt-1">
                  <span className="font-semibold">₹{item.product.discountedPrice || item.product.price}</span>
                  {item.product.discountedPrice && (
                    <>
                      <span className="text-gray-400 text-xs line-through ml-2">₹{item.product.price}</span>
                      <span className="text-primary text-xs ml-2">{item.product.discountPercentage}% OFF</span>
                    </>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button 
                    className="w-full flex items-center justify-center"
                    onClick={() => {
                      // Since we need a size, we'll use the first available size
                      if (item.product.sizes.length > 0) {
                        addToCart(item.product, 1, item.product.sizes[0]);
                      }
                    }}
                  >
                    <ShoppingBag size={16} className="mr-2" />
                    Add to Bag
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => handleShareItem(item.product.id)}
                  >
                    <Share size={16} className="mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Share dialog */}
        <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share with Groups</DialogTitle>
              <DialogDescription>
                Select a shopping group to share this item with.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-2">
              {/* Mock groups for demo */}
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <h3 className="font-medium">Shopping Group {idx + 1}</h3>
                    <p className="text-sm text-gray-500">{3 + idx} members</p>
                  </div>
                  <Button 
                    size="sm"
                    onClick={() => handleShareWithGroup(`group-${idx}`)}
                  >
                    Share
                  </Button>
                </div>
              ))}
              
              {/* Create group link */}
              <div className="text-center pt-4">
                <Link to="/groups" className="text-primary hover:underline">
                  Create a new group
                </Link>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowShareDialog(false)}>Cancel</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default WishlistPage;
