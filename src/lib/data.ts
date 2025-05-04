
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
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIYlHhyYhR7lPpBJs0x0cyJQ5-W6pDRNdjwrRZQS-n_VnLbwgw0htDn2TpWlpW7pkxqVdzZttT4zUHoadM-GlA7HVp8z5Jp2KMTkpkrl4i',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStYm5yLLbEZEu1739pxhPJ3XT0aPq228xHYNmLb0lRQIX8jTkEM9OMu1bhV3w_a6KZhxHmuDdOtgkIy3aJVazXks_XOfHSxTpbTW9MY-k6'
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
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7oMna3ZeAr2oorphUAl8SQnKCzU7XS67JD_G7kpQ2h83LIT-G2-7gDB_FD9SS0tHP3ZrNqGPc4zSpD6Xfn3lK27_GzTTrCG1n_46rurEMzOCXqUPIqZxlUus',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgz3SDmt2meQOiE_xHhLJ54m78d_Mqz3JzZHGVqeCpKznLamgJJ9u0sAd-yw537DGF3wHxsIga1IqEJrBGL2O3X4xTthKeIe7YcUENmucg'
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
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlAoOT9c6U6swW9gIw7aRQxRHIcklo4ly5FvM8A5tkZqgPDnGfk605EIuSgxpiNkxTAgMQyHqjeeK0rAYHuxdoHu_eWtsmoL-zLBpue_RZwtAaO4ivO0oXWVg',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlAoOT9c6U6swW9gIw7aRQxRHIcklo4ly5FvM8A5tkZqgPDnGfk605EIuSgxpiNkxTAgMQyHqjeeK0rAYHuxdoHu_eWtsmoL-zLBpue_RZwtAaO4ivO0oXWVg'
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
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdK9-DdaV_hCIA3P9qL1IKycbrKIiEDJF7-vxKCe8eiegVi9yO3TRWDRPlLPFcb2Q3BQJ7Hn5J4J9M9sJfizQb-GJsZ_XYgpWlomVO_qm50xwErG-sNBUAMQ',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQNEDbob4oioKe-_BSoD6OT9SvnBzh_71X3B-ZD7Jurs59fgV5tB_tGfwSyL3mkMy5kDxCs1FX3Htcu6h-dQm9J_P4tjQZ5_Y5PGJVTZoGHuOVbPb6lsK30w'
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
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJrLWXcaIN-fVUf40i2vXlVJw8Sysh3DG7u-qLOuCIJQ98X4CGtSJ_UDOGKJNDEPCCXY-nxNp3dCy73nhYHYIfnu2PB530HiQX3FMiiOF4irkSWDFsJxKXUXU',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRub33L8mjK4WFfvoO1-aLMjr7hnArPIhlRkDjVk9i0260wsmlCfVNcuRfQVpTlkjKa-0q9lKjpkTF3XAMLFop0u4ocDVai6vvp3pmHSSC0Jds2c9Ulmz3vqA'
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
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPE41X4t8qTtt5kLhQlQhESW9QphNcLwEzqKaSt_tmVnM_1LLkJ30kFNAv53Es1GRTBYKLWvwI0w_IEGYh1EFaGthFyYjI2Q',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJdI3yfza2KLD1VUEmiEUARscb0S2iY3M7412kw-I_18XBbjgLjhiqhcZH8Ry6BhPBh-c96jdA3X4rApyq10A1ci_hJuqQiZNl0osyEu6'
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
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBW_Acx2Pw4GoSPs1oPTfzkNBp7lCIgzie7ubPdvMS6P4oNab5cj16xomsWRXa1bfxBv8znmAobuIUVgnMNuIlTFSYvaD06JotRO0vBsbZNo9cL1RvX7l_Pw',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgp1ozo3YIjWYCOa0Zh1kya9wj6B1wYWxi-piPxD3-7M2jVBiqkiwRoyiDYrmtk7kaYoMa6X3afdZHKEWyksL6rStzdx0da_P1FA6UTDDG'
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
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTsLIixIn_t5WvIsnEhyFd1JLdFR3KT3GPDXGMBGreX3BXT1Sw9E-B_VCDEGT1IkCHvBKDM86wgcgvU29wVJ2WVtrWolASZ88lm80rUaUBz',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSuJD7TvSA8-8-FskMLgbe-SwpaN5kXkbGeZP3V4MSh4OVvNm77A830J2MIh0zn17hqwyVqENdtCEynuebln-2ZMUrUNEdwn8Q5BPqqvSyV'
    ],
    category: 'tshirts',
    gender: 'men',
    ratings: 4.1,
    description: 'Maroon printed T-shirt, has a round neck, short sleeves',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    "id": "9",
    "title": "Roadster Men's Slim Fit Checked Sustainable Casual Shirt",
    "brand": "Roadster",
    "price": 1299,
    "discountedPrice": 639,
    "discountPercentage": 50,
    "images": [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2127873/2017/10/20/11508505790957-Roadster-Men-Khaki--Green-Slim-Fit-Checked-Casual-Shirt-2127873-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2127873/2017/10/20/11508505790938-Roadster-Men-Khaki--Green-Slim-Fit-Checked-Casual-Shirt-2127873-2.jpg"
    ],
    "category": "shirts",
    "gender": "men",
    "ratings": 4.2,
    "description": "Khaki and green checked casual shirt, has a spread collar, button placket, 1 pocket, long sleeves, curved hem",
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": "10",
    "title": "Leriya Fashion Men's Textured Regular Fit Casual Fancy Full Sleeve Shirt",
    "brand": "Leriya Fashion",
    "price": 820,
    "discountedPrice": 410,
    "discountPercentage": 50,
    "images": [
      "https://m.media-amazon.com/images/I/71u0Y3z3M5L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u0Y3z3M5L._UL1500_.jpg"
    ],
    "category": "shirts",
    "gender": "men",
    "ratings": 4.0,
    "description": "Men's textured regular fit casual fancy full sleeve shirt",
    "sizes": ["M", "L", "XL", "XXL"]
  },
  {
    "id": "11",
    "title": "Libas Women Floral Printed Panelled Pure Cotton Kurta with Palazzo",
    "brand": "Libas",
    "price": 1999,
    "discountedPrice": 1399,
    "discountPercentage": 30,
    "images": [
      "https://www.libas.in/cdn/shop/products/6767-XS_1.jpg?v=1677659334",
      "https://www.libas.in/cdn/shop/products/6767-XS_2.jpg?v=1677659334"
    ],
    "category": "kurtas",
    "gender": "women",
    "ratings": 5.0,
    "description": "Floral printed panelled pure cotton kurta with palazzo",
    "sizes": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "12",
    "title": "GoSriKi Women's Rayon Viscose Printed Anarkali Kurta with Palazzo & Dupatta",
    "brand": "GoSriKi",
    "price": 1398,
    "discountedPrice": 699,
    "discountPercentage": 50,
    "images": [
      "https://m.media-amazon.com/images/I/71u0Y3z3M5L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u0Y3z3M5L._UL1500_.jpg"
    ],
    "category": "kurtas",
    "gender": "women",
    "ratings": 4.3,
    "description": "Rayon viscose printed Anarkali kurta with palazzo and dupatta",
    "sizes": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "13",
    "title": "Puma Men White Smashic Unisex Sneakers",
    "brand": "Puma",
    "price": 5699,
    "discountedPrice": 1709,
    "discountPercentage": 70,
    "images": [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/365215/01/sv01/fnd/IND/fmt/png",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/365215/01/sv02/fnd/IND/fmt/png"
    ],
    "category": "footwear",
    "gender": "unisex",
    "ratings": 4.5,
    "description": "White Smashic unisex sneakers with lace-up closure",
    "sizes": ["6", "7", "8", "9", "10", "11"]
  },
  {
    "id": "14",
    "title": "Puma Men's Galaxis Pro Performance Boost Running Shoes",
    "brand": "Puma",
    "price": 4499,
    "discountedPrice": 3149,
    "discountPercentage": 30,
    "images": [
      "https://m.media-amazon.com/images/I/71u0Y3z3M5L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u0Y3z3M5L._UL1500_.jpg"
    ],
    "category": "footwear",
    "gender": "men",
    "ratings": 4.4,
    "description": "Galaxis Pro performance boost running shoes with cushioned sole",
    "sizes": ["7", "8", "9", "10", "11"]
  },
  {
    "id": "15",
    "title": "HRX by Hrithik Roshan Printed Round Neck T-shirt",
    "brand": "HRX",
    "price": 1199,
    "discountedPrice": 719,
    "discountPercentage": 40,
    "images": [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/3/1/3/m-hrx-printed-round-neck-t-shirt-hrx-original-imagz9zjzv3z9zjz.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/3/1/3/m-hrx-printed-round-neck-t-shirt-hrx-original-imagz9zjzv3z9zjz.jpeg?q=70"
    ],
    "category": "tshirts",
    "gender": "men",
    "ratings": 4.2,
    "description": "Printed round neck T-shirt with short sleeves",
    "sizes": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "16",
    "title": "Technosport Men's Lightweight Sporty Jacket",
    "brand": "Technosport",
    "price": 999,
    "discountedPrice": 500,
    "discountPercentage": 50,
    "images": [
      "https://m.media-amazon.com/images/I/71u0Y3z3M5L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u0Y3z3M5L._UL1500_.jpg"
    ],
    "category": "jackets",
    "gender": "men",
    "ratings": 4.3,
    "description": "Lightweight sporty jacket with zip closure and side pockets",
    "sizes": ["M", "L", "XL", "XXL"]
  },
  {
    "id": "17",
    "title": "Miss Chase Women Skinny Fit High-Rise Clean Look Stretchable Jeans",
    "brand": "Miss Chase",
    "price": 2299,
    "discountedPrice": 1149,
    "discountPercentage": 50,
    "images": [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2127873/2017/10/20/11508505790957-Roadster-Men-Khaki--Green-Slim-Fit-Checked-Casual-Shirt-2127873-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2127873/2017/10/20/11508505790938-Roadster-Men-Khaki--Green-Slim-Fit-Checked-Casual-Shirt-2127873-2.jpg"
    ],
    "category": "jeans",
    "gender": "women",
    "ratings": 4.2,
    "description": "Skinny fit high-rise clean look stretchable jeans with button and zip closure",
    "sizes": ["28", "30", "32", "34", "36"]
  },
  {
    "id": "18",
    "title": "Rimeline Floral Printed Notch-Neck Straight Kurta",
    "brand": "Rimeline",
    "price": 1699,
    "discountedPrice": 679,
    "discountPercentage": 60,
    "images": [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2127873/2017/10/20/11508505790957-Roadster-Men-Khaki--Green-Slim-Fit-Checked-Casual-Shirt-2127873-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2127873/2017/10/20/11508505790938-Roadster-Men-Khaki--Green-Slim-Fit-Checked-Casual-Shirt-2127873-2.jpg"
    ],
    "category": "kurtas",
    "gender": "women",
    "ratings": 4.0,
    "description": "Floral printed notch-neck straight kurta with three-quarter sleeves",
    "sizes": ["S", "M", "L", "XL", "XXL"]
  },
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

export const getFeaturedProducts = () => {
  return products.slice(0, 4);
};

export const getNewArrivals = () => {
  return products.slice(4, 8);
};

// Featured could be based on a popularity score, but if not tracked:


// export function getFeaturedProducts(products: Product[]): Product[] {
//   return products.filter(p => p.tags?.includes('featured'));
// }

// // Utility to get new arrivals from a given list
// export function getNewArrivals(products: Product[]): Product[] {
//   return products.filter(p => p.tags?.includes('newArrival'));
// }

// export function getFeaturedProducts(products: any): Product[] {
//   // First ensure products is an array
//   if (!Array.isArray(products)) {
//     console.error('Expected products to be an array, got:', typeof products);
//     console.log('Products value:', products);
//     return [];
//   }
  
//   // Filter featured products by checking for 'featured' tag in the tags array
//   return products.filter(product => {
//     // Make sure product and tags exist and tags is an array
//     if (!product || typeof product !== 'object') return false;
    
//     // Check if tags contains 'featured'
//     if (Array.isArray(product.tags)) {
//       return product.tags.includes('featured');
//     }
    
//     // If tags is a string (comma-separated list), check if it includes 'featured'
//     if (typeof product.tags === 'string') {
//       return product.tags.split(',').map(tag => tag.trim()).includes('featured');
//     }
    
//     return false;
//   });
// }

// /**
//  * Get new arrivals from the product list
//  */
// export function getNewArrivals(products: Product[]): Product[] {
//   // First ensure products is an array
//   if (!Array.isArray(products)) {
//     console.error('Expected products to be an array, got:', typeof products);
//     return [];
//   }
  
//   // Get current date to compare with product dates
//   const now = new Date();
//   // Products added in the last 30 days are considered new arrivals
//   const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
  
//   return products
//     .filter(product => {
//       if (!product.createdAt) return false;
//       const productDate = new Date(product.createdAt);
//       return productDate >= thirtyDaysAgo;
//     })
//     .sort((a, b) => {
//       // Sort by newest first
//       return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
//     });
// }

// // ProductService class for fetching products
