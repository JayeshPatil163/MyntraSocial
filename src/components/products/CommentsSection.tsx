
import { useState } from 'react';
import { Comment, Product } from '@/lib/types';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Send, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

interface CommentsSectionProps {
  product: Product;
  onAddComment: (comment: Comment) => void;
}

const CommentsSection = ({ product, onAddComment }: CommentsSectionProps) => {
  const { user, isAuthenticated } = useAuth();
  const [commentText, setCommentText] = useState('');
  const comments = product.comments || [];

  const handleAddComment = () => {
    if (!commentText.trim() || !isAuthenticated || !user) return;

    const newComment: Comment = {
      id: crypto.randomUUID(),
      userId: user.id,
      userName: user.name,
      userAvatar: user.avatar,
      text: commentText.trim(),
      timestamp: new Date()
    };

    onAddComment(newComment);
    setCommentText('');
  };

  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <MessageCircle className="mr-2" />
        <h3 className="text-lg font-medium">Comments ({comments.length})</h3>
      </div>

      {isAuthenticated ? (
        <div className="flex gap-2 mb-4">
          <Avatar className="w-8 h-8">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback>
              <User size={16} />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 flex gap-2">
            <Textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              className="min-h-[60px] flex-1"
            />
            <Button 
              size="sm" 
              onClick={handleAddComment} 
              disabled={!commentText.trim()}
              className="h-10"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 p-4 rounded-md mb-4 text-center">
          Please log in to add comments
        </div>
      )}

      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={comment.userAvatar} alt={comment.userName} />
                <AvatarFallback>
                  <User size={16} />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.userName}</span>
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true })}
                  </span>
                </div>
                <p className="text-sm mt-1">{comment.text}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">
            No comments yet. Be the first to comment!
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
