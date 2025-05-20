
import { mock } from 'node:test';
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
  { id: '25', name: 'Bags & Backpacks', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/10293735/2023/12/15/9c818262-8adf-4d19-86d5-7e7476d12ffd1702641212613-Wildcraft-Women-Blue-Graphic-Backpack-2081702641212455-14.jpg', slug: 'bags-backpacks' },{ id: '26', name: 'Accessories', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30024368/2024/6/24/aef203cf-c415-4f4c-96c6-419bb4f067d51719240568105One8MenAccessoryGiftSetof1.jpg', slug: 'Accessories' },
];




export const products: Product[] = [
  {
    "id": "1",
    "title": "Slim Fit Checked Shirt",
    "brand": "Roadster",
    "price": 1299,
    "discountedPrice": 649,
    "discountPercentage": 50,
    "images": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIYlHhyYhR7lPpBJs0x0cyJQ5-W6pDRNdjwrRZQS-n_VnLbwgw0htDn2TpWlpW7pkxqVdzZttT4zUHoadM-GlA7HVp8z5Jp2KMTkpkrl4i",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStYm5yLLbEZEu1739pxhPJ3XT0aPq228xHYNmLb0lRQIX8jTkEM9OMu1bhV3w_a6KZhxHmuDdOtgkIy3aJVazXks_XOfHSxTpbTW9MY-k6"
    ],
    "category": ["Casual Wear", "Casual Styles"],
    "gender": "men",
    "ratings": 4.2,
    "description": "Navy blue and green checked casual shirt, has a spread collar, button placket, 1 pocket, long sleeves, curved hem",
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": "2",
    "title": "Women Black Solid Skinny Fit Jeans",
    "brand": "Levis",
    "price": 2099,
    "discountedPrice": 1469,
    "discountPercentage": 30,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7oMna3ZeAr2oorphUAl8SQnKCzU7XS67JD_G7kpQ2h83LIT-G2-7gDB_FD9SS0tHP3ZrNqGPc4zSpD6Xfn3lK27_GzTTrCG1n_46rurEMzOCXqUPIqZxlUus",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgz3SDmt2meQOiE_xHhLJ54m78d_Mqz3JzZHGVqeCpKznLamgJJ9u0sAd-yw537DGF3wHxsIga1IqEJrBGL2O3X4xTthKeIe7YcUENmucg"
    ],
    "category": ["Casual Wear", "Western Wear", "Casual Styles"],
    "gender": "women",
    "ratings": 4.5,
    "description": "Black solid mid-rise jeans, clean look, no fade, has a button and zip closure, 5 pockets",
    "sizes": ["28", "30", "32", "34"]
  },
  {
    "id": "3",
    "title": "Men White Sneakers",
    "brand": "Puma",
    "price": 3499,
    "discountedPrice": 2449,
    "discountPercentage": 30,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlAoOT9c6U6swW9gIw7aRQxRHIcklo4ly5FvM8A5tkZqgPDnGfk605EIuSgxpiNkxTAgMQyHqjeeK0rAYHuxdoHu_eWtsmoL-zLBpue_RZwtAaO4ivO0oXWVg",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlAoOT9c6U6swW9gIw7aRQxRHIcklo4ly5FvM8A5tkZqgPDnGfk605EIuSgxpiNkxTAgMQyHqjeeK0rAYHuxdoHu_eWtsmoL-zLBpue_RZwtAaO4ivO0oXWVg"
    ],
    "category": ["Men's Footwear", "Casual Styles", "Sportswear"],
    "gender": "men",
    "ratings": 4.3,
    "description": "A pair of white sneakers, has regular styling, lace-up detail",
    "sizes": ["7", "8", "9", "10", "11"]
  },
  {
    "id": "4",
    "title": "Pink & White Floral Print Kurta with Palazzos",
    "brand": "Libas",
    "price": 1899,
    "discountedPrice": 1044,
    "discountPercentage": 45,
    "images": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdK9-DdaV_hCIA3P9qL1IKycbrKIiEDJF7-vxKCe8eiegVi9yO3TRWDRPlLPFcb2Q3BQJ7Hn5J4J9M9sJfizQb-GJsZ_XYgpWlomVO_qm50xwErG-sNBUAMQ",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQNEDbob4oioKe-_BSoD6OT9SvnBzh_71X3B-ZD7Jurs59fgV5tB_tGfwSyL3mkMy5kDxCs1FX3Htcu6h-dQm9J_P4tjQZ5_Y5PGJVTZoGHuOVbPb6lsK30w"
    ],
    "category": ["Ethnic Wear", "Casual Wear"],
    "gender": "women",
    "ratings": 4.1,
    "description": "Pink and white floral print kurta with palazzos",
    "sizes": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "5",
    "title": "Brown Leather Formal Shoes",
    "brand": "Hush Puppies",
    "price": 5999,
    "discountedPrice": 4199,
    "discountPercentage": 30,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJrLWXcaIN-fVUf40i2vXlVJw8Sysh3DG7u-qLOuCIJQ98X4CGtSJ_UDOGKJNDEPCCXY-nxNp3dCy73nhYHYIfnu2PB530HiQX3FMiiOF4irkSWDFsJxKXUXU",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRub33L8mjK4WFfvoO1-aLMjr7hnArPIhlRkDjVk9i0260wsmlCfVNcuRfQVpTlkjKa-0q9lKjpkTF3XAMLFop0u4ocDVai6vvp3pmHSSC0Jds2c9Ulmz3vqA"
    ],
    "category": ["Men's Footwear", "Workwear", "Office Wear"],
    "gender": "men",
    "ratings": 4.6,
    "description": "A pair of round-toe brown formal derbys, has lace-up detail",
    "sizes": ["7", "8", "9", "10", "11"]
  },
  {
    "id": "6",
    "title": "Men Green Solid Bomber Jacket",
    "brand": "Jack & Jones",
    "price": 4499,
    "discountedPrice": 2699,
    "discountPercentage": 40,
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPE41X4t8qTtt5kLhQlQhESW9QphNcLwEzqKaSt_tmVnM_1LLkJ30kFNAv53Es1GRTBYKLWvwI0w_IEGYh1EFaGthFyYjI2Q",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJdI3yfza2KLD1VUEmiEUARscb0S2iY3M7412kw-I_18XBbjgLjhiqhcZH8Ry6BhPBh-c96jdA3X4rApyq10A1ci_hJuqQiZNl0osyEu6"
    ],
    "category": ["Casual Wear", "Casual Styles", "Western Wear"],
    "gender": "men",
    "ratings": 4.4,
    "description": "Green solid bomber jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hemline, polyester lining",
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": "7",
    "title": "Women Blue Skinny Fit High-Rise Clean Look Stretchable Jeans",
    "brand": "HRX",
    "price": 1799,
    "discountedPrice": 899,
    "discountPercentage": 50,
    "images": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBW_Acx2Pw4GoSPs1oPTfzkNBp7lCIgzie7ubPdvMS6P4oNab5cj16xomsWRXa1bfxBv8znmAobuIUVgnMNuIlTFSYvaD06JotRO0vBsbZNo9cL1RvX7l_Pw",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgp1ozo3YIjWYCOa0Zh1kya9wj6B1wYWxi-piPxD3-7M2jVBiqkiwRoyiDYrmtk7kaYoMa6X3afdZHKEWyksL6rStzdx0da_P1FA6UTDDG"
    ],
    "category": ["Casual Wear", "Western Wear", "Women's Activewear"],
    "gender": "women",
    "ratings": 4.2,
    "description": "Blue skinny fit high-rise clean look stretchable jeans, has a button and zip closure, five pockets",
    "sizes": ["28", "30", "32", "34", "36"]
  },
  {
    "id": "8",
    "title": "Men Maroon Printed Round Neck T-shirt",
    "brand": "HRX",
    "price": 899,
    "discountedPrice": 539,
    "discountPercentage": 40,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTsLIixIn_t5WvIsnEhyFd1JLdFR3KT3GPDXGMBGreX3BXT1Sw9E-B_VCDEGT1IkCHvBKDM86wgcgvU29wVJ2WVtrWolASZ88lm80rUaUBz",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSuJD7TvSA8-8-FskMLgbe-SwpaN5kXkbGeZP3V4MSh4OVvNm77A830J2MIh0zn17hqwyVqENdtCEynuebln-2ZMUrUNEdwn8Q5BPqqvSyV"
    ],
    "category": ["Casual Wear", "Men's Activewear", "Sportswear"],
    "gender": "men",
    "ratings": 4.1,
    "description": "Maroon printed T-shirt, has a round neck, short sleeves",
    "sizes": ["S", "M", "L", "XL", "XXL"]
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
    "category": ["Casual Wear", "Casual Styles"],
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
    "category": ["Casual Wear", "Casual Styles"],
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
    "category": ["Ethnic Wear", "Casual Wear"],
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
    "category": ["Ethnic Wear", "Casual Wear"],
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
    "discountPercentage": 70,
    "discountedPrice": 1709,
    "images": [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/365215/01/sv01/fnd/IND/fmt/png",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/365215/01/sv02/fnd/IND/fmt/png"
    ],
    "category": ["Men's Footwear", "Casual Styles", "Sportswear"],
    "gender": "unisex",
    "ratings": 4.5,
    "description": "White Smashic unisex sneakers with lace-up closure",
    "sizes": ["6", "7", "8", "9", "10", "11"]
  },
  {
    "id": "19",
    "title": "Kids' Party Dress",
    "brand": "Allen Solly Junior",
    "price": 2999,
    "discountPercentage": 40,
    "discountedPrice": 1799,
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWxX_JpOhKLs61gQChTmEoHfxeWJsheDJnDXgueHcGcsJtTUfIqtLHn8oTQLg9wqOwWxgK0Zo1WKMJyOpGCDRweff70HLaYQJggd_R1rh-qcdTsl3JzkdB",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnvjCiE6moONKAtYPZrEc7R0RyA57gwFr8PX1qBlz3-MNnH_MUNUJqF2fJtwjHu4tEk2U9rBWDf0hDh6PIZ8Aw8BdfhBtK_UByFYJm_PuODLNlda9GLrVm5Q",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQf8T3cujsrF67OiEy5PcfrNoP63qT0ymcfTBouf31t3k6p13k3H7kfc06WBHHwH2O9tuQdXbckel9pQKyE8eOV2jJAUoXMH45p5ObYRFVHYinrzNuT-KdXUA"
    ],
    "category": ["Kids Wear", "Ethnic Wear"],
    "gender": "kids",
    "ratings": 4.6,
    "description": "Beautiful party dress with tulle overlay and embellished bodice. Perfect for special occasions and celebrations.",
    "sizes": ["3-4Y", "4-5Y", "5-6Y", "6-7Y"]
  },
  {
    "id": "20",
    "title": "Men's Leather Formal Shoes",
    "brand": "Red Tape",
    "price": 3999,
    "discountPercentage": 37,
    "discountedPrice": 2499,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8S2hr81DZP66hMIhSM4CY2h5pElBtpdHrNhfkex7CNX51ZuWzIlO1GY53KWUFm0vLlxU4qghTkCI2Pe7vkeNwHxvBtRXRaw8opTcc8ygK",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZ9ZDD1SuMyILFI157wv3Vt6hlALuQ8f9XlRnOlsvJcOQrh_iWUdH0XR69uCvbb71BVZu_iNaD90vj_HHz-FXfOysterr90vUyNZ1odwTpNwBmjzYnreCdfTD2",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRnZJm62JvKP4Fs7dfgS6XVTf5pdb86JYH2ufimn-V70Ttg7nRChfNlokt26lommoG9B_R75IkmzQTjY41k2GXiI5pTj-Aiqo9LvxvmGTuzm4rGHrmq1y_b_A"
    ],
    "category": ["Men's Footwear", "Office Wear", "Workwear"],
    "gender": "men",
    "ratings": 4.3,
    "description": "Classic leather formal shoes with lace-up closure. Features cushioned insole and durable outsole. Perfect for office and formal occasions.",
    "sizes": ["UK6", "UK7", "UK8", "UK9", "UK10"]
  },
  {
    "id": "21",
    "title": "Women's Canvas Sneakers",
    "brand": "Converse",
    "price": 1499,
    "discountPercentage": 33,
    "discountedPrice": 999,
    "images": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTa2ljUT96pXhDVf9c2EKXGavxlln47r7zyVh5mkrC-uQ2M1iCPfE1lKSSEtnbVlgMcWmgygUAaIU_aX-w2ZOHn-mdri-3kFHOKcFSyYuTNUnS5K3STUtZd0vU",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQO62NqWrLJ9eB8JW29TJPGhw_jX8171arUOLoXbo6mP8gqhEu5OwHrAUBUUm7yR6WvAfxfeyOGPvECc_q0b7jXvo4G-53QMexbhtBC7rs5FxJ-kkPH2nvCT00B",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQojQpbo9Iot3gi5E9E2DfZSWU5tm_NVFUbImHqkGrJFF_DRCLokHaw0JYd1g5eDoc9RLRtjMpwiw9XpKMuEHIg89KjsjxEJiJ74tpyd1l4LTzHgFX-TDlg1g"
    ],
    "category": ["Women's Footwear", "Casual Styles", "Casual Wear"],
    "gender": "women",
    "ratings": 4.5,
    "description": "Casual canvas sneakers with rubber sole. Lightweight and comfortable for everyday wear.",
    "sizes": ["UK3", "UK4", "UK5", "UK6", "UK7"]
  },
  {
    "id": "22",
    "title": "Kids' Light-Up Sneakers",
    "brand": "Skechers",
    "price": 1999,
    "discountPercentage": 35,
    "discountedPrice": 1299,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEZMHxua7Eqgm2AWjnJRrHfDWAuMXljEIA_7Ve6BpBE1YtmqXnEo1PAowe8WRmOKTx8juZhAQTg8OZNMelzrusahMdCW1VoRyDfYdMsMMqZaSQL_WRXgGxBkQ",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIC4peGiveEFWtIMBWpwis5Nnv75veJL8G-hIgjGj0qwbbtOMEXWe6hUfTkTTrXNL-u8r9qyWMpIYzCxaQTDsrnESUVOg7jWRSn2J612m8OBGsMoF0YhYq",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQRnlJDmcaYiQ3d-A9uAlju1mxpZ8Jvj2NMPD1eEWkAq0NM5EQhIM0d42u4-t0HmsJBnAliJjUkPWF7KnYW4VaMZg51gj_KU96Sspy7oFkZULWyVqWNlk6zg"
    ],
    "category": ["Kids Wear", "Sportswear"],
    "gender": "kids",
    "ratings": 4.7,
    "description": "Fun light-up sneakers for kids with velcro strap closure. Features LED lights in the sole that light up with every step.",
    "sizes": ["UK10C", "UK11C", "UK12C", "UK13C", "UK1"]
  },
  {
    "id": "23",
    "title": "Men's Flip Flops",
    "brand": "Crocs",
    "price": 999,
    "discountPercentage": 40,
    "discountedPrice": 599,
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTyJDoTpMyxUl0-P9gHzj0N74dSYyhSG3jIZRioAbRGe8tdqKLfTytUMheLvvOGphppbgM1jj2mU8qKOL9PxfSImEkYWEeBo-RKYbe3JXzidhWP4-RzYL0JjEc",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXxfTlPN4eyFNTltroq61ZfF9Mi588SR9AENKhku0OTvivcEmsDtb94maXqTZTBZabwN3Rfk00x_ZRHvjMkpOk014TzlH42QX54wpx_CkNQrK3emA51dhs",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTt4nf3ElipGAJJylHEYxPin6vAS7CHYS-wMTiCHJkymJ_Dimsy1GgXo5BrvOs66pQaakwy6ghUiARMJyapLowFRn7m4HqwtcIT7ZGgvQnMrJuqVvJGiBW24Q"
    ],
    "category": ["Men's Footwear", "Casual Styles", "Loungewear"],
    "gender": "men",
    "ratings": 4.2,
    "description": "Comfortable rubber flip flops with textured footbed. Perfect for casual wear and beach outings.",
    "sizes": ["UK6", "UK7", "UK8", "UK9", "UK10"]
  },
  {
    "id": "24",
    "title": "Women's Ankle Boots",
    "brand": "Aldo",
    "price": 2999,
    "discountPercentage": 33,
    "discountedPrice": 1999,
    "images": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxVi03c1MsCdIRdL0c_d9UVYT0ZVmWuP4ZTe9nx9KvyvExKfqOROAemaUgLxGBg-4pvWYaQXyTj6iGQACmFUVPUxQPjMP9qgAKbl9mXa2O3rEnC-e3TWc0Mw",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdgTlXiflXezJXdp7CUk1vcbKq--Xd9k2Yx2pCy3hcGcKJR4QHd6Zauiin9R22eENz360RDPxlyDXrHxeZ_rGrRRpI0MP1yzufgBafrUP8sfrMShMHB2nFWg",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9I2jTiNU3UbzF-35qx1UzOi-cow8pquEOy3HV8b9xdRGYd5LHUbRZWrLyNIoleWBqNCarQhTmwmsBg9cN3tIw2lUoyiGUqqm2oIn0sXLY2PN5wRAfjvM3Ag"
    ],
    "category": ["Women's Footwear", "Casual Styles", "Western Wear"],
    "gender": "women",
    "ratings": 4.4,
    "description": "Stylish ankle boots with block heel and side zip closure. Perfect for casual and semi-formal occasions.",
    "sizes": ["UK3", "UK4", "UK5", "UK6", "UK7"]
  },
  {
    "id": "25",
    "title": "Men's Leather Wallet",
    "brand": "Hidesign",
    "price": 1599,
    "discountPercentage": 37,
    "discountedPrice": 999,
    "images": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQZDmFuEQxOji0YCzGh9L0pLkYevRL9Bqw5Fh_d9KycdHLOWMOEssqCa9zQLKsx40uXunMww1MgkXCMfr4Rq0ruIc57OfXSTyWfoVIWAkxiJ9B7iqh0m-vc",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0icgxf55-E15x3ln5ONH8T8m-bIAmig2GB36UfP6FPKtJtASqq7PcrSQ8xjPsWd1RskXtISpY3bjDepLgSIbhWK35Tt9o9JnDsEYE3jbqy8k7lN3qSq6hsg",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTWPJFjmgWL5p4OsmYUJjKO3eP_bduWdCkEpMPT_n8b2xMj4r4-ICQgg_3qwNtPUpZWPRRK3ZXDRwSCJFZQ0WkLN0SO1Ll9T5AtkM7ekPI6CzpR7pFxirVOD6g"
    ],
    "category": ["Bags, Belts & Watches", "Casual Styles"],
    "gender": "men",
    "ratings": 4.3,
    "description": "Sleek leather wallet with multiple card slots and a billfold compartment. Features premium quality leather with fine stitching.",
    "sizes": ["Free Size"]
  },
  {
    "id": "26",
    "title": "Women's Sunglasses",
    "brand": "Ray-Ban",
    "price": 2299,
    "discountPercentage": 35,
    "discountedPrice": 1499,
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEk_Vr4BJLkhZbMEFl-h5isreHd2M___hDXPiaKyK7iXSwqUAbOrM2xwEMs8XgtvKQ9_LzKxOY05uKw9NCJAAM5gLA0vRcIbvuLrF8SCsi9VGgO33_MzfMK4E",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSRKHcQQl4defnRELP98vqBIiRmpHNFUfv3nReUaEoi1Qsmcm3FR_j3a4NbGgyweaG5FO-y8sG9ZB-MONRNvmKBldQi2WNFdiRc30l3k4Uvjtrq1JXpAJ5j",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDEUEXdULvhJZ3aEMpjIc0wTd5oLQHN8f1HImRx9bmohS-xf8ZLV4j-5uS3xilHeHwF8W-0Ts4UQWk-aNg0Xz7LFVqpX7JGJVygZdh4uPhOobUYWN8zyaTwE0e"
    ],
    "category": ["Eyewear", "Casual Styles", "Western Wear"],
    "gender": "women",
    "ratings": 4.5,
    "description": "Stylish oversized sunglasses with UV protection. Features lightweight frame and polarized lenses for clear vision.",
    "sizes": ["Free Size"]
  },
  {
    "id": "27",
    "title": "Unisex Backpack",
    "brand": "Skybags",
    "price": 2999,
    "discountPercentage": 40,
    "discountedPrice": 1799,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTW-6DvebgsMpVgIK216-ILTwCYAVW6IZ7X-tWCOVH06bGNnQu9uNIxjnxU1DKCJPjjUbR2Tv36QUDgKeq1przsw4S7sTb6eZCU4_0IHrP6iQ8eMlOoEKKq",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQTKee4sxtyvovqxXm5TuFXEZuKB7-N9hRvnKBd2dvVGqQ8-FGIlkzkqPvhQiSPeNVVworsqoLDXPedNSNhxOf46F-PWkBXM7Zen8ZX0OBUauDMDD5-mdtR"
    ],
    "category": ["Bags & Backpacks", "Casual Styles"],
    "gender": "unisex",
    "ratings": 4.4,
    "description": "Spacious backpack with multiple compartments and laptop sleeve. Perfect for daily use, college, and travel.",
    "sizes": ["Free Size"]
  },
  {
    "id": "28",
    "title": "Women's Statement Necklace",
    "brand": "Zaveri Pearls",
    "price": 1499,
    "discountPercentage": 40,
    "discountedPrice": 899,
    "images": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTa9GoSSgynlt4BZGLJk1sA5aBjfoS1hhtjGj7HVrw2DiqGNYa48fR4Lnu9Laf3Bo_HS_LlM26tt1D_S0XuAyXC8YD9bDL-TQNAGuyt97-Mv0bSv7hEUcEGyw",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQl82vFADypmCxzqDXQlWdL8iciWWCFQ73usBKhM1sZhYaibUMceg0vNzz2-6mFC0mfdyh7tzRP2MlTMXu2BuTb127nq_KeQMbBjDOMfmTD-Yiu2mccuIh1lg",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRDY2sv2PC9P9XOCbmWLOeAS7skyHFYBwILDsoVaNgK3FqKRBYgR31yiyYZZdgXbnRABge-ovzrWrq1CDjZCmJwIlzDqsLUEWTN-oPjHqgJQ337axHNDr7zjhs"
    ],
    "category": ["Jewellery", "Western Wear", "Casual Styles"],
    "gender": "women",
    "ratings": 4.3,
    "description": "Elegant statement necklace with crystal embellishments. Perfect for parties and special occasions.",
    "sizes": ["Free Size"]
  },
  {
    "id": "29",
    "title": "Men's Leather Belt",
    "brand": "Woodland",
    "price": 1299,
    "discountPercentage": 30,
    "discountedPrice": 899,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS44N5IfRz4d0TU6fNMT05a1p9ThQRD99o9ircVly6hTUbxv7fjfvxEbCT0UJNYP_p9zP9Z_dD-eC62pVIIY9UMWOOr5--owe7UoeVjiZQpLGtSOep2K7pJKo4",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQaHt9LmsHCtggpf1SHO8GgXrCS97jowJnPBKqvlTu32GgR5VbXtZVC-i1JDcOp9K7gWhA3lgoiRkuHeEsVmarEhbunkrVWCwZPzE5q0DV-oYau-_rZgSyJ"
    ],
    "category": ["Bags, Belts & Watches", "Casual Styles", "Office Wear"],
    "gender": "men",
    "ratings": 4.2,
    "description": "Classic leather belt with a metal buckle. Features premium quality leather and timeless design.",
    "sizes": ["32", "34", "36", "38", "40"]
  },
  {
    "id": "30",
    "title": "Wireless Bluetooth Earbuds",
    "brand": "boAt",
    "price": 4999,
    "discountPercentage": 40,
    "discountedPrice": 2999,
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQWGAxs2sb6pZGjS-nMcq1zc01oDUYZDCcymapo0bfJAWqvXkYKQLv-uCB4Z-mhLJE2LD82S87BO06mnf3b4fLkIhJuZo6yMZjDa3xbGlGUXOcLZeSjcYQLOw",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcXwmXSWAk42-e73yWjabPh2hH-GgdJ8xPVm2b1Hsht9uD3eGLPWMPdyWgwNY4dNDwdurg-ZWM_z963qV7CrOx_AltuDZ7XFtewz2bjNJTy5Gfhy7fwf7oTg"
    ],
    "category": ["Headphones & Speakers"],
    "gender": "unisex",
    "ratings": 4.5,
    "description": "True wireless earbuds with Bluetooth 5.0 connectivity. Features touch controls, noise cancellation, and long battery life.",
    "sizes": ["Free Size"]
  },
  {
    "id": "31",
    "title": "Smartwatch with Fitness Tracker",
    "brand": "Fossil",
    "price": 5999,
    "discountPercentage": 33,
    "discountedPrice": 3999,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRVdfc_QxNjpWS8Vm633tAH-XQtb_1nxg13sM7r54X_SHwG6C8i2XQT9lGIqlHUBpB6RtHlcm36CX-HayEPsOT_ug97PAt4pjZjVC-Au3x2ugUFc8VUPCb_t30",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRSYdGnNoX4X7bVFESgePfaPofCehtFg4ycaqxTW0gZE_b1dZjUjHnndDG64kRygbPJG4NVUJvRu8_yQx2oSPXLsGOhkv0KH9uwsOhQZBl-llxzzYqBo80rFA"
    ],
    "category": ["Watches", "Bags, Belts & Watches", "Sportswear"],
    "gender": "unisex",
    "ratings": 4.4,
    "description": "Advanced smartwatch with fitness tracking, heart rate monitor, and sleep analysis. Compatible with Android and iOS devices.",
    "sizes": ["Free Size"]
  },
  {
    "id": "32",
    "title": "Portable Bluetooth Speaker",
    "brand": "JBL",
    "price": 2999,
    "discountPercentage": 33,
    "discountedPrice": 1999,
    "images": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTWjl0rExfCNhbSvXYA_H5dz5IaCH8jly3SaRwRLiOjED_JU7AlbOwpm6bRkGcVu9kWoE-Uzajc_XR-Vjz78HdCm2j4yES4XNm0wBVIeAT3v3ufw1uHBYlE7g",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCYnzqWxXZ9vP-Y2_XW3bAj085w833ofy_2cYz6ODQyZ3eXugdxpbnCYF63MOEPQLfirczG7jXjIceG-ilKNAAOA12r1-D4xTgwMFSKkiIRLCkAMhWDrpoXQ"
    ],
    "category": ["Headphones & Speakers"],
    "gender": "unisex",
    "ratings": 4.6,
    "description": "Compact Bluetooth speaker with powerful sound and deep bass. Features waterproof design and 12-hour battery life.",
    "sizes": ["Free Size"]
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
    "category": ["Men's Footwear", "Men's Activewear", "Sportswear"],
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
    "category": ["Casual Wear", "Men's Activewear", "Western Wear"],
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
    "category": ["Men's Activewear", "Sportswear", "Casual Wear"],
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
    "category": ["Casual Wear", "Western Wear", "Women's Activewear"],
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
    category: ["Ethnic Wear", "Casual Wear", "Workwear"],
    "gender": "women",
    "ratings": 4.0,
    "description": "Floral printed notch-neck straight kurta with three-quarter sleeves",
    "sizes": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "33",
    "title": "Men's Slim Fit T-Shirt",
    "brand": "Roadster",
    "price": 999,
    "discountPercentage": 50,
    "discountedPrice": 499,
    "images": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPIo6Z-vcqe_Py6waUoJ091-83BLr4kE7HPgOvl4REaGUFYAV0axgGIjl-6Q6A3-7Y0T3Ghc6-AQJo_bSUrL0R23vORyEX2SOj3ZweGe-d",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTU4KPNLjJS4emrP37CW9nI2oz4eDx5IeDRH3zAfEyTpPMpmFLpxh36sptGqV0cZrD1gz83io9LeUw-PenxEl9dy2hvDUS5IuJscM5YJ2OsRtb0YBrQ-qFL"
    ],
    "category": ["T-Shirts", "Casual Wear", "Men's Activewear"],
    "gender": "men",
    "ratings": 4.2,
    "description": "Classic slim fit t-shirt with round neck and short sleeves. Made from soft cotton fabric for all-day comfort. Perfect for casual everyday wear.",
    "sizes": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "34",
    "title": "Men's Slim Fit Jeans",
    "brand": "Levis",
    "price": 1599,
    "discountPercentage": 37,
    "discountedPrice": 999,
    "images": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSeDe_vM179SMphA_lrTfG_5iMnrGQgyB9DOtdFW4h1IFO_p8p1XYmOumSG5YQrQUS0DP1MGP_RJmsiKLv_hWpc2QSYubITeTZhr4HJ9Vxu",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcToF41sYMbXLb3699Sga64DIYpNOsl1uuHAw8PqY4VBGf7TYfcQmSZgi8GnRTDGJC1ZbmClAiUBCE9XKSOkkF2oHBJl1x14bmeRainWIsz6WsUEaLWgolKLOw"
    ],
    "category": ["Jeans", "Casual Wear", "Western Wear"],
    "gender": "men",
    "ratings": 4.4,
    "description": "Stylish slim fit jeans with a modern silhouette. Features a comfortable mid-rise waist and classic five-pocket styling.",
    "sizes": ["30", "32", "34", "36", "38"]
  },
  {
    "id": "35",
    "title": "Men's Formal Shirt",
    "brand": "Arrow",
    "price": 1299,
    "discountPercentage": 38,
    "discountedPrice": 799,
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQkJPdVonqxOzUrbi4QdgRkN7koYkCfMWwAYFp7QuARbe3PwjFDTe2n25TLkDn-mMmPp9W6546YvGWbJcmT7hobmauoDWgcMAwCcbZ3WRz",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3lpBhIAkPCL21r5LXzGmK4buSvoWmAnWRp5bvgr-q8jcq0aPwoQxdstzVCMKnWX7nl3CefmvaXiMdBRiZaP50nZkDoJEQAjcTInIOSNyuMEeIPGHLYVq3",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1zW8X7AjPiPY5O6s20zMAYIC4Uj65UE-vXi1sLMKo0ScmgCArn4Z2lUO3_BlTXTEWWAWmbO5z65EHHginuA5kAwoNRetICt_IDHRwu-gM"
    ],
    "category": ["Formal Shirts", "Office Wear", "Workwear"],
    "gender": "men",
    "ratings": 4.3,
    "description": "Classic formal shirt with regular fit, perfect for office wear. Made from premium cotton blend fabric for comfort and durability.",
    "sizes": ["38", "40", "42", "44"]
  },
  {
    "id": "36",
    "title": "Women's Floral Print Maxi Dress",
    "brand": "Sassafras",
    "price": 1999,
    "discountPercentage": 35,
    "discountedPrice": 1299,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTosPgqzhMPI4GBHo33_kxBxRIF1A4Hb7roA2yqfepzC5xEc2X3RbJOjHNTuNq7mUwfAu6iH-RhgH6S5eryVLn99BvA0L_XdBz6VAKv758U",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTj7ois0klFz9iPNanIrvjmsKAbuENgA7hcNUMDxLA3CAJE8SrrCP9yjL2OSoa7Ivd9_3-ZHT8TpzoApJjWERCVH4IbGsefnzUvB-iWkH3mNiVuYPYY41lPjA",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ0ZxXMPSYPNB_7MuunZsgrXl4jsk_JRqbXXTqYjEWAIJ2xISxLwKvlXx9shIEw0rCcYsMfFQ5fQxXdlhBmUA7lo8I2dPpzCWBjoxa1MTdX9j2ylb2FtYonAw"
    ],
    "category": ["Dresses", "Western Wear", "Casual Wear"],
    "gender": "women",
    "ratings": 4.5,
    "description": "Beautiful floral print maxi dress perfect for summer days. Features a flattering A-line silhouette and comfortable fit.",
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": "37",
    "title": "Women's High-Waist Jeans",
    "brand": "ONLY",
    "price": 1699,
    "discountPercentage": 29,
    "discountedPrice": 1199,
    "images": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTAR4dDtbbs5-TTVaL7uhqTpRXsy2rrXk6P1vqmwdzekEkO5ED7mIQVlVfQ32uNwOYxtcvuV2cVnFUwF1PuAINI13ie1o4d2Q",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYXz8zC_Mo5QcIF9uVmkZ_MKwgaddfcCPl1pF0Y3D1kFoq9-zHwYt3ZRVSGwnVojzqROcvtSX8zM_X9-beYtPT1m8-jz9jR2mXSUTUUdfw",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTHpZE4jfKbLMQFqTen6ZeIkL3zlmxTfFvXEgwEr4tw0ho6gA_rfbrN9tlqJssygsTx8h06C1ypRXvL0X2hu2_gjiqYHAVL4sGxYPXmvGad"
    ],
    "category": ["Jeans", "Western Wear", "Casual Wear"],
    "gender": "women",
    "ratings": 4.2,
    "description": "Trendy high-waist jeans with a comfortable stretch fit. Features a skinny leg profile and classic five-pocket styling.",
    "sizes": ["28", "30", "32", "34"]
  },
  {
    "id": "38",
    "title": "Women's Casual T-Shirt",
    "brand": "H&M",
    "price": 899,
    "discountPercentage": 33,
    "discountedPrice": 599,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAsfJIo3YNdCvtutMZ_V4RfD5hG-ZbT51B0BcgBbcMBVciE0Q2L3wJGltK85h_y39RWSK7OJ0q8GfHoLTP6TzXHliQ2b5tWRxaobH1nP_PIsLMlB7uiKivkw",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhpb3ko3U7yADj2epZmDGLE-wn5dxfFJWcN7HssuC24tLHAFSPNmdLcrtmy0LgOyrlgTMYa8X03XfWiQYJkEY2o78o5SfxDaxaaV4ZP_rCh2LGxkUxcKZlf94",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQOHoYzbMcPHd5cZPF0T8ecAyEQSBtJZU2cEBkBGgFBrZJvJtPi8G9TNT3lQzKjVFxVtVAlNMj3MFqNkd2phaJnOROila3oSY39Xz0s2FY"
    ],
    "category": ["T-shirts", "Casual Wear", "Western Wear"],
    "gender": "women",
    "ratings": 4.0,
    "description": "Relaxed fit casual t-shirt with a trendy graphic print. Made from soft, breathable cotton for all-day comfort.",
    "sizes": ["XS", "S", "M", "L"]
  },
  {
    "id": "39",
    "title": "Kids' Printed T-shirt & Shorts Set",
    "brand": "H&M",
    "price": 1499,
    "discountPercentage": 45,
    "discountedPrice": 799,
    "images": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSKEB9TFdc4xWqcUUwLhzK9UYcKDI5AvNOKEIyeH2pKGS8MqF9ZWSKcBKuVg5PKWUh363sh2gLiLFRJNn_zKBlI0ZDq0OPsGNX7jxq4JEGMqrKC9AUVQ6fl",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQsT7syYZi4s4K6b4OukM4l8VuOmroi1xt0jJnsTW7okb3eTQOyBfMBiuieXnHMQiQDj2GN0MkDVGP1XuCU4K6or4o9BvPrlDXjo36vWjg",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRB5D7yBNQ7NaLXIaSkGzZe2DmZjCX2EXIDUK82A3DWeYdusS-QfPKd8SAv2d3ss6_39EP4eLe9UqRA3sIpSzennKct6Na8LbcrEIdYtZspjijt2LGfhhnJ2Q"
    ],
    "category": ["Kids Wear", "T-Shirts", "Casual Wear"],
    "gender": "kids",
    "ratings": 4.3,
    "description": "Comfortable cotton T-shirt and shorts set for kids. Perfect for playtime and everyday wear.",
    "sizes": ["2-3Y", "3-4Y", "4-5Y", "5-6Y"]
  },
  {
    "id": "40",
    "title": "Kids' Cartoon Print Hoodie",
    "brand": "Max",
    "price": 1299,
    "discountPercentage": 30,
    "discountedPrice": 899,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsbYOi7_JRwUrWUZ4DiEXt4dHYPFAN4_tjumZUGpDHchjJQCfOnMBWoSA1o9HKMpFssdPlMW5_IBTnL8LMN20Uvjt-49RPRuiJmo7hapfk",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQNBoVvE3UV4qtVkBJGHvRYgBGUxRfWT8HanlFQeOboUq8MKcmVKo50P9TyqKzqzl4alszVAfwoo7RT6dgSTBciW1SO05UjHY25Z3aejmG_up6bbvQs-kbe",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLls9vBgsqZm2jT_ufCyShrvxbs-3xgic_WtJHlcjbU12NPfWwC4-34_PA1bNqLECSOmCqRkl12Nh_7CPogHqs5Z7T4RsX-UfjSUYt9Toz"
    ],
    "category": ["Kids Wear", "Sweatshirts", "Casual Wear"],
    "gender": "kids",
    "ratings": 4.4,
    "description": "Cozy hoodie with fun cartoon prints. Features a kangaroo pocket and comfortable hood. Perfect for cool weather.",
    "sizes": ["3-4Y", "4-5Y", "5-6Y", "6-7Y"]
  },
  {
    "id": "41",
    "title": "Men's Running Shoes",
    "brand": "Nike",
    "price": 3999,
    "discountPercentage": 37,
    "discountedPrice": 2499,
    "images": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXTsbzo3y8t5VvNMZkGgmytNUGxjXxA8iAHTD7sh2zftey0QZpGRD2nYeEnGUjNZZ5hThxtyVPmUkwAZ5oAJwvpKjTauh-QJdRoATga6kN_w77Gf3l1-9WFfc",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSsnSxT_scXhwDunXcDY11-x6ilhw30kx51U20iqKtr6D9LJ4NR8BOyy6E3hzx1lvUTrQmFBgovVhvqNU3etTbfKOUqELkqBMhThDGtN-TWD0Jkn74FoxHwaw",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3b7T-I3u2V4GP2PvMDcRh4gW6VcCiF5Vfn8QoYM3-E8_Sqkh4UJiZSb83mFBXlTzV9DhwjttzqcKc6wYuOg6gFT6b45-FB2DF6d1hNl_z2zGPX93IkMsg4w"
    ],
    "category": ["Sports Shoes", "Men's Footwear", "Sportswear"],
    "gender": "men",
    "ratings": 4.4,
    "description": "Lightweight running shoes with responsive cushioning and breathable mesh upper. Perfect for daily runs and training.",
    "sizes": ["UK7", "UK8", "UK9", "UK10"]
  },
  {
    "id": "42",
    "title": "Men's Polo T-Shirt",
    "brand": "US Polo Assn",
    "price": 1499,
    "discountPercentage": 40,
    "discountedPrice": 899,
    "images": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGPWGqBvEhb3uE9j87REruRfVOK4sxs3TwHlV3oGCEBDJfYQvjf_LKdSJtjbHGQHRhSGRNtCHpOK6nwHMhamFE36ktLeyhhxNRHNZtMbFUnyS_jRZ8wrK8",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBu5EWJLGeWHBwFu4-g4wVmladfs-uPq5iCl3hv9tdyRIyndxjxSC1Q6CBpvLfOa9jRMnKB-_rCFGdWXhkkOCxC15L7z4dSKwcy0DrvowvabWVNlaJPEr4cw",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRp6eQ69Ash7PElo_933HD6YBSj4AMf1SR-xxu0X8X03VK1eENf6A4EpFMSnABjhxgnfV6Fd7x2VGTcPYFoZm6JxYwYQtyUEgXvp-UaZmXFmyAKoxBre-wjmw"
    ],
    "category": ["T-Shirts", "Casual Wear", "Smart-casual"],
    "gender": "men",
    "ratings": 4.3,
    "description": "Classic polo t-shirt with contrasting collar. Made from premium pique cotton for breathability and comfort. Perfect for smart-casual occasions.",
    "sizes": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "43",
    "title": "Men's Checked Casual Shirt",
    "brand": "Wrogn",
    "price": 1699,
    "discountPercentage": 32,
    "discountedPrice": 1149,
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR9oaw9cd0z3NfSZ53ZSQlkVVDzUtPkvheqRfkcx9pDpInRkRMRqJkAHA3n830uIntL5pwia6w0UHcrOPR9hbHkVUxZISHj3D-e2BFgYFVN",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvLT5v_P0NrYTkI7I01g-vLPEWnScJFEtIeqO_holTHobPe8_wdF6rw_NqZzwCv_VnGVHpHFDTPhNuSSG3EWhzO0jPZetV5BEwbBwickCh",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREl8jpRRki_oQM_l3hMloz5apI5Ub5pPyWWfaJx1lOpiwsggVhjwE5C8h0BKQeklcWCxQH-ehqsEQOq7QfLlZoRkoQlHJ2s9ILampBNcpGHf-bn8UOBgZP"
    ],
    "category": ["Casual Shirts", "Casual Wear", "Western Wear"],
    "gender": "men",
    "ratings": 4.2,
    "description": "Stylish checked shirt with a button-down collar and curved hem. Perfect for casual outings and weekend wear.",
    "sizes": ["38", "40", "42", "44", "46"]
  },
  {
    "id": "44",
    "title": "Men's Hooded Sweatshirt",
    "brand": "H&M",
    "price": 1999,
    "discountPercentage": 35,
    "discountedPrice": 1299,
    "images": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRvhSU4cRuzdvjovA811MrqD5k3o-a26anxrL_q_u7Uhb8ippi8UJsWI5n1_FN0q1GXQQG2RiQBM-82X8YZJ-yzd0W25kG5mfeK_eQTUvqxKNgLyD_23ra-tw",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2kO47XkrhQCvsK_mgaFf141QhjWwDa-jN9MMoKuINLXNFlvaF2mhcgH78mD_WRKx95Wx8xeMitwrXakYCdvReYfY1KYclJQiRCUVtR6rEVA1oZe-og4b6BA",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREa4VdMG2ZDTP_pp0AmR5IFjHQZJ_GFX3-E1KTBttzxQZ60QlXFvDERum6FBqrXnMJ-SB4dNf-HPrmXtTVfUM-79nMgmjXiweJTNCCvU3T8VwoL6e3JDsDzw"
    ],
    "category": ["Sweatshirts", "Casual Wear", "Men's Activewear"],
    "gender": "men",
    "ratings": 4.4,
    "description": "Warm and comfortable hooded sweatshirt with kangaroo pocket. Perfect for cold weather and casual outings.",
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": "45",
    "title": "Men's Chino Trousers",
    "brand": "Tommy Hilfiger",
    "price": 2299,
    "discountPercentage": 35,
    "discountedPrice": 1499,
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQzbeuHYtYCQKK0zDU2bUHt0cYuLhtMTRE9L-0Uns3IeuX0Yf_LQTsgLsVWI0b54Vla3re7jUhGUwOQwABRF5FkqGCoj7uAfUs4epuxeGk",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfNtM-Egeo8d1_JHGQo2C5VDMWJAlcbOzchRFeUNLi7spqCo4qFgO7Sah8E9rWehqnYrBqI5r7V70WQBXlsBepf8BHmIKYRC8-YdkidvK-GoOqvZHaL0j8pg",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQb9O4L0tsV1UZJca85LIeRNNmHqQWvM5a-R6u8WfBtFQGqLK0jfXdi-frIEj3aP_ugocapJTDqeRdZKV0RcyprntOSpvUfzNqAaQTkaJuZT7rq_MK4WWACmQ"
    ],
    "category": ["Casual Trousers", "Formal Trousers", "Office Wear"],
    "gender": "men",
    "ratings": 4.5,
    "description": "Classic slim-fit chino trousers with flat front. Made from premium cotton with slight stretch for all-day comfort.",
    "sizes": ["30", "32", "34", "36", "38"]
  },
  {
    "id": "46",
    "title": "Men's Bomber Jacket",
    "brand": "Jack & Jones",
    "price": 2999,
    "discountPercentage": 40,
    "discountedPrice": 1799,
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPE41X4t8qTtt5kLhQlQhESW9QphNcLwEzqKaSt_tmVnM_1LLkJ30kFNAv53Es1GRTBYKLWvwI0w_IEGYh1EFaGthFyYjI2Q",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzdUrwxI8Fufb2DDBaTWAMxXjkAmal5GcYMvjDNiiHjjPTTcACOEDgkNCFi2xaWEmGchomTacv4LpdziQWcmrf0GGucHw-w25fDvR8y1I",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMBnqzUnC4GVHYwUzz3d_ZhATByWp2o7NXSPTXQqFrGE157Ffw_4S_QobEKA1nAPb68_E1h1Np4Xy-QLUbEwesnQAK6LzLpejEtfIsx5Kz7wTPEaTvAyqeIg"
    ],
    "category": ["Jackets", "Western Wear", "Casual Wear"],
    "gender": "men",
    "ratings": 4.3,
    "description": "Stylish bomber jacket with ribbed collar, cuffs, and hem. Features multiple pockets and a full-zip front closure.",
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": "47",
    "title": "Women's Crop Top",
    "brand": "Forever 21",
    "price": 999,
    "discountPercentage": 40,
    "discountedPrice": 599,
    "images": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSXTc1Fy9kBmjIiPjxOAFh3cv4w4qebHx4EwO8dKpBSc8u4VP0rkHD-i8Dy8OEYMnYyWGgq7yBby6YVteoEy7tq6gsur00xRp34QLDieU",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxl6mT_XtWWzL_7Jq9zQKQV2GQUYT2uMzUadGRaYBQoMgATFcvgxYcra32127cqR2wwX5zk1QaJEiUxWl7Q0Lad9OvqhfL5GTwy5NshTUQVccsSwtyr1S9",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8-JovI2HGg_D8JoLcvwsMSa71lc_aak_O1LlTw8gHoAfV_OkyzD4DPFzc2hQgurZaf61_qC7_bXusYxqhNDThi0eSbrjKYdvw1IC3T_Z6"
    ],
    "category": ["Tops", "Western Wear", "Casual Wear"],
    "gender": "women",
    "ratings": 4.1,
    "description": "Trendy crop top with short sleeves and round neck. Made from soft cotton blend fabric for comfort and style.",
    "sizes": ["XS", "S", "M", "L"]
  },
];


const mockUsers = [
  {
    id: "user-0",
    name: "Arjun Sharma",
    email: "arjunsharma@example.com",
    username: "arjunsharma",
    avatar: "https://i.pravatar.cc/150?img=10",
    bio: "Obsessed with sustainable fashion and ethical clothing brands!",
    followers: ["user-1", "user-2"],
    following: [],
  },
  {
    id: "user-1",
    name: "Priya Patel",
    email: "priyapatel@example.com",
    username: "priyapatel",
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "Saree enthusiast and traditional wear collector since 2015.",
    followers: [],
    following: [],
  },
  {
    id: "user-2",
    name: "Emma Watson",
    email: "emmawatson@example.com",
    username: "emmawatson",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Minimalist fashion advocate. Less is more!",
    followers: [],
    following: [],
  },
  {
    id: "user-3",
    name: "Rajesh Kumar",
    email: "rajeshkumar@example.com",
    username: "rajeshkumar",
    avatar: "https://i.pravatar.cc/150?img=13",
    bio: "Street style aficionado with a passion for sneakers.",
    followers: [],
    following: [],
  },
  {
    id: "user-4",
    name: "Ananya Desai",
    email: "ananyad@example.com",
    username: "ananyad",
    avatar: "https://i.pravatar.cc/150?img=14",
    bio: "Fusion wear is my signature style. East meets West!",
    followers: [],
    following: [],
  },
  {
    id: "user-5",
    name: "Vikram Singh",
    email: "vikramsingh@example.com",
    username: "vikramsingh",
    avatar: "https://i.pravatar.cc/150?img=15",
    bio: "Classic menswear enthusiast. Suits are my second skin.",
    followers: [],
    following: [],
  },
  {
    id: "user-6",
    name: "Neha Gupta",
    email: "nehagupta@example.com",
    username: "nehagupta",
    avatar: "https://i.pravatar.cc/150?img=16",
    bio: "Accessory queen! A statement necklace can transform any outfit.",
    followers: [],
    following: [],
  },
  {
    id: "user-7",
    name: "David Chen",
    email: "davidchen@example.com",
    username: "davidchen",
    avatar: "https://i.pravatar.cc/150?img=17",
    bio: "Fashion photographer with an eye for avant-garde designs.",
    followers: [],
    following: [],
  },
  {
    id: "user-8",
    name: "Meera Kapoor",
    email: "meerakapoor@example.com",
    username: "meerakapoor",
    avatar: "https://i.pravatar.cc/150?img=18",
    bio: "Bollywood-inspired looks are my specialty! Glam is life.",
    followers: [],
    following: [],
  },
  {
    id: "user-9",
    name: "Sanjay Verma",
    email: "sanjayverma@example.com",
    username: "sanjayverma",
    avatar: "https://i.pravatar.cc/150?img=19",
    bio: "Vintage clothing collector and history buff.",
    followers: [],
    following: [],
  },
  {
    id: "user-10",
    name: "Aditi Joshi",
    email: "aditijoshi@example.com",
    username: "aditijoshi",
    avatar: "https://i.pravatar.cc/150?img=20",
    bio: "Plus-size fashion blogger championing body positivity.",
    followers: [],
    following: [],
  },
  {
    id: "user-11",
    name: "Maria Rodriguez",
    email: "mariarodriguez@example.com",
    username: "mariarodriguez",
    avatar: "https://i.pravatar.cc/150?img=21",
    bio: "Color blocking enthusiast! Life's too short for boring clothes.",
    followers: [],
    following: [],
  },
  {
    id: "user-12",
    name: "Karan Malhotra",
    email: "karanmalhotra@example.com",
    username: "karanmalhotra",
    avatar: "https://i.pravatar.cc/150?img=22",
    bio: "Streetwear collector and sneakerhead since 2010.",
    followers: [],
    following: [],
  },
  {
    id: "user-13",
    name: "Divya Krishnan",
    email: "divyakrishnan@example.com",
    username: "divyakrishnan",
    avatar: "https://i.pravatar.cc/150?img=23",
    bio: "Handloom saree lover. Supporting Indian artisans one drape at a time.",
    followers: [],
    following: [],
  },
  {
    id: "user-14",
    name: "Ravi Teja",
    email: "raviteja@example.com",
    username: "raviteja",
    avatar: "https://i.pravatar.cc/150?img=24",
    bio: "Men's grooming expert with a flair for casual chic.",
    followers: [],
    following: [],
  },
  {
    id: "user-15",
    name: "Sophie Martin",
    email: "sophiemartin@example.com",
    username: "sophiemartin",
    avatar: "https://i.pravatar.cc/150?img=25",
    bio: "Parisian style meets Indian sensibilities. Elegance is attitude!",
    followers: [],
    following: [],
  },
  {
    id: "user-16",
    name: "Aisha Khan",
    email: "aishakhan@example.com",
    username: "aishakhan",
    avatar: "https://i.pravatar.cc/150?img=26",
    bio: "Modest fashion blogger exploring contemporary designs.",
    followers: [],
    following: [],
  },
  {
    id: "user-17",
    name: "Vivek Mishra",
    email: "vivekmishra@example.com",
    username: "vivekmishra",
    avatar: "https://i.pravatar.cc/150?img=27",
    bio: "Tech professional by day, fashion experimenter by night.",
    followers: [],
    following: [],
  },
  {
    id: "user-18",
    name: "Tanvi Mehta",
    email: "tanvimehta@example.com",
    username: "tanvimehta",
    avatar: "https://i.pravatar.cc/150?img=28",
    bio: "Jewelry designer obsessed with statement earrings and heritage pieces.",
    followers: [],
    following: [],
  },
  {
    id: "user-19",
    name: "Rahul Bose",
    email: "rahulbose@example.com",
    username: "rahulbose",
    avatar: "https://i.pravatar.cc/150?img=29",
    bio: "Corporate fashion simplified. Business casual is my expertise.",
    followers: [],
    following: [],
  },
  {
    id: "user-20",
    name: "Lakshmi Raman",
    email: "lakshmiraman@example.com",
    username: "lakshmiraman",
    avatar: "https://i.pravatar.cc/150?img=30",
    bio: "Temple jewelry collector and Kanjeevaram saree enthusiast.",
    followers: [],
    following: [],
  },
  {
    id: "user-21",
    name: "Akash Prajapati",
    email: "akashprajapati@example.com",
    username: "akashprajapati",
    avatar: "https://i.pravatar.cc/150?img=31",
    bio: "Experimenting with Indo-western fusion for men since 2018.",
    followers: [],
    following: [],
  },
  {
    id: "user-22",
    name: "Zara Ahmed",
    email: "zaraahmed@example.com",
    username: "zaraahmed",
    avatar: "https://i.pravatar.cc/150?img=32",
    bio: "Budget fashion guru! Looking expensive doesn't have to be expensive.",
    followers: [],
    following: [],
  },
  {
    id: "user-23",
    name: "Sunil Choudhary",
    email: "sunilchoudhary@example.com",
    username: "sunilchoudhary",
    avatar: "https://i.pravatar.cc/150?img=33",
    bio: "Fitness apparel reviewer and athleisure fan.",
    followers: [],
    following: [],
  },
  {
    id: "user-24",
    name: "Kavita Sharma",
    email: "kavitasharma@example.com",
    username: "kavitasharma",
    avatar: "https://i.pravatar.cc/150?img=34",
    bio: "Textile artist exploring sustainable dyeing techniques for fashion.",
    followers: [],
    following: [],
  },
  {
    id: "user-25",
    name: "Thomas Wilson",
    email: "thomaswilson@example.com",
    username: "thomaswilson",
    avatar: "https://i.pravatar.cc/150?img=35",
    bio: "Bringing European street style to Indian wardrobes.",
    followers: [],
    following: [],
  },
  {
    id: "user-26",
    name: "Nandini Reddy",
    email: "nandinireddy@example.com",
    username: "nandinireddy",
    avatar: "https://i.pravatar.cc/150?img=36",
    bio: "South Indian fashion with a contemporary twist.",
    followers: [],
    following: [],
  },
  {
    id: "user-27",
    name: "Samir Puri",
    email: "samirpuri@example.com",
    username: "samirpuri",
    avatar: "https://i.pravatar.cc/150?img=37",
    bio: "Traditional menswear enthusiast. Bandhgalas and sherwanis are my passion.",
    followers: [],
    following: [],
  },
  {
    id: "user-28",
    name: "Pooja Hegde",
    email: "poojahegde@example.com",
    username: "poojahegde",
    avatar: "https://i.pravatar.cc/150?img=38",
    bio: "Resort wear specialist. Summer fashion is my jam!",
    followers: [],
    following: [],
  },
  {
    id: "user-29",
    name: "Anand Vora",
    email: "anandvora@example.com",
    username: "anandvora",
    avatar: "https://i.pravatar.cc/150?img=39",
    bio: "Exploring gender-neutral fashion in the Indian context.",
    followers: [],
    following: [],
  },
  {
    id: "user-30",
    name: "Sneha Reddy",
    email: "snehareddy@example.com",
    username: "snehareddy",
    avatar: "https://i.pravatar.cc/150?img=40",
    bio: "Upcycled fashion advocate. Old clothes, new stories!",
    followers: [],
    following: [],
  },
  {
    id: "user-31",
    name: "Rohan Deshmukh",
    email: "rohandeshmukh@example.com",
    username: "rohandeshmukh",
    avatar: "https://i.pravatar.cc/150?img=41",
    bio: "Fashion student exploring the intersection of technology and clothing.",
    followers: [],
    following: [],
  },
  {
    id: "user-32",
    name: "Jasmine Lee",
    email: "jasminelee@example.com",
    username: "jasminelee",
    avatar: "https://i.pravatar.cc/150?img=42",
    bio: "K-fashion aficionado bringing Seoul street style to Mumbai.",
    followers: [],
    following: [],
  },
  {
    id: "user-33",
    name: "Karthik Iyer",
    email: "karthikiyer@example.com",
    username: "karthikiyer",
    avatar: "https://i.pravatar.cc/150?img=43",
    bio: "Simplicity is the ultimate sophistication. Minimalist fashion curator.",
    followers: [],
    following: [],
  },
  {
    id: "user-34",
    name: "Shreya Malik",
    email: "shreyamalik@example.com",
    username: "shreyamalik",
    avatar: "https://i.pravatar.cc/150?img=44",
    bio: "Vintage Bollywood fashion recreator and nostalgia enthusiast.",
    followers: [],
    following: [],
  },
  {
    id: "user-35",
    name: "Manish Dhawan",
    email: "manishdhawan@example.com",
    username: "manishdhawan",
    avatar: "https://i.pravatar.cc/150?img=45",
    bio: "Professional stylist specialized in wedding attire for men.",
    followers: [],
    following: [],
  },
  {
    id: "user-36",
    name: "Leela Nair",
    email: "leelanair@example.com",
    username: "leelanair",
    avatar: "https://i.pravatar.cc/150?img=46",
    bio: "Kerala style sarees and traditional jewelry collector.",
    followers: [],
    following: [],
  },
  {
    id: "user-37",
    name: "Kabir Menon",
    email: "kabirmenon@example.com",
    username: "kabirmenon",
    avatar: "https://i.pravatar.cc/150?img=47",
    bio: "Denim enthusiast exploring the history and culture of blue jeans.",
    followers: [],
    following: [],
  },
  {
    id: "user-38",
    name: "Riya Chakraborty",
    email: "riyachakraborty@example.com",
    username: "riyachakraborty",
    avatar: "https://i.pravatar.cc/150?img=48",
    bio: "Bengali fashion heritage meets contemporary design.",
    followers: [],
    following: [],
  },
  {
    id: "user-39",
    name: "Alex Johnson",
    email: "alexjohnson@example.com",
    username: "alexjohnson",
    avatar: "https://i.pravatar.cc/150?img=49",
    bio: "Bringing western cowboy aesthetics to Indian street style.",
    followers: [],
    following: [],
  },
  {
    id: "user-40",
    name: "Sushma Rao",
    email: "sushmarao@example.com",
    username: "sushmarao",
    avatar: "https://i.pravatar.cc/150?img=50",
    bio: "Handcrafted accessories designer focusing on zero-waste production.",
    followers: [],
    following: [],
  },
  {
    id: "user-41",
    name: "Vikas Agarwal",
    email: "vikasagarwal@example.com",
    username: "vikasagarwal",
    avatar: "https://i.pravatar.cc/150?img=51",
    bio: "Fashion entrepreneur blending traditional textiles with modern silhouettes.",
    followers: [],
    following: [],
  },
  {
    id: "user-42",
    name: "Anjali Thakur",
    email: "anjalithakur@example.com",
    username: "anjalithakur",
    avatar: "https://i.pravatar.cc/150?img=52",
    bio: "Monsoon fashion specialist. Stylish yet practical!",
    followers: [],
    following: [],
  },
  {
    id: "user-43",
    name: "Nikhil Srivastava",
    email: "nikhilsrivastava@example.com",
    username: "nikhilsrivastava",
    avatar: "https://i.pravatar.cc/150?img=53",
    bio: "Office wear reformist. Business doesn't have to be boring!",
    followers: [],
    following: [],
  },
  {
    id: "user-44",
    name: "Sonali Bendre",
    email: "sonalibendre@example.com",
    username: "sonalibendre",
    avatar: "https://i.pravatar.cc/150?img=54",
    bio: "Festive wear curator with a passion for embellishments and embroidery.",
    followers: [],
    following: [],
  },
  {
    id: "user-45",
    name: "Harsh Patel",
    email: "harshpatel@example.com",
    username: "harshpatel",
    avatar: "https://i.pravatar.cc/150?img=55",
    bio: "Exploring the evolution of Gujarati traditional wear in modern times.",
    followers: [],
    following: [],
  },
  {
    id: "user-46",
    name: "Deepika Padukone",
    email: "deepikapadukone@example.com",
    username: "deepikapadukone",
    avatar: "https://i.pravatar.cc/150?img=56",
    bio: "Wedding fashion consultant specializing in bridal trousseau.",
    followers: [],
    following: [],
  },
  {
    id: "user-47",
    name: "Omar Sheikh",
    email: "omarsheikh@example.com",
    username: "omarsheikh",
    avatar: "https://i.pravatar.cc/150?img=57",
    bio: "Exploring the rich textile heritage of Kashmir through modern designs.",
    followers: [],
    following: [],
  },
  {
    id: "user-48",
    name: "Lata Mangeshkar",
    email: "latamangeshkar@example.com",
    username: "latamangeshkar",
    avatar: "https://i.pravatar.cc/150?img=58",
    bio: "Vintage fashion archivist preserving the history of Indian clothing.",
    followers: [],
    following: [],
  },
  {
    id: "user-49",
    name: "Jay Mehta",
    email: "jaymehta@example.com",
    username: "jaymehta",
    avatar: "https://i.pravatar.cc/150?img=59",
    bio: "Fashion week photographer capturing runway-to-street transitions.",
    followers: [],
    following: [],
  },
];


export const addFollowers = (userId: string, followerId: string): void => {
  const user = mockUsers.find(user => user.id === userId);
  if(user.followers.includes(followerId)) {
    console.log("Already following");
    return;
  }
  mockUsers.find(user => user.id === userId).followers.push(followerId);
};

export const removeFollowers = (userId: string, followerId: string): void => {
  const user = mockUsers.find(user => user.id === userId);
  if(!user.followers.includes(followerId)) {
    console.log("Not following");
    return;
  }
  mockUsers.find(user => user.id === userId).followers = user.followers.filter(follower => follower !== followerId);
};

export const getMockUsers = () => {
  return mockUsers;
};

export const getUser = (usernameslug: string) => {
  return mockUsers.filter(user => user.id  === usernameslug)
};

// Filter functions for products
export const getProductsByCategory = (categorySlug: string) => {
  return products.filter(product => product.category.includes(categorySlug));
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
