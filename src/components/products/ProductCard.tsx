import { Link } from 'react-router-dom';
import { Heart, MessageCircle, ThumbsUp } from 'lucide-react';
import { Product } from '@/lib/types';
import { useWishlist } from '@/contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist, isLiked, likeProduct, unlikeProduct } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  const liked = isLiked(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (liked) {
      unlikeProduct(product);
    } else {
      likeProduct(product);
    }
  };

  const likesCount = product.likes?.length || 0;
  const commentsCount = product.comments?.length || 0;
  const discountPercentage = product.discountPercentage || 
    (product.discountedPrice && product.price ? 
      Math.round(((product.price - product.discountedPrice) / product.price) * 100) : null);

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="relative bg-white transition-all duration-300 hover:shadow-lg group w-full max-w-xs">
        {/* Image container with vertical rectangular dimensions */}
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="w-full h-full object-cover object-center"
          />
          
          {/* Product title overlay at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm font-medium truncate">{product.title}</p>
          </div>
          
          {/* Discount badge */}
          {discountPercentage && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              {discountPercentage}% OFF
            </div>
          )}
        </div>
        
        {/* Product info */}
        <div className="p-3">
          <h3 className="font-medium text-gray-800 text-sm">{product.brand}</h3>
          <p className="text-gray-500 text-xs mt-1 truncate">{product.title}</p>
          
          {/* Price section */}
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm">₹{product.discountedPrice || product.price}</span>
              {product.discountedPrice && (
                <span className="text-gray-400 text-xs line-through">₹{product.price}</span>
              )}
            </div>
            
            {/* Social interactions */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={handleLikeToggle}
                className="flex items-center text-xs text-gray-500"
              >
                <ThumbsUp 
                  size={14} 
                  className={`mr-1 ${liked ? 'fill-blue-500 text-blue-500' : ''}`} 
                />
                {likesCount > 0 && <span>{likesCount}</span>}
              </button>
              
              {commentsCount > 0 && (
                <span className="flex items-center text-xs text-gray-500">
                  <MessageCircle size={14} className="mr-1" />
                  {commentsCount}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Wishlist button at bottom - only visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-3 border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
          <button 
            onClick={handleWishlistToggle}
            className="flex items-center justify-center w-full py-2 border border-gray-300 rounded font-medium text-sm"
          >
            <Heart 
              size={16} 
              className={`mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
            WISHLIST
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;