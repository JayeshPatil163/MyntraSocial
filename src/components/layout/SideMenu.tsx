
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  ShoppingBag,
  Users, 
  Compass, 
  User,
  MessageSquare, 
  Heart, 
  Menu, 
  ChevronLeft,
  ChevronRight,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface MenuItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isExpanded: boolean;
  isActive: boolean;
}

const MenuItem = ({ to, icon, label, isExpanded, isActive }: MenuItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={to}>
            <Button
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start mb-1",
                isExpanded ? "px-4" : "px-2 justify-center"
              )}
            >
              <div className={cn(
                "flex items-center",
                isExpanded ? "justify-start" : "justify-center w-full"
              )}>
                <div className={isExpanded ? "mr-2" : ""}>{icon}</div>
                {isExpanded && <span>{label}</span>}
              </div>
            </Button>
          </Link>
        </TooltipTrigger>
        {!isExpanded && <TooltipContent side="right">{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};

interface SideMenuProps {
  className?: string;
}

const SideMenu = ({ className }: SideMenuProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div 
      className={cn(
        "h-full bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        isExpanded ? "w-56" : "w-16",
        className
      )}
    >
      {/* Header with collapse button */}
      <div className="flex justify-end p-2 border-b border-gray-100">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-8 w-8"
        >
          {isExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </Button>
      </div>
      
      {/* User profile section */}
      {user && (
        <div className={cn(
          "py-4 flex items-center border-b border-gray-100",
          isExpanded ? "px-4 justify-start" : "px-2 justify-center"
        )}>
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user?.name?.[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
          {isExpanded && (
            <div className="ml-3 overflow-hidden">
              <p className="font-medium text-sm truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">@{user.username || user.name?.toLowerCase().replace(' ', '')}</p>
            </div>
          )}
        </div>
      )}
      
      {/* Menu sections */}
      <div className="flex-1 overflow-y-auto py-4 px-2">
        <div className="mb-6">
          {isExpanded && <p className="text-xs text-gray-500 mb-2 px-3 uppercase font-semibold">Shopping</p>}
          <MenuItem 
            to="/" 
            icon={<Home size={20} />} 
            label="Home" 
            isExpanded={isExpanded}
            isActive={isActive('/')}
          />
          <MenuItem 
            to="/discover"
            icon={<Compass size={20} />} 
            label="Discover" 
            isExpanded={isExpanded}
            isActive={isActive('/discover')}
          />
          <MenuItem 
            to="/cart" 
            icon={<ShoppingBag size={20} />} 
            label="Shopping Bag" 
            isExpanded={isExpanded}
            isActive={isActive('/cart')}
          />
          <MenuItem 
            to="/wishlist" 
            icon={<Heart size={20} />} 
            label="Wishlist" 
            isExpanded={isExpanded}
            isActive={isActive('/wishlist')}
          />
        </div>
        
        <div className="mb-6">
          {isExpanded && <p className="text-xs text-gray-500 mb-2 px-3 uppercase font-semibold">Community</p>}
          <MenuItem 
            to="/community" 
            icon={<MessageSquare size={20} />} 
            label="Myntra Community" 
            isExpanded={isExpanded}
            isActive={isActive('/community')}
          />
          <MenuItem 
            to="/groups" 
            icon={<Users size={20} />} 
            label="Shopping Groups" 
            isExpanded={isExpanded}
            isActive={isActive('/groups')}
          />
          <MenuItem 
            to="/profile" 
            icon={<User size={20} />} 
            label="Profile" 
            isExpanded={isExpanded}
            isActive={isActive('/profile')}
          />
        </div>
      </div>
      
      {/* Footer with settings */}
      <div className="py-2 px-2 border-t border-gray-100">
        <MenuItem 
          to="/settings" 
          icon={<Settings size={20} />} 
          label="Settings" 
          isExpanded={isExpanded}
          isActive={isActive('/settings')}
        />
      </div>
    </div>
  );
};

export default SideMenu;
