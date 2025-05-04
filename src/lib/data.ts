
import { Product, Category, Banner } from './types';
import axios from 'axios';



export const banners: Banner[] = [
  {
    id: '1',
    imageUrl: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg',
    title: 'Activewear Collection',
    description: 'Up to 50% off on all activewear',
    linkTo: '/products/activewear'
  },
  {
    id: '2',
    imageUrl: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/04ba6fb3-569d-480e-aaec-13c3d74525d41654006667684-Innerwear_Desk.jpg',
    title: 'Summer Collection',
    description: 'New arrivals for summer',
    linkTo: '/products/summer'
  },
  {
    id: '3',
    imageUrl: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg',
    title: 'Handbags Collection',
    description: 'Designer bags at amazing prices',
    linkTo: '/products/handbags'
  }
];

export const categories: Category[] = [
  { id: '1', name: 'Ethnic Wear', image: 'https://www.beatitude.in/cdn/shop/articles/DSC_2173_720x_dec1d27e-c2a7-4ce7-8b21-654c0ca12e43_1024x.webp?v=1675162397', slug: 'ethnic-wear' },
  { id: '2', name: 'Casual Wear', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/SEPTEMBER/18/87meqYND_1c90f08ac1cd47d1a7df638033fd3836.jpg', slug: 'casual-wear' },
  { id: '3', name: "Men's Activewear", image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/27522260/2024/2/10/aba896c3-a999-4710-a454-8abea59df5f91707565447921Tracksuits1.jpg', slug: 'mens-activewear' },
  { id: '4', name: "Women's Activewear", image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30035646/2024/6/25/ff2c06fb-d17a-483c-87ac-d4e913640f651719323766011RigoTop1.jpg', slug: 'womens-activewear' },
  { id: '5', name: 'Western Wear', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30022205/2024/6/22/234317aa-42b4-40b4-8190-936eeadd64451719072899886WesternEraPrintA-LineDress1.jpg', slug: 'western-wear' },
  { id: '6', name: 'Sportswear', image: 'https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3r5Ric5OxhDxYeINKc7ytD%2Ff6bff9b7df58ccd3375bfdfb2de61236%2FHeadless_Mobile_-_22780038.png&w=3840&q=85', slug: 'sportswear' },
  { id: '7', name: 'Loungewear', image: 'https://i.pinimg.com/736x/e6/2e/80/e62e805a75360efaf2421a4db5ec4203.jpg', slug: 'loungewear' },
  { id: '9', name: 'Watches', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/12093036/2023/1/11/31f6b316-5418-4f72-bd34-69a392d14c2e1673426516562-Titan-Men-Black-Analogue-Watch-1775KM01-9331673426516212-1.jpg', slug: 'watches' },
  { id: '10', name: 'Grooming', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/11852450/2021/12/8/330d6a65-b9dd-42f1-b044-cbd42e5d5c3a1638936995951-THE-MAN-COMPANY-Charcoal-Grooming-Kit-with-Trimmer--Black-ED-11.jpg', slug: 'grooming' },
  { id: '11', name: 'Beauty & Makeup', image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/32277433/2025/1/9/b62ff95b-a055-40c4-a18f-8e9217ff38ef1736429250364MakeupKit1.jpg', slug: 'beauty-makeup' },
  { id: '12', name: 'Kids Wear', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfyFmhtRImPT6eSalDKCwFpeRRK2jedGmYNnrQOt6ToORJ212KTLxLWKP61mmRlAdRUA&usqp=CAU', slug: 'kids-wear' },
  { id: '13', name: "Men's Footwear", image: 'https://static.toiimg.com/thumb/imgsize-23456,msid-102204140,width-600,resizemode-4/102204140.jpg', slug: 'mens-footwear' },
  { id: '14', name: "Women's Footwear", image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/12898546/2024/1/4/044c7979-2811-46d5-9bd0-6d10dc0f787d1704346648056Inc5WomenGold-TonedEmbellishedSandals1.jpg', slug: 'womens-footwear' },
  { id: '15', name: 'Bags, Belts & Watches', image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/29839934/2024/5/29/dac715db-5c3e-4961-af03-22227ea742661716967699001AccessoryGiftSet1.jpg', slug: 'bags-belts-watches' },
  { id: '16', name: 'Office Wear', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/20492426/2023/1/19/61591ed6-b9ed-4080-8812-9dc5e86f65c81674108267177-INVICTUS-Men-Shirts-9971674108266518-1.jpg', slug: 'office-wear' },
  { id: '17', name: "Men's Ethnic Wear", image: 'https://static.toiimg.com/thumb/imgsize-23456,msid-103872577,width-600,resizemode-4/103872577.jpg', slug: 'mens-ethnic-wear' },
  { id: '18', name: 'Home Decor', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24330890/2023/8/3/89bc705a-6149-425c-b884-7c8f340b00881691065117091GloriousWallMirrorMarigoldFlowerShapeBig1.jpg', slug: 'home-decor' },
  { id: '19', name: 'Handbags', image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19925768/2024/8/17/f96450c1-170b-4b22-bf4d-d5df021f7da81723875815818-MIRAGGIO-Tote-Bag-With-Detachable-Sling-Strap-55917238758152-1.jpg', slug: 'handbags' },
  { id: '20', name: 'Headphones & Speakers', image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_551_ANC_75520e83-ecd9-48d4-8d58-cb6ca3c78374.jpg', slug: 'headphones-speakers' },
  { id: '21', name: 'Jewellery', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28785268/2024/4/15/b4c5135a-c2d8-490c-b15f-0288b39fb05d1713164526504ZaveriPearlsGoldPlatedKundanStuddedJewellerySet1.jpg', slug: 'jewellery' },
  { id: '22', name: 'Workwear', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TvF3tHSqDzr0w2K_PeF4SUyX6SlBub1TZA&s', slug: 'workwear' },
  { id: '23', name: 'Eyewear', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26705202/2023/12/28/f2b0bf8f-edf0-4a25-918f-bd78d39c5e761703767422306Sunglasses1.jpg', slug: 'eyewear' },
  { id: '24', name: 'Casual Styles', image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/AUGUST/26/o3koKWHF_97d3912bdd2a4e2fa29356d5aaf6c21d.jpg', slug: 'casual-styles' },
  { id: '25', name: 'Bags & Backpacks', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/10293735/2023/12/15/9c818262-8adf-4d19-86d5-7e7476d12ffd1702641212613-Wildcraft-Women-Blue-Graphic-Backpack-2081702641212455-14.jpg', slug: 'bags-backpacks' }
];




export const products: Product[] = [
  {
    id: '1',
    title: 'Slim Fit Checked Shirt',
    brand: 'Roadster',
    price: 1299,
    discountedPrice: 649,
    discountPercentage: 50,
    images: [
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1823142/2017/4/27/11493281526196-WROGN-Men-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-5201493281525914-1.jpg',
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1823142/2017/4/27/11493281526175-WROGN-Men-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-5201493281525914-2.jpg'
    ],
    category: 'shirts',
    gender: 'men',
    ratings: 4.2,
    description: 'Navy blue and green checked casual shirt, has a spread collar, button placket, 1 pocket, long sleeves, curved hem',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    title: 'Women Black Solid Skinny Fit Jeans',
    brand: 'Levis',
    price: 2099,
    discountedPrice: 1469,
    discountPercentage: 30,
    images: [
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2031039/2017/8/21/11503305724846-Levis-Women-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-7701503305724544-1.jpg',
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2031039/2017/8/21/11503305724826-Levis-Women-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-7701503305724544-2.jpg'
    ],
    category: 'jeans',
    gender: 'women',
    ratings: 4.5,
    description: 'Black solid mid-rise jeans, clean look, no fade, has a button and zip closure, 5 pockets',
    sizes: ['28', '30', '32', '34']
  },
  {
    id: '3',
    title: 'Men White Sneakers',
    brand: 'Puma',
    price: 3499,
    discountedPrice: 2449,
    discountPercentage: 30,
    images: [
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13036796/2021/2/1/d35156a1-afb5-4172-a9a7-9ad66b5547861612173862855-Puma-Men-White-Smash-v2-L-Sneakers-5691612173861657-1.jpg',
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13036796/2021/2/1/600910a4-977e-4618-9f95-4d00dda910f11612173862837-Puma-Men-White-Smash-v2-L-Sneakers-5691612173861657-2.jpg'
    ],
    category: 'footwear',
    gender: 'men',
    ratings: 4.3,
    description: 'A pair of white sneakers, has regular styling, lace-up detail',
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: '4',
    title: 'Pink & White Floral Print Kurta with Palazzos',
    brand: 'Libas',
    price: 1899,
    discountedPrice: 1044,
    discountPercentage: 45,
    images: [
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg',
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10356511/2019/8/8/f0f38d47-edd9-4681-9280-1a901565178b1565263388816-Libas-Women-Kurta-Sets-571565263387250-2.jpg'
    ],
    category: 'kurtas',
    gender: 'women',
    ratings: 4.1,
    description: 'Pink and white floral print kurta with palazzos',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '5',
    title: 'Brown Leather Formal Shoes',
    brand: 'Hush Puppies',
    price: 5999,
    discountedPrice: 4199,
    discountPercentage: 30,
    images: [
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15487828/2021/9/16/9c6742e5-edf5-437b-a0c5-49008d9a99c71631789631789HushPuppiesMenBrownFormalDerbys1.jpg',
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15487828/2021/9/16/2bb36ed5-0089-4fb4-9e50-6c28223152211631789631812HushPuppiesMenBrownFormalDerbys2.jpg'
    ],
    category: 'formal shoes',
    gender: 'men',
    ratings: 4.6,
    description: 'A pair of round-toe brown formal derbys, has lace-up detail',
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: '6',
    title: 'Men Green Solid Bomber Jacket',
    brand: 'Jack & Jones',
    price: 4499,
    discountedPrice: 2699,
    discountPercentage: 40,
    images: [
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2055932/2017/9/8/11504873559176-Jack--Jones-Men-Jackets-3211504873559039-1.jpg',
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2055932/2017/9/8/11504873559149-Jack--Jones-Men-Jackets-3211504873559039-2.jpg'
    ],
    category: 'jackets',
    gender: 'men',
    ratings: 4.4,
    description: 'Green solid bomber jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hemline, polyester lining',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '7',
    title: 'Women Blue Skinny Fit High-Rise Clean Look Stretchable Jeans',
    brand: 'HRX',
    price: 1799,
    discountedPrice: 899,
    discountPercentage: 50,
    images: [
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16838052/2022/3/15/2b4402f7-8396-4a66-9e1f-e845ce61e79c1647341154473-DressBerry-Women-Jeans-5131647341153913-1.jpg',
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16838052/2022/3/15/6981cd85-b22c-4676-913c-1e68a0d177e31647341154452-DressBerry-Women-Jeans-5131647341153913-2.jpg'
    ],
    category: 'jeans',
    gender: 'women',
    ratings: 4.2,
    description: 'Blue skinny fit high-rise clean look stretchable jeans, has a button and zip closure, five pockets',
    sizes: ['28', '30', '32', '34', '36']
  },
  {
    id: '8',
    title: 'Men Maroon Printed Round Neck T-shirt',
    brand: 'HRX',
    price: 899,
    discountedPrice: 539,
    discountPercentage: 40,
    images: [
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2314581/2018/4/10/11523353120457-HRX-by-Hrithik-Roshan-Men-Tshirts-621523353120241-1.jpg',
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2314581/2018/4/10/11523353120437-HRX-by-Hrithik-Roshan-Men-Tshirts-621523353120241-2.jpg'
    ],
    category: 'tshirts',
    gender: 'men',
    ratings: 4.1,
    description: 'Maroon printed T-shirt, has a round neck, short sleeves',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  }
];

// Filter functions for products
export const getProductsByCategory = (categorySlug: string) => {
  return products.filter(product => product.category === categorySlug || product.gender === categorySlug);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product) => {
  return products.filter(p => 
    (p.category === product.category || p.gender === product.gender) && p.id !== product.id
  ).slice(0, 4);
};

// export const getFeaturedProducts = () => {
//   return products.slice(0, 4);
// };

// export const getNewArrivals = () => {
//   return products.slice(4, 8);
// };

// Featured could be based on a popularity score, but if not tracked:


// export function getFeaturedProducts(products: Product[]): Product[] {
//   return products.filter(p => p.tags?.includes('featured'));
// }

// // Utility to get new arrivals from a given list
// export function getNewArrivals(products: Product[]): Product[] {
//   return products.filter(p => p.tags?.includes('newArrival'));
// }

export function getFeaturedProducts(products: any): Product[] {
  // First ensure products is an array
  if (!Array.isArray(products)) {
    console.error('Expected products to be an array, got:', typeof products);
    console.log('Products value:', products);
    return [];
  }
  
  // Filter featured products by checking for 'featured' tag in the tags array
  return products.filter(product => {
    // Make sure product and tags exist and tags is an array
    if (!product || typeof product !== 'object') return false;
    
    // Check if tags contains 'featured'
    if (Array.isArray(product.tags)) {
      return product.tags.includes('featured');
    }
    
    // If tags is a string (comma-separated list), check if it includes 'featured'
    if (typeof product.tags === 'string') {
      return product.tags.split(',').map(tag => tag.trim()).includes('featured');
    }
    
    return false;
  });
}

/**
 * Get new arrivals from the product list
 */
export function getNewArrivals(products: Product[]): Product[] {
  // First ensure products is an array
  if (!Array.isArray(products)) {
    console.error('Expected products to be an array, got:', typeof products);
    return [];
  }
  
  // Get current date to compare with product dates
  const now = new Date();
  // Products added in the last 30 days are considered new arrivals
  const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
  
  return products
    .filter(product => {
      if (!product.createdAt) return false;
      const productDate = new Date(product.createdAt);
      return productDate >= thirtyDaysAgo;
    })
    .sort((a, b) => {
      // Sort by newest first
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}

// ProductService class for fetching products
