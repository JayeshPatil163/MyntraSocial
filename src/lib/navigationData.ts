
// Navigation category and subcategory
export type SubCategory = {
  name: string;
  path: string;
};

export type Category = {
  name: string;
  path: string;
  subcategory: {
    title?: string;
    items: SubCategory[];
  }[];
};

export const navigationCategories: Category[] = [
  {
    name: "MEN",
    path: "/products/men",
    subcategory: [
      {
        title: "Topwear",
        items: [
          { name: "T-Shirts", path: "/products/t-shirts" },
          { name: "Casual Shirts", path: "/products/casual-shirts" },
          { name: "Formal Shirts", path: "/products/formal-shirts" },
          { name: "Sweatshirts", path: "/products/sweatshirts" },
          { name: "Sweaters", path: "/products/sweaters" },
          { name: "Jackets", path: "/products/jackets" },
          { name: "Blazers & Coats", path: "/products/blazers-coats" },
          { name: "Suits", path: "/products/suits" },
          { name: "Rain Jackets", path: "/products/rain-jackets" }
        ]
      },
      {
        title: "Bottomwear",
        items: [
          { name: "Jeans", path: "/products/jeans" },
          { name: "Casual Trousers", path: "/products/casual-trousers" },
          { name: "Formal Trousers", path: "/products/formal-trousers" },
          { name: "Shorts", path: "/products/shorts" },
          { name: "Track Pants & Joggers", path: "/products/track-pants-joggers" }
        ]
      },
      {
        title: "Innerwear & Sleepwear",
        items: [
          { name: "Briefs & Trunks", path: "/products/briefs-trunks" },
          { name: "Boxers", path: "/products/boxers" },
          { name: "Vests", path: "/products/vests" },
          { name: "Sleepwear & Loungewear", path: "/products/sleepwear-loungewear" },
          { name: "Thermals", path: "/products/thermals" }
        ]
      },
      {
        title: "Footwear",
        items: [
          { name: "Casual Shoes", path: "/products/casual-shoes" },
          { name: "Sports Shoes", path: "/products/sports-shoes" },
          { name: "Formal Shoes", path: "/products/formal-shoes" },
          { name: "Sneakers", path: "/products/sneakers" },
          { name: "Sandals & Floaters", path: "/products/sandals-floaters" },
          { name: "Flip Flops", path: "/products/flip-flops" },
          { name: "Socks", path: "/products/socks" }
        ]
      },
      {
        title: "Indian & Festive Wear",
        items: [
          { name: "Kurtas & Kurta Sets", path: "/products/kurtas-kurta-sets" },
          { name: "Sherwanis", path: "/products/sherwanis" },
          { name: "Nehru Jackets", path: "/products/nehru-jackets" },
          { name: "Dhotis", path: "/products/dhotis" }
        ]
      }
    ]
  },
  {
    name: "WOMEN",
    path: "/products/women",
    subcategory: [
      {
        title: "Indian & Fusion Wear",
        items: [
          { name: "Kurtas & Suits", path: "/products/kurtas-suits" },
          { name: "Sarees", path: "/products/sarees" },
          { name: "Ethnic Wear", path: "/products/ethnic-wear" },
          { name: "Leggings & Churidars", path: "/products/leggings-churidars" }
        ]
      },
      {
        title: "Western Wear",
        items: [
          { name: "Dresses", path: "/products/dresses" },
          { name: "Tops", path: "/products/tops" },
          { name: "T-shirts", path: "/products/t-shirts" },
          { name: "Jeans", path: "/products/jeans" },
          { name: "Trousers & Capris", path: "/products/trousers-capris" },
          { name: "Shorts & Skirts", path: "/products/shorts-skirts" }
        ]
      },
      {
        title: "Footwear",
        items: [
          { name: "Flats", path: "/products/flats" },
          { name: "Heels", path: "/products/heels" },
          { name: "Casual Shoes", path: "/products/casual-shoes" },
          { name: "Sports Shoes", path: "/products/sports-shoes" }
        ]
      }
    ]
  },
  {
    name: "KIDS",
    path: "/products/kids",
    subcategory: [
      {
        title: "Boys Clothing",
        items: [
          { name: "T-Shirts", path: "/products/boys-t-shirts" },
          { name: "Shirts", path: "/products/boys-shirts" },
          { name: "Jeans", path: "/products/boys-jeans" },
          { name: "Trousers", path: "/products/boys-trousers" }
        ]
      },
      {
        title: "Girls Clothing",
        items: [
          { name: "Dresses", path: "/products/girls-dresses" },
          { name: "Tops", path: "/products/girls-tops" },
          { name: "T-shirts", path: "/products/girls-t-shirts" },
          { name: "Jeans", path: "/products/girls-jeans" }
        ]
      },
      {
        title: "Footwear",
        items: [
          { name: "Casual Shoes", path: "/products/casual-shoes" },
          { name: "Sports Shoes", path: "/products/sports-shoes" },
          { name: "Flip Flops", path: "/products/flip-flops" }
        ]
      }
    ]
  },
  {
    name: "HOME",
    path: "/products/home",
    subcategory: [
      {
        title: "Bed Linen & Furnishing",
        items: [
          { name: "Bedsheets", path: "/products/bedsheets" },
          { name: "Blankets", path: "/products/blankets" },
          { name: "Pillows", path: "/products/pillows" },
          { name: "Cushions", path: "/products/cushions" }
        ]
      },
      {
        title: "Kitchen & Table",
        items: [
          { name: "Cookware", path: "/products/cookware" },
          { name: "Tableware", path: "/products/tableware" },
          { name: "Kitchen Storage", path: "/products/kitchen-storage" }
        ]
      },
      {
        title: "Decor",
        items: [
          { name: "Wall Art", path: "/products/wall-art" },
          { name: "Clocks", path: "/products/clocks" },
          { name: "Plants & Planters", path: "/products/plants-planters" }
        ]
      }
    ]
  },
  {
    name: "BEAUTY",
    path: "/products/beauty",
    subcategory: [
      {
        title: "Personal Care & Grooming",
        items: [
          { name: "Skincare", path: "/products/skincare" },
          { name: "Haircare", path: "/products/haircare" },
          { name: "Fragrances", path: "/products/fragrances" },
          { name: "Makeup", path: "/products/makeup" }
        ]
      },
      {
        title: "Appliances",
        items: [
          { name: "Hair Straightener", path: "/products/hair-straightener" },
          { name: "Hair Dryer", path: "/products/hair-dryer" },
          { name: "Epilator", path: "/products/epilator" }
        ]
      }
    ]
  },
  {
    name: "GENZ",
    path: "/products/genz",
    subcategory: [
      {
        title: "Streetwear",
        items: [
          { name: "Graphic Tees", path: "/products/graphic-tees" },
          { name: "Hoodies", path: "/products/hoodies" },
          { name: "Joggers", path: "/products/joggers" },
          { name: "Caps", path: "/products/caps" }
        ]
      },
      {
        title: "Accessories",
        items: [
          { name: "Bags", path: "/products/bags" },
          { name: "Watches", path: "/products/watches" },
          { name: "Sunglasses", path: "/products/sunglasses" },
          { name: "Jewelry", path: "/products/jewelry" },
          { name: "Scarves", path: "/products/scarves" },
          { name: "Belts", path: "/products/belts" },
          { name: "Hats", path: "/products/hats" },
          { name: "Gloves", path: "/products/gloves" },
          { name: "Shoes", path: "/products/shoes" },
          { name: "Socks", path: "/products/socks" },
          { name: "Ties", path: "/products/ties" },
          { name: "Accessories", path: "/products/accessories" }
        ]
      }
    ]
  },
  {
    name: "STUDIO",
    path: "/products/studio",
    subcategory: []
  }
];
