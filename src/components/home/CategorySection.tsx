import { Link } from 'react-router-dom';
import { Category } from '@/lib/types';

interface CategorySectionProps {
  categories: Category[];
  title?: string;
}

// Helper function to generate realistic discounts for each category
const generateDiscount = (categoryId: string | number): { min: number; max: number } => {
  // Use the category ID as a seed to generate consistent but varied discounts
  const seed = typeof categoryId === 'string' ? 
    categoryId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) :
    categoryId;
  
  // Create realistic discount ranges based on retail practices
  const discountPatterns = [
    { min: 10, max: 30 },  // Common discount range
    { min: 20, max: 50 },  // Medium discount range
    { min: 30, max: 70 },  // Large discount range
    { min: 15, max: 40 },  // Mixed discount range
    { min: 5, max: 25 }    // Small discount range
  ];
  
  // Use the seed to select a discount pattern
  const patternIndex = seed % discountPatterns.length;
  return discountPatterns[patternIndex];
};

const CategorySection = ({ categories, title }: CategorySectionProps) => {
  return (
    <div className="my-8">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          // Generate discount range for this category
          const discount = generateDiscount(category.id);
          
          return (
            <Link 
              key={category.id} 
              to={`/products/${category.slug}`}
              className="transition-transform hover:scale-105"
            >
              <div className="border-2 border-amber-400 rounded overflow-hidden shadow-md">
                {/* Fixed height image container */}
                <div className="w-full h-48 bg-amber-50">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col items-center bg-amber-400">
                  <h3 className="text-center text-sm font-medium text-gray-800">{category.name}</h3>
                  <p className="text-center text-xl font-bold text-green-800">
                    {discount.min}-{discount.max}% OFF
                  </p>
                  <button className="mt-2 px-4 py-1 bg-white text-amber-600 rounded-full text-sm font-medium hover:bg-amber-50">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;