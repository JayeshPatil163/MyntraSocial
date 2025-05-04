
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getProductById, getRelatedProducts } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag, Star, TruckIcon } from 'lucide-react';
import ProductGrid from '@/components/products/ProductGrid';
import { useToast } from '@/components/ui/use-toast';
import { Comment, Product } from '@/lib/types';
import LikesSection from '@/components/products/LikesSection';
import CommentsSection from '@/components/products/CommentsSection';
import FriendPurchases from '@/components/products/FriendPurchases';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<Product | null>(productId ? getProductById(productId) : null);
  const [relatedProducts, setRelatedProducts] = useState(product ? getRelatedProducts(product) : []);
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist, likeProduct, unlikeProduct, isLiked } = useWishlist();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  
  const isWishlisted = product ? isInWishlist(product.id) : false;
  const productIsLiked = product ? isLiked(product.id) : false;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (productId) {
      const fetchedProduct = getProductById(productId);
      setProduct(fetchedProduct);
      
      if (fetchedProduct) {
        setRelatedProducts(getRelatedProducts(fetchedProduct));
        // Reset state when product changes
        setSelectedSize('');
        setSelectedImage(0);
        setQuantity(1);
      }
    }
  }, [productId]);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart",
        variant: "destructive"
      });
      return;
    }
    
    addToCart(product, quantity, selectedSize);
  };
  
  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleLikeProduct = () => {
    if (!product) return;
    likeProduct(product);
  };

  const handleUnlikeProduct = () => {
    if (!product) return;
    unlikeProduct(product);
  };
  
  const handleAddComment = (comment: Comment) => {
    if (!product) return;
    
    const updatedProduct = {
      ...product,
      comments: [...(product.comments || []), comment]
    };
    
    setProduct(updatedProduct);
    
    toast({
      title: "Comment Added",
      description: "Your comment has been posted"
    });
  };
  
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-xl text-gray-500">Product not found.</p>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Return to Homepage
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-500">
          <Link to="/" className="hover:text-primary">Home</Link>
          {' / '}
          <Link to={`/products/${product.gender}`} className="hover:text-primary">
            {product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}
          </Link>
          {' / '}
          <Link to={`/products/${product.category}`} className="hover:text-primary">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          {' / '}
          <span>{product.brand}</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto gap-2 mt-4 md:mt-0 md:max-h-[500px]">
                {product.images.map((img, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer border-2 rounded ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.title} - view ${index + 1}`}
                      className="w-16 h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="flex-grow">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-xl font-bold">{product.brand}</h1>
            <h2 className="text-lg text-gray-600 mb-2">{product.title}</h2>
            
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white px-2 py-1 rounded flex items-center text-sm">
                <span>{product.ratings}</span>
                <Star size={14} fill="white" />
              </div>
              <span className="text-gray-500 text-sm ml-2">Based on customer reviews</span>
            </div>
            
            {/* Likes section */}
            <LikesSection 
              product={product}
              isLiked={productIsLiked}
              onLike={handleLikeProduct}
              onUnlike={handleUnlikeProduct}
            />
            
            {/* Friend purchases */}
            <FriendPurchases product={product} />
            
            <div className="h-px bg-gray-200 my-4" />
            
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold mr-2">₹{product.discountedPrice || product.price}</span>
              {product.discountedPrice && (
                <>
                  <span className="text-gray-500 line-through mr-2">₹{product.price}</span>
                  <span className="text-primary">{product.discountPercentage}% OFF</span>
                </>
              )}
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">SELECT SIZE</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border hover:border-primary ${
                      selectedSize === size ? 'border-primary bg-primary/10' : 'border-gray-300'
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">QUANTITY</h3>
              <div className="flex items-center">
                <button 
                  className="w-8 h-8 border border-gray-300 flex items-center justify-center"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </button>
                <span className="w-12 h-8 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </span>
                <button 
                  className="w-8 h-8 border border-gray-300 flex items-center justify-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                className="flex-1 flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} className="mr-2" />
                ADD TO BAG
              </Button>
              <Button 
                variant="outline" 
                className={`flex-1 flex items-center justify-center ${
                  isWishlisted ? 'bg-primary/10' : ''
                }`}
                onClick={handleWishlistToggle}
              >
                <Heart 
                  size={18} 
                  className={`mr-2 ${isWishlisted ? 'fill-primary text-primary' : ''}`} 
                />
                {isWishlisted ? 'WISHLISTED' : 'WISHLIST'}
              </Button>
            </div>
            
            {!isAuthenticated && (
              <div className="mt-4 text-sm text-gray-500">
                <Link to="/login" className="text-primary hover:underline">
                  Login / Sign up
                </Link>
                {' '}
                to save your wishlist and for faster checkout
              </div>
            )}
            
            {/* Delivery Info */}
            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <TruckIcon size={20} className="mr-2 text-gray-500" />
                <div>
                  <h4 className="font-medium">Delivery Options</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Fast delivery available in most locations. Enter your PIN code above to check.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="mt-6">
              <h3 className="font-medium mb-2">PRODUCT DETAILS</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          </div>
        </div>
        
        {/* Comments section */}
        <div className="mt-8 border-t pt-8">
          <CommentsSection product={product} onAddComment={handleAddComment} />
        </div>
        
        {/* Similar Products */}
        <div className="mt-12">
          <ProductGrid 
            products={relatedProducts} 
            title="Similar Products" 
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
