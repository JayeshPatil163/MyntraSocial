
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, total, totalItems } = useCart();
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
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
        <h1 className="text-2xl font-bold mb-6">Shopping Cart ({totalItems} items)</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="border-b border-gray-200 last:border-0">
                  <div className="flex p-4">
                    <div className="w-20 h-24 flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.product.brand}</h3>
                          <p className="text-sm text-gray-500">{item.product.title}</p>
                          <p className="text-sm text-gray-500">Size: {item.size}</p>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center">
                            <span className="font-bold">
                              ₹{(item.product.discountedPrice || item.product.price) * item.quantity}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="ml-4 text-gray-400 hover:text-red-500"
                            >
                              <TrashIcon size={18} />
                            </button>
                          </div>
                          
                          {item.product.discountedPrice && (
                            <p className="text-xs text-gray-500 line-through">
                              ₹{item.product.price * item.quantity}
                            </p>
                          )}
                          
                          {item.product.discountPercentage && (
                            <p className="text-xs text-primary">
                              {item.product.discountPercentage}% OFF
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            className="px-2 py-1 text-gray-500"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-3 py-1 border-l border-r border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 py-1 text-gray-500"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Price Details</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between pb-3 border-b border-dashed">
                  <span>Price ({totalItems} items)</span>
                  <span>₹{total}</span>
                </div>
                
                <div className="flex justify-between pb-3 border-b border-dashed">
                  <span>Delivery Charges</span>
                  <span className="text-primary">FREE</span>
                </div>
                
                <div className="flex justify-between py-3 font-bold border-b">
                  <span>Total Amount</span>
                  <span>₹{total}</span>
                </div>
              </div>
              
              <Button className="w-full mt-6">
                PLACE ORDER
              </Button>
            </div>
            
            <div className="mt-4 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-sm text-gray-500 mb-2">Safe and Secure Payments. Easy returns.</h2>
              <div className="flex gap-2">
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="Visa" className="h-5" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="MasterCard" className="h-5" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="AmericanExpress" className="h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
