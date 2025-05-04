
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Group, User, SharedWishlistItem } from '@/lib/types';
import { useToast } from '@/components/ui/use-toast';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Plus, Share, ThumbsUp, UserPlus } from 'lucide-react';
import ExtendedProductCard from '@/components/products/ExtendedProductCard';

const GroupsPage = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const { user: currentUser } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<Group[]>([]);
  const [currentGroup, setCurrentGroup] = useState<Group | null>(null);
  const [members, setMembers] = useState<User[]>([]);
  const [sharedItems, setSharedItems] = useState<SharedWishlistItem[]>([]);
  const [invitingUsers, setInvitingUsers] = useState<boolean>(false);
  
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  useEffect(() => {
    // Simulate fetching groups
    setIsLoading(true);
    setTimeout(() => {
      // Mock group data for demo
      const mockGroups = Array.from({ length: 3 }).map((_, idx) => ({
        id: `group-${idx}`,
        name: `Shopping Group ${idx + 1}`,
        description: idx === 0 ? 'A group for fashion enthusiasts' : `Group ${idx + 1} description`,
        creator: 'user-1',
        members: ['user-1', 'user-2', 'user-3'],
        invitations: [],
        sharedWishlistItems: [],
        createdAt: new Date(),
      }));
      
      setGroups(mockGroups);
      
      if (groupId) {
        const group = mockGroups.find(g => g.id === groupId);
        if (group) {
          setCurrentGroup(group);
          
          // Mock member data
          const mockMembers = group.members.map(memberId => ({
            id: memberId,
            name: `User ${memberId.split('-')[1]}`,
            email: `user${memberId.split('-')[1]}@example.com`,
            username: `user${memberId.split('-')[1]}`,
            avatar: `https://i.pravatar.cc/150?img=${parseInt(memberId.split('-')[1]) + 10}`,
          }));
          
          setMembers(mockMembers);
          
          // Mock shared items
          const mockSharedItems = Array.from({ length: 4 }).map((_, itemIdx) => ({
            id: `item-${itemIdx}`,
            product: {
              id: `product-${itemIdx}`,
              title: `Product ${itemIdx + 1}`,
              brand: `Brand ${itemIdx + 1}`,
              price: 1999 + (itemIdx * 500),
              discountedPrice: 1499 + (itemIdx * 500),
              discountPercentage: 25,
              images: [`https://picsum.photos/seed/${itemIdx + 1}/300/400`],
              category: 'Clothing',
              gender: 'Men',
              ratings: 4.5,
              description: 'A fantastic product',
              sizes: ['S', 'M', 'L'],
            },
            sharedBy: `user-${(itemIdx % 3) + 1}`,
            approvals: itemIdx % 2 === 0 ? ['user-1'] : [],
            createdAt: new Date(),
          }));
          
          setSharedItems(mockSharedItems);
        }
      }
      
      setIsLoading(false);
    }, 1000);
  }, [groupId]);

  const handleCreateGroup = () => {
    if (!newGroupName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a group name",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would send an API request to create a group
    const newGroup: Group = {
      id: `group-${groups.length + 1}`,
      name: newGroupName,
      description: newGroupDescription,
      creator: currentUser?.id || 'user-1',
      members: [currentUser?.id || 'user-1'],
      invitations: [],
      sharedWishlistItems: [],
      createdAt: new Date(),
    };
    
    setGroups([...groups, newGroup]);
    setNewGroupName('');
    setNewGroupDescription('');
    setShowCreateDialog(false);
    
    toast({
      title: "Group Created",
      description: "Your shopping group has been created successfully",
    });
    
    // Navigate to the new group
    navigate(`/groups/${newGroup.id}`);
  };

  const handleInviteUser = (userId: string) => {
    // In a real app, we would send an API request to invite the user
    setInvitingUsers(false);
    
    toast({
      title: "Invitation Sent",
      description: "Your invitation has been sent successfully",
    });
  };

  const handleApproveItem = (itemId: string) => {
    // In a real app, we would send an API request to approve the item
    setSharedItems(items => 
      items.map(item => 
        item.id === itemId 
          ? { ...item, approvals: [...item.approvals, currentUser?.id || 'user-1'] }
          : item
      )
    );
    
    toast({
      title: "Item Approved",
      description: "You have approved this item",
    });
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

  // Group list view
  if (!groupId || !currentGroup) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Shopping Groups</h1>
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Group
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Shopping Group</DialogTitle>
                  <DialogDescription>
                    Create a new shopping group and invite your friends to shop together.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Group Name</label>
                    <Input
                      id="name"
                      value={newGroupName}
                      onChange={(e) => setNewGroupName(e.target.value)}
                      placeholder="Enter group name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">Description (Optional)</label>
                    <Textarea
                      id="description"
                      value={newGroupDescription}
                      onChange={(e) => setNewGroupDescription(e.target.value)}
                      placeholder="Describe your group"
                      rows={3}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowCreateDialog(false)}>Cancel</Button>
                  <Button onClick={handleCreateGroup}>Create Group</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          {groups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groups.map((group) => (
                <Link 
                  key={group.id} 
                  to={`/groups/${group.id}`}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <h2 className="text-xl font-semibold mb-2">{group.name}</h2>
                  {group.description && (
                    <p className="text-gray-600 mb-4">{group.description}</p>
                  )}
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{group.members.length} members</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(group.createdAt).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">You don't have any shopping groups yet</h2>
              <p className="text-gray-600 mb-6">Create a group and invite your friends to shop together</p>
              <Button onClick={() => setShowCreateDialog(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Create Your First Group
              </Button>
            </div>
          )}
        </div>
      </Layout>
    );
  }

  // Group detail view
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{currentGroup.name}</h1>
              {currentGroup.description && (
                <p className="text-gray-600 mt-1">{currentGroup.description}</p>
              )}
            </div>
            <Button onClick={() => setInvitingUsers(true)}>
              <UserPlus className="mr-2 h-4 w-4" />
              Invite Friends
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="shared" className="mt-6">
          <TabsList>
            <TabsTrigger value="shared">Shared Items</TabsTrigger>
            <TabsTrigger value="members">Members ({members.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="shared" className="mt-6">
            {sharedItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sharedItems.map((item) => (
                  <div key={item.id} className="relative">
                    <ExtendedProductCard 
                      product={item.product}
                      actionButton={
                        item.approvals.includes(currentUser?.id || 'user-1') ? (
                          <Button variant="secondary" className="w-full" disabled>
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            Approved
                          </Button>
                        ) : (
                          <Button className="w-full" onClick={() => handleApproveItem(item.id)}>
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                        )
                      }
                    />
                    <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs flex items-center shadow-sm">
                      <Avatar className="h-4 w-4 mr-1">
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${parseInt(item.sharedBy.split('-')[1]) + 10}`} />
                        <AvatarFallback>{item.sharedBy[0]?.toUpperCase()}</AvatarFallback>
                      </Avatar>
                      Shared by User {item.sharedBy.split('-')[1]}
                    </div>
                    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs shadow-sm">
                      {item.approvals.length} {item.approvals.length === 1 ? 'approval' : 'approvals'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-2">No items shared yet</h2>
                <p className="text-gray-600 mb-6">Share items from your wishlist with the group</p>
                <Button asChild>
                  <Link to="/wishlist">
                    <Share className="mr-2 h-4 w-4" />
                    Go to My Wishlist
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="members" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name[0]?.toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-gray-500 text-sm">@{member.username}</p>
                  </div>
                  {currentGroup.creator === member.id && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      Creator
                    </span>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* User invitation dialog */}
        <Dialog open={invitingUsers} onOpenChange={setInvitingUsers}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite Friends to Group</DialogTitle>
              <DialogDescription>
                Select friends to invite to this shopping group.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 max-h-[60vh] overflow-auto">
              {Array.from({ length: 10 }).map((_, idx) => {
                const userId = `user-${idx + 10}`;
                return (
                  <div key={idx} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${idx + 20}`} />
                        <AvatarFallback>U{idx}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">User {idx + 10}</p>
                        <p className="text-gray-500 text-sm">@user{idx + 10}</p>
                      </div>
                    </div>
                    <Button size="sm" onClick={() => handleInviteUser(userId)}>
                      Invite
                    </Button>
                  </div>
                );
              })}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setInvitingUsers(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default GroupsPage;
