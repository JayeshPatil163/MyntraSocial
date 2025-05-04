
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

  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card group bg-white">
        <div className="relative overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="product-card-image"
          />
          <div 
            className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer"
            onClick={handleWishlistToggle}
          >
            <Heart 
              size={18} 
              className={`${isWishlisted ? 'fill-primary text-primary' : 'text-gray-400'}`}
            />
          </div>
          {product.discountPercentage && (
            <div className="absolute bottom-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
              {product.discountPercentage}% OFF
            </div>
          )}
        </div>
        
        <div className="p-3">
          <h3 className="font-medium text-sm truncate">{product.brand}</h3>
          <p className="text-gray-500 text-xs truncate">{product.title}</p>
          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-sm">₹{product.discountedPrice || product.price}</span>
              {product.discountedPrice && (
                <span className="text-gray-400 text-xs line-through">₹{product.price}</span>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleLikeToggle}
                className="flex items-center text-xs text-gray-500"
              >
                <ThumbsUp 
                  size={14} 
                  className={`mr-1 ${liked ? 'fill-primary text-primary' : ''}`} 
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
      </div>
    </Link>
  );
};

export default ProductCard;
