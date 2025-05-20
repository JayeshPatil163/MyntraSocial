
export interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  images: string[];
  category: string[];
  gender: string;
  ratings: number;
  description: string;
  sizes: string[];
  likes?: string[]; // Added the likes array from your backend model
  colors?: Array<{ name: string; code: string }>;
  inStock?: boolean;
  numReviews?: number;
  subCategory?: string;
  comments?: Comment[];
  createdAt?: Date;
  
  tags?: string[];
}

export interface Like {
  userId: string;
  userName: string;
  userAvatar?: string;
  timestamp: Date;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  text: string;
  timestamp: Date;
}

export interface Purchase {
  userId: string;
  userName: string;
  userAvatar?: string;
  timestamp: Date;
  size: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface Banner {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  linkTo: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  username?: string;
  avatar?: string;
  bio?: string;
  followers?: string[];
  following?: string[];
  friends?: string[];
  pendingFriendRequests?: string[];
  sentFriendRequests?: string[];
  wishlistPrivacy?: 'public' | 'private' | 'friends-only';
  groups?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface WishlistItem {
  product: Product;
}

export interface Group {
  id: string;
  name: string;
  description?: string;
  creator: string;
  members: string[];
  invitations: string[];
  sharedWishlistItems: SharedWishlistItem[];
  createdAt: Date;
}

export interface SharedWishlistItem {
  id: string;
  product: Product;
  sharedBy: string;
  approvals: string[];
  createdAt: Date;
}

export interface FriendRequest {
  id: string;
  from: string;
  to: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'follow' | 'friend-request' | 'friend-accepted' | 'group-invitation' | 'shared-wishlist-item';
  fromUserId: string;
  groupId?: string;
  productId?: string;
  read: boolean;
  createdAt: Date;
}
