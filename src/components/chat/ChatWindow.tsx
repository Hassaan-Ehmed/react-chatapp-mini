import { useState } from 'react';
import { Send, Image, Mic, X, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Message, User } from '@/types';

interface ChatWindowProps {
  messages: Message[];
  currentUser: User;
  otherUser: User;
  onSendMessage: (content: string, type: Message['type']) => void;
  onBack?: () => void;
}

export function ChatWindow({ messages, currentUser, otherUser, onSendMessage, onBack }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim(), 'text');
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-full w-full flex-col ">
      <div className="flex items-center border-b p-4 bg-white">
        {onBack && (
          <Button
            variant="ghost"
            size="icon"
            className="mr-2 md:hidden"
            onClick={onBack}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <button 
          onClick={() => setShowProfile(true)}
          className="flex flex-1 items-center space-x-3"
        >
          <Avatar>
            <AvatarImage src={otherUser.avatar} />
            <AvatarFallback>{otherUser.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <span className="font-medium">{otherUser.name}</span>
            <span className="text-sm text-muted-foreground">
              {otherUser.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => {
            const isCurrentUser = message.senderId === currentUser.id;
            return (
              <div
                key={message.id}
                className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-end space-x-2 max-w-[70%]`}>
                  {!isCurrentUser && (
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={otherUser.avatar} />
                      <AvatarFallback>{otherUser.name[0]}</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={` rounded-lg p-3 ${
                      isCurrentUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {message.type === 'text' && <p>{message.content}</p>}
                    {message.type === 'image' && (
                      <img 
                        src={message.content} 
                        alt="Shared image" 
                        className="rounded max-w-sm"
                      />
                    )}
                    {message.type === 'video' && (
                      <video 
                        controls 
                        className="rounded max-w-sm"
                      >
                        <source src={message.content} type="video/mp4" />
                      </video>
                    )}
                    {message.type === 'voice' && (
                      <audio controls>
                        <source src={message.content} type="audio/mpeg" />
                      </audio>
                    )}
                    <span className="mt-1 block text-xs opacity-70">
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      <div className="border-t p-4 ">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <Image className="h-5 w-5" />
            <input
              id="file-input"
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={(e) => {
                // Handle file upload
              }}
            />
          </Button>
          <Input
            placeholder="Type a message..."
            value={newMessage}  
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-white active:border-none"
          />
          {newMessage.trim() ? (
            <Button onClick={handleSend}>
              <Send className="h-5 w-5" />
            </Button>
          ) : (
            <Button
              variant={isRecording ? "destructive" : "default"}
              onClick={() => setIsRecording(!isRecording)}
            >
              {isRecording ? <X className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      <Dialog open={showProfile} onOpenChange={setShowProfile}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={otherUser.avatar} />
              <AvatarFallback>{otherUser.name[0]}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">{otherUser.name}</h2>
            {otherUser.bio && (
              <p className="text-center text-muted-foreground">{otherUser.bio}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}