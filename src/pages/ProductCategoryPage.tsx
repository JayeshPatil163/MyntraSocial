import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory } from '@/lib/data';
import ProductGrid from '@/components/products/ProductGrid';

// Filters and sorting components
const Breadcrumb = ({ category }) => {
  return (
    <div className="flex items-center text-sm text-gray-600 mb-2">
      <Link to="/" className="hover:text-amber-600">Home</Link>
      <span className="mx-2">/</span>
      <Link to="/accessories" className="hover:text-amber-600">Accessories</Link>
      <span className="mx-2">/</span>
      <span className="font-medium text-gray-900">{category}</span>
    </div>
  );
};

const FilterTag = ({ label, onRemove }) => {
  return (
    <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm mr-2">
      {label}
      <button onClick={onRemove} className="ml-2 text-gray-500 hover:text-gray-700">
        ✕
      </button>
    </div>
  );
};

const FilterSection = ({ title, options, selectedFilters, onFilterChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-amber-500"
              checked={selectedFilters.includes(option.value)}
              onChange={() => onFilterChange(option.value)}
            />
            <span className="ml-2 text-sm text-gray-700">{option.label}</span>
            {option.count && <span className="ml-1 text-xs text-gray-500">({option.count})</span>}
          </label>
        ))}
      </div>
    </div>
  );
};

const ProductCategoryPage = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');
  const [productCount, setProductCount] = useState(0);
  
  // Filter states
  const [selectedBrands, setSelectedBrands] = useState(['NOISE', 'boAt']);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([600, 5600]);
  const [sortBy, setSortBy] = useState('Recommended');
  const [activeFilters, setActiveFilters] = useState(['NOISE', 'boAt']);

  useEffect(() => {
    if (!categorySlug) return;

    setLoading(true);
    
    // Format category name from slug
    const formattedName = categorySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    setCategoryName(formattedName);
    
    // Fetch products
    const fetchedProducts = getProductsByCategory(categorySlug);
    setProducts(fetchedProducts);
    setProductCount(fetchedProducts.length);
    setLoading(false);
  }, [categorySlug]);

  // Handle filter removal
  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
    setSelectedBrands(selectedBrands.filter(b => b !== filter));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters([]);
    setSelectedBrands([]);
    setSelectedCategories([]);
  };

  // Filter change handlers
  const handleBrandFilterChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
      setActiveFilters(activeFilters.filter(f => f !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
      setActiveFilters([...activeFilters, brand]);
    }
  };

  const handleCategoryFilterChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Brand options
  const brandOptions = [
    { label: 'NOISE', value: 'NOISE', count: 130 },
    { label: 'JBL', value: 'JBL', count: 87 },
    { label: 'Portronics', value: 'Portronics', count: 96 },
    { label: 'boAt', value: 'boAt', count: 77 },
    { label: 'zusix', value: 'zusix', count: 72 },
    { label: 'BOULT AUDIO', value: 'BOULT AUDIO', count: 57 },
    { label: 'HAMMER', value: 'HAMMER', count: 52 },
    { label: 'MZ', value: 'MZ', count: 42 }
  ];

  // Category options
  const categoryOptions = [
    { label: 'Headphones', value: 'headphones', count: 124 },
    { label: 'Smart Watches', value: 'smart-watches', count: 80 },
    { label: 'Speakers', value: 'speakers', count: 9 }
  ];

  // Color options
  const colorOptions = [
    { label: 'Black', value: 'black', count: 67 },
    { label: 'Blue', value: 'blue', count: 32 },
    { label: 'White', value: 'white', count: 23 },
    { label: 'Green', value: 'green', count: 17 },
    { label: 'Grey', value: 'grey', count: 16 }
  ];

  // Bundle options
  const bundleOptions = [
    { label: 'Bundle 1', value: 'bundle-1' },
    { label: 'Bundle 2', value: 'bundle-2' },
    { label: 'Bundle 3', value: 'bundle-3' }
  ];

  // Country options
  const countryOptions = [
    { label: 'India', value: 'india' },
    { label: 'China', value: 'china' },
    { label: 'USA', value: 'usa' }
  ];

  // Size options
  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Breadcrumb */}
      <Breadcrumb category={categoryName} />
      
      {/* Category Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{categoryName} <span className="text-gray-500 text-lg font-normal">- {productCount} items</span></h1>
      </div>
      
      {/* Filters and Products Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar - Filters */}
        <div className="w-full md:w-1/4 lg:w-1/5">
          <div className="bg-white p-4 border border-gray-200 rounded">
            {/* Filters Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold uppercase text-sm">Filters</h2>
              <button 
                className="text-red-500 text-sm font-medium"
                onClick={clearAllFilters}
              >
                CLEAR ALL
              </button>
            </div>
            
            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="mb-4 flex flex-wrap">
                {activeFilters.map(filter => (
                  <FilterTag 
                    key={filter} 
                    label={filter} 
                    onRemove={() => removeFilter(filter)}
                  />
                ))}
              </div>
            )}
            
            {/* Filter Sections */}
            <div className="border-t border-gray-200 pt-4">
              <FilterSection 
                title="CATEGORIES" 
                options={categoryOptions}
                selectedFilters={selectedCategories}
                onFilterChange={handleCategoryFilterChange}
              />
              
              <FilterSection 
                title="BRAND" 
                options={brandOptions}
                selectedFilters={selectedBrands}
                onFilterChange={handleBrandFilterChange}
              />
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">PRICE</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    className="w-full"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}+</span>
                  </div>
                </div>
              </div>
              
              <FilterSection 
                title="COLOR" 
                options={colorOptions}
                selectedFilters={[]}
                onFilterChange={() => {}}
              />
              
              {/* Show more filters button */}
              <button className="text-amber-600 font-medium text-sm">
                + 50 more
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Side - Products */}
        <div className="w-full md:w-3/4 lg:w-4/5">
          {/* Top Filter Bar */}
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <div className="dropdown">
                <button className="px-3 py-1 border border-gray-300 rounded flex items-center gap-1 text-sm">
                  Bundles <span className="ml-1">▼</span>
                </button>
              </div>
              <div className="dropdown">
                <button className="px-3 py-1 border border-gray-300 rounded flex items-center gap-1 text-sm">
                  Country of Origin <span className="ml-1">▼</span>
                </button>
              </div>
              <div className="dropdown">
                <button className="px-3 py-1 border border-gray-300 rounded flex items-center gap-1 text-sm">
                  Size <span className="ml-1">▼</span>
                </button>
              </div>
            </div>
            
            <div className="dropdown">
              <div className="px-3 py-1 border border-gray-300 rounded flex items-center gap-1 text-sm">
                Sort by: <span className="font-medium">{sortBy}</span> <span className="ml-1">▼</span>
              </div>
            </div>
          </div>
          
          {/* Products */}
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="bg-gray-50 p-8 rounded text-center">
              <p className="text-lg">No products found in this category.</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters or browse other categories.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryPage;