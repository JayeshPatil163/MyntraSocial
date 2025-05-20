import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Group, User, SharedWishlistItem } from '@/lib/types';

type ChatMessage = {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
  items: string[];
};
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle 
} from "@/components/ui/sheet";
import { Loader2, Plus, Send, Share, ThumbsUp, UserPlus, ChevronRight, ArrowLeft, MoreVertical, Image } from 'lucide-react';
import ExtendedProductCard from '@/components/products/ExtendedProductCard';

const GroupsPage = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const { user: currentUser } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<Group[]>([]);
  const [currentGroup, setCurrentGroup] = useState<Group | null>(null);
  const [members, setMembers] = useState<User[]>([]);
  const [sharedItems, setSharedItems] = useState<SharedWishlistItem[]>([]);
  const [invitingUsers, setInvitingUsers] = useState<boolean>(false);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isMembersPanelOpen, setIsMembersPanelOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

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
            isOnline: Math.random() > 0.5,
            lastSeen: new Date()
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
              category: ['Clothing'],
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
          
          // Mock chat messages
          const mockMessages = [
            {
              id: 'msg-1',
              sender: 'user-1',
              text: 'Hey everyone! Check out this cool jacket I found!',
              timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
              items: ['item-0'],
            },
            {
              id: 'msg-2',
              sender: 'user-2',
              text: 'That looks great! I like the color.',
              timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 5),
              items: [],
            },
            {
              id: 'msg-3',
              sender: 'user-3',
              text: 'I found these two shirts that would match nicely!',
              timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
              items: ['item-1', 'item-2'],
            },
            {
              id: 'msg-4',
              sender: 'user-1',
              text: 'What do you all think about this style?',
              timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
              items: ['item-3'],
            },
            {
              id: 'msg-5',
              sender: 'user-2',
              text: 'Love it! Let\'s all get matching outfits!',
              timestamp: new Date(Date.now() - 1000 * 60 * 30),
              items: [],
            },
          ];
          
          setMessages(mockMessages);
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
  
  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    const newMessage: ChatMessage = {
      id: `msg-${messages.length + 1}`,
      sender: currentUser?.id || 'user-1',
      text: messageText,
      timestamp: new Date(),
      items: [],
    };
    
    setMessages([...messages, newMessage]);
    setMessageText('');
  };
  
  const handleShareToGroup = (productId: string) => {
    // In a real app, this would find the product and add it to the group
    toast({
      title: "Item Shared",
      description: "Item has been shared with the group",
    });
  };
  
  const formatMessageTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const formatMessageDate = (timestamp: Date) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (timestamp.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (timestamp.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return timestamp.toLocaleDateString();
    }
  };
  
  const groupMessagesByDate = () => {
    const groupedMessages = [];
    let currentDate = null;
    
    for (const message of messages) {
      const messageDate = new Date(message.timestamp).toDateString();
      
      if (messageDate !== currentDate) {
        currentDate = messageDate;
        groupedMessages.push({
          type: 'date',
          date: message.timestamp,
          id: `date-${messageDate}`
        });
      }
      
      groupedMessages.push({
        type: 'message',
        message: message
      });
    }
    
    return groupedMessages;
  };
  
  const getMemberByUserId = (userId: string) => {
    return members.find(member => member.id === userId) || {
      name: `User ${userId.split('-')[1]}`,
      avatar: `https://i.pravatar.cc/150?img=${parseInt(userId.split('-')[1]) + 10}`,
    };
  };
  
  const getItemsByIds = (itemIds: string[]) => {
    return sharedItems.filter(item => itemIds.includes(item.id));
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

  // WhatsApp-like group detail view
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        {/* Group Header */}
        <div className="bg-primary text-white p-4 shadow-sm flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/groups" className="mr-3">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={`https://picsum.photos/seed/${currentGroup.id}/200/200`} />
              <AvatarFallback>{currentGroup.name[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold">{currentGroup.name}</h1>
              <p className="text-xs opacity-80">{members.length} members</p>
            </div>
          </div>
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-primary/90"
              onClick={() => setIsMembersPanelOpen(!isMembersPanelOpen)}
            >
              <UserPlus className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-primary/90">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Group Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setInvitingUsers(true)}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Invite Members
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share className="h-4 w-4 mr-2" />
                  Share Group
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Chat area with flex layout for main content and sidebar */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Messages Section */}
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
              <div className="max-w-3xl mx-auto">
                {groupMessagesByDate().map((item, idx) => {
                  if (item.type === 'date') {
                    return (
                      <div 
                        key={item.id} 
                        className="flex justify-center my-4"
                      >
                        <span className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-xs">
                          {formatMessageDate(item.date)}
                        </span>
                      </div>
                    );
                  }
                  
                  const message = item.message;
                  const member = getMemberByUserId(message.sender);
                  const isCurrentUser = message.sender === (currentUser?.id || 'user-1');
                  const messageItems = getItemsByIds(message.items);
                  
                  return (
                    <div 
                      key={message.id} 
                      className={`flex mb-4 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${isCurrentUser ? 'order-2' : 'order-1'}`}>
                        {!isCurrentUser && (
                          <div className="flex items-center mb-1 ml-1">
                            <Avatar className="h-5 w-5 mr-1">
                              <AvatarImage src={member.avatar} />
                              <AvatarFallback>{member.name[0]?.toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-gray-600">{member.name}</span>
                          </div>
                        )}
                        
                        {message.text && (
                          <div 
                            className={`rounded-lg p-3 mb-1 ${
                              isCurrentUser 
                                ? 'bg-primary text-white rounded-tr-none' 
                                : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                            }`}
                          >
                            <p className="whitespace-pre-wrap">{message.text}</p>
                            <div className={`text-xs mt-1 text-right ${isCurrentUser ? 'text-primary-50' : 'text-gray-500'}`}>
                              {formatMessageTime(new Date(message.timestamp))}
                            </div>
                          </div>
                        )}
                        
                        {messageItems.length > 0 && (
                          <div className={`mt-1 ${message.text ? 'ml-auto' : ''} ${isCurrentUser ? 'ml-auto' : ''}`}>
                            {messageItems.length === 1 ? (
                              // Single product display
                              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <div 
                                  className="relative cursor-pointer"
                                  onClick={() => setExpandedItem(messageItems[0].id)}
                                >
                                  <img 
                                    src={messageItems[0].product.images[0]} 
                                    alt={messageItems[0].product.title} 
                                    className="w-full h-48 object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                    <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                                      View Product
                                    </div>
                                  </div>
                                </div>
                                <div className="p-3">
                                  <h3 className="font-medium text-sm">{messageItems[0].product.title}</h3>
                                  <div className="flex items-center mt-1 justify-between">
                                    <div className="text-primary font-medium">
                                      ${(messageItems[0].product.discountedPrice / 100).toFixed(2)}
                                    </div>
                                    <div>
                                      {messageItems[0].approvals.includes(currentUser?.id || 'user-1') ? (
                                        <span className="flex items-center text-xs text-primary">
                                          <ThumbsUp className="h-3 w-3 mr-1" />
                                          Approved
                                        </span>
                                      ) : (
                                        <Button 
                                          size="sm" 
                                          variant="outline" 
                                          className="h-7 text-xs"
                                          onClick={() => handleApproveItem(messageItems[0].id)}
                                        >
                                          <ThumbsUp className="h-3 w-3 mr-1" />
                                          Approve
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              // Instagram-like stacked cards for multiple products
                              <div className="relative">
                                <div 
                                  className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
                                  onClick={() => setExpandedItem(messageItems[0].id)}
                                >
                                  <div className="relative">
                                    <img 
                                      src={messageItems[0].product.images[0]} 
                                      alt={messageItems[0].product.title} 
                                      className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full h-6 w-6 flex items-center justify-center">
                                      <span className="text-xs">{messageItems.length}</span>
                                    </div>
                                  </div>
                                  <div className="p-3">
                                    <h3 className="font-medium text-sm truncate">{messageItems[0].product.title}</h3>
                                    <div className="flex items-center mt-1 justify-between">
                                      <div className="text-primary font-medium">
                                        ${(messageItems[0].product.discountedPrice / 100).toFixed(2)}
                                      </div>
                                      <div>
                                        <span className="text-xs text-gray-500">+{messageItems.length - 1} more</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Stacked effect */}
                                <div className="absolute top-1 right-1 left-1 bottom-1 bg-gray-100 rounded-lg -z-10"></div>
                                <div className="absolute top-2 right-2 left-2 bottom-2 bg-gray-200 rounded-lg -z-20"></div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Message Input */}
            <div className="bg-white p-3 border-t">
              <div className="flex items-center gap-2 max-w-3xl mx-auto">
                <Button variant="ghost" size="icon">
                  <Image className="h-5 w-5 text-gray-500" />
                </Button>
                <Input 
                  placeholder="Type a message..." 
                  className="flex-1"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button size="icon" onClick={handleSendMessage}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Members Sidebar - Shown based on state */}
          <Sheet open={isMembersPanelOpen} onOpenChange={setIsMembersPanelOpen}>
            <SheetContent className="w-[300px] sm:w-[400px] p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Group Members</SheetTitle>
                <SheetDescription>
                  {members.length} members in this group
                </SheetDescription>
              </SheetHeader>
              <div className="overflow-y-auto h-full pb-20">
                <div className="p-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setInvitingUsers(true)}
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Invite New Members
                  </Button>
                </div>
                <div className="pt-2">
                  {members.map((member) => (
                    <div key={member.id} className="flex items-center px-4 py-3 hover:bg-gray-50">
                      <Avatar className="h-10 w-10 mr-3 relative">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name[0]?.toUpperCase()}</AvatarFallback>
                        {/* {member.isOnline && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                        )} */}
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{member.name}</div>
                        {/* <div className="text-xs text-gray-500">
                          {member.isOnline ? 'Online' : 'Last seen recently'}
                        </div> */}
                      </div>
                      {currentGroup.creator === member.id && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Admin
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Product Preview Dialog */}
        <Dialog 
          open={!!expandedItem} 
          onOpenChange={(open) => !open && setExpandedItem(null)}
        >
          <DialogContent className="max-w-3xl">
            {expandedItem && (() => {
              // Find the message that contains this item
              const message = messages.find(msg => msg.items.includes(expandedItem));
              if (!message) return null;
              
              const items = getItemsByIds(message.items);
              const expandedItemData = items.find(item => item.id === expandedItem);
              const expandedItemIndex = items.findIndex(item => item.id === expandedItem);
              
              return (
                <>
                  <DialogHeader>
                    <DialogTitle>{expandedItemData?.product.title}</DialogTitle>
                    <DialogDescription>
                      Shared by {getMemberByUserId(message.sender).name}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                    <div>
                      <img 
                        src={expandedItemData?.product.images[0]} 
                        alt={expandedItemData?.product.title} 
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{expandedItemData?.product.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{expandedItemData?.product.brand}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold">
                          ${(expandedItemData?.product.discountedPrice / 100).toFixed(2)}
                        </span>
                        {expandedItemData?.product.price !== expandedItemData?.product.discountedPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${(expandedItemData?.product.price / 100).toFixed(2)}
                          </span>
                        )}
                        {expandedItemData?.product.discountPercentage > 0 && (
                          <span className="text-xs text-green-500 font-medium bg-green-50 px-2 py-1 rounded">
                            {expandedItemData.product.discountPercentage}% OFF
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm mb-4">{expandedItemData?.product.description}</p>
                      
                      {expandedItemData?.product.sizes && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Available Sizes</h4>
                          <div className="flex gap-2">
                            {expandedItemData.product.sizes.map((size) => (
                              <div key={size} className="border border-gray-300 px-3 py-1 rounded text-sm">
                                {size}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-2 mt-6">
                        {expandedItemData?.approvals.includes(currentUser?.id || 'user-1') ? (
                          <Button variant="secondary" className="w-full" disabled>
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            Approved
                          </Button>
                        ) : (
                          <Button 
                            className="w-full" 
                            onClick={() => {
                              handleApproveItem(expandedItemData?.id);
                              setExpandedItem(null);
                            }}
                          >
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* If there are multiple items, show thumbnails to navigate between them */}
                  {items.length > 1 && (
                    <div className="border-t pt-4">
                      <h4 className="text-sm font-medium mb-2">More items in this share</h4>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {items.map((item, index) => (
                          <div 
                            key={item.id}
                            onClick={() => setExpandedItem(item.id)}
                            className={`cursor-pointer border-2 rounded overflow-hidden flex-shrink-0 w-16 h-16 ${
                              item.id === expandedItem ? 'border-primary' : 'border-transparent'
                            }`}
                          >
                            <img 
                              src={item.product.images[0]} 
                              alt={item.product.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </DialogContent>
        </Dialog>
        
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