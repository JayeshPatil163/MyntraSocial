
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Product, WishlistItem, Like } from '@/lib/types';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from './AuthContext';

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
  totalItems: number;
  likeProduct: (product: Product) => void;
  unlikeProduct: (product: Product) => void;
  isLiked: (productId: string) => boolean;
  getLikes: (productId: string) => Like[];
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    // Load wishlist from localStorage on initial mount
    const savedWishlist = localStorage.getItem('myntra_wishlist');
    if (savedWishlist) {
      try {
        setItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Failed to parse stored wishlist data:', error);
        localStorage.removeItem('myntra_wishlist');
      }
    }
  }, []);

  useEffect(() => {
    // Save wishlist to localStorage whenever it changes
    localStorage.setItem('myntra_wishlist', JSON.stringify(items));
  }, [items]);

  const addToWishlist = (product: Product) => {
    if (!isInWishlist(product.id)) {
      setItems(prevItems => [...prevItems, { product }]);
      toast({
        title: "Added to Wishlist",
        description: `${product.title} has been added to your wishlist`,
      });
    }
  };

  const removeFromWishlist = (productId: string) => {
    setItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.product.id !== productId);
      
      toast({
        title: "Removed from Wishlist",
        description: "Item has been removed from your wishlist",
      });
      
      return updatedItems;
    });
  };

  const isInWishlist = (productId: string) => {
    return items.some(item => item.product.id === productId);
  };

  const clearWishlist = () => {
    setItems([]);
    toast({
      title: "Wishlist Cleared",
      description: "All items have been removed from your wishlist",
    });
  };

  // New functions for liking products
  // const likeProduct = async (product: Product) => {
  //   if (!user) {
  //     toast({
  //       title: "Please log in",
  //       description: "You need to be logged in to like products",
  //       variant: "destructive"
  //     });
  //     return;
  //   }
  
  //   try {
  //     // First, call the API to like the product (add userId to product's likes array)
  //     const likeResponse = await fetch(`http://localhost:5050/api/products/like/${product.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       // The auth middleware will extract the user from the session/cookie
  //       // You don't need to send any data here as the server already has access to req.user
  //     });
  
  //     if (!likeResponse.ok) {
  //       const errorData = await likeResponse.json();
  //       // If the product is already liked, we don't treat this as an error
  //       if (likeResponse.status === 400 && errorData.msg === 'Product already liked') {
  //         console.log('Product was already liked');
  //       } else {
  //         throw new Error(errorData.msg || 'Failed to like product');
  //       }
  //     }
  
  //     // Then, call the API to add the product to user's wishlist array
  //     const wishlistResponse = await fetch(`http://localhost:5050/api/users/wishlist/${product.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //       // The auth middleware will extract the user from the session/cookie
  //     });
  
  //     if (!wishlistResponse.ok) {
  //       const errorData = await wishlistResponse.json();
  //       // If the product is already in wishlist, we don't treat this as an error
  //       if (wishlistResponse.status === 400 && errorData.msg === 'Product already in wishlist') {
  //         console.log('Product was already in wishlist');
  //       } else {
  //         throw new Error(errorData.msg || 'Failed to add to wishlist');
  //       }
  //     }
  
  //     // Get the updated product info from the like response
  //     const updatedLikes = await likeResponse.json();
      
  //     // Update the product with the new likes array in the local state
  //     const updatedProduct = {
  //       ...product,
  //       likes: updatedLikes
  //     };
  
  //     // Update the wishlist in local state
  //     if (!isInWishlist(product.id)) {
  //       addToWishlist(updatedProduct);
  //     } else {
  //       // Update the product in the existing wishlist
  //       setItems(prevItems => 
  //         prevItems.map(item => 
  //           item.product.id === product.id 
  //             ? { product: updatedProduct } 
  //             : item
  //         )
  //       );
  //     }
  
  //     toast({
  //       title: "Product Liked",
  //       description: `You liked ${product.title}`
  //     });
  
  //   } catch (error) {
  //     console.error('Error liking product:', error);
  //     toast({
  //       title: "Error",
  //       description: error.message || "Failed to like product. Please try again.",
  //       variant: "destructive"
  //     });
  //   }
  // };

  const likeProduct = (product: Product) => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to like products",
        variant: "destructive"
      });
      return;
    }

    const like: Like = {
      userId: user.id,
      userName: user.name,
      userAvatar: user.avatar,
      timestamp: new Date()
    };

    // Update the product with the new like
    const updatedProduct = {
      ...product,
      likes: [...(product.likes || []), like]
    };

    // Add to wishlist if not already in wishlist
    if (!isInWishlist(product.id)) {
      addToWishlist(updatedProduct);
    } else {
      // Update the product in the existing wishlist
      setItems(prevItems => 
        prevItems.map(item => 
          item.product.id === product.id 
            ? { product: updatedProduct } 
            : item
        )
      );

      toast({
        title: "Product Liked",
        description: `You liked ${product.title}`
      });
    }
  };

  const unlikeProduct = (product: Product) => {
    if (!user) return;

    const updatedLikes = product.likes?.filter(like => like.userId !== user.id) || [];
    
    const updatedProduct = {
      ...product,
      likes: updatedLikes
    };

    // If there are still likes, update the product
    if (updatedLikes.length > 0) {
      setItems(prevItems => 
        prevItems.map(item => 
          item.product.id === product.id 
            ? { product: updatedProduct } 
            : item
        )
      );
    } else {
      // If user is removing their like and it's the only one, remove from wishlist
      removeFromWishlist(product.id);
    }

    toast({
      title: "Like Removed",
      description: `You unliked ${product.title}`
    });
  };

  const isLiked = (productId: string) => {
    if (!user) return false;
    const item = items.find(item => item.product.id === productId);
    return !!item?.product.likes?.some(like => like.userId === user.id);
  };

  const getLikes = (productId: string) => {
    const item = items.find(item => item.product.id === productId);
    return item?.product.likes || [];
  };

  const totalItems = items.length;

  return (
    <WishlistContext.Provider 
      value={{ 
        items, 
        addToWishlist, 
        removeFromWishlist, 
        isInWishlist,
        clearWishlist, 
        totalItems,
        likeProduct,
        unlikeProduct,
        isLiked,
        getLikes
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};