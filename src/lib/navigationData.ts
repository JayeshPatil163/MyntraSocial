
// Navigation categories and subcategories
export type SubCategory = {
  name: string;
  path: string;
};

export type Category = {
  name: string;
  path: string;
  subcategories: {
    title?: string;
    items: SubCategory[];
  }[];
};

export const navigationCategories: Category[] = [
  {
    name: "MEN",
    path: "/products/men",
    subcategories: [
      {
        title: "Topwear",
        items: [
          { name: "T-Shirts", path: "/products/men/t-shirts" },
          { name: "Casual Shirts", path: "/products/men/casual-shirts" },
          { name: "Formal Shirts", path: "/products/men/formal-shirts" },
          { name: "Sweatshirts", path: "/products/men/sweatshirts" },
          { name: "Sweaters", path: "/products/men/sweaters" },
          { name: "Jackets", path: "/products/men/jackets" },
          { name: "Blazers & Coats", path: "/products/men/blazers-coats" },
          { name: "Suits", path: "/products/men/suits" },
          { name: "Rain Jackets", path: "/products/men/rain-jackets" }
        ]
      },
      {
        title: "Bottomwear",
        items: [
          { name: "Jeans", path: "/products/men/jeans" },
          { name: "Casual Trousers", path: "/products/men/casual-trousers" },
          { name: "Formal Trousers", path: "/products/men/formal-trousers" },
          { name: "Shorts", path: "/products/men/shorts" },
          { name: "Track Pants & Joggers", path: "/products/men/track-pants-joggers" }
        ]
      },
      {
        title: "Innerwear & Sleepwear",
        items: [
          { name: "Briefs & Trunks", path: "/products/men/briefs-trunks" },
          { name: "Boxers", path: "/products/men/boxers" },
          { name: "Vests", path: "/products/men/vests" },
          { name: "Sleepwear & Loungewear", path: "/products/men/sleepwear-loungewear" },
          { name: "Thermals", path: "/products/men/thermals" }
        ]
      },
      {
        title: "Footwear",
        items: [
          { name: "Casual Shoes", path: "/products/men/casual-shoes" },
          { name: "Sports Shoes", path: "/products/men/sports-shoes" },
          { name: "Formal Shoes", path: "/products/men/formal-shoes" },
          { name: "Sneakers", path: "/products/men/sneakers" },
          { name: "Sandals & Floaters", path: "/products/men/sandals-floaters" },
          { name: "Flip Flops", path: "/products/men/flip-flops" },
          { name: "Socks", path: "/products/men/socks" }
        ]
      },
      {
        title: "Indian & Festive Wear",
        items: [
          { name: "Kurtas & Kurta Sets", path: "/products/men/kurtas-kurta-sets" },
          { name: "Sherwanis", path: "/products/men/sherwanis" },
          { name: "Nehru Jackets", path: "/products/men/nehru-jackets" },
          { name: "Dhotis", path: "/products/men/dhotis" }
        ]
      }
    ]
  },
  {
    name: "WOMEN",
    path: "/products/women",
    subcategories: [
      {
        title: "Indian & Fusion Wear",
        items: [
          { name: "Kurtas & Suits", path: "/products/women/kurtas-suits" },
          { name: "Sarees", path: "/products/women/sarees" },
          { name: "Ethnic Wear", path: "/products/women/ethnic-wear" },
          { name: "Leggings & Churidars", path: "/products/women/leggings-churidars" }
        ]
      },
      {
        title: "Western Wear",
        items: [
          { name: "Dresses", path: "/products/women/dresses" },
          { name: "Tops", path: "/products/women/tops" },
          { name: "T-shirts", path: "/products/women/t-shirts" },
          { name: "Jeans", path: "/products/women/jeans" },
          { name: "Trousers & Capris", path: "/products/women/trousers-capris" },
          { name: "Shorts & Skirts", path: "/products/women/shorts-skirts" }
        ]
      },
      {
        title: "Footwear",
        items: [
          { name: "Flats", path: "/products/women/flats" },
          { name: "Heels", path: "/products/women/heels" },
          { name: "Casual Shoes", path: "/products/women/casual-shoes" },
          { name: "Sports Shoes", path: "/products/women/sports-shoes" }
        ]
      }
    ]
  },
  {
    name: "KIDS",
    path: "/products/kids",
    subcategories: [
      {
        title: "Boys Clothing",
        items: [
          { name: "T-Shirts", path: "/products/kids/boys-t-shirts" },
          { name: "Shirts", path: "/products/kids/boys-shirts" },
          { name: "Jeans", path: "/products/kids/boys-jeans" },
          { name: "Trousers", path: "/products/kids/boys-trousers" }
        ]
      },
      {
        title: "Girls Clothing",
        items: [
          { name: "Dresses", path: "/products/kids/girls-dresses" },
          { name: "Tops", path: "/products/kids/girls-tops" },
          { name: "T-shirts", path: "/products/kids/girls-t-shirts" },
          { name: "Jeans", path: "/products/kids/girls-jeans" }
        ]
      },
      {
        title: "Footwear",
        items: [
          { name: "Casual Shoes", path: "/products/kids/casual-shoes" },
          { name: "Sports Shoes", path: "/products/kids/sports-shoes" },
          { name: "Flip Flops", path: "/products/kids/flip-flops" }
        ]
      }
    ]
  },
  {
    name: "HOME & LIVING",
    path: "/products/home",
    subcategories: [
      {
        title: "Bed Linen & Furnishing",
        items: [
          { name: "Bedsheets", path: "/products/home/bedsheets" },
          { name: "Blankets", path: "/products/home/blankets" },
          { name: "Pillows", path: "/products/home/pillows" },
          { name: "Cushions", path: "/products/home/cushions" }
        ]
      },
      {
        title: "Kitchen & Table",
        items: [
          { name: "Cookware", path: "/products/home/cookware" },
          { name: "Tableware", path: "/products/home/tableware" },
          { name: "Kitchen Storage", path: "/products/home/kitchen-storage" }
        ]
      },
      {
        title: "Decor",
        items: [
          { name: "Wall Art", path: "/products/home/wall-art" },
          { name: "Clocks", path: "/products/home/clocks" },
          { name: "Plants & Planters", path: "/products/home/plants-planters" }
        ]
      }
    ]
  },
  {
    name: "BEAUTY",
    path: "/products/beauty",
    subcategories: [
      {
        title: "Personal Care & Grooming",
        items: [
          { name: "Skincare", path: "/products/beauty/skincare" },
          { name: "Haircare", path: "/products/beauty/haircare" },
          { name: "Fragrances", path: "/products/beauty/fragrances" },
          { name: "Makeup", path: "/products/beauty/makeup" }
        ]
      },
      {
        title: "Appliances",
        items: [
          { name: "Hair Straightener", path: "/products/beauty/hair-straightener" },
          { name: "Hair Dryer", path: "/products/beauty/hair-dryer" },
          { name: "Epilator", path: "/products/beauty/epilator" }
        ]
      }
    ]
  }
];
