import { Link } from 'react-router-dom';
import { Category } from '@/lib/types';

interface CategorySectionProps {
  categories: Category[];
  title?: string;
}

const CategorySection = ({ categories, title }: CategorySectionProps) => {
  return (
    <div className="my-8">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link key={category.id} to={`/products/${category.slug}`}>
            <div className="border-4 border-amber-400 rounded">
              {/* Fixed height image container */}
              <div className="w-full h-48 bg-amber-400">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 flex flex-col items-center bg-amber-400">
                <h3 className="text-center text-sm font-medium">{category.name}</h3>
                <p className="text-center text-xl font-bold text-green-800">30-70% OFF</p>
                <button className="text-center text-sm font-medium">Shop Now</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;