
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, ThumbsUp, Share, Heart, User, Users, UserPlus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const CommunityPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('feed');
  
  // Mock data
  const posts = [
    {
      id: 1,
      user: {
        id: 'user-2',
        name: 'Alex Johnson',
        username: 'alexj',
        avatar: 'https://i.pravatar.cc/150?img=2',
      },
      content: "Just got this amazing jacket from the summer collection! What do you think?",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 24,
      comments: 8,
      timestamp: "2h ago"
    },
    {
      id: 2,
      user: {
        id: 'user-3',
        name: 'Samantha Liu',
        username: 'samliu',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      content: "My new Nike shoes just arrived! Perfect for my morning runs.",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 42,
      comments: 12,
      timestamp: "5h ago"
    }
  ];
  
  const groups = [
    {
      id: 'group-1',
      name: 'Summer Fashion Trends',
      members: 78,
      image: 'https://images.pexels.com/photos/1153838/pexels-photo-1153838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'group-2',
      name: 'Shoe Enthusiasts',
      members: 145,
      image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'group-3',
      name: 'Accessory Lovers',
      members: 53,
      image: 'https://images.pexels.com/photos/1078973/pexels-photo-1078973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  
  const friends = [
    {
      id: 'user-2',
      name: 'Alex Johnson',
      username: 'alexj',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 'user-3',
      name: 'Samantha Liu',
      username: 'samliu',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 'user-4',
      name: 'Michael Wilson',
      username: 'mikew',
      avatar: 'https://i.pravatar.cc/150?img=4',
    }
  ];
  
  const following = [
    {
      id: 'user-5',
      name: 'Emma Davis',
      username: 'emmad',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 'user-6',
      name: 'Daniel Brown',
      username: 'danb',
      avatar: 'https://i.pravatar.cc/150?img=6',
    }
  ];
  
  return (
    <Layout>
      <div className="container mx-auto py-6 px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Myntra Community</h1>
          <p className="text-gray-500">Connect with friends and discover new fashion trends</p>
        </div>
        
        <Tabs defaultValue="feed" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>
          
          {/* Feed Section */}
          <TabsContent value="feed" className="space-y-6">
            {posts.map(post => (
              <Card key={post.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.user.avatar} />
                      <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <Link to={`/profile/${post.user.username}`} className="font-medium hover:underline">
                        {post.user.name}
                      </Link>
                      <p className="text-xs text-gray-500">{post.timestamp}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="mb-4">{post.content}</p>
                  {post.image && (
                    <div className="rounded-md overflow-hidden">
                      <img src={post.image} alt="Post image" className="w-full object-cover max-h-96" />
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2 border-t">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          {/* Groups Section */}
          <TabsContent value="groups">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groups.map(group => (
                <Link to={`/groups/${group.id}`} key={group.id}>
                  <Card className="hover:shadow-md transition-shadow overflow-hidden h-full">
                    <div className="h-32 overflow-hidden">
                      <img src={group.image} alt={group.name} className="w-full object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle>{group.name}</CardTitle>
                      <CardDescription>{group.members} members</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button size="sm">View Group</Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
              <Card className="hover:shadow-md transition-shadow overflow-hidden h-full border-dashed">
                <CardHeader className="h-full flex flex-col items-center justify-center text-center">
                  <Users className="h-12 w-12 text-gray-400 mb-2" />
                  <CardTitle>Create New Group</CardTitle>
                  <CardDescription>Start a new shopping group with friends</CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Button variant="outline">Create Group</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Friends Section */}
          <TabsContent value="friends">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {friends.map(friend => (
                <Card key={friend.id} className="overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={friend.avatar} />
                      <AvatarFallback>{friend.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{friend.name}</CardTitle>
                      <CardDescription>@{friend.username}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex space-x-2 w-full">
                      <Link to={`/profile/${friend.username}`} className="flex-1">
                        <Button variant="outline" className="w-full">View Profile</Button>
                      </Link>
                      <Button variant="outline" className="w-10 p-0">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
              <Card className="border-dashed overflow-hidden">
                <CardHeader className="flex flex-col items-center justify-center text-center py-8">
                  <UserPlus className="h-12 w-12 text-gray-400 mb-2" />
                  <CardTitle>Find Friends</CardTitle>
                  <CardDescription>Discover people you may know</CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Button variant="outline">Explore</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Following Section */}
          <TabsContent value="following">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {following.map(person => (
                <Card key={person.id} className="overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={person.avatar} />
                      <AvatarFallback>{person.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{person.name}</CardTitle>
                      <CardDescription>@{person.username}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex space-x-2 w-full">
                      <Link to={`/profile/${person.username}`} className="flex-1">
                        <Button variant="outline" className="w-full">View Profile</Button>
                      </Link>
                      <Button variant="outline" size="icon" className="w-10 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CommunityPage;
