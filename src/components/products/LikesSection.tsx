
import { Like, Product } from '@/lib/types';
import { ThumbsUp, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useAuth } from '@/contexts/AuthContext';

interface LikesSectionProps {
  product: Product;
  onLike: () => void;
  onUnlike: () => void;
  isLiked: boolean;
}

const LikesSection = ({ product, onLike, onUnlike, isLiked }: LikesSectionProps) => {
  const { isAuthenticated } = useAuth();
  const likes = product.likes || [];

  const handleToggleLike = () => {
    if (!isAuthenticated) return;
    if (isLiked) {
      onUnlike();
    } else {
      onLike();
    }
  };

  return (
    <div className="flex items-center mt-4">
      <button
        onClick={handleToggleLike}
        className={`flex items-center gap-1 px-4 py-2 rounded-full border ${
          isLiked ? 'bg-primary/10 border-primary' : 'border-gray-300'
        }`}
        disabled={!isAuthenticated}
      >
        <ThumbsUp
          size={18}
          className={isLiked ? 'fill-primary text-primary' : ''}
        />
        <span>{isLiked ? 'Liked' : 'Like'}</span>
      </button>
      
      {likes.length > 0 && (
        <Popover>
          <PopoverTrigger asChild>
            <button className="ml-3 text-sm text-gray-600 flex items-center hover:underline">
              {likes.length} {likes.length === 1 ? 'person' : 'people'} liked this
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-2">
            <h4 className="font-medium mb-2 px-2">Liked by</h4>
            <div className="max-h-60 overflow-y-auto">
              {likes.map((like, index) => (
                <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={like.userAvatar} alt={like.userName} />
                    <AvatarFallback>
                      <User size={12} />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{like.userName}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default LikesSection;
