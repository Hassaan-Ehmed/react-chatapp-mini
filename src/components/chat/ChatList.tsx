import { useState } from 'react';
import { CirclePlus, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from '@/lib/utils';
import type { Chat } from '@/types';
import { Button } from '../ui/button';

interface ChatListProps {
  chats: Chat[];
  selectedChatId?: string;
  onChatSelect: (chatId: string) => void;
}

export function ChatList({ chats, selectedChatId, onChatSelect }: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chats.filter(chat => 
    chat.participants.some(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col h-full border-r ">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground focus:outline outline-[#00d65d]" />
          <Input
            placeholder="Search chats..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-1  flex justify-center items-center">
        <div className=""> 
          {/* space-y-2 p-2 */}

        <div className="text-1xl font-bold tracking-tighter flex h- w-full  justify-center items-center absolute bottom-10  ">

        <Button  className='bg-white hover:bg-white text-[#00d65d] shadow-lg'>Start new chat &nbsp; <CirclePlus color="#00d65d"  /></Button>
        </div>

          {/* {filteredChats.map((chat) => {
            const otherParticipant = chat.participants[1]; // Assuming current user is always first
            return (
              <button
                key={chat.id}
                onClick={() => onChatSelect(chat.id)}
                className={cn(
                  "w-full flex items-center space-x-4 p-3  rounded-lg hover:bg-accent transition-colors",
                  selectedChatId === chat.id && "bg-accent"
                )}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={otherParticipant.avatar} />
                    <AvatarFallback>{otherParticipant.name[0]}</AvatarFallback>
                  </Avatar>
                  <span 
                    className={cn(
                      "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background",
                      otherParticipant.isOnline ? "bg-green-500" : "bg-gray-400"
                    )} 
                  />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex justify-between">
                    <span className="font-medium">{otherParticipant.name}</span>
                    {chat.lastMessage && (
                      <span className="text-xs text-muted-foreground">
                        {new Date(chat.lastMessage.timestamp).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    )}
                  </div>
                  {chat.lastMessage && (
                    <p className="text-sm text-muted-foreground truncate">
                      {chat.lastMessage.content}
                    </p>
                  )}
                </div>
                {chat.unreadCount > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                    {chat.unreadCount}
                  </span>
                )}
              </button>
            );
          })} */}
        </div>
      </ScrollArea>
    </div>
  );
}