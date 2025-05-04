
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/home/Banner';
import CategorySection from '@/components/home/CategorySection';
import ProductGrid from '@/components/products/ProductGrid';
// import { useProductContext } from '../contexts/ProductContext';
import { banners, categories, getFeaturedProducts, getNewArrivals } from '@/lib/data';

const Index = () => {
//   const { products } = useProductContext();
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Banner */}
        <div className="relative w-fit">
  {/* Background image behind Banner */}
  <img
    src="https://img.freepik.com/free-vector/small-squares-pattern_23-2147501057.jpg?ga=GA1.1.1614731262.1741437215&semt=ais_hybrid&w=740"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover z-0 pb-6"
  />

  {/* Banner component overlays image and controls the size */}
  <div className="relative z-10 mt-6 pt-3">
    <Banner />
  </div>
</div>
        <div className="container mx-auto px-2 space-y-12 pb-12">
          {/* Categories */}
          <section className="my-8">
            <div className="relative">
              <img 
                src='https://blog.myntra.com/wp-content/uploads/2023/08/Banner-2.jpg'
                className="w-full h-40 object-cover rounded"
                alt="Shop By Category Banner"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-pretty drop-shadow-2xl">
                Shop By Category
              </h2>
            </div>
            <CategorySection 
              categories={categories} 
              title="" 
            />  
          </section>
          
          {/* Featured Products */}
          <section>
            <ProductGrid 
              products={featuredProducts} 
              title="Featured Products" 
            />
          </section>
          
          {/* New Arrivals */}
          <section>
            <ProductGrid 
              products={newArrivals} 
              title="New Arrivals" 
            />
          </section>
        </div>
        <div className = "w-full pb-5 px-4">
          <section>
            <div className="banner-container">
              <img 
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/29/3cd35a57-2175-41f3-a0c4-e5f6c99b15c41745936562672-Desktop_KV.jpg"
                alt="Deal of the Day"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
