import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/lib/types';
import { Search, UserPlus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { getMockUsers } from '@/lib/data';
import { mock } from 'node:test';

const DiscoverPage = () => {
  const { user: currentUser } = useAuth();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    // Simulate fetching users
    setIsLoading(true);
    setTimeout(() => {
      const mockUsers = getMockUsers();
      // Mock user data for demo
      // const mockUsers = Array.from({ length: 20 }).map((_, idx) => ({
      //   id: `user-${idx}`,
      //   name: `User ${idx + 1}`,
      //   email: `user${idx + 1}@example.com`,
      //   username: `user${idx + 1}`,
      //   avatar: `https://i.pravatar.cc/150?img=${idx + 10}`,
      //   bio: idx % 3 === 0 ? 'Fashion enthusiast and shopaholic!' : 'Love shopping at Myntra!',
      //   followers: [],
      //   following: [],
      // }));
      
      setUsers(mockUsers);
      setFilteredUsers(mockUsers);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = users.filter(
        user => user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
               user.username?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [searchQuery, users]);

  const handleSendFriendRequest = (userId: string) => {
    // In a real app, we would send an API request to send a friend request
    toast({
      title: "Friend Request Sent",
      description: "Your friend request has been sent successfully",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Discover People</h1>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input
            type="search"
            placeholder="Search for people..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="popular" className="mb-6">
          <TabsList>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="suggested">Suggested</TabsTrigger>
            <TabsTrigger value="friends">Friends of Friends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredUsers.slice(0, 8).map((user) => (
                <UserCard 
                  key={user.id} 
                  user={user} 
                  onSendFriendRequest={handleSendFriendRequest}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="suggested" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredUsers.slice(8, 16).map((user) => (
                <UserCard 
                  key={user.id} 
                  user={user} 
                  onSendFriendRequest={handleSendFriendRequest}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="friends" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredUsers.slice(12, 20).map((user) => (
                <UserCard 
                  key={user.id} 
                  user={user} 
                  onSendFriendRequest={handleSendFriendRequest}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

// User card component
interface UserCardProps {
  user: User;
  onSendFriendRequest: (userId: string) => void;
}

const UserCard = ({ user, onSendFriendRequest }: UserCardProps) => {
  const [requestSent, setRequestSent] = useState(false);
  console.log(user.id);
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center h-full">
      <div className="flex flex-col items-center text-center flex-grow">
        <Link to={`/profile/${user.id}`}>
          <Avatar className="h-20 w-20 mb-3">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name?.[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
        </Link>
        <Link to={`/profile/${user.id}`} className="hover:underline">
          <h3 className="font-medium">{user.name}</h3>
        </Link>
        
        <p className="text-gray-500 mb-4 text-sm">@{user.username}</p>
        
        {/* {user.bio && (
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">{user.bio}</p>
        )} */}
      </div>
      
      <div className="mt-auto w-full">
        {requestSent ? (
          <Button
            variant="secondary"
            size="sm"
            className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300"
            onClick={() => setRequestSent(false)}
          >
            Request Sent
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-gradient-to-r from-pink-400 to-orange-400 text-white hover:opacity-90"
            onClick={() => {
              onSendFriendRequest(user.id);
              setRequestSent(true);
            }}
          >
            Follow
          </Button>
        )}
      </div>
    </div>
  );
};

export default DiscoverPage;
