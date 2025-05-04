import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define types for our data structure
interface CategoryItem {
  id: string;
  imageUrl: string;
  priceText: string;
  categoryText: string;
  brands: {
    name: string;
    logoUrl: string;
  }[];
}

interface BannerSet {
  id: string;
  title: string;
  categories: CategoryItem[];
}

const MyntraBanner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  
  // Sample data for multiple banner sets
  const bannerSets: BannerSet[] = [
    {
      id: "summer-sale",
      title: "Summer Sale - Up to 70% Off!",
      categories: [
        {
          id: "backpacks",
          imageUrl: "https://skybags.co.in/cdn/shop/files/1_696778fa-fc28-4d13-a72b-0f39fcc66081.png?v=1688472347&width=1000",
          priceText: "Starting From ₹499",
          categoryText: "ALL-NEW BACKPACKS",
          brands: [
            { name: "Skybags", logoUrl: "https://logopond.com/logos/cf216bcaeb3ae1a6a011562336de063d.png" },
            { name: "Genie", logoUrl: "https://genietravel.com/cdn/shop/files/Genie_Logo_102d45ed-b66b-4f7e-bae5-b1a79d611cf4_485x.png?v=1662115635" }
          ]
        },
        {
          id: "wearables",
          imageUrl: "https://pbs.twimg.com/media/Fn09QO3aAAEkc3F.jpg",
          priceText: "Starting ₹2990 ₹699",
          categoryText: "SMART WEARABLES",
          brands: [
            { name: "boAt", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/94/Boat_Logo.webp" },
            { name: "Noise", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLnO5EyiJqLzvg5lfrgFYHoOJMzbXW_VY_g&s" }
          ]
        },
        {
          id: "formal-wear",
          imageUrl: "https://blackberrys.com/cdn/shop/products/Textured_Formal_3_Pcs_Suits_In_Olive_Rolfe-LPLM1475V1PA22FL-image1.jpg?v=1700651299&width=1600",
          priceText: "Min. 40% Off",
          categoryText: "BLAZERS & SUITS",
          brands: [
            { name: "Louis Philippe", logoUrl: "https://1000logos.net/wp-content/uploads/2024/05/Louis-Philippe-Logo.png" },
            { name: "Blackberrys", logoUrl: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/afaqs/media/post_attachments/da086a80e11e571679a44cf6c56e02720ff934731e097a9f91daadd362250cf8.jpg" }
          ]
        },
        {
          id: "watches",
          imageUrl: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2023-05/Virat%20Kohli%27s%20WROGN%20Zero%20Collection%20%283%29.jpg",
          priceText: "Min. 60% Off",
          categoryText: "TIMELESS BEAUTY",
          brands: [
            { name: "The Roadster Life Co.", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3aNnhr_fwQKsTq57l4x4UZDpRfb9myupxZw&s" },
            { name: "WROGN", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtPnrD7plSHAfBT5nPBKjVvJLUqUdy3XYZ0Q&s" }
          ]
        },
        {
          id: "sunglasses",
          imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230526/ls6h/64706e42d55b7d0c63141293/-473Wx593H-466174219-brown-MODEL.jpg",
          priceText: "Min. 60% OFF",
          categoryText: "COOL SUNGLASSES",
          brands: [
            { name: "The Roadster Life Co.", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3aNnhr_fwQKsTq57l4x4UZDpRfb9myupxZw&s" },
            { name: "Mast & Harbour", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eoKB28AGISsUW1EyhRRLwBqXlJVwed8EZA&s" }
          ]
        }
      ]
    },
    {
      id: "winter-collection",
      title: "Winter Collection 2025",
      categories: [
        {
          id: "sweaters",
          imageUrl: "https://media1.popsugar-assets.com/files/thumbor/O3iVAznSXSQC50FikkUMqQrBmcE=/fit-in/768x1152/filters:format_auto():upscale()/2022/10/27/770/n/1922564/c9adb4790fba176f_hmgoepprod_1_.jpeg",
          priceText: "Starting From ₹699",
          categoryText: "COZY SWEATERS",
          brands: [
            { name: "H&M", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" },
            { name: "DNMX", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBszWIvQbALqgDTSrSQisDjT9nMtjlACMyw&s" }
          ]
        },
        {
          id: "boots",
          imageUrl: "https://images.woodlandworldwide.app/assets/Summer/h_cat_2.webp",
          priceText: "Starting ₹1299",
          categoryText: "STYLISH BOOTS",
          brands: [
            { name: "Woodland", logoUrl: "https://static.vecteezy.com/system/resources/previews/020/975/575/non_2x/woodland-logo-woodland-icon-transparent-free-png.png" },
            { name: "Red Tape", logoUrl: "https://i.pinimg.com/736x/ba/bf/e4/babfe4cadba602b742f08cb2cc73cc2f.jpg" }
          ]
        },
        {
          id: "jackets",
          imageUrl: "https://images.bestsellerclothing.in/data/JJ/25-oct-2024/145729501_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto",
          priceText: "Min. 30% Off",
          categoryText: "TRENDY JACKETS",
          brands: [
            { name: "Jack & Jones", logoUrl: "https://images.seeklogo.com/logo-png/38/1/jack-and-jones-logo-png_seeklogo-389891.png" },
            { name: "Tommy Hilfiger", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdtx6UJY42n_21f3L8oIDDah9TH8bnawWZg&s" }
          ]
        },
        {
          id: "thermals",
          imageUrl: "https://m.media-amazon.com/images/I/71n34tLs77L._AC_UY1100_.jpg",
          priceText: "Min. 40% Off",
          categoryText: "WARM THERMALS",
          brands: [
            { name: "Jockey", logoUrl: "https://1000logos.net/wp-content/uploads/2020/07/Jockey-Logo.png" },
            { name: "Van Heusen", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_pXgWAYOz6xqnq3PAxmwJybMWnATZxmzcg&s" }
          ]
        },
        {
          id: "accessories",
          imageUrl: "https://cdn.saksfifthavenue.com/is/image/saks/120324_SEO_EXISTING_SA_2024_HOTTEST_WINTER_ACCESSORIES_TRENDS_EDIT_5?scl=1&qlt=85",
          priceText: "Min. 50% OFF",
          categoryText: "WINTER ACCESSORIES",
          brands: [
            { name: "Monte Carlo", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHByZSNJtnk-bR0__qqR4AIsLwFkT3AlI3g&s" },
            { name: "FabIndia", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyKa09hmccwS7aoWI1AG1eZboWW3_S3k4lA&s" }
          ]
        }
      ]
    },
    {
      id: "festival-deals",
      title: "Festival Special Deals",
      categories: [
        {
          id: "ethnic-wear",
          imageUrl: "https://static.toiimg.com/photo/69594244.cms",
          priceText: "Starting From ₹799",
          categoryText: "ETHNIC COLLECTION",
          brands: [
            { name: "Manyavar", logoUrl: "https://marinamallchennai.com/wp-content/uploads/2020/11/Manyavar-logo-big.png" },
            { name: "Fabindia", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8BT_PwJ8KBDLS_JTz2YUzTz-fCxsepV9qQ&s" }
          ]
        },
        {
          id: "jewelry",
          imageUrl: "https://media.vogue.in/wp-content/uploads/2023/07/1200x1200_Cosmopolitan.jpg",
          priceText: "Starting ₹299",
          categoryText: "STATEMENT JEWELRY",
          brands: [
            { name: "Tanishq", logoUrl: "https://zerocreativity0.wordpress.com/wp-content/uploads/2016/05/tanishq-logo.jpg?w=736" },
            { name: "Zaveri Pearls", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmK41nPWwY_opwYu4EnpvcujZBH-7IFc0hg&s" }
          ]
        },
        {
          id: "footwear",
          imageUrl: "https://manyavar.scene7.com/is/image/manyavar/SHOE048-309-Brown.1500_02-05-2024-13-16:650x900?&dpr=on,2",
          priceText: "Min. 45% Off",
          categoryText: "FESTIVE FOOTWEAR",
          brands: [
            { name: "Metro", logoUrl: "https://etimg.etb2bimg.com/photo/105930083.cms" },
            { name: "Inc.5", logoUrl: "https://pngimg.com/uploads/nike/nike_PNG1.png" }
          ]
        },
        {
          id: "home-decor",
          imageUrl: "https://cdn.ddecor.com/media/wysiwyg/collection/desktop_1920-pix-x-920-pix_palatail.jpg",
          priceText: "Min. 60% Off",
          categoryText: "HOME MAKEOVER",
          brands: [
            { name: "Home Centre", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDA5o4lD3KQ5ofXi9jUVlsYbUFLbrYBcyAKw&s" },
            { name: "DDecor", logoUrl: "https://5.imimg.com/data5/US/FS/MY-5277176/d-27decor-furnishing-fabrics-500x500.png" }
          ]
        },
        {
          id: "gift-sets",
          imageUrl: "https://dtcworld.com/wp-content/uploads/2024/05/4pcs-gift-set_20220306160800.jpg",
          priceText: "Min. 30% OFF",
          categoryText: "PREMIUM GIFT SETS",
          brands: [
            { name: "Forest Essentials", logoUrl: "https://1000logos.net/wp-content/uploads/2020/07/Forest-Essentials-Logo1.jpg" },
            { name: "Kama Ayurveda", logoUrl: "https://mallofthemillennium.s3.ap-south-1.amazonaws.com/BrandsImages/12092023150826320_brlo.jpg" }
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex(prev => (prev + 1) % bannerSets.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [bannerSets.length]);

  const goToPrevious = () => {
    setCurrentBannerIndex(prev => (prev - 1 + bannerSets.length) % bannerSets.length);
  };

  const goToNext = () => {
    setCurrentBannerIndex(prev => (prev + 1) % bannerSets.length);
  };

  const currentBanner = bannerSets[currentBannerIndex];

  return (
    <div className="relative w-full">
      {/* Banner Title */}
      <h2 className="text-2xl font-bold mb-4 text-center">{currentBanner.title}</h2>
      
      {/* Main Banner Content */}
      <div className="relative">
        <div className="grid grid-cols-5">
          {currentBanner.categories.map((category) => (
            <div key={category.id} className="relative overflow-hidden rounded-t-xl border border-orange-300 group">
              {/* Product Image Section */}
              <div className="relative">
                <img
                  src={category.imageUrl}
                  alt={category.categoryText}
                  className="w-full h-64 object-cover"
                />
                {/* Price and Category Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white bg-gradient-to-t from-black/70 to-transparent">
                  <div className="text-xl font-bold">{category.priceText}</div>
                  <div className="text-sm font-semibold">{category.categoryText}</div>
                </div>
              </div>
              
              {/* Brands Section */}
              <div className="bg-white p-1 flex justify-center items-center space-x-4 border-t">
                {category.brands.map((brand, idx) => (
                  <div key={`${category.id}-${brand.name}`} className="flex flex-col items-center">
                    <img src={brand.logoUrl} alt={brand.name} className="h-20 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md"
          onClick={goToPrevious}
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md"
          onClick={goToNext}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* Banner Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {bannerSets.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentBannerIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentBannerIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyntraBanner;