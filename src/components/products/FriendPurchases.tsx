
import { Purchase, Product } from '@/lib/types';
import { useAuth } from '@/contexts/AuthContext';
import { Users, User, ShoppingBag } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

interface FriendPurchasesProps {
  product: Product;
}

const FriendPurchases = ({ product }: FriendPurchasesProps) => {
  const { user } = useAuth();
  const purchases = product.purchases || [];
  
  // Filter purchases to only show friends
  // In a real app, this would check against user.friends array
  const friendPurchases = user ? purchases.filter(purchase => 
    purchase.userId !== user.id && 
    (user.friends?.includes(purchase.userId) || false)
  ) : [];

  if (friendPurchases.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center mb-3">
        <Users size={18} className="mr-2 text-primary" />
        <h3 className="font-medium">Friends who bought this</h3>
      </div>
      
      <div className="space-y-3">
        {friendPurchases.map((purchase, index) => (
          <div key={index} className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={purchase.userAvatar} alt={purchase.userName} />
              <AvatarFallback>
                <User size={16} />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">{purchase.userName}</span> purchased this item
              </p>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <ShoppingBag size={12} className="mr-1" />
                <span>{formatDistanceToNow(new Date(purchase.timestamp), { addSuffix: true })}</span>
                <span className="ml-2 bg-gray-100 px-2 py-0.5 rounded">Size: {purchase.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendPurchases;
