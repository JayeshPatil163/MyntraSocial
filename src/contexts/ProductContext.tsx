import React, { createContext, useState, useEffect, useContext } from 'react';
import { Product } from '../lib/types';  // Your Product type/interface

// Define the shape of context value
type ProductContextType = {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
};

// Create context with default values
const ProductContext = createContext<ProductContextType>({
  products: [],
  isLoading: true,
  error: null
});

/**
 * ProductProvider fetches product data once and provides it to children.
 */
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch products on mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await fetch('http://localhost:5050/api/products');  // replace with your API endpoint
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        
        // Debug: Log the data structure
        console.log('API response data:', data);
        
        // Make sure we're setting an array to products state
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && typeof data === 'object' && Array.isArray(data.products)) {
          // In case the API returns an object with a products array inside
          setProducts(data.products);
        } else {
          console.error('API did not return products array:', data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError(error instanceof Error ? error : new Error('Unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);  // empty array ensures this effect runs only once (on mount)

  // Provide products to all children
  return (
    <ProductContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

/**
 * Custom hook for consuming the product context.
 * Call this in child components to get access to `products`.
 */
export function useProductContext(): ProductContextType {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
}