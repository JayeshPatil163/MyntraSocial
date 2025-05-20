
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, WishlistItem } from '@/lib/types';
import { useWishlist } from '@/contexts/WishlistContext';
import ProductGrid from '@/components/products/ProductGrid';
import { Loader2, UserPlus, UserX, UserCheck } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { getUser, addFollowers, removeFollowers } from '@/lib/data';
import { add } from 'date-fns';

const ProfilePage = () => {
  const { userid } = useParams<{ userid: string }>();
  const { user: currentUser } = useAuth();
  const { toast } = useToast();
  const { items: wishlistItems } = useWishlist();
  
  // In a real app, we would fetch this from an API
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [friendshipStatus, setFriendshipStatus] = useState<'none' | 'pending-sent' | 'pending-received' | 'friends'>('none');
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Simulate fetching user data
    setIsLoading(true);
    setTimeout(() => {
      console.log('userId: ', userid);
      // Mock user data for demo
      if(userid)
      {
          setUser(getUser(userid) [0]);
      }
      
      // Mock another user
      else{
      setUser({
        id: '12345',
        name: 'Demo User',
        email: 'demo@example.com',
        username: 'demouser',
        avatar: 'https://i.pravatar.cc/300',
        bio: 'Fashion enthusiast and shopaholic!',
        followers: ['1', '2', '3'],
        following: ['4', '5'],
        friends: [],
        pendingFriendRequests: [],
        sentFriendRequests: [],
      });
    }
      
      setIsLoading(false);
    }, 1000);
  }, [userid, currentUser]);

  useEffect(() => {
    // Check if current user is following this profile
    if (user && currentUser) {
      // In a real app, we would check against the database
      setIsFollowing(false); // For demo purposes
      
      // Mock friendship status
      if (user.id === currentUser.id) {
        setFriendshipStatus('none'); // Self profile
      } else {
        setFriendshipStatus('none'); // Default status
        
        // Check if there's a pending friend request from current user
        if (user.pendingFriendRequests?.includes(currentUser.id)) {
          setFriendshipStatus('pending-received');
        }
        
        // Check if current user sent a friend request
        if (currentUser.sentFriendRequests?.includes(user.id)) {
          setFriendshipStatus('pending-sent');
        }
        
        // Check if they are already friends
        if (user.friends?.includes(currentUser.id)) {
          setFriendshipStatus('friends');
        }
      }
    }
  }, [user, currentUser]);

  const handleFollow = () => {
    // In a real app, we would send an API request to follow/unfollow
    setIsFollowing(!isFollowing);
    isFollowing ? addFollowers(user.id, currentUser.id) : removeFollowers(user.id, currentUser.id);
    toast({
      title: isFollowing ? "Unfollowed" : "Followed",
      description: isFollowing 
        ? `You have unfollowed ${user?.name}` 
        : `You are now following ${user?.name}`,
    });
  };

  const handleFriendRequest = () => {
    // In a real app, we would send an API request to handle friend requests
    if (friendshipStatus === 'none') {
      setFriendshipStatus('pending-sent');
      toast({
        title: "Friend Request Sent",
        description: `You sent a friend request to ${user?.name}`,
      });
    } else if (friendshipStatus === 'pending-received') {
      setFriendshipStatus('friends');
      toast({
        title: "Friend Request Accepted",
        description: `You are now friends with ${user?.name}`,
      });
    } else if (friendshipStatus === 'friends') {
      setFriendshipStatus('none');
      toast({
        title: "Friendship Ended",
        description: `You are no longer friends with ${user?.name}`,
      });
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto py-8 flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold">User not found</h1>
            <p className="mt-2 text-gray-500">The user you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </Layout>
    );
  }

  const isOwnProfile = currentUser?.id === user.id;

  return (
    <Layout>
      <div className="container mx-auto py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-gray-200">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name?.[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-500">@{user.username}</p>
              
              {user.bio && (
                <p className="mt-2 text-gray-700">{user.bio}</p>
              )}
              
              <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <div className="font-semibold">{user.followers?.length || 0}</div>
                  <div className="text-gray-500 text-sm">Followers</div>
                </div>
                
                <div className="text-center">
                  <div className="font-semibold">{user.following?.length || 0}</div>
                  <div className="text-gray-500 text-sm">Following</div>
                </div>
                
                <div className="text-center">
                  <div className="font-semibold">{user.friends?.length || 0}</div>
                  <div className="text-gray-500 text-sm">Friends</div>
                </div>
              </div>
              
              {!isOwnProfile && (
                <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                  <Button 
                    variant={isFollowing ? "outline" : "default"} 
                    onClick={handleFollow}
                  >
                    {isFollowing ? "Unfollow" : "Follow"}
                  </Button>
                  
                  <Button 
                    variant={friendshipStatus === 'friends' ? "outline" : "secondary"}
                    onClick={handleFriendRequest}
                  >
                    {friendshipStatus === 'none' && (
                      <>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add Friend
                      </>
                    )}
                    {friendshipStatus === 'pending-sent' && (
                      <>
                        <UserX className="mr-2 h-4 w-4" />
                        Cancel Request
                      </>
                    )}
                    {friendshipStatus === 'pending-received' && (
                      <>
                        <UserCheck className="mr-2 h-4 w-4" />
                        Accept Request
                      </>
                    )}
                    {friendshipStatus === 'friends' && (
                      <>
                        <UserCheck className="mr-2 h-4 w-4" />
                        Friends
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Profile Content */}
        <Tabs defaultValue="wishlist" className="mt-6">
          <TabsList className="grid w-full max-w-md mx-auto md:max-w-none grid-cols-3">
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="wishlist" className="mt-6">
            {/* Show wishlist if it's the user's own profile or if the wishlist is public */}
            {(isOwnProfile || user.wishlistPrivacy === 'public' || 
              (user.wishlistPrivacy === 'friends-only' && friendshipStatus === 'friends')) ? (
              <>
                {isOwnProfile && (
                  <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-medium mb-2">Wishlist Privacy</h3>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant={user.wishlistPrivacy === 'public' ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                          // In a real app, we would update this via API
                          setUser({...user, wishlistPrivacy: 'public'});
                        }}
                      >
                        Public
                      </Button>
                      <Button 
                        variant={user.wishlistPrivacy === 'friends-only' ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                          setUser({...user, wishlistPrivacy: 'friends-only'});
                        }}
                      >
                        Friends Only
                      </Button>
                      <Button 
                        variant={user.wishlistPrivacy === 'private' ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                          setUser({...user, wishlistPrivacy: 'private'});
                        }}
                      >
                        Private
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* For demo purposes, we'll show the current user's wishlist items */}
                <ProductGrid products={wishlistItems.map((item: WishlistItem) => item.product)} />
                
                {wishlistItems.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No items in the wishlist yet.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">This wishlist is private.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="groups" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Mock groups for demo */}
              {isOwnProfile ? (
                <>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-medium">Fashion Friends</h3>
                    <p className="text-gray-500 text-sm mt-1">5 members</p>
                    <Button className="w-full mt-4" size="sm">View Group</Button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-medium">Summer Shopping Squad</h3>
                    <p className="text-gray-500 text-sm mt-1">3 members</p>
                    <Button className="w-full mt-4" size="sm">View Group</Button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
                    <p className="text-gray-500 mb-2">Create a new group</p>
                    <Button variant="outline">Create Group</Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 col-span-full">
                  <p className="text-gray-500">No public groups available.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="friends" className="mt-6">
            {/* Mock friends list for demo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: isOwnProfile ? 8 : 4 }).map((_, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${idx + 10}`} />
                    <AvatarFallback>U{idx}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">User {idx + 1}</h3>
                    <p className="text-gray-500 text-sm">@user{idx + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProfilePage;
