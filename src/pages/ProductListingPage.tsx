
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory, categories } from '@/lib/data';
import { Product } from '@/lib/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Filter, ChevronDown, ChevronRight } from 'lucide-react';

const ProductListingPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<string>('recommended');
  const [showFilters, setShowFilters] = useState(false);
  
  const category = categories.find(cat => cat.slug === categorySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (categorySlug) {
      const fetchedProducts = getProductsByCategory(categorySlug);
      console.log(categorySlug);
      setProducts(fetchedProducts);
      console.log(fetchedProducts);
      setFilteredProducts(fetchedProducts);
      
      // Extract unique brands
      const uniqueBrands = Array.from(new Set(fetchedProducts.map(p => p.brand)));
      setBrands(uniqueBrands);
    }
  }, [categorySlug]);

  useEffect(() => {
    let result = [...products];
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
      result = result.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Apply price filter
    result = result.filter(
      product => {
        const price = product.discountedPrice || product.price;
        return price >= priceRange[0] && price <= priceRange[1];
      }
    );
    
    // Apply sorting
    if (sortBy === 'price_asc') {
      result.sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price));
    } else if (sortBy === 'price_desc') {
      result.sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price));
    } else if (sortBy === 'rating_desc') {
      result.sort((a, b) => b.ratings - a.ratings);
    }
    
    setFilteredProducts(result);
  }, [products, selectedBrands, priceRange, sortBy]);
  
  const toggleBrandFilter = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  const resetFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, 10000]);
    setSortBy('recommended');
  };
  
  const categoryName = category?.name || categorySlug?.charAt(0).toUpperCase() + categorySlug?.slice(1);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{categoryName}</h1>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden flex items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={16} className="mr-2" />
              Filters
            </Button>
            
            <select 
              className="border rounded-md p-2 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="recommended">Recommended</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating_desc">Customer Rating</option>
            </select>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold">FILTERS</h2>
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={resetFilters}
                  className="text-primary p-0 h-auto"
                >
                  CLEAR ALL
                </Button>
              </div>
              
              <div className="border-b pb-4 mb-4">
                <h3 className="sidebar-title flex items-center justify-between">
                  <span>BRANDS</span>
                  <ChevronDown size={16} />
                </h3>
                <div className="mt-2 space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="filter-option">
                      <Checkbox 
                        id={`brand-${brand}`} 
                        checked={selectedBrands.includes(brand)} 
                        onCheckedChange={() => toggleBrandFilter(brand)} 
                      />
                      <label 
                        htmlFor={`brand-${brand}`}
                        className="text-sm ml-2 cursor-pointer"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-b pb-4 mb-4">
                <h3 className="sidebar-title flex items-center justify-between">
                  <span>PRICE RANGE</span>
                  <ChevronDown size={16} />
                </h3>
                <div className="mt-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="10000" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full" 
                  />
                  <div className="flex justify-between text-sm mt-2">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
              <div className="bg-white w-4/5 h-full overflow-y-auto p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold">FILTERS</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setShowFilters(false)}
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
                
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={resetFilters}
                  className="text-primary mb-4 p-0"
                >
                  CLEAR ALL
                </Button>
                
                <div className="border-b pb-4 mb-4">
                  <h3 className="sidebar-title">BRANDS</h3>
                  <div className="mt-2 space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="filter-option">
                        <Checkbox 
                          id={`mobile-brand-${brand}`} 
                          checked={selectedBrands.includes(brand)} 
                          onCheckedChange={() => toggleBrandFilter(brand)} 
                        />
                        <label 
                          htmlFor={`mobile-brand-${brand}`}
                          className="text-sm ml-2"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-b pb-4 mb-4">
                  <h3 className="sidebar-title">PRICE RANGE</h3>
                  <div className="mt-3">
                    <input 
                      type="range" 
                      min="0" 
                      max="10000" 
                      value={priceRange[1]} 
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full" 
                    />
                    <div className="flex justify-between text-sm mt-2">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <Button 
                    className="w-full" 
                    onClick={() => setShowFilters(false)}
                  >
                    APPLY
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No products found. Try adjusting your filters.</p>
                <Button 
                  variant="link" 
                  className="mt-4"
                  onClick={resetFilters}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
